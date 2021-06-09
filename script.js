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
        description: "This is an example description",
        image: "https://i.imgur.com/RR2rEan.png"
    },
    {
        name: "Sahay",
        description: "bruh",
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
        name: "CORE Website",
        description: "Computers society of Delhi Public School, Dwarka",
        image: "https://i.imgur.com/Ay6yWtA.png"
    }
];



document.querySelector('.container').innerHTML=`${
    projects.map(project => {
        return `
            <div class="card" id="${project.name}box" style="background-image:url(./projects/${project.name.toLowerCase()}/cover.png) ">
                <div class="text" id="${project.name}text">
                    <h1> ${project.name} </h1>
                    <p>  ${project.description} </p>
                </div>
            </div>`
    }).join('')
}`;
