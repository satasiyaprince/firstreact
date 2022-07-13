import logo from './logo.svg';
import './App.css';

function App() {

  let Data =
[
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ]

     let fdata =  Data.filter((v,i) => v.status === true);
     console.log(fdata);

    let Totalsalary = fdata.reduce((acc,v,i) => acc + v.salary + v.bonus ,0);
    console.log(Totalsalary);

  return (
    <div>
      {
        fdata.map((v,i) => {
          return(
            <div key={i}>
               <h1>{v.name}</h1>
               <h2>{v.salary}</h2>
               <h3>{v.bonus}</h3>
               <h4>{v.salary + v.bonus}</h4>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
