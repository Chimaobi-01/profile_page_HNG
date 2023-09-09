const allElements = document.querySelectorAll(" [data-testid='currentDayOfTheWeek'], [data-testid='currentUTCTime']")

const [currentDayOfTheWeek, currentUTCTime] = allElements
/*********
 * currentDayOfTheWeek
**********/

const getCurrentDayOfTheWeek = () => {
    const day = new Date().getDay()
    const daysOfTheWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    daysOfTheWeek.map((e,index) => day === index ? currentDayOfTheWeek.innerHTML = e: null
    )
}
/****************************************
 * currentUTCTime
*****************************************/


const getCurrentUTCTime = () => {
    const date = new Date()
    const hour = date.getUTCHours() + 1
    const minutes = date.getUTCMinutes()
    const seconds = date.getUTCSeconds()
    const milliseconds = date.getUTCMilliseconds()
    const am = hour < 12 ? 'AM' : 'PM'
    
    currentUTCTime.innerHTML = `${hour < 10? `0${hour}`: hour}:${minutes < 10? `0${minutes}`: minutes}:${seconds < 10? `0${seconds}`: seconds}:${milliseconds} ${am}`
}













/****************************************
 * calling Functions 
*****************************************/

getCurrentDayOfTheWeek()
setInterval(() => getCurrentUTCTime(),1)