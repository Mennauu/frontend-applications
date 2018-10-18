import React, { Component } from 'react';
import data from '../assets/data.json';
import RiskInputForm from './RiskInputForm';
import RiskSelectForm from './RiskSelectForm';
// import RiskResultsTable from './RiskResultsTable';

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
    //------------- Custom -------------/

    //----Retrieve amount of questions----//
    let questionsAmount = 0;

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].questions.length; j++) {
        questionsAmount++;
      }
    }
    //----/Retrieve amount of questions----//

    //----Retrieve taxation value----//

    // Using reduce to iterate through the value array, adding the
    // current element value to the sum of the previous element values.
    //let taxationValue = 0;
    let taxationValue = Number(this.state.values.reduce((a, b) => a + b, 0).toFixed(2))
    {console.log(taxationValue)}
    // if value is negative change it to zero
    if (taxationValue < 0) {
      taxationValue = 0;
    }

    //----/Retrieve taxation value----//

    //-------------/Custom -------------/

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
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Categorie</th>
                        <th scope="col">Risicotaxatie</th>
                        <th scope="col">Vragen ingevuld</th>
                      </tr>
                    </thead>
                    <tbody>
                    {/* Map through data */}
                    {data.map(data =>
                      <tr key={data.id}>
                        <th scope="row" className="font-weight-normal">{data.category}</th>
                        <td>{taxationValue} %</td>
                        <td><span className="bg-block"></span> / <span className="bg-block">{data.questions.length}</span></td>
                      </tr>
                    )}
                    </tbody>
                  </table>
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
