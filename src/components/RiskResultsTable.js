import React, { Component } from 'react';
import data from '../assets/data.json';

class RiskResultsTable extends Component {
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


    // Retrieve amount of questions filled in
    let questionsFilledIn = 0;
    var selectCollection = document.getElementsByTagName('select');

    for (var i = 0; i < selectCollection.length; i++) {
      if (selectCollection[i].value != "") {
        questionsFilledIn++;
      }
    }

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Categorie</th>
            <th scope="col">Risicotaxatie</th>
            <th scope="col">Reden</th>
            <th scope="col" className="text-right">Vragen ingevuld</th>
          </tr>
        </thead>
        <tbody>
        {/* Map through data */}
        {data.map(data =>
          <tr key={data.id}>
            <th scope="row" className="font-weight-normal">{data.category}</th>
            <td>{taxationValue} %</td>
            <td>...</td>
            <td className="text-right"><span className="bg-block">{questionsFilledIn}</span> / <span className="bg-block">{data.questions.length}</span></td>
          </tr>
        )}
        </tbody>
      </table>
    );
  }
}

export default RiskResultsTable;
