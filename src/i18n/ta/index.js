// export default{
//     buy:"Buy",
//     cart:"Cart",
//     item1:{
//         category:"காய்கறி",
//         name:"வாழை",
//         desc:"நான் வாழைப்பழம்"
//     },
//     item2:{
//         category:"அசைவம்",
//         name:"முட்டை",
//         desc:"நான் முட்டை"
//     },item3:{
//         category:"அசைவம்",
//         name:"இறைச்சி",
//         desc:"நான் இறைச்சி "
//     },
//     item4:{
//         category:"மரச்சாமான்கள்",
//         name:"நாற்காலி",
//         desc:"நான் நாற்காலி "
//     },
//     item5:{
//         category:"நிலையானது",
//         name:"குறிப்பு",
//         desc:"நான் குறிப்பு "
//     },
// }


const Http = new XMLHttpRequest();
const url="http://localhost:8000/api/ta/"
var data
try {
    Http.open("GET", url);
    Http.send();
    var x= Http.onreadystatechange = function(){
        data = Http.responseText
        console.log("below is the data")
        data = JSON.parse(data)
        // console.log(typeof data);
        // console.log(data)
        return data;

    }
    console.log("this");
    console.log(x);
    console.log( "this");
} catch (error) {
    console.log(error)
}
export default "data";
