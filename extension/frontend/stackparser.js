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
    const fileNamePattern = /at [\w.]*\s*\(?[<(]([\w.:/-]+)>?\)?:/i;
    const [, fileName] = (fileNamePattern.exec(stackLine) || []);

    return fileName
}

function callContext(stackLine) {
    const contextPattern = /at ([\w.]+)/i;
    const [, path = ''] = (contextPattern.exec(stackLine) || []);

    return path;
}

function lineAndColumn(lineStr) {
    const lineColumnPattern = /:(\d+):(\d+)\)?/i;
    const [, line, column] = (lineColumnPattern.exec(lineStr) || []);

    return {
        line: Number(line),
        column: Number(column)
    };
}
