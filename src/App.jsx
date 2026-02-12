import React, { useState } from 'react';
import {
  Home,
  BookOpen,
  Calendar,
  Users,
  Clock,
  Library,
  Trophy,
  Music,
  Search,
  ChevronUp,
  ChevronDown,
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
  Mic,
  Cookie
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [searchSong, setSearchSong] = useState('');
  const [expandedSong, setExpandedSong] = useState(null);

  const menuItems = [
    { name: 'Home', icon: <Home size={20} /> },
    { name: 'Regulamento', icon: <BookOpen size={20} /> },
    { name: 'Cronograma', icon: <Calendar size={20} /> },
    { name: 'Palestras', icon: <Mic size={20} /> },
    { name: 'Escala', icon: <Clock size={20} /> },
    { name: 'Coletânea', icon: <Library size={20} /> },
    //{ name: 'Pontuação', icon: <Trophy size={20} /> },
    { name: 'Cardápio', icon: <UtensilsCrossed size={20} /> },
  ];

  const equipeDiretiva = [
    { cargo: 'Diretor do Acampamento', nomes: ['Gil Dias'] },
    { cargo: 'Associados', nomes: ['Lucas', 'Joia'] },
    { cargo: 'Responsável Espiritual', nomes: ['Nanny Delgado'] },
    { cargo: 'Responsáveis pelo Programa', nomes: ['Joia', 'Elis', 'Luana'] },
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
    { cargo: 'Responsáveis pelo Sistema de Pontuação', nomes: ['Joel', 'Elis', 'Heidy', 'Samory'] },
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

  const musicas = [
    {
      titulo: "Meu Lugar No Mundo",
      autor: "Ministério Jovem",
      letra: `Fui alcançado por Teu amor
Sou testemunha por onde for
Em cada rua, cada nação
Levo Tua graça, Tua salvação

Oh oh oh oh

Onde houver trevas quero chegar
Com a palavra pra libertar
Onde houver ódio que eu leve amor
Vivendo sempre pra Ti Senhor

Coro:
O meu lugar no mundo é Te anunciar
É ser o sal da terra, Teu nome exaltar
Tu és a minha vida, minha inspiração
Te revelar ao mundo é minha missão

Ponte:
Maranata, Maranata
Muito em breve Jesus`
    },

    {
      titulo: "Diferente",
      autor: "Daniel Ludtke",
      letra: `O mundo vai padronizando a gente
Todo mundo cai na ideia de que todos têm que ser iguais
Pra serem normais

E o mundo sai pregando um modelo que ele mesmo faz
Que diz que os diferentes ficam para trás
Sem vida, sem paz

E se loucos forem todos os outros que se dizem tão normais?
E eu tão diferente for um padrão presente pro mundo?

Coro:
Não tente me mudar
Já fui transformado por Jesus
Igual a Ele sou

Não tente me mudar
Já fui transformado por Jesus
Igual a Ele sou
Diferente`
    },

    {
      titulo: "Sal da Terra",
      autor: "Hinário Adventista",
      letra: `Jesus nos deu esta missão
O Seu amor compartilhar
Somente entraremos em ação
Se o amor de Deus nos motivar

O Seu poder nos moverá
E assim iremos repartir
O amor de Deus, a verdadeira paz
E a doce esperança no porvir

Coro:
Vós sois o sal da terra
Restaurando o sabor
E a alegria de viver
Vós sois o sal da terra

A vida que Jesus viveu
O exemplo que Ele nos deixou
Demonstram o real sentido
Da missão que o Senhor nos confiou`
    },

    {
      titulo: "Somos Teus",
      autor: "Ministério Jovem",
      letra: `Está nascendo um novo tempo
Uma nova geração
Pra espalhar Tua glória em toda terra

Eu vejo os jovens se prostrando
Em reverência e adoração
Eu vejo Espírito movendo os corações

Coro:
Somos Teus, Senhor!
Somos Teus, Senhor!
Quer vivamos ou morramos, somos Teus!

Ponte:
Viveremos só por Ti
E morreremos só por Ti
Quer vivamos ou morramos, somos Teus`
    },

    {
      titulo: "A Começar Em Mim",
      autor: "Vocal Livre",
      letra: `Cedo me acordo, a oração
É o coração que tá apertado
Para ver um mundo diferente

Quero ver mudar
Mas se eu aqui só esperar
Eu sou um deles

Coro:
Haja mais amor
A começar em mim
Amor que eu tanto quero ver
A começar em mim`
    },

    {
      titulo: "Maranata",
      autor: "Ministério Jovem (Tema JA 2024)",
      letra: `Nós temos um chamado
Uma palavra a pregar
Mensagem poderosa
Que pode vidas transformar

Coro:
Maranata, Maranata
Muito em breve Jesus voltará

Trabalhando em união
Anunciando a Salvação
Esperamos o raiar
Tua luz irá brilhar`
    }
  ];


  const filteredSongs = musicas.filter(m =>
    m.titulo.toLowerCase().includes(searchSong.toLowerCase()) ||
    m.autor.toLowerCase().includes(searchSong.toLowerCase())
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-[#1e2533] p-6 md:p-8 rounded-xl border border-gray-700 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10"><Tent size={120} /></div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">Bem-vindos ao Retiro JA!</h1>
              <p className="text-gray-400 italic text-base md:text-lg z-10 relative">"A fé nos move, o amor nos une, e juntos somos mais fortes em Cristo."</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Sobre o Acampamento', 'Cronograma', 'Objetivo'].map((t, i) => (
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
              <div className="flex gap-4 text-xs text-gray-400"><span className="flex items-center gap-1"><MapPin size={14} /> Baía das Gatas</span><span className="flex items-center gap-1"><CalendarDays size={14} /> 13-18 Fev</span></div>
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
      case 'Palestras':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-[#1e2533] p-6 rounded-xl border border-gray-700 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <Mic className="text-blue-500" size={28} />
                <h1 className="text-2xl font-bold text-white">Palestras</h1>
              </div>
              <p className="text-gray-400 text-sm">Reflexões e temas centrais do Acampamento 2026.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

              {/* Domingo */}
              <div className="bg-[#1e2533] rounded-xl border border-gray-700 overflow-hidden">
                <div className="bg-[#2d3748] px-4 py-2 font-bold text-sm text-white">
                  Domingo — 15/02
                </div>
                <div className="p-4 space-y-3 text-sm text-gray-300">
                  <h3 className="text-blue-400 font-semibold">
                    Dependência Digital: Quando a IA Pensa por Mim
                  </h3>

                  <p className="text-gray-400">
                    <span className="text-white font-semibold">Tema:</span> Autonomia e consciência na era da Inteligência Artificial.
                  </p>

                  <div>
                    <p className="text-white font-semibold mb-1">Pontos-chave:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Uso consciente da tecnologia</li>
                      <li>• IA como ferramenta, não substituição do discernimento</li>
                      <li>• Risco de terceirizar decisões pessoais</li>
                      <li>• Responsabilidade cristã no mundo digital</li>
                    </ul>
                  </div>

                  <p className="text-xs text-gray-400">
                    <span className="text-white font-semibold">Objetivo:</span> Refletir até que ponto a tecnologia ajuda — e quando começa a ocupar o espaço da consciência e da fé.
                  </p>
                </div>
              </div>

              {/* Segunda */}
              <div className="bg-[#1e2533] rounded-xl border border-gray-700 overflow-hidden">
                <div className="bg-[#2d3748] px-4 py-2 font-bold text-sm text-white">
                  Segunda-feira — 16/02
                </div>
                <div className="p-4 space-y-3 text-sm text-gray-300">
                  <h3 className="text-blue-400 font-semibold">
                    Expectativas Irreais e Frustrações Reais
                  </h3>

                  <p className="text-gray-400">
                    <span className="text-white font-semibold">Foco:</span> Romantização dos relacionamentos.
                  </p>

                  <div>
                    <p className="text-white font-semibold mb-1">Pontos para debate:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Influência de filmes e redes sociais</li>
                      <li>• Idealização vs. realidade</li>
                      <li>• Lidar com conflitos</li>
                    </ul>
                  </div>

                  <p className="italic text-blue-400 text-xs">
                    “Amor não é perfeição, é construção.”
                  </p>

                  <p className="text-xs text-gray-400">
                    <span className="text-white font-semibold">Objetivo:</span> Desenvolver maturidade emocional e visão equilibrada sobre relacionamentos.
                  </p>
                </div>
              </div>

              {/* Terça */}
              <div className="bg-[#1e2533] rounded-xl border border-gray-700 overflow-hidden">
                <div className="bg-[#2d3748] px-4 py-2 font-bold text-sm text-white">
                  Terça-feira — 17/02
                </div>
                <div className="p-4 space-y-3 text-sm text-gray-300">
                  <h3 className="text-blue-400 font-semibold">
                    Nova Geração de Discípulos
                  </h3>

                  <p className="text-gray-400">
                    <span className="text-white font-semibold">Tema:</span> Ser discípulo em um mundo conectado e acelerado.
                  </p>

                  <div>
                    <p className="text-white font-semibold mb-1">Pontos-chave:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Discipulado vai além da frequência na igreja</li>
                      <li>• Fé se constrói em relacionamento</li>
                      <li>• Caminhada, missão e exemplo</li>
                      <li>• Formar novos discípulos</li>
                    </ul>
                  </div>

                  <p className="text-xs text-gray-400">
                    <span className="text-white font-semibold">Objetivo:</span> Desafiar os jovens a viverem o evangelho na prática e assumirem responsabilidade espiritual.
                  </p>
                </div>
              </div>

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
                    <div className="flex gap-3"><Coffee size={18} className="text-orange-400" /><div className="text-xs text-gray-400 uppercase">Café<p className="text-gray-200 normal-case mt-1">{item.cafe}</p></div></div>
                    <div className="flex gap-3"><Sun size={18} className="text-yellow-400" /><div className="text-xs text-gray-400 uppercase">Almoço<p className="text-gray-200 normal-case mt-1">{item.almoco}</p></div></div>
                    <div className="flex gap-3"><Moon size={18} className="text-indigo-400" /><div className="text-xs text-gray-400 uppercase">Jantar<p className="text-gray-200 normal-case mt-1">{item.jantar}</p></div></div>
                    {item.lanche !== '---' && <div className="flex gap-3"><Cookie size={18} className="text-pink-400" /><div className="text-xs text-gray-400 uppercase">Lanche<p className="text-gray-200 normal-case mt-1">{item.lanche}</p></div></div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Escala':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-[#1e2533] p-6 rounded-xl border border-gray-700 shadow-lg">
              <div className="flex items-center gap-3 mb-2"><Clock className="text-blue-500" size={28} /><h1 className="text-2xl font-bold text-white">Escala</h1></div>
              <p className="text-gray-400 text-sm">Distribuição das equipes por refeição.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Café */}
              <div className="bg-[#1e2533] rounded-xl border border-gray-700 overflow-hidden border-t-4 border-t-blue-600">
                <div className="bg-[#2d3748] px-5 py-3 font-bold text-white">
                  Café
                </div>
                <div className="p-4 space-y-3 text-sm">

                  <div className="flex justify-between">
                    <span className="text-gray-400">Sábado (14/02)</span>
                    <span className="font-semibold text-green-400">Verde</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">Domingo (15/02)</span>
                    <span className="font-semibold text-blue-400">Azul</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">Segunda (16/02)</span>
                    <span className="font-semibold text-red-400">Vermelho</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">Terça (17/02)</span>
                    <span className="font-semibold text-yellow-400">Amarelo</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">Quarta (18/02)</span>
                    <span className="font-semibold text-green-400">Verde</span>
                  </div>

                </div>
              </div>


              {/* Almoço */}
              <div className="bg-[#1e2533] rounded-xl border border-gray-700 overflow-hidden border-t-4 border-t-blue-600">
                <div className="bg-[#2d3748] px-5 py-3 font-bold text-white">
                  Almoço
                </div>
                <div className="p-4 space-y-3 text-sm">

                  <div className="flex justify-between">
                    <span className="text-gray-400">Sábado (14/02)</span>
                    <span className="font-semibold text-yellow-400">Amarelo</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">Domingo (15/02)</span>
                    <span className="font-semibold text-green-400">Verde</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">Segunda (16/02)</span>
                    <span className="font-semibold text-blue-400">Azul</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">Terça (17/02)</span>
                    <span className="font-semibold text-red-400">Vermelho</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">Quarta (18/02)</span>
                    <span className="font-semibold text-yellow-400">Amarelo</span>
                  </div>

                </div>
              </div>


              {/* Jantar */}
              <div className="bg-[#1e2533] rounded-xl border border-gray-700 overflow-hidden border-t-4 border-t-blue-600">
                <div className="bg-[#2d3748] px-5 py-3 font-bold text-white">
                  Jantar
                </div>
                <div className="p-4 space-y-3 text-sm">

                  <div className="flex justify-between">
                    <span className="text-gray-400">Sábado (14/02)</span>
                    <span className="font-semibold text-red-400">Vermelho</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">Domingo (15/02)</span>
                    <span className="font-semibold text-yellow-400">Amarelo</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">Segunda (16/02)</span>
                    <span className="font-semibold text-green-400">Verde</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">Terça (17/02)</span>
                    <span className="font-semibold text-blue-400">Azul</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">Quarta (18/02)</span>
                    <span className="font-semibold text-gray-500">—</span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        );
      case 'Coletânea':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-[#1e2533] p-6 rounded-xl border border-gray-700 shadow-lg">
              <div className="flex items-center gap-3 mb-4"><Music className="text-blue-500" size={28} /><h1 className="text-2xl font-bold text-white">Coletânea de Músicas</h1></div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input
                  type="text"
                  placeholder="Buscar música ou artista..."
                  className="w-full bg-[#0f141e] border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-all"
                  value={searchSong}
                  onChange={(e) => setSearchSong(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-3">
              {filteredSongs.map((musica, index) => (
                <div key={index} className="bg-[#1e2533] border border-gray-700 rounded-xl overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => setExpandedSong(expandedSong === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 hover:bg-[#2d3748] transition-colors"
                  >
                    <div className="text-left">
                      <h3 className="font-bold text-white">{musica.titulo}</h3>
                      <p className="text-xs text-blue-400 uppercase tracking-wider">{musica.autor}</p>
                    </div>
                    {expandedSong === index ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
                  </button>

                  {expandedSong === index && (
                    <div className="p-5 bg-[#0f141e]/50 border-t border-gray-800 animate-in slide-in-from-top-2">
                      <pre className="font-sans text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">
                        {musica.letra}
                      </pre>
                    </div>
                  )}
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