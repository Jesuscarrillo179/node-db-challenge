const router = require('express').Router()

const Projects = require('./project-model')

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

module.exports = router