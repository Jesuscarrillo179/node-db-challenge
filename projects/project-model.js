const db = require('../data/db-config')

module.exports = {
    getProjects,
    getProjectById,
    insertProject,
    getResources,
    getResourceById,
    insertResource,
    getTasks,
    insertTask,
}

function getProjects(){
    return db('projects')
}

function getProjectById(id) {
    return db('users')
      .where({ id })
      .first()
  }

function insertProject(project){
    return db('projects')
    .insert(project)
}

function getResources(){
    return db('resources')
}

function getResourceById(id) {
    return db('users')
      .where({ id })
      .first();
  }

function insertResource(resource){
    return db('resources')
    .insert(resource)
}

function getTasks(){
    return db('tasks as t')
    .select(
        'project',
        'p.description',
        't.description as Task',
        'notes',
        't.completed',
    )
    .join('projects as p', 'p.id', 't.project_id')
}

function insertTask(task){
    return db('tasks')
    .insert(task)
}

// function (){
//     return
// }

// function (){
//     return
// }
