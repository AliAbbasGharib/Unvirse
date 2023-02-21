let btnOpen = document.getElementById('open');
let btnClose = document.getElementById('close');
let container =document.querySelector('.nav');

btnClose.onclick = function()
{
    container.classList.add('hide');
    this.classList.add('hide');
    btnOpen.classList.remove('hide');
}
btnOpen.onclick = function()
{
    container.classList.remove('hide');
    this.classList.add('hide');
    btnClose.classList.remove('hide');
}
