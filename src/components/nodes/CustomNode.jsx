import { Handle, Position } from 'reactflow';

export default function CustomNode({ data }) {
  const getColor = () => {
    if (data.label === 'Start') return '#4CAF50';
    if (data.label === 'End') return '#F44336';
    if (data.label === 'Approval') return '#FF9800';
    if (data.label === 'Automation') return '#9C27B0';
    return '#2196F3';
  };

  return (
    <div style={{
      padding: 12,
      borderRadius: 10,
      background: '#ffffff',
      border: `2px solid ${getColor()}`,
      minWidth: 140,
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    }}>
      <Handle type="target" position={Position.Top} />

      <div style={{
        fontWeight: '600',
        color: getColor()
      }}>
        {data.label}
      </div>

      {data?.config?.title && (
        <div style={{ fontSize: 12, marginTop: 5, color: '#333' }}>
          {data.config.title}
        </div>
      )}

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}