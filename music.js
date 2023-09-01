var MyMusic = [



    {
        title: "Deep Purple In Rock",
        puplished: 1970,
        genres: ["Hard Rock"],
        actors: ["Ritchie Blackmore,Ian Gillan,Roger Glover,Jon Lord ,Ian Paice "]
    },


    {
        title: "Judas Priest Painkiller ",
        puplished: 1990,
        genres: ["Heavy Metal"],
        actors: ["Rob Halford ,K. K. Downing,Glenn Tipton ,Scott Travis,Ian Hill  "]
    },


    {
        title: "Def Leppard On Through the Night",
        puplished: 1980,
        genres: ["NWOBHM"],
        actors: ["Joe Elliott,Steve Clark,Pete Willis,Rick Savage,Rick Allen"]
    },


    {
        title: "Iron Maiden Powerslave ",
        puplished: 1984,
        genres: ["NWOBHM,Heavy Metal,Power Metal"],
        actors: ["Bruce Dickinson ,Dave Murray ,Adrian Smith,Steve Harris,Nicko McBrain"]
    },


    {
        title: "Megadeth Peace Sells... but Who's Buying? ",
        puplished: 1986,
        genres: ["Thrash metal"],
        actors: ["Dave Mustaine,David Ellefson ,Chris Poland ,Gar Samuelson"]
    },


    {
        title: "Black Sabbath Master of Reality",
        puplished:1971 ,
        genres: ["Heavy Metal"],
        actors: ["Ozzy Osbourne ,Tony Iommi ,Geezer Butler,Bill Ward "]
    },


    {
        title: "Pantera Vulgar Display of Power ",
        puplished: 1992,
        genres: ["Groove metal"],
        actors: ["Phil Anselmo,Diamond Darrell,Rex Brown ,Vinnie Paul  "]
    },


    {
        title: "System of a Down ",
        puplished: 1998 ,
        genres: ["Hybrid Metal"],
        actors: ["Serj Tankian,Daron Malakian,Shavo Odadjian ,John Dolmayan"]
    },
    {
        title: "Green Day Insomniac  ",
        puplished: 1995,
        genres: ["Punk"],
        actors: ["Billie Joe Armstrong,Mike Dirnt,Tré Cool  "]
    },
    {
        title: "Linkin Park Hybrid Theory",
        puplished: 2000,
        genres: ["Nu Metal"],
        actors: ["Chester Bennington,Rob Bourdon,Brad Delson,Dave Farrell,Joe Hahn,Mike Shinoda "]
    }
]
const FORM = document.querySelector(".searchForm")
FORM.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const results = MyMusic.filter(function (element) {
        return searchTitle(event.target.search.value, element.title)
            || compare(element.puplished, event.target.search.value)
    })
    console.log(results)
    const ul = document.getElementsByClassName ("musicresult")[0]
    results.forEach(function(result){
        const li = document.createElement("li")
        li.innerHTML = `
            <h2 class="Music-Title">${result.title}</h2>
            <span>${result.published}</span>
          <ul class="musicGenres"></ul>
          Bandmedlemmer
          <ul class="musicActors"></ul>`
          const genres = li.querySelector(".musicGenres")
          const actorst = li.querySelector(".musicActors")
          result.genres.forEach(genre => genres.innerHTML += `<li>${genre}</li>`)
          result.actors.forEach(actor => actorst.innerHTML += `<li>${actor}</li>`)
        ul.append(li)

    })

}



function searchTitle(keyword, title) {
    return title
        .toLowerCase()
        .includes(
            keyword.toLowerCase())
}

const compare = (a, b) => a == b

function compareArray(haystack, needle){
    return haystack.find(function(item) {
        return item.toLowerCase().includes(needle.toLowerCase())
    }
)}