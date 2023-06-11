import React from "react";
import "./pricing.css";
import { ReactComponent as Mydiamond } from "../images/icon/vip-diamond-line.svg";
import { ReactComponent as MyCustomIcon } from "../images/icon/check-line.svg";

const Pricing = () => {
  return (
    <>
      <div className="house">
        <div className="heading">
          <h1 className="sechead">INVESTMENT OFFERS</h1>
          <h2 className="sechead__two">START EARNING WITH A CLICK</h2>
        </div>
        <div className="containerprice">
          <div className="-mt-2 w-96 p-2 lg:mt-0 lg:flex-shrink-0">
            <div className="rounded-2xl card__body bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <div className="pricecard">
                  <p className="text-base font-semibold text-gray-600">BASIC</p>

                  <Mydiamond className="ico" />

                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      10%
                    </span>

                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      After 24 Hours
                    </span>
                  </p>
                  <a
                    href="#"
                    className="mt-10 block w-full bg-[#00205b] rounded-md hover:bg-[#558ffc] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                </div>
                <div className="checktext">
                  <MyCustomIcon className="check" />
                  <p className="text-xs checktextp leading-5 text-gray-600">
                    Min: $200
                  </p>
                </div>
                <div className="checktext items-center">
                  <MyCustomIcon className="check" />
                  <p className="text-xs checktextp leading-5 text-gray-600">
                    Max: $4999
                  </p>
                </div>
                <div className="checktext">
                  <MyCustomIcon className="check" />
                  <p className="text-xs checktextp leading-5 text-gray-600">
                    Quality Investment Experience
                  </p>
                </div>
                <div className="checktext">
                  <MyCustomIcon className="check" />
                  <p className="text-xs checktextp leading-5 text-gray-600">
                    Instant Withdrawal
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="-mt-2 w-96 p-2 lg:mt-0 lg:flex-shrink-0">
            <div className="rounded-2xl card__body bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <div className="pricecard">
                  <p className="text-base font-semibold text-gray-600">
                    SILVER
                  </p>

                  <Mydiamond className="ico" />

                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      15%
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      After 48 Hours
                    </span>
                  </p>
                  <a
                    href="#"
                    className="mt-10 block w-full bg-[#00205B] hover:bg-[#558ffc] rounded-md px-3 py-2 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                </div>
                <div className="checktext">
                  <MyCustomIcon className="check" />
                  <p className="text-xs checktextp leading-5 text-gray-600">
                    Min: $5000
                  </p>
                </div>
                <div className="checktext items-center">
                  <MyCustomIcon className="check" />
                  <p className="text-xs checktextp leading-5 text-gray-600">
                    Max: $10000
                  </p>
                </div>
                <div className="checktext">
                  <MyCustomIcon className="check" />
                  <p className="text-xs checktextp leading-5 text-gray-600">
                    Quality Investment Experience
                  </p>
                </div>
                <div className="checktext">
                  <MyCustomIcon className="check" />
                  <p className="text-xs checktextp leading-5 text-gray-600">
                    Instant Withdrawal
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="-mt-2 w-96 p-2 lg:mt-0 lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 card__body text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <div className="pricecard">
                  <p className="text-base font-semibold text-gray-600">GOLD</p>

                  <Mydiamond className="ico" />

                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      50%
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      After 72 Hours
                    </span>
                  </p>
                  <a
                    href="#"
                    className="mt-10 block w-full bg-[#00205b] rounded-md hover:bg-[#558ffc] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                </div>
                <div className="checktext">
                  <MyCustomIcon className="check" />
                  <p className="text-xs checktextp leading-5 text-gray-600">
                    Min: $8000
                  </p>
                </div>
                <div className="checktext items-center">
                  <MyCustomIcon className="check" />
                  <p className="text-xs checktextp leading-5 text-gray-600">
                    Max: $35000
                  </p>
                </div>
                <div className="checktext">
                  <MyCustomIcon className="check" />
                  <p className="text-xs checktextp leading-5 text-gray-600">
                    Quality Investment Experience
                  </p>
                </div>
                <div className="checktext">
                  <MyCustomIcon className="check" />
                  <p className="text-xs checktextp leading-5 text-gray-600">
                    DBP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
