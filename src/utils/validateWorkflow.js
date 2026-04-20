export function validateWorkflow(nodes, edges) {
  if (nodes.length === 0) return "Add nodes to workflow";

  const startNodes = nodes.filter(n => n.type === 'start');

  if (startNodes.length === 0) return "Add a Start node";
  if (startNodes.length > 1) return "Only one Start node allowed";

  if (nodes.length > 1) {
    const hasConnection = edges.some(e => e.source === startNodes[0].id);
    if (!hasConnection) return "Connect Start node to next node";
  }

  if (edges.length === 0 && nodes.length > 1) {
    return "Workflow must have connections";
  }

  return null;
}