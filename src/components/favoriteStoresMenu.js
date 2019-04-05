import React, { Component } from 'react';

const styleDiv = {
    width: "30%",
    height: "100%",
    float: "left",
    "background-color": "#fff",
    // border: "20px solid #a6e3e9",
    "box-sizing": "border-box",
    display: "flex",
    "flex-flow": "column"
}

const styleTitle = {
    display: "inline-block",
    margin: "5% auto"
}

const styleLi = {
    "list-style": "none",
    "margin": "10px auto"
}


class FavoriteStoresMenu extends Component {
    

    renderIndividualStores = () => {
        const mappedStores = this.props.favoriteStores.map(item => {
            return (
                <li style={styleLi}>{item.Name}</li>
            )
        })
        return mappedStores;
    }

    render() {
        return (
            <div style={styleDiv}>
                <span style={styleTitle}>Mis Tiendas Favoritas</span>
                <ul>
                    {this.renderIndividualStores()}
                </ul>
            </div>
        )
    }
}

export default FavoriteStoresMenu;

// #0074D9