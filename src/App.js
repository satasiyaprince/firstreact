import logo from './logo.svg';
import './App.css';

function App() {
// ====================== Array ============================ //

  // let arr = [10,20,30,40,50]

  //   //copy array

  //   let arr1 = [...arr]

  //   console.log(arr1); // [10, 20, 30, 40, 50]

  //   //marging

  //   let arr2 = [60,70,80,90,100]
  //   let ans = [...arr,...arr2]
  //   console.log(ans); // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

  //   //destructuring

  //   const [a,b,c,d,e,f] = arr;
  //   console.log(d,a,b,c ); // 40 10 20 30


    // ==================== Object ======================= //


      // let obj = {id: 101, name : 'prince'}

      // // copy object

      // let obj1 = {...obj}

      // console.log(obj1); // {id: 101, name: 'prince'}


      // //marging  

      // let obj2 = {id: 102,  place: 'surat'}

      // let ans = {...obj,...obj2}
      // console.log(ans); // {id: 102, name: 'prince', place: 'surat'}

      // //destructuring

      // let {id} = obj;

      // console.log(id,obj.name); // 101 'prince'







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
