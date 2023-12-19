import React, {useState} from 'react';
import Routes from './Router/Routes';

function App() {
  const [loading, setLoading] = useState(true)
  const spinner = document.getElementById("spinner")
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none"
      setLoading(false)
    }, 4000)
  }
  return (
    <div>
      {!loading && (
        <Routes />
      )}
    </div>
  );
}

export default App;
