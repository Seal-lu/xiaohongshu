import IndexRouter from './router/indexRouter';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <IndexRouter></IndexRouter>
      </div>
    </BrowserRouter>
  );
}
export default App;
