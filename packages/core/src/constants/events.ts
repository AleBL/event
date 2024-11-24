import { Event } from '../event'

const events: Event[] = [
    {
        id: "b3d05d8c-df47-48e8-b1ff-45047b93f597",
        alias: 'evento-fullstack',
        password: 'senha123',
        name: 'Evento de Desenvolvimento Fullstack',
        date: new Date('2024-12-01T10:00:00Z'),
        local: 'São Paulo, SP',
        description:
            'Um evento completo para aprender desenvolvimento fullstack do zero.',
        image: 'https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk',
        imageBackground:
            'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
        expectedAudience: 200,
        quests: [
            {
                id: "d8c81b16-06cb-4eaa-b7f7-405a4a91083a",
                name: 'Alice Silva',
                email: 'alice@example.com',
                confirmed: true,
                hasCompanions: true,
                countCompanions: 1,
            },
            {
                id: "a7ffa3de-9874-4216-b435-da05a816d3ef",
                name: 'Carlos Pereira',
                email: 'carlos@example.com',
                confirmed: false,
                hasCompanions: false,
                countCompanions: 0,
            },
            {
                id: "5b22441a-6341-4d9d-8132-ed121eaf70bd",
                name: 'Beatriz Lima',
                email: 'beatriz@example.com',
                confirmed: true,
                hasCompanions: true,
                countCompanions: 2,
            },
        ],
    },
    {
        id: "ab4bb11c-820b-4d8b-86a4-c3027be9e628",
        alias: 'evento-js-avancado',
        password: 'js2024',
        name: 'Workshop Avançado de JavaScript',
        date: new Date('2024-11-20T15:00:00Z'),
        local: 'Rio de Janeiro, RJ',
        description: 'Um workshop avançado para programadores JavaScript.',
        image: 'https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200',
        imageBackground:
            'https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg',
        expectedAudience: 100,
        quests: [
            {
                id: "3f806c82-b179-423d-9aef-4037a530403a",
                name: 'Eduardo Santos',
                email: 'eduardo@example.com',
                confirmed: true,
                hasCompanions: false,
                countCompanions: 0,
            },
            {
                id: "503a2255-afed-4b4b-9af7-9cf8f50d813a",
                name: 'Fernanda Costa',
                email: 'fernanda@example.com',
                confirmed: true,
                hasCompanions: true,
                countCompanions: 1,
            },
        ],
    },
    {
        id: "6fe680e9-d438-4600-9a73-81b29eb368fc",
        alias: 'evento-dev-frontend',
        password: 'front123',
        name: 'Bootcamp de Desenvolvimento Frontend',
        date: new Date('2024-11-15T09:00:00Z'),
        local: 'Belo Horizonte, MG',
        description: 'Aprenda a criar interfaces incríveis e responsivas.',
        image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg',
        imageBackground:
            'https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg',
        expectedAudience: 150,
        quests: [
            {
                id: "1f8512b2-97ac-4aea-8f8c-702e7d3a43f2",
                name: 'Gabriela Rocha',
                email: 'gabriela@example.com',
                confirmed: true,
                hasCompanions: true,
                countCompanions: 1,
            },
            {
                id: "9addbc5a-99a4-4a4a-b9ac-c04b680752f8",
                name: 'Hugo Nogueira',
                email: 'hugo@example.com',
                confirmed: false,
                hasCompanions: false,
                countCompanions: 0,
            },
            {
                id: "b6e623bc-545c-490f-845e-552ef40409d6",
                name: 'Isabela Martins',
                email: 'isabela@example.com',
                confirmed: true,
                hasCompanions: false,
                countCompanions: 0,
            },
        ],
    },
    {
        id: "ea9960ec-9141-4267-9fbc-a9344b31f55f",
        alias: 'casamento-alberto-marina',
        password: 'casamento2024',
        name: 'Casamento do Alberto e Marina',
        date: new Date('2024-11-25T16:00:00Z'),
        local: 'Florianópolis, SC',
        description:
            'Celebração do casamento de Alberto e Marina com amigos e familiares.',
        image: 'https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg',
        imageBackground:
            'https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg',
        expectedAudience: 150,
        quests: [
            {
                id: "d9966f94-87d3-4362-a02f-b7bf57c31030",
                name: 'Bruno Cardoso',
                email: 'bruno@example.com',
                confirmed: true,
                hasCompanions: true,
                countCompanions: 1,
            },
            {
                id: "e86b4e29-0323-48f9-9d07-66b7e98caeaa",
                name: 'Carla Mendes',
                email: 'carla@example.com',
                confirmed: true,
                hasCompanions: false,
                countCompanions: 0,
            },
        ],
    },
    {
        id: "68708d83-0e08-4ce9-accf-d02128ca7f40",
        alias: 'aniversario-joao',
        password: 'joao2024',
        name: 'Aniversário do João - 30 Anos',
        date: new Date('2024-12-05T18:00:00Z'),
        local: 'Curitiba, PR',
        description:
            'Comemoração dos 30 anos de João com amigos próximos e familiares.',
        image: 'https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg',
        imageBackground:
            'https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg',
        expectedAudience: 80,
        quests: [
            {
                id: "6872c076-5c84-499c-bb3e-eedb95bcfe6b",
                name: 'Maria Souza',
                email: 'maria@example.com',
                confirmed: true,
                hasCompanions: true,
                countCompanions: 2,
            },
            {
                id: "56589b05-2fec-4256-88a4-795ed2a5d0a6",
                name: 'José Almeida',
                email: 'jose@example.com',
                confirmed: false,
                hasCompanions: false,
                countCompanions: 0,
            },
        ],
    },
    {
        id: "f8f22297-0878-435b-b4fe-b813181b43f1",
        alias: 'inauguracao-loja-estrela',
        password: 'estrela2024',
        name: 'Inauguração da Loja Estrela',
        date: new Date('2024-12-10T09:00:00Z'),
        local: 'Porto Alegre, RS',
        description:
            'Evento de inauguração da nova loja Estrela com brindes e promoções.',
        image: 'https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png',
        imageBackground:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s',
        expectedAudience: 300,
        quests: [
            {
                id: "778bb05d-678e-4da9-a66e-e06f4d2d11f1",
                name: 'Cláudia Lima',
                email: 'claudia@example.com',
                confirmed: true,
                hasCompanions: true,
                countCompanions: 3,
            },
            {
                id: "1951a783-b087-4cce-ae54-281084b5c821",
                name: 'Ricardo Barbosa',
                email: 'ricardo@example.com',
                confirmed: true,
                hasCompanions: false,
                countCompanions: 0,
            },
        ],
    },
    {
        id: "90cefb61-0100-4bbe-9776-329b4edabc70",
        alias: 'reuniao-familia-oliveira',
        password: 'familia2024',
        name: 'Reunião da Família Oliveira',
        date: new Date('2024-12-15T12:00:00Z'),
        local: 'Salvador, BA',
        description: 'Reunião de fim de ano da família Oliveira.',
        image: 'https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg',
        imageBackground:
            'https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid',
        expectedAudience: 50,
        quests: [
            {
                id: "d4ded1af-55a7-4a09-94fb-b7653cf64868",
                name: 'Thiago Oliveira',
                email: 'thiago@example.com',
                confirmed: true,
                hasCompanions: true,
                countCompanions: 4,
            },
            {
                id: "76fe6974-f0ad-447f-9bb6-78a4cd33a9c2",
                name: 'Letícia Oliveira',
                email: 'leticia@example.com',
                confirmed: true,
                hasCompanions: false,
                countCompanions: 0,
            },
        ],
    },
]

export default events

