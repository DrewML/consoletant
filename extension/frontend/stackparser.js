const patterns = {
    fileName: /\(?<?([^>][a-z0-9:/.]+)/i,
    context: /at ([\w.]+)/i,
    lineColumn: /:(\d+):(\d+)\)?/i
};

export default function parse(stack) {
    // Ignore first two lines, which are
    // 1. "Error"
    // 2. The callsite of our internal invocation of the real console.log
    const [, , ...stackLines] = stack.split('\n');
    return stackLines.map(stackLineToPieces);
}

function stackLineToPieces(stackLine) {
    const { line, column } = lineAndColumn(stackLine);
    return {
        fileName: fileName(stackLine),
        callContext: callContext(stackLine),
        line,
        column
    };
}

function fileName(stackLine) {
    const cleaned = stackLine
        .replace(callContext(stackLine), '')
        .replace('at ', '')
        .replace(patterns.lineColumn, '');

    const [, fileName] = (patterns.fileName.exec(cleaned) || []);

    return fileName
}

function callContext(stackLine) {
    const [, path = ''] = (patterns.context.exec(stackLine) || []);
    return path;
}

function lineAndColumn(lineStr) {
    const [, line, column] = (patterns.lineColumn.exec(lineStr) || []);
    return {
        line: Number(line),
        column: Number(column)
    };
}
