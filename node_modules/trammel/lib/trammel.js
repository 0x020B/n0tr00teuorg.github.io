'use strict';

const {promisify} = require('util');
const {lstat, readdir} = require('fs/promises');
const path = require('path');
const {EventEmitter} = require('events');

const format = require('format-io');
const tryToCatch = require('try-to-catch');

/*  The lstat() function shall be equivalent to stat(),
    except when path refers to a symbolic link. In that case lstat()
    shall return information about the link, while stat() shall return
    information about the file the link references.
*/

module.exports = promisify(async (dir, options, callback) => {
    const emitter = new EventEmitter();
    
    let total = 0;
    let type;
    
    if (!callback) {
        callback = options;
        options = {};
    } else {
        type = options.type;
    }
    
    emitter.on('file', (file, stat) => {
        total += stat.size;
    });
    
    emitter.on('error', callback);
    
    emitter.on('end', () => {
        if (type === 'raw')
            return callback(null, total);
        
        callback(null, format.size(total));
    });
    
    await processDir(dir, options, emitter);
});

async function processDir(dir, options, emitter) {
    const {stopOnError} = options;
    let wasError = false;
    let asyncRunning = 0;
    let fileCounter = 1;
    
    const execCallBack = () => {
        const isError = wasError && stopOnError;
        const isDone = !fileCounter && !asyncRunning;
        
        if (!isDone || isError)
            return;
        
        emitter.emit('end');
    };
    
    await getDirInfo(dir);
    
    async function getDirInfo(dir) {
        const [error, stat] = await tryToCatch(lstat, dir);
        
        --fileCounter;
        
        if (error && stopOnError) {
            wasError = true;
            emitter.emit('error', error);
            return;
        }
        
        if (error)
            return execCallBack();
        
        const isDir = stat.isDirectory();
        
        if (!isDir) {
            emitter.emit('file', dir, stat);
            execCallBack();
            return;
        }
        
        ++asyncRunning;
        
        execCallBack();
        
        const [readError, files] = await tryToCatch(readdir, dir);
        
        asyncRunning--;
        
        if (!readError)
            return await onReaddir(dir, files);
        
        if (readError && stopOnError) {
            wasError = true;
            emitter.emit('error', readError);
        }
        
        execCallBack();
    }
    
    async function onReaddir(dir, files) {
        const n = files.length;
        
        fileCounter += n;
        
        if (!n)
            return execCallBack();
        
        for (const file of files) {
            const dirPath = path.join(dir, file);
            await getDirInfo(dirPath);
        }
    }
}

