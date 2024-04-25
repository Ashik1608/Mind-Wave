import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./scenes/homepage";
import LoginPage from "./scenes/loginpage";
import ProfilePage from "./scenes/profilepage";
<<<<<<< HEAD
import VoiceChat from "./scenes/voicechat";
import VrModule from "./scenes/VrModule";
=======
import VoiceChat from "./scenes/VoiceChat";
import Counsellor from "./scenes/Counsellor";
>>>>>>> 53db27d26531717ec134b99f09092d5d1b6aeb24
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
            <Route path="/voicechat" element={<VoiceChat />} />
            <Route path="/counsellor" element={<Counsellor />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
