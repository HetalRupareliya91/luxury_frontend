import React from 'react';
import './App.css';
import './assets/style.css';
import RoutesPage from './frontend/routes';
import ModalComponent from './frontend/modalPopUp/newsLetterPopup';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  
  const isModalVisible = !(
    location.pathname.includes('/admin') ||
    location.pathname.includes('/userprofile') ||
    location.pathname.includes('/publish-news-pr')
  );

  return (
    <>
      <RoutesPage />
      {/* {isModalVisible && <ModalComponent />} */}
    </>
  );
}

export default App;
