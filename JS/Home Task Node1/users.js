"use strict"
import axios from 'axios';
import chalk from 'chalk';

const url = "https://jsonplaceholder.typicode.com/users";

const colors = [chalk.red, chalk.green, chalk.blue, chalk.yellow, chalk.magenta, chalk.cyan];

const getUsers = async () =>{
    const {data} = await axios.get(url);
    for (let i = 0; i < data.length; i++) {
        console.log(colors[i % colors.length](`Name : ${data[i].name}, E-mail: ${data[i].email}`));
    }
}

export default getUsers;