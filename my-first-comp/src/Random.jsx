function Random () {
  let randomNumber = Math.random();
   
  return <p style={{'background-color':'green'}}>
    Random Number: {randomNumber}
  </p>

}

export default Random;