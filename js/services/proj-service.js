'use strict'

// change to projects!!
const KEY = 'projs'
const PAGE_SIZE = 4



var gProjs = [
    {
        id: "mine-sweeper", // class
        name: "mine sweeper",
        title: "clear those mines!",
        desc: "classic 90' game, highly addictive",
        url: "projs/sokoban", /// what to do
        publishedAt: 1448693940000, /// what to do
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "pac-man",
        name: "pac man",
        title: "stack up points, dodge those ghosts",
        desc: "classic 90' game, highly addictive",
        url: "projs/sokoban", /// what to do
        publishedAt: 1448693940000, /// what to do
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "guess-me",
        name: "guess me",
        title: "think of a person, and our furtune teller will know who",
        desc: "A-I is scary huh?",
        url: "projs/sokoban", /// what to do
        publishedAt: 1448693940000, /// what to do
        labels: ["Matrixes", "keyboard events"], // dont know
    },
]



var gSortBy
var gPageIdx = 0


function getProjs() {
    console.log('hello8')
    const fromIdx = gPageIdx * PAGE_SIZE
    const projs = gProjs.slice(fromIdx, fromIdx+PAGE_SIZE)
    return projs
}

function getProjById(projId) {
    console.log('hello12')
    var proj = gProjs.find(function (proj) {
        return projId === proj.id
    })
    return proj
}


