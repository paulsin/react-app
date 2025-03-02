import React from 'react'

const PropertyCustomerRequestForOwnerPropertyIDRequestHistory = (props) => {

  var param2=props.param2;

  var param1State = props.param1State;
  var setParam1State = props.setParam1State;

  function test() {
    setParam1State("table");
  }

  return (
    <div>
      HELLO PAULSIN

      <br/>

      <button class = "btn btn-primary" onClick={test}> back </button>
    </div>
  )
}

export default PropertyCustomerRequestForOwnerPropertyIDRequestHistory