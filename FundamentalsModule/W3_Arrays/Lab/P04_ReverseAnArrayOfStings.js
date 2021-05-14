function reverse(elements) {

    for (let i = 0; i < elements.length / 2; i++) {
        swapElements(elements, i, elements.length - 1 - i);
    }
    console.log(elements.join(' '));

    function swapElements(arr,i,j){
        let oldElement = arr[i];
        let previousIndex = arr.length - 1- i;
        arr[i] = arr[previousIndex];
        arr[previousIndex] = oldElement;
    }
}
reverse(['33', '123', '0', 'dd']);