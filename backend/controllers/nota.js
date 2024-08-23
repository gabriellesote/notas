import { db } from "../db.js";

// Função para obter todas as notas
export const getNotas = async (_, res) => {
  try {
    const result = await db`SELECT * FROM lembretes`;
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

// Função para adicionar uma nova nota
export const addNotas = async (req, res) => {
  const { nome_lembrete, data_lembrete } = req.body;
  try {
    await db`
      INSERT INTO lembretes (nome_lembrete, data_lembrete) 
      VALUES (${nome_lembrete}, ${data_lembrete})
    `;
    return res.status(200).json("Lembrete criado!");
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

// Função para atualizar uma nota existente
export const updateNotas = async (req, res) => {
  const { nome_lembrete, data_lembrete } = req.body;
  const { id } = req.params;
  try {
    await db`
      UPDATE lembretes 
      SET nome_lembrete = ${nome_lembrete}, data_lembrete = ${data_lembrete} 
      WHERE id = ${id}
    `;
    return res.status(200).json("Lembrete atualizado!");
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

// Função para deletar uma nota
export const deleteNotas = async (req, res) => {
  const { id } = req.params;
  try {
    await db`DELETE FROM lembretes WHERE id = ${id}`;
    return res.status(200).json("Lembrete deletado!");
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
