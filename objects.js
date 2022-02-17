
let Gaurav = {

    firstname : "Gaurav",
    lastName : "Saxena",
    age : 21,
    address : {
        city : "Agra",
        state : "Uttar Pradesh",
        country : "India"
    },
    college : "Delhi Technological University",
    branch : "Electronics and Communication",
    welcomeMessage : function(){
         var welcome  = "Hey! This is Gaurav. Let's catch up soon";
         return welcome;
    }
};

var name = Gaurav.firstname;
// console.log(Gaurav);
// console.log(Gaurav.welcomeMessage());

for( let key in Gaurav)
{
    console.log(key , Gaurav[key]);   
}


// console.log(name); // Gaurav is an object , firstName , lastName all these are properties of the object Gaurav


