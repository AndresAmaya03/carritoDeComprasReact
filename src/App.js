import { Component } from 'react';
import Productos from './components/Productos.js'
import Layout from './components/Layout.js'

class App extends Component {
  state = {
    productos: [
      {name: 'Tomate', price: 1500, img: '/productos/tomate.jpg'},
      {name: 'Ejote', price: 2500, img: '/productos/ejote.jpg'},
      {name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg'}
    ]
  }
  render() {
    return(
      <div>
        <Layout>
        <Productos
          agregarAlCarrito = {() => console.log('no se hace nada')}
          productos = {this.state.productos}
        />
        </Layout>
      </div>
    )

  }
}

export default App;
