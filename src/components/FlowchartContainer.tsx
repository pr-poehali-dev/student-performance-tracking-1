import { useState } from "react";
import FlowNode from "./FlowNode";
import SidePanel from "./SidePanel";

interface ERElement {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  details: string;
  position: { x: number; y: number };
  connections: string[];
  type: "entity" | "attribute" | "relationship";
  attributes?: string[];
}

const FlowchartContainer = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const erElements: ERElement[] = [
    // Сущности
    {
      id: "students",
      title: "Students",
      description: "Студенты",
      icon: "👥",
      color: "from-blue-400 to-blue-600",
      details: "Основная информация о студентах учебного заведения",
      position: { x: 50, y: 150 },
      connections: ["enrollment", "student_id"],
      type: "entity",
      attributes: [
        "student_id",
        "last_name",
        "first_name",
        "group_id",
        "phone",
      ],
    },
    {
      id: "groups",
      title: "Groups",
      description: "Группы",
      icon: "🎓",
      color: "from-green-400 to-green-600",
      details: "Учебные группы студентов",
      position: { x: 300, y: 50 },
      connections: ["belongs_to", "group_id"],
      type: "entity",
      attributes: ["group_id", "group_name", "course", "specialization"],
    },
    {
      id: "subjects",
      title: "Subjects",
      description: "Предметы",
      icon: "📚",
      color: "from-purple-400 to-purple-600",
      details: "Учебные дисциплины",
      position: { x: 550, y: 150 },
      connections: ["enrollment", "teaches", "subject_id"],
      type: "entity",
      attributes: ["subject_id", "subject_name", "credits", "semester"],
    },
    {
      id: "teachers",
      title: "Teachers",
      description: "Преподаватели",
      icon: "👨‍🏫",
      color: "from-orange-400 to-orange-600",
      details: "Преподаватели учебного заведения",
      position: { x: 550, y: 350 },
      connections: ["teaches", "teacher_id"],
      type: "entity",
      attributes: [
        "teacher_id",
        "last_name",
        "first_name",
        "department",
        "position",
      ],
    },
    {
      id: "grades",
      title: "Grades",
      description: "Оценки",
      icon: "📝",
      color: "from-red-400 to-red-600",
      details: "Результаты обучения студентов",
      position: { x: 300, y: 350 },
      connections: ["has_grade"],
      type: "entity",
      attributes: ["grade_id", "student_id", "subject_id", "grade", "date"],
    },

    // Связи
    {
      id: "enrollment",
      title: "Enrollment",
      description: "Изучает",
      icon: "📖",
      color: "from-yellow-400 to-yellow-600",
      details: "Связь между студентами и предметами",
      position: { x: 300, y: 200 },
      connections: [],
      type: "relationship",
    },
    {
      id: "teaches",
      title: "Teaches",
      description: "Преподаёт",
      icon: "🎯",
      color: "from-indigo-400 to-indigo-600",
      details: "Связь между преподавателями и предметами",
      position: { x: 650, y: 250 },
      connections: [],
      type: "relationship",
    },
    {
      id: "belongs_to",
      title: "Belongs",
      description: "Принадлежит",
      icon: "🔗",
      color: "from-pink-400 to-pink-600",
      details: "Связь между студентами и группами",
      position: { x: 175, y: 100 },
      connections: [],
      type: "relationship",
    },
    {
      id: "has_grade",
      title: "Has Grade",
      description: "Имеет оценку",
      icon: "⭐",
      color: "from-teal-400 to-teal-600",
      details: "Связь оценок со студентами и предметами",
      position: { x: 175, y: 250 },
      connections: [],
      type: "relationship",
    },

    // Ключевые атрибуты
    {
      id: "student_id",
      title: "StudentID",
      description: "ID студента",
      icon: "🔑",
      color: "from-gray-400 to-gray-600",
      details: "Уникальный идентификатор студента (Primary Key)",
      position: { x: 50, y: 50 },
      connections: [],
      type: "attribute",
    },
    {
      id: "subject_id",
      title: "SubjectID",
      description: "ID предмета",
      icon: "🔑",
      color: "from-gray-400 to-gray-600",
      details: "Уникальный идентификатор предмета (Primary Key)",
      position: { x: 650, y: 50 },
      connections: [],
      type: "attribute",
    },
    {
      id: "teacher_id",
      title: "TeacherID",
      description: "ID преподавателя",
      icon: "🔑",
      color: "from-gray-400 to-gray-600",
      details: "Уникальный идентификатор преподавателя (Primary Key)",
      position: { x: 650, y: 450 },
      connections: [],
      type: "attribute",
    },
    {
      id: "group_id",
      title: "GroupID",
      description: "ID группы",
      icon: "🔑",
      color: "from-gray-400 to-gray-600",
      details: "Уникальный идентификатор группы (Primary Key)",
      position: { x: 400, y: 50 },
      connections: [],
      type: "attribute",
    },
  ];

  const selectedElement = erElements.find((e) => e.id === selectedNode);

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
              {/* Связи между сущностями */}
              <line
                x1="190"
                y1="190"
                x2="260"
                y2="240"
                stroke="#8B5CF6"
                strokeWidth="2"
              />
              <line
                x1="340"
                y1="240"
                x2="510"
                y2="190"
                stroke="#8B5CF6"
                strokeWidth="2"
              />
              <line
                x1="590"
                y1="190"
                x2="690"
                y2="290"
                stroke="#8B5CF6"
                strokeWidth="2"
              />
              <line
                x1="590"
                y1="350"
                x2="650"
                y2="290"
                stroke="#8B5CF6"
                strokeWidth="2"
              />
              <line
                x1="190"
                y1="150"
                x2="235"
                y2="140"
                stroke="#8B5CF6"
                strokeWidth="2"
              />
              <line
                x1="340"
                y1="350"
                x2="235"
                y2="290"
                stroke="#8B5CF6"
                strokeWidth="2"
              />

              {/* Связи с ключевыми атрибутами */}
              <line
                x1="120"
                y1="90"
                x2="120"
                y2="150"
                stroke="#4B5563"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
              <line
                x1="690"
                y1="90"
                x2="620"
                y2="150"
                stroke="#4B5563"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
              <line
                x1="690"
                y1="450"
                x2="620"
                y2="390"
                stroke="#4B5563"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
              <line
                x1="470"
                y1="90"
                x2="370"
                y2="90"
                stroke="#4B5563"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
            </svg>

            <div className="relative min-h-[500px]" style={{ zIndex: 2 }}>
              {erElements.map((element) => (
                <FlowNode
                  key={element.id}
                  process={element}
                  isSelected={selectedNode === element.id}
                  onClick={() => setSelectedNode(element.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedElement && (
        <SidePanel
          process={selectedElement}
          onClose={() => setSelectedNode(null)}
        />
      )}
    </div>
  );
};

export default FlowchartContainer;
