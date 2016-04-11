export const noCallContext = `Error
    at Console.console.log (<anonymous>:14:27)
    at <anonymous>:2:9
    at Object.InjectedScript._evaluateOn (<anonymous>:878:140)
    at Object.InjectedScript._evaluateAndWrap (<anonymous>:811:34)
    at Object.InjectedScript.evaluate (<anonymous>:667:21)`;

export const withCallContext = `Error
    at Console.console.log (<anonymous>:14:27)
    at abc (<anonymous>:2:25)
    at <anonymous>:2:1
    at Object.InjectedScript._evaluateOn (<anonymous>:878:140)
    at Object.InjectedScript._evaluateAndWrap (<anonymous>:811:34)
    at Object.InjectedScript.evaluate (<anonymous>:667:21)`;

export const withFilePath = `Error
    at Console.console.log (<anonymous>:13:15)
    at l (http://redux.js.org/gitbook/app.js:1:202439)
    at HTMLAnchorElement.p (http://redux.js.org/gitbook/app.js:1:203713)
    at HTMLDocument.jQuery.event.dispatch (http://redux.js.org/gitbook/app.js:1:67344)
    at HTMLDocument.m.handle (http://redux.js.org/gitbook/app.js:1:63770)`;
