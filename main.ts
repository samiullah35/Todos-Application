#! /usr/bin/env node

import inquirer from "inquirer";
import  chalk from "chalk";

let todoList: string [] = [];
let Conditions = true;

console.log(chalk.red("\n \t============================================="));
console.log(chalk.green.bold("\n \t Wellcome to sami ullah, Todo Application"));
console.log(chalk.red("\n \t ============================================"));



let main = async ()=> {
    while (Conditions){
        let option = await inquirer.prompt([
            {
                name: "chioce",
                type: "list",
                message: "Select an option you want to todo:",
                choices: ["Add Task","Delete Task","Update Task","View Todo-list","Exit"],
            }
            ]) ;
            if(option.chioce === "Add Task"){
                await addTask()
            }
            else if(option.chioce === "Delete Task"){
                await deleteTask()
            }
            else if (option.chioce === "Update Task"){
                await updateTask()
            }
        
            else if(option.chioce === "View Todo-list"){
                await viewTask()
            }
            else if(option.chioce === "Exit"){
              Conditions = false;
            }
        
        }
    
}
// function to add new task to the list

let addTask = async ()=> {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task:",
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-list\n`);
}

// function to view all Todo-List Tasks

let viewTask = () => {
    console.log("\n your Todo-List: \n"),
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`)
    });
    console.log("/n")
}
//function to delete a task from the list
let deleteTask = async ()=> {
    await viewTask()
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no ' of the task you want to delete", 
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask}this task has been deleted successfully from your Todo-list\n`);
}
// function to update task
let updateTask = async () => {
    await viewTask()
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of the task you want to update : "
        },
        {
            name: "new_task",
            type: "input",
            message: "Enter new task name :",
        }
    ]);
        todoList[update_task_index.index -1] = update_task_index.new_task
        console.log(`\n Task at index no. ${update_task_index.index -1}update successfully [for updated list check option: "View Todo-list"]`)    
}

main();