let paragraph = document.getElementsByTagName("p");
console.log(paragraph);
if(paragraph > 0){
    let first = paragraph[0];
    first.innerText = "Welcome to the Bootcamp!";
}