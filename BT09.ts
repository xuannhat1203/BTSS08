function check2(arr: number|string|number[]){
    let count = 0;
    if(typeof(arr) == "number"){
        console.log(arr**2);
    }else if(typeof(arr) == "string"){
        console.log(arr.length);
    }else if (Array.isArray(arr)){
        for(let i=0;i<arr.length;i++){
            count+=arr[i];
        }
        console.log("tổng của các phẩn tử là: ",count);
    }
}
check2(5);
check2("hello");
check2([1,2,3,4,5]);