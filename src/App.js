
import './App.css';
import './_app.scss';
import { react, useState } from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Container } from 'react-bootstrap';
import HomeScreen from './components/screen/homeScreen/HomeScreen';
import LoginScreen from './components/screen/loginScreen/LoginScreen';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WatchScreen from './components/screen/watchScreen/WatchScreen';
import SearchScreen from './components/screen/SearchScreen';
import SubscriptionsScreen from './components/screen/subscriptionsScreen/SubscriptionsScreen'
import ChannelScreen from './components/screen/channelScreen/ChannelScreen';
import LoadingBar from 'react-top-loading-bar'
import MainSidebar from './components/MainSidebar/MainSidebar';
const Layout = ({ children }) => {

  const [sidebar, toggleSidebar] = useState(false)

  const handleToggleSidebar = () => toggleSidebar(value => !value)
  // window.onclick = function (event) {
  //   console.log(event)
  // }

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">

        
        {sidebar === true &&
          <MainSidebar className="mainSidebar" sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        }


        <Container fluid className={`app__main ${sidebar === true ? 'sidebarOpen': ''}`}>
          {/* <HomeScreen /> */}
          {children}
        </Container>
      </div>
    </>
  )
}

function App() {
  const [progress, setProgress] = useState(40)


  return (

    <BrowserRouter>
      <LoadingBar
        color='#f11946'
        waitingTime={200}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route exact path="/" element={<Layout >
          <Sidebar   />
          <HomeScreen setProgress={setProgress} />
        </Layout>}>
        </Route>
        <Route path="/auth" element={<LoginScreen setProgress={setProgress} />}>
        </Route>
        <Route path="/search/:query" element={<Layout>
          <SearchScreen setProgress={setProgress} />
        </Layout>}>
        </Route>
        <Route path="/watch/:id" element={<Layout>
          <WatchScreen setProgress={setProgress} />
        </Layout>}>
        </Route>
        <Route path="/feed/subscriptions" element={<Layout>
          <SubscriptionsScreen setProgress={setProgress} />
        </Layout>}>
        </Route>
        <Route path="/channel/:channelId" element={<Layout>
          <ChannelScreen setProgress={setProgress} />
        </Layout>}>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
