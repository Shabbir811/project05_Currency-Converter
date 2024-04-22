#! /usr/bin/env node

//1: import inquirer 
import inquirer from "inquirer";

//2: create a object of rate of currency with base dollar 

console.log(`\n\t\t\t\t\t\t\tcurency converter\n `);



let g_currency:any ={
    USD: 1,
    PKR: 277.54,
    Egyption_POUND: 47.33,
    Canadian_DOLLOR: 1.36,
    EURO: .92,
    YUAN: 7.25

};

//7: create while loop
let start = true;

while(start== true){


//3: get input from user through inquirer

let answers = await inquirer.prompt(
    [
        {
            name: "from",
            type: "list",
            message:"select currency from:",
            choices: ["USD","PKR","EURO","YUAN","Egyption_POUND","Canadian_DOLLOR"]
        },
        {
            name: "amount",
            type: "number",
            message:`enter amount `,  
        },
        {
            name: "to",
            type: "list",
            message:"select type of currency to convert:",
            choices: ["USD","PKR","EURO","YUAN","Egyption_POUND","Canadian_DOLLOR"]
        },

    ]
)

//4: get user's input and store in variables

let fromAmount = answers.from;
let toAmount = answers.to;
let amount = answers.amount;

//5: apply some furmulas to set our logic

let from = g_currency[fromAmount]
let to   = g_currency[toAmount]

// base currency converter formula

let currency_converter = (amount/from)*to

console.log(`--------------------------------------------------------------------------------------------------------------------------`);
//6: print our result
console.log(`\t\t\t\t(your ${amount} ${answers.from} converted into ${answers.to}: )  ${currency_converter.toFixed(2)} ${answers.to}`);

console.log(`--------------------------------------------------------------------------------------------------------------------------`);

//8 end while loop
let loop = await inquirer.prompt(
    {
        name: "end",
        type: "list",
        message:"select",
        choices:["restart",'exit']
    }

) 
 if(loop.end == "exit"){
       start = false
 }else if(loop.end == "restart"){
      start = true
 }

}

