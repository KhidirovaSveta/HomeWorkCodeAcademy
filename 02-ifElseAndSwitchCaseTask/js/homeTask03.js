/* 3. 3 ədəd verilib. Bu ədədləri artan və azalan sıra ilə düzün. Məsələn: a=1, b=2, c=3 daxil etdikdə cavab bu şəkildə olmalıdır:
Azalan sıra: 3, 2, 1 
Artan sıra: 1, 2, 3 
*/

let a = 1
let b = 2
let c = 3 

if (a>b && b>c && c<a ) {
    console.log("Azalan sıra:", a + ", " + b + ", " + c)
    console.log("Artan sıra:", c + ", " + b + ", " + a)
}
 if (a>b && b<c && c<a ) {
    console.log("Azalan sıra:", a + ", " + c + ", " + b)
    console.log("Artan sıra:", b + ", " + c + ", " + a)
}
if (b>a && a>c && c<b ) {
    console.log("Azalan sıra:", b + ", " + a + ", " + c)
    console.log("Artan sıra:", c + ", " + a + ", " + b)
}
if (b>a && a<c && c<b ) {
    console.log("Azalan sıra:", b + ", " + c + ", " + a)
    console.log("Artan sıra:", a + ", " + c + ", " + b)
}
if (c>a && a>b && b<c ) {
    console.log("Azalan sıra:", c + ", " + a + ", " + b)
    console.log("Artan sıra:", b + ", " + a + ", " + c)
}
if (c>a && b>a && b<c ) {
    console.log("Azalan sıra:", c + ", " + b + ", " + a)
    console.log("Artan sıra:", a + ", " + b + ", " + c)
}
