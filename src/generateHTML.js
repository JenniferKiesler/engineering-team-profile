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


module.exports = {
    generateManagerCard,
    generateEngineerCard
}