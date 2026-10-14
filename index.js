const student = [
    {
        id: 101,
        name: "Bs Sakil",
        gpa: 4.5
    },

    {
        id: 102,
        name: "Mostakim",
        gpa: 2.5
    },

    {
        id: 103,
        name: "Anwer",
        gpa: 3.5
    },

    {
        id: 104,
        name: "Rabbani",
        gpa: 3.5
    }
]

const studentGpa =() =>student.filter((x)=>
 x.gpa > 3).map((y)=> y.name);

console.log(studentGpa());