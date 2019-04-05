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
      modalOn: false
    }

    this.addFavoriteStore = this.addFavoriteStore.bind(this);
    this.favoriteStoreInfo = this.favoriteStoreInfo.bind(this);
    this.cancelStoreInfo = this.cancelStoreInfo.bind(this);
  }

  favoriteStoreInfo(store) {
    this.setState({
      ...this.state,
      modalOn: store,
    })
  }

  cancelStoreInfo() {
    this.setState({
      ...this.state,
      modalOn: false,
    })
  }

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
        {this.state.modalOn &&
        <ModalStore
        addFavoriteStore={this.addFavoriteStore}
        favStore={this.state.modalOn}
        cancelStoreInfo={this.cancelStoreInfo}
        />}
        <FavoriteStoresMenu
        favoriteStores={this.state.favoriteStores}
        />
        <MapContainer
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          favoriteStoreInfo={this.favoriteStoreInfo}
        />
      </div>
    );
  }
}

export default App;


// AIzaSyCPXHVT3nPdAZbs4wMGm241DOlPOPfNn7s