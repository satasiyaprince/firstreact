import logo from './logo.svg';
import './App.css';

function App() {

let Data = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];

    
  let fdata = Data.filter((v,i) => v.expiry >= 2022 && v.status === true);
  console.log(fdata);

  let Totalprice = fdata.reduce((acc,v,i) => acc + v.price ,0);
  console.log(Totalprice);

  return (

  <div>{
    fdata.map((v,i) => {
      return(
        <div key={i}>
          <h1>{v.name}</h1>
          <h2>{v.price}</h2>
          <h3>{v.id}</h3>
        </div>
        )
    })
    }</div>
  );
}

export default App;
