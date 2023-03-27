import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Misc from './components/pages/Misc'
import ProductList from './components/pages/eCommerce';
import Intranet from './components/pages/Intranet';
import Crm from './components/pages/Crm'
import Sidebar from './components/Sidebar';
import News from './components/pages/News';
import Listing from './components/pages/Listing'
import Crypto from './components/pages/Crypto'
import Chat from './components/pages/Chat';
import Contact from './components/pages/Contact';
import Mail from './components/pages/Mail';
import Widgets from './components/pages/Widgets';
import Metrics from './components/pages/Metrics';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Misc />} />
          <Route path="/misc" element={<Misc />} />
          <Route path="/crypto" element={<Crypto />} />
           <Route path="/listing" element={<Listing />} />
          <Route path="/crm" element={<Crm />} />
          <Route path="/intranet" element={<Intranet />} />
          <Route path="/ecommerce" element={<ProductList />} />
          <Route path="/news" element={<News />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/widgets" element={<Widgets />} />
          <Route path="/metrics" element={<Metrics />} />
          <Route path="/material Ui" element={<Metrics />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;