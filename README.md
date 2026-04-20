# ⚡ Workflow Builder (React Flow)

## 🚀 Overview
A visual workflow builder that allows users to create, configure, and simulate workflows using a node-based interface.

---

## ✨ Features
- Drag-and-drop workflow canvas (React Flow)
- Multiple node types:
  - Start
  - Task
  - Approval
  - Automated
  - End
- Dynamic node configuration forms
- Metadata support (Start node)
- Dynamic API-driven parameters (Automated node)
- Workflow simulation panel
- Validation of workflow structure
- Clean modular architecture

---

## 🛠 Tech Stack
- React (Vite)
- React Flow
- Zustand (State Management)

---

## 🧠 Architecture
- Centralized state using Zustand
- Each node maintains a `config` object for dynamic data
- Modular structure:
  - components (canvas, sidebar, nodes, forms)
  - store
  - api
  - utils
- Scalable design to support new node types

---

## 🔄 Workflow Simulation
- Serializes the workflow graph
- Processes nodes sequentially
- Displays procedure by procedure execution output


## ⚙️ Setup Instructions

```bash
npm install
npm run dev

## 🌐 Live Demo

https://workflow-builder-eta-dusky.vercel.app/