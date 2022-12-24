const containerEl = document.querySelector("#container")
const buttonEl = document.querySelector(".elementsBtn")

// Function that takes a number as an argument and creates a grid of divs
const createDivs = (amount) => {
    for (let i = 0; i < amount; i++) {
        const row = document.createElement('div')
        // row.classList.add('divEl') Creates extra row of divs
        

        for (let j = 0; j < amount; j++) {
            const grid = document.createElement('div')
            grid.classList.add('divElRow')
            row.appendChild(grid)
            grid.addEventListener('mouseover', () => {
                grid.classList.add('divElDrawn')
            })
        }
        containerEl.appendChild(row)
    }
}

createDivs(16)

buttonEl.addEventListener('click', () => {
    //Clear out the divs created on page load ( line 23)
    containerEl.innerHTML = ''
    // Prompt for a new divs amount 
    let newNum = prompt('Enter a number! (No more than 100)')
    if (newNum > 100) newNum = 100; 
    if (newNum < 1) newNum = 2;
    createDivs(newNum)
})