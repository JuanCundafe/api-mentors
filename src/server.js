const express = require('express')

const app = express()

const mentorsRouter = require('./routes/mentors')

app.use(express.json())

app.use('/mentors', mentorsRouter)

app.get('/', (request, response) => {
    response.json({
        success: true,
        message: 'Mentors-Kodemia APIv8'
    })
})

module.exports = app