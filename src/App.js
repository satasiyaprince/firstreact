import logo from './logo.svg';
import './App.css';

function App() {

  // let x = 10;

  // x = x + 5;

  // console.log(x); // 15


    // const x = 10;

    // x = x + 5;

    // console.log(x); //error



    // let x;

    // x = 5;

    // console.log(x); //5

      // const x;

      // x = 5;

      // console.log(x); //error


        // block scope

      // let x = 5;  // global scope

      // {
      //   let x = 10; // local scope
      // }
      // console.log(x); // 5

      // ======== Arrow function ========== //

      // const display = (name,id) => {
      //   console.log(name,id);
      // }

      // display("prince",6417,);


      // ============ ARRAY ================ //

      // let grid = [12,18,26,48,90];

      // console.log(grid[3],grid);


      // ======== is array ========== //

      // let arr = [12,18,67,89,48];

      //   let ans = Array.isArray(arr)

      // console.log(ans); // true



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
