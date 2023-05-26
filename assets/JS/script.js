const date = document.getElementById("date")
const planner = document.getElementById("planner")
let currentTime = dayjs()
const times = [
    "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", 
    "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM"
]
date.textContent = dayjs().format('MMM D YYYY')

function createTimeBlocks() {
    for (let i = 0; i < times.length; i++) {
        const timeBlock = document.createElement("section")
        const hour = document.createElement("div")
        hour.classList.add("hour")
        hour.textContent = times[i]
        const content = document.createElement("div")
        content.classList.add("content")
        const save = document.createElement("div")
        save.classList.add("save")
        save.textContent = "Save"
        timeBlock.classList.add("time-block")
        planner.appendChild(timeBlock)
        timeBlock.appendChild(hour)
        timeBlock.appendChild(content)
        timeBlock.appendChild(save)

        
    }
}
createTimeBlocks()