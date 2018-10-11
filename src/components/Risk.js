import React, { Component } from 'react';

class Risk extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <h1>Risicotaxatie</h1>
          <div className="row">
            <div className="col-4">
              <div id="accordion">
                <div className="card shadow-sm">
                  <div className="card-header" id="headingOne">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Algemeen
                    </button>
                  </div>
                  <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-tab.
                    </div>
                  </div>
                </div>
                <div className="card shadow-sm">
                  <div className="card-header" id="headingTwo">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Werk & Opleiding
                    </button>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-tab.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="card shadow-sm">
                <div className="card-body text-justify">
                  <h5 className="card-title">Introductie risicotaxatieapp</h5>
                  <p className="card-text">Deze beslissingondersteuningstool kan gebruikt worden door hulpverleners om een objectieve risico-indicatie te krijgen op een zwaardere maatregel op basis van kenmerken van het kind, de ouders en het huishouden. Onder zwaardere maatregelen vallen in dit geval jeugdhulp met verblijf, jeugdbeschermings-maatregelen en jeugdreclasseringsmaatregelen.</p>
                  <p className="card-text">In het menu vindt u onder 'Risico indicatie' de objectieve risico indicatie tool op een zware maatregel op basis van kenmerken. Daarnaast vindt u onder 'Trajectkeuze' een tool om op basis van eerdere trajecten de kans te vekrijgen op een volgend traject op basis van historische gegevens.</p>
                  <p className="card-text">Mocht u nog vragen hebben over de tool in het algemeen of het gebruik ervan, kunt u contactgegevens vinden onder 'Contact'.</p>
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
