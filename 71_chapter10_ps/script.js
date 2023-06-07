let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((contests) => {
    console.log(contests);
    ihtml = ""
    for (item in contests) {
        console.log(contests[item]);
        ihtml += `
        <div class="card mx-2 my-2" style="width: 22rem;">
                <img src="https://whizpa.com/sites/default/files/field/image/techbob_game_coding_competition.png" class="card-img-top" alt="...">
                <div class="card-body ">
                  <h5 class="card-title">${contests[item].name}</h5>
                  <p class="card-text">Status is ${contests[item].status} and site is ${contests[item].site}</p>
                  <p class="card-text">In 24 hours? ${contests[item].in_24_hours}</p>
                  <p>Starts at: ${contests[item].start_time}</p>
                  <p>ends at: ${contests[item].end_time}</p>
                  <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Page</a>
                </div>
              </div>
              `
        cardContainer.innerHTML = ihtml
    }
})





/* **************** NOTS APP (REMAINING QUESTION OF PRACTICE SET)  ****************** */
// let n = localStorage.getItem("note")
// alert ("your note is " + n)

// let a = prompt("Enter your note")
// if(a){
//     localStorage.setItem("note", a)
// }

// let c = confirm("Do you want to delete your note")
// if (c){
//     localStorage.removeItem("note")
//     alert("Note Deleted Successfully!")
// }


