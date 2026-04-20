import ReactFlow, {
  addEdge,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useCallback } from 'react';
import { useStore } from '../../store/useStore';
import CustomNode from '../nodes/CustomNode';

const nodeTypes = {
  start: CustomNode,
  task: CustomNode,
  approval: CustomNode,
  automated: CustomNode,
  end: CustomNode,
};

export default function Canvas() {
  const {
    nodes,
    edges,
    setNodes,
    setEdges,
    setSelectedNode
  } = useStore();

  const onNodesChange = useCallback(
    (changes) => {
      setNodes(applyNodeChanges(changes, nodes));
    },
    [nodes, setNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => {
      setEdges(applyEdgeChanges(changes, edges));
    },
    [edges, setEdges]
  );

  const onConnect = useCallback(
    (params) => {
      const newEdges = addEdge(
        {
          ...params,
          animated: true,          // 🔥 smooth edge animation
          style: { stroke: '#555', strokeWidth: 2 }
        },
        edges
      );
      setEdges(newEdges);
    },
    [edges, setEdges]
  );

  return (
    <div style={styles.wrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onNodeClick={(event, node) => setSelectedNode(node)}
        fitView
        proOptions={{ hideAttribution: true }}
      >
        {/* 🔥 GRID BACKGROUND */}
        <Background
          gap={20}
          size={1}
          color="#d0d5dd"
        />

        <Controls />
      </ReactFlow>
    </div>
  );
}

const styles = {
  wrapper: {
    height: '100vh',
    width: '64%',
    background: '#eef2f7'   // 🔥 soft grey (fix brightness issue)
  }
};