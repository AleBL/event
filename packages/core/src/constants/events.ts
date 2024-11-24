import { Event } from '../event'

const events: Event[] = [
    {
        id: "nvydj48ooz8-tdudqu2bqbb-3a6ifnb56o6",
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
                id: "w874k77gbms-9cd456cqgql-cw7exv2ukpr",
                name: 'Alice Silva',
                email: 'alice@example.com',
                confirmed: true,
                hasCompanions: true,
                countCompanions: 1,
            },
            {
                id: "z89aao6ea3-axeqs72otyg-zlc50wawv3k",
                name: 'Carlos Pereira',
                email: 'carlos@example.com',
                confirmed: false,
                hasCompanions: false,
                countCompanions: 0,
            },
            {
                id: "h3m7jfva92s-qx63zhom3g-nmjyrlc1tfg",
                name: 'Beatriz Lima',
                email: 'beatriz@example.com',
                confirmed: true,
                hasCompanions: true,
                countCompanions: 2,
            },
        ],
    },
    {
        id: "fwmzhk1jqs-gwmxquiscav-1cyg5u5907t",
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
                id: "7cyqc0twz5y-2sucbf0jovs-cpbekkfakli",
                name: 'Eduardo Santos',
                email: 'eduardo@example.com',
                confirmed: true,
                hasCompanions: false,
                countCompanions: 0,
            },
            {
                id: "i7pkqxaf13r-kyrsd8mfgq-uu6sr90jb3i",
                name: 'Fernanda Costa',
                email: 'fernanda@example.com',
                confirmed: true,
                hasCompanions: true,
                countCompanions: 1,
            },
        ],
    },
    {
        id: "9crb9co4qxh-5ntkvcbhqyp-e1d746316j8",
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
                id: "wimzd9s57y-pkj9lukq81g-g1d7kuvgysi",
                name: 'Gabriela Rocha',
                email: 'gabriela@example.com',
                confirmed: true,
                hasCompanions: true,
                countCompanions: 1,
            },
            {
                id: "t8yojwi43-pmpicwmn9ye-80rcxt87b4v",
                name: 'Hugo Nogueira',
                email: 'hugo@example.com',
                confirmed: false,
                hasCompanions: false,
                countCompanions: 0,
            },
            {
                id: "04t2c7sb4hzi-ckgsgi5zbee-989zx2lmhj7",
                name: 'Isabela Martins',
                email: 'isabela@example.com',
                confirmed: true,
                hasCompanions: false,
                countCompanions: 0,
            },
        ],
    },
    {
        id: "59vgq7gwuv4-vi16qe00ain-opskpwwenp8",
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
                id: "gwimrh11z2p-6t1dscgq9uf-t58g79fmty",
                name: 'Bruno Cardoso',
                email: 'bruno@example.com',
                confirmed: true,
                hasCompanions: true,
                countCompanions: 1,
            },
            {
                id: "hezaz9aecka-i05euzpor7-816019rrczc",
                name: 'Carla Mendes',
                email: 'carla@example.com',
                confirmed: true,
                hasCompanions: false,
                countCompanions: 0,
            },
        ],
    },
    {
        id: "0mxwskp9gkub-q1k52kymqnm-bmdljhon2vq",
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
                id: "l7arz1zdgxf-yhl3qdg9m6f-6tdi4y1klev",
                name: 'Maria Souza',
                email: 'maria@example.com',
                confirmed: true,
                hasCompanions: true,
                countCompanions: 2,
            },
            {
                id: "zyfl5l4ex-w9z74n17lj8-c5z3nrzuwxi",
                name: 'José Almeida',
                email: 'jose@example.com',
                confirmed: false,
                hasCompanions: false,
                countCompanions: 0,
            },
        ],
    },
    {
        id: "i4p53wdnonk-6nr41r1hgj-aq0gtnrvv2r",
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
                id: "7h9cnh2gucp-dkini0wk4es-kbgxyr8pv6",
                name: 'Cláudia Lima',
                email: 'claudia@example.com',
                confirmed: true,
                hasCompanions: true,
                countCompanions: 3,
            },
            {
                id: "byffhy9w9-jjys9obnf8c-02nxvar4agi5",
                name: 'Ricardo Barbosa',
                email: 'ricardo@example.com',
                confirmed: true,
                hasCompanions: false,
                countCompanions: 0,
            },
        ],
    },
    {
        id: "occ776n58qr-m9x5mq739j-3c78bvcsuk4",
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
                id: "ojetje4n8p-afm2fmjnt1-zny605typr",
                name: 'Thiago Oliveira',
                email: 'thiago@example.com',
                confirmed: true,
                hasCompanions: true,
                countCompanions: 4,
            },
            {
                id: "qy5nwv0pz6j-ekps7zoff8c-nryqh5jmq6",
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
