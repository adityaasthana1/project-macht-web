import Home from './Pages/Home/Home';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: "dark",
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  )

}

export default App;
