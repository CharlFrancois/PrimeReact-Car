import React from 'react';

import PrimeReact from 'primereact/api';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import './App.css';
import DataTableCrudDemo from './demo/DataTableCrudDemo';

function App() {
  PrimeReact.ripple =true;

  return (
    <div className="App">
      <DataTableCrudDemo />
    </div>
  );
}

export default App;
