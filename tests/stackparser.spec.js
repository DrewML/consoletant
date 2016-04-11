import test from 'ava';
import parse from '../extension/frontend/stackparser';
import * as stack from './fixtures/stacks';

test('Excludes call to console method in trace', t => {
    const [firstLine] = parse(stack.noCallContext);
    t.not(firstLine.callContext, 'Console.console.log');
});

test('Correct line/column info', t => {    
    const [firstLine] = parse(stack.noCallContext);
    t.is(firstLine.line, 2);
    t.is(firstLine.column, 9);
});

// TODO: Use stack trace with actual file names
test('Correct filename', t => {
    const [firstLine] = parse(stack.noCallContext);
    t.is(firstLine.fileName, 'anonymous');
});

test('Correct call context', t => {
    const [result] = parse(stack.noCallContext);
    t.is(result.callContext, '');

    const [result2] = parse(stack.withCallContext);
    t.is(result2.callContext, 'abc');
});

test('Correct number of lines', t => {
    const results = parse(stack.noCallContext);
    t.is(results.length, 4);
});
