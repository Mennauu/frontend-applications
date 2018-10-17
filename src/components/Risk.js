import React, { Component } from 'react';
import data from '../assets/data.json';

class Risk extends Component {

  // Set the constructor
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  // extract the value to setState the DOM
  handleChange = (event) => {
    this.setState({ value: event.target.value })
    console.log("you have choose :" + this.state.value);
  }



  render() {
    //----Return amount of questions----//
    let questionsAmount = 0;
    let value = 0;
    let taxationValue = Number((1 / (1 + Math.exp(-1 * (-8.57219 + value))) * 100).toFixed(2));

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].questions.length; j++) {
        questionsAmount++;
        //----Return value from answers---- THIS IS WRONG, EDIT OUT LATER//
        for (let k = 0; k < data[i].questions[j].options.length; k++) {
          value += data[i].questions[j].options[k].value;
        }
      }
    }

    //----Return amount of questions not filled in----//
    // let unfilledQuestionsAmount = 0;
    //var selectCollection = document.getElementsByTagName('select').length;
    //const selectCollection = node.getElementsByTagName('select');
      //{console.log(selectCollection.length)}

    /*for (var i = 0; i < selectCollection.length; i++) {

      selectCollection[i].addEventListener("click", function() {
        unfilledQuestionsAmount++;
      });
    }

    document.getElementsByTagName('select').onclick = function() {
        console.log('Hello');
    }*/


    /*var value = $('.form-control').filter(function () {
      return this.value !== '';
    });

    if (value.length>=0 && (value.length !== selectCollection)) {

    }*/

    /*let unfilledQuestionsAmount = 3;

    let selectCollection = document.getElementsByClassName('form-control');
    for (var i = 0; i < selectCollection.length; i++) {
      selectCollection[i].selectedIndex = unfilledQuestionsAmount;
      {console.log(unfilledQuestionsAmount)}
    } */


    /*  var value = selectField.options[selectField.selectedIndex].value;
    if (value === "") {
      unfilledQuestionsAmount++;
    } */



    //----Return ID, category, labels and options----//





//----Return front-end----//
    return (
      <div>
        <div className="container-fluid">
          <h1>Risicotaxatie</h1>
          <div className="row">
            <div className="col-4">
              <form>
                {data.map(data =>
                  <>
                  <div className="card shadow-sm" key={data}>
                    <fieldset>
                      <legend onClick={this.showAlert} id={`heading${data.id}`} data-toggle="collapse" data-target={`#collapse${data.id}`} aria-expanded="false" aria-controls={`collapse${data.id}`}>{data.category}</legend>
                      <div id={`collapse${data.id}`} className="collapse" aria-labelledby={`heading${data.id}`} data-parent="#accordion">
                        <div className="card-body">
                          {data.questions.map(question =>
                          <>
                            <label key={question} className="font-weight-bold">{question.label}</label>
                            <select className="form-control mb-4" required defaultValue={this.state.value} onChange={this.handleChange}>
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
              <div className="card shadow-sm">
                <div className="card-body text-justify">
                  <h5 className="card-title">Resultaten</h5>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Cateogrie</th>
                        <th scope="col">Individuele risicotaxatie</th>
                        <th scope="col">Vragen ingevuld</th>
                      </tr>
                    </thead>
                    <tbody>
                    {data.map(data =>
                      <tr>
                        <th scope="row" className="font-weight-normal">{data.category}</th>
                        <td>{taxationValue} %</td>
                        <td><span className="bg-block">0</span> / <span className="bg-block">{data.questions.length}</span></td>
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
