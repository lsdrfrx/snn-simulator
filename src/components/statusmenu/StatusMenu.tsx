import React from "react";
import "./statusmenu.scss"
import ResizePanel from 'react-resize-panel';
import * as _ from "lodash";

const StatusMenu = ({ data, visible }) => {
  let view;

  if (_.isEmpty(data)) {
    view = <p>Data is empty</p>
  }
  else {
    if (data.type === "neuron") {
      const neuron = data.data;
      console.log(neuron);
      view = (
        <div>
          <h2>Neuron #{neuron.id}</h2>
          <p>Type: {neuron.type}</p>
          {/* <pre>Position: neuron.position.x, neuron.position.y</pre> */}
          {/* <pre>Parameters: {neuron.parameters}</pre> */}
        </div>
      )
    }
    else {
      const synapse = data.data;
      view = (
        <div>
          <h2>Synapse #{synapse.id}</h2>
          <p>From: {synapse.from}</p>
          <p>To: {synapse.to}</p>
          {/* <pre>Parameters: {synapse.parameters}</pre> */}
        </div>
      )
    }
  }

  return (
    <ResizePanel direction="w" style={{minWidth: '250px', maxWidth: '450px', display: visible ? "flex" : "none"}}>
      <div id="statusmenu" className="container">
        {view}
      </div>
    </ResizePanel>
  );
}

export default StatusMenu;