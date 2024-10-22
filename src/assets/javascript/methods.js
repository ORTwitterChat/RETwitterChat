/**
 * This function validate your string for: null, undefined, ''
 * @param {string} str String value to validation
 * @returns 
 */
export function isValidString(str){
    if (str){
        if (str === ''){
            return false
        }
    }

    return true
}

/**
 * This function return object with:
 * - year
 * - month
 * - day
 * - hour
 * - minute
 * - second
 * @returns Object date detail
 */
export function newDate(){
    const date = new Date()

    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }
}