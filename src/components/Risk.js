import React, { Component } from 'react';

class Risk extends Component {

  render() {
    // JSON file van maken
    const form = [{'id':'One', 'category':'Algemeen', 'description':'test 1'}, {'id':'Two', 'category':'Werk & Opleiding', 'description':'test 2'}];

    const menuItems = form.map((form) =>
    <div className="card shadow-sm" key={form.id}>
      <div className="card-header" id={`heading${form.id}`}>
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target={`#collapse${form.id}`} aria-expanded="false" aria-controls={`collapse${form.id}`}>
          {form.category}
        </button>
      </div>
      <div id={`collapse${form.id}`} className="collapse" aria-labelledby={`heading${form.id}`} data-parent="#accordion">
        <div className="card-body">
          {form.description}
        </div>
      </div>
    </div>
    );

    return (
      <div>
        <div className="container-fluid">
          <h1>Risicotaxatie</h1>
          <div className="row">
            <div className="col-4">
              <div id="accordion">
                {menuItems}
              </div>
            </div>
            <div className="col-8">
              <div className="card shadow-sm">
                <div className="card-body text-justify">
                  <h5 className="card-title">Test</h5>
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
