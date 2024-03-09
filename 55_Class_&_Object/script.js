class Railwayform{
    submit(){
      alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
    cancel(){
      alert(this.name + ": This from is cancelled for train number: " + this.trainno)
    }
    fill(givenname, trainno){
      this.name = givenname
      this.trainno = trainno
    }
  }
  
  // Create a form for harry
  let CherryForm = new Railwayform()
  // Fill the form with Harry's details
  CherryForm.fill("Harry", 145316)
  
  // Create a forms for rohan
  let rohanForm1 = new Railwayform()
  let rohanForm2 = new Railwayform()
  // Fill the forms with Rohan's details
  rohanForm1.fill("Rohan", 222420)
  rohanForm2.fill("Rohan", 2229211)
  
  CherryForm.submit()
  rohanForm1.submit()
  rohanForm2.submit()
  rohanForm1.cancel()