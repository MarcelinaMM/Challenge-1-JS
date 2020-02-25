
let input = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let ordArray = [];

const createArray = (input) => {
    let sortedInput = input.sort((a,b) => a - b);
    let tempArray = [];
    sortedInput.forEach((el, i) => {
        if (el === sortedInput[i+1]){
            tempArray.push(el);
        }else if(el === sortedInput[i - 1]){
            tempArray.push(el);
            ordArray.push(tempArray);
            tempArray = [];
        }else{
            ordArray.push(el);
        }
        return ordArray;
    });
};

createArray(input);
console.log(ordArray);

// ################# BONUS ########################

let input = [1,"2",4,591,392,"391",2,"5",10,"2",1,1,1,"20",20];
let sortedArray = [];

const sortArray = (input) => {

    let strArray = input.filter(el => {
        return typeof el === "string";
        }).sort();
    let numArray = input.filter(el => {
        return typeof el === "number";
    }).sort((a,b) => a - b);

    sortedArray = [strArray, numArray];
    return sortedArray;
};

sortArray(input);
console.log(sortedArray);


