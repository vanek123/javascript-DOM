# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

If you refresh the page, the text is hidden again because it restores everything back and text is still hidden.

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

No, the link doesn't reveal the text. `window.addEventListener("load", function(){` (and the closing `})`) loads everything in JavaScript when it's done loading.

---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

`addEventListener` is listening to the event we want and then after the event happens, we tell it what to do. 
