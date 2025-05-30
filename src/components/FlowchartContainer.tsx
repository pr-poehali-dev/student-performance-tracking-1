import { useState } from "react";
import FlowNode from "./FlowNode";
import ProcessCard from "./ProcessCard";
import SidePanel from "./SidePanel";

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  details: string;
  position: { x: number; y: number };
  connections: string[];
  type: "start" | "process" | "decision" | "input" | "output" | "end";
}

const FlowchartContainer = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const processes: ProcessStep[] = [
    {
      id: "registration",
      title: "Регистрация студента",
      description: "Добавление нового студента в систему",
      icon: "👤",
      color: "from-blue-400 to-blue-600",
      details: "Внесение персональных данных, группы, специальности",
      position: { x: 50, y: 100 },
      connections: ["subjects"],
      type: "input",
    },
    {
      id: "subjects",
      title: "Назначение предметов",
      description: "Привязка студента к учебным дисциплинам",
      icon: "📚",
      color: "from-green-400 to-green-600",
      details: "Выбор курсов, семестров, преподавателей",
      position: { x: 300, y: 100 },
      connections: ["grades"],
      type: "process",
    },
    {
      id: "grades",
      title: "Внесение оценок",
      description: "Фиксация результатов обучения",
      icon: "📝",
      color: "from-yellow-400 to-orange-500",
      details: "Контрольные, экзамены, практические работы",
      position: { x: 550, y: 100 },
      connections: ["calculate"],
      type: "input",
    },
    {
      id: "calculate",
      title: "Расчёт среднего балла",
      description: "Автоматический подсчёт GPA",
      icon: "🧮",
      color: "from-purple-400 to-purple-600",
      details: "Взвешенное среднее с учётом кредитов",
      position: { x: 400, y: 300 },
      connections: ["rating"],
      type: "process",
    },
    {
      id: "rating",
      title: "Формирование рейтинга",
      description: "Создание общего рейтинга студентов",
      icon: "🏆",
      color: "from-red-400 to-pink-600",
      details: "Сортировка по среднему баллу и достижениям",
      position: { x: 150, y: 300 },
      connections: ["reports"],
      type: "decision",
    },
    {
      id: "reports",
      title: "Генерация отчётов",
      description: "Создание аналитических отчётов",
      icon: "📊",
      color: "from-indigo-400 to-blue-600",
      details: "Ведомости, статистика, аналитика успеваемости",
      position: { x: 50, y: 500 },
      connections: [],
      type: "output",
    },
  ];

  const selectedProcess = processes.find((p) => p.id === selectedNode);

  return (
    <div className="flex gap-6">
      <div className="flex-1">
        <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
          <div className="relative">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 1 }}
            >
              {processes.map((process) =>
                process.connections.map((connectionId) => {
                  const target = processes.find((p) => p.id === connectionId);
                  if (!target) return null;

                  return (
                    <line
                      key={`${process.id}-${connectionId}`}
                      x1={process.position.x + 60}
                      y1={process.position.y + 40}
                      x2={target.position.x + 60}
                      y2={target.position.y + 40}
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                    />
                  );
                }),
              )}
            </svg>

            <div className="relative min-h-[600px]" style={{ zIndex: 2 }}>
              {processes.map((process) => (
                <FlowNode
                  key={process.id}
                  process={process}
                  isSelected={selectedNode === process.id}
                  onClick={() => setSelectedNode(process.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedProcess && (
        <SidePanel
          process={selectedProcess}
          onClose={() => setSelectedNode(null)}
        />
      )}
    </div>
  );
};

export default FlowchartContainer;
