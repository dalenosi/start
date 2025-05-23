import React from 'react';
import Map from './components/Map';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Interactive Map with Leaflet</h1>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <Map />
      </div>
    </div>
  );
}

export default App;