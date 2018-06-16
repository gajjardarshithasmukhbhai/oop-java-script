//***************I Designed the trilog pure java script app
//oop java script trello v2 TO do Application**************
var myTodes={    
	name:'darshit',                  //designed the object
	day:'Monday',
	meetings:0,
	meetdone:0,
} 
var name=function (todo,name=darshit) {
	todo.name=name;
}
var meetings=function (todo/*contain whole class*/,c1=0) {      //default function
	todo.meetings=todo.meetings+c1;	
}
var meetdone=function (todo,c2=0){
	todo.meetdone=todo.meetdone-c2;
}
var reset_done=function (todo) {
	todo.meetings=20;
	todo.meetdone=30;
}
var getsummarydone=function (todo) {
	var meetleft=todo.meetings+todo.meetdone;//some begginer programmer make mistake like (-).so when you put the - so the negative value will be arrive and you put + so the value is perfect possible Ex.5+(-4)
	var name=todo.name;
	var day=todo.day;
	return `hi ${name} and your meeting is left ${meetleft} your day is ${day}`;
}
name(myTodes,'nikunj')
meetings(myTodes,14)
meetdone(myTodes,4)
console.log(getsummarydone(myTodes))