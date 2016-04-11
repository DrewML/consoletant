# Consoletant

An attempt to provide better filtering/sorting of `console` messages in Chrome.

## TODO

1. Build panel UI
2. Implement capturing of other console methods (not just log)
3. ([If fixed by Chromium team](https://bugs.chromium.org/p/chromium/issues/detail?id=602063)) Use event listener for console messages instead of monkey-patching `console`
4. (Stretch) Support for XHR notifications like normal console
5. Research [Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) as a possible alternative to monkey-patching, if #4 isn't possible
