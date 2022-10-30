// See https://aka.ms/new-console-template for more information
using System;



/* 3. 3 ədəd verilib. Bu ədədləri artan və azalan sıra ilə düzün. Məsələn: a=1, b=2, c=3 daxil etdikdə cavab bu şəkildə olmalıdır:
Azalan sıra: 3, 2, 1 
Artan sıra: 1, 2, 3 
*/

int a = 1;
int b = 2;
int c = 3; 

if (a>b && b>c && c<a ) {
    Console.WriteLine("Azalan sıra:", a + ", " + b + ", " + c);
    Console.WriteLine("Artan sıra:", c + ", " + b + ", " + a);
}
if (a > b && b < c && c < a)
{
    Console.WriteLine("Azalan sıra:" + " " + a + ", " + c + ", " + b);
    Console.WriteLine("Artan sıra:", b + ", " + c + ", " + a);
}
if (b > a && a > c && c < b)
{
    Console.WriteLine("Azalan sıra:"+ " " + b + ", " + a + ", " + c);
    Console.WriteLine("Artan sıra:", c + ", " + a + ", " + b);
}
if (b > a && a < c && c < b)
{
    Console.WriteLine("Azalan sıra:" + " " + b + ", " + c + ", " + a);
    Console.WriteLine("Artan sıra:" + " " + a + ", " + c + ", " + b);
}
if (c > a && a > b && b < c)
{
    Console.WriteLine("Azalan sıra:" + " " + c + ", " + a + ", " + b);
    Console.WriteLine("Artan sıra:" + " " + b + ", " + a + ", " + c);
}
if (c > a && b > a && b < c)
{
    Console.WriteLine("Azalan sıra:" + " " + c + ", " + b + ", " + a);
    Console.WriteLine("Artan sıra:" + " " + a + ", " + b + ", " + c);
}
