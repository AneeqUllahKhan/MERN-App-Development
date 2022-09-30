import './App.css';
import ResponsiveAppBar from './components/navbar';
import ActionAreaCard from './components/card'
import ResponsiveGrid from './components/Grid'


function App() 


{
  return (  
    <>       
    <ResponsiveAppBar />
    <br />

    <ResponsiveGrid/>
  
    <ActionAreaCard />
    </>
  );
}

export default App;
