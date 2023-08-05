
import { Container } from '@mui/material';
import './App.css';
import DeploySection from './DeploySection';
import LeftSideBar from './LeftSideBar';
import NewInstanceForm from './NewInstanceForm';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <LeftSideBar side="left" />
        <NewInstanceForm />
        <DeploySection />
      </Box>
    </div>
  );
}

export default App;
