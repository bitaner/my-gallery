'use strict'

$(onInit)

function onInit() {
  console.log('hello')
  // renderProjs()
  renderProjs()
}

function renderProjs() {
  console.log('hello2')
  var projs = getProjs()
  // console.log(projs)
  var strHtmls = projs.map(function (proj) { // onclick on main or replace a to button
    // data-toggle="modal" href="#portfolioModal1"
    return `
        <div class="col-md-4 col-sm-6 portfolio-item" onclick="onReadProj('${proj.id}')" data-toggle="modal" href="#portfolioModal1">
        <a class="portfolio-link ${proj.id}">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/${proj.id}.jpg" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
        </div>
        </div>
        `
  })
  // console.log(strHtmls)
  document.querySelector('.projs').innerHTML = strHtmls.join('')
}



// function onReadProj(projId) {
//   console.log('hello6')
//   var proj = getProjById(projId)
//   var elModal = document.querySelector('.modal-body')
//   elModal.querySelector('h2').innerText = proj.name
//   elModal.querySelector('p').innerText = proj.desc
//   elModal.
//   var elPic = document.querySelector('.modal-pic-container')
//   elPic.innerHTML = `<img class="modal-pic" src="img/${proj.title}.jpg" alt=""></img>`
//   var elRateSection = document.querySelector('.rate-proj')
//   elRateSection.innerHTML = `
//     <button class="rate-down" onclick="onRateDown('${projId}')">-</button>
//     rating:
//     <span class="rating">${proj.rate}</span>      
//     <button class="rate-up" onclick="onRateUp('${projId}')">+</button> 
//     `
//   elModal.hidden = false
// }

function onCloseModal() {
  console.log('hello7')
  document.querySelector('.modal').hidden = true
}

// <h2>Mine sweeper</h2>
// <p class="item-intro text-muted">classic 90' game, highly addictive</p>
// <img class="img-fluid d-block mx-auto" src="img/portfolio/Mine-sweeper.jpg" alt="">
// <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
//   blanditiis
//   dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
//   cupiditate,
//   maiores repudiandae, nostrum, reiciendis facere nemo!</p>
// <ul class="list-inline">
//   <li>Date: Oct 2021</li>
//   <li>Client: Coding-Academy</li>
//   <li>Category: retro-games</li>
// </ul>
// <button class="btn btn-primary" data-dismiss="modal" type="button">
//   <i class="fa fa-times"></i>
//   Close Project</button>


function onReadProj(projId) {
  // console.log('helloModal')
  var proj = getProjById(projId)
  var strHtmls =
    `
       <h2>${proj.name}</h2>
// <p class="item-intro text-muted">${proj.desc}</p>
// <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.jpg" alt="">
// <p>${proj.labels}</p>
// <ul class="list-inline">
//   <li>Date: ${proj.publishedAt}</li>
//   <li>Client: Coding-Academy</li>
//   <li>Category: retro-games</li>
// </ul>
// <button class="btn btn-primary" data-dismiss="modal" type="button">
//   <i class="fa fa-times"></i>
//   Close Project</button>
        `
   var elModal = document.querySelector('.modal-body')
   elModal.innerHTML = strHtmls
}