#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Student {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}
class Person {
  students: Student[] = [];

  addStudent(obj: Student) {
    this.students.push(obj);
  }
}

const persons = new Person();

const programmStart = async (persons: Person) => {
  do {
    console.log(chalk.bold.greenBright(`\n\tWelcome guests\n\t`));

    const ans = await inquirer.prompt({
      name: "select",
      type: "list",
      message: chalk.bold.bgRedBright("Who would you like to talk to?"),
      choices: ["by yourself", "student", "I don't want to talk to anyone"],
    });

    if (ans.select == "by yourself") {
      console.log(`Hello, I am talking to myself.`);
      console.log(`I am good!`);
    }

    if (ans.select == "student") {
      const ans = await inquirer.prompt({
        name: "student",
        type: "input",
        message: chalk.bold.bgYellow("Which student do you want to talk to? : "),
      });

      const student = persons.students.find((val) => val.name == ans.student);

      if (!student) {
        const name = new Student(ans.student);
        persons.addStudent(name);

        console.log(chalk.bold.italic.magenta(`Hello I am ${name.name}, and I am fine.`));
        console.log(persons.students);
      }
      if (student) {
        console.log(chalk.bold.magenta(`Hello I am ${student.name}, and Yeah! I am fine.....`));
        console.log(persons.students);
      }
    }

    if (ans.select == "I don't want to talk to anyone") {
      console.log(chalk.bold.red("Alright, have a good day!"));
      break; 
    }
  } while (true);
};

programmStart(persons);
