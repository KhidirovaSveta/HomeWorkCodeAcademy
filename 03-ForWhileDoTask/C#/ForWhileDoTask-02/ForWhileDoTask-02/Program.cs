// See https://aka.ms/new-console-template for more information
using System;

int a = 1;
bool sade = true;

if (a == 0 || a == 1)
{
    Console.WriteLine("ne sade, ne de murekkeb deyil");
}
else
{
    for (int i = 2; i < a; i++)
    {
        if (a % i == 0)
        {
            sade = false;
            break;
        }
    }
    if (sade)
    {
        Console.WriteLine(" sadedir");
    }
    else
    {
        Console.WriteLine(" murekkebdir");
    }
}