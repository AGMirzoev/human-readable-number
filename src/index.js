module.exports = function toReadable(number) {
    const unambiguous = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const doubleDigit = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const decimal = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) {
        return "zero";
    }

    let result = "";

    if (number >= 100) {
        result += unambiguous[Math.floor(number / 100)] + " hundred";
        number %= 100;
        if (number > 0) {
            result += " ";
        }
    }

    if (number >= 20) {
        result += decimal[Math.floor(number / 10)];
        number %= 10;
        if (number > 0) {
            result += " ";
        }
    } else if (number >= 10) {
        result += doubleDigit[number - 10];
        return result.trim();
    }

    if (number > 0) {
        result += unambiguous[number];
    }

    return result.trim();
};
