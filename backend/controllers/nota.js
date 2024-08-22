import { db } from "../db.js";

export const getNotas = (_, res) => {
  const q = "SELECT * FROM lembretes";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addNotas = (req, res) => {
  const q =
    "INSERT INTO lembretes(`nome_lembrete`, `data_lembrete`) VALUES(?)";

  const values = [req.body.nome_lembrete, req.body.data_lembrete];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Lembrete criado!");
  });
};

export const updateNotas = (req, res) => {
  const q =
    "UPDATE lembretes SET `nome_lembrete` = ?,  `data_lembrete` = ? WHERE `id`=?";

  const values = [req.body.nome_lembrete, req.body.data_lembrete];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Lembrete atualizado!");
  });
};

export const deleteNotas = (req, res) => {
  if (!req.params.id) {
    return res.status(400).json("ID é obrigatório!");
  }

  const q = "DELETE FROM lembretes WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Lembrete deletado!");
  });
};

