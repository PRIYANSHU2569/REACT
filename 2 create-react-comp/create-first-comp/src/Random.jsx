function Random() {
  let randomNum = Math.floor(Math.random() * 100) ;
  return <h2 style={{'backgroundColor' : '#789356'}}>Your Random Number is: {randomNum}</h2>;
} 
export default Random;