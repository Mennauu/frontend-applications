import React, { Component } from 'react';
import data from '../assets/data.json';

class RiskSelectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange = (event) => {
    let values = [...this.state.values, Number(event.target.value)]
    this.props.getValues(values)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Map through data */}
        {data.map(data =>
          <React.Fragment key={data.id}>
          <div className="card shadow-sm rounded">
            <fieldset>
              {/* Add unique id's to elements so we can Toggle each element separately */}
              <legend key={data.category} className="rounded" id={`heading${data.id}`} data-toggle="collapse" data-target={`#collapse${data.id}`}>{data.category}</legend>
              <div id={`collapse${data.id}`} className="collapse">
                <div className="card-body">
                  {/* Map through questions */}
                  {data.questions.map(question =>
                  <React.Fragment key={question.label}>
                    <label className="font-weight-bold">{question.label}</label>
                    {/* Change value from select based on chosen option */}
                    <select className="form-control mb-4" required defaultValue="" onChange={this.handleChange}>
                      <option disabled hidden value="">-</option>
                      {question.options.map(options =>
                        <option key={options.option} className="d-block" value={options.value}>{options.option}</option>
                      )}
                    </select>
                  </React.Fragment>
                  )}
                </div>
              </div>
            </fieldset>
          </div>
          </React.Fragment>
        )}
      </form>
    );
  }
}

export default RiskSelectForm;
