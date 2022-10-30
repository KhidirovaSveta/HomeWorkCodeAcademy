// See https://aka.ms/new-console-template for more information

string month;
Console.Write("Enter The Month: ");
month = Console.ReadLine();

switch (month)
{
    case "january":
        Console.WriteLine("January Has 31 Days");
        break;
    case "february":
        Console.WriteLine("February Has 28 Days");
        break;
    case "march":
        Console.WriteLine("March Has 31 Days");
        break;
    case "april":
        Console.WriteLine("April Has 30 Days");
        break;
    case "may":
        Console.WriteLine("May Has 31 Days");
        break;
    case "june":
        Console.WriteLine("June Has 30 Days");
        break;
    case "july":
        Console.WriteLine("July Has 31 Days");
        break;
    case "august":
        Console.WriteLine("August Has 31 Days");
        break;
    case "september":
        Console.WriteLine("September Has 30 Days");
        break;
    case "october":
        Console.WriteLine("October Has 31 Days");
        break;
    case "november":
        Console.WriteLine("September Has 30 Days");
        break;
    case "december":
        Console.WriteLine("December Has 31 Days");
        break;
    default:
        Console.WriteLine("Is Not Found");
        break;


}
