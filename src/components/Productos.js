import { Component } from "react";
import Producto from './Producto'

const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

class Productos extends Component {
    render() {
        const { productos, agregarAlCarrito } = this.props

        return (
            <div style={styles.productos}>
                {productos.map(producto =>
                    <Producto
                        agregarAlCarrito={() => agregarAlCarrito(producto)}
                        key = {producto.name}
                        producto = {producto}
                    />
                )}
            </div>
        )

    }
}

export default Productos