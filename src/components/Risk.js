import React, { Component } from 'react';
import data from '../assets/data.json';

class Risk extends Component {
  // We set the constructor so we can configure states
  constructor(props) {
    super(props);
    this.state = {
      values: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Update state based on target value. We also keep the old values
  handleChange = (event) => {
    this.setState({values: [...this.state.values, Number(event.target.value)]})
  }

  handleInputChange = (event) => {

  }

  // Prevent page from reloading after a form has been submitted
  handleSubmit(event) {
    event.preventDefault();

    document.getElementById('saved').style.opacity = "1.0";
  }

  render() {

    // Using reduce to iterate through the value array, adding the
    // current element value to the sum of the previous element values.
    let taxationValue = Number(this.state.values.reduce((a, b) => a + b, 0).toFixed(2))
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

    //----Return front-end----//
    return (
      <div>
        <div className="container-fluid">
          <h1 className="bg-info rounded text-white p-3">Risicotaxatie</h1>
          <div className="row">
            <div className="col mb-4">
              <form className="custom-form" onSubmit={this.handleSubmit}>
                <input type="text" className="d-block w-100 px-3 rounded" name="dossier" placeholder="Naam van dossier invullen" value={this.state.value} onChange={this.handleInputChange} />
              </form>
              <div id="saved" className="p-2 rounded">
                <span>Opgeslagen</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <form onSubmit={this.handleSubmit}>
                {/* Map through data */}
                {data.map(data =>
                  <>
                  <div className="card shadow-sm rounded" key={data}>
                    <fieldset>
                      {/* Add unique id's to elements so we can Toggle each element separately */}
                      <legend className="rounded" id={`heading${data.id}`} data-toggle="collapse" data-target={`#collapse${data.id}`}>{data.category}</legend>
                      <div id={`collapse${data.id}`} className="collapse">
                        <div className="card-body">
                          {/* Map through questions */}
                          {data.questions.map(question =>
                          <>
                            <label key={question} className="font-weight-bold">{question.label}</label>
                            {/* Change value from select based on chosen option */}
                            <select className="form-control mb-4" required defaultValue="" onChange={this.handleChange}>
                              <option disabled hidden value="">-</option>
                              {question.options.map(options =>
                                <option key={options.option} className="d-block" value={options.value}>{options.option}</option>
                              )}
                            </select>
                          </>
                          )}
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  </>
                )}
              </form>
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
                      <tr>
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
