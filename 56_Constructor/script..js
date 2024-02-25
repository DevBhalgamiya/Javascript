class RailwayForm {
    constructor(givenname, trainno, address) {
      console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno)
      this.name = givenname
      this.trainno = trainno
      this.address = address
    }
  
    preview() {
      alert(this.name + ": Your form is for train number: " + this.trainno + " and your address is " + this.address)
    }
    
    submit() {
      alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
    
    cancel() {
      alert(this.name + ": This from is cancelled for train number: " + this.trainno)
      this.trainno = 0
    }
  }
  
  let CherryForm = new RailwayForm("Cherry", 13488, "420, Pacific Ocean, Ocean, Bihar = 0000555")
  CherryForm.preview()
  CherryForm.submit()
  CherryForm.cancel()
  CherryForm.preview()