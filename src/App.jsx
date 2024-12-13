import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import FormPart1 from "./components/Form/FormPart1";
import FormPart2 from "./components/Form/FormPart2";
import { UserProvider } from "./context/userContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Or 'light' for a light theme
    primary: {
      main: "#efefef",
    },
    secondary: {
      main: "#efefef",
    },
    background: {
      default: "#333333",
    },
    text: {
      primary: "#efefef",
      secondary: "#efefef",
    },
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiOutlinedInput-root": {
            "& .MuiOutlinedInput-notchedOutline": {
              backgroundColor: "rgba(255,255,255,0.2)",
            },
            "& .MuiOutlinedInput-input": {
              color: "white",
            },
          },
        },
      },
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/form/part/1" element={<FormPart1 />} />
            <Route path="/form/part/2" element={<FormPart2 />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
