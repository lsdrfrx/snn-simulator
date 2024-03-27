import React from "react";
import { useEffect } from "react";
import { MultiDirectedGraph } from "graphology";

import { SigmaContainer, useLoadGraph, useRegisterEvents } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

import "./workspace.scss";
import { NeuronColors, NeuronTypes, useLoadNetwork } from "../../hooks/useloadnetwork.ts";

const SNNGraph = ({ sendInfo, clearInfo }) => {
  const loadGraph = useLoadGraph();
  const registerEvents = useRegisterEvents();
  const network = useLoadNetwork();

  useEffect(() => {
    registerEvents({
      clickNode: (evt) => sendInfo("neuron", network.neurons.find(neuron => neuron.id == evt.node)),
      clickEdge: (evt) => sendInfo("synapse", network.synapses.find(synapse => synapse.id == evt.edge)),
      clickStage: (evt) => clearInfo(),
    })
    // Create the graph
    const graph = new MultiDirectedGraph();
    network.neurons.forEach((neuron, _) => {
      graph.addNode(neuron.id, { x: neuron.position.x, y: neuron.position.y, label: neuron.id, size: 15, color: NeuronColors[neuron.type]});
    })
    network.synapses.forEach((synapse, _) => {
      graph.addEdgeWithKey(synapse.id, synapse.from, synapse.to, { label: synapse.id, size: 5 });
    })

    loadGraph(graph);
  }, [loadGraph, registerEvents]);

  return null;
};

const Workspace = ({ handleOpenInfo, handleClearInfo }) => {
  return (
    <div id="workspace">
      <SigmaContainer graph={MultiDirectedGraph} settings={{enableEdgeEvents: true}}>
        <SNNGraph sendInfo={handleOpenInfo} clearInfo={handleClearInfo} />
      </SigmaContainer>
    </div>
  );
};


export default Workspace;