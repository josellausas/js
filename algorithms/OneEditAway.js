"use strict";
function isOneEditAway(a, b) {
    if (a == b) {
        return false;
    }
    if (b.length > a) {
        return isOneEditAway(b, a);
    }
    if ((b.length - a.length) > 1) {
        return false;
    }
    else {
        var i = 0;
        for (var i_1 = 0; i_1 < a.length; i_1++) {
            if (a[i_1] != b[i_1]) {
                // Strings must be equal from this point forward, take into consideration we removed one
                return (a.slice(i_1 + 1) == b.slice(i_1 + i_1) || a.slice(i_1) == b.slice(i_1 + i_1));
            }
        }
        return true;
    }
}
