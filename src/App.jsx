import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import MemberProfile from './pages/MemberProfile';
import DataExplorer from './pages/DataExplorer';
import ApiModule from './pages/ApiModule';
import Gallery from './pages/Gallery';
import Bitacora from './pages/Bitacora';
import ComponentTree from './pages/ComponentTree';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="integrante/:id" element={<MemberProfile />} />
          <Route path="explorador" element={<DataExplorer />} />
          <Route path="api" element={<ApiModule />} />
          <Route path="galeria" element={<Gallery />} />
          <Route path="bitacora" element={<Bitacora />} />
          <Route path="arquitectura" element={<ComponentTree />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
