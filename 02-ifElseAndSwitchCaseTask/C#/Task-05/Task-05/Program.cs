// See https://aka.ms/new-console-template for more information

/* 5.  3 rəqəmli hər hansı bir ədəd verilib. Həmin ədədin hansı rəqəmlərdən ibarət olduğunu bizə qaytaran bir proqram tərtib edin.
Məsələn: number=652 daxil etdikdə  cavab bu şəkildə olmalıdır:
Result: 6, 5, 2 */

int eded = 652;
int a = eded % 10; 
int b = ((eded - a)/10)%10;  
int c = (((eded - a) / 10) - b) / 10; 

Console.Write( c + "  " + b + "  " + a );