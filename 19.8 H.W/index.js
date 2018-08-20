var AirPlane = /** @class */ (function () {
    function AirPlane() {
        this.name = "Robert";
        this.companyName = "EL-AL";
        this.destination = "Cuba";
    }
    AirPlane.prototype.fly = function (speed) {
        console.log("The speed is: " + speed);
    };
    ;
    AirPlane.prototype.land = function () {
        return true;
    };
    ;
    return AirPlane;
}());
var Kite = /** @class */ (function () {
    function Kite() {
        this.color = "orange";
        this.price = 200;
    }
    Kite.prototype.fly = function (speed) {
        console.log("The speed is: " + speed);
    };
    ;
    Kite.prototype.land = function () {
        return true;
    };
    ;
    return Kite;
}());
var Bird = /** @class */ (function () {
    function Bird() {
        this.type = "Bulbul";
        this.age = 2;
        this.color = "purple";
    }
    Bird.prototype.fly = function (speed) {
        console.log("The speed is: " + speed);
    };
    ;
    Bird.prototype.land = function () {
        return false;
    };
    ;
    return Bird;
}());
function createIFly() {
    var randomNum = Math.floor(Math.random() * 3);
    return randomNum;
}
var arr1 = new Array(10);
for (var i = 0; i < arr1.length; i++) {
    arr1[i] = createIFly();
    switch (createIFly()) {
        case 0:
            var obj1 = new Bird();
            console.log(obj1.land, obj1.fly(20), obj1);
            break;
        case 1:
            var obj2 = new AirPlane();
            console.log(obj2.land, obj2.fly(50), obj2);
            break;
        case 2:
            var obj3 = new Kite();
            console.log(obj3.land, obj3.fly(5), obj3);
            break;
    }
}
