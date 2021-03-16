class Bracket {
    check(input) {
        if (input === "(") {
            return false;
        } else if (input == "()") {
            return true;
        } else {
            if (input.length % 2 !== 0) {
                return false;
            }
            return true;
        }
    }
}
