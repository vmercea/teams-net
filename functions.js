let allTeams = [];

function getHtmlTeams(teams){
    return teams.map(team => {
        return `<tr>
            <td>${team.members}</td>
            <td>${team.name}</td>
            <td>${team.url}</td>
            <td>x  </td>
        </tr>`
    }).join("")
}

function showTeams(teams) {
    const html = getHtmlTeams(teams);
     
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = html;
}

fetch("teams.json")
    .then(r => r.json())
    .then(teams =>{
        allTeams = teams;
        showTeams(teams);
    });

function addTeam(){
    console.warn(`save team`, JSON.stringify(team));
    fetch("add.json", {
        method:"POST"
        body: JSON.stringify(team)
    })
        .then(r => r.json())
        .then(status =>{
            console.warn(`status`, status);
        });
}
    

function saveTeam() {
    var members = document.querySelector("input[name=members]").value;
    var name = document.querySelector("input[name=name]").value;
    var url = document.querySelector("input[name=url]").value;

    const team = {
        name: name,
        members: members,
        url: url
    };
    addTeam(team);

}

 

 