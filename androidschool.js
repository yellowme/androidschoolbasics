#!/usr/bin/env node


const workshopper = require('workshopper')
    , path        = require('path')


function execute(){
    workshopper({
    name        : 'androidschool',
    title       : 'Android School',
    subtitle    : 'Learn the android basics',
    appDir      : __dirname,
    menuItems   : [],
    exerciseDir : path.join(__dirname, 'exercises'),
    languages: ['en', 'es', 'fr'],
    menu        : {width: 73,
        x: 2,
        y: 2,
        fg: 'white',
        bg: 'green'}
})
}

exports.execute = execute;
