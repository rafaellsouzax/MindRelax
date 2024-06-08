// Função para obter a resposta do bot com base na entrada do usuário
function getBotResponse(userInput) {
    // Converta a entrada do usuário em minúsculas e remova espaços em branco para facilitar a comparação
    userInput = userInput.toLowerCase().trim();

    // Lista de respostas possíveis com base na entrada do usuário
    var responses = {
        "olá": "Olá! Como posso ajudar você?",
        "como você está?": "Estou bem, obrigado por perguntar!",
        "o que é o mindrelax?": "O MindRelax é uma plataforma dedicada ao bem-estar mental, oferecendo recursos e ferramentas para ajudar você a relaxar e encontrar equilíbrio na vida.",
        "obrigado": "De nada! Estou aqui para ajudar.",
        "adeus": "Até mais! Se precisar de mais alguma coisa, estarei por aqui.",
        "estou com ansiedade": "Sei que enfrentar a ansiedade pode ser desafiador, mas estou aqui para ajudar. Assim como outras pessoas, como Ana e Felipe, que superaram seus problemas de ansiedade, você também pode encontrar maneiras eficazes de lidar com isso. Vamos trabalhar juntos para desenvolver estratégias personalizadas e alcançar seu bem-estar emocional.",
        "tenho dificuldade para dormir": "A insônia pode ser bastante frustrante. Vamos explorar algumas técnicas de relaxamento, como meditação guiada, respiração profunda e criar uma rotina de sono saudável para ajudar você a ter uma boa noite de sono.",
        "como posso aliviar o estresse?": "Existem várias maneiras de aliviar o estresse, como praticar exercícios físicos, meditação, hobbies relaxantes, passar tempo com amigos e familiares, e estabelecer limites saudáveis. Vamos encontrar o que funciona melhor para você!",
        "como posso melhorar minha concentração?": "Melhorar a concentração requer prática e algumas estratégias. Tente eliminar distrações, estabelecer metas claras, praticar a técnica pomodoro e fazer pausas regulares para descansar e recarregar sua energia.",
    "como lidar com a pressão no trabalho?": "A pressão no trabalho pode ser desafiadora, mas algumas estratégias podem ajudar. Certifique-se de que está organizado, defina prioridades claras, comunique-se eficazmente com sua equipe e não hesite em pedir ajuda quando necessário.",
    "como posso melhorar minha autoestima?": "A autoestima pode ser cultivada com práticas regulares de autocuidado, como alimentação saudável, exercícios físicos, hobbies que você goste, cercar-se de pessoas positivas e desafiar pensamentos negativos sobre si mesmo.","como posso melhorar meu relacionamento interpessoal?": "Relacionamentos interpessoais saudáveis são fundamentais para o bem-estar emocional. Pratique a escuta ativa, seja empático, respeitoso e genuinamente interessado nas outras pessoas. Comunique-se de forma clara e aberta e esteja disposto a resolver conflitos de forma construtiva.",
    "como posso lidar com o estresse escolar?": "O estresse escolar é comum, mas existem maneiras de lidar com isso. Certifique-se de manter uma rotina equilibrada, estabeleça metas realistas, pratique técnicas de gerenciamento do tempo e não hesite em pedir ajuda quando necessário.",
    "o que devo fazer se estiver sendo intimidado na escola?": "Se estiver sendo intimidado na escola, é importante falar com um adulto de confiança, como um professor, conselheiro escolar ou seus pais. Eles podem ajudar a resolver a situação e garantir um ambiente seguro para você.",
    // Outras perguntas
    "como posso me motivar a estudar mais?": "Encontrar motivação para estudar pode ser desafiador, mas estabelecer metas claras, criar um ambiente de estudo positivo, praticar técnicas de organização e recompensar-se pelo progresso podem ajudar a aumentar sua motivação.",
    "o que devo fazer se estiver me sentindo solitário?": "Se estiver se sentindo solitário, tente se conectar com outras pessoas, participar de atividades sociais, praticar hobbies que você goste e considerar conversar com um amigo próximo, membro da família ou conselheiro escolar sobre seus sentimentos.",
    // Perguntas sobre os pais
    "como posso me comunicar melhor com meus pais?": "Comunicar-se com os pais pode ser desafiador, mas é importante expressar seus sentimentos e preocupações de forma clara e respeitosa. Tente escolher o momento certo para conversar, ouvir atentamente o ponto de vista deles e buscar compromissos.",
    "o que devo fazer se tiver problemas com meus pais?": "Se estiver enfrentando problemas com seus pais, é importante buscar ajuda e suporte. Considere conversar com um adulto de confiança, como um professor, conselheiro escolar ou outro membro da família. Eles podem oferecer orientação e apoio.",    // Perguntas sobre o chatbot
    "quem é você?": "Eu sou o MindRelax, sua psicóloga virtual. Estou aqui para fornecer apoio emocional, oferecer dicas de bem-estar mental e responder às suas perguntas.",
    "o que você faz?": "Como psicóloga virtual, estou aqui para ajudar você a lidar com questões emocionais, fornecer suporte e orientação, oferecer estratégias para lidar com o estresse e promover o bem-estar mental.",
    "como você funciona?": "Eu funciono usando algoritmos e programação para entender suas perguntas e fornecer respostas relevantes com base em uma base de conhecimento pré-definida.",
    "você é humano?": "Não, eu sou um programa de computador desenvolvido para fornecer suporte psicológico e interações conversacionais.",
    // Perguntas sobre tópicos gerais
    "o que é ansiedade?": "A ansiedade é uma resposta natural do corpo ao estresse, mas quando se torna excessiva ou persistente, pode interferir no funcionamento diário e no bem-estar emocional.",
    "como posso lidar com a tristeza?": "Lidar com a tristeza pode ser desafiador, mas estratégias como expressar emoções, buscar apoio social, praticar autocuidado e buscar ajuda profissional podem ajudar.",
    "o que é meditação?": "A meditação é uma prática que envolve focar a mente em um objeto, pensamento ou atividade para alcançar clareza mental, relaxamento e bem-estar emocional.",
    "qual a importância do autocuidado?": "O autocuidado é essencial para manter a saúde mental e emocional. Envolve práticas como alimentação saudável, exercícios físicos, sono adequado, gerenciamento do estresse e busca por atividades que tragam prazer e relaxamento.",
    // Perguntas sobre recursos
    "onde posso encontrar recursos sobre saúde mental?": "Existem muitos recursos disponíveis online, incluindo sites, aplicativos, vídeos e artigos, que fornecem informações e suporte sobre saúde mental. Além disso, profissionais de saúde mental, como psicólogos e terapeutas, também podem oferecer suporte.",
    "você tem alguma recomendação de livro sobre bem-estar?": "Sim, existem muitos livros excelentes sobre bem-estar e saúde mental. Alguns títulos populares incluem 'O Poder do Agora' de Eckhart Tolle, 'A Coragem de Ser Imperfeito' de Brené Brown e 'Felicidade Genuína' de Alan Wallace.",
    // Outras perguntas
    "qual é o sentido da vida?": "O sentido da vida é uma questão complexa e pessoal, e a resposta pode variar de pessoa para pessoa. Algumas pessoas encontram significado em conexões interpessoais, outras em objetivos pessoais ou espirituais. Refletir sobre seus valores, objetivos e relacionamentos pode ajudá-lo a descobrir seu próprio sentido de propósito.",
    "o que é felicidade?": "A felicidade é um estado emocional de contentamento, satisfação e bem-estar geral. Embora possa ser influenciada por circunstâncias externas, a verdadeira felicidade muitas vezes vem de dentro e está relacionada com uma sensação de propósito, significado e conexão com os outros.",
    // Adicione mais respostas aqui, se necessário
    //religão
    "Eu posso praticar mais de uma religião ao mesmo tempo?":"Praticar mais de uma religião ao mesmo tempo pode ser uma jornada espiritual única para algumas pessoas. No entanto, é importante considerar como isso pode afetar sua prática espiritual e sua compreensão das crenças e práticas de cada religião. Converse com líderes religiosos ou pessoas de confiança para obter orientação.",
    "Eu posso escolher não seguir nenhuma religião?":"Sim, você pode escolher não seguir nenhuma religião. A espiritualidade é uma jornada pessoal e é completamente válido optar por não seguir uma religião organizada. Você pode explorar outras formas de encontrar significado e propósito na vida, como filosofias de vida, práticas de meditação ou simplesmente seguindo seus próprios valores éticos.",
    //namoro
    "Eu posso namorar alguém de outra religião?":"Sim, você pode namorar alguém de outra religião. O amor e o respeito mútuo são fundamentais em qualquer relacionamento. No entanto, é importante estar ciente das diferenças culturais e religiosas e estar aberto ao diálogo e à compreensão mútua.",
    "Eu posso namorar alguém que meus pais não aprovam?":"É normal querer seguir seu coração, mas também é importante considerar as preocupações e perspectivas de seus pais. Tente ter uma conversa aberta e honesta com eles sobre seus sentimentos e ouça suas preocupações com empatia.",
    "Eu posso sair com meus amigos até tarde da noite?":"Sair com amigos até tarde da noite pode ser divertido, mas é importante garantir sua segurança. Certifique-se de ter um plano de transporte seguro e esteja ciente dos perigos potenciais ao sair tarde da noite. Comunique-se com seus pais sobre seus planos e mantenha-os informados.",
    //relacionamentos com os pais
    "Eu posso fazer tatuagens ou piercings sem a permissão dos meus pais?":"Fazer tatuagens ou piercings é uma decisão pessoal, mas é importante considerar os possíveis impactos a longo prazo. Converse com seus pais sobre suas intenções e ouça suas preocupações. Eles podem oferecer insights valiosos que você pode não ter considerado.",
    "Eu posso viajar sozinho(a) para outro país?":"Viajar sozinho para outro país pode ser uma experiência emocionante e enriquecedora, mas também requer planejamento e precaução. Certifique-se de pesquisar o destino, tomar medidas de segurança adequadas e informar seus pais sobre seus planos de viagem.",
    //filmes maiores de 18
    "Eu posso assistir a filmes ou séries com classificação indicativa para idade superior à minha?":"Assistir a filmes ou séries com classificação indicativa para idade superior à sua é uma decisão pessoal, mas é importante estar ciente do conteúdo e dos possíveis impactos. Considere assistir com a família ou amigos e discutir os temas abordados.",
    "Eu posso mudar de curso na faculdade sem consultar meus pais?":"Mudar de curso na faculdade é uma decisão importante que pode afetar seu futuro. É recomendável discutir suas razões para a mudança com um orientador acadêmico ou conselheiro para garantir que seja a escolha certa para você.",
    "É aceitável fazer tarefas domésticas apenas quando meus pais pedem?":"É importante encontrar um equilíbrio saudável entre suas responsabilidades domésticas e sua autonomia. É uma boa ideia ajudar em casa sem que seus pais precisem pedir, pois isso demonstra responsabilidade e ajuda a fortalecer os laços familiares.",
    "Posso me matricular em aulas de dança ou música sem o consentimento dos meus pais?":"Buscar interesses como aulas de dança ou música pode ser uma ótima maneira de se expressar e desenvolver habilidades pessoais. Se você está apaixonado por essas atividades, discuta com seus pais sobre como elas podem enriquecer sua vida.",
    "Eu posso participar de atividades extracurriculares que requerem viagens frequentes?":"Participar de atividades extracurriculares com viagens pode ser uma experiência enriquecedora, mas é importante considerar os compromissos familiares e escolares. Conversar com seus pais sobre os benefícios e planejar juntos pode ser uma boa abordagem.",
    "Devo compartilhar todas as minhas atividades diárias com meus pais?":"É natural ter opiniões diferentes dos seus pais em alguns aspectos. O importante é comunicar essas diferenças com respeito e buscar um entendimento mútuo, valorizando a diversidade de perspectivas.",
    "Eu posso casar menor de idade ?":"Desculpe, não é possível casar menor de idade de acordo com a legislação vigente.",
        // Adicione mais respostas aqui, se necessário
        "default": "Desculpe, não entendi. Você pode reformular sua pergunta?"
    };

    // Verifica se há uma resposta correspondente na lista de respostas
    if (responses.hasOwnProperty(userInput)) {
        return responses[userInput];
    } else {
        return responses["default"];
    }
}
function sendUserMessage() {
    var userInput = document.getElementById('userInput').value;
    if (userInput.trim() === '') return;

    var chatBox = document.getElementById('chatBox');
    var userMessageElement = document.createElement('div');
    userMessageElement.className = 'user-message';
    userMessageElement.textContent = userInput;
    chatBox.appendChild(userMessageElement);

    document.getElementById('userInput').value = '';

    // Simulação de resposta do bot após 1 segundo
    setTimeout(function() {
        var botMessageElement = document.createElement('div');
        botMessageElement.className = 'bot-message';
        botMessageElement.textContent = getBotResponse(userInput);
        chatBox.appendChild(botMessageElement);

        // Rola para o final do chat
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

function getBotResponse(userInput) {
    userInput = userInput.toLowerCase().trim();

    var responses = {
        "olá": "Olá! Como posso ajudar você?",
        "como você está?": "Estou bem, obrigado por perguntar!",
        "o que é o mindrelax?": "O MindRelax é uma plataforma dedicada ao bem-estar mental, oferecendo recursos e ferramentas para ajudar você a relaxar e encontrar equilíbrio na vida.",
        "obrigado": "De nada! Estou aqui para ajudar.",
        "adeus": "Até mais! Se precisar de mais alguma coisa, estarei por aqui.",
        "estou com ansiedade": "Sei que enfrentar a ansiedade pode ser desafiador, mas estou aqui para ajudar. Assim como outras pessoas, como Ana e Felipe, que superaram seus problemas de ansiedade, você também pode encontrar maneiras eficazes de lidar com isso. Vamos trabalhar juntos para desenvolver estratégias personalizadas e alcançar seu bem-estar emocional.",
        "tenho dificuldade para dormir": "A insônia pode ser bastante frustrante. Vamos explorar algumas técnicas de relaxamento, como meditação guiada, respiração profunda e criar uma rotina de sono saudável para ajudar você a ter uma boa noite de sono.",
        "como posso aliviar o estresse?": "Existem várias maneiras de aliviar o estresse, como praticar exercícios físicos, meditação, hobbies relaxantes, passar tempo com amigos e familiares, e estabelecer limites saudáveis. Vamos encontrar o que funciona melhor para você!","como posso melhorar minha concentração?": "Melhorar a concentração requer prática e algumas estratégias. Tente eliminar distrações, estabelecer metas claras, praticar a técnica pomodoro e fazer pausas regulares para descansar e recarregar sua energia.",
    "como lidar com a pressão no trabalho?": "A pressão no trabalho pode ser desafiadora, mas algumas estratégias podem ajudar. Certifique-se de que está organizado, defina prioridades claras, comunique-se eficazmente com sua equipe e não hesite em pedir ajuda quando necessário.",
    "como posso melhorar minha autoestima?": "A autoestima pode ser cultivada com práticas regulares de autocuidado, como alimentação saudável, exercícios físicos, hobbies que você goste, cercar-se de pessoas positivas e desafiar pensamentos negativos sobre si mesmo.","como posso melhorar meu relacionamento interpessoal?": "Relacionamentos interpessoais saudáveis são fundamentais para o bem-estar emocional. Pratique a escuta ativa, seja empático, respeitoso e genuinamente interessado nas outras pessoas. Comunique-se de forma clara e aberta e esteja disposto a resolver conflitos de forma construtiva.",
    "como posso lidar com o estresse escolar?": "O estresse escolar é comum, mas existem maneiras de lidar com isso. Certifique-se de manter uma rotina equilibrada, estabeleça metas realistas, pratique técnicas de gerenciamento do tempo e não hesite em pedir ajuda quando necessário.",
    "o que devo fazer se estiver sendo intimidado na escola?": "Se estiver sendo intimidado na escola, é importante falar com um adulto de confiança, como um professor, conselheiro escolar ou seus pais. Eles podem ajudar a resolver a situação e garantir um ambiente seguro para você.",
    // Outras perguntas
    "como posso me motivar a estudar mais?": "Encontrar motivação para estudar pode ser desafiador, mas estabelecer metas claras, criar um ambiente de estudo positivo, praticar técnicas de organização e recompensar-se pelo progresso podem ajudar a aumentar sua motivação.",
    "o que devo fazer se estiver me sentindo solitário?": "Se estiver se sentindo solitário, tente se conectar com outras pessoas, participar de atividades sociais, praticar hobbies que você goste e considerar conversar com um amigo próximo, membro da família ou conselheiro escolar sobre seus sentimentos.",
    // Perguntas sobre os pais
    "como posso me comunicar melhor com meus pais?": "Comunicar-se com os pais pode ser desafiador, mas é importante expressar seus sentimentos e preocupações de forma clara e respeitosa. Tente escolher o momento certo para conversar, ouvir atentamente o ponto de vista deles e buscar compromissos.",
    "o que devo fazer se tiver problemas com meus pais?": "Se estiver enfrentando problemas com seus pais, é importante buscar ajuda e suporte. Considere conversar com um adulto de confiança, como um professor, conselheiro escolar ou outro membro da família. Eles podem oferecer orientação e apoio.",    // Perguntas sobre o chatbot
    "quem é você?": "Eu sou o MindRelax, sua psicóloga virtual. Estou aqui para fornecer apoio emocional, oferecer dicas de bem-estar mental e responder às suas perguntas.",
    "o que você faz?": "Como psicóloga virtual, estou aqui para ajudar você a lidar com questões emocionais, fornecer suporte e orientação, oferecer estratégias para lidar com o estresse e promover o bem-estar mental.",
    "como você funciona?": "Eu funciono usando algoritmos e programação para entender suas perguntas e fornecer respostas relevantes com base em uma base de conhecimento pré-definida.",
    "você é humano?": "Não, eu sou um programa de computador desenvolvido para fornecer suporte psicológico e interações conversacionais.",
    // Perguntas sobre tópicos gerais
    "o que é ansiedade?": "A ansiedade é uma resposta natural do corpo ao estresse, mas quando se torna excessiva ou persistente, pode interferir no funcionamento diário e no bem-estar emocional.",
    "como posso lidar com a tristeza?": "Lidar com a tristeza pode ser desafiador, mas estratégias como expressar emoções, buscar apoio social, praticar autocuidado e buscar ajuda profissional podem ajudar.",
    "o que é meditação?": "A meditação é uma prática que envolve focar a mente em um objeto, pensamento ou atividade para alcançar clareza mental, relaxamento e bem-estar emocional.",
    "qual a importância do autocuidado?": "O autocuidado é essencial para manter a saúde mental e emocional. Envolve práticas como alimentação saudável, exercícios físicos, sono adequado, gerenciamento do estresse e busca por atividades que tragam prazer e relaxamento.",
    // Perguntas sobre recursos
    "onde posso encontrar recursos sobre saúde mental?": "Existem muitos recursos disponíveis online, incluindo sites, aplicativos, vídeos e artigos, que fornecem informações e suporte sobre saúde mental. Além disso, profissionais de saúde mental, como psicólogos e terapeutas, também podem oferecer suporte.",
    "você tem alguma recomendação de livro sobre bem-estar?": "Sim, existem muitos livros excelentes sobre bem-estar e saúde mental. Alguns títulos populares incluem 'O Poder do Agora' de Eckhart Tolle, 'A Coragem de Ser Imperfeito' de Brené Brown e 'Felicidade Genuína' de Alan Wallace.",
    // Outras perguntas
    "qual é o sentido da vida?": "O sentido da vida é uma questão complexa e pessoal, e a resposta pode variar de pessoa para pessoa. Algumas pessoas encontram significado em conexões interpessoais, outras em objetivos pessoais ou espirituais. Refletir sobre seus valores, objetivos e relacionamentos pode ajudá-lo a descobrir seu próprio sentido de propósito.",
    "o que é felicidade?": "A felicidade é um estado emocional de contentamento, satisfação e bem-estar geral. Embora possa ser influenciada por circunstâncias externas, a verdadeira felicidade muitas vezes vem de dentro e está relacionada com uma sensação de propósito, significado e conexão com os outros.",
    // Adicione mais respostas aqui, se necessário
    //religão
    "Eu posso praticar mais de uma religião ao mesmo tempo?":"Praticar mais de uma religião ao mesmo tempo pode ser uma jornada espiritual única para algumas pessoas. No entanto, é importante considerar como isso pode afetar sua prática espiritual e sua compreensão das crenças e práticas de cada religião. Converse com líderes religiosos ou pessoas de confiança para obter orientação.",
    "Eu posso escolher não seguir nenhuma religião?":"Sim, você pode escolher não seguir nenhuma religião. A espiritualidade é uma jornada pessoal e é completamente válido optar por não seguir uma religião organizada. Você pode explorar outras formas de encontrar significado e propósito na vida, como filosofias de vida, práticas de meditação ou simplesmente seguindo seus próprios valores éticos.",
    //namoro
    "Eu posso namorar alguém de outra religião?":"Sim, você pode namorar alguém de outra religião. O amor e o respeito mútuo são fundamentais em qualquer relacionamento. No entanto, é importante estar ciente das diferenças culturais e religiosas e estar aberto ao diálogo e à compreensão mútua.",
    "Eu posso namorar alguém que meus pais não aprovam?":"É normal querer seguir seu coração, mas também é importante considerar as preocupações e perspectivas de seus pais. Tente ter uma conversa aberta e honesta com eles sobre seus sentimentos e ouça suas preocupações com empatia.",
    "Eu posso sair com meus amigos até tarde da noite?":"Sair com amigos até tarde da noite pode ser divertido, mas é importante garantir sua segurança. Certifique-se de ter um plano de transporte seguro e esteja ciente dos perigos potenciais ao sair tarde da noite. Comunique-se com seus pais sobre seus planos e mantenha-os informados.",
    //relacionamentos com os pais
    "Eu posso fazer tatuagens ou piercings sem a permissão dos meus pais?":"Fazer tatuagens ou piercings é uma decisão pessoal, mas é importante considerar os possíveis impactos a longo prazo. Converse com seus pais sobre suas intenções e ouça suas preocupações. Eles podem oferecer insights valiosos que você pode não ter considerado.",
    "Eu posso viajar sozinho(a) para outro país?":"Viajar sozinho para outro país pode ser uma experiência emocionante e enriquecedora, mas também requer planejamento e precaução. Certifique-se de pesquisar o destino, tomar medidas de segurança adequadas e informar seus pais sobre seus planos de viagem.",
    //filmes maiores de 18
    "Eu posso assistir a filmes ou séries com classificação indicativa para idade superior à minha?":"Assistir a filmes ou séries com classificação indicativa para idade superior à sua é uma decisão pessoal, mas é importante estar ciente do conteúdo e dos possíveis impactos. Considere assistir com a família ou amigos e discutir os temas abordados.",
    "Eu posso mudar de curso na faculdade sem consultar meus pais?":"Mudar de curso na faculdade é uma decisão importante que pode afetar seu futuro. É recomendável discutir suas razões para a mudança com um orientador acadêmico ou conselheiro para garantir que seja a escolha certa para você.",
    "É aceitável fazer tarefas domésticas apenas quando meus pais pedem?":"É importante encontrar um equilíbrio saudável entre suas responsabilidades domésticas e sua autonomia. É uma boa ideia ajudar em casa sem que seus pais precisem pedir, pois isso demonstra responsabilidade e ajuda a fortalecer os laços familiares.",
    "Posso me matricular em aulas de dança ou música sem o consentimento dos meus pais?":"Buscar interesses como aulas de dança ou música pode ser uma ótima maneira de se expressar e desenvolver habilidades pessoais. Se você está apaixonado por essas atividades, discuta com seus pais sobre como elas podem enriquecer sua vida.",
    "Eu posso participar de atividades extracurriculares que requerem viagens frequentes?":"Participar de atividades extracurriculares com viagens pode ser uma experiência enriquecedora, mas é importante considerar os compromissos familiares e escolares. Conversar com seus pais sobre os benefícios e planejar juntos pode ser uma boa abordagem.",
    "Devo compartilhar todas as minhas atividades diárias com meus pais?":"É natural ter opiniões diferentes dos seus pais em alguns aspectos. O importante é comunicar essas diferenças com respeito e buscar um entendimento mútuo, valorizando a diversidade de perspectivas.",
    "Eu posso casar menor de idade ?":"Desculpe, não é possível casar menor de idade de acordo com a legislação vigente.",
        
    };

    if (responses.hasOwnProperty(userInput)) {
        return responses[userInput];
    } else {
        return responses["default"];
    }
}

function submitQuiz() {
    var quizForm = document.getElementById('quizForm');
    var formData = new FormData(quizForm);
    var score = 0;
    for (var value of formData.values()) {
        score += parseInt(value);
    }

    var resultMessage = '';
    if (score <= 4) {
        resultMessage = 'Seu nível de ansiedade parece estar sob controle.';
    } else if (score <= 8) {
        resultMessage = 'Você pode estar experimentando um pouco de ansiedade. Vamos conversar para ajudar a melhorar isso.';
    } else {
        resultMessage = 'Parece que você está enfrentando um alto nível de ansiedade. Estou aqui para ajudar você a encontrar maneiras de lidar com isso.';
    }

    alert(resultMessage);

    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('chatbotContainer').style.display = 'block';

    var chatBox = document.getElementById('chatBox');
    var botMessageElement = document.createElement('div');
    botMessageElement.className = 'bot-message';
    botMessageElement.textContent = resultMessage;
    chatBox.appendChild(botMessageElement);
}

document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendUserMessage();
    }
});

window.onload = function() {
    var introText = document.getElementById('introText');
    setTimeout(function() {
        introText.classList.add('fade-out');

        // Exibe o quiz após a animação de boas-vindas
        setTimeout(function() {
            document.getElementById('quizContainer').style.display = 'block';
            introText.style.display = 'none';
        }, 1000); // Exibe o quiz após 1 segundo
    }, 3000); // Desaparece após 3 segundos
}



