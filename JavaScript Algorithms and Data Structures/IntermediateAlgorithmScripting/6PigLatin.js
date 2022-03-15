function translatePigLatin(str) {
    if(str.match(/^[qwrtypsdfghjklzxcvbnm]/)){
        return str.replace(/([qwrtypsdfghjklzxcvbnm]*)(\w*)/,"$2$1ay");
    }else{
        return str.replace(/([qwrtypsdfghjklzxcvbnm]*)(\w*)/,"$2$1way");
    }
}
console.log(translatePigLatin("onsonant"));
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("eight"));