import { useStore } from '../../store/useStore';

export default function TaskForm() {
  const { selectedNode, nodes, setNodes } = useStore();

  const update = (k, v) => {
    setNodes(nodes.map(n =>
      n.id === selectedNode.id
        ? { ...n, data: { ...n.data, config: { ...n.data.config, [k]: v } } }
        : n
    ));
  };

  return (
    <div>
      <input placeholder="Title" onChange={e => update('title', e.target.value)} />
      <input placeholder="Description" onChange={e => update('description', e.target.value)} />
      <input placeholder="Assignee" onChange={e => update('assignee', e.target.value)} />
      <input type="date" onChange={e => update('dueDate', e.target.value)} />
    </div>
  );
}