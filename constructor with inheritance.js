//parent class
let Ex1={
	father_name:"hasmukhbhai",
	mother_name:"anandiben",
	title:"inheritance",
}
//child class
let Ex2={
	job:"software engineer",
}
function x1(todo,tile,fathename,mothename) {
    todo.father_name=fathename;
    todo.mother_name=mothename;
    todo.title=tile;
}
function x2(todo,tile,fathename,mothename,jo) {
	x1.call(this,tile,fathename,mothename)
	todo.job=jo;
}
function x3(todo)
{
	todo.fr=todo.father_name;
	todo.rf=todo.mother_name;
	todo.rrf=todo.title;
	console.log(`your father name is ${todo.fr} and your mother name is ${todo.rf} and your title is ${todo.title}`)
}
x2.prototype=Object.create(x1.prototype);
x1(Ex1,"inheritance","smukhbhai","anandiben");
x2(Ex2,"inheritan","sureshbhai","savitaben","computer");
x3(Ex1)