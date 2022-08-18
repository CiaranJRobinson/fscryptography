let letters = "abcdefghijklmnopqrstuvwxyz";
let key = [];
key = letters.split("");
key.unshift(0);
function makeCipher (string){
    string.toLowerCase();
    let strArr = string.split("");
    for (let j = 0; j < strArr.length; j++){
        for (let i = 0; i < key.length; i++){
        if (strArr[j] === key[i]){
            let answer = key.indexOf(strArr[j])
            console.log(answer)
        }
    }
}  
}
console.log(makeCipher("abcde!"))