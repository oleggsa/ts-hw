const arr: Array<number> = [1, 2, 3, -1, -2, -3];

function posNum(arr: Array<number>): Array<number> | void {
    const exampleArr: Array<number> = [];
    if (arr.length === 0) return console.log('empty arr');
    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i] > 0) exampleArr.push(arr[i]);
    }
    if (exampleArr.length>0) return exampleArr;
    return null;
}

console.log(posNum(arr));