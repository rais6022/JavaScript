class RailwayForm {
    fill(givename, trainno) {
        this.name = givename
        this.trainno = trainno
    }
    
    submit() {
        alert(this.name + " Your form is submited for train number: " + this.trainno)
    }
    
    cancel() {
        alert(this.name + " This form is canclled for train number: " + this.trainno)
    }
    
}

// Create a form for Harry
let harryForm = new RailwayForm()
// Fill the  form with Harry's details
harryForm.fill("Harry" , 017714)


// Create a forms for Rohan
let rohanForm1 = new RailwayForm()
let rohanForm2 = new RailwayForm()
// Fill the  forms with Rohan's details
rohanForm1.fill("Rohan" , 129211)
rohanForm2.fill("Rohan" , 124420)

harryForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()
