import React, { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  Calendar, 
  Users, 
  Clock, 
  Library, 
  Trophy, 
  ChevronLeft,
  ChevronRight,
  Tent,
  ClipboardList,
  UserCheck,
  MapPin,
  CalendarDays,
  UtensilsCrossed,
  Coffee,
  Sun,
  Moon,
  Cookie
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const menuItems = [
    { name: 'Home', icon: <Home size={20} /> },
    { name: 'Regulamento', icon: <BookOpen size={20} /> },
    { name: 'Cronograma', icon: <Calendar size={20} /> },
    { name: 'Equipes', icon: <Users size={20} /> },
    { name: 'Escala', icon: <Clock size={20} /> },
    { name: 'Coletânea', icon: <Library size={20} /> },
    { name: 'Pontuação', icon: <Trophy size={20} /> },
    { name: 'Cardápio', icon: <UtensilsCrossed size={20} /> },
  ];

  const equipeDiretiva = [
    { cargo: 'Diretor do Acampamento', nomes: ['Gil Dias'] },
    { cargo: 'Associados', nomes: ['Lucas', 'Joia'] },
    { cargo: 'Responsável Espiritual', nomes: ['Nanny Delgado'] },
    { cargo: 'Responsáveis pelo Programa', nomes: ['Joia', 'Elie', 'Luana'] },
    { cargo: 'Responsáveis pelas Gincanas', nomes: ['Gil Dias', 'Suely'] },
    { cargo: 'Responsável pela Música', nomes: ['Heidy Loide'] },
    { cargo: 'Responsáveis pela Cozinha', nomes: ['Zenaida', 'Filó'] },
    { cargo: 'Responsável pela Limpeza', nomes: ['Nanny'] },
    { cargo: 'Responsável pelo Som', nomes: ['Samory'] },
    { cargo: 'Responsável pela Logística', nomes: ['Lucas'] },
    { cargo: 'Responsável pelo Transporte', nomes: ['Joel'] },
    { cargo: 'Responsável pelo Horário', nomes: ['Lucas'] },
    { cargo: 'Responsável pela Rádio JA', nomes: ['Joel', 'Samory'] },
    { cargo: 'Responsáveis pela Água', nomes: ['Lucas', 'Joia'] },
    { cargo: 'Responsáveis pelo Sistema de Pontuação', nomes: ['Joel', 'Elie', 'Heidy', 'Samory'] },
    { cargo: 'Responsável pelos Quartos', nomes: ['Tenda Meninos', 'Tenda Meninas'] },
    { cargo: 'Responsável pela Disciplina', nomes: ['Equipe de Direção'] },
    { cargo: 'Responsável pela Mídia', nomes: ['Lea'] },
  ];

  const cronograma = [
    { dia: 'Sexta-feira', data: '13/02/2026', eventos: [{ hora: '18:00', desc: 'Abertura' }, { hora: '20:30', desc: 'Jantar' }, { hora: '22:00', desc: 'Toque de Recolher' }] },
    { dia: 'Sábado', data: '14/02/2026', eventos: [{ hora: '06:30', desc: 'Alvorada' }, { hora: '07:30', desc: 'Pequeno-almoço' }, { hora: '08:45', desc: 'Culto' }, { hora: '12:30', desc: 'Almoço' }, { hora: '16:45', desc: 'Espada ao Ar' }, { hora: '21:30', desc: 'Meditação São Valentim' }] },
    { dia: 'Domingo', data: '15/02/2026', eventos: [{ hora: '06:45', desc: 'Alvorada' }, { hora: '08:30', desc: 'Pequeno-almoço' }, { hora: '09:30', desc: 'Gincanas' }, { hora: '13:00', desc: 'Almoço' }, { hora: '15:30', desc: 'Palestra: Dependência Digital' }, { hora: '20:00', desc: 'Todo Mundo Canta' }] },
    { dia: 'Segunda-feira', data: '16/02/2026', eventos: [{ hora: '08:30', desc: 'Pequeno-almoço' }, { hora: '09:30', desc: 'Palestra: Expectativas' }, { hora: '13:00', desc: 'Almoço' }, { hora: '20:00', desc: 'Bom de Bíblia' }] },
    { dia: 'Terça-feira', data: '17/02/2026', eventos: [{ hora: '08:30', desc: 'Pequeno-almoço' }, { hora: '09:30', desc: 'Palestra: Discípulos' }, { hora: '15:00', desc: 'Caça ao Tesouro' }, { hora: '20:00', desc: 'Social: Luau' }] },
    { dia: 'Quarta-feira', data: '18/02/2026', eventos: [{ hora: '08:30', desc: 'Pequeno-almoço' }, { hora: '10:00', desc: 'Gincana Final' }, { hora: '13:00', desc: 'Almoço' }, { hora: '15:00', desc: 'Encerramento' }] }
  ];

  const cardapioData = [
    { dia: 'Sexta (13/02)', cafe: '---', almoco: '---', jantar: 'Cada acampante leva o seu', lanche: '---' },
    { dia: 'Sábado (14/02)', cafe: 'Pão, Bolacha, Banana, Chá, Leite', almoco: 'Salada Massa', jantar: 'Sopa de lentilha', lanche: '---' },
    { dia: 'Domingo (15/02)', cafe: 'Leite chocolate, Banana, Chá, cuscus', almoco: 'Feijoda de ervilha', jantar: 'Spaguete', lanche: 'Brigadeiro + pipoca' },
    { dia: 'Segunda (16/02)', cafe: 'Pão, ovo, Banana, Chá, Leite', almoco: 'Cachupa', jantar: 'Canja', lanche: '---' },
    { dia: 'Terça (17/02)', cafe: 'Leite chocolate, Banana, Chá, cuscus', almoco: 'Estrogonof de soja', jantar: 'Massa', lanche: 'Sandes Atum + suco' },
    { dia: 'Quarta (18/02)', cafe: 'Bolacha, ovo, Banana, Chá, Leite', almoco: 'Arroz com tudo', jantar: '---', lanche: '---' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-[#1e2533] p-6 md:p-8 rounded-xl border border-gray-700 shadow-lg">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">Bem-vindos!</h1>
              <p className="text-gray-400 italic text-base md:text-lg">"A fé nos move, o amor nos une, e juntos somos mais fortes em Cristo."</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Sobre o Acampamento', 'Programação', 'Objetivo'].map((t, i) => (
                <div key={i} className="bg-[#1e2533] p-5 rounded-xl border border-gray-700"><h2 className="text-lg font-semibold text-white mb-2">{t}</h2><p className="text-sm text-gray-400">Conteúdo referente ao {t.toLowerCase()} do nosso encontro espiritual.</p></div>
              ))}
            </div>
          </div>
        );
      case 'Regulamento':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-[#1e2533] p-6 rounded-xl border border-gray-700 shadow-lg">
              <div className="flex items-center gap-3 mb-4"><ClipboardList className="text-blue-500" size={28} /><h1 className="text-2xl font-bold text-white">Regulamento</h1></div>
              <p className="text-gray-400 text-sm">Regras e diretrizes para uma convivência harmoniosa.</p>
            </div>
            <div className="bg-[#1e2533] p-6 rounded-xl border border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">Regras Gerais</h2>
              <ul className="space-y-2 text-gray-300 text-sm"><li>• Respeitar os horários estabelecidos</li><li>• Participar das atividades</li><li>• Manter o ambiente limpo</li></ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {equipeDiretiva.map((item, idx) => (
                <div key={idx} className="bg-[#1e2533] p-4 rounded-xl border border-blue-900/30">
                  <h3 className="text-blue-400 text-[10px] font-bold uppercase mb-2">{item.cargo}</h3>
                  {item.nomes.map((n, i) => <p key={i} className="text-gray-200 text-sm">{n}</p>)}
                </div>
              ))}
            </div>
          </div>
        );
      case 'Cronograma':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-[#1e2533] p-6 rounded-xl border border-gray-700 shadow-lg">
              <div className="flex items-center gap-3 mb-2"><Calendar className="text-blue-500" size={28} /><h1 className="text-2xl font-bold text-white">Cronograma</h1></div>
              <div className="flex gap-4 text-xs text-gray-400"><span className="flex items-center gap-1"><MapPin size={14}/> Baía das Gatas</span><span className="flex items-center gap-1"><CalendarDays size={14}/> 13-18 Fev</span></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cronograma.map((dia, idx) => (
                <div key={idx} className="bg-[#1e2533] rounded-xl border border-gray-700 overflow-hidden">
                  <div className="bg-[#2d3748] px-4 py-2 font-bold text-sm">{dia.dia}</div>
                  <div className="p-4 space-y-2">
                    {dia.eventos.map((e, ei) => (
                      <div key={ei} className="flex gap-3 text-xs"><span className="text-blue-400 w-10 font-mono">{e.hora}</span><span className="text-gray-300">{e.desc}</span></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Cardápio':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-[#1e2533] p-6 rounded-xl border border-gray-700 shadow-lg">
              <div className="flex items-center gap-3 mb-2"><UtensilsCrossed className="text-blue-500" size={28} /><h1 className="text-2xl font-bold text-white">Cardápio</h1></div>
              <p className="text-gray-400 text-sm">Alimentação preparada com carinho.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cardapioData.map((item, idx) => (
                <div key={idx} className="bg-[#1e2533] rounded-xl border border-gray-700 overflow-hidden border-t-4 border-t-blue-600">
                  <div className="bg-[#2d3748] px-5 py-3 font-bold text-white">{item.dia}</div>
                  <div className="p-4 space-y-4">
                    <div className="flex gap-3"><Coffee size={18} className="text-orange-400"/><div className="text-xs text-gray-400 uppercase">Café<p className="text-gray-200 normal-case mt-1">{item.cafe}</p></div></div>
                    <div className="flex gap-3"><Sun size={18} className="text-yellow-400"/><div className="text-xs text-gray-400 uppercase">Almoço<p className="text-gray-200 normal-case mt-1">{item.almoco}</p></div></div>
                    <div className="flex gap-3"><Moon size={18} className="text-indigo-400"/><div className="text-xs text-gray-400 uppercase">Jantar<p className="text-gray-200 normal-case mt-1">{item.jantar}</p></div></div>
                    {item.lanche !== '---' && <div className="flex gap-3"><Cookie size={18} className="text-pink-400"/><div className="text-xs text-gray-400 uppercase">Lanche<p className="text-gray-200 normal-case mt-1">{item.lanche}</p></div></div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return <div className="h-64 flex items-center justify-center text-gray-500 border border-dashed border-gray-700 rounded-xl">Em construção: {activeTab}</div>;
    }
  };

  return (
    <div className="flex h-screen bg-[#0f141e] text-white font-sans overflow-hidden">
      <aside className={`relative flex flex-col bg-[#0f172a] border-r border-gray-800 transition-all duration-300 z-50 ${isSidebarExpanded ? 'w-64' : 'w-16 md:w-20'}`}>
        <div onClick={() => setSidebarExpanded(!isSidebarExpanded)} className="p-4 md:p-6 flex items-center cursor-pointer hover:bg-[#1e2533]">
          <div className="bg-blue-600 p-2 rounded-lg"><Tent size={20} /></div>
          <h2 className={`ml-3 font-bold transition-all duration-300 ${isSidebarExpanded ? 'opacity-100' : 'opacity-0 w-0 h-0'}`}>Acampamento</h2>
        </div>
        <nav className="flex-1 px-2 space-y-1 mt-4 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => (
            <button key={item.name} onClick={() => { setActiveTab(item.name); if (window.innerWidth < 768) setSidebarExpanded(false); }} className={`w-full flex items-center gap-4 px-3 py-3 rounded-lg text-sm transition-all relative ${activeTab === item.name ? 'bg-blue-600/10 text-blue-400 border-l-4 border-blue-500' : 'text-gray-400 hover:bg-[#1e2533]'}`}>
              {item.icon}
              <span className={`${isSidebarExpanded ? 'opacity-100' : 'opacity-0 absolute'}`}>{item.name}</span>
            </button>
          ))}
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto bg-[#0f141e] p-4 md:p-10">
        <div className="max-w-6xl mx-auto">{renderContent()}</div>
      </main>
      <style>{`.custom-scrollbar::-webkit-scrollbar { width: 4px; } .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }`}</style>
    </div>
  );
};

export default App;