# Consoletant

An attempt to provide better filtering/sorting of `console` messages in Chrome.

## TODO

1. Add filtering functionality
2. Handle functions/DOM nodes being logged (can't be cloned with structured clone algorithm used by postMessage)
    - .toString() functions and send as a string
    - Collect useful info about a DOM node, and send just enough info that can be used to render a representation in the UI
3. ([If fixed by Chromium team](https://bugs.chromium.org/p/chromium/issues/detail?id=602063)) Use event listener for console messages instead of monkey-patching `console`
4. (Stretch) Support for XHR notifications like normal console
