import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputForm from './components/InputForm/InputForm';
import Board from './components/Board/Board';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import { useAppSelector } from './redux/hooks';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

function App() {
  const owner = useAppSelector(state => state.repoInfo.owner);
  const repo = useAppSelector(state => state.repoInfo.repo);

  return (
    <>
        <DndProvider backend={HTML5Backend}>
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
        <InputForm />
        {!!owner && !!repo && (<Breadcrumbs />)}
        <Board />
        <p>
          Edit <code>https://github.com/mate-academy/node_copy-files</code>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </DndProvider>
    </>
  );
}

export default App;
