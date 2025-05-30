import { X } from "lucide-react";

interface SidePanelProps {
  process: {
    id: string;
    title: string;
    description: string;
    details: string;
    type: "entity" | "attribute" | "relationship";
    attributes?: string[];
  };
  onClose: () => void;
}

const SidePanel = ({ process, onClose }: SidePanelProps) => {
  return (
    <div className="w-80 bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">{process.title}</h3>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={20} className="text-gray-600" />
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Тип элемента:</h4>
          <p className="text-sm text-gray-600 capitalize">
            {process.type === "entity"
              ? "Сущность"
              : process.type === "relationship"
                ? "Связь"
                : "Атрибут"}
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Описание:</h4>
          <p className="text-sm text-gray-600">{process.details}</p>
        </div>

        {process.attributes && process.attributes.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Атрибуты:</h4>
            <ul className="space-y-1">
              {process.attributes.map((attr, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-600 flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  {attr}
                </li>
              ))}
            </ul>
          </div>
        )}

        {process.type === "entity" && (
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-xs text-blue-700">
              💡 В Access эта сущность станет отдельной таблицей с
              полями-атрибутами
            </p>
          </div>
        )}

        {process.type === "relationship" && (
          <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
            <p className="text-xs text-yellow-700">
              🔗 Эта связь определяет отношения между таблицами в базе данных
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidePanel;
