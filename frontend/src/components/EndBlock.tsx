import React, { useState } from 'react';

interface EndBlockProps {
  data?: any;
  isConnectable?: boolean;
}
/// Receber dados do EndBlock
const EndBlock: React.FC<EndBlockProps> = ({ data, isConnectable }) => {
  const [decision, setDecision] = useState('');

  return (
    <div className="p-4 bg-red-500 text-white rounded-lg">
      <p>END</p>
      <input
        type="text"
        placeholder="Decision"
        value={decision}
        onChange={(e) => setDecision(e.target.value)}
        className="text-black"
      />
    </div>
  );
};

export default EndBlock;