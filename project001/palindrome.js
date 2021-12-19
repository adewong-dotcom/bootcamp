function palindromo(txt){
    if(txt.length <= 1){ // Base case
        return txt;
    }

    if (txt.length == 2){ //2nd Base case
        if(txt[0] == txt[1]){
            return txt;
        }
        return txt[0];
    }
 
    let front = 0;
    let end = txt.length-1;
    const arr = txt.split("");
    let result = "";

    for (var i = 0; i<txt.length; i++){
        let last = txt.lastIndexOf(txt[i]);
        if(last > i){
            var temp = arr.slice(i, last+1);
            const reverse = temp.reverse().join('');
            temp = temp.join('');

            if(reverse === temp){
                return txt.slice(i, last+1);
            }
        }
    }
    return result;
}