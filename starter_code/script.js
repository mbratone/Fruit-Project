const input = document.getElementById('fruit');
const suggestionsList = document.querySelector('.suggestions ul');

const fruitList = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


function search(str) {
    str = str.toLowerCase();
    return fruitList.filter(fruit => fruit.toLowerCase().includes(str));
}

function searchHandler(e) {
    const inputVal = e.target.value;
    const results = search(inputVal);
    showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
    suggestionsList.innerHTML = '';

	if (inputVal.trim() === '') {
        suggestionsList.style.display = 'none';
        return;
    }

    results.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = result;
        suggestionsList.appendChild(listItem);
    });

    suggestionsList.style.display = results.length > 0 ? 'block' : 'none';
    suggestionsList.style.top = input.offsetTop + 'px';
}

function highlightSuggestion(e) {
    const suggestions = document.querySelectorAll('.suggestions ul li');
    suggestions.forEach(suggestion => suggestion.classList.remove('highlighted'));

    if (e.target.tagName === 'LI') {
        e.target.classList.add('highlighted');
    }
}

function useSuggestion(e) {
    if (e.target.tagName === 'LI') {
        const selectedFruit = e.target.textContent;
        input.value = selectedFruit;
        suggestionsList.style.display = 'none';
    }
}

input.addEventListener('input', searchHandler);
suggestionsList.addEventListener('mouseover', highlightSuggestion);
suggestionsList.addEventListener('click', useSuggestion);
