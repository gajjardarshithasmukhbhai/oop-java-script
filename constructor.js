//*****************WELCOME oop Java script*******************
//visit our website more info cismox.com


function Person()//When you make the constructor so that time must be defined the person first character wil be uppercase
{
	this.name='darshit';
	this.father_name='hasmukhbhai';//this is keyword.it is used for adding the property der object
	this.mother_name='anandiben';
}
var der= new Person();//der is the objetct of person constructor
console.log(der)

//parameterized constructor,loop combination
let cd=new Darshit("nikunj",21);
let ed=new Dsee("sunil",22);
function Darshit(name,num){
	let a=0;
       for(i=1;i<=num;i++)
       {
           a=a+i
       }	
       console.log(`name->${name} age->${num} sum->${a}`)
}
function Dsee(name,num) {
	let a=0
	for(i=1;i<=num;i++)
       {
           a=a+i
       }	
       console.log(`name->${name} age->${num} sum->${a}`)
}
//declare the method in constructor
var de=new Dasr();
function Dasr() {
	this.data="gajjar";
	this.erd=function () {           //method will be define
		console.log("gajjar")
	}
}
de.erd()//alsways call the function through object