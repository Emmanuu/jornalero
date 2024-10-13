import logo from './logo.svg';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


//Most Resonable code

// import React from "react";
// import { createRoot } from "react-dom/client";
// import { APIProvider, Map } from "@vis.gl/react-google-maps";
// const API_KEY = globalThis.GOOGLE_MAPS_API_KEY ?? "AIzaSyCLvoOz956AgUFb5tfiuBDETYbzHQRc6qM";
// const App = () => (
//   <APIProvider
    
//     apiKey={'AIzaSyCLvoOz956AgUFb5tfiuBDETYbzHQRc6qM'}
//   >
  
//     <Map
//       defaultZoom={15}
//       defaultCenter={{ lat: 36.974117, lng: -122.030792 }}
//       gestureHandling={"greedy"}
//       disableDefaultUI={true}
//       //containerElement={{height:'400px'}}


      
      
//     />
//   </APIProvider>
// );
// const root = createRoot(document.getElementById("app"));

// root.render(<App />);






