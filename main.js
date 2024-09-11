// dark mode 
var dark = document.querySelector("body");
document.querySelector(".moon").onclick = night;
function night(){
	dark.classList.toggle("dark_mode");
	bodyst.classList.toggle("bodystyle");
}
// dark mode ends here

// search bar here 
var search_var = document.querySelector(".search_div");
document.querySelector(".search").onclick = show;
function show(){
	search_var.classList.toggle("show_data");
	form_var.classList.remove("show_data");
	nav_var.classList.remove("show_data");
}

// search bar ends here



// form bar here

var form_var = document.querySelector(".form_div");
document.querySelector(".user").onclick = show1;
function show1(){
	form_var.classList.toggle("show_data");
	search_var.classList.remove("show_data");
	nav_var.classList.remove("show_data");
}

// form bar ends here


// menubar start here 

var nav_var = document.querySelector(".navbar_box_div");
document.querySelector(".menu").onclick = show2;
function show2(){
		nav_var.classList.toggle("show_data");

	if(nav_var.style.display === "none"){
			nav_var.style.display = "block";
			form_var.classList.remove("show_data");
			search_var.classList.remove("show_data");
	}

	else{
		nav_var.style.display = "none";
	}

}	

// menu bar ends here




// set interval and get interval 
function main_Animate(){
	var set = setInterval(magic,1);
	let num1 = 0;

	function magic(){
	num1 = num1 + 500;
	var a = document.querySelector('.program_question').innerHTML = "<p>" + num1 + "+ </p>";

	if(num1 == 500000){
		clearInterval(set);
	}
}


// second interval
	var set2 = setInterval(magic2,1);
		let num2 = 0;

		function magic2(){
			num2 = num2 + 500;
			var b = document.querySelector('.compitison_question').innerHTML = "<p>" + num2 + "+ </p>";

			if(num2 == 600000){
				clearInterval(set2);
			}
		}	



// thirds
	var set3 = setInterval(magic3,1);
		let num3 = 0;
		function magic3(){
			num3 = num3 + 500;
			var b = document.querySelector('.gk_question').innerHTML = "<p>" + num3 + "+ </p>";

			if(num3 == 800000){
				clearInterval(set3);
			}
		}

}


// condition when the cursor was touch the div then call a function
var body = document.querySelector("body").onload = run;
function run(){
	main_Animate();
}


// ends here question animation



// showquerry user answer 


// first question answer start here

var show_ans1 = document.querySelector(".ans1");
var show_ans_down1 = document.querySelector(".down").onclick = cans1;
function cans1(){
	var down1_desgin = document.querySelector(".down");
	down1_desgin.classList.toggle("desgin");
	show_ans1.classList.toggle("answershow");

}


// second question start here 
var show_ans2 = document.querySelector(".ans2");
var show_ans_down2 = document.querySelector(".down2").onclick = cans2;
function cans2(){
	var down1_desgin = document.querySelector(".down2");
	down1_desgin.classList.toggle("desgin");
	show_ans2.classList.toggle("answershow");

}

// thirds question answer start here 
var show_ans3 = document.querySelector(".ans3");
var show_ans_down3 = document.querySelector(".down3").onclick = cans3;
function cans3(){
	var down1_desgin = document.querySelector(".down3");
	down1_desgin.classList.toggle("desgin");
	show_ans3.classList.toggle("answershow");

}

// four
var show_ans4 = document.querySelector(".ans4");
var show_ans_down4 = document.querySelector(".down4").onclick = cans4;
function cans4(){
	var down1_desgin = document.querySelector(".down4");
	down1_desgin.classList.toggle("desgin");
	show_ans4.classList.toggle("answershow");

}

// five question start here 
var show_ans5 = document.querySelector(".ans5");
var show_ans_down5 = document.querySelector(".down5").onclick = cans5;
function cans5(){
	var down1_desgin = document.querySelector(".down5");
	down1_desgin.classList.toggle("desgin");
	show_ans5.classList.toggle("answershow");

}


// six
var show_ans6 = document.querySelector(".ans6");
var show_ans_down6 = document.querySelector(".down6").onclick = cans6;
function cans6(){
	var down1_desgin = document.querySelector(".down6");
	down1_desgin.classList.toggle("desgin");
	show_ans6.classList.toggle("answershow");

}

// seven question start here 
var show_ans7 = document.querySelector(".ans7");
var show_ans_down7 = document.querySelector(".down7").onclick = cans7;
function cans7(){
	var down1_desgin = document.querySelector(".down7");
	down1_desgin.classList.toggle("desgin");
	show_ans7.classList.toggle("answershow");

}

// eight question start here 
var show_ans8 = document.querySelector(".ans8");
var show_ans_down8 = document.querySelector(".down8").onclick = cans8;
function cans8(){
	var down1_desgin = document.querySelector(".down8");
	down1_desgin.classList.toggle("desgin");
	show_ans8.classList.toggle("answershow");

}