function container(arr){
    var currentMax= 0;
    var count = 1;

    for(let i =0; i<arr.length/2; i++){
        const frontIndex = arr[i];
        const backIndex = arr[arr.length-count];
        const minVal = (arr[frontIndex]>= arr[backIndex]) ? arr[frontIndex] : arr[backIndex]; 
        const diff = Math.abs(frontIndex - backIndex);

        if(diff*minVal > currentMax){
            currentMax = diff*minVal;
        }
        count++;
    }
    return currentMax;
}