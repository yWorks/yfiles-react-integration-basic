import { useRef, useMemo, useLayoutEffect } from 'react'
import { GraphComponent, GraphEditorInputMode, IGraph, License, Point, Rect } from 'yfiles'
import licenseData from '../license.json'

License.value = licenseData

function createSampleGraph(graph: IGraph): void {
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

export function ReactGraphComponent() {
  const graphComponentContainer = useRef<HTMLDivElement>(null)

  const graphComponent = useMemo(() => {
    // include the yFiles License
    License.value = licenseData
    // initialize the GraphComponent
    const gc = new GraphComponent()
    // configure an input mode for out of the box editing
    gc.inputMode = new GraphEditorInputMode()
    // create some graph elements
    createSampleGraph(gc.graph)
    return gc
  }, [])

  useLayoutEffect(() => {
    const gcContainer = graphComponentContainer.current!
    gcContainer.appendChild(graphComponent.div)
    return () => {
      gcContainer.innerHTML = ''
    }
  }, [graphComponentContainer, graphComponent])

  return (
    <div
      className="graph-component-container"
      style={{ width: '500px', height: '500px' }}
      ref={graphComponentContainer}
    />
  )
}
