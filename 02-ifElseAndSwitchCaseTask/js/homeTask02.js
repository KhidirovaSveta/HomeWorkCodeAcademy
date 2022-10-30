/*2. 3 ədəd verilib. Bu 3 ədəd içindən cəmləri ən böyük olan 2 ədədi qaytaran proqram tərtib edin. 
Məsələn: a=1, b=2, c=3 daxil etdikdə cavab bu şəkildə olmalıdır: Big sum result 2 and 3 */


let a = 1
let b = 2
let c = 3

if (a>b && b>c && c<a ) {
    console.log("Big sum result", b + " and "+ a)
}
if (a>b && b<c && c<a ) {
    console.log("Big sum result", c + " and "+ a)
}
if (b>a && a<c && c<b ) {
    console.log("Big sum result", c + " and "+ b)
}
if (c>a && a>b && c>b ) {
    console.log("Big sum result", a + " and "+ c)
}
if (c<a && a<b && c<b ) {
    console.log("Big sum result", a + " and "+ b)
}
if (c>a && a<b && c>b ) {
    console.log("Big sum result", b + " and "+ c)
}