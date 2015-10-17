import Logger from './logger';
import angular from 'angular';

let logger = new Logger();
let appModule=angular.module('app',[]);
logger.log('app started');
logger.log('app in progress');

document.write('<h1>Hello ES6!!!</h1>');
let btn = document.createElement('Button');

btn.innerHTML = 'Log To Console';
btn.onclick = function() {
    logger.log('Button Click!');
};
document.body.appendChild(btn);