interface FlowNodeProps {
  process: {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    position: { x: number; y: number };
    type: "start" | "process" | "decision" | "input" | "output" | "end";
  };
  isSelected: boolean;
  onClick: () => void;
}

const FlowNode = ({ process, isSelected, onClick }: FlowNodeProps) => {
  const getShapeComponent = () => {
    const baseClasses = `cursor-pointer transition-all duration-300 hover:scale-110 ${
      isSelected ? "scale-110 drop-shadow-xl" : "drop-shadow-lg"
    }`;

    const gradientId = `gradient-${process.id}`;

    switch (process.type) {
      case "start":
      case "end":
        // Овал
        return (
          <svg width="140" height="80" className={baseClasses}>
            <defs>
              <linearGradient
                id={gradientId}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#3730a3" />
              </linearGradient>
            </defs>
            <ellipse
              cx="70"
              cy="40"
              rx="65"
              ry="35"
              fill={`url(#${gradientId})`}
              stroke={isSelected ? "#8b5cf6" : "transparent"}
              strokeWidth={isSelected ? "3" : "0"}
            />
            <text
              x="70"
              y="30"
              textAnchor="middle"
              className="fill-white text-lg font-semibold"
            >
              {process.icon}
            </text>
            <text
              x="70"
              y="50"
              textAnchor="middle"
              className="fill-white text-xs font-medium"
            >
              {process.title.split(" ").slice(0, 2).join(" ")}
            </text>
          </svg>
        );

      case "decision":
        // Ромб
        return (
          <svg width="140" height="100" className={baseClasses}>
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
              points="70,10 130,50 70,90 10,50"
              fill={`url(#${gradientId})`}
              stroke={isSelected ? "#8b5cf6" : "transparent"}
              strokeWidth={isSelected ? "3" : "0"}
            />
            <text
              x="70"
              y="40"
              textAnchor="middle"
              className="fill-white text-lg font-semibold"
            >
              {process.icon}
            </text>
            <text
              x="70"
              y="60"
              textAnchor="middle"
              className="fill-white text-xs font-medium"
            >
              {process.title.split(" ").slice(0, 2).join(" ")}
            </text>
          </svg>
        );

      case "input":
      case "output":
        // Параллелограмм
        return (
          <svg width="140" height="80" className={baseClasses}>
            <defs>
              <linearGradient
                id={gradientId}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
            <polygon
              points="20,10 130,10 120,70 10,70"
              fill={`url(#${gradientId})`}
              stroke={isSelected ? "#8b5cf6" : "transparent"}
              strokeWidth={isSelected ? "3" : "0"}
            />
            <text
              x="70"
              y="30"
              textAnchor="middle"
              className="fill-white text-lg font-semibold"
            >
              {process.icon}
            </text>
            <text
              x="70"
              y="50"
              textAnchor="middle"
              className="fill-white text-xs font-medium"
            >
              {process.title.split(" ").slice(0, 2).join(" ")}
            </text>
          </svg>
        );

      case "process":
      default:
        // Прямоугольник
        return (
          <svg width="140" height="80" className={baseClasses}>
            <defs>
              <linearGradient
                id={gradientId}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <rect
              x="10"
              y="10"
              width="120"
              height="60"
              rx="8"
              fill={`url(#${gradientId})`}
              stroke={isSelected ? "#8b5cf6" : "transparent"}
              strokeWidth={isSelected ? "3" : "0"}
            />
            <text
              x="70"
              y="30"
              textAnchor="middle"
              className="fill-white text-lg font-semibold"
            >
              {process.icon}
            </text>
            <text
              x="70"
              y="50"
              textAnchor="middle"
              className="fill-white text-xs font-medium"
            >
              {process.title.split(" ").slice(0, 2).join(" ")}
            </text>
          </svg>
        );
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
