import { useStore } from '../../store/useStore';

export default function ApprovalForm() {
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
      <input placeholder="Approver Role" onChange={e => update('role', e.target.value)} />
      <input type="number" placeholder="Threshold"
        onChange={e => update('threshold', e.target.value)} />
    </div>
  );
}