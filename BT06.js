"use strict";
function check(arr) {
    if (typeof (check) == "string") {
        console.log(arr);
    }
    else if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
}
check("hello");
