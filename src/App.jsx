import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import FormDob from "./components/Form/FormDob";
import FormDetails from "./components/Form/FormDetails";
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
            <Route path="/form/dob" element={<FormDob />} />
            <Route path="/form/details" element={<FormDetails />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
