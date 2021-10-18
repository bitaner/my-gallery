console.log('Starting up');

function sendMassage(){
// console.log('msg')
const ELMAIL = document.querySelector('.massage-mail')
const MAIL = ELMAIL.value
// console.log(MAIL)
const ELSUBJ = document.querySelector('.massage-sub')
const SUBJ = ELSUBJ.value
// console.log(SUBJ)
const ELBODY = document.querySelector('.massage-body')
const BODY = ELBODY.value
// console.log(BODY)
const link = `https://mail.google.com/mail/?view=cm&fs=1&to=${MAIL}&su=${SUBJ}&body=${BODY}`
window.open(link, '_blank').focus()
}
