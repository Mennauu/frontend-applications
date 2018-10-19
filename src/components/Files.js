import React, { Component } from 'react';

class Files extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <h1 className="bg-info rounded text-white p-3">Dossierbestand</h1>
          <form className="custom-form mb-5">
            <input type="text" className="d-block w-100 px-3 rounded" name="dossier" placeholder="Zoeken naar Dossier" />
          </form>
          <div className="row">
            <div className="col-8">
              <div className="bg-white rounded">
                <table className="table table-striped text-center">
                  <thead>
                    <tr>
                      <th scope="col">Naam</th>
                      <th scope="col">Risicotaxatie</th>
                      <th scope="col">Aantal vragen ingevuld</th>
                      <th scope="col">Dossier openen/aanpassen</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sjanne Blaaman</td>
                      <td>2.5%</td>
                      <td>10/18</td>
                      <td><button type="button" className="btn btn-primary">Openen</button></td>
                    </tr>
                    <tr>
                      <td>Menno de Vries</td>
                      <td>1.8%</td>
                      <td>18/18</td>
                      <td><button type="button" className="btn btn-primary">Openen</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Files;
