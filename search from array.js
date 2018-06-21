//object oriented java script searching property

let a=["Buy bread","watch jurassic movie","startup"]
console.log(a.indexOf('startup'))
//output::
//-->return the memory position.it's mean that value will be find

//find the memory position then after will be print

let ad=["nikunj","darshit","meet up"]
console.log(ad[ad.indexOf("darshit")])
//output::           ^
//-->return the  ----| memory position and then after ad[aray]-->print that

//searching array
console.log("gajajr darshit hasmukhbhai")
let ree=[
{
  title:"gajjar",
  name:"darshit",
},
{
  title:"patel",
  name:"nikunj",
},
{
  title:"panchal",
  name:"manhar",
}]
let frt=function (mytodo,title) {
  const ret=mytodo.findIndex(function (rle,pop) {
    return rle.title.toLowerCase()===title.toLowerCase()

  })
  return mytodo[ret]
}
let rop=frt(ree,"gajjar")
console.log(rop)