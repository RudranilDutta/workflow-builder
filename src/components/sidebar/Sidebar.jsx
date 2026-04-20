import { v4 as uuid } from 'uuid';
import { useStore } from '../../store/useStore';

const NODE_TYPES = [
  { type: 'start', label: 'Start', color: '#4CAF50' },
  { type: 'task', label: 'Task', color: '#2196F3' },
  { type: 'approval', label: 'Approval', color: '#FF9800' },
  { type: 'automated', label: 'Automation', color: '#9C27B0' },
  { type: 'end', label: 'End', color: '#F44336' }
];

const getRandomPosition = () => ({
  x: Math.floor(Math.random() * 400),
  y: Math.floor(Math.random() * 400)
});

export default function Sidebar() {
  const { nodes, setNodes } = useStore();

  const addNode = (type) => {
    const newNode = {
      id: uuid(),
      type,
      position: getRandomPosition(),
      data: {
        label: type.charAt(0).toUpperCase() + type.slice(1),
        config: { title: '' }
      }
    };

    setNodes([...nodes, newNode]);
  };

  return (
    <div>
      {NODE_TYPES.map(n => (
        <button
          key={n.type}
          onClick={() => addNode(n.type)}
          style={{
            ...styles.btn,
            borderLeft: `6px solid ${n.color}`
          }}
        >
          <span style={{ color: n.color, fontWeight: 'bold' }}>●</span>
          <span style={{ marginLeft: '10px' }}>{n.label}</span>
        </button>
      ))}
    </div>
  );
}

const styles = {
  btn: {
    width: '100%',
    padding: '12px',
    marginBottom: '12px',
    borderRadius: '8px',
    border: '1px solid #1f2937',
    background: '#1f2937',
    color: '#e5e7eb',
    cursor: 'pointer',
    textAlign: 'left',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center'
  }
};