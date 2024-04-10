
function parseInput(arr1: number|boolean|string|null|undefined){
    console.log(Object.prototype.toString.call(arr1));
}
parseInput("4");
parseInput(4);
parseInput(true);
parseInput(undefined);
parseInput(null);

