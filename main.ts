#! /usr/bin/env node


import inquirer from "inquirer";

const answer =await inquirer.prompt([{message:"Enter  first Number",type:"number", name:"Firstnumber" },
{message:"Enter  Second Number",type:"number", name:"secondnumber" },
{message:"Enter  operatos",type:"list", name:"operator",choices:['addition','subtraction','multipliaction','divison'] }]);

if(answer.operator === "addition"){
    console.log(answer.Firstnumber + answer.secondnumber);
}else if (answer.operator === "subtraction"){
    console.log(answer.Firstnumber - answer.secondnumber);
}else if (answer.operator === "multipliaction"){
    console.log(answer.Firstnumber * answer.secondnumber);
}else {
    console.log(answer.Firstnumber / answer.secondnumber);
}
