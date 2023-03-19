/**
  * Select color input
  * Select size input
  * When size is submitted by the user, call makeGrid()
*/

function makeGrid() {
    const widthValue = document.querySelector("#inputWidth").value;
    const heightValue = document.querySelector("#inputHeight").value;
    
    const table = document.querySelector("#pixelCanvas");
    
    for (let width = 0; width < widthValue; width++) {
      const trElem = document.createElement("tr");
      table.appendChild(trElem);
      for (let height = 0; height < heightValue; height++) {
        const tdElem = document.createElement("td");
        tdElem.addEventListener("click", (event) => {
          const colorValue = document.querySelector("#colorPicker").value;
          event.target.style.backgroundColor = colorValue;
                
    
        });
        trElem.appendChild(tdElem);

     } 
   }  
}
    
    function clearGrid() {
        const table = document.querySelector("#pixelCanvas");
        let row = table.firstElementChild;
        while (row) {
            row.remove();
            row = table.firstElementChild;
        }
    }
    document.addEventListener("submit", (event) => {
        event.preventDefault();
        clearGrid();
        makeGrid();
});