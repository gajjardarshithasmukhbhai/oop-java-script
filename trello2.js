//***************I Designed the oop java script trello v2 TO do Application**************
let myTodes={    
	name:'darshit'                   //designed the object
	day:'Monday',
	meetings:0,
	meetdone:0,
} 
let name=function (todo,name=darshit) {
	todo.name=name;
}
let meetings=function (todo/*contain whole class*/,meet=0) {      //default function
	todo.meetings=todo.meetings+meet;	
}
let meetdone=function (todo,meet){
	todo.meetings=todo.meeting-meet;
}
let reset_done=function (todo) {
	todo.meetings=0;
	todo.meetdone=0;
}
let getsummarydone=function (todo) {
	let meetleft=todo.meetings-todo.meetdone;//some begginer programmer make mistake like (-).so when you put the - so the negative value will be arrive and you put + so the value is perfect possible Ex.5+(-4)
	let name=todo.name;
	let day=todo.day;
	console.log(`hi ${name} and your meeting is left ${meetleft}` your day is ${day})
}
name(myTodes,'nikunj')
meeting(myTodes,5)
meetdone(myTodes,4)
