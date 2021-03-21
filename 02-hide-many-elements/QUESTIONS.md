# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

Es izmantoju .getElementByClassName(). Iekavās ierakstīju klasi, kuru vajadzēja paņemt. Izmantoju funkciju for, kurā uztaisīju jauno mainīgo i = 0 un salīdzināju to ar mainīgā hideMe teksta garumu (i < hideMe.length) un pēc tam i++.

---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

Nē, izmantoju loop'u. Uztaisīju mainīgo hideMe un pēc tam izmantoju funkciju for, tajā uztaisīju jauno mainīgo i = 0 un salīdzināju to ar mainīgā hideMe teksta garumu (i < hideMe.length) un pēc tam i++. Un pēc tam teksta displeju samainīju uz 'none'.