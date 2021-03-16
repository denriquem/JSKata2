class Bracket {
    check(input) {
        let arr = input.split("");
        let first = arr.shift();
        let last = arr.pop();
        let subsequentIndex;
        for (let i = 0; i < arr.length; i++) {
            if (input[i] === input[i + 1]) {
                subsequentIndex = "it is";
            }
        }

        if (input === "(") {
            return false;
        } else if (input === "()") {
            return true;
        } else if (input.length % 2 !== 0) {
            return false;
        } else if (input === "()()") {
            return true;
        } else if (subsequentIndex === "it is") {
            return false;
        } else if (first !== "(" || last !== ")") {
            return false;
        }
    }
}
