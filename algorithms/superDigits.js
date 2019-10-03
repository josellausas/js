"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function digitSum(numString, n) {
    if (n < 1) {
        return 0;
    }
    if ((numString.length < 1) || isNaN(numString)) {
        return 0;
    }
    var p = getP(numString, n); //?
    var pArray = __spreadArrays(p);
    pArray.length; //?
    return superSum(pArray);
}
exports.digitSum = digitSum;
function superSum(p) {
    p.length; //?
    if (p.length === 1) {
        return p[0];
    }
    else {
        var sum_1 = 0;
        __spreadArrays(p).forEach(function (element) {
            sum_1 += parseInt(element);
        });
        sum_1; //?
        return superSum('' + sum_1);
    }
}
function getP(str, n) {
    // return concatRecursive(str,str,n);
    var newStr = '';
    for (var i = 0; i < n; i++) {
        newStr += str;
    }
    return newStr;
}
function concatRecursive(root, str, n) {
    if (n === 1) {
        return str;
    }
    else {
        return concatRecursive(root, str + root, --n);
    }
}
// Test
// const s = digitSum('7404954009694227446246375747227852213692570890717884174001587537145838723390362624487926131161112710589127423098959327020544003395792482625191721603328307774998124389641069884634086849138515079220750462317357487762780480576640689175346956135668451835480490089962406773267569650663927778867764315211280625033388271518264961090111547480467065229843613873499846390257375933040086863430523668050046930387013897062106309406874425001127890574986610018093859693455518413268914361859000614904461902442822577552997680098389183082654625098817411306985010658756762152160904278169491634807464356130877526392725432086439934006728914411061861235300979536190100734360684054557448454640750198466877185875290011114667186730452681943043971812380628117527172389889545776779555664826488520325234792648448625225364535053605515386730925070072896004645416713682004600636574389040662827182696337187610904694029221880801372864040345567230941110986028568372710970460116491983700312243090679537497139499778923997433720159174153', 100000); //?
