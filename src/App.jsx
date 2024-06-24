import "./App.css";
import AllComponents from "./components/AllComponents";
import UserPostProvider from "./contexts/othersPostContext";
import OthersProfileProvider from "./contexts/othersProfileContext";
function App() {
  return (
    <>
      <OthersProfileProvider>
        <UserPostProvider>
          <AllComponents />
        </UserPostProvider>
      </OthersProfileProvider>
    </>
  );
}

export default App;
