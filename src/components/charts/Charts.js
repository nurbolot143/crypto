import React from "react";

import chart1 from "../../assets/images/charts1.jpg";
import chart2 from "../../assets/images/charts2.jpg";

const Charts = () => {
  return (
    <section className="charts">
      <div className="container__smaller">
        <h3 className="page">08. CHARTS</h3>
        <h2 className="subtitle info__title">Lymcoin Charts</h2>

        <div className="charts__wrapper">
          <div className="charts__item">
            <p className="text charts__price">
              Current Price <span>$541.27</span>
            </p>

            <div className="charts__img">
              <img src={chart1} alt="Current Price" />
            </div>
          </div>
          <div className="charts__item">
            <p className="text charts__price">
              Market Cap <span>$147 547 106</span>
            </p>

            <div className="charts__img">
              <img src={chart2} alt="Market Cap " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Charts;
