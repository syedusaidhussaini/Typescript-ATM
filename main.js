#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000; // Dollar
let myPin = 3412;
let myName = "Syed Usaid";
let firstAnswer = await inquirer.prompt([
    {
        name: "SyedUsaid",
        message: "Please enter your Good Name:",
        type: "string",
    },
]);
//First Step for Inserting a Good Name
if (firstAnswer.SyedUsaid === myName) {
    console.log("Welcome to Typescript ATM. Syed Usaid How can i help You.");
    let secondAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: "Please Enter Your 4 Digit Pin Code :",
            type: "number",
        }
    ]);
    //Second Step for insert Pin Code
    if (secondAnswer.pin === myPin) {
        console.log("Please Wait.. Access Granted!");
    }
    let operationAns = await inquirer.prompt([
        {
            name: "operations",
            message: "Please select your opinion :",
            type: "list",
            choices: ["With draw", "Balance inquiry"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operations === "With draw") {
        let myAmount = await inquirer.prompt([
            {
                name: "Constantamount",
                message: "Please Select Constant Number :",
                type: "list",
                choices: [10000, 20000, 30000, 35000, 40000]
            }
        ]);
        //This is Constant Formula for Balancing Amount
        myBalance -= myAmount.Constantamount;
        //There we have a conditional formatting whether we want to choose.
        if (myAmount.Constantamount === "20000") {
            myBalance -= myAmount.Constantamount;
        }
        else if (myAmount.Constantamount === "30000") {
            myBalance -= myAmount.Constantamount;
        }
        else if (myAmount.Constantamount === "35000") {
            myBalance -= myAmount.Constantamount;
        }
        else if (myAmount.Constantamount === "40000") {
            myBalance -= myAmount.Constantamount;
        }
        //myBalance -= myAmount.Constantmount;
        console.log(`Your remaining balance is : ${myBalance} "Thank You for your Transations."`);
    }
    else if (operationAns.operations === "Balance inquiry") {
        console.log("Your balance is :" + myBalance);
    }
}
else {
    console.log("Incorrect Pin Code..");
}
;
