const express = require("express")
const {prisma} = require("../db/prisma")
const router = express.Router()

let movies = [
        // {
        //     id: 1,
        //     name: "Avenger",
        //     rate: 8,
        //     },
        // {
        //     id: 2,
        //     name: "Iron Man",
        //     rate: 10,
        //     },
        // {
        //     id: 3,
        //     name: "Thor",
        //     rate: 10,
        //     },
        // {
        //     id: 4,
        //     name: "Captain America",
        //     rate: 4,
        // }
    ]

router.get("/movies", async (req, res) => {
    const movies = await prisma.movies.findMany({
        orderBy: {
            rate: "desc"
        },
        where: {
            rate: req.query.rate ? Number(req.query.rate) : undefined
        }
    })
    res.json(movies)
})

router.get("/movie/:id", async (req, res) => {
    const id = Number(req.params.id);
    const movie = await prisma.movies.findFirst({
        where: {
            id
        } // id : id
    });
    // O "find" caso não encontre nada retorna "undefined", podíamos colocar no if (movie === undefined)..
    if (!movie) res.status(404).json({message: `Movie with id ${id} not found`})
    res.json(movie)
})

router.post("/movie", async (req, res) => {
    const data = req.body

    const movie = await prisma.movies.create ({
        data: {
            name: data.name,
            rate: data.rate
        }
    })
    res.status(201).json(movie);
})

router.put("/movie/:id", async (req, res) => {
    const id = Number(req.params.id);
    await prisma.movies.update({
        data: {
            name: req.body.name,
            rate: req.body.rate,
            description: req.body.description
        },
        where: {
            id
        }
    })
    res.json(movies)
})

router.delete("/movie/:id", async (req, res) => {
    const id = Number(req.params.id)
    await prisma.movies.delete({
        where: {
            id
        }
    })
    res.status(204).send()
})

module.exports = {
    router
}