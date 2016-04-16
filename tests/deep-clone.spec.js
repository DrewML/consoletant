import test from 'ava';
import clean from '../extension/frontend/utils/clean';

test('Clones object with primitives', t => {
    const obj = {
        a: 1,
        b: true,
        c: undefined,
        d: null,
        e: {
            f: 'ohhaaayyy'
        }
    };
    t.deepEqual(clean(obj), obj);
    t.not(clean(obj), obj);
});

test('Cleans function', t => {
    const obj = {
        a: function test() {}
    };
    t.is(clean(obj).a.cleaned, obj.a.toString());
});

test('Cleans regular expression', t => {
    const obj = {
        a: new RegExp('hello.+'),
        b: /hello.+/
    };
    t.is(clean(obj).a.cleaned, obj.a.toString());
    t.is(clean(obj).b.cleaned, obj.b.toString());
});
