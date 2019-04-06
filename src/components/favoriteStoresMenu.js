import React, { Component } from 'react';

const styleDiv = {
    width: "30%",
    height: "100%",
    float: "left",
    backgroundColor: "#fff",
    // border: "20px solid #a6e3e9",
    boxSizing: "border-box",
    display: "flex",
    flexFlow: "column",
    overflowY: "scroll"
}

const styleTitle = {
    display: "block",
    margin: "5% auto",
    fontSize: "20px"

}

const styleLi = {
    listStyle: "none",
    margin: "10px auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottom: "1px solid rgb(86, 86, 86, 0.4)"
}

const styleTitleContainer = {
    width: "100%",
    height: "fit-content",
    background: "#0074D9",
    color: "#f5f5f5",
    display: "flex"
}

const styleStoreOptions = {
    width: "fit-content",
    height: "fit-content",
    padding: " 10px 20px",
    // color: "#0074D9",
    backgroundColor: "#0074D9",
    color: "#fafafa",
    border: "1px solid #0074D9",
    borderRadius: "10px",
    display: "block",
    margin: "10px auto 20px auto",
    boxSizing: "border-box",
    textAlign: "center",
    cursor: "pointer"
}

const styleStoreName = {
    width: "100%",
    margin: "10px auto",
    textAlign: "center"

}

class FavoriteStoresMenu extends Component {


    // funcion que mapea tiendas favoritas para renderizarlas en una lista
    renderIndividualStores = () => {
        let mappedStores;
        if (this.props.favoriteStores.length > 0) {
            mappedStores = this.props.favoriteStores.map((item, i) => {
                return (
                    <li style={styleLi} key={i}><div style={styleStoreName}>{item.Name}</div>
                    <div style={styleStoreOptions} onClick={() => this.props.showFavoriteStore(item)}>Infomación</div>
                    {/* boton para eliminar tienda de favoritos, pide confirmación */}
                    <div style={styleStoreOptions} onClick={() => {
                        window.confirm("¿Desea eliminar esta tienda de sus favoritos?") && 
                            this.props.removeFavoriteStore(item)
                        }}>Eliminar</div>
                    </li>
                )
            })
        } else {
            mappedStores = (<p style={{marginRight: "10px", marginLeft: "10px"}}>Aún no has agregado tiendas a tus favoritos.</p>)
        }
        return mappedStores;
    }

    render() {
        return (
            // container de tiendas favoritas, se posiciona a la izquierda en desktop y abajo en mobile
            <div style={styleDiv} className="favorite-stores-container">
                <div style={styleTitleContainer}>
                    <span style={styleTitle} className="fav-stores-title">Mis Tiendas Favoritas</span>
                </div>
                {/* si hay tiendas favoritas, se crea tag <ul> y dentro un <li> con cada tienda, cada <li> permite ver info y eliminar */}
                {this.props.favoriteStores.length > 0 && <ul style={{padding: "0 10px"}}>
                    {this.renderIndividualStores()}
                </ul>}
                {/* si no hay tiendas favoritas, se muestra texto indicando esto al usuario */}
                {this.props.favoriteStores.length === 0 && 
                    this.renderIndividualStores()
                }
            </div>
        )
    }
}

export default FavoriteStoresMenu;

// #0074D9