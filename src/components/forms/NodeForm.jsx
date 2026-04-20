import { useStore } from '../../store/useStore';

export default function NodeForm() {
  const { selectedNode, nodes, setNodes } = useStore();

  if (!selectedNode) return <p>Select a node</p>;

  const update = (value) => {
    const updated = nodes.map(n =>
      n.id === selectedNode.id
        ? {
            ...n,
            data: {
              ...n.data,
              config: { ...n.data.config, title: value }
            }
          }
        : n
    );
    setNodes(updated);
  };

  return (
    <div>
      <h4>Edit Node</h4>
      <input
        placeholder="Enter title"
        onChange={(e) => update(e.target.value)}
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc'
  }
};