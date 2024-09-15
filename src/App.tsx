import styled from "styled-components";
import "./reset.css";
import TopWrap from "./components/TopWrap";

const IndexWrapStyle = styled.div`
  width: 90vw;
  background-color: yellow;
`;

function App() {
  return (
    <IndexWrapStyle>
      <TopWrap></TopWrap>
    </IndexWrapStyle>
  );
}

export default App;
