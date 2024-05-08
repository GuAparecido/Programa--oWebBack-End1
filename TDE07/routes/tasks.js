const express = require("express")
const router = express.Router()

let tasks = [
        {
            id: 1,
            name: "Comprar leite",
            description: "Ir no mercado da esquina e comprar leite",
            isDone: true
            },
        {
            id: 2,
            name: "Comprar vaca",
            description: "Ir no sítio e comprar uma vaca",
            isDone: false
            },
        {
            id: 3,
            name: "Aprender a tirar leite",
            description: "Pesquisar no Youtube um tutorial para tirar leite",
            isDone: true
            },
        {
            id: 4,
            name: "Economizar e comprar uma ordenha",
            description: "Ir no laticínio atrás de uma ordenhadeira",
            isDone: false
        }
    ]

router.post("/task", (req, res) => {
    const data = req.body
    console.log(req.body);
    const task = {
        id: tasks.length + 1,
        name: data.name,
        description: data.description,
        isDone: data.isDone
    }
    tasks.push(task);
    res.status(201).json(task);
})

router.get("/tasks", (req, res) => {
    res.json(tasks);
})

router.get("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find((task) => task.id === id);
    // O "find" caso não encontre nada retorna "undefined", podíamos colocar no if (movie === undefined)..
    if (!task) res.status(404).json({message: `task with id ${id} not found`})
    res.json(task)
})

router.put("/task/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const task = tasks.find((task) => task.id === id);
    if (!task) return res.status(404).json({ message: "Movie not found"})
    task.name = data.name;
    task.rate = data.rate;
    res.json(movie);
})

router.delete("/task/:id", (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.filter((task => task.id !== id));
    res.status(201).send();
})

module.exports = {
    router
}