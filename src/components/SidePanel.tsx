import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SidePanelProps {
  process: {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    details: string;
  };
  onClose: () => void;
}

const SidePanel = ({ process, onClose }: SidePanelProps) => {
  const getStepInfo = (id: string) => {
    const stepData: Record<
      string,
      { inputs: string[]; outputs: string[]; tools: string[] }
    > = {
      registration: {
        inputs: ["ФИО студента", "Номер студбилета", "Группа", "Специальность"],
        outputs: ["Профиль студента", "Учётная запись"],
        tools: ["CRM система", "База данных студентов"],
      },
      subjects: {
        inputs: ["Учебный план", "Семестр", "Специальность"],
        outputs: ["Список предметов", "Расписание"],
        tools: ["Электронный деканат", "Система планирования"],
      },
      grades: {
        inputs: ["Результаты тестов", "Оценки преподавателей", "Посещаемость"],
        outputs: ["Журнал оценок", "Текущий балл"],
        tools: ["Электронный журнал", "LMS система"],
      },
      calculate: {
        inputs: ["Все оценки", "Веса предметов", "Кредиты"],
        outputs: ["Средний балл", "GPA", "Процент успеваемости"],
        tools: ["Калькулятор GPA", "Аналитический модуль"],
      },
      rating: {
        inputs: [
          "Средние баллы",
          "Дополнительные достижения",
          "Участие в олимпиадах",
        ],
        outputs: ["Рейтинг группы", "Рейтинг курса", "Общий рейтинг"],
        tools: ["Система рейтингов", "Модуль сравнения"],
      },
      reports: {
        inputs: ["Данные успеваемости", "Рейтинги", "Статистика"],
        outputs: ["Ведомости", "Аналитические отчёты", "Графики"],
        tools: ["Генератор отчётов", "BI инструменты"],
      },
    };

    return stepData[id] || { inputs: [], outputs: [], tools: [] };
  };

  const stepInfo = getStepInfo(process.id);

  return (
    <div className="w-80 animate-slide-in-right">
      <Card className="shadow-xl">
        <CardHeader
          className={`bg-gradient-to-r ${process.color} text-white rounded-t-lg`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{process.icon}</span>
              <CardTitle className="text-lg">{process.title}</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              ✕
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Описание</h4>
            <p className="text-gray-600 text-sm">{process.details}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Входные данные</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {stepInfo.inputs.map((input, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  {input}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Результаты</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {stepInfo.outputs.map((output, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  {output}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Инструменты</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {stepInfo.tools.map((tool, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SidePanel;
