var nn = "Steve Joshua";
var height = 64;
var weight = 59;

var heightconv1 = height%12;
var heightconv2 = (height-heightconv1)/12;
var weightconv = weight*2.205;

alert("Name: " +nn+ "\nHeight: " +heightconv2+ "'" +heightconv1+ "'" + "\nWeight: " +weightconv+ " lbs");