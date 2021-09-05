// /**
//  * Calculate parameters of Box
//  * @param {*} height [height of box]
//  * @param {*} width [width of box]
//  * @param {*} depth [depth of box]
//  * @param {*} matherial [matherial of box]
//  */
function Box(height, width, depth, matherial) {
    // properties
    this.height = height;
    this.width = width;
    this.depth = depth;
    this.matherial = matherial;

    // in this case our methods aren`t visible
    /*
        // calc volumes
    Box.prototype.volume = function () {
        return this.height * this.width * this.depth;
    }
    
    // do equal
    Box.prototype.equals = function (element) {
        return (element != null &&
            this.matherial === element.matherial) ? true : false;
    }
    */
}

// methods in prototype for saving memory
// Note: If we create this methods inside "Box" our methods will be work
// but not visible, so we write methods outside

// calc volume
Box.prototype.volume = function () {
    return this.height * this.width * this.depth;
}

// do equal
Box.prototype.equals = function (element) {
    return (element != null &&
        this.matherial === element.matherial) ? true : false;
}
