function getHoursPosted(date) {
    return Math.floor(Math.abs(new Date() - date) / 3600000) + ' Hours Ago'
}

module.exports = getHoursPosted;