 /       if 

 const isUserloggidIn  = true;
 const temperature = 41;

 if  (temperature === 50) {
    // console.log("less than 50");
  console.log("less than 50");
    
 } else {
    console.log("temperature is greater is than 50");
    
 }
 // console.log("execute");
console.log("execute");
 


 // <, >, <=, >=, ==, !=, ===


 const score  =200;

 if (score > 100) {
    let power  = "fly"; 
    console.log(`user power:  ${power}`);
 }
   console.log(`user power:  ${power}`);


const balance  = 1000;
if (balance > 500) console.log("test"),console.log("test2")

if (balance > 500) {
    console.log("less tan 500");   
} else if (balance < 750) {
    console.log("less than 750");

} else if (balance > 900) {
    console.log("less than 750");
}  else  {
    console.log("less than 1200")
}


const userLoggedIn = true;
const debitCard = true;
const LoggedInFormGoggle = false;
const LoggedInFormEmail  = true;
if (userLoggedIn && debitCard && 2 == 2) {
    console.log("Allow to by courses");
    
}
if (LoggedInFormGoggle || LoggedInFormEmail) {
    console.log("user Logged In");
    

}



/////////////// Switch ///////////////


switch (key) {
    case value:
        
        break;

    default:
        break;
}


// const month = "March";
// switch (month) {
//     case "January":
//         console.log("January");
//         break;
//         case "feb":
//         console.log("feb");
//         break;
//          case "March":
//         console.log("March");
//         break;
//         case "April":
//         console.log("April");
//         break;


    default:
        console.log("default case match");
        
        break;
}


////////  truthy   //////////
 const userEmail = [];

 if (userEmail) {
    console.log("GOt it email");
    
 } else {
    console.log("Don.t user email");
    

 }

////  Nullish Coalescing Operator (??) : null undefined

 //////// falsy values  //////////

//  false, o, -0, BigInt, null, undefined, NaN


///////// truthly Values /////////////
"0", 'False', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is Empty");
    

}

const Emptyobj = {}

if (Object.keys(Emptyobj).length === 0) {
    console.log("object is Empty");
    

}

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1)

////////  Terniary Operater   ///////////

// condition ?  true  : false
iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80")
