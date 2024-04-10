"use strict";
function array(arr) {
    if (typeof (arr) == "number") {
        console.log(arr ** 2);
    }
    else if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i] ** 2;
        }
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
}
array([1, 2, 3, 4, 5]);
