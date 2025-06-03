import React from 'react';
import ChatAssistente from '../ChatAssistente'; 

const TechnicalAnalysisPage: React.FC = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Página de Análise Técnica com IA</h1>
      <p>Descreva seu problema de TI abaixo e nosso assistente virtual tentará ajudar.</p>
      <ChatAssistente />
    </div>
  );
};

export default TechnicalAnalysisPage;