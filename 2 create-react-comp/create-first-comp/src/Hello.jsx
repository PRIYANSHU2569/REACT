function Hello() {
  //dynamic functionality
  // //kahi bhi {} ke andar hum js code likh sakte hai
  // let myName = "Priyanshu Gupta";
  let fullname = () =>{
    return "Priyanshu Gupta";
  }
  return <h2>Welcome to My React App, My self   {fullname()}!</h2>;
}
export default Hello;