import React from 'react';
import PropsExample from "./components/PropsExample.jsx";
import PropsMappingExample from "./components/PropsMapping";

function App() {
  const visitedPlaces = ["Paris", "Germany"]
  return (
    <div>
    <PropsExample name="Tom" business="MySpace" />
    <PropsMappingExample visited={visitedPlaces} />
    </div>
  );
  };

export default App;
