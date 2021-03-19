db.produtos.updateMany(
  {
    nome: "Big Mac",
  },
  {
    $set: {
      ultimaModificacao: Date(),
    },
  },
);

db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    ultimaModificacao: 1,
  },
);
