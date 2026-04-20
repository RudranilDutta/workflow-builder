import { useStore } from '../../store/useStore';
import { getAutomations } from '../../api/api';

export default function AutomatedForm() {
  const { selectedNode, nodes, setNodes } = useStore();
  const options = getAutomations();

  const selectedAction = selectedNode?.data?.config?.action;

  const update = (key, value) => {
    const updated = nodes.map(n =>
      n.id === selectedNode.id
        ? {
            ...n,
            data: {
              ...n.data,
              config: {
                ...n.data.config,
                [key]: value
              }
            }
          }
        : n
    );
    setNodes(updated);
  };

  const actionObj = options.find(o => o.id === selectedAction);

  return (
    <div style={styles.container}>
      <h4>Automation Config</h4>

      <input
        style={styles.input}
        placeholder="Title"
        onChange={(e) => update('title', e.target.value)}
      />

      <select
        style={styles.input}
        onChange={(e) => update('action', e.target.value)}
      >
        <option value="">Select Action</option>
        {options.map(opt => (
          <option key={opt.id} value={opt.id}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* 🔥 Dynamic Params */}
      {actionObj?.params?.map(param => (
        <input
          key={param}
          style={styles.input}
          placeholder={param}
          onChange={(e) => update(param, e.target.value)}
        />
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  input: {
    padding: '8px',
    borderRadius: '6px',
    border: '1px solid #ccc'
  }
};