import React from 'react';

const styleDivContainer = {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    position: "absolute",
    top: "0",
    left: "0",
    "z-index": "100000"
}

const styleDivCard = {
    height: "40%",
    width: "60%",
    background: "#fff",
    position: "relative",
    top: "25%",
    left: "25%",
    "border-radius": "10px",
    border: "2px solid #c9c9c9",
    display: "flex",
    "box-shadow": "4px 6px 19px 0px rgba(0,0,0,0.75)",
    "flex-flow": "column"
}

const styleAddFav = {
    height: "40px",
    width: "fit-content",
    padding: "0 10px",
    background: "#0074D9",
    color: "#f5f5f5",
    display: "flex",
    "border-radius": "10px",
    margin: "auto",
    "margin-bottom": "10px",
    "box-shadow": "0px 2px 10px 0px rgba(0,0,0,0.75)",
    cursor: "pointer"
}

const styleTitle = {
    // height: "fit-content",
    display: "inline-block",
    margin: "10px auto",
    "font-weight": "700",
    padding: "10px"
}

const styleAddress = {
    display: "inline-block",
    margin: "10px auto",
    padding: "0 20px"
}

const styleCancel = {
    color: "#0074D9",
    "text-decoration": "underline",
    display: "inline-block",
    margin: "auto",
    cursor: "pointer"
}

function ModalStore(props) {
    return (
        <div style={styleDivContainer} onClick={(e)=> {
            if (e.target.getAttribute("value") === "outer") {
                props.cancelStoreInfo();
            }
        } } value="outer">
            <div style={styleDivCard}>
            <span style={styleTitle}>{props.favStore.Name}</span>
            <span style={{...styleAddress, margin: "0"}}>Dirección: </span><span style={styleAddress}>{props.favStore.Address}</span>
            <div style={styleAddFav} onClick={() => props.addFavoriteStore(props.favStore)}><span style={{display: "inline-block", margin: "auto"}}>Agregar a Favoritos</span></div>
            <span style={styleCancel} onClick={props.cancelStoreInfo}>Cancelar</span>
            </div>

        </div>
    )
}

export default ModalStore;