//----Store value's from select option in a array----//
// let taxationValue = Number((1 / (1 + Math.exp(-1 * (-8.57219 + value))) * 100).toFixed(2));

/*let values = [];
let selectCollection = document.getElementsByTagName('select');
for (let i = 0; i < selectCollection.length; i++) {
  values.push(selectCollection.options[i].value)
}*/






//----Return amount of questions not filled in----//
//let unfilledQuestionsAmount = 0;

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


import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ClientOverview extends Component {
    constructor(props) {
        super(props);

        this.state ={
            loading: true,
            clients: []
        }
    }

    async componentDidMount() {
        let response = await fetch('http://localhost:1337/clients');
        if (!response.ok) {
            console.log('error not found / cant connect')
            return
        }
        let clients = await response.json();
        this.setState({loading: false, clients: clients});
    }
    render() {
        if (!this.state.loading) {
            return (
                <>
                <h2>Aantal clienten: {this.state.clients.length}</h2>
                <section className={'clientOverview'}>
                    {this.state.clients.map((client, index) => {
                        return (
                            <article className="clientOverview__client">
                                <div className="clientOverview__clientInfomation" key={index}>
                                    <Link to={`/clienten/${client.id}`}>
                                        <h3>{client.name}</h3>
                                    </Link>
                                </div>
                            </article>

                            // TODO:
                            // add update button
                            // add question support
                        )
                    })}
                </section>
                </>
            )
        } else {
            return (
                <h2>Loading</h2>
            )
        }
    }

}
