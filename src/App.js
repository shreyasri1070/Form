import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './component/form';
import Success from './component/success';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;