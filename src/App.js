import logo from './logo.svg';
import './App.css';
import LeftComp from './components/leftComp';
import RightComp from './components/rightComp';
import {Stack} from '@mui/material';

function App() {
  return (
    <div className="App">
      <Stack direction={'row'}>
        <LeftComp />
        <RightComp />
      </Stack>
    </div>
  );
}

export default App;
