    function maxNumber(array) {

        let topIntegers = [];
        for (let i = 0; i < array.length; i++) {
            let isTop = true;
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] <= array[j]) {
                    isTop = false;
                    break;
                }
            }
            if (isTop) {
                topIntegers.push(array[i]);
            }
        } 
        console.log(topIntegers.join(' '));
    }