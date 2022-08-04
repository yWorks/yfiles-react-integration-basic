import React, { Component } from 'react'
import { GraphComponent, GraphEditorInputMode, License, Point, Rect } from 'yfiles'
import licenseData from './license'

License.value = licenseData

export default class ReactGraphComponent extends Component {
  componentDidMount() {
    if (!this.graphComponent) {
      // instantiate a new GraphComponent once
      this.graphComponent = this.initializeGraphComponent()
    }
    // append the GraphComponent to the DOM
    this.div.appendChild(this.graphComponent.div)
    // center the content of the GraphComponent after it was added to the DOM
    this.graphComponent.fitGraphBounds()
  }

  componentWillUnmount() {
    // Remove the GraphComponent on unmount.
    // Depending on the use case, you may also clear the GraphComponent entirely and create a
    // new one on each unmount / mount cycle.
    this.div.removeChild(this.graphComponent.div)
  }

  initializeGraphComponent() {
    const graphComponent = new GraphComponent()
    // configure an input mode for out of the box editing
    graphComponent.inputMode = new GraphEditorInputMode()
    // create some graph elements
    this.createSampleGraph(graphComponent.graph)
    return graphComponent
  }

  createSampleGraph(graph) {
    // create some nodes
    const node1 = graph.createNodeAt(new Point(30, 30))
    const node2 = graph.createNodeAt(new Point(150, 30))
    const node3 = graph.createNode(new Rect(230, 200, 60, 30))

    // create some edges between the nodes
    graph.createEdge(node1, node2)
    graph.createEdge(node1, node3)
    const edge = graph.createEdge(node2, node3)
    // Creates the first bend for edge at (260, 30)
    graph.addBend(edge, new Point(260, 30))

    // add labels to some graph elements
    graph.addLabel(node1, 'n1')
    graph.addLabel(node2, 'n2')
    graph.addLabel(node3, 'n3')
  }

  render() {
    return (
      <div
        className="graph-component-container"
        ref={(node) => {
          this.div = node
        }}
      />
    )
  }
}
