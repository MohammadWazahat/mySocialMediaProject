import './App.css'
import AllComponents from './components/AllComponents'
import UserPostProvider from './contexts/othersPostContext'
function App() {
 

  return (
    <>
    <UserPostProvider>
     <AllComponents/>     
     </UserPostProvider> 
    </>
  )
}

export default App
