/**
 *  Example of constructor function
 * @param {*} ip [input value]
 */
function Constructor(ip) {
    // ip - instance property
    this.ip = ip;

    // im - instance method
    this.im = function () {
        let output = `Present work of instance method: ${this.ip};`;
        document.writeln(output + "<br />");
        console.log(output);
    }
}

// cfp - constructor function property
Constructor.cfp = Math.random();

// cfm - constructor function method
Constructor.cfm = function () {
    return `Present work of constructor function method: ${this.cfp.toFixed(3)};`
}

// testing of function
let value = new Constructor("testing text");
value.im();
value = Constructor.cfm();
document.writeln(value);
console.log(value);
