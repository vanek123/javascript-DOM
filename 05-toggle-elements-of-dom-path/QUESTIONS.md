# DOM Atomic 05: Toggle Elements of DOM Path

## Questions

---

> Describe the contract you used for finding the movies to toggle in the DOM. How is this function different from other functions that find elements in the DOM?

Uztaisīju mainīgo toggleMovies izmantojot document.querySelectorAll() un iekavās ierakstīju tagu ul ar klasi second-five un apakštagu li. Pēc tam līdzīgi iepriekšējiem uzdevumiem izmantoju funkciju for un tajā izveidoju mainīgo i=0 un salīdzināju ar toggleMe mainīgā garumu, pēc tam i++(palielināju). Forā izveidoju if un else, lai izmantojot pogu, varētu vai nu parādīt tos elementus vai nu slēpt. Atškirības - izmantoju querySelectorAll() un if else'ā rakstīju nevis block un none, bet list-item un none.