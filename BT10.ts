interface Person {
    name:string,
    age:number,
}
interface Employee extends Person {
    employeeld:string,
}
let employeee = {
    name: "nhất",
    age:20,
    employeeld:"bảo vệ",
}
function printEmployee(item:Employee){
    console.log(item.name,item.age,item.employeeld);
}
printEmployee(employeee);
