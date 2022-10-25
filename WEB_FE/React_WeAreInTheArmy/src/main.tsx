import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const NOW = 'SERVER';
const MODE = NOW === 'SERVER' ? '/absproxy/5173' : '/';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter basename={MODE}>
    <App />
  </BrowserRouter>,
);
