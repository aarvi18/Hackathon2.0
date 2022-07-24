import React from "react";

function SendMoney() {
  console.log("Money Send SuccesFully");
}

function Home() {
  return (
    <>
    <div className="heading">
    <h1>Blockchain Coins</h1>
    </div>

    
      
      <div>
        <form onSubmit={SendMoney}>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Reciver Name"
              
            />
          </div>

          <div className="form-group">
            <label>Amount</label>
            <input
              type="number"
              className="form-control"
              placeholder="Amount you send"
              
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
                SEND
              </button>


        </form>
      </div>
    </>
  );
}

export default Home;
