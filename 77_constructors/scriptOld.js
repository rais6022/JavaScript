class RailwayForm {


    constructor(givename, trainno) {
        console.log("CONSTRUCTOR CALLED....." + givename + " " + trainno)
        this.name = givename
        this.trainno = trainno
    }

    // fill(givename, trainno) {
    //     this.name = givename
    //     this.trainno = trainno
    // }

    submit() {
        alert(this.name + " Your form is submited for train number: " + this.trainno)
    }

    cancel() {
        alert(this.name + " This form is canclled for train number: " + this.trainno)
    }

}

// Create and fill form for Harry
let harryForm = new RailwayForm("Harry", 017714)
// no need to Fill the  form with Harry's details
// harryForm.fill("Harry" , 017714)


// Create and fill forms for Rohan
let rohanForm1 = new RailwayForm("Rohan", 129211)
let rohanForm2 = new RailwayForm("Rohan", 124420)
// no need to Fill the  forms with Rohan's details
// rohanForm1.fill("Rohan" , 124420)
// rohanForm2.fill("Rohan" , 129211)

harryForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()