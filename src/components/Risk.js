import React, { Component } from 'react';
import data from '../assets/data.json';
import RiskInputForm from './RiskInputForm';
import RiskSelectForm from './RiskSelectForm';
import RiskResultsTable from './RiskResultsTable';


class Risk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
    }
  }

  getValues = (dataFromChild) => {
     this.setState({values: dataFromChild});
  }

  render() {
    //----Retrieve amount of questions----//
    let questionsAmount = 0;

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].questions.length; j++) {
        questionsAmount++;
      }
    }

    return (
      <div>
        <div className="container-fluid">
          <h1 className="bg-info rounded text-white p-3">Risicotaxatie</h1>
          <div className="row">
            <div className="col mb-4">
              {/* RiskInputForm component */}
              <RiskInputForm />
              <div id="saved" className="p-2 rounded mt-2">
                <span>Opgeslagen</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              {/* RiskSelectForm component */}
              <RiskSelectForm getValues={this.getValues}/>
            </div>
            <div className="col-8">
              <div className="card shadow-sm rounded">
                <div className="card-body">
                  <h2 className="card-title">Individuele resultaten</h2>
                  {/* RiskResultsTable component */}
                  <RiskResultsTable taxation={this.state.values}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Risk;
