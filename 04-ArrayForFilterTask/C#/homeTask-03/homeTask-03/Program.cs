// See https://aka.ms/new-console-template for more information
/*sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. 
However, overtime issues in the application arise, adaptations to changes, and new features happen.`


3. sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın. */

using System;

string text = "As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.";
int say = 0;
for(int i= 0 ; i < text.Length; i++){
    if (text[i] == ' ')
    {
        say++;
    }

}
Console.WriteLine(say); 
