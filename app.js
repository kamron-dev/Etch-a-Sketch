const containerEl = document.querySelector("#container")



const createDivs = (amount) => {
    for (let i = 0; i < amount; i++) {
        const row = document.createElement('div')
        // row.classList.add('divEl') Creates extra row of divs
        

        for (let j = 0; j < amount; j++) {
            const grid = document.createElement('div')
            grid.classList.add('divElRow')
            row.appendChild(grid)
        }
        containerEl.appendChild(row)
    }
}

createDivs(16)