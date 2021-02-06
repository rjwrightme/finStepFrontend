import React from "react";

const Transactions = () => {
  return (
    <div className="bg-silver h-screen h-screen-offset w-3/4">
      <div className="bg-gradient-to-r from-aqua-light to-aqua w-100 h-44 p-4">
        <div className="max-w-lg mx-auto">
          <div className="flex w-11/12 mx-auto justify-between">
            <h1 className="text-white text-5xl mt-4">Transactions</h1>
            <img
              className="background-icon mr-4"
              src="/images/transactions.svg"
              alt="transations icon"
            />
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-md relative z-10 -mt-8">
            <p className="text-4xl text-gray-500 text-center font-bold">
              $257.32
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
