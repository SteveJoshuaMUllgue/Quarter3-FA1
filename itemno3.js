var nn = "Steve Joshua";
var height = 64;
var weight = 59;

var heightconv1 = height%12;
var heightconv2 = (height-heightconv1)/12;
var weightconv = weight*2.205;

const shareinfo = confirm("Do you agree to share your personal information?");
if (shareinfo) 
            {
                console.log("Name: " +nn+ "\nHeight: " +heightconv2+ "'" +heightconv1+ "'" + "\nWeight: " +weightconv+ " lbs");
            } 

else 
    {
        console.log("User does not wish to share his/her information.");
    }