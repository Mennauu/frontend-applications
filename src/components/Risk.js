import React, { Component } from 'react';
import RiskInputForm from './RiskInputForm';
import RiskSelectForm from './RiskSelectForm';
import RiskAllResults from './RiskAllResults';
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
              <div className="card shadow-sm rounded mb-4 bg-info text-white text-center">
                <div className="card-body">
                  <h2 className="card-title mt-4">Totaalresultaat</h2>
                  {/* RiskAllResults component */}
                  <RiskAllResults taxation={this.state.values}/>
                </div>
              </div>
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
