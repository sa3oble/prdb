import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PressReleasePage } from './pages/PressReleasePage';
import { PressReleaseProvider } from './context/PressReleaseContext';

function App() {
  return (
    <PressReleaseProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/release/:id" element={<PressReleasePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </PressReleaseProvider>
  );
}

export default App;