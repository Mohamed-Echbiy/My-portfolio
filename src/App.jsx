import styled from "styled-components";
import Header from "./components/Header/Header";
// import Skills from "./components/MySkills/Skills";
import Project from "./components/MyProjects/Project";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Appo>
      <Header />
      {/* <Skills /> */}
      <Project />
      <Footer />
    </Appo>
  );
}

export default App;
//  styling

const Appo = styled.div``;
