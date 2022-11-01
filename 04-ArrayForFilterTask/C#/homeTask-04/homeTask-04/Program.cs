// See https://aka.ms/new-console-template for more information
/* sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away.
 However, overtime issues in the application arise, adaptations to changes, and new features happen.`


4. sampleNews mətnində olan vergül və nöqtələrin sayını təyin edən proqram yazın. */

using System;

string text = "As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.";
int noqte = 0;
int vergul = 0;
for(int i= 0 ; i < text.Length; i++){
    if (text[i] == ',')
    {
        vergul++;
    }
    if (text[i] == '.')
    {
        noqte++;
    }

}
Console.WriteLine("vergul" + " " + vergul);
Console.WriteLine("noqte" + " " + noqte);