import './App.css';
import { ListContextProvider } from './list/ListContext';
import ListForm from "./list/ListForm";
import ListDisplay from './list/ListDisplay';

function App() {
  return (
    <ListContextProvider>
      <div className="container">
        <div className="flex-1">
          <ListForm />
        </div>
        <div className="flex-2">
          <ListDisplay />
        </div>
      </div>
    </ListContextProvider>
  );
}

export default App;
