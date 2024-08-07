// string to object
const jsonString = '{"name": "himanshu", "age" : 34 , " city": "Indian"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);

// object to string

const objectToConvert={
    name : "Alice",
    age : 13,
    city : "India"
}
const json = JSON.stringify(objectToConvert);
console.log(json)