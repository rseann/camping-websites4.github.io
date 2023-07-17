//adding a funtion to show and close navbar for responsive view on click
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}
//close function
document.querySelector('#nav-close').onclick = () => {
    navbar.classList.remove('active');
}

//adding a funtion for search 
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.add('active');
}
//close function
document.querySelector('#close-search').onclick = () => {
    searchForm.classList.remove('active');
}

//scroll controller
window.onscroll = () => {
    navbar.classList.remove('active');
    if(window.scrollY > 0 ){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }
}


//Adding Active function to navlinks
 // Get all the nav links
 const navLinks = document.querySelectorAll('.nav-link');
            
 // Add click event listener to each nav link
 navLinks.forEach(link => {
   link.addEventListener('click', () => {
     // Remove active class from all nav links
     navLinks.forEach(link => link.classList.remove('active'));

     // Add active class to the clicked link
     link.classList.add('active');
   });
 });