import Nav from "./Layout/NavBar"
import Theme from "./StyledComponents/theme"
import {ThemeProvider} from "styled-components"
import GlobalStyles from "./StyledComponents/GlobalSTyle"
import IntroCont from "./Layout/Intro"
import Footer from "./Layout/Footer"
import InfoCont from "./Layout/Info"
import BgBoost from "./Layout/BgMsg"
import Shorten from "./Layout/Shorten"
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles/>
      <div className="App">
        <Nav/>
        <IntroCont/>
        <Shorten/>
        <InfoCont/>
        <BgBoost/>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
