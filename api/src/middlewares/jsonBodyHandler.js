export async function jsonBodyHandler(req, res) {
  // Adicionar cada chunk de dados da requisição ao buffer
  const buffers = [];

  // Coleta os chunks de dados da requisição
  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    // Concatena os chunks e converter para string. Em seguida, converte a string para json
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (err) {
    req.body = null;
  }
  // Define o header de resposta como JSON.
  res.setHeader("Content-Type", "application/json");
}
