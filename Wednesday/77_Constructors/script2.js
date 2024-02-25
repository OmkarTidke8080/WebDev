class RailwayForm{

    constructor(givenName,trainNo,address)
    {
        console.log("Constructor called..." +givenName + ":" +trainNo)
    
        this.name = givenName
        this.trainNo = trainNo
        this.address = address
    }
    
    Preview()
    {
        alert(this.name+"Form successfully submitted for train Number :" + this.trainNo +" and your address is : " + this.address)
    }
    submit()
    {
        alert(this.name+"Form successfully submitted for train No :"+ this.trainNo)
    }

    cancel()
    {
        alert(this.name+"Form cancelled successfully for train No :" + this.trainNo)
        this.trainNo = 0
    }

}

let OmkarForm  = new RailwayForm("Omkar", 13422, "Pune")
OmkarForm.Preview()
OmkarForm.submit()
OmkarForm.cancel()
OmkarForm.Preview()

