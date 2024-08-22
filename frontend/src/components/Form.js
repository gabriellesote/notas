import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 200px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getNotas, onEdit, setOnEdit }) => {
  // Criar referências para os campos
  const nomeRef = useRef(null);
  const dataRef = useRef(null);

  useEffect(() => {
    if (onEdit) {
      // Atribuir valores aos campos se onEdit estiver definido
      nomeRef.current.value = onEdit.nome_lembrete;
      dataRef.current.value = onEdit.data_lembrete;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!nomeRef.current.value || !dataRef.current.value) {
      return toast.warn("Preencha todos os campos!");
    }
  
    try {
      if (onEdit) {
        await axios.put(`http://localhost:8800/${onEdit.id}`, {
          nome_lembrete: nomeRef.current.value,
          data_lembrete: dataRef.current.value,
        });
        toast.success("Lembrete atualizado!");
      } else {
        await axios.post("http://localhost:8800", {
          nome_lembrete: nomeRef.current.value,
          data_lembrete: dataRef.current.value,
        });
        toast.success("Lembrete criado!");
      }
  
      nomeRef.current.value = "";
      dataRef.current.value = "";
      setOnEdit(null);
      getNotas(); // Atualiza a lista de lembretes
    } catch (error) {
      toast.error("Erro ao salvar nota!");
    }
  };
  
  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome_lembrete" ref={nomeRef} />
      </InputArea>
      <InputArea>
        <Label>Data</Label>
        <Input name="data_lembrete" type="date" ref={dataRef} />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
