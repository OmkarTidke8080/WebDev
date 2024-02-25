class RailwayForm{

    constructor(givenName,trainNo)
    {
        console.log("Constructor called..." +givenName + ":" +trainNo)
    
        this.name = givenName
        this.trainNo = trainNo
    }
    
    submit()
    {
        alert(this.name+"Form successfully submitted for train No :"+ this.trainNo)
    }

    cancel()
    {
        alert(this.name+"Form cancelled successfully for train No :" + this.trainNo)
    }

}

// create and fill the form
let OmkarForm = new RailwayForm()
OmkarForm.fill("Omkar",14356)

//create and fill the form
let rajForm1 = new RailwayForm("Raj",13449)
let rajForm2 = new RailwayForm("Raj",13450)


// rajForm1.fill()
// rajForm2.fill()



OmkarForm.submit()
rajForm1.submit()
rajForm2.submit()
rajForm21.cancel()