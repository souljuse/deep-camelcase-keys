var preserveCamelCase = function (string) {
    var isLastCharLower = false;
    var isLastCharUpper = false;
    var isLastLastCharUpper = false;
    for (var i = 0; i < string.length; i++) {
        var character = string[i];
        if (isLastCharLower && /[\p{Lu}]/u.test(character)) {
            string = string.slice(0, i) + "-" + string.slice(i);
            isLastCharLower = false;
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper = true;
            i++;
        }
        else if (isLastCharUpper &&
            isLastLastCharUpper &&
            /[\p{Ll}]/u.test(character)) {
            string = string.slice(0, i - 1) + "-" + string.slice(i - 1);
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper = false;
            isLastCharLower = true;
        }
        else {
            isLastCharLower =
                character.toLowerCase() === character &&
                    character.toUpperCase() !== character;
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper =
                character.toUpperCase() === character &&
                    character.toLowerCase() !== character;
        }
    }
    return string;
};
var camelize = function (key) {
    return key
        .replace(/[_.\- ]+([\p{Alpha}\p{N}_]|$)/gu, function (_, p1) {
        return p1.toUpperCase();
    })
        .replace(/\d+([\p{Alpha}\p{N}_]|$)/gu, function (m) { return m.toUpperCase(); });
};
export var camelcase = function (key) {
    var newKey = key.trim();
    if (newKey.length === 0) {
        return "";
    }
    if (newKey.length === 1) {
        return newKey.toLowerCase();
    }
    var hasUpperCase = newKey !== newKey.toLowerCase();
    if (hasUpperCase) {
        newKey = preserveCamelCase(newKey);
    }
    newKey = newKey.replace(/^[_.\- ]+/, "").toLowerCase();
    return camelize(newKey);
};
//# sourceMappingURL=camelcase.js.map