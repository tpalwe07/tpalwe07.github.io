
var x = window.matchMedia("(max-width: 800px)")

if(x.matches){
    //Auto Close Hamburger Tab after touching it 
    const navLinks = document.querySelectorAll('.nav-item')
    const menuToggle = document.getElementById('navbarsExample05')
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
    navLinks.forEach((l) => {
        l.addEventListener('click', () => { bsCollapse.toggle() })
    })
}



const navbar = document.getElementsByClassName('navbar-nav')[0];

navbar.addEventListener('click', (e)=> {
    // remove active class from all child anchors
    for (let i = 0; i < navbar.children.length; i++) {
        const element = navbar.children[i];
        element.children[0].classList.remove('active')    
    }
    // add active class to only clicked anchor tag
    e.target.classList.add('active');
})
