'use strict'


function onInit() {
    console.log('hello')
    // renderProjs()
    renderProjs()
}

function renderProjs() {
    console.log('hello2')
    var projs = getProjs()
    var strHtmls = projs.map(function (proj) { 
        return `
            <article class="proj-preview">
                <img class="card-img-top" src="img/${proj.title}.jpg" alt="">
                <span class="delete-btn" onclick="onRemoveProj('${proj.id}')">X</span>
                <div class="card-body">
                    <h5 class="card-title">${proj.title}</h5>
                    <p class="card-text">price: ${proj.price} $ </p>
                    <a href="#"  onclick="onReadProj('${proj.id}')">Details</a>
                    <a href="#" onclick="onUpdateProj('${proj.id}')">Update</a>
            </div>
        </article>
        `
    })
    document.querySelector('.projs-container').innerHTML = strHtmls.join('')
    showPages()
}



function onReadProj(projId) {
    console.log('hello6')
    var proj = getProjById(projId)
    var elModal = document.querySelector('.modal')
    elModal.querySelector('h1').innerText = proj.title
    elModal.querySelector('h2').innerText = proj.price
    elModal.querySelector('p').innerText = proj.backCover
    var elPic = document.querySelector('.modal-pic-container')
    elPic.innerHTML =`<img class="modal-pic" src="img/${proj.title}.jpg" alt=""></img>`
    var elRateSection = document.querySelector('.rate-proj')
    elRateSection.innerHTML = `
    <button class="rate-down" onclick="onRateDown('${projId}')">-</button>
    rating:
    <span class="rating">${proj.rate}</span>      
    <button class="rate-up" onclick="onRateUp('${projId}')">+</button> 
    ` 
    elModal.hidden = false
}

function onCloseModal() {
    console.log('hello7')
    document.querySelector('.modal').hidden = true
}

