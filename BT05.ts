// sự khác nhau giữa Union Types và Intersection Types là
/* 
    - union type là kiểu kết hợp liên kết còn intersection type là kiểu giao cắt
*/
// Union Types cho phép biến có thể chứa giá trị thuộc 
// một trong các kiểu được chỉ định.
// Intersection Types tạo ra một kiểu mới bằng cách 
// kết hợp các thuộc tính của các kiểu được kết hợp.
// Sự khác biệt chính giữa chúng là trong cách 
// hoạt động: Union Types cho phép một biến có 
// thể là một trong các kiểu đã chỉ định, trong 
// khi Intersection Types tạo ra một kiểu mới bằng 
// cách kết hợp các thuộc tính của các kiểu khác nhau.
// Tạo ra một kiểu mới kết hợp từ hai kiểu
// intersection
type P = { x: number; y: number };
type K = { color: string };
type M = P & K;
let point: M = {
    x: 10,
    y: 20,
    color: "red"
};
// union
let myVar: string | number;
myVar = "Hello";
myVar = 10;
