const router = require('express').Router()

const Projects = require('./project-model')

//projects endpoints

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        res.status(200).json({ data: projects })
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message:'Internal Server Error'})
    })
})

router.post('/', (req, res) => {
    const project = req.body

    Projects.insertProject(project)
    .then(() => {
        res.status(200).json({ message: "project created"})
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message:'Internal Server Error'})
    })
})

//resources endpoints

router.get('/resources', (req, res) => {
    Projects.getResources()
    .then(resources => {
        res.status(200).json({ data: resources })
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message:'Internal Server Error'})
    })
})

router.post('/resources', (req, res) => {
    const resource = req.body

    Projects.insertResource(resource)
    .then(() => {
        res.status(200).json({ message: "resource added"})
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message:'Internal Server Error'})
    })
})

//tasks endpoints

router.get('/tasks', (req, res) => {
    Projects.getTasks()
    .then(resources => {
        res.status(200).json({ data: resources })
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message:'Internal Server Error'})
    })
})

router.post('/:id/tasks', (req, res) => {
    const { description, notes } = req.body
    const project_id = req.params.id

    console.log(req.body)
    console.log(project_id)
    Projects.insertTask({project_id, description, notes})
    .then(() => {
        res.status(200).json({ message: "task added"})
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message:'Internal Server Error'})
    })
})

module.exports = router