/*2. Daxil edilən ədədin sadə ədəd olub olmadığını təyin edən proqram tərtib edin.
Məsələn a=3 cavab sadədir. a=81 cavab - mürəkkəbdir.*/

let a=56
let sade = true;
if (a==0 || a==1) {
    console.log("ne sade, ne de murekkeb deyil")
} else {
for (let i = 2; i < a; i++) {
    if (a % i == 0) {
        sade = false;
        break;
    }
}
if (sade) {
    console.log(" sadedir");
} else {
    console.log(" murekkebdir");
}
}