const nav = document.querySelector('.nav');
const lis = document.querySelectorAll('.container ul li a');

window.addEventListener('scroll', fixNav);

function fixNav(){
    if (window.scrollY > nav.offsetHeight + 150){
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}

lis.forEach(li => {
    removeCurrent();
    li.addEventListener('click', (e)=> {
        removeCurrent();
        li.classList.add('current');
    })
})

function removeCurrent(){
    lis.forEach(li=> {
        li.classList.remove('current');
    })
}
