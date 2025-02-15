import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomeScreen } from "./screens/HomeScreen";
import { PlaygroundScreen } from "./screens/PlaygroundScreen";
import Login from "./screens/LoginScreen/Login";
import { PlaygroundProvider } from "./Providers/PlaygrondProvider";
import { ModalProvider } from "./Providers/ModalProvider";
import { HomeScreen1 } from "./screens/HomeScreen1";
import { PlaygroundScreen1 } from "./screens/PlaygroundScreen1";
import { GeminiChat } from './Chat/GeminiChat';

function App() {
  return (
    <PlaygroundProvider>
      <ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomeScreen1 />} />
          <Route path="/playground1" element={<PlaygroundScreen1 />} />
          <Route path="/playground/:fileId/:folderId" element={<PlaygroundScreen />} />
        </Routes>
      </BrowserRouter>
      </ModalProvider>
    </PlaygroundProvider>
    //<GeminiChat/>
  );
}

export default App;
