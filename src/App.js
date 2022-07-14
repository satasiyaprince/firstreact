import logo from './logo.svg';
import './App.css';

function App() {
  let Data =
  [
      {
        grid: 123,
        name: 'Amit',
        fees: 50000,
        attendance: 80
      },
      {
        grid: 456,
        name: 'Ajay',
        fees: 70000,
        attendance: 90
      },
      {
        grid: 856,
        name: 'Ashish',
        fees: 30000,
        attendance: 65
      },
      {
        grid: 762,
        name: 'Raj',
        fees: 90000,
        attendance: 70
      },
    ]

    let fdata = Data.filter((v,i) => v.attendance < 71);
    console.log(fdata);

    let total = fdata.reduce((acc,v,i) => acc + v.fees ,0)
    console.log(total);

  return (
    <div>
      {
          fdata.map((v,i) => {
            return(
              <div key={i}>
                     <h3>{v.name}</h3>
                     <h4>{v.grid}</h4>
                     <h5>{v.fees}</h5>
              </div>
            )
          })
      }
    </div>
  );    
}

export default App;
