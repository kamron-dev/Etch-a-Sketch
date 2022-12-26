const containerEl = document.querySelector("#container")
const buttonEl = document.querySelector(".elementsBtn")
const clearBtn = document.querySelector(".clearBtn")
const rainbowBtn = document.querySelector(".rainbowBtn")





/* Function that takes number and creates div grid with that number on each side 
and fits all divs by adding gridTemplateCols and gridTemplateRows to the parent containerEl */ 

const createDivs = (number) => {
    containerEl.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    containerEl.style.gridTemplateRows = `repeat(${number}, 1fr)`;
        

    for (let i = 1; i <= number * number; i++) {
        let newDivs = document.createElement('div')
        newDivs.classList.add('divEl')
        containerEl.appendChild(newDivs)
        newDivs.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = "black";
        })
    }
}

rainbowBtn.onclick = () => {
    let allNodes = document.querySelectorAll('.divEl')
    allNodes.forEach(node => {
        node.style.backgroundColor = "white"
    })
    allNodes.forEach(node => {
        node.addEventListener('mouseover', () => {
            node.style.backgroundColor = randomColor()
        })
    })
    

}

const randomColor = () => {
    const randomR = Math.floor(Math.random() * 255 + 1);
    const randomG = Math.floor(Math.random() * 255 + 1);
    const randomB = Math.floor(Math.random() * 255 + 1);

    return `rgb(${randomR} ${randomG} ${randomB})`
}



createDivs(16)

buttonEl.addEventListener('click', () => {
    //Clear out the divs created on page load ( line 22)
    containerEl.innerHTML = ''
    // Prompt for a new divs amount 
    let newNum = prompt('Enter a number! (No more than 100)')
    if (newNum > 100) newNum = 100; 
    if (newNum < 1) newNum = 2;
    createDivs(newNum)
});

// Creating a button to clear out the grid DON'T FORGET TO PUT THE DOT (.) IN FRONT OF CLASS SELECTORS
clearBtn.addEventListener('click', () => {
    let allNodes = document.querySelectorAll('.divEl')
    allNodes.forEach(node => {
        node.style.backgroundColor = "white"
    });
    
})

