const productos = [
    {
        id : 101,
        nombre: "Stranded Deep",
        precio: 8460.99,
        imagenURL: "https://i0.wp.com/www.pcmrace.com/wp-content/uploads/2020/12/EGS_HolidaySale2020_DoG_StrandedDeep_1920x1080_Teaser-R-1920.jpg",
        descripcion: "Sumérgete en una aventura de supervivencia realista como superviviente de un accidente aéreo en medio del océano Pacífico. En Stranded Deep, explorarás islas tropicales, arrecifes submarinos y fosas oceánicas, recolectando recursos escasos (agua, comida, materiales) para fabricar herramientas, refugios y embarcaciones. Debes protegerte del hambre, la sed, la exposición al sol, e incluso de animales peligrosos.",
        categoria: "Supervivencia"
    },
    {
        id : 102,
        nombre: "COD Black Ops 6",
        precio: 25999.00,
        imagenURL: "https://i.blogs.es/954c69/cod6/840_560.jpeg",
        descripcion: "En esta entrega de la saga Call of Duty, Black Ops 6 se sitúa en los años 90 y propone una narrativa cargada de espionaje, conspiraciones y acción cinematográfica. Tiene tres modos principales: campaña, multijugador y el retorno del modo Zombies en formato por rondas.",
        categoria: "Shooter"
    },
    {
        id : 103,
        nombre: "Fortnite",
        precio: 0.00,
        imagenURL: "https://m.media-amazon.com/images/M/MV5BMTZlMmIxM2EtN2Y4Zi00M2ZhLTk3NzgtNjJmZTU0MTQ3YjcwXkEyXkFqcGc@._V1_.jpg",
        descripcion: "Fortnite es un juego que mezcla elementos de acción, construcción y supervivencia en un entorno de mundo compartido, siendo más conocido por su modo Battle Royale. En él, cientos de jugadores compiten para ser el último en pie mientras recolectan recursos, construyen estructuras defensivas y se enfrentan en combates intensos. También ofrece modos creativos, desafíos temporales y eventos, lo que le da dinamismo constante.",
        categoria: "Gratuito"
    },
    {
        id : 104,
        nombre: "NBA 2K25",
        precio: 28450.75,
        imagenURL: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2878980/capsule_616x353.jpg?t=1754665445",
        descripcion: "Esta hipotética edición de la saga de baloncesto se propone brindar una simulación deportiva más pulida: gráficos ultra realistas, físicas mejoradas de balón y jugador, inteligencia artificial más humana, interacción dinámica con la audiencia y modos de carrera profundas (gestión, temporadas, progreso de jugadores).",
        categoria: "Deportes"
    },
    {
        id : 105,
        nombre: "Subnautica",
        precio: 6620.50,
        imagenURL: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000030089/0500a5492e479ace4bdbfcf93048cb4b1464d3c5836a566e9f16f03d4d8b15ba",
        descripcion: "Subnautica es una aventura subacuática de ciencia ficción combinada con supervivencia y exploración. Inicias con tu nave estrellada en un planeta oceánico alienígena, y tu objetivo es explorar las profundidades marinas para descubrir recursos, criaturas exóticas, ruinas misteriosas y tecnología antigua. Debes gestionar oxígeno, defensa ante criaturas peligrosas y mantener tus recursos vitales (agua, alimentos). A la par de explorar, desentrañas una trama intrigante sobre lo que le ocurrió al planeta y cómo escapar.",
        categoria: "Supervivencia"
    },
    {
        id : 106,
        nombre: "COD WWII",
        precio: 35400.00,
        imagenURL: "https://es.digitaltrends.com/wp-content/uploads/2017/09/call-of-duty-WWII.jpg?fit=720%2C720&p=1",
        descripcion: "Call of Duty: WWII regresa a las raíces de la guerra clásica, enfrentando al jugador a experiencias bélicas de la Segunda Guerra Mundial. Se destacan campañas intensas en diferentes frentes (Europa, África, etc.), con escenarios históricos, combates terrestres, operaciones de infantería y momentos dramáticos de hermandad militar. El modo multijugador ofrece mapas y armas auténticas de la época, mientras que el modo Zombies introduce una narrativa sobrenatural en el contexto bélico.",
        categoria: "Shooter"
    },
    {
        id : 107,
        nombre: "Madden NFL 25",
        precio: 26999.99,
        imagenURL: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2582560/capsule_616x353.jpg?t=1749121293",
        descripcion: "En esta hipotética edición del simulador de fútbol americano, cada pase, bloqueo y jugada estaría optimizado con físicas avanzadas, control total del equipo, IA mejorada y detalle visual tanto en jugadores como en estadios. Los modos de franquicia o carrera permitirían gestionar contratos, entrenamientos, alineaciones y hasta interacciones con la prensa.",
        categoria: "Deportes"
    },
    {
        id : 108,
        nombre: "The Forest",
        precio: 4599.00,
        imagenURL: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/242760/capsule_616x353.jpg?t=1699381053",
        descripcion: "The Forest es un juego de supervivencia con mezcla de terror y exploración. Tras un accidente aéreo, despiertas en un bosque lleno de peligros y misterios. Debes buscar recursos, construir refugios, fabricar armas y herramientas, y mantenerte vivo contra animales salvajes y criaturas mutantes humanas. La atmósfera es tensa, con ciclos de día y noche que afectan la jugabilidad, y una narrativa oculta que se revela a medida que exploras el entorno.",
        categoria: "Supervivencia"
    },
    {
        id : 109,
        nombre: "NHL 25 Deluxe Edition",
        precio: 65599.99,
        imagenURL: "https://s.yimg.com/ny/api/res/1.2/SCVlux17S2dTC0TPeoL1yQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTgwMDtjZj13ZWJw/https://media.zenfs.com/en/the_hockey_news_articles_331/3c3493b02865e500cdf11d98fe46d677",
        descripcion: "NHL 25 Deluxe Edition promete una experiencia de hockey sobre hielo ultra realista, con gráficos mejorados, físicas avanzadas del puck y jugadores, y una IA que simula estrategias auténticas de equipos. Incluye modos de juego profundos como carrera, franquicia y multijugador en línea, además de contenido exclusivo como equipos clásicos, equipamiento especial y desafíos únicos.",
        categoria: "Deportes"
    },
    {
        id : 110,
        nombre: "Battlefield 1",
        precio: 13300.00,
        imagenURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcp7SLULWegt83wQ1p7-BSSyJAmo6pdzQjg&s",
        descripcion: "Battlefield 1 te sumerge en la Primera Guerra Mundial con combates masivos, vehículos históricos y escenarios destructibles. Ofrece una campaña narrativa que explora diferentes perspectivas del conflicto, desde soldados de infantería hasta pilotos de aviones y conductores de tanques. El modo multijugador presenta mapas amplios, trabajo en equipo y una variedad de clases y armas auténticas de la época.",
        categoria: "Shooter"
    },
    {
        id : 111,
        nombre: "FIFA 25",
        precio: 77900.00,
        imagenURL: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2669320/86a267ec44fc57124127eba46f25120813374317/capsule_616x353.jpg?t=1752681627",
        descripcion: "FIFA 25 ofrece una simulación de fútbol ultra realista con gráficos mejorados, físicas avanzadas del balón y jugadores, y una IA que imita tácticas y estilos de juego auténticos. Incluye modos de juego profundos como carrera, franquicia, Ultimate Team y multijugador en línea, además de contenido exclusivo como equipos clásicos, equipamiento especial y desafíos únicos.",
        categoria: "Deportes"
    },
    {
        id : 112,
        nombre: "COD Cold-War",
        precio: 47999.99,
        imagenURL: "https://www.viaxesports.com/wp-content/uploads/2020/10/dHSY2Hu3tZeHWPv8kD5BCf.jpg",
        descripcion: "Call of Duty: Cold War te sumerge en la tensión geopolítica de la Guerra Fría con una campaña cargada de espionaje, conspiraciones y acción cinematográfica. Tiene tres modos principales: campaña, multijugador y el retorno del modo Zombies en formato por rondas. El multijugador ofrece mapas variados, armas personalizables y modos de juego competitivos, mientras que Zombies presenta una narrativa intrigante con desafíos cooperativos.",
        categoria: "Shooter"
    },
    {
        id : 113,
        nombre: "Formula 1 2025",
        precio: 19999.00,
        imagenURL: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3059520/37f833ca5bd3d5c3eec2b411131f3e00f580bbe7/header.jpg?t=1758120915",
        descripcion: "Simulador de carreras de Fórmula 1 con físicas realistas, gestión de equipo y temporadas completas.",
        categoria: "Automovilismo"
    },
    {
        id : 114,
        nombre: "Gran Turismo 7",
        precio: 59999.00,
        imagenURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ViKTuiLpE4zICba1lS4rbJ1ybEKqSv8hJA&s",
        descripcion: "Simulador de carreras con amplia selección de autos, pistas y personalización detallada.",
        categoria: "Automovilismo"
    },
    {
        id : 115,
        nombre: "NFS WORLD 2025",
        precio: 19999.00,
        imagenURL: "https://i.ytimg.com/vi/sK1bzbG_ISg/sddefault.jpg",
        descripcion: "Juego de carreras en mundo abierto con personalización de autos y eventos multijugador.",
        categoria: "Automovilismo"
    },
    {
        id : 116,
        nombre: "Battlefield 2042",
        precio: 29999.00,
        imagenURL: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1517290/capsule_616x353.jpg?t=1755529340",
        descripcion: "Ambientado en un futuro no muy lejano, Battlefield 2042 apuesta por combates masivos con hasta 128 jugadores (según plataforma) en mapas vastos y dinámicos. La tecnología avanzada juega un rol central: drones, condiciones climáticas extremas, mapas que cambian durante la partida y modos innovadores de juego. El enfoque está en crear batallas épicas en escenarios monumentales, con énfasis en trabajo en equipo, estrategia y adaptabilidad.",
        categoria: "Shooter"
    },
    {
        id : 117,
        nombre: "WRC Rallye 9",
        precio: 19999.00,
        imagenURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ0ld7LwlAAHVqRp2mv96sx9KFiNZArFPT2w&s",
        descripcion: "Este juego de rally oficial recrea el Campeonato Mundial de Rally con fidelidad: desde circuitos en nieve, tierra, asfalto y grava, hasta vehículos reales con físicas exigentes. En WRC Rallye 9 debes dominar el control deslizante del coche en condiciones cambiantes, reaccionar a indicaciones del copiloto, ajustar suspensiones y neumáticos para cada tramo y competir por tiempos.",
        categoria: "Automovilismo"
    },
    {
        id : 118,
        nombre: "Horizon Forbidden West",
        precio: 19999.00,
        imagenURL: "https://www.hd-tecnologia.com/imagenes/articulos/2022/10/Segun-un-documento-filtrado-de-Sony-Horizon-Forbidden-West-llegaria-a-PC-junto-a-otros-exclusivos-de-PlayStation-1.jpg",
        descripcion: "Aloy regresa en esta secuela para explorar un mundo post-apocalíptico lleno de máquinas y tribus humanas. Combina combate con arco, sigilo y habilidades tecnológicas para enfrentarte a criaturas mecánicas y enemigos humanos. El vasto entorno abierto ofrece misiones secundarias, recolección de recursos y personalización de equipo, mientras desentrañas una narrativa profunda sobre la civilización caída y el futuro de la humanidad.",
        categoria: "Supervivencia"
    },
    {
        id : 119,
        nombre: "Dying Light The Beast (3)",
        precio: 19999.00,
        imagenURL: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3008130/b5944c43d563d780614d961ee859f7ce1248c9fa/capsule_616x353.jpg?t=1758469753",
        descripcion: "Dying Light 3 continúa la saga de supervivencia en un mundo post-apocalíptico infestado de zombis. Combina parkour fluido, combate cuerpo a cuerpo y armas improvisadas para sobrevivir en un entorno abierto y dinámico. La narrativa se centra en la lucha por recursos, alianzas con facciones humanas y la exploración de misterios relacionados con el brote zombi. El juego enfatiza la toma de decisiones, el crafting y la cooperación en modo multijugador.",
        categoria: "Supervivencia"
    },
    {
        id : 120,
        nombre: "Battlefield 6",
        precio: 19999.00,
        imagenURL: "https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/WQPHK3APV5F6RP2SO6BUAOCCBM.jpg",
        descripcion: "Battlefield 6 te sumerge en combates masivos con hasta 128 jugadores en mapas vastos y dinámicos. La tecnología avanzada juega un rol central: drones, condiciones climáticas extremas, mapas que cambian durante la partida y modos innovadores de juego. El enfoque está en crear batallas épicas en escenarios monumentales, con énfasis en trabajo en equipo, estrategia y adaptabilidad.",
        categoria: "Shooter"
    },
    {
        id : 121,
        nombre: "Green Hell",
        precio: 8460.99,
        imagenURL: "https://i.ytimg.com/vi/DmDLagkxe_Q/maxresdefault.jpg",
        descripcion: "Green Hell es un juego de supervivencia en primera persona ambientado en la selva amazónica. Como protagonista, debes enfrentarte a los desafíos de la naturaleza: encontrar comida y agua, construir refugios, fabricar herramientas y defenderte de animales salvajes y enfermedades. La atmósfera es intensa y realista, con un enfoque en la gestión de la salud física y mental mientras exploras un entorno peligroso y misterioso.",
        categoria: "Supervivencia"
    },
    {
        id : 122,
        nombre: "Day-z",
        precio: 19999.00,
        imagenURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVfXEppK6dnyuQ6-Nkik61ToXaM11ywlRHtw&s",
        descripcion: "DayZ es un juego de supervivencia en un mundo post-apocalíptico infestado de zombis. Los jugadores deben explorar un vasto entorno abierto, recolectar recursos, construir refugios y formar alianzas o enfrentarse a otros sobrevivientes. La gestión de la salud, el hambre, la sed y las heridas es crucial para sobrevivir. La interacción con otros jugadores añade una capa de tensión y estrategia, ya que pueden ser aliados o amenazas.",
        categoria: "Supervivencia"
    },
    {
        id : 123,
        nombre: "Rainbow Six Siege",
        precio: 19999.00,
        imagenURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Q8P3gdpZGlaMs3ldweq6hVQQtyoJwmyMMQ&s",
        descripcion: "Rainbow Six Siege es un shooter táctico en primera persona centrado en el juego en equipo y la estrategia. Los jugadores asumen roles de operadores con habilidades y equipamiento únicos, participando en partidas multijugador donde deben atacar o defender objetivos específicos. La destrucción del entorno es una característica clave, permitiendo crear nuevas líneas de visión y tácticas. La comunicación y coordinación entre los miembros del equipo son esenciales para el éxito.",
        categoria: "Shooter"
    },
    {
        id : 124,
        nombre: "EFootball 2025",
        precio: 1500.00,
        imagenURL: "https://www.konami.com/efootball/s/img/main_page_1_visual_v5_0_sp.png?v=826",
        descripcion: "EFootball 2025 es un simulador de fútbol que ofrece una experiencia realista con gráficos mejorados, físicas avanzadas del balón y jugadores, y una IA que imita tácticas y estilos de juego auténticos. Incluye modos de juego profundos como carrera, franquicia, y multijugador en línea, además de contenido exclusivo como equipos clásicos, equipamiento especial y desafíos únicos.",
        categoria: "Deportes"
    },
    {
        id : 125,
        nombre: "NFS Heat",
        precio: 19999.00,
        imagenURL: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222680/header.jpg?t=1716831270",
        descripcion: "Juego de carreras en mundo abierto con personalización de autos y eventos diurnos/nocturnos.",
        categoria: "Automovilismo"
    },
    {
        id : 126,
        nombre: "Tony Hawk Pro Skater 3+4",
        precio: 19999.00,
        imagenURL: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/ncom/software/switch-2/70050000057546/c2d9baecde5d1bcc478f06ca3886095a48935749f907590e3b8d696532bab191",
        descripcion: "Tony Hawk's Pro Skater 3 y 4 son juegos de skateboarding que combinan trucos, combos y exploración de niveles. Los jugadores pueden elegir entre una variedad de skaters profesionales, cada uno con habilidades únicas, y realizar maniobras en entornos urbanos y parques de skate. El objetivo es completar desafíos, recolectar objetos y lograr altas puntuaciones mientras se disfruta de una banda sonora icónica.",
        categoria: "Deportes"
    },
    {
        id : 127,
        nombre: "Doom eternal",
        precio: 6500.00,
        imagenURL: "https://image.api.playstation.com/vulcan/ap/rnd/202010/0114/ERNPc4gFqeRDG1tYQIfOKQtM.png",
        descripcion: "Doom Eternal es un shooter en primera persona que continúa la saga de acción intensa y combate brutal contra hordas de demonios. Los jugadores asumen el rol del Doom Slayer, utilizando una variedad de armas y habilidades para enfrentarse a enemigos desafiantes en entornos dinámicos. El juego enfatiza la movilidad, el uso estratégico del arsenal y la exploración de niveles llenos de secretos y desafíos.",
        categoria: "Shooter"
    },
    {
        id : 128,
        nombre: "7 days to die",
        precio: 11999.00,
        imagenURL: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/251570/header.jpg?t=1756397337",
        descripcion: "7 Days to Die es un juego de supervivencia en un mundo post-apocalíptico infestado de zombis. Combina elementos de construcción, exploración y combate en un entorno abierto y dinámico. Los jugadores deben recolectar recursos, construir refugios, fabricar armas y herramientas, y defenderse de hordas de zombis que se vuelven más agresivas cada siete días. La gestión de la salud, el hambre, la sed y las heridas es crucial para sobrevivir en este entorno hostil.",
        categoria: "Supervivencia"
    },
    {
        id : 129,
        nombre: "Motogp 25",
        precio: 35000.00,
        imagenURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Lf3XJ49GxjKvkpPDkkieIlnKjGmgFCrzWQ&s",
        descripcion: "Simulador de carreras de MotoGP con físicas realistas, gestión de equipo y temporadas completas.",
        categoria: "Automovilismo"
    },
    {
        id : 130,
        nombre: "Ride 5",
        precio: 18000.00,
        imagenURL: "https://store-images.s-microsoft.com/image/apps.42160.14389468363602500.845d0fc2-3356-43e9-9ab7-cb1c1d4a0f5a.83ec7e2a-0200-46cd-9296-445158e48452?q=90&w=336&h=200",
        descripcion: "Simulador de motociclismo con amplia selección de motos, pistas y personalización detallada.",
        categoria: "Automovilismo"
    },
    {
        id : 131,
        nombre: "COD Modern Warfare III",
        precio: 14500.00,
        imagenURL: "https://assets.xboxservices.com/assets/71/b5/71b50f29-5799-4be1-97ef-d58d57c9fe37.jpg?n=CoD-Modern-Warfare-III_GLP-Page-Hero-0_1083x1222_02.jpg",
        descripcion: "Call of Duty: Modern Warfare III continúa la saga con una campaña cargada de acción, misiones tácticas y narrativa cinematográfica. El modo multijugador ofrece mapas variados, armas personalizables y modos de juego competitivos, mientras que el modo Zombies presenta una narrativa intrigante con desafíos cooperativos. La tecnología avanzada y gráficos mejorados crean una experiencia inmersiva en combates modernos.",
        categoria: "Shooter"
    },
    {
        id : 132,
        nombre: "Rocket League",
        precio: 0.00,
        imagenURL: "https://www.rocketleague.com/rr7/rl_evergreen-BuFUX3Ml.jpg",
        descripcion: "Juego de fútbol con autos propulsados por cohetes en partidas rápidas y competitivas.",
        categoria: "Gratuito"
    },
    {
        id : 133,
        nombre: "Valorant",
        precio: 0.00,
        imagenURL: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/67fbd4c273f3d5e92a18666c6379db09e74b7cda-1920x1080.jpg?auto=format&fit=fill&q=80&w=1541",
        descripcion: "Shooter táctico en primera persona con personajes únicos y habilidades especiales.",
        categoria: "Gratuito"
    },
    {
        id : 134,
        nombre: "Apex Legends",
        precio: 0.00,
        imagenURL: "https://store-images.s-microsoft.com/image/apps.9943.71371076658790719.8847fce7-6f7e-46ad-b80e-1824ff18735b.67162764-58a9-46cd-a6e2-a6603e59b6d6?q=90&w=480&h=270",
        descripcion: "Battle Royale con héroes únicos, trabajo en equipo y acción rápida.",
        categoria: "Gratuito"
    }
];

export default productos;