import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import data from '../assets/data.json';

class Risk extends Component {

  render() {

    //----Return amount of questions----//
        let questionsAmount = 0;

        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].questions.length; j++) {
            questionsAmount++;
          }
        }

    //----Return amount of questions not filled in----//


        let unfilledQuestionsAmount = 0;
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
    const menuItems = data.map(data =>
      <div className="card shadow-sm" key={data.id}>
        <div className="card-header" id={`heading${data.id}`}>
          <button className="btn btn-link collapsed font-weight-bold" data-toggle="collapse" data-target={`#collapse${data.id}`} aria-expanded="false" aria-controls={`collapse${data.id}`}>
            {data.category}
          </button>
        </div>
        <div id={`collapse${data.id}`} className="collapse" aria-labelledby={`heading${data.id}`} data-parent="#accordion">
          <div className="card-body">
            {data.questions.map(question =>
            <>
              <label key={question} className="font-weight-bold">{question.label}</label>
              <select className="form-control mb-4" required>
                <option disabled selected hidden value="">-</option>
                {question.options.map(option =>
                  <option key={option} className="d-block">{option}</option>
                )}
              </select>
            </>
            )}
          </div>
        </div>
      </div>
    )

    const tableContent = data.map(data =>
      <tbody>
        <tr>
          <th scope="row" className="font-weight-normal">{data.category}</th>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
      </tbody>
    )



//----Return front-end----//
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
                  <h5 className="card-title">Resultaten</h5>
                  <table class="table table-striped text-center">
                    <thead>
                      <tr>
                        <th scope="col">Cateogrie</th>
                        <th scope="col">Individuele risicotaxatie</th>
                        <th scope="col">Vragen ingevuld</th>
                      </tr>
                    </thead>
                    {tableContent}
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
