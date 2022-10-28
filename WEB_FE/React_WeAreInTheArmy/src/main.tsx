import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { setAuthroizationToken } from './util/utils';

const MODE = '/absproxy/3000';
setAuthroizationToken(localStorage.jwtToken);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter basename="/absproxy/5173">
    <App />
  </BrowserRouter>,
);
