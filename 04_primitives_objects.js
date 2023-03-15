// nn bb ss u  // these are the primitives datatype
// null, number, boolean, bigInt, String, Symbol, undefined 
console.log("hi");
let a = null;  // ye ek aisa number jo ki hum explicitly keh rahe hai ki kuch hai hi nahi es ke ander
let b = 366;  // number
let c = true; // can also be false : Boolean
let d = BigInt("567") + BigInt("3")
let e = "Harry"  // string
let f = Symbol("I am a nice guy")
let g // = undefined  --> eska matlab es variable ko kuch diya hi nahi gaya hai abhi tak
console.log(a, b, c, d, e, f, g)
console.log(typeof c)  // by this i can know the type of the any variable

// Non Primitive Data Type - Objects in Js
const item = {
  "Harry" : true,
  "Shubh" : false,
  "Lovish" : 67,
  "Rohan" : undefined
}
console.log(item["Harry"])
