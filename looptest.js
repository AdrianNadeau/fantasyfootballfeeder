var myArray = [123, 15, 187, 32,23, 15, 187, 32,88,88,884];

for (var i = 0; i < myArray.length; i+=3) {
    var obj = myArray[i];
    
    console.log("first column: "+obj);
    var obj = myArray[i+1];
    console.log("second coloumn: "+obj)
    var obj = myArray[i+2];
    console.log("third coloumn: "+obj)
    

    // console.log(i)
}