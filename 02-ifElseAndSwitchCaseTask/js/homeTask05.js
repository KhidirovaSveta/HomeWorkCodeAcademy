/* 5.  3 rəqəmli hər hansı bir ədəd verilib. Həmin ədədin hansı rəqəmlərdən ibarət olduğunu bizə qaytaran bir proqram tərtib edin.
Məsələn: number=652 daxil etdikdə  cavab bu şəkildə olmalıdır:
Result: 6, 5, 2 */

let number = 652
let a=number%10       //a=2
let b=(number-a)/10   //b=65 
let c=b%10            //c=65%10=5  c=5
let d=(b-c)/10        //d=(65 - 5) /10 = 6
console.log(d,c,a)
