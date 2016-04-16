# Consoletant

An attempt to provide better filtering/sorting of `console` messages in Chrome.

## TODO

1. Add filtering functionality
2. Handle functions/DOM nodes being logged (can't be cloned with structured clone algorithm used by postMessage)
    - .toString() functions and send as a string
    - Collect useful info about a DOM node, and send just enough info that can be used to render a representation in the UI
3. ([If fixed by Chromium team](https://bugs.chromium.org/p/chromium/issues/detail?id=602063)) Use event listener for console messages instead of monkey-patching `console`
4. Support for XHR notifications like normal console [Info](https://developer.chrome.com/extensions/webRequest#event-onCompleted) or [Info](https://developer.chrome.com/extensions/devtools_network#event-onRequestFinished)
5. Allow Enabling/Disabling of history in panel on page nav
6. Keep a queue of console calls in the content script, until a connection is first made with the devtools (won't happen until devtools is opened, and the user switches to our panel)
