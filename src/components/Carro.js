import { Component } from "react";
import BubbleAlert from './BubbleAlert.js'
import DetallesCarro from './DetallesCarro.js'

const styles = {
    boton: {
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer'
    },
    buttonHover: {
        backgroundColor: '#074257',
        padding: '15px 20px'
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20
    }
}

class Carro extends Component {
    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props
        const cantidad = carro.reduce((acumulado, elemento) => acumulado + elemento.cantidad,0)
        return(
            <div>
                <span style={styles.bubble}>
                    {cantidad !==0 
                    ?<BubbleAlert value={cantidad} />
                    : null}
                    
                </span>
                <button onClick={mostrarCarro} style={styles.boton}>
                    Carro
                </button>
                {esCarroVisible ? <DetallesCarro carro={carro}/> : null}
                
            </div>

        )
    }
}

export default Carro
