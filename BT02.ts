class Person {
    name: string;
    age: number;
    address: object;
    constructor(age: number, name: string, address: object) {
        this.age = age;
        this.name = name;
        this.address = address;
      }
}
  function validatePerson(obj: unknown): obj is Person {
    if (typeof obj !== 'object' || obj === null) {
      return false;
    }
    const { name, age, address } = obj as Person;
    console.log(obj);
    if (typeof name !== 'string' || typeof age !== 'number' || typeof address !== 'object') {
        console.log(1);
      return false;
    }
    return true;
  }
  let obj = {
    name: "nhất",
    age:19,
    address: {
        add: "hải dương"
    },
  }
 console.log(validatePerson(obj));
 