import logo from './logo.svg';
//import './App.css';

const gridContainer = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto auto auto auto auto',
  maxWidth: '50%',
  padding: '10px',
  borderSpacing: '5px',
  gap: '5px'
};

const gridPrime = {
  display: 'grid',
  textAlign: 'center',
  backgroundColor: 'red',
  border: '2px solid black',
  padding: '20px'
}

const gridEven = {  
  display: 'grid',
  textAlign: 'center',
  backgroundColor: 'green',
  padding: '20px'
}

const gridOdd = {
  display: 'grid',
  textAlign: 'center',
  backgroundColor: 'yellow',
  padding: '20px'
}


// makes the items for the grid
let items = []
for (var i = 1; i < 105; i++) {
  items.push(i)
}
// string to sort the number to the appropriate css classs
var type = gridPrime

// checks if the number is prime or not
// could work better if I just made this function to sort out evens, odds, and primes from the start
function isPrime(number) {
  if (number===1) {
    return false;
  }
  else if(number === 2) {
    return true;
  }
  else{ // max is divided by 2 as there is no number that can be divisable higher than half it's amount with the exception of itself
    for(var divisable = 2; divisable < (number / 2) + 1; divisable++) {
      if(number % divisable === 0) {
        return false;
      }
    }
    return true;  
  }
}

// checks the array and sorts it to be either odd, even, or prime
let itemsList = items.map((item, index) => {
  if (isPrime(index + 1)) {
    type = gridPrime
  }
  else if ((index + 1) % 2 === 0) {
    type = gridEven
  }
  else {
    type = gridOdd
  }
  return <div style={type}>{item}</div>
})

// puts in the array that has now been sorted appropriately
function App() {
  React.useEffect(() => {
    console.log("hello world")
  })

  return (
    <div style={gridContainer}>
      {itemsList}
    </div>
  );
}

export default App;
