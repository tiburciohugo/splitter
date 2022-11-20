import Image from "next/image";

export default function Tip() {
  return (
    <div className="min-h-screen grid content-center">
      <div className="my-6">
        <h2 className="text-very-dark-cyan text-center text-md font-bold -mb-2 tracking-[.70rem]">
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
            <div className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-4 mt-2">
              <button className="text-center bg-very-dark-cyan rounded-md h-10 w-[6rem] flex items-center justify-center text-xl font-bold text-white hover:bg-bermuda hover:text-very-dark-cyan hover:drop-shadow-lg">
                5%
              </button>
              <button className="text-center bg-very-dark-cyan rounded-md h-10 w-[6rem] flex items-center justify-center text-xl font-bold text-white hover:bg-bermuda hover:text-very-dark-cyan hover:drop-shadow-lg">
                25%
              </button>
              <button className="text-center bg-very-dark-cyan rounded-md h-10 w-[6rem] flex items-center justify-center text-xl font-bold text-white hover:bg-bermuda hover:text-very-dark-cyan hover:drop-shadow-lg">
                10%
              </button>
              <button className="text-center bg-very-dark-cyan rounded-md h-10 w-[6rem] flex items-center justify-center text-xl font-bold text-white hover:bg-bermuda hover:text-very-dark-cyan hover:drop-shadow-lg">
                50%
              </button>
              <button className="text-center bg-very-dark-cyan rounded-md h-10 w-[6rem] flex items-center justify-center text-xl font-bold text-white hover:bg-bermuda hover:text-very-dark-cyan hover:drop-shadow-lg">
                15%
              </button>

              <input
                type="number"
                className="text-center focus:text-end focus:placeholder:text-center text-very-dark-cyan bg-colors-slate-200 rounded-md h-10 w-[6rem] flex items-center justify-center text-xl font-bold text-text-very-dark-cyan placeholder:text-dark-grayish-cyan focus:outline-strong-cyan px-2"
                placeholder="Custom"
              />
            </div>
          </div>
          <div className="w-full mt-6">
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
                placeholder="5"
              />
            </div>
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
              $0.00
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
              $0.00
            </p>
          </div>
          <button className="bg-strong-cyan rounded-md h-[2.2rem] w-[80%] flex items-center justify-center text-md font-bold text-white hover:bg-bermuda hover:text-very-dark-cyan hover:drop-shadow-lg mt-8 md:mt-[5.5rem] mx-auto">
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
