#! /usr/bin/env node
import inquirer from "inquirer"

import chalk from "chalk"

let todos : string [] = []

let condition = true

async function creattodo(){
    console.log(chalk.magentaBright("\t\t Welcome To Maheen Imtiaz Todos List"));
    console.log("-".repeat(50));
    while(condition){
        let operation = await inquirer.prompt([
            {
                name:"operators",
                type:"list",
                message:chalk.magentaBright("what do you want to add in your todo"),
                choices:["Add","view","update","delete","exit"]
            }
        ])
        if (operation.operators === "Add"){
            let addtask = await inquirer.prompt([
                {
                    name:"todo",
                    type:"input",
                    message:chalk.redBright("what you want to add in your todos")
                }
            ])
            todos.push(addtask.todo)
            console.log("Todoa Add" ,addtask.todo);
            
        }
        else if(operation.operators === "view"){
            console.log("current todos" , todos);
            
        }
        else if(operation.operators === "update"){
            let updateitem = await inquirer.prompt([
                {
                    name:"index",
                    type:"number",
                    message:chalk.bgGreen("enter the index of the items what you want to update")
                }
            ])
            let updatevalue = await inquirer.prompt([
                {
                    name:"todo",
                    type:"input",
                    message:chalk.bgGray("enter the update value you want to update")
                }
            ])
       todos[Number(updateitem.index)]= updatevalue.todo
       console.log("update value", todos);
       
        }
        else if (operation.operators === "delete"){
            let deleteitem = await inquirer.prompt([
                {
                    name:"index",
                    type:"input",
                    message:chalk.bgBlackBright("enter the index you want to delete")
                }
            ])
           
            todos.splice(Number(deleteitem.index),1)
            console.log("todo deleted" , todos);
            
        }
        else if(operation.operators === "exit"){
            condition = false
            console.log("Exsistng todos");
            
        }



    }
}
creattodo()