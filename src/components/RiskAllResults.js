import React, { Component } from 'react';
import data from '../assets/data.json';

class RiskAllResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
    }
  }

  render() {
    // Using reduce to iterate through the value array, adding the
    // current element value to the sum of the previous element values.
    let taxationValue = Number(this.props.taxation.reduce((a, b) => a + b, 0).toFixed(2))
    // if value is negative change it to zero
    if (taxationValue < 0) {
      taxationValue = 0;
    }

    //----Retrieve amount of questions----//
    let questionsAmount = 0;

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].questions.length; j++) {
        questionsAmount++;
      }
    }

    //----Retrieve amount of questions filled in----//
    let questionsFilledIn = 0;
    var selectCollection = document.getElementsByTagName('select');

    for (var i = 0; i < selectCollection.length; i++) {
      if (selectCollection[i].value !== "") {
        questionsFilledIn++;
      }
    }

    return (
      <div>
        <div className="row my-2">
          <div className="col-3 pr-1">
            <div className="py-5">
              <h3>Risico</h3>
              <p>{taxationValue} %</p>
            </div>
          </div>
          <div className="col-6 px-1">
            <div className="py-5">
              <h3>Reden</h3>
              <p>...</p>
            </div>
          </div>
          <div className="col-3 pl-1">
            <div className="py-5">
              <h3>Vragen</h3>
              <p><span>{questionsFilledIn}</span> / <span>{questionsAmount}</span></p>
            </div>
          </div>
        </div>
        <div className="text-left">
          <p className="bg-white text-info rounded py-2 px-4 d-inline-block information-block">
            <i className="fa fa-info-circle" aria-hidden="true"></i>
            <span className="text-success mx-4 d-none">0 - 2%: Laag risico</span>
            <span className="text-warning mr-4 d-none">2 - 5%: Middelmatig risico</span>
            <span className="text-danger mr-4 d-none">5% en hoger: Hoog risico</span>
          </p>
        </div>
      </div>
    );
  }
}

export default RiskAllResults;
