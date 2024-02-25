class RailwayForm{
    submit()
    {
        alert(this.name+"Form successfully submitted for train No :"+ this.trainNo)
    }

    cancel(){
        alert(this.name+"Form cancelled successfully for train No :" + this.trainNo)
    }

    fill(givenName,trainNo)
    {
        this.name = givenName
        this.trainNo = trainNo
    }
}

let OmkarForm = new RailwayForm()
OmkarForm.fill("Omkar",14356)

let rajForm = new RailwayForm()
rajForm.fill("Raj",13449)

OmkarForm.submit()
rajForm.submit()
rajForm.cancel()