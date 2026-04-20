import { useStore } from '../../store/useStore';
import { useState } from 'react';

export default function StartForm() {
  const { selectedNode, nodes, setNodes } = useStore();
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');

  const update = (k, v) => {
    setNodes(nodes.map(n =>
      n.id === selectedNode.id
        ? { ...n, data: { ...n.data, config: { ...n.data.config, [k]: v } } }
        : n
    ));
  };

  const addMeta = () => {
    update(key, value);
    setKey('');
    setValue('');
  };

  return (
    <div>
      <input placeholder="Start Title" onChange={e => update('title', e.target.value)} />

      <h4>Metadata</h4>
      <input placeholder="Key" value={key} onChange={e => setKey(e.target.value)} />
      <input placeholder="Value" value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={addMeta}>Add</button>
    </div>
  );
}