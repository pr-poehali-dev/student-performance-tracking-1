interface FlowNodeProps {
  process: {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    position: { x: number; y: number };
  };
  isSelected: boolean;
  onClick: () => void;
}

const FlowNode = ({ process, isSelected, onClick }: FlowNodeProps) => {
  return (
    <div
      className={`absolute cursor-pointer transition-all duration-300 transform hover:scale-110 ${
        isSelected ? "scale-110 ring-4 ring-purple-300" : ""
      }`}
      style={{
        left: `${process.position.x}px`,
        top: `${process.position.y}px`,
      }}
      onClick={onClick}
    >
      <div
        className={`bg-gradient-to-br ${process.color} rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 w-32 h-24`}
      >
        <div className="text-center text-white">
          <div className="text-2xl mb-1">{process.icon}</div>
          <div className="text-xs font-semibold leading-tight">
            {process.title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowNode;
