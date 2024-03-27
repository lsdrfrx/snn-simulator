enum NeuronTypes {
  Input = "input",
  Output = "output",
  Excitatory = "excitatory",
  Inhibitory = "inhibitory",
};

const NeuronColors = {
  "input": "#99ff70",
  "output": "#ffba75",
  "excitatory": "#75c1ff",
  "inhibitory": "#fa6ee7",
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const useLoadNetwork = () => {
  const network = {
    neurons: [
      {
        id: 1,
        type: NeuronTypes.Input,
        position: {
          x: getRandomInt(20),
          y: getRandomInt(20),
        },
        parameters: {}
      },
      {
        id: 2,
        type: NeuronTypes.Input,
        position: {
          x: getRandomInt(20),
          y: getRandomInt(20),
        },
        parameters: {}
      },
      {
        id: 3,
        type: NeuronTypes.Input,
        position: {
          x: getRandomInt(20),
          y: getRandomInt(20),
        },
        parameters: {}
      },
      {
        id: 4,
        type: NeuronTypes.Input,
        position: {
          x: getRandomInt(20),
          y: getRandomInt(20),
        },
        parameters: {}
      },
      {
        id: 5,
        type: NeuronTypes.Output,
        position: {
          x: getRandomInt(20),
          y: getRandomInt(20),
        },
        parameters: {}
      },
      {
        id: 6,
        type: NeuronTypes.Output,
        position: {
          x: getRandomInt(20),
          y: getRandomInt(20),
        },
        parameters: {}
      },
      {
        id: 7,
        type: NeuronTypes.Excitatory,
        position: {
          x: getRandomInt(20),
          y: getRandomInt(20),
        },
        parameters: {}
      },
      {
        id: 8,
        type: NeuronTypes.Excitatory,
        position: {
          x: getRandomInt(20),
          y: getRandomInt(20),
        },
        parameters: {}
      },
      {
        id: 9,
        type: NeuronTypes.Excitatory,
        position: {
          x: getRandomInt(20),
          y: getRandomInt(20),
        },
        parameters: {}
      },
      {
        id: 10,
        type: NeuronTypes.Inhibitory,
        position: {
          x: getRandomInt(20),
          y: getRandomInt(20),
        },
        parameters: {}
      },
      {
        id: 11,
        type: NeuronTypes.Inhibitory,
        position: {
          x: getRandomInt(20),
          y: getRandomInt(20),
        },
        parameters: {}
      },
    ],
    synapses: [
      {
        id: 1,
        from: 1,
        to: 8,
        parameters: {}
      },
      {
        id: 2,
        from: 2,
        to: 8,
        parameters: {}
      },
      {
        id: 13,
        from: 2,
        to: 9,
        parameters: {}
      },
      {
        id: 3,
        from: 3,
        to: 7,
        parameters: {}
      },
      {
        id: 4,
        from: 3,
        to: 11,
        parameters: {}
      },
      {
        id: 5,
        from: 4,
        to: 10,
        parameters: {}
      },
      {
        id: 6,
        from: 7,
        to: 8,
        parameters: {}
      },
      {
        id: 7,
        from: 8,
        to: 10,
        parameters: {}
      },
      {
        id: 8,
        from: 11,
        to: 9,
        parameters: {}
      },
      {
        id: 9,
        from: 9,
        to: 6,
        parameters: {}
      },
      {
        id: 10,
        from: 11,
        to: 6,
        parameters: {}
      },
      {
        id: 11,
        from: 8,
        to: 5,
        parameters: {}
      },
      {
        id: 14,
        from: 10,
        to: 5,
        parameters: {}
      },
      {
        id: 15,
        from: 7,
        to: 6,
        parameters: {}
      },
      {
        id: 16,
        from: 8,
        to: 6,
        parameters: {}
      },
      {
        id: 12,
        from: 11,
        to: 5,
        parameters: {}
      },
    ]
  }

  return network;
}

export { useLoadNetwork, NeuronTypes, NeuronColors }