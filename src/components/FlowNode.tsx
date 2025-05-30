interface FlowNodeProps {
  process: {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    position: { x: number; y: number };
    type: "entity" | "attribute" | "relationship";
    attributes?: string[];
  };
  isSelected: boolean;
  onClick: () => void;
}

const FlowNode = ({ process, isSelected, onClick }: FlowNodeProps) => {
  const baseClasses = `cursor-pointer transition-all duration-300 hover:scale-105 ${
    isSelected ? "scale-105 drop-shadow-xl" : "drop-shadow-lg"
  }`;

  const gradientId = `gradient-${process.id}`;

  const getShapeComponent = () => {
    switch (process.type) {
      case "entity":
        // Прямоугольник для сущностей
        return (
          <svg width="120" height="80" className={baseClasses}>
            <defs>
              <linearGradient
                id={gradientId}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
            <rect
              x="5"
              y="5"
              width="110"
              height="70"
              rx="4"
              fill={`url(#${gradientId})`}
              stroke={isSelected ? "#8b5cf6" : "#1e40af"}
              strokeWidth="2"
            />
            <text
              x="60"
              y="25"
              textAnchor="middle"
              className="fill-white text-lg font-semibold"
            >
              {process.icon}
            </text>
            <text
              x="60"
              y="42"
              textAnchor="middle"
              className="fill-white text-xs font-bold"
            >
              {process.title}
            </text>
            <text
              x="60"
              y="55"
              textAnchor="middle"
              className="fill-white text-xs opacity-90"
            >
              {process.description}
            </text>
          </svg>
        );

      case "relationship":
        // Ромб для связей
        return (
          <svg width="100" height="60" className={baseClasses}>
            <defs>
              <linearGradient
                id={gradientId}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
            <polygon
              points="50,5 90,30 50,55 10,30"
              fill={`url(#${gradientId})`}
              stroke={isSelected ? "#8b5cf6" : "#b45309"}
              strokeWidth="2"
            />
            <text
              x="50"
              y="22"
              textAnchor="middle"
              className="fill-white text-sm font-semibold"
            >
              {process.icon}
            </text>
            <text
              x="50"
              y="38"
              textAnchor="middle"
              className="fill-white text-xs font-medium"
            >
              {process.title.split(" ")[0]}
            </text>
          </svg>
        );

      case "attribute":
        // Овал для атрибутов
        return (
          <svg width="80" height="50" className={baseClasses}>
            <defs>
              <linearGradient
                id={gradientId}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#6b7280" />
                <stop offset="100%" stopColor="#374151" />
              </linearGradient>
            </defs>
            <ellipse
              cx="40"
              cy="25"
              rx="35"
              ry="20"
              fill={`url(#${gradientId})`}
              stroke={isSelected ? "#8b5cf6" : "#4b5563"}
              strokeWidth="2"
            />
            <text
              x="40"
              y="18"
              textAnchor="middle"
              className="fill-white text-xs font-semibold"
            >
              {process.icon}
            </text>
            <text
              x="40"
              y="32"
              textAnchor="middle"
              className="fill-white text-xs font-medium"
            >
              {process.title.length > 8
                ? process.title.substring(0, 8) + "..."
                : process.title}
            </text>
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="absolute"
      style={{
        left: `${process.position.x}px`,
        top: `${process.position.y}px`,
      }}
      onClick={onClick}
    >
      {getShapeComponent()}
    </div>
  );
};

export default FlowNode;
