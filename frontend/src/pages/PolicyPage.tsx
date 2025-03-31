import React from 'react';
import PolicyFlow from '../components/PolicyFlow';

const PolicyPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Policy Designer</h1>
      <PolicyFlow />
    </div>
  );
};

export default PolicyPage;