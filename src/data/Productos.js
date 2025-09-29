const productos = [
    {
        id : 101,
        nombre: "Stranded Deep",
        precio: 8460.99,
        imagenURL: "https://i0.wp.com/www.pcmrace.com/wp-content/uploads/2020/12/EGS_HolidaySale2020_DoG_StrandedDeep_1920x1080_Teaser-R-1920.jpg",
        descripcion: "Camiseta de algodón 100% suave y transpirable.",
        categoria: "Supervivencia"
    },
    {
        id : 102,
        nombre: "COD Black Ops 6",
        precio: 25999.00,
        imagenURL: "https://i.blogs.es/954c69/cod6/840_560.jpeg",
        descripcion: "Zapatillas ligeras con suela antideslizante.",
        categoria: "Shooter"
    },
    {
        id : 103,
        nombre: "Fortnite",
        precio: 0.00,
        imagenURL: "https://m.media-amazon.com/images/M/MV5BMTZlMmIxM2EtN2Y4Zi00M2ZhLTk3NzgtNjJmZTU0MTQ3YjcwXkEyXkFqcGc@._V1_.jpg",
        descripcion: "Mochila resistente al agua con varios compartimentos.",
        categoria: "Gratuito"
    },
    {
        id : 104,
        nombre: "NBA 2K25",
        precio: 28450.75,
        imagenURL: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2878980/capsule_616x353.jpg?t=1754665445",
        descripcion: "Teléfono inteligente con pantalla AMOLED de 6.5 pulgadas.",
        categoria: "Deportes"
    },
    {
        id : 105,
        nombre: "Subnautica",
        precio: 6620.50,
        imagenURL: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000030089/0500a5492e479ace4bdbfcf93048cb4b1464d3c5836a566e9f16f03d4d8b15ba",
        descripcion: "Auriculares con cancelación de ruido y batería de 20 horas.",
        categoria: "Supervivencia"
    },
    {
        id : 106,
        nombre: "COD WWII",
        precio: 35400.00,
        imagenURL: "https://es.digitaltrends.com/wp-content/uploads/2017/09/call-of-duty-WWII.jpg?fit=720%2C720&p=1",
        descripcion: "Gorra ajustable de algodón con visera curva.",
        categoria: "Shooter"
    },
    {
        id : 107,
        nombre: "Madden NFL 25",
        precio: 26999.99,
        imagenURL: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2582560/capsule_616x353.jpg?t=1749121293",
        descripcion: "Reloj resistente al agua con cronómetro y alarma.",
        categoria: "Deportes"
    },
    {
        id : 108,
        nombre: "The Forest",
        precio: 4599.00,
        imagenURL: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/242760/capsule_616x353.jpg?t=1699381053",
        descripcion: "Portátil ultraligero con procesador de última generación.",
        categoria: "Supervivencia"
    },
    {
        id : 109,
        nombre: "NHL 25 Deluxe Edition",
        precio: 65599.99,
        imagenURL: "https://s.yimg.com/ny/api/res/1.2/SCVlux17S2dTC0TPeoL1yQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTgwMDtjZj13ZWJw/https://media.zenfs.com/en/the_hockey_news_articles_331/3c3493b02865e500cdf11d98fe46d677",
        descripcion: "Botella térmica de 750ml, mantiene frío y calor.",
        categoria: "Deportes"
    },
    {
        id : 110,
        nombre: "Battlefield 1",
        precio: 13300.00,
        imagenURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcp7SLULWegt83wQ1p7-BSSyJAmo6pdzQjg&s",
        descripcion: "Silla con soporte lumbar y altura ajustable.",
        categoria: "Shooter"
    },
    {
        id : 111,
        nombre: "FIFA 25",
        precio: 77900.00,
        imagenURL: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2669320/86a267ec44fc57124127eba46f25120813374317/capsule_616x353.jpg?t=1752681627",
        descripcion: "Mesa de madera maciza para 6 personas.",
        categoria: "Deportes"
    },
    {
        id : 112,
        nombre: "COD Cold-War",
        precio: 47999.99,
        imagenURL: "https://www.viaxesports.com/wp-content/uploads/2020/10/dHSY2Hu3tZeHWPv8kD5BCf.jpg",
        descripcion: "Clásica cafetera de aluminio para preparar espresso.",
        categoria: "Shooter"
    },
    {
        id : 113,
        nombre: "Formula 1 2025",
        precio: 19999.00,
        imagenURL: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3059520/37f833ca5bd3d5c3eec2b411131f3e00f580bbe7/header.jpg?t=1758120915",
        descripcion: "Juego de 6 cuchillos de acero inoxidable con bloque de madera.",
        categoria: "Automovilismo"
    },
    {
        id : 114,
        nombre: "Gran Turismo 7",
        precio: 59999.00,
        imagenURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ViKTuiLpE4zICba1lS4rbJ1ybEKqSv8hJA&s",
        descripcion: "Colchón de espuma viscoelástica con doble capa de confort.",
        categoria: "Automovilismo"
    },
    {
        id : 115,
        nombre: "NFS WORLD 2025",
        precio: 19999.00,
        imagenURL: "https://i.ytimg.com/vi/sK1bzbG_ISg/sddefault.jpg",
        descripcion: "Lámpara ajustable con luz regulable y puerto USB.",
        categoria: "Automovilismo"
    },
    {
        id : 116,
        nombre: "Battlefield 2042",
        precio: 29999.00,
        imagenURL: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1517290/capsule_616x353.jpg?t=1755529340",
        descripcion: "Tabla de skate de arce canadiense con ejes de aluminio.",
        categoria: "Shooter"
    },
    {
        id : 117,
        nombre: "WRC Rallye 9",
        precio: 19999.00,
        imagenURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ0ld7LwlAAHVqRp2mv96sx9KFiNZArFPT2w&s",
        descripcion: "Balón oficial cosido a mano con gran durabilidad.",
        categoria: "Automovilismo"
    },
    {
        id : 118,
        nombre: "Horizon Forbidden West",
        precio: 19999.00,
        imagenURL: "https://www.hd-tecnologia.com/imagenes/articulos/2022/10/Segun-un-documento-filtrado-de-Sony-Horizon-Forbidden-West-llegaria-a-PC-junto-a-otros-exclusivos-de-PlayStation-1.jpg",
        descripcion: "Mancuernas con peso regulable hasta 20kg cada una.",
        categoria: "Supervivencia"
    },
    {
        id : 119,
        nombre: "Dying Light The Beast (3)",
        precio: 19999.00,
        imagenURL: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3008130/b5944c43d563d780614d961ee859f7ce1248c9fa/capsule_616x353.jpg?t=1758469753",
        descripcion: "Fragancia fresca y ligera con notas cítricas.",
        categoria: "Supervivencia"
    },
    {
        id : 120,
        nombre: "Battlefield 6",
        precio: 19999.00,
        imagenURL: "https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/WQPHK3APV5F6RP2SO6BUAOCCBM.jpg",
        descripcion: "Crema ligera con ácido hialurónico para piel seca.",
        categoria: "Shooter"
    },
    {
        id : 121,
        nombre: "Green Hell",
        precio: 8460.99,
        imagenURL: "https://i.ytimg.com/vi/DmDLagkxe_Q/maxresdefault.jpg",
        descripcion: "Crema ligera con ácido hialurónico para piel seca.",
        categoria: "Supervivencia"
    },
    {
        id : 122,
        nombre: "Day-z",
        precio: 19999.00,
        imagenURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVfXEppK6dnyuQ6-Nkik61ToXaM11ywlRHtw&s",
        descripcion: "Crema ligera con ácido hialurónico para piel seca.",
        categoria: "Supervivencia"
    },
    {
        id : 123,
        nombre: "Rainbow Six Siege",
        precio: 19999.00,
        imagenURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Q8P3gdpZGlaMs3ldweq6hVQQtyoJwmyMMQ&s",
        descripcion: "Crema ligera con ácido hialurónico para piel seca.",
        categoria: "Shooter"
    },
    {
        id : 124,
        nombre: "EFootball 2025",
        precio: 1500.00,
        imagenURL: "https://www.konami.com/efootball/s/img/main_page_1_visual_v5_0_sp.png?v=826",
        descripcion: "Crema ligera con ácido hialurónico para piel seca.",
        categoria: "Deportes"
    },
    {
        id : 125,
        nombre: "NFS Heat",
        precio: 19999.00,
        imagenURL: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222680/header.jpg?t=1716831270",
        descripcion: "Crema ligera con ácido hialurónico para piel seca.",
        categoria: "Automovilismo"
    },
    {
        id : 126,
        nombre: "Tony Hawk Pro Skater 3+4",
        precio: 19999.00,
        imagenURL: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/ncom/software/switch-2/70050000057546/c2d9baecde5d1bcc478f06ca3886095a48935749f907590e3b8d696532bab191",
        descripcion: "Crema ligera con ácido hialurónico para piel seca.",
        categoria: "Deportes"
    },
    {
        id : 127,
        nombre: "Doom eternal",
        precio: 6500.00,
        imagenURL: "https://image.api.playstation.com/vulcan/ap/rnd/202010/0114/ERNPc4gFqeRDG1tYQIfOKQtM.png",
        descripcion: "Crema ligera con ácido hialurónico para piel seca.",
        categoria: "Shooter"
    },
    {
        id : 128,
        nombre: "7 days to die",
        precio: 11999.00,
        imagenURL: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/251570/header.jpg?t=1756397337",
        descripcion: "Crema ligera con ácido hialurónico para piel seca.",
        categoria: "Supervivencia"
    },
    {
        id : 129,
        nombre: "Motogp 25",
        precio: 35000.00,
        imagenURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Lf3XJ49GxjKvkpPDkkieIlnKjGmgFCrzWQ&s",
        descripcion: "Crema ligera con ácido hialurónico para piel seca.",
        categoria: "Automovilismo"
    },
    {
        id : 130,
        nombre: "Ride 5",
        precio: 18000.00,
        imagenURL: "https://store-images.s-microsoft.com/image/apps.42160.14389468363602500.845d0fc2-3356-43e9-9ab7-cb1c1d4a0f5a.83ec7e2a-0200-46cd-9296-445158e48452?q=90&w=336&h=200",
        descripcion: "Crema ligera con ácido hialurónico para piel seca.",
        categoria: "Automovilismo"
    },
    {
        id : 131,
        nombre: "COD Modern Warfare III",
        precio: 14500.00,
        imagenURL: "https://assets.xboxservices.com/assets/71/b5/71b50f29-5799-4be1-97ef-d58d57c9fe37.jpg?n=CoD-Modern-Warfare-III_GLP-Page-Hero-0_1083x1222_02.jpg",
        descripcion: "Crema ligera con ácido hialurónico para piel seca.",
        categoria: "Shooter"
    },
    {
        id : 132,
        nombre: "Rocket League",
        precio: 0.00,
        imagenURL: "https://www.rocketleague.com/rr7/rl_evergreen-BuFUX3Ml.jpg",
        descripcion: "Crema ligera con ácido hialurónico para piel seca.",
        categoria: "Gratuito"
    },
    {
        id : 133,
        nombre: "Valorant",
        precio: 0.00,
        imagenURL: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/67fbd4c273f3d5e92a18666c6379db09e74b7cda-1920x1080.jpg?auto=format&fit=fill&q=80&w=1541",
        descripcion: "Crema ligera con ácido hialurónico para piel seca.",
        categoria: "Gratuito"
    },
    {
        id : 134,
        nombre: "Apex Legends",
        precio: 0.00,
        imagenURL: "https://store-images.s-microsoft.com/image/apps.9943.71371076658790719.8847fce7-6f7e-46ad-b80e-1824ff18735b.67162764-58a9-46cd-a6e2-a6603e59b6d6?q=90&w=480&h=270",
        descripcion: "Crema ligera con ácido hialurónico para piel seca.",
        categoria: "Gratuito"
    }


];

export default productos;