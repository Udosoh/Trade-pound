import React from "react";
import {
  Col,
  CardGroup,
  CardImg,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";
import "./WhyinvestCard.css";

import { ReactComponent as MyLogo } from "../images/icon/shield-check-fill.svg";
import { ReactComponent as MyLogo5 } from "../images/icon/p2p-line.svg";

import { ReactComponent as MyLogo1 } from "../images/icon/bank-card-2-fill.svg";

import { ReactComponent as MyLogo2 } from "../images/icon/focus-2-line.svg";

import { ReactComponent as MyLogo3 } from "../images/icon/lock-2-fill.svg";

import { ReactComponent as MyLogo4 } from "../images/icon/24-hours-fill.svg";

const WhyInvestCard = () => {
  return (
    <div className="container">
      <div className="title">
        <h2>WHY INVEST WITH US</h2>
        <h1>COMPONENTS OF OUR SUCCESS</h1>{" "}
      </div>
      <CardGroup className="cardcont">
        <Card>
          <MyLogo className="icon" />

          <CardBody>
            <CardTitle className="cardtitle" tag="h3">
              Trader Performance
            </CardTitle>

            <CardText className="cardText">
              High efficiency of traders, which was the result of the
              comprehensive and rigorous training of each member of our team.
            </CardText>
          </CardBody>
        </Card>

        <Card>
          <MyLogo1 className="icon" />

          <CardBody>
            <CardTitle className="cardtitle" tag="h3">
              Instant Withdrawal
            </CardTitle>
            <CardText className="cardText">
              Withdrawal requests are immediately entered in the automatic
              processing queue. Waiting is kept to a minimum.
            </CardText>
          </CardBody>
        </Card>
        
        <Card>
          <MyLogo2 className="icon" />

          <CardBody>
            <CardTitle className="cardtitle" tag="h3">
              Client Focus
            </CardTitle>

            <CardText className="cardText">
              Quality service, transparency of work, fast feedback and
              accessibility.
            </CardText>
          </CardBody>
        </Card>

        <Card>
          <MyLogo3 className="icon" />

          <CardBody>
            <CardTitle className="cardtitle" tag="h3">
              Data Security
            </CardTitle>

            <CardText className="cardText">
              Our platform provides a high level of security for its customers.
              The company's servers are resistant to any DDoS attacks, as well
              as all traffic from clients to go through reliable SSL encryption.
            </CardText>
          </CardBody>
        </Card>
        
        <Card>
          <MyLogo4 className="icon" />

          <CardBody>
            <CardTitle className="cardtitle" tag="h3">
              24/7 Support
            </CardTitle>

            <CardText className="cardText">
              The best specialized professionals from FINANCE UK INVESTMENT
              will come to your aid in case business circumstances require it.
              Each Client of the Company can count on a personal approach in
              resolving all possible issues related to cooperation with us.
            </CardText>
          </CardBody>
        </Card>
        
        <Card>
          <MyLogo5 className="icon" />

          <CardBody>
            <CardTitle className="cardtitle" tag="h3">
              Trading Efficiency
            </CardTitle>

            <CardText className="cardText">
              The high level of training of traders and the use of innovative
              methods of analytics and monitoring indicative exchange
              fluctuations allows for maximizing profits.
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
};

export default WhyInvestCard;
