function palindrome(arr) {

    function isPalindrome(n) {
        let reversedN = n.toString().split('').reverse().join('');

        return Number(reversedN) === n ? true : false;
    }
    let printLines = '';
    for (const n of arr) {
        printLines += isPalindrome(n) + '\n';
    }
    return printLines;
}
