const projects = [
    {
        name: "Potus",
        description: "This is an example description",

    },
    {
        name: "Hlo+",
        description: "Randirona",

    },
    {
        name: "RediSafe",
        description: "This is an example description",

    },
    {
        name: "Sahay",
        description: "bruh"
    }
];



document.querySelector('.container').innerHTML=`${
    projects.map(project => {
        return `
            <div class="card" id="${project.name}box" style="background-image:url(./projects/${project.name}/cover.png) ">
                <div class="text" id="${project.name}text">
                    <h1> ${project.name} </h1>
                    <p>  ${project.description} </p>
                </div>
            </div>`
    }).join('')
}`;
