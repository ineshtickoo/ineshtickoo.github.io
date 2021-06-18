const projects = [
    {
        name: "Potus",
        description: "Concept Kanye West Album, Branding and UI/UX",
        image: "https://i.imgur.com/gWxQiQB.png",
        link: "https://www.behance.net/gallery/108134777/POTUS-Concept-Kanye-West-Album-and-UIUX"
    },
    {
        name: "Hlo+",
        description: "Smart hyperlocalisation and crowd control system using 5G",
        image:"https://i.imgur.com/RR2rEan.png",
        link: "https://www.behance.net/gallery/119577627/Hlo-UIUX"

    },
    {
        name: "RediSafe",
        description: "Modern app for monitoring your health data offline and prevent contracting COVID.",
        image: "https://i.imgur.com/RR2rEan.png",
        link: "https://www.behance.net/gallery/119608771/Redisafe"
    },
    {
        name: "Sahay",
        description: "Sahay allows hospitals to work together and share resources during shortages.",
        image: "https://i.imgur.com/9x5I6Z6.png",
        link: "https://www.behance.net/gallery/118691091/Sahay-Consolidating-the-Healthcare-system?mv=email"
    },
    {
        name: "SayLore",
        description: "Concept fashion brand and shop UI/UX",
        image: "https://i.imgur.com/9x5I6Z6.png",
        link: "https://www.behance.net/gallery/90181055/SayLor-Beauty-Products"
    },
    {
        name: "Cryptocracy",
        description: "International Cryptic Hunt - branding and platform UI", 
        image: "https://i.imgur.com/Rw19KGO.png",
        link: "https://cryptichunt.com"
    },
    {
        name: "CORE",
        description: "Website for the computers society of Delhi Public School, Dwarka",
        image: "https://i.imgur.com/Ay6yWtA.png",
        link: "https://coreisus.co"
    }
];



document.querySelector('.container').innerHTML=`${
    projects.map(project => {
        return (`
            <a target="__blank" href="${project.link}">
            <div class="card" id="${project.name}box" style="background-image:url(./projects/${project.name.toLowerCase()}/cover.png) ">
                <div class="text" id="${project.name}text">
                    <h1> ${project.name} </h1>
                    <p>  ${project.description} </p>
                </div>
            </div> </a>`)
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

document.querySelectorAll('.navel').forEach(
    navel=>{
        navel.addEventListener('click', navclose)
        }
    )

document.getElementsByTagName("form")[0].setAttribute("action", "https://formspree.io/f/xvodrwln")


const skills = [
    {
        skill: "bruh",
        desc: "5 stars"
    }
]


