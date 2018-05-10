let maskPII = function (S) {

    if (isEmail(S)) {
        S = S.toLowerCase();
        let ss = S.split('@');
        return ss[0][0] + '*****' + ss[0][ss[0].length - 1] + '@' + ss[1];

    }
    S = S.replace(/\D/g, '');
    if (S.length <= 10) {
        return '***-***-' + S.substr(-4);
    }
    return '+' + '*'.repeat(S.length - 10) + '-***-***-' + S.substr(-4);

    function isEmail(s) {
        return s.includes('@');

    }
};

console.log(maskPII('hetanhong@163.com'));
console.log(maskPII('+111 111 111 1111'));
console.log(maskPII('1(234)567-890'));
console.log(maskPII('86-(10)12345678'));

let consecutiveNumbersSum = function (N) {
    let result = 1;
    let maxIndex = Math.sqrt(2 * N);
    for (let i = 2; i < maxIndex; i++) {

        // even
        if (i % 2 === 0) {
            let res = 2 * N / i;
            if (res % 2 === 1) {
                result++;
            }
        } else {
            if (N % i === 0) {
                result++;
            }
        }

    }
    return result;

};

consecutiveNumbersSum(9);
