interface ProcessCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const ProcessCard = ({ title, description, icon, color }: ProcessCardProps) => {
  return (
    <div
      className={`bg-gradient-to-br ${color} rounded-lg p-4 text-white shadow-md hover:shadow-lg transition-shadow duration-300`}
    >
      <div className="flex items-center gap-3">
        <div className="text-2xl">{icon}</div>
        <div>
          <h3 className="font-semibold text-sm">{title}</h3>
          <p className="text-xs opacity-90">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
