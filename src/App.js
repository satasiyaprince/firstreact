import logo from './logo.svg';
import './App.css';

function App() {

  // =========== is Array =========== //

    // let arr=[10,20,30,40,50];

    // console.log(Array.isArray(arr)); //True


    // ================= concat ========== //

    // let arr = [10,20,30,40,50,60];
    // let arr1 = [70,80,90];
    // let arr2 = [100];
    
    // let ans = arr.concat(arr1,arr2);

    // console.log(ans);


    // =================== some =========== //
    
    // let arr = [10,20,30];

    // let ans = arr.some((a) => a >15)

    // console.log(ans);// True

    // ================= to string ============= //

      // let arr = [10,20,30]
    
      // console.log(arr.toString(arr)); // 10,20,30

      // ================= find ============== //

      // let arr = [40,50,60];

      // let ans = arr.find((a) => a >55)

      // console.log(ans); // 60

      // ============== splice =================== //


      // let arr = [1,2,4,5,6];

      // arr.splice(2,0,3);

      // console.log(arr); // add 3 at 2nd index //[1, 2, 3, 4, 5, 6]


      // let arr = [1,2,3,4,5,6,9,7,8,9,0];

      // arr.splice(6,1);

      // console.log(arr); // delete 9 at 6th index //[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


      //============= Object ===============//

      // let obj = {
      //   id : 101 ,
      //   Name : 'prince'
      // };

      // console.log(obj.id,obj['Name']);


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
