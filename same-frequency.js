function freqCounter(str) {
    let frequency = {};

    for (let i = 0; i < str.length; i++) {
        let valCount = frequency[str[i]] || 0;
        frequency[str[i]] = valCount + 1;
    }

    return frequency;
}


function sameFrequency(num1, num2) {
    num1 = num1.toString();
    num2 = num2.toString();

    if (num1.length !== num2.length) return false;

    let num1Freq = freqCounter(num1);
    let num2Freq = freqCounter(num2);

    for (let key in num1Freq) {
        if (!num2Freq[key]) return false;
        if (num1Freq[key] !== num2Freq[key]) return false;
    }

    return true;

}

module.exports = { freqCounter, sameFrequency };
