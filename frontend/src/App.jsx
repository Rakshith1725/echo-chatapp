import { useEffect } from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import DotGrid from './animations/DotGrid.jsx';
import ChatPage from './pages/ChatPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import {useAuthStore} from './store/useAuthStore.js';
import PageLoader from './components/PageLoader.jsx';

import {Toaster} from 'react-hot-toast';

function App() {
  const {checkAuth,authUser,isCheckingAuth}=useAuthStore();
  
  useEffect(()=>{
    checkAuth();
  },[checkAuth]);

  if(isCheckingAuth) return <PageLoader/>

  return (
    <div className="h-screen bg-slate-900 relative flex items-center justify-center overflow-hidden">
      {/* Full-screen animated dot background */}
      <div className="absolute inset-0 pointer-events-none">
        <DotGrid
          dotSize={4}
          gap={15}
          baseColor="#2F293A"
          activeColor="#b81ce4"
          proximity={140}
          shockRadius={480}
          shockStrength={1}
          resistance={800}
          returnDuration={1.4}
        />
      </div>

      {/* Page content - centered, padded, never overflows */}
      <div className="relative z-10 w-full h-full flex items-center justify-center md:p-4">
        <Routes>
          <Route path='/' element={ authUser?<ChatPage/>:<Navigate to={"/login"}/> } />
          <Route path='/login' element={authUser? <Navigate to={"/"}/> :<LoginPage/>} />
          <Route path='/signup' element={ authUser? <Navigate to={"/"}/> :<SignUpPage/> } />
        </Routes>
      </div>

      <Toaster/>
    </div>
  )
}  

export default App
