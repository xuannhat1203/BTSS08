
type D = {
    name:string;
}
type E = {
    address:string;
    id:number
}
function item(D:D,E: E){
    type F = D&E; 
    let f:F={
        name:"minh thu",
        address:"hà nội",
        id:5,
    }
    console.log(f);
}
item({name: "nhất"}, {address:"Hải Dương",id:5});
