class RailwayForm {


    constructor(givename, trainno, address) {
        console.log("CONSTRUCTOR CALLED....." + givename + " " + trainno + " " + address)
        this.name = givename
        this.trainno = trainno
        this.address = address

    }

    preview() {
        alert(this.name + " Your form is for train number: " + this.trainno + " and your address is " + this.address)
    }

    submit() {
        alert(this.name + " Your form is submited for train number: " + this.trainno)
    }

    cancel() {
        alert(this.name + " This form is canclled for train number: " + this.trainno)
        this.trainno = 0
    }

}

let harryForm = new RailwayForm("Harry", 13488, "420, Pacific Ocean, Bihar - 000555")

harryForm.preview()
harryForm.submit()
harryForm.cancel()
harryForm.preview()