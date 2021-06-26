var str = "Can i do it";

String.prototype.flip = function() {
    let flippedString = '';
    let charArray = [...this.toString()];
    for(let i =0; i< charArray.length; i++) {
        flippedString+=charArray[charArray.length -i -1];
    }
    return flippedString;
}

console.log(str.flip());