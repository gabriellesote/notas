import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaRegTimesCircle, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { format } from 'date-fns';

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 800px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: insert;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width: "auto")};

@media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Grid = ({notas, setNotas, setOnEdit}) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/${id}`);
      const newArray = notas.filter((nota) => nota.id !== id);
      setNotas(newArray);
      toast.success("Lembrete deletado!");
    } catch (error) {
      toast.error("Erro ao deletar nota!");
    }
  
    setOnEdit(null);
  };
  


  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Data</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {notas.map((item,i)=>(
          <Tr key={i}>
            <Td width="30%">{item.nome_lembrete}</Td>
            <Td width="20%">{format(new Date(item.data_lembrete), 'dd/MM/yyyy')}</Td>
            <Td alignCenter width="5%"> <FaEdit onClick={() => handleEdit(item)} /></Td>
            <Td alignCenter width="5%"> <FaRegTimesCircle onClick={() => handleDelete(item.id)} />
            </Td> 
            </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
