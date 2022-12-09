#!/usr/bin/env node
const { program } = require('commander')
const chalk = require('chalk')
const inquirer = require('inquirer')
const ora = require('ora')
const figlet = require('figlet');

// --------- figlet -------------
// console.log(figlet.textSync('Boo!', {
//   font: 'Ghost',
//   horizontalLayout: 'default',
//   verticalLayout: 'default',
//   width: 80,
//   whitespaceBreak: true
// }));

// --------- ora -------------
// const spinner = ora('下载中...').start()

// setTimeout(function() {
//   spinner.text = '网络较慢，请稍等...'
//   spinner.color = 'red'
// }, 2000)

// setTimeout(function() {
//   // spinner.succeed('下载成功')
//   spinner.fail('下载失败')
// }, 4000)

// --------- inquirer -------------
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//     {
//       type: 'input',
//       name: 'food',
//       message: '你吃什么？',
//       default: '汉堡包'
//     },
//     {
//       type: 'confirm',
//       name: 'hot',
//       message: '吃不吃辣？',
//       default: false
//     }
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//     console.log(answers)
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });


// // --------- chalk -------------
// console.log('肯德基疯狂星期四v我50')
// console.log(chalk.red('肯德基疯狂星期四v我50'))
// console.log(chalk.yellow('肯德基疯狂星期四v我50'))
// console.log(chalk.yellow.bold('肯德基疯狂星期四v我50'))
// console.log(chalk.yellow.bold.bgBlue('肯德基疯狂星期四v我50'))

// --------- commander ----------
// // console.log(process.argv)
// program.name('kfc-vme50-cli').usage('<command> [option]')

// program
//   .option('-d, --debug', 'output extra debugging')
//   .option('-s, --small', 'small pizza size')
//   .option('-p, --pizza-type <type>', 'flavour of pizza');

// program
//   .command('clone <source> [destination]')
//   .description('clone a repository into a newly created directory')
//   .action((source, destination) => {
//     // console.log('clone command called');
//     console.log(source, destination)
//   });

// program.parse(process.argv)

// const options = program.opts();
// console.log(options)

// console.log('肯德基疯狂星期四v我500')