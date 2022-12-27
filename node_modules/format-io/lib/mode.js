'use strict';

const currify = require('currify');

/*
    S_IRUSR   0000400   protection: readable by owner
    S_IWUSR   0000200   writable by owner
    S_IXUSR   0000100   executable by owner
    S_IRGRP   0000040   readable by group
    S_IWGRP   0000020   writable by group
    S_IXGRP   0000010   executable by group
    S_IROTH   0000004   readable by all
    S_IWOTH   0000002   writable by all
    S_IXOTH   0000001   executable by all
*/

const R = {
    name: 'r',
    value: 4,
};

const W = {
    name: 'w',
    value: 2,
};

const X = {
    name: 'x',
    value: 1,
};

const getModeName = currify((value, m) => {
    if (value & m.value)
        return m.name;
    
    return '-';
});

const toStrMode = currify((fn, value) => {
    return [R, W, X]
        .map(fn(value))
        .join('');
});


/**
 * Функция переводит права из цыфрового вида в символьный
 * @param perms - строка с правами доступа
 * к файлу в 8-миричной системе
 */
module.exports.symbolic = (perms) => {
    let permissions = '';
    const is = typeof perms !== 'undefined';
    
    if (!is)
        return permissions;
    
    const permsStr = perms.slice(-3);
    
    /* Переводим в двоичную систему */
    const owner = Number(permsStr[0]).toString(2);
    const group = Number(permsStr[1]).toString(2);
    const all   = Number(permsStr[2]).toString(2);
    
    const allPermissions = [
        owner,
        group,
        all,
    ];
    
    return allPermissions
        .map(toStrMode(getModeName))
        .join(' ');
};

/**
 * Функция конвертирует права доступа к файлам из символьного вида
 * в цыфровой
 */
module.exports.numeric = (perms) => {
    const length = perms && perms.length === 11;
    
    if (!length)
        throw Error('permissions should be in format "xxx xxx xxx"');
    
    const R = 4;
    const W = 2;
    const X = 1;
    const N = 0;
    
    const owner =
        (perms[0]  === 'r' ? R : N) +
        (perms[1]  === 'w' ? W : N) +
        (perms[2]  === 'x' ? X : N);
    
    const group =
        (perms[4]  === 'r' ? R : N) +
        (perms[5]  === 'w' ? W : N) +
        (perms[6]  === 'x' ? X : N);
     
    const all =
        (perms[8]  === 'r' ? R : N) +
        (perms[9]  === 'w' ? W : N) +
        (perms[10] === 'x' ? X : N);
    
    /* добавляем 2 цифры до 5 */
    return '00' + owner + group + all;
};

