import Image from "next/image";
import { useState, useEffect } from "react";

export default function Tip() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [total, setTotal] = useState(0.0);
  const [tipPerPerson, setTipPerPerson] = useState(0.0);

  const handleBill = (e: any) => {
    setBill(e.target.value);
  };

  const handlePeople = (e: any) => {
    setPeople(e.target.value);
  };

  const handleCustomTip = (e: any) => {
    console.log("customTip: ", e.target.value);
    setTip(e.target.value);
  };

  useEffect(() => {
    if (bill && people && tip) {
      typeof bill === "string" && setBill(Number(bill));
      typeof people === "string" && setPeople(Number(people));
      typeof tip === "string" && setTip(Number(tip));
      const tipAmount = bill * (tip / 100);
      const tipPerPersonAmount = tipAmount / people;
      const totalAmount = bill + tipAmount;
      console.log("totalAmount: ", totalAmount);
      const totalPerPersonAmount = totalAmount / people;
      console.log("totalPerPersonAmount: ", totalPerPersonAmount);
      setTotal(totalPerPersonAmount);
      setTipPerPerson(tipPerPersonAmount);
    }
  }, [bill, people, tip]);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen grid content-center">
      <div className="my-6">
        <h2 className="text-very-dark-cyan text-center text-md font-bold -mb-2 tracking-[.70rem] ">
          SPLI
        </h2>
        <h2 className="text-very-dark-cyan text-center text-md font-bold tracking-[.70rem]">
          TTER
        </h2>
      </div>
      <div className="bg-white rounded-xl p-6 md:flex md:justify-between md:items-center max-w-[42rem] mx-auto gap-8">
        <div className="h-[16rem] w-[18rem] mb-14">
          <div className="w-full">
            <label
              className="text-dark-grayish-cyan text-sm font-semibold"
              htmlFor="bill"
            >
              Bill
            </label>
            <div className="flex items-center text-dark-grayish-cyan bg-colors-slate-200 rounded-md h-8 px-2 focus-within:border-2 focus-within:border-strong-cyan">
              <span className="rounded-md p-2 w-full focus:outline-none text-[24px] bg-transparent">
                <Image
                  className="w-2"
                  src="/assets/icon-dollar.svg"
                  width={10}
                  height={10}
                  alt="dollar-sign"
                />
              </span>
              <input
                className="border-none rounded-md p-2 w-full h-8  text-end text-very-dark-cyan placeholder:text-dark-grayish-cyan bg-transparent focus:placeholder:text-very-dark-cyan focus:outline-none"
                type="number"
                name="bill"
                id="bill"
                placeholder="0"
                onChange={handleBill}
                value={bill}
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="text-dark-grayish-cyan text-sm font-semibold"
              htmlFor="tip"
            >
              Select Tip %
            </label>
            <div className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-2 mt-2">
              <button
                className="text-center bg-very-dark-cyan rounded-md h-10 w-[5.5rem] flex items-center justify-center text-xl font-bold text-white hover:bg-bermuda hover:text-very-dark-cyan hover:drop-shadow-lg target:bg-bermuda"
                onClick={() => setTip(5)}
              >
                5%
              </button>
              <button
                className="text-center bg-very-dark-cyan rounded-md h-10 w-[5.5rem] flex items-center justify-center text-xl font-bold text-white hover:bg-bermuda hover:text-very-dark-cyan hover:drop-shadow-lg target:bg-bermuda"
                onClick={() => setTip(25)}
              >
                25%
              </button>
              <button
                className="text-center bg-very-dark-cyan rounded-md h-10 w-[5.5rem] flex items-center justify-center text-xl font-bold text-white hover:bg-bermuda hover:text-very-dark-cyan hover:drop-shadow-lg target:bg-bermuda"
                onClick={() => setTip(10)}
              >
                10%
              </button>
              <button
                className="text-center bg-very-dark-cyan rounded-md h-10 w-[5.5rem] flex items-center justify-center text-xl font-bold text-white hover:bg-bermuda hover:text-very-dark-cyan hover:drop-shadow-lg target:bg-bermuda"
                onClick={() => setTip(50)}
              >
                50%
              </button>
              <button
                className="text-center bg-very-dark-cyan rounded-md h-10 w-[5.5rem] flex items-center justify-center text-xl font-bold text-white hover:bg-bermuda hover:text-very-dark-cyan hover:drop-shadow-lg target:bg-bermuda"
                onClick={() => setTip(15)}
              >
                15%
              </button>

              <input
                type="text"
                className="text-center focus:text-end focus:placeholder:text-center text-very-dark-cyan bg-colors-slate-200 rounded-md h-10 w-[5.5rem] flex items-center justify-center text-xl font-bold text-text-very-dark-cyan placeholder:text-dark-grayish-cyan placeholder:text-sm focus:outline-strong-cyan px-2"
                placeholder="Custom"
                onChange={handleCustomTip}
              />
            </div>
          </div>
          <div className="w-full mt-6">
            {people === 0 ? (
              <>
                <div className="flex justify-between items-center">
                  <label
                    className="text-dark-grayish-cyan text-sm font-semibold"
                    htmlFor="people"
                  >
                    Number of People
                  </label>
                  <p className="text-colors-orange-400 text-xs font-semibold">
                    Can&apos;t be zero
                  </p>
                </div>
                <div className="flex items-center text-dark-grayish-cyan bg-colors-slate-200 rounded-md h-8 px-2 border-2 border-colors-orange-400 mt-2">
                  <span className="w-3/6">
                    <Image
                      className="ml-2"
                      src="/assets/icon-person.svg"
                      width={10}
                      height={10}
                      alt="person"
                    />
                  </span>
                  <input
                    className="border-none rounded-md p-2 w-full h-8 focus:outline-none text-end text-very-dark-cyan placeholder:text-dark-grayish-cyan bg-transparent"
                    type="number"
                    name="people"
                    id="people"
                    placeholder="0"
                    onChange={handlePeople}
                    value={people}
                  />
                </div>
              </>
            ) : (
              <>
                <label
                  className="text-dark-grayish-cyan text-sm font-semibold"
                  htmlFor="people"
                >
                  Number of People
                </label>
                <div className="flex items-center text-dark-grayish-cyan bg-colors-slate-200 rounded-md h-8 px-2 focus-within:border-2 focus-within:border-strong-cyan mt-2">
                  <span className="w-3/6">
                    <Image
                      className="ml-2"
                      src="/assets/icon-person.svg"
                      width={10}
                      height={10}
                      alt="person"
                    />
                  </span>
                  <input
                    className="border-none rounded-md p-2 w-full h-8 focus:outline-none text-end text-very-dark-cyan placeholder:text-dark-grayish-cyan bg-transparent"
                    type="number"
                    name="people"
                    id="people"
                    placeholder="0"
                    onChange={handlePeople}
                    value={people}
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="bg-very-dark-cyan h-[14rem] md:h-[18rem] w-[18rem] rounded-lg mt-16 md:mt-0 pt-1 md:pt-2">
          <div className="flex justify-between pt-2 px-6 mt-4">
            <div className="flex flex-col">
              <span className="text-xs text-white font-semibold">
                Tip Amount
              </span>
              <span className="text-[.7rem] text-grayish-cyan font-semibold">
                / person
              </span>
            </div>
            <p className="text-4xl font-semibold text-strong-cyan text-end">
              ${tipPerPerson.toFixed(2)}
            </p>
          </div>

          <div className="flex justify-between pt-2 px-6 mt-2 md:mt-4">
            <div className="flex flex-col">
              <span className="text-xs text-white font-semibold">Total</span>
              <span className="text-[.7rem] text-grayish-cyan font-semibold">
                / person
              </span>
            </div>
            <p className="text-4xl font-semibold text-strong-cyan text-end">
              ${total.toFixed(2)}
            </p>
          </div>
          <button
            className="bg-strong-cyan rounded-md h-[2.2rem] w-[80%] flex items-center justify-center text-md font-bold text-white hover:bg-bermuda hover:text-very-dark-cyan hover:drop-shadow-lg mt-8 md:mt-[5.5rem] mx-auto"
            onClick={refreshPage}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
