import React from 'react';

const styleDivContainer = {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "100000"
}

const styleDivCard = {
    height: "40%",
    width: "60%",
    background: "#fff",
    position: "relative",
    top: "30%",
    left: "20%",
    borderRadius: "10px",
    border: "2px solid #c9c9c9",
    display: "flex",
    boxShadow: "4px 6px 19px 0px rgba(0,0,0,0.75)",
    flexFlow: "column"
}

const styleAddFav = {
    height: "40px",
    width: "fit-content",
    padding: "0 10px",
    background: "#0074D9",
    color: "#f5f5f5",
    display: "flex",
    borderRadius: "10px",
    margin: "auto",
    marginBottom: "10px",
    boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.75)",
    cursor: "pointer"
}

const styleTitle = {
    // height: "fit-content",
    display: "inline-block",
    margin: "10px auto",
    fontWeight: "700",
    padding: "10px"
}

const styleAddress = {
    display: "inline-block",
    margin: "10px auto",
    padding: "0 20px"
}

const styleCancel = {
    color: "#0074D9",
    textDecoration: "underline",
    display: "inline-block",
    margin: "auto",
    cursor: "pointer"
}

function ModalStore(props) {
    return (
        // container externo, si se clickea ahi se cierra el modal
        <div style={styleDivContainer} onClick={(e)=> {
            if (e.target.getAttribute("value") === "outer") {
                props.cancelStoreInfo();
            }
        } } value="outer">
        {/* modal muestra info de la tienda, boton de agregar depende de propiedad, boton cancelar cierra el modal */}
            <div style={styleDivCard} className="modal-card">
            <span style={styleTitle}>{props.favStore.Name}</span>
            <span style={{...styleAddress, margin: "0"}}>Dirección: </span><span style={styleAddress}>{props.favStore.Address}</span>
            {props.showAddButton && <div style={styleAddFav} onClick={() => props.addFavoriteStore(props.favStore)} className="add-to-favorites"><span style={{display: "inline-block", margin: "auto"}}>Agregar a Favoritos</span></div>}
            <span style={styleCancel} onClick={props.cancelStoreInfo}>Cancelar</span>
            </div>

        </div>
    )
}

export default ModalStore;