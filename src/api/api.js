export const getAutomations = () => {
  return [
    {
      id: 'send_email',
      label: 'Send Email',
      params: ['to', 'subject']
    },
    {
      id: 'generate_doc',
      label: 'Generate Document',
      params: ['template', 'recipient']
    }
  ];
};

export const simulateWorkflow = ({ nodes }) => {
  return nodes.map((node, index) => {
    const config = node.data.config || {};

    if (node.type === 'start') {
      return `Step ${index + 1}: Start → ${config.title || "Start"}`;
    }

    if (node.type === 'task') {
      return `Step ${index + 1}: Task → ${config.title || "Untitled"} (Assigned to ${config.assignee || "N/A"})`;
    }

    if (node.type === 'approval') {
      return `Step ${index + 1}: Approval → ${config.role || "N/A"} (Threshold: ${config.threshold || "N/A"})`;
    }

    if (node.type === 'automated') {
      return `Step ${index + 1}: Automation → ${config.action || "No Action Selected"}`;
    }

    if (node.type === 'end') {
      return `Step ${index + 1}: End → ${config.message || "Completed"}`;
    }

    return `Step ${index + 1}: ${node.data.label}`;
  });
};