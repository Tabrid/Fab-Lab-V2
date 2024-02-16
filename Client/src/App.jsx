import {
RouterProvider,
} from "react-router-dom";
import { router } from './Route/Routes';
import { useEffect, useState } from "react";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000); // Show loader for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
      {
        showLoader ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <img src="https://i.ibb.co/DL5Pzm0/fablab-logo.png" alt="Logo" style={{ width: 300, height: 100, marginRight: 20 }} /> {/* Adjust width, height, and margin as needed */}
                <div className="loader" style={{ border: '8px solid #f3f3f3', borderRadius: '50%', borderTop: '8px solid #3498db', width: 80, height: 80, animation: 'spin 2s linear infinite' }}></div>
            </div>
        ) : (
          <RouterProvider router={router} />
        )
      }
      
    </>
  )
}

export default App
