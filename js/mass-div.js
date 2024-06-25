function indexDivs() {
    // Find every div
    const divs = document.querySelectorAll('div');


    // Add a child div to each div
    divs.forEach((div, index) => {
        // Create a new div
        const newDiv = document.createElement('div');

        // Add the new div to the div
        div.appendChild(newDiv);
    });
}