import React, { useState } from "react";

interface BackendResponse {
  resposta?: string;
  erro?: string;
}

const ChatAssistente: React.FC = () => {
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");
  const [carregando, setCarregando] = useState(false);

  const enviarPergunta = async () => {
    if (!pergunta.trim()) return;
    setCarregando(true);
    setResposta("");

    try {
      const res = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pergunta }),
      });

      if (!res.ok) {
        const errorData: BackendResponse = await res.json();
        setResposta(errorData.erro || "Houve um erro ao obter a resposta do backend.");
        return;
      }

      const data: BackendResponse = await res.json();
      if (data.resposta) {
        setResposta(data.resposta);
      } else {
        setResposta(data.erro || "Nenhuma resposta recebida do backend.");
      }
    } catch (error) {
      setResposta("Erro ao enviar a pergunta para o backend.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Assistente Técnico</h2>
      <textarea
        rows={5}
        cols={50}
        value={pergunta}
        onChange={(e) => setPergunta(e.target.value)}
        placeholder="Descreva o problema do seu computador..."
        style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <br />
      <button
        onClick={enviarPergunta}
        disabled={carregando}
        style={{
          padding: '10px 15px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          opacity: carregando ? 0.7 : 1
        }}
      >
        {carregando ? "Analisando..." : "Perguntar"}
      </button>
      <div style={{ marginTop: "1rem", border: '1px solid #eee', padding: '15px', borderRadius: '5px', backgroundColor: '#f9f9f9', minHeight: '50px' }}>
        <strong>Resposta:</strong>
        <p>{resposta}</p>
      </div>
    </div>
  );
};

export default ChatAssistente;