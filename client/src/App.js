import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./scenes/homepage";
import LoginPage from "./scenes/loginpage";
import ProfilePage from "./scenes/profilepage";
import VoiceChat from "./scenes/voicechat";
import VrModule from "./scenes/VrModule";
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
            <Route path="/vrmodule" element={<VrModule />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
