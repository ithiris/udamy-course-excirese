console.log(this)


function whatIsThis() {
    return this
}

function variablesInThis(){
    // since the value of this is the  window
    //all we are doing here is creating a global variable

    this.person ="Elie"
 }
console.log(person);

console.log(whatIsThis())


