//oop java script random number generator
console.log("Random Generator");
var wer=Math.random()*10;
if(wer<4)
{
	console.log(Math.ceil(wer))
}
else 
{
	console.log(Math.floor(wer));
}