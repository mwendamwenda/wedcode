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

const age = 18;
if(age === 18) console.log('you just became and adult(strict)'); ///if we have one line to be excuted we dont need to use curly braces in if else statement

// the === does not perfome type coersion
if(age === 18) console.log('you just became and adult(loose)');



const favourite = Number(prompt("what's your favourite number"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23){
    console.log('cool! 23 is an amzing number');
}else if(favourite === 7){
    console.log('7 is also a cool number');
}else{
    console.log('the number is not 23 or 7 so its not cool');
}

if (favourite !== 23) console.log('why not 23');