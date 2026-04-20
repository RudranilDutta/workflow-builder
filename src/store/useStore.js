import { create } from 'zustand';

export const useStore = create((set) => ({
  nodes: [],
  edges: [],
  selectedNode: null,

  setNodes: (updater) =>
    set((state) => ({
      nodes: typeof updater === 'function' ? updater(state.nodes) : updater
    })),

  setEdges: (updater) =>
    set((state) => ({
      edges: typeof updater === 'function' ? updater(state.edges) : updater
    })),

  setSelectedNode: (node) => set({ selectedNode: node })
}));