/* 4.  3 ədəd verilib. Bu ədədlərin birləşməsindən yaranan ən böyük və ən kiçik 3 rəqəmli ədədi tapan proqram tərtib edin. 
Proqramın qaytardığı cavab number tipində olmalıdır. 
Yəni ki, aldığımız cavabı başqa bir ədədlə toplaya, çıxa və s. edə bilərik.  
Məsələn: a=4, b=5, c=6 daxil etdikdə cavab bu şəkildə olmalıdır:
Big number: 654 
Little number: 456 
 */

let a = 4
let b = 5
let c = 6

if (a>b && b>c && c<a ) {
    console.log("Big number:", a + ""+ b+ ""+c)
    console.log("Little number:", c + ""+ b + "" + a)
}
if (a>b && b<c && c<a ) {
    console.log("Big number:", a + ""+ c+ ""+b)
    console.log("Little number:", b + ""+ c + "" + a)
}
if (b>a && b>c && c>a ) {
    console.log("Big number:", b + ""+ c+ ""+a)
    console.log("Little number:", a + ""+ c + "" + b)
}
if (b>a && b>c && c<a ) {
    console.log("Big number:", b + ""+ a+ ""+c)
    console.log("Little number:", c + ""+ a + "" + b)
}
if (c>a && b<c && b>a ) {
    console.log("Big number:", c + ""+ b+ ""+a)
    console.log("Little number:", a + ""+ b + "" + c)
}
if (c>b && b<a && c>a ) {
    console.log("Big number:", c + ""+ a+ ""+b)
    console.log("Little number:", b + ""+ a + "" + c)
}