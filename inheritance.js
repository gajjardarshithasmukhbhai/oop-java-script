//********java script inheritance*********
//dog and sog both are work like class
//but the dog is the parent class and sog is the child class
//the name and subject both are parameter 
//the sog is take the name,subject,age,subject 
function Dog(name,subject){
	this.name=name;
	this.subject=subject;
}
function Sog(name,subject,age) {
	Dog.call(this,name,subject)
	this.age=20;
}
Sog.prototype=Object.create(Dog.prototype);
var dog1=new Sog("gajjar nikunj","computer science",23)
console.log(dog1)

//java script herirachical inheritance
//the e1 is parent class
//the e2 and e3 is child class
//             e 1
//              |
//           e2````e3

function e1(name,subject){
	this.name=name;
	this.subject=subject;
}
function e2(name,subject,age)
{
	e1.call(this,name,subject);
	this.age=20;
}
function e3(name,subject,age,price) {
	e1.call(this,name,subject);
	this.age=30;
	this.price=300;	
}
e2.prototype=Object.create(e1.prototype);
e3.prototype=Object.create(e1.prototype);

console.log(e3("patel jeegnesh","java script",23,344))
console.log(e2("patel nikunj","c++",32))