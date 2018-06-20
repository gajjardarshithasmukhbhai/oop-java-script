//welcome jaava script I stored the data in object
//step 1:Make object
//step 2:then data transfer through constructor run time
//step 3:make consttructor and data will be transfer
let a={
	data:'darshit',
	title:'gajjar',
	mother_name:'anandiBen',
	father_name:'hasmukhbhai',
}
function dar(todo,tr) {
	todo.data=tr;
	return todo.data;
}
function raid(todo,rt) {
	todo.title=rt;
	return todo.title;
}
let ex1=dar(a,"savitaben");
let ex2=raid(a,"constructor with inheritance");
console.log(`gajjar ${ex1} and my title is ${ex2}`)