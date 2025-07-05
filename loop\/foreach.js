const programming = ["js", "rb", "py", "java", "cpp"]
// programming.forEach(function (item){
//        console.log(item);
// }) // callback function no namme


// programming.forEach( (item) => {
//     console.log(item);
// } )


// function printMe(item){
//     console.log(item);
// }
// programming.forEach(printMe)


// programming.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )