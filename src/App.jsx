import Sidebar from './components/sidebar/Sidebar';
import Canvas from './components/canvas/Canvas';
import NodeForm from './components/forms/NodeForm';
import Sandbox from './components/panel/Sandbox';

export default function App() {
  return (
    <div style={styles.container}>

      <div style={styles.sidebar}>
        <h2 style={styles.logo}>⚡ Workflow</h2>
        <Sidebar />
      </div>

      <Canvas />

      <div style={styles.panel}>
        <NodeForm />
        <hr style={{ borderColor: '#333', margin: '15px 0' }} />
        <Sandbox />
      </div>

    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    background: '#0f172a',
    color: '#e5e7eb',
    fontFamily: 'Inter, sans-serif'
  },
  sidebar: {
    width: '18%',
    background: '#111827',
    padding: '15px',
    borderRight: '1px solid #1f2937'
  },
  panel: {
    width: '18%',
    background: '#111827',
    padding: '15px',
    borderLeft: '1px solid #1f2937'
  },
  logo: {
    marginBottom: '20px'
  }
};