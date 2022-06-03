import React from "react";

import donateImg from "../../assets/images/donate_img.png";

const Donate = () => {
  return (
    <section className="donate">
      <div className="container__smaller">
        <div className="donate__top">
          <h3 className="page">11. DONATE</h3>
          <h2 className="subtitle donate__title">
            Donate to Support Development
          </h2>

          <p className="text donate__text">
            Lymcoin is not a pre-mined coin, so all of its development is funded
            by kind people like you.
          </p>
        </div>

        <div className="donate__wrapper">
          <div className="donate__item">
            <div className="donate__icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.022 26.0613L9.0625 20.8477L20.022 40.0002L30.9818 20.8477L20.022 26.0613Z"
                  fill="#CF1257"
                />
                <path
                  d="M29.7881 16.9623L20.0219 0L10.2446 16.9818L20.0219 12.3438L29.7881 16.9623Z"
                  fill="#CF1257"
                />
                <path
                  d="M11.0923 19.1823L20.022 23.412L28.9667 19.1752L20.022 14.9458L11.0923 19.1823Z"
                  fill="#CF1257"
                />
              </svg>
            </div>
            <div className="donate__body">
              <div className="donate__subtitle">
                177r3vCAH3AzABiQjFPmcrSCp6TDzEDuB1
              </div>
              <p className="donate__descr">Lymcoin Wallet Address</p>
            </div>
            <div className="donate__img">
              <img src={donateImg} alt="Code" />
            </div>
          </div>
          <div className="donate__item">
            <div className="donate__icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_4_1068)">
                  <path
                    d="M20.0154 7.23842e-06C8.96895 -0.00928964 0.00918205 8.93813 -0.000114832 19.9845C-0.00941171 31.0309 8.93802 39.9907 19.9844 40C31.0294 39.9907 39.9829 31.0449 39.9999 20C39.9999 8.95977 31.0556 0.00930411 20.0154 7.23842e-06ZM19.9844 36.6719C10.777 36.6719 3.31262 29.2074 3.31262 20C3.31262 10.7926 10.777 3.32821 19.9844 3.32821C29.1887 3.33751 36.6469 10.7957 36.6562 20C36.6562 29.2074 29.1919 36.6719 19.9844 36.6719Z"
                    fill="#CF1257"
                  />
                  <path
                    d="M25.3871 19.0247C26.7246 18.2708 27.4475 16.7616 27.1983 15.2476C26.8886 12.9102 24.1023 12.0277 21.9041 11.842V8.32812H19.7369V11.8111H18.2818V8.32812H16.1147V11.8111H11.7493V14.0557H13.3747C14.1022 14.0557 14.4583 14.2724 14.4583 14.8606V24.5046C14.4583 25.3095 14.0558 25.5573 13.6223 25.5573H11.966V27.8483H16.1765V31.4087H18.3592V27.8483H19.8143V31.4087H21.9351V27.8483H22.3994C26.8576 27.8483 28.3437 25.6656 28.3437 22.6935C28.3081 20.9411 27.0929 19.4334 25.3871 19.0247ZM18.2818 14.195H19.8297C20.9133 14.195 23.0496 14.3808 23.0496 16.1455C23.1239 17.2972 22.2895 18.3065 21.1455 18.452H18.2818V14.195ZM20.6811 25.3405V25.325H18.2818V20.681H21.0682C21.7183 20.681 24.1641 20.8977 24.1641 22.6315C24.1641 24.3652 23.0032 25.3405 20.6811 25.3405Z"
                    fill="#CF1257"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_1068">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="donate__body">
              <div className="donate__subtitle">
                177r3vCAH3AzABiQjFPmcrSCp6TDzEDuB1
              </div>
              <p className="donate__descr">Lymcoin Wallet Address</p>
            </div>
            <div className="donate__img">
              <img src={donateImg} alt="Code" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
