import React, { useState } from "react";
import "./App.css";

function App() {
  const [p, setP] = useState(0);
  const [n, setn] = useState(0);
  const [i, seti] = useState(0);
  const [result, setresult] = useState("");
  const [tinves, settinves] = useState(0);
  const [returns, setreturns] = useState(0);

  let rupee = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  let Calculate = (e) => {
    e.preventDefault();

    if (p === 0 || n === 0) {
      alert("Enter valid inputs");
    } 
    else {
      let r = (i / 100) * (1 / 12);
      let tinves = n*p*12;
      let result = Math.floor(
        p * ((Math.pow(1 + r, n * 12) - 1) / r) * (1 + r)
      );
      let returns = result - tinves;
      setreturns(rupee.format(returns));
      setresult(rupee.format(result));
      settinves(rupee.format(n * p * 12));
      console.log(result);
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2> SIP Calculator</h2>
        <form>
          <div>
            <label>Amount you want to invest monthly : </label>
            <input
              type="text"
              placeholder="enter the amount"
              value={p}
              onChange={(e) => setP(e.target.value)}
            />
          </div>
          <div>
            <label>Enter the years you want to stay in this investment:</label>
            <input
              type="text"
              placeholder="No of years"
              value={n}
              onChange={(event) => setn(event.target.value)}
            />
          </div>
          <div>
            <label>Rate of intrest : </label>
            <input
              type="text"
              placeholder="enter the intrest"
              value={i}
              onChange={(ev) => seti(ev.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit" onClick={Calculate}>
              Calculate
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              reload
            </button>
          </div>
          <div className="center">
            <h3>Your Total investment amount is : {tinves}</h3>
            <h3>Your Total returns : {returns}</h3>
            <h3>Total value : {result} </h3>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;