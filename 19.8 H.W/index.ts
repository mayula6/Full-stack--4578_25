interface IFly{
fly (speed: number):void;
land (): boolean;
}

class AirPlane implements IFly{
fly (speed: number){
    console.log("The speed is: " + speed);
};
  
land(){
    return true;
};

name: string="Robert";
companyName: string= "EL-AL";
destination: string= "Cuba";
}

class Kite implements IFly{
    fly (speed: number){
        console.log("The speed is: " + speed);
    };
      
    land(){
        return true;
    };

    color: string= "orange";
    price: number= 200;
}

class Bird implements IFly{
    fly (speed: number){
        console.log("The speed is: " + speed);
    };
      
    land(){
        return false;
    };
    
    type: string= "Bulbul";
    age: number= 2;
    color: string= "purple";
}

function createIFly() :number{
let randomNum:number =Math.floor(Math.random()*3);
return randomNum;
}

let arr1:number[]= new Array(10);

for(let i:number=0;i<arr1.length;i++){
    arr1[i]=createIFly();
    switch (createIFly()) {
        case 0:
            var obj1 = new Bird();
            console.log(obj1.land,obj1.fly(20), obj1);
            break;
        case 1:
            var obj2 = new AirPlane();
            console.log(obj2.land,obj2.fly(50), obj2);
            break;
        case 2:
            var obj3 = new Kite();
            console.log(obj3.land, obj3.fly(5), obj3);
            break;
    }
}

