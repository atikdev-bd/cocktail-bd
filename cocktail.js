const cockTailApi = (search) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayApi(data.drinks))

}

const displayApi = (drinksData) => {
    const displayDiv = document.getElementById('display-div');
    displayDiv.innerHTML = ''
    drinksData.map(drink => {
        console.log(drink)
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
           <div class="card">
                <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                   <div class="card-body">
                       <h4 class="card-title">${drink.strIngredient3}</h4>
                       <h5 class="card-title">${drink.strAlcoholic}</h5>
                       <p class="card-text">${drink.strGlass}</p>
                   </div>
            </div>
         `;
        displayDiv.appendChild(div);


    })
}

const search = () => {
    const searchInput = document.getElementById('search-id');
    searchInput.value = ''
    const searchInputText = searchInput.value;
    cockTailApi(searchInputText);
}
cockTailApi()