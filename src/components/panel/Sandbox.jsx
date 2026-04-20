import { useStore } from '../../store/useStore';
import { simulateWorkflow } from '../../api/api';
import { validateWorkflow } from '../../utils/validateWorkflow';

export default function Sandbox() {
  const { nodes, edges } = useStore();

  const runWorkflow = () => {
    const error = validateWorkflow(nodes, edges);

    if (error) {
      alert("⚠️ " + error);
      return;
    }

    const workflow = { nodes, edges };

    const result = simulateWorkflow(workflow);

    alert("Execution:\n\n" + result.join('\n'));
  };

  return (
    <div style={styles.container}>
      <button style={styles.runBtn} onClick={runWorkflow}>
        ▶ Run Workflow
      </button>
    </div>
  );
}

const styles = {
  container: {
    marginTop: '10px'
  },
  runBtn: {
    width: '100%',
    padding: '10px',
    background: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  }
};