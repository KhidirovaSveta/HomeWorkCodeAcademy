// See https://aka.ms/new-console-template for more information

/* 4.  3 ədəd verilib. Bu ədədlərin birləşməsindən yaranan ən böyük və ən kiçik 3 rəqəmli ədədi tapan proqram tərtib edin. 
Proqramın qaytardığı cavab number tipində olmalıdır. 
Yəni ki, aldığımız cavabı başqa bir ədədlə toplaya, çıxa və s. edə bilərik.  
Məsələn: a=4, b=5, c=6 daxil etdikdə cavab bu şəkildə olmalıdır:
Big number: 654 
Little number: 456 
 */

using System;

int a = 4;
int b = 5;
int c = 6;

if (a>b && b>c && c<a ) {
    Console.WriteLine("Big number:"+ " "+ a + "" + b + "" + c);
    Console.WriteLine("Little number:" + " " + c + "" + b + "" + a);
}
if (a > b && b < c && c < a)
{
    Console.WriteLine("Big number:" + " " + a + "" + c + "" + b);
    Console.WriteLine("Little number:" + " " + b + "" + c + "" + a);
}
if (b > a && b > c && c > a)
{
    Console.WriteLine("Big number:" + " " + b + "" + c + "" + a);
    Console.WriteLine("Little number:" + " " + a + "" + c + "" + b);
}
if (b > a && b > c && c < a)
{
    Console.WriteLine("Big number:" + " " + b + "" + a + "" + c);
    Console.WriteLine("Little number:" + " " + c + "" + a + "" + b);
}
if (c > a && b < c && b > a)
{
    Console.WriteLine("Big number:" + " " + c + "" + b + "" + a);
    Console.WriteLine("Little number:" + " " + a + "" + b + "" + c);
}
if (c > b && b < a && c > a)
{
    Console.WriteLine("Big number:" + " " + c + "" + a + "" + b);
    Console.WriteLine("Little number:" + " " + b + "" + a + "" + c);
}