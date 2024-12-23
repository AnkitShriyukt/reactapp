const heading = React.createElement(
    "h1",
    {id:"_heading" , xyz:"abc"}, // this object is to give the attribute
    "Hello world from React");

 console.log(heading); // it will give the object. not the h1 tag 
 // this object contain the 3rd params as childern in prop and other also in prop of object   
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // this render method will take the object and convert it into h1 tag