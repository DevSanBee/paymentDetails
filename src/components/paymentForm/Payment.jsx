import React from "react";
import "./paymentForm.css";
import { prefixes } from "../prefixes.js";
import TextField from "@mui/material/TextField";
import Button from "../Button";
import AtmCard from "../ATM/AtmCard";
import { MDBRadio } from 'mdb-react-ui-kit';
import PaymentInfo from "../paymentInfo/PaymentInfo";

export default class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxLength: 16,
      cardNumber: "4324543393821030",
      placeholder: "credit card number",
      activeVisa: false,
      activeMastercard: true,
      activeDiscover: false,
      activeAmex: false,
      type: "",
      expirationDate: "03/24",
      postalCode: "10119",
      secCode: "420",
      error: {},
    };
  }


  verifyNumber = () => {
    let sum = 0;
    let temp = 0;
    let cardNumberCopy = this.state.cardNumber;
    let checkDigit = parseInt(this.state.cardNumber.slice(-1));
    let parity = cardNumberCopy.length % 2;

    for (let i = 0; i <= cardNumberCopy.length - 2; i++) {
      if (i % 2 === parity) {
        temp = +cardNumberCopy[i] * 2;
      } else {
        temp = +cardNumberCopy[i];
      }

      if (temp > 9) {
        temp -= 9;
      }

      sum += temp;
    }

    return (sum + checkDigit) % 10 === 0;
  };
  purgeInactive = (firstCard, secondCard, thirdCard, fourthCard) => {
    this.setState({
      ["active" + firstCard]: false,
      ["active" + secondCard]: false,
      ["active" + thirdCard]: false,
      ["active" + fourthCard]: true,
  
    });
  };

  determineType = (cardNumber) => {
    for (let key of prefixes) {
      for (let value of key[1]) {
        if (cardNumber.startsWith(value)) {
          this.setState({
            type: key[0],
          });
          switch (key[0]) {
            case "Visa":
              this.purgeInactive("Mastercard", "Discover", "Amex", "Visa");
              break;
            case "Mastercard":
              this.purgeInactive("Visa", "Discover", "Amex", "Mastercard");
              break;
            case "Discover":
              this.purgeInactive("Visa", "Mastercard", "Amex", "Discover");
              break;
            case "Amex":
              this.purgeInactive("Visa", "Mastercard", "Discover", "Amex");
              break;
            default:
              break;
          }

          return;
        } else {
          this.setState({
            ["active" + key[0]]: false,
            type: "",
        
          });
        }
      }
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cardNumber !== this.state.cardNumber) {
      this.determineType(this.state.cardNumber);
    }

    if (prevState.activeAmex !== this.state.activeAmex) {
      this.state.activeAmex
        ? this.setState({ maxLength: 15 })
        : this.setState({ maxLength: 16 });
    }

    if (prevState.type !== this.state.type) {
      if (this.state.type !== "") {
        this.setState({
          ["active" + this.state.type]: true,
        });
      }
    }
  }

  handleChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({
        cardNumber: e.target.value,
      });
    }
  };

  handleClick = (e) => {
    this.setState({
      cardNumber: "",
    });
  };

  render() {
    const {
      cardNumber,
      maxLength,
      placeholder,
      activeVisa,
      activeMastercard,
      expirationDate,
      activeDiscover,
      postalCode,
      secCode,
      activeAmex,
      type,
    } = this.state;
    return (
      <>
        <PaymentInfo />
        <div className="paymentForm">
          <div className="atm">
            <AtmCard
              cardNumber={cardNumber}
              expirationDate={expirationDate}
              activeVisa={activeVisa}
              activeMastercard={activeMastercard}
              activeDiscover={activeDiscover}
              activeAmex={activeAmex}
              type={type}
          
            />
          </div>
          <div className="paymentForm__header">
            <form action="">
              <div>
                <label htmlFor="cardNumber">Credit card number</label>
                <TextField
                  id="outlined-basic cardNumber"
                  type="text"
                  value={cardNumber}
                  placeholder={placeholder}
                  maxLength={maxLength}
                  onChange={this.handleChange}
                  variant="outlined"
                  required
                  className="outlined"
                />
              </div>
              <div>
                <label htmlFor="date">Expiration date</label>
                <TextField
                  id="outlined-basic date"
                  required
                  variant="outlined"
                  className="outlined"
                  type="text"
                  value={expirationDate}
                  placeholder="Expiration Date"
                  maxLength={5}
                  onChange={(e) => {
                    const re = /^[0-9\b]+$/;
                    if (e.target.value === "" || re.test(e.target.value)) {
                      this.setState({ expirationDate: e.target.value });
                    }
                  }}
                />
              </div>
              <div>
                <label htmlFor="secCode">Security code</label>
                <TextField
                  id="outlined-basic secCode"
                  className="outlined"
                  type="text"
                  value={secCode}
                  placeholder="Security Code"
                  maxLength={3}
                  onChange={(e) => {
                    const re = /^[0-9\b]+$/;
                    if (e.target.value === "" || re.test(e.target.value)) {
                      this.setState({ secCode: e.target.value });
                    }
                  }}
                  required
                  variant="outlined"
                />
              </div>
              <div>
                <label htmlFor="postalCode">Postal code</label>
                <TextField
                  id="outlined-basic postalCode"
                  type="text"
                  value={postalCode}
                  placeholder="Postal Code"
                  maxLength={5}
                  onChange={(e) => {
                    const re = /^[0-9\b]+$/;
                    if (e.target.value === "" || re.test(e.target.value)) {
                      this.setState({ postalCode: e.target.value });
                    }
                  }}
                  className="outlined"
                  required
                  variant="outlined"
                />
              </div>
              <div>
                <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' className="radio" label='Use this card for next purchase' />
              </div>
              <Button type="submit" className="addCard" padding="15px">
                Add Card
              </Button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
