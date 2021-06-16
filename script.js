const projects = [
    {
        name: "Potus",
        description: "Concept Kanye West Album, Branding and UI/UX",
        image: "https://i.imgur.com/gWxQiQB.png"
    },
    {
        name: "Hlo+",
        description: "Smart hyperlocalisation and crowd control system using 5G",
        image:"https://i.imgur.com/RR2rEan.png"

    },
    {
        name: "RediSafe",
        description: "Modern app for monitoring your health data offline and prevent contracting COVID.",
        image: "https://i.imgur.com/RR2rEan.png"
    },
    {
        name: "Sahay",
        description: "Sahay allows hospitals to work together and share resources during shortages.",
        image: "https://i.imgur.com/9x5I6Z6.png"
    },
    {
        name: "SayLore",
        description: "Concept fashion brand and shop UI/UX",
        image: "https://i.imgur.com/9x5I6Z6.png"
    },
    {
        name: "Cryptocracy",
        description: "International Cryptic Hunt - branding and platform UI", 
        image: "https://i.imgur.com/Rw19KGO.png"
    },
    {
        name: "CORE",
        description: "Website for the computers society of Delhi Public School, Dwarka",
        image: "https://i.imgur.com/Ay6yWtA.png"
    }
];



document.querySelector('.container').innerHTML=`${
    projects.map(project => {
        return (`
            <div class="card" id="${project.name}box" style="background-image:url(./projects/${project.name.toLowerCase()}/cover.png) ">
                <div class="text" id="${project.name}text">
                    <h1> ${project.name} </h1>
                    <p>  ${project.description} </p>
                </div>
            </div>`)
    }).join('')
}`;


function navopen(){
    document.querySelector('.navmob').style.display = 'block'   
}
function navclose(){
    document.querySelector('.navmob').style.display = 'none'  

}

document.querySelector('#bars').addEventListener('click', navopen)
document.querySelector('#cross').addEventListener('click', navclose)

document.querySelector('.navel').addEventListener('click', navclose)


const skills = [
    {
        skill: "bruh",
        desc: "5 stars"
    }
]


