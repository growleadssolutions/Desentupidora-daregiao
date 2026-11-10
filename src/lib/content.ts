export const company = { name: 'Desentupidora da Região', phone: '(41) 99836-6785', landline: '(41) 3252-2314', whatsapp: '5541998366785' };
export const message = 'Olá! Encontrei a Desentupidora da Região pelo site e gostaria de solicitar um orçamento.';
export const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
export const services = [
  { slug: 'desentupimento-de-pia', title: 'Desentupimento de pia', description: 'Atendimento para pias e lavatórios com dificuldade de escoamento.', detail: 'A água da pia não está escoando? Conte à equipe onde está o entupimento e o que você percebeu para solicitar um orçamento.' },
  { slug: 'desentupimento-de-vaso-sanitario', title: 'Desentupimento de vaso sanitário', description: 'Desobstrução de vasos sanitários em residências e estabelecimentos.', detail: 'Informe se a água está subindo ou se a descarga não está escoando. A equipe orientará os próximos passos para o atendimento.' },
  { slug: 'desentupimento-de-ralo', title: 'Desentupimento de ralo', description: 'Serviço para ralos entupidos e pontos de drenagem.', detail: 'Indique em qual ambiente está o ralo e como o problema se apresenta. Essas informações ajudam na solicitação do orçamento.' },
  { slug: 'desentupimento-de-esgoto', title: 'Desentupimento de esgoto', description: 'Desentupimento de tubulações de esgoto e redes pluviais.', detail: 'Relate os pontos afetados e informe o tipo de imóvel para conversar com a equipe sobre o serviço de desentupimento de esgoto.' },
  { slug: 'limpeza-de-caixa-de-gordura', title: 'Limpeza de caixa de gordura', description: 'Limpeza de caixas de gordura, incluindo limpeza manual residencial.', detail: 'Informe a localização da caixa de gordura e as condições de acesso para solicitar o orçamento de limpeza.' },
  { slug: 'hidrojateamento', title: 'Hidrojateamento', description: 'Desentupimento com jatos de água de alta pressão.', detail: 'Converse com a equipe sobre o problema na tubulação para verificar a aplicação do hidrojateamento no seu caso.' },
];
export const faqs = [
 ['A Desentupidora da Região atende 24 horas?', 'Sim. A empresa informa atendimento 24 horas, incluindo sábados, domingos e feriados. Entre em contato para combinar o atendimento.'],
 ['Quais serviços de desentupimento são realizados?', 'São realizados desentupimentos de pias, vasos sanitários, ralos e esgotos, além de limpeza de caixa de gordura e hidrojateamento.'],
 ['A empresa atende Curitiba e Região Metropolitana?', 'Sim. A cobertura informada inclui todos os bairros de Curitiba e a Região Metropolitana. Informe seu bairro ou município pelo WhatsApp para combinar o atendimento.'],
 ['Como solicitar um orçamento?', 'Clique em um dos botões de WhatsApp, explique o problema e informe a localização do imóvel. Combine os próximos passos diretamente com a equipe.'],
 ['A empresa realiza desentupimento residencial e comercial?', 'Sim. A Desentupidora da Região atende residências, comércios, indústrias e edifícios.'],
];
