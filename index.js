//type conversion
const inputYear = '1992';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);//we have to convert the string '1992' to a number using an inbuilt function;

console.log(Number('Benson'));
console.log(String(23));

// type coersion
console.log('i am ' + 23 + 'years old');
console.log('23' - '10'- 3);
console.log('23'* '2');

let n = '1' + 1 //this will be 11
n = n -1;
console.log(n);//thi will be 10


// 5 falsey values 0, "" ,undefined ,null and NaN;
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('mwenda'));
console.log(Boolean(''));
console.log(Boolean({}));

const money = 0;
 
if(money){
    console.log("don't spend it all");
}else{
    console.log('you should get a job');
}

let height;
if(height){
    console.log('YAY! height is defined');
}else{
    console.log('height is not defined');
}