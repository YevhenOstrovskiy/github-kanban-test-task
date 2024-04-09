import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputForm from './components/InputForm/InputForm';
import { useAppSelector } from '../src/redux/hooks';
import IssueSection from './components/IssueSection/IssueSection';

function App() {
  const [count, setCount] = useState(0);
  const issues = useAppSelector((state) => state.issues.issues);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Kanban todo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <InputForm />
        <IssueSection issues={issues}/>
        <p>
          Edit <code>https://github.com/mate-academy/node_copy-files</code>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
