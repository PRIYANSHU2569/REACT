function Random() {
  let randomNum = Math.floor(Math.random() * 100) ;
  // hum js code kahi bhi {} ke andar likh sakte hai aur uska result html me show kar sakte hai
  // hum inline css bhi use kar sakte hai
  return <h2 style={{'backgroundColor' : '#789356'}}>Your Random Number is: {randomNum}</h2>;
} 
export default Random;