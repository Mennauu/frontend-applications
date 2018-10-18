import React, { Component } from 'react';
import data from '../assets/data.json';

class RiskResultsTable extends Component {
  render() {
    return (
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
    );
  }
}

export default RiskResultsTable;
