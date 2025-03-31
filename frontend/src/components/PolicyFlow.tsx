import React, { useCallback, useEffect } from 'react';
import ReactFlow, {
  Controls,
  Background,
  addEdge,
  Connection,
  Edge,
  Node,
  useNodesState,
  useEdgesState,
} from 'reactflow';


import 'reactflow/dist/style.css';
import StartBlock from './StartBlock';
import ConditionalBlock from './ConditionalBlock';
import EndBlock from './EndBlock';

const nodeTypes = {
  start: StartBlock,
  conditional: ConditionalBlock,
  end: EndBlock,
};

const PolicyFlow: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const addNode = (type: string, position: { x: number; y: number }) => {
    const newNode: Node = {
      id: `${nodes.length + 1}`,
      type,
      position,
      data: {},
    };
    setNodes((nds) => nds.concat(newNode));
  };

  const handleSavePolicy = async () => {
    const policy = {
      nodes,
      edges,
    };

    try {
      const response = await fetch('http://localhost:5000/policy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(policy),
      });

      if (response.ok) {
        alert('Policy saved successfully!');
      } else {
        alert('Failed to save policy.');
      }
    } catch (error) {
      console.error('Error saving policy:', error);
      alert('An error occurred while saving the policy.');
    }
  };
    // Testar a gravação
  const loadPolicy = async () => {
    try {
      const response = await fetch('http://localhost:5000/policy');
      const data = await response.json();
      if (data.nodes && data.edges) {
        setNodes(data.nodes);
        setEdges(data.edges);
      }
    } catch (error) {
      console.error('Error loading policy:', error);
    }
  };

  // Carregar a policy ao abrir a page
  useEffect(() => {
    loadPolicy();
  }, []);

  return (
    <div style={{ width: '100%', height: '600px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Background />
        <Controls />
      </ReactFlow>
      <div className="flex space-x-4 mt-4">
        <button
          onClick={() => addNode('start', { x: 100, y: 100 })}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Add Start Block
        </button>
        <button
          onClick={() => addNode('conditional', { x: 100, y: 200 })}
          className="p-2 bg-green-500 text-white rounded"
        >
          Add Conditional Block
        </button>
        <button
          onClick={() => addNode('end', { x: 100, y: 300 })}
          className="p-2 bg-red-500 text-white rounded"
        >
          Add End Block
        </button>
        <button
          onClick={handleSavePolicy}
          className="p-2 bg-purple-500 text-white rounded"
        >
          Save Policy
        </button>
      </div>
    </div>
  );
};

export default PolicyFlow;