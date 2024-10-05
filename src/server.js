import express from 'express';
import path from 'path'
import cors from 'cors'

const app = express();
app.use(cors())
const port = 3000;

app.use(express.static(path.join(process.cwd(), 'public')))

import route from './routes/index.route.js';
app.use(route)

import workRoute from './routes/works.route.js';
app.use(workRoute)

app.use((req, res) =>{
    res.status(404).sendFile(path.join(process.cwd(), 'public', 'NotFound', 'index.html'))
})

app.listen(port, ()=>{
    console.log("Welcome to todo api")
})

