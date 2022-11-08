const generateManagerCard = (data) => {
    const {
        name,
        id,
        email,
        officeNumber
    } = data
    
    return `
            <div class="card shadow mx-2 mb-5 rounded bg-light" style="width: 18rem;">
                <div class="card-header bg-info text-white">
                    <h3>${name}</h3>
                    <h4><i class="bi bi-briefcase-fill"></i> Manager</h4>
                </div>
                <ul class="list-group mx-auto my-3 w-75">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">Office number: ${officeNumber}</li>
                </ul>
            </div>
    `
}

const generateEngineerCard = (data) => {
    const {
        name,
        id,
        email,
        github
    } = data

    return `
            <div class="card shadow mx-2 mb-5 rounded bg-light" style="width: 18rem;">
                <div class="card-header bg-info text-white">
                    <h3>${name}</h3>
                    <h4><i class="bi bi-gear"></i> Engineer</h4>
                </div>
                <ul class="list-group mx-auto my-3 w-75">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}.com">${email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${github}">${github}</a></li>
                </ul>
            </div>
    `
}

const generateInternCard = (data) => {
    const {
        name,
        id,
        email,
        school
    } = data

    return `
            <div class="card shadow mx-2 mb-5 rounded bg-light" style="width: 18rem;">
                <div class="card-header bg-info text-white">
                    <h3>${name}</h3>
                    <h4><i class="bi bi-mortarboard-fill"></i> Intern</h4>
                </div>
                <ul class="list-group mx-auto my-3 w-75">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}.com">${email}</a></li>
                    <li class="list-group-item">School: ${school}</li>
                </ul>
            </div>
    `
}

const generateHTML = (managerCard, engineerCards, internCards) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
        <title>Software Engineering Team Profile</title>
    </head>
    <body class="my-2 mt-0">
        <header class="bg-primary bg-gradient text-white text-center p-5 mb-5">
            <h1>My Team</h1>
        </header>
        <div class="d-flex flex-row justify-content-around align-items-center flex-wrap mx-5">
            ${managerCard}
            ${engineerCards}
            ${internCards}
        </div>
    </body>
    </html>
    `
}

module.exports = {
    generateManagerCard,
    generateEngineerCard,
    generateInternCard,
    generateHTML
}