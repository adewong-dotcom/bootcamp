function isParenthesis(str){
    const open = ["(", "[", "{"];
    const close = [")", "]", "}"];
    const myArray = str.split(",");
    var count = myArray.length-1;

    for(var i=0; i<myArray.length; i++){
        const index = open.indexOf(myArray[i]);
        if(close[index] != myArray[i+1]  || close[index] != myArray[count]){
            return false;
        }
        count--;
    }
    return true;
}

