
import './App.css';
import './_app.scss';
import { react, useState } from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Container } from 'react-bootstrap';
import HomeScreen from './components/screen/homeScreen/HomeScreen';
import LoginScreen from './components/screen/loginScreen/LoginScreen';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Layout = ({ children }) => {

  const [sidebar, toggleSidebar] = useState(false)

  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main ">
          {/* <HomeScreen /> */}
          {children}
        </Container>
      </div>
    </>
  )
}

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout>
          <HomeScreen />
        </Layout>}>
        </Route>
        <Route path="/auth" element={<LoginScreen />}>
        </Route>
        <Route path="/search" element={<Layout>
          <h1>Search Results</h1>
        </Layout>}>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
