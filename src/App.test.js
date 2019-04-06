import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';


Enzyme.configure({adapter: new Adapter()})


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('agrega tienda a favoritos desde opción en modal', () => {  
  const appComponent = Enzyme.mount(<App />);
  const appComponentInstance = appComponent.instance();
  appComponentInstance.showStoreInfo({
    "Name": "Red Barn Stores 3858-CUAJIMALPA",
    "Address": "JOSE MA. CASTORENA NO. 84  COL. SAN JOSE DE LOS CEDROS, DELEGACION CUAJIMALPA   MEXICO D.F. C.P. 05210",
    "Coordinates": {
      "lat": 39.390897,
      "lng": -99.066067
    }
  })
  appComponent.update();
  const modal = appComponent.find('ModalStore');
  modal.find(".add-to-favorites").simulate('click');
  expect(appComponent.state().favoriteStores[0].Name).toBe("Red Barn Stores 3858-CUAJIMALPA");
});

it('elimina tienda de favoritos luego de pedir confirmación', () => {  
  const appComponent = Enzyme.mount(<App />);
  const appComponentInstance = appComponent.instance();
  appComponentInstance.showStoreInfo({
    "Name": "Red Barn Stores 3858-CUAJIMALPA",
    "Address": "JOSE MA. CASTORENA NO. 84  COL. SAN JOSE DE LOS CEDROS, DELEGACION CUAJIMALPA   MEXICO D.F. C.P. 05210",
    "Coordinates": {
      "lat": 39.390897,
      "lng": -99.066067
    }
  })
  appComponent.update();
  const modal = appComponent.find('ModalStore');
  modal.find(".add-to-favorites").simulate('click');
  const favStore = appComponent.find('FavoriteStoresMenu').find('li').find('div').at(2);
  const confirmStub = sinon.stub(global, 'confirm');
  confirmStub.returns(true);
  appComponent.update();
  favStore.simulate('click');
  expect(appComponent.state().favoriteStores.length).toBe(0);

});