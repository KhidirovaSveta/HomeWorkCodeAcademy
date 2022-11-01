/* sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away.
 However, overtime issues in the application arise, adaptations to changes, and new features happen.`


4. sampleNews mətnində olan vergül və nöqtələrin sayını təyin edən proqram yazın. */

let text = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away.
However, overtime issues in the application arise, adaptations to changes, and new features happen.`
let noqte=0
let vergul=0
for(let i=0 ;i < text.length;i++){
    if(text[i]==',' ){
       vergul++; 
    }
    if(text[i]=='.' ){
       noqte++; 
    }
    
}
console.log("vergul",vergul)  
console.log("noqte",noqte)