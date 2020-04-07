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

    return {

        hasUniqueChars : hasUniqueChars
    };
}());