const searchInput = document.getElementById('substr');
const select = document.querySelector('.search select');
const allCells=document.querySelectorAll('.table .cell')
const searchButton = document.querySelector('.search button');
const quantity=document.getElementById('quantity');

function handleSearchButtonClick() {
    const selectValue = select.value;
    const cells = document.querySelectorAll('.table .cell[data-header="' + selectValue + '"]');
    let totalMatches = 0;

    const searchValue = searchInput.value.toLowerCase();
    

    allCells.forEach(function(cell) {
        cell.style.color = 'initial';
    });

    cells.forEach(function(cell) {
        const cellText = cell.textContent.toLowerCase();
        if (cellText.includes(searchValue)) {
            cell.style.color = 'red';
            totalMatches += 1;
        }
    });


    if (totalMatches==0)
        quantity.textContent = "ничего не найдено";
    else 
        quantity.textContent = totalMatches;
}

searchButton.addEventListener('click', handleSearchButtonClick);