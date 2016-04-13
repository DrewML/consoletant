export default function deepClone(obj, cb = () => {}) {
    if (!isObject(obj)) return false;
    
    const clone = Object.create(null);

    Object.keys(obj).forEach(key => {
        const replacement = cb(key, obj[key]);
        const valToCopy = replacement === undefined ? obj[key] : replacement;

        if (!isObject(obj[key])) {
            clone[key] = valToCopy;
            return;
        }

        clone[key] = deepClone(valToCopy, cb);
    });
    return clone;
}

function isObject(target) {
    return Object.prototype.toString.call(target) === '[object Object]';
}
