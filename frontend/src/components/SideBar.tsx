import StartBlock from './StartBlock';
import ConditionalBlock from './ConditionalBlock';
import EndBlock from './EndBlock';

const Sidebar = () => {
  return (
    <div className="w-48 p-4 bg-gray-100 h-full fixed left-0 top-0">
      <h2 className="font-bold mb-4">Blocos</h2>
      <div className="space-y-4">
        <StartBlock />
        <ConditionalBlock />
        <EndBlock />
      </div>
    </div>
  );
};

export default Sidebar;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 