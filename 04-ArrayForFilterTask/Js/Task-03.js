/*sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. 
However, overtime issues in the application arise, adaptations to changes, and new features happen.`


3. sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın. */

let text = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`
let say=0
for(let i=0 ;i < text.length;i++){
    if(text[i]==' '){
       say++; 
    }
    
}
console.log(say)