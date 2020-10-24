//Function used to add 2 variables
function addFunc(v1, v2){
    return (v1 + v2);
}

const subFunc = (v1, v2) => v1 -v2;

const mulFunc = (v1, v2) => v1 * v2;

const divFunc = (v1, v2) => {
    const res= v1 / v2;
    return res.toFixed(2);
}

const sqrt = (v1) => Math.sqrt(v1);

const sqr = (v1) => mulFunc(v1, v1);

const title = () => "Welcome to Jasmine training";

//Function that returns boolean.....
const checkNumber = (val)=> !isNaN(val);