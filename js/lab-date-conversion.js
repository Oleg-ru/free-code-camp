const currentDate = new Date()
const currentDateFormat = `Current Date and Time: ${currentDate}`
console.log(currentDateFormat);
const formatDateMMDDYYYY = (date) => {
    return `Formatted Date (MM/DD/YYYY): ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}

/**
 * 
 * @param {Date} date 
 * @returns 
 */
const formatDateLong = (date) => {
    const options = {
        month: 'long',
        year: "numeric",
        day: "numeric",
    }
    return `Formatted Date (Month Day, Year): ${date.toLocaleDateString('en-US', options)}`
}

console.log(formatDateMMDDYYYY(currentDate));
console.log(formatDateLong(currentDate));
