//practice set 07

// problem no. 1
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"

// problem no. 2
// the solution of the problem no 2 is no  
// because view page source karenge to woh hume raw code dikhata hai 

// problem no. 3

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "blue"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "yellow"


// problem no. 4
Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.background = "cyan";
})

// problem no. 5
// d is the correct option none of these....