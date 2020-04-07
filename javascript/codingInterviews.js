let codingInterviews = (function(){
'use strict';

    function hasUniqueChars(inputString){

        let chars = new Set();

        if(!inputString || inputString.length > 255) return false;

        for(let i = 0; i < inputString.length; i++){
            if(chars.has(inputString[i])){
                return false;
            }

            chars.add(inputString[i]);
        }

        return true;
    }

    function isPermutation(firstStr, secondStr){
        if(firstStr.length !== secondStr.length) return false;

        if(firstStr.split('').sort().join('') === secondStr.split('').sort().join('')){
            return true;
        }

        return false;
    }

    return {

        hasUniqueChars : hasUniqueChars,
        isPermutation : isPermutation
    };
}());