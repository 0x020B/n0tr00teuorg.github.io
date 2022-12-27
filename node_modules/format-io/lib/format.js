'use strict';

module.exports.addSlashToEnd = (path) => {
    if (!path)
        throw Error('path could not be empty!');
    
    const length  = path.length - 1;
    const isSlash = path[length] === '/';
    
    if (isSlash)
        return path;
    
    return `${path}/`;
};

/** Функция получает короткие размеры
 * конвертируя байт в килобайты, мегабойты,
 * гигайбайты и терабайты
 * @pSize - размер в байтах
 */
module.exports.size = (size) => {
    const isNumber = typeof size === 'number';
    
    const l1KB = 1024;
    const l1MB = l1KB * l1KB;
    const l1GB = l1MB * l1KB;
    const l1TB = l1GB * l1KB;
    const l1PB = l1TB * l1KB;
    
    if (!isNumber)
        return size;
        
    if (size < l1KB)
        return size + 'b';
    
    if (size < l1MB)
        return (size / l1KB).toFixed(2) + 'kb';
    
    if (size < l1GB)
        return (size / l1MB).toFixed(2) + 'mb';
    
    if (size < l1TB)
        return (size / l1GB).toFixed(2) + 'gb';
    
    if (size < l1PB)
        return (size / l1TB).toFixed(2) + 'tb';
    
    return (size / l1PB).toFixed(2) + 'pb';
};

module.exports.permissions = require('./mode');

