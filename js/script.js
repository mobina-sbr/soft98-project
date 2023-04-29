let iconSoroll = document.querySelector('.soft-icon');
let item = document.querySelector('.alist')

window.onscroll = function(){
   if (document.documentElement.scrollTop > 150){
        iconSoroll.style.display = 'block';
        item.style.display = 'none';
    }else if(document.documentElement.scrollTop < 150){
        iconSoroll.style.display = 'none';
        item.style.display = 'block';
    }
}


let icon = document.querySelector('.aa');
let popupholder = document.querySelector('.popupholder');
let btnFooter = document.querySelector('.btn-footer')

icon.addEventListener('click', ()=>{
    popupholder.style.visibility = 'visible';
})

btnFooter.addEventListener('click' , ()=>{
    popupholder.style.visibility = 'hidden';
})


let person = document.querySelector('.person');
let popupholder2 = document.querySelector('.popupholder-2');
let spnPop = document.querySelector('.spn-pop');

person.addEventListener('click',()=>{
    popupholder2.style.visibility = 'visible';
})
spnPop.addEventListener('click', ()=>{
    popupholder2.style.visibility = 'hidden';
})