import deepCloneWith from 'lodash.clonedeepwith';

export default function clean(obj) {
    return deepCloneWith(obj, value => {
        if (isDOMRelated(value)) {
            return {
                __consoletant: true,
                type: 'DOM',
                cleaned: {}
            };
        }

        const type = getTypeName(value);
        if (type === 'Function' || type === 'RegExp') {
            return {
                __consoletant: true,
                type,
                cleaned: value.toString()
            };
        }
    });
}

function getTypeName(val) {
    const descriptor = Object.prototype.toString.call(val);
    return /\[object (\w+)]/.exec(descriptor)[1];
}

function isDOMRelated(val) {
    // The most reliable way I've found to verify something
    // is DOM related, unfortunately. Need to check for anything
    // DOM related, including but not limited to:
    // -NodeList
    // -Comment
    // -Text
    // -DocumentFragment
    // -CDATASection
    // -DocumentType
    // -etc. etc.
    return val && !!val.DOCUMENT_NODE;
}
