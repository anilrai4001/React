import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div style={{color:'white',fontSize:'20px', backgroundColor: 'black'}}>
        <h2>this is footer using class based component</h2>
        {/* {(10==10) ? <p>this is conditional rendering true condition</p> : <p> this is conditional renderin false condition</p>} */}
        {/* {(10!=10) ? 'this is conditional rendering true condition' : 'this is conditional renderin false condition'} */}
      </div>
    )
  }
}
