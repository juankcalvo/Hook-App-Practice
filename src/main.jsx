import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHoolk';
//import { HooksApp } from './HooksApp.jsx';
//import { SimpleForm } from './02-useEffect/SimpleForm';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormWithCustomHook />
  </StrictMode>
)
