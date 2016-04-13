import test from 'ava';
import deepClone from '../extension/frontend/utils/deep-clone';

test('False when obj param is not an object', t => {
    const cloned = deepClone(null);
    t.false(cloned);
});

test('Does not return reference to existing object', t => {
    const example = {};
    t.not(deepClone(example), example);
});

test('Clone shallow object with primitives', t => {
    const example = {
        a: 1,
        b: '2',
        c: undefined,
        d: null,
        e: false
    };

    const cloned = deepClone(example);
    t.deepEqual(example, cloned);
});

test('Clone object with primitives and nested basic objects', t => {
    const example = {
        a: {
            b: {
                c: 'ohhai'
            }
        }
    }

    const cloned = deepClone(example);
    t.deepEqual(example, cloned);
});

test('Can replace values with anything except undefined', t => {
    const example = {
        a: {
            b: 'haha',
            c: false,
            d: {}
        }
    };
    const expected = {
        a: {
            b: 'replaced',
            c: true,
            d: null
        }
    };

    const cloned = deepClone(example, (key, val) => {
        if (val === 'haha') return 'replaced';
        if (val === false) return true;
        if (key === 'd') return null;
    });
});
