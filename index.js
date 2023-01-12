import data from './data.js'

const cardContainer = document.getElementById('card-container')
const viewLess = document.getElementById('view-less')
const viewMore = document.getElementById('view-more')
let cardArr = []

// Get Card Array from /Data.js and create HTML
cardArr = data.slice(0,3).map(function(article){
    return  `<div class="card-container" id="card-container">
            <img class="image" src="${article.img}"/>
             <p class="date">${article.date}</p>
            <h2 class="title">${article.title}</h2>
            <p class="body">${article.body}</p>
            </div>`
}).join('')

cardContainer.innerHTML = cardArr
viewLess.style.display = 'none'

// addEventListeners

document.addEventListener('click', function(e){
    if (e.target.id === 'view-more') {
        viewAll()
    } else if (e.target.id === 'view-less') {
        showLess()
    }
})


function viewAll() {
    cardArr = data.map(function(article){
                return  `<div class="card-container" id="card-container">
                        <img class="image" src="${article.img}"/>
                         <p class="date">${article.date}</p>
                        <h2 class="title">${article.title}</h2>
                        <p class="body">${article.body}</p>
                        </div>`
            }).join('')
        
            cardContainer.innerHTML = cardArr
            viewMore.style.display = 'none'
            viewLess.style.display = 'block'
}


function showLess() {
    cardArr = data.slice(0,3).map(function(article){
                return  `<div class="card-container" id="card-container">
                        <img class="image" src="${article.img}"/>
                         <p class="date">${article.date}</p>
                        <h2 class="title">${article.title}</h2>
                        <p class="body">${article.body}</p>
                        </div>`
            }).join('')
            
            cardContainer.innerHTML = cardArr
            viewLess.style.display = 'none'
            viewMore.style.display = 'block'
}

