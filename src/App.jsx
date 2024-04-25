
import './App.css'
import { DiagramaEstudiantes } from './components/DiagramaEstudiantes';
import { DiagramaLienaInvestigacion } from './components/DiagramaLineaInvestigacion';

function App() {
  return (
    <>
      <h1 style={{ marginBottom: '10px' }}>Analisis y seguimiento del semillero</h1>
      <div style={{ width: '600px', marginBottom: '50px' }}>
        <DiagramaEstudiantes />
      </div>
      <div style={{ width: '460px' }}>
        <DiagramaLienaInvestigacion />
      </div>
    </>
  );
}

export default App
