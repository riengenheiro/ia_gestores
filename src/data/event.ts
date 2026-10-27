// Fonte única de dados da página "IA para Gestores".
// Itens marcados com TODO precisam ser confirmados/preenchidos antes de publicar.

export const eventData = {
  // ===== Evento =====
  eventName: "IA para Gestores",
  city: "CAMPINAS",
  dateShort: "05 DE NOVEMBRO",
  time: "18H",
  dateLong: "Quinta-feira, 5 de novembro",
  timeLong: "A partir das 18h",
  venueName: "Legacy Coffee — Café e Negócios",
  venueAddress: "Av. Nossa Sra. de Fátima, 998 - Taquaral, Campinas - SP, 13076-000",
  venueVideoId: "ZRkWfkN0vqE",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Legacy+Coffee+Av.+Nossa+Sra.+de+F%C3%A1tima+998+Taquaral+Campinas",
  format: "Presencial, com lugares limitados ao espaço do café",

  // ===== Hero =====
  eyebrow: "ENCONTRO PRESENCIAL · CAMPINAS · 5 DE NOVEMBRO",
  headline: "Você precisa de clientes, mas não gosta de ligar e não tem tempo para negociar e vender?",
  subheadline:
    "Uma noite para descobrir como transformar a inteligência artificial em uma funcionária que atende seus clientes, responde às dúvidas e trabalha até nos finais de semana — enquanto você descansa e aproveita sua família.",
  heroCtaText: "QUERO DESCOBRIR COMO FAZER A IA VENDER POR MIM",
  heroNotice: "Encontro presencial · 5 de novembro, às 18h · Legacy Coffee · Campinas",
  heroVideoId: "cObBbs5QAqE",

  // ===== Oferta =====
  priceFull: "197",
  priceLot: "47",
  priceHalf: "23,50",
  lotName: "1º Lote – IA para Gestores",
  lotDeadlineText: "até 31/10",
  lotAfterText: "A partir de 01/11: R$ 197.",
  // Fim do 1º lote (horário de Brasília)
  lotDeadlineISO: "2026-10-31T23:59:59-03:00",
  // TODO: colocar o link real do checkout de ingressos
  checkoutUrl: "#ingressos",

  // ===== Pilares =====
  pillars: [
    { icon: "📈", title: "Venda mais", desc: "com soluções inteligentes" },
    { icon: "⏱️", title: "Ganhe tempo", desc: "automatizando processos" },
    { icon: "🧭", title: "Melhore a gestão", desc: "com decisões inteligentes" },
    { icon: "👀", title: "Veja na prática", desc: "soluções de IA funcionando" },
  ],

  // ===== Calculadora (valores iniciais) =====
  calculator: { proposals: 60, closed: 12, ticket: 1500, recoveryRate: 0.1 },

  // ===== Para quem é =====
  forYou: [
    "Você é empresário, dono, sócio ou gestor e quer fazer sua empresa crescer com o apoio da Inteligência Artificial.",
    "Você quer aumentar vendas, melhorar a produtividade e automatizar processos que consomem tempo da sua equipe.",
    "Você sabe que a IA pode ajudar seu negócio, mas ainda não descobriu quais soluções realmente fazem sentido para sua empresa.",
    "Você quer conhecer soluções reais de IA funcionando na prática, aplicadas a vendas, atendimento e gestão.",
    "Você quer descobrir como implementar essas soluções com apoio especializado, sem precisar aprender programação ou desenvolver sistemas.",
  ],
  notForYou: [
    "Você procura um curso técnico para aprender programação ou desenvolver seus próprios agentes de IA.",
    "Você espera uma palestra sobre tendências e previsões, sem demonstrações de aplicações reais.",
    "Você procura apenas ferramentas para fazer tudo sozinho, sem interesse em conhecer soluções especializadas.",
    "Você acredita que a tecnologia resolve qualquer problema empresarial sem planejamento ou uma boa gestão.",
  ],

  // ===== O que você leva =====
  takeaways: [
    {
      num: "01",
      title: "Como atender mais clientes sem passar o dia respondendo mensagens",
      text: "Conheça possibilidades de usar a IA para responder dúvidas, agilizar o atendimento e evitar que oportunidades de venda se percam porque você está ocupado.",
    },
    {
      num: "02",
      title: "Quais tarefas da sua empresa podem deixar de depender de você",
      text: "Do trabalho repetitivo aos processos que consomem horas da sua equipe, descubra onde a IA pode economizar tempo, reduzir custos e aumentar a produtividade.",
    },
    {
      num: "03",
      title: "Como começar sem precisar desenvolver sua própria tecnologia",
      text: "Conheça soluções que já existem, entenda quais podem fazer sentido para sua empresa e descubra como contar com especialistas para colocá-las em prática.",
    },
  ],

  // ===== Cronograma =====
  schedule: [
    { time: "18:00", title: "Chegada e credenciamento", text: "Credenciamento pelo QR code do ingresso e uma conversa com outros gestores antes de começar." },
    { time: "18:30", title: "Onde a IA entra na gestão de uma pequena empresa", text: "O que a IA já faz bem hoje em atendimento, vendas e processos, o que ainda não faz, e como separar o que serve para o seu negócio do que é só moda." },
    { time: "19:00", title: "A conta fechada: quanto você deixa na mesa", text: "Você calcula, com os seus números, quanto a empresa perde por mês com orçamento sem resposta e cliente que some sem retorno." },
    { time: "19:40", title: "IA ao vivo no WhatsApp", text: "Demonstrações ao vivo de soluções de IA aplicadas ao atendimento, às vendas e à automação de processos empresariais." },
    { time: "20:20", title: "Intervalo", text: "Intervalo de 15 minutos para networking e troca de experiências. Pausa do café!" },
    { time: "20:35", title: "Seu plano de 30 dias", text: "Como identificar oportunidades de IA na sua empresa, escolher soluções e contar com especialistas para implementá-las." },
    { time: "21:10", title: "Perguntas, próximos passos e encerramento", text: "Perguntas, troca de experiências e apresentação de possibilidades de implementação com apoio especializado." },
  ],

  // ===== Incluído =====
  included: [
    { strong: "Participação presencial na palestra IA para Gestores", text: ", com Kelly Zortea, no Legacy Coffee, em Campinas." },
    { strong: "Aplicações da inteligência artificial nos negócios:", text: " descubra como a IA pode ajudar no atendimento, nas vendas, na produtividade e na gestão." },
    { strong: "Orientação para identificar oportunidades:", text: " entenda onde a IA pode ajudar sua empresa e por onde começar." },
    { strong: "Networking com empresários e gestores:", text: " aproveite o encontro para trocar experiências, ideias e contatos." },
    { strong: "Ingresso digital com QR Code:", text: " receba seu ingresso por WhatsApp e e-mail após a confirmação do pagamento." },
  ],

  // Mesmo número citado na bio da Kelly.
  companiesAccompanied: "+1.000",

  guarantee: {
    days: 3,
    deadlineText: "2 de novembro",
    title: "Garantia total: 100% do seu dinheiro de volta",
    lead: "Se até 3 dias antes do evento você mudar de ideia, por qualquer motivo, você recebe cada centavo de volta.",
    text: "Essa garantia é da própria organização, sem intermediário. Até 2 de novembro, basta uma mensagem no WhatsApp informado na sua compra. Sem perguntas, sem burocracia e sem letras miúdas.",
    closing: "Você garante sua vaga agora e decide com calma. O risco fica todo com a gente.",
  },

  stepsTitle: "Como recebo o ingresso?",
  steps: [
    {
      title: "Garanta sua vaga",
      text: "Pagamento via Pix (na hora) ou cartão de crédito.",
    },
    {
      title: "Receba o ingresso",
      text: "Após a confirmação do pagamento, o ingresso digital com QR Code é enviado por WhatsApp e e-mail.",
    },
    {
      title: "Apresente no credenciamento",
      text: "No dia, é só apresentar o QR Code no credenciamento.",
    },
  ],

  // ===== Kelly =====
  speaker: {
    name: "Kelly Zortea",
    role: "Especialista em negócios e gestão com IA",
    photo: "https://agendaapi.emafdados.com.br/avatars/eventos/7/b761b3aaf9204120bed15e7fdc4ff697.webp",
    // TODO: colocar o link real do Instagram
    instagram: "#",
    bio: [
      "Com uma trajetória dedicada à gestão empresarial, crescimento de negócios e aumento da lucratividade, Kelly Zortea já acompanhou mais de 1.000 empresas, conhecendo de perto os desafios de quem empreende.",
      "Hoje, conecta sua experiência em negócios às oportunidades da Inteligência Artificial, mostrando como empresas podem aumentar vendas, otimizar processos e ganhar produtividade com soluções que já existem no mercado.",
      "Sua visão é clara: o empresário não precisa se tornar especialista em tecnologia, mas entender como utilizá-la estrategicamente para fazer seu negócio crescer.",
    ],
  },

  // ===== Depoimento =====
  testimonials: [
    {
      highlight: "Hoje, nossa funcionária de IA continua trabalhando enquanto descansamos.",
      paragraphs: [
        "Quando você descobre o que pode fazer com a inteligência artificial, as coisas mudam muito rápido. Você percebe que existem ferramentas capazes de economizar tempo, ajudar a ganhar dinheiro e executar tarefas que você não gosta de fazer.",
        "A Kelly é especialista em IA e sabe como facilitar nossa vida e liberar nosso tempo. Hoje, dormimos e descansamos enquanto nossa funcionária de IA continua trabalhando.",
      ],
      name: "Ricardo Farias",
      source: "Via Filtros",
    },
    {
      highlight: "Eu queria manter um atendimento humanizado. Fui surpreendida.",
      paragraphs: [
        "Quando a Kelly me mostrou como usar a inteligência artificial na minha clínica, tudo mudou. Eu era bastante cética, porque queria manter um atendimento humanizado. Não queria robôs: queria que as mães fossem acolhidas, mantendo nosso padrão de atendimento.",
        "Fui surpreendida. Hoje, nosso atendimento continua humanizado, e consegui liberar tempo tanto para minha secretária quanto para mim. Admiro muito o trabalho da Kelly.",
      ],
      name: "Guaciara Fornaciari",
      source: "Guaciara Instituto de Fonoaudiologia",
    },
    {
      highlight: "Sempre procurando entender o processo e o momento da empresa.",
      paragraphs: [
        "Gostaria de agradecer a grande contribuição trazida em todas as reuniões, sempre procurando entender o processo e o momento em que a empresa se encontra.",
      ],
      name: "Carlos Frederico Annunciação",
      source: "recomendação publicada no LinkedIn",
    },
  ],

  // ===== FAQ =====
  // Respostas marcadas com TODO foram redigidas a partir do material, mas precisam de confirmação.
  faq: [
    {
      question: "Quanto tempo dura e como funciona a noite?",
      answer: "O credenciamento começa às 18h e o encerramento está previsto para depois das 21h10. São blocos de conteúdo, uma conta feita com os números da sua empresa, demonstrações ao vivo de IA no WhatsApp, um intervalo para café e networking e um plano de 30 dias.",
    },
    {
      question: "Como recebo o ingresso?",
      answer: "Após a confirmação do pagamento, o ingresso digital com QR Code é enviado por WhatsApp e e-mail. No dia, é só apresentar o QR Code no credenciamento.",
    },
    {
      question: "Posso levar meu sócio ou alguém da equipe?",
      answer: "Pode, e é uma ótima ideia. Na compra, basta escolher a quantidade de ingressos e informar o nome completo de cada participante, um por linha.",
    },
    {
      question: "E se eu não puder ir?",
      answer: "Você está coberto pela garantia. Até 3 dias antes do evento (2 de novembro), é só avisar a organização pelo WhatsApp informado na sua compra e você recebe 100% do valor de volta, sem precisar explicar o motivo.",
    },
    {
      // TODO: confirmar se é necessário levar algo
      question: "Preciso levar notebook?",
      answer: "Não é necessário. O celular basta. Vale ter em mente alguns números da sua empresa, como orçamentos enviados por mês e ticket médio, para fazer a conta durante a noite.",
    },
    {
      question: "Preciso entender de tecnologia?",
      answer: "Não. O encontro é sem aulas de programação, sem complicações técnicas e sem precisar desenvolver suas próprias ferramentas. O foco é o que a IA pode fazer pelo seu negócio.",
    },
    {
      question: "Vai ter venda de alguma coisa no final?",
      answer: "No encerramento, há a apresentação de possibilidades de implementação com apoio especializado, para quem quiser ajuda para colocar as soluções em prática. A participação no evento não depende de nenhuma compra adicional.",
    },
    {
      question: "Minha empresa é pequena. Vale a pena?",
      answer: "Sim. Um dos blocos da noite é justamente sobre onde a IA entra na gestão de uma pequena empresa: o que ela já faz bem, o que ainda não faz e o que serve para o seu negócio.",
    },
  ],

  // ===== Rodapé =====
  footerLine: "IA para Gestores · Presencial · Quinta-feira, 5 de novembro",
};
