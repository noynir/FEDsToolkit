import Logger from './logger';
import $ from 'jquery';
require('../../css/style1.scss');

let logger = new Logger();

logger.log('app started');
logger.log('app in progress');

$(function() {

    $('body').append('<h1>Hello ES6!!!</h1>');
    let btn = $('<button>Log to Console</button>');

    btn.click(function() {
        logger.log('Button Click!');
    });
    $('body').append(btn);

});


