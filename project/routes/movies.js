const express = require("express")
const router = express.Router()

let movies = [
        {
            id: 1,
            name: "Avenger",
            rate: 8,
            },
        {
            id: 2,
            name: "Iron Man",
            rate: 10,
            },
        {
            id: 3,
            name: "Thor",
            rate: 10,
            },
        {
            id: 4,
            name: "Captain America",
            rate: 4,
        }
    ]

router.get("/movies", (req, res) => {
    if (!req.query.rate) return res.json(movies);
    const rate = Number(req.query.rate);
    res.json(movies.filter(movie => movie.rate === rate));
})

router.get("/movie/:id", (req, res) => {
    const id = Number(req.params.id);
    const movie = movies.find((movie) => movie.id === id);
    // O "find" caso não encontre nada retorna "undefined", podíamos colocar no if (movie === undefined)..
    if (!movie) res.status(404).json({message: `Movie with id ${id} not found`})
    res.json(movie)
})

router.post("/movie", (req, res) => {
    const data = req.body

    const movie = {
        id: movies.length + 1,
        name: data.name,
        rate: data.rate
    }
    movies.push(movie);
    res.status(201).json(movie);
})

router.put("/movie/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const movie = movies.find((movie) => movie.id === id);
    if (!movie) return res.status(404).json({ message: "Movie not found"})
    movie.name = data.name;
    movie.rate = data.rate;
    res.json(movie);
})

router.delete("/movie/:id", (req, res) => {
    const id = Number(req.params.id);
    const movie = movies.filter((movie => movie.id !== id));
    res.status(204).send();
})

module.exports = {
    router
}