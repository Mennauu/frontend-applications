import React, { Component } from 'react';

class RiskInputForm extends Component {

  handleSubmit(event) {
    // Prevent page from reloading after submit
    event.preventDefault();

    let alert = document.getElementById('saved');
    // show alert and remove after 1.5 seconds
    if (!alert.classList.contains("fade-in")) {
      alert.classList.add("fade-in");
      setTimeout(function(){
        alert.classList.remove("fade-in");
      }, 2000);
    }
  }

  render() {
    return (
      <form className="custom-form" onSubmit={this.handleSubmit}>
        <input type="text" className="d-block w-100 px-3 rounded" name="dossier" placeholder="Naam van dossier invullen" />
      </form>
    );
  }
}

export default RiskInputForm;
