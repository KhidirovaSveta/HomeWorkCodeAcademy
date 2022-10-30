/* 7. Düzbucaqlı üçbucağın katetləri və hipotenuzunun uzunluğu verilib.
Verilən məlumatlara əsəsən bu üçbucağın düzbucaqlı üçbucaq olub olmadığını yoxlayan proqram tərtib edin.
Məsələn: katet1=3, katet2=4, hipotenuz=5 yazdıqda cavab bu şəkildə olmalıdır: 
Result: düzbucaqlı üçbucaqdır
Məsələn: katet1=3, katet2=3, hipotenuz=8 yazdıqda cavab bu şəkildə olmalıdır:
Result: düzbucaqlı üçbucaq deyil.
*/

let kat1=3
let kat2=4
let hip=5

if ((kat1**2)+(kat2**2)==(hip**2)){
    console.log("Duzbucaqlidir")
}
else if ((kat1*2)+(kat2*2)!== (hip**2)) {
    console.log("Duzbucaqli deyil")
}