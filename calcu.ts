import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        type:'number',
        name:'num1',
        message:'enter your first number'
    },
    {
        type:'number',
        name:'num2',
        massage:'enter your last number'
    },
    {
        type:"list",
        name:"operator",
        massage:"enter the operator",
        choices:["add","subtract","multiply","divide"]
    }])
    let result: number 
    switch(answer.operator){
        case "add":
            result = answer.num1+answer.num2
            console.log(result)
            break;

            case "subtract":
                result = answer.num1-answer.num2
                console.log(result)
                break;

                case "multiply":
                    result = answer.num1*answer.num2
                    console.log(result)
                    break;

                    case "divide":
                    result = answer.num1/answer.num2
                    console.log(result)
                    break;
    }