const generateManagerCard = (data) => {
    const manager = data.filter(member => member.role === 'manager')
    console.log(manager)
}

module.exports = {
    generateManagerCard
}