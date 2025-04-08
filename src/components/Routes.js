import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import ProjectSolvaAI from '../pages/ProjectSolvaAI';
import ProjectBachelorPraktikum from '../pages/ProjectBachelorPraktikum';
import ProjectAIML from '../pages/ProjectAIML';
import { ThemeProvider } from '../context/ThemeContext';

const AppRoutes = () => {
  return (
    <BrowserRouter basename="/portfolio">
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/project/solvaai" element={<ProjectSolvaAI />} />
          <Route path="/project/bachelor-praktikum" element={<ProjectBachelorPraktikum />} />
          <Route path="/project/aiml" element={<ProjectAIML />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;