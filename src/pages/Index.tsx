import FlowchartContainer from "@/components/FlowchartContainer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            ER-диаграмма: Учёт успеваемости студентов
          </h1>
          <p className="text-lg text-gray-600 font-open-sans">
            Диаграмма сущность-связь для базы данных Microsoft Access
          </p>
        </div>
        <FlowchartContainer />
      </div>
    </div>
  );
};

export default Index;
