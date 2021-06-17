import React from "react"
import PropTypes from "prop-types"
const axios = require('axios')

class UbicacionPuntero extends React.Component {
  
  constructor(props) {
    super(props);
    this.movimientoPuntero = this.movimientoPuntero.bind(this);
    this.onclick = this.onclick.bind(this)
    this.state = { x: 0, y: 0 };
    console.log("print props", props);
  }
 
  
  movimientoPuntero(evento) {
    this.setState({
      x: evento.clientX,
      y: evento.clientY
    });
  }
 async onclick () {
   console.log("click aqui")
   
    // get data form API
    const res = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=3')
    console.log("data", res.data)
  
 }

 
  render() {
    return (
      <div style={{ height: '100vh' }} onMouseDown={this.onclick} onMouseMove={this.movimientoPuntero}>        
        <p>La posición actual del puntero es: ({this.state.x}, {this.state.y})</p>
      </div>
    );
  }
}
 
export default UbicacionPuntero