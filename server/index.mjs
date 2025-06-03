import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_MODEL = 'mistralai/Mistral-7B-Instruct-v0.2';

app.post('/api/chat', async (req, res) => {
    const pergunta = req.body.pergunta;

    if (!pergunta) {
        return res.status(400).json({ erro: 'Pergunta ausente.' });
    }

    if (!OPENROUTER_API_KEY) {
        return res.status(500).json({ erro: 'Chave da API do OpenRouter não configurada no servidor.' });
    }

    try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: OPENROUTER_MODEL,
                messages: [{ role: 'user', content: `Você é um técnico de informática. Responda de forma clara e profissional: ${pergunta}` }]
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            return res.status(500).json({ erro: `Erro ao obter resposta da IA do OpenRouter: ${response.statusText}` });
        }

        const data = await response.json();
        const resposta = data?.choices?.[0]?.message?.content || 'Resposta não encontrada.';
        res.json({ resposta });

    } catch (error) {
        res.status(500).json({ erro: 'Erro ao gerar resposta.' });
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor backend rodando na porta ${PORT}`);
});