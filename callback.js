// Higher Order Function

//const textOne =(x) =>{
    //console.log(`Squear No : ${x}: ${x * x}`)
//}
//textOne(5);

//const higherOrder=(num,callback) => {
    //callback(num);

//}
//higherOrder(5,textOne)

//                         CallBack Function
const textOne = (callback) => {
    console.log("Text One");
    callback();
};

const textTwo = (callback) => {
    setTimeout( () =>{
        console.log("Text Two");
        callback()
    }),1000;
    
};

const textThree = (callback) => {
    console.log("Text Three");
    callback();
};

const textFour = (callback) => {
    console.log("Text Four");
    callback();
};

const textFive = () => {
    console.log("Text Five");
};

// Nesttest CallBack
textOne(()=>{
    textTwo(()=>{
        textThree(()=>{
            textFour(()=>{
                textFive();
            })
        })
    })
})

//textOne(function t1(){
    //textTwo(function t2(){
        //textThree(function t3(){
            //textFour(function t4(){
                //textFive();
            //})
        //});
    //});
//});

//textOne();
//textTwo();
//textThree();
//textFour();
//textFive();