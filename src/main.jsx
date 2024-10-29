import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
//import { CounterApp } from './01-useState/CounterApp';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHoolk';
//import { HooksApp } from './HooksApp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterWithCustomHook />
  </StrictMode>,
)
