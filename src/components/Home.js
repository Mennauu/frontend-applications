import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <h1 className="bg-info rounded text-white p-3">Kind Veilig Thuis</h1>
          <div className="row">
            <div className="col-6">
              <div className="card shadow-sm rounded">
                <div className="card-body text-justify">
                  <h2 className="card-title">Introductie risicotaxatieapp</h2>
                  <p className="card-text">Deze beslissingondersteuningstool kan gebruikt worden door hulpverleners om een objectieve risico-indicatie te krijgen op een zwaardere maatregel op basis van kenmerken van het kind, de ouders en het huishouden. Onder zwaardere maatregelen vallen in dit geval jeugdhulp met verblijf, jeugdbeschermings-maatregelen en jeugdreclasseringsmaatregelen.</p>
                  <p className="card-text">In het menu vindt u onder 'Risico indicatie' de objectieve risico indicatie tool op een zware maatregel op basis van kenmerken. Daarnaast vindt u onder 'Trajectkeuze' een tool om op basis van eerdere trajecten de kans te vekrijgen op een volgend traject op basis van historische gegevens.</p>
                  <p className="card-text">Mocht u nog vragen hebben over de tool in het algemeen of het gebruik ervan, kunt u contactgegevens vinden onder 'Contact'.</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card shadow-sm rounded">
                <div className="card-body text-justify">
                  <h2 className="card-title">Over de app</h2>
                  <p className="card-text">Deze tool is ontstaan door het toepassen van predictive analytics en pattern mining op historische gegevens van Amsterdamse jongeren van het CBS.</p>
                  <p className="card-text">Door middel van het koppelen van informatie uit CBS microdata is een dataset onstaan van jongeren uit Amsterdam tussen 0 en 18 jaar. De peildatum hiervoor is 31-12-2015. Binnen deze dataset kan een vergelijking gemaakt worden tussen jongeren die wel een zwaardere vorm van jeugdhulp gehad hebben en jongeren die dit niet gehad hebben. Op basis van literatuur en het toepassen van data mining, zijn de meest onderscheidende factoren geidentificeerd die het risico op een hulptraject verhogen of verlagen. Aan de hand hiervan is een model ontwikkeld die het risico op een zwaardere vorm van jeugdhulp geeft voor een individu aan de hand van kernmerken.</p>
                </div>
              </div>
            </div>
            <div className="col-6 mt-3">
              <div className="card shadow-sm rounded">
                <div className="card-body text-justify">
                  <h2 className="card-title">Contact</h2>
                  <p className="card-text">Voor meer informatie over het gebruik van de tool en de totstandkoming hiervan, kunt u contact opnemen met:</p>
                  <p className="card-text">Arjan de Jager, programma manager Garage2020 Amsterdam.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
