import { useStore } from '../../store/useStore';

export default function EndForm() {
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
      <input placeholder="End Message"
        onChange={e => update('message', e.target.value)} />

      <label>
        <input type="checkbox"
          onChange={e => update('summary', e.target.checked)} />
        Summary Flag
      </label>
    </div>
  );
}