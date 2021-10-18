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
  var strHtmls = projs.map(function (proj) {
    var badgestrhtmls = proj.labels.map(function (label) { // eden you need this
      return `<span class="badge-info">'${label}'</span>` // eden you need this and line ${badgestrhtmls}
    }) // eden you need this
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
            ${badgestrhtmls}
            <p class="text-muted">${proj.title}</p>
          </div>
        </div>
          `
  })
  document.querySelector('.projs').innerHTML = strHtmls.join('')
}




function onCloseModal() {
  console.log('hello7')
  document.querySelector('.modal').hidden = true
}

function onReadProj(projId) {
  // console.log('helloModal')
  var proj = getProjById(projId)
  var strHtmls =
    `
      <h2>${proj.name}</h2>
      <p class="item-intro text-muted">${proj.desc}</p>
      <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.jpg" alt="">
      <p>${proj.labels}</p>
      <ul class="list-inline">
        <li>Date: ${proj.publishedAt}</li>
        <li>Client: Coding-Academy</li>
        <li>Category: retro-games</li>
      </ul>
      <a class="btn btn-primary" href="${proj.url}" target="_blank"><i class="fa fa-play"></i>
        Check it out!</a>
      <button class="btn btn-primary" data-dismiss="modal" type="button">
      <i class="fa fa-times"></i>
      Close Project</button>
        `
  var elModal = document.querySelector('.modal-body')
  elModal.innerHTML = strHtmls
}