"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function areAnagrams(s1, s2) {
    if (s1.length !== s2.length)
        return false;
    var charCount = new Map();
    __spreadArrays(s1).forEach(function (char) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    });
    __spreadArrays(s2).forEach(function (char) {
        if (!charCount.has(char))
            return false;
        charCount.set(char, charCount.get(char) - 1);
    });
    // Check that our MapCount is all 0s
    return __spreadArrays(charCount.values()).every(function (val) { return val === 0; });
}
exports.areAnagrams = areAnagrams;
var getWordHash = function (w) {
    var sum = 0;
    __spreadArrays(w).forEach(function (c) {
        sum += c.charCodeAt();
    });
    return sum;
};
function getHashMap(wordArray) {
    var map = [];
    wordArray.forEach(function (w) {
        // Map the word according to its letters
        var hash = getWordHash(w);
        map[hash] ?
            map[hash] = __spreadArrays(w) :
            map[hash].push(w);
    });
    return map;
}
function getAnagrams(wordArray) {
    var anagrams = [];
    var mappedWords = getHashMap(wordArray);
    mappedWords.forEach(function (war) {
        war.forEach(function (w) {
            // Add if there is more than 1 word in the array
            if (w.length > 1) {
                anagrams.push(war);
            }
        });
    });
    return anagrams;
}
exports.getAnagrams = getAnagrams;
