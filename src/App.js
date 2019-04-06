import React, { Component } from 'react';
import './App.css';
import MapContainer from "./components/mapContainer";
import FavoriteStoresMenu from './components/favoriteStoresMenu';
import ModalStore from './components/modalStore';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteStores: [],
      modalOn: false,
      favoriteStoreOn: false,
    }

    this.addFavoriteStore = this.addFavoriteStore.bind(this);
    this.showStoreInfo = this.showStoreInfo.bind(this);
    this.cancelStoreInfo = this.cancelStoreInfo.bind(this);
    this.removeFavoriteStore = this.removeFavoriteStore.bind(this);
    this.showFavoriteStore = this.showFavoriteStore.bind(this);
    this.cancelFavoriteStoreInfo = this.cancelFavoriteStoreInfo.bind(this);
  }

  // muestra info de la tienda cuando usuario clickea el marker del mapa
  showStoreInfo(store) {
    this.setState({
      ...this.state,
      modalOn: store,
    })
  }

  // cancela el modal con la info de la tienda
  cancelStoreInfo() {
    this.setState({
      ...this.state,
      modalOn: false,
    })
  }

  // muestra modal con info sobre tienda favorita seleccionada
  showFavoriteStore(store) {
    this.setState({
      ...this.state,
      favoriteStoreOn: store,
    })
  }

  // cancela modal con info sobre tienda favorita seleccionada
  cancelFavoriteStoreInfo() {
    this.setState({
      ...this.state,
      favoriteStoreOn: false,
    })
  }

  // agrega tienda favorita, solo si no esta ya agregada
  addFavoriteStore(store) {
    const newFavoriteStores = this.state.favoriteStores;
    if (newFavoriteStores.indexOf(store) === -1) {
      newFavoriteStores.push(store);
    }
    this.setState({
      ...this.state,
      favoriteStores: newFavoriteStores,
      modalOn: false,

    })
  }

  // elimina tienda de favoritos
  removeFavoriteStore(store) {
    const newFavoriteStores = this.state.favoriteStores.filter(element => {
      return (element !== store)
    })
    this.setState({
      ...this.state,
      favoriteStores: newFavoriteStores,
    })
  }

  


  render() {
    return (
      <div className="App">
        {/* modal que se muestra al apretar marker en el mapa, depende de estado modalOn */}
        {this.state.modalOn &&
        <ModalStore
        addFavoriteStore={this.addFavoriteStore}
        favStore={this.state.modalOn}
        cancelStoreInfo={this.cancelStoreInfo}
        showAddButton
        />}
        {/* modal de tienda favorita, reutiliza el componente ModalStore con distintas propiedades, se muestra al clickear información en alguna tienda favorita */}
        {this.state.favoriteStoreOn &&
        <ModalStore
        favStore={this.state.favoriteStoreOn}
        cancelStoreInfo={this.cancelFavoriteStoreInfo}
        />}
        {/* componente que contiene el mapa y los marcadores */}
        <MapContainer
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          showStoreInfo={this.showStoreInfo}
        />
        {/* {MapContainer({showStoreInfo: this.showStoreInfo})} */}
        {/* componente que muestra las tiendas favoritas */}
        <FavoriteStoresMenu
        favoriteStores={this.state.favoriteStores}
        removeFavoriteStore={this.removeFavoriteStore}
        showFavoriteStore={this.showFavoriteStore}
        />
      </div>
    );
  }
}


// AIzaSyCPXHVT3nPdAZbs4wMGm241DOlPOPfNn7s

export default App;



// "react": "^16.4.0",
// "react-dom": "16.4.2",
// "react-scripts": "1.1.4",
