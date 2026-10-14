const textOne =()=>{
    return new Promise((resolve,reject)=>{
        resolve("Text One Is Complete!");
    })
}

const textTwo =()=>{
    return new Promise((resolve,reject)=>{
        resolve("Text Two Is Complete!");
    })
}

const textThree =()=>{
    return new Promise((resolve,reject)=>{
        resolve("Text Three Is Complete!");
    })
}

/*async function comlete(){
    const t1 = await textOne()
    console.log(t1)
    const t2 = await textTwo()
    console.log(t2)
    const t3 = await textThree()
    console.log(t3)
}*/
const comlete = async()=>{
    const t1 = await textOne()
    console.log(t1)
    const t2 = await textTwo()
    console.log(t2)
    const t3 = await textThree()
    console.log(t3)
}
comlete();