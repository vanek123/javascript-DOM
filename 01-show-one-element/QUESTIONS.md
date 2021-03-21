# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

Kad es atjaunoju lapu, teksts bija paslēpts ,tāpēc ka atjaunojot lapu, tā atjauno visu un tādēļ teksts ir paslēpts.

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

Nē, links nerāda tekstu. Funkcija `window.addEventListener("load", function(){` (and the closing `})`) ielādē visu Javascript kodu, pēc tam kad lapa tika ielādēta.

---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

`addEventListener` klausās notikumu, kuru mēs izvēlamies un pēc tam, kad notikums notika, mēs sakam, ko darīt. 
