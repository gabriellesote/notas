import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [notas, setNotas] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getNotas = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setNotas(res.data.sort((a, b) => (a.nome_lembrete > b.nome_lembrete ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getNotas();
  }, [setNotas]);

  return (
    <>
     <Container>
        <Title>Lembretes</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getNotas={getNotas} />
        <Grid setOnEdit={setOnEdit} notas={notas} setNotas={setNotas} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
