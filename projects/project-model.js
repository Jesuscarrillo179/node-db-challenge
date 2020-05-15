const db = require('../data/db-config')

module.exports = {
    getProjects,
    getResources,
    getTasks,
}

function getProjects(){
    return db('projects')
}

function getResources(){
    return db('resources')
}

function getTasks(){
    return db('tasks')
}

// function (){
//     return
// }

// function (){
//     return
// }

// function (){
//     return
// }
