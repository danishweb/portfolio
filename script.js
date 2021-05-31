const hamburger = document.querySelector('.header .navbar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .navbar .nav-list ul');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
	var scroll_position = window.scrollY;
	if(scroll_position > 250){
		header.style.backgroundColor = "#29323c"
		header.style.transition = "0.3s background-color ease";
	} else{
		header.style.backgroundColor = "transparent"
	}
});