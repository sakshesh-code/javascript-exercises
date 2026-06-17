const palindromes = function (string) {

    const word = string.toLowerCase().split("");
    const exclude = ",<.>/?\"':;|)}`~!@#$%^&*()_-+={[]\\ "
    const filtered = word.filter(w=> !exclude.includes(w));

    const reversed = [...filtered].reverse();

    return filtered.join("") === reversed.join("") ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
