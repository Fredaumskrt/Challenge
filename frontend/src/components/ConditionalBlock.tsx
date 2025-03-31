/// BOTAO PARA CONDICAO > Mudar 

import React, { useState } from 'react';

interface ConditionalBlockProps {
  data?: any;
  isConnectable?: boolean;
}

const ConditionalBlock: React.FC<ConditionalBlockProps> = ({ data, isConnectable }) => {
  const [variable, setVariable] = useState('');
  const [operator, setOperator] = useState('=');
  const [value, setValue] = useState('');

  return (
    <div className="p-4 bg-green-500 text-white rounded-lg">
      <p>CONDITIONAL</p>
      <input
        type="text"
        placeholder="Variable"
        value={variable}
        onChange={(e) => setVariable(e.target.value)}
        className="text-black"
      />
      <select
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
        className="text-black"
      >
        <option value="=">=</option>
        <option value="<">&lt;</option>
        <option value="<=">&lt;=</option>
        <option value=">">&gt;</option>
        <option value=">=">&gt;=</option>
      </select>
      <input
        type="text"
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="text-black"
      />
    </div>
  );
};

export default ConditionalBlock;