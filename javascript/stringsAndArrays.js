let codingInterviews = (function(){
'use strict';

    function hasUniqueChars(inputString){
        'use strict';

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
        'use strict';
        if(firstStr.length !== secondStr.length) return false;

        if(firstStr.split('').sort().join('') === secondStr.split('').sort().join('')){
            return true;
        }

        return false;
    }

    function isPermutationSol2(firstStr, secondStr){
        'use strict';

        if(firstStr.length !== secondStr.length) return false;

        let a = [];
        for(let i=0; i<128; i++) a[i] = 0;

        for(let j=0; j<firstStr.length; j++) a[firstStr.charCodeAt(j)]++;

        for(let k=0; k<secondStr.length; k++){
            a[secondStr.charCodeAt(k)]--;

            if(a[secondStr.charCodeAt(k)] < 0){
                return false;
            }
        }

        return true;
    }

    return {

        hasUniqueChars : hasUniqueChars,
        isPermutation : isPermutation,
        isPermutationSol2 : isPermutationSol2
    };
}());