function frequencyCounter(str) {
    let frequencies = {};

    for (let i=0; i<str.length; i++) {
        let valCount = frequencies[str[i]] || 0;
        frequencies[str[i]] = valCount + 1;
    }

    return frequencies;
}

function constructNote(message, letters) {
    // frequency counter for message
    // frequency counter for letters
    // are the frequencies for the values in message
    // equal or less than the frequency of those values in letters
    // if yes return true, else return false

    if (letters.length < message.length) return false;
    if (!message.length) return true;

    let messageFreqs = frequencyCounter(message);
    let lettersFreqs = frequencyCounter(letters);

    for (let key in messageFreqs) {
        if (lettersFreqs[key] < messageFreqs[key]) return false;
    }

    return true;
}

module.exports = { frequencyCounter, constructNote }