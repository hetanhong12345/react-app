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


let validTicTacToe = function (board) {
    let mapstrs = [[], [], []];
    for (let i = 0; i < 3; i++) {
        mapstrs[0][i] = board[0][i];
        mapstrs[1][i] = board[1][i];
        mapstrs[2][i] = board[2][i];
    }
    let result = false;
    deep('X');
    return result;

    function deep(char) {
        if (isFull()) {
            result = true;
            return;
        }
        if (isWin()) {
            return;
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (mapstrs[i][j] === ' ') {
                    mapstrs[i][j] = char;
                    if (char === 'X') {
                        deep('O')
                    } else {
                        deep('X')
                    }
                    mapstrs[i][j] = ' ';
                }

            }
        }

    }

    function isWin() {
        if (mapstrs[0][0] !== ' ' && mapstrs[0][0] === mapstrs[1][1] && mapstrs[0][0] === mapstrs[2][2]) {
            return true;
        }

        if (mapstrs[2][0] !== ' ' && mapstrs[2][0] === mapstrs[1][1] && mapstrs[2][0] === mapstrs[0][2]) {
            return true;
        }
        for (let i = 0; i < 3; i++) {
            if (mapstrs[i][0] !== ' ' && mapstrs[i][0] === mapstrs[i][1] && mapstrs[i][0] === mapstrs[i][2]) {
                return true;
            }
            if (mapstrs[0][i] !== ' ' && mapstrs[0][i] === mapstrs[1][i] && mapstrs[0][i] === mapstrs[2][i]) {
                return true;
            }
        }

        return false;
    }

    function isFull() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (mapstrs[i][j] === ' ') {
                    return false;
                }
            }
        }
        return true;
    }


};
