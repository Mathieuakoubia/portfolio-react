// Donnees des etudes de cas presentees en soutenance.
// Chaque projet suit la meme structure narrative : contexte, choix, livrable, autocritique.

const projectsData = [
  {
    id: 'sozia',
    title: 'Sozia',
    tagline:
      "Application mobile de bien-etre pour femmes : des routines de relaxation guidees, a faire seule ou en binome.",
    category: 'Application Mobile',
    period: '2025',
    role: 'Developpeur Mobile',
    techStack: ['Flutter', 'Dart'],
    links: {
      github: null,
      live: null,
    },
    metrics: [
      { label: 'Horizon', value: '2027' },
      { label: 'Stack', value: 'Flutter' },
      { label: 'Pratique', value: 'Seule ou en binome' },
    ],
    // Contenu court repris dans la modale si jamais elle est ouverte.
    content: {
      context:
        "Sozia est une application de bien-etre destinee aux femmes, proposant des exercices de relaxation guides. L'enjeu etait de lancer l'application et de faire grandir sa communaute d'utilisatrices d'ici 2027.",
      strategyAndChoices:
        "Stack Flutter pour une base de code unique iOS/Android, et une direction artistique inspirant le calme et une ambiance chaleureuse.",
      deliverable:
        "Des routines de relaxation courtes, realisables seule ou en binome, integrees a l'application mobile.",
      critiqueAndLearnings: 'Section en cours de redaction.',
    },
    // Le bouton de la carte ouvre une page dediee (et non la modale) tant que `detail` existe.
    detail: {
      accent: '#0DAABA',
      theme: {
        bg: '#F8F1E9',
        surface: '#FFFFFF',
        ink: '#065963',
        muted: 'rgba(6, 89, 99, 0.6)',
      },
      hero: {
        image: "/assets/images/Page d'accueil Sozia.png",
        alt: "Ecran d'accueil de l'application Sozia",
      },
      sections: [
        {
          id: 'contexte',
          title: 'Contexte du projet',
          paragraphs: [
            "Sozia est une application de bien-etre pour femmes qui propose des exercices de relaxation guides.",
            "L'enjeu etait de lancer l'application et de faire grandir sa communaute d'utilisatrices d'ici 2027. Le coeur de l'experience repose sur des routines courtes, realisables seule ou en binome, pour ancrer une pratique reguliere sans contrainte.",
          ],
        },
        {
          id: 'role',
          title: 'Mon role / mon apport',
          paragraphs: [
            "J'ai participe a la creation de cette application en tant que developpeur mobile, et j'ai egalement mis ma pierre a l'edifice au niveau de la charte graphique.",
            "Cote fonctionnel, j'ai developpe des exercices de relaxation a faire seul ou en binome, regroupes sous forme de routines.",
          ],
          list: [
            "Routine « Suivre la bille du regard » : exercice de focalisation visuelle.",
            "Routine de tri des pensees : externaliser puis « jeter » ce qui encombre.",
            "Routines en binome pour creer de l'entraide entre utilisatrices.",
          ],
        },
        {
          id: 'choix',
          title: 'Choix artistiques et strategiques',
          paragraphs: [
            "Nous sommes partis sur la stack technique Flutter : elle nous permet d'avoir la meme base de code pour iOS et Android, et donc d'iterer vite sur l'interface avec des ressources limitees.",
            "Cote direction artistique, des couleurs inspirant le calme et amenant une ambiance chaleureuse, portees par une identite douce et un ton bienveillant.",
          ],
          list: [
            'Turquoise et bleu petrole pour l\'identite de marque.',
            'Lila et ivoire pour les fonds apaisants.',
            'Gold en couleur d\'accent.',
            'Typographies : Gelica pour les titres, Poppins pour le texte, Playfair italique pour les respirations.',
          ],
        },
        {
          id: 'rendu',
          title: 'Le rendu',
          todo: true,
        },
        {
          id: 'critique',
          title: 'Auto-critique',
          todo: true,
        },
      ],
      palette: [
        { name: 'Turquoise', hex: '#0DAABA' },
        { name: 'Bleu petrole', hex: '#065963' },
        { name: 'Lila', hex: '#D9CCE8' },
        { name: 'Ivoire', hex: '#F8F1E9' },
        { name: 'Gold', hex: '#E8B86E' },
      ],
      paletteImage: '/assets/images/Palette de coulleur Sozia.png',
      typographyImage: '/assets/images/Typographie Sozia.png',
      logoImage: '/assets/images/Logo Sozia et ces derivé.png',
      gallery: [
        {
          src: '/assets/images/application Sozia.png',
          caption: "Onboarding : lecture de l'Aura et invitation a pratiquer en cercles.",
        },
        {
          src: "/assets/images/Page d'accueil Sozia.png",
          caption: 'Accueil : routine recommandee adaptee au moment de la journee.',
        },
        {
          src: '/assets/images/routine suivre la boule du regard.png',
          caption: 'Routine « Suivre la bille du regard » : focalisation visuelle guidee.',
        },
        {
          src: '/assets/images/routine de tri.png',
          caption: 'Routine de tri : deposer les pensees puis les envoyer a la poubelle.',
        },
      ],
    },
  },
  {
    id: 'design-motion',
    title: 'Design Motion',
    tagline:
      "Projet d'ecole de motion design : toutes les animations construites de A a Z sous Illustrator et After Effects.",
    category: 'Motion Design',
    period: '',
    role: 'Motion Designer',
    techStack: ['Adobe Illustrator', 'Adobe After Effects'],
    links: {
      github: null,
      live: 'https://youtu.be/_N68u8loFdM',
    },
    metrics: [
      { label: 'Type', value: "Projet d'ecole" },
      { label: 'Outils', value: 'Illustrator + After Effects' },
      { label: 'Animations', value: 'Realisees de A a Z' },
    ],
    content: {
      context:
        "Projet d'ecole dont le but etait d'ameliorer mes competences en motion design.",
      strategyAndChoices:
        "Conception des images sous Illustrator, animation sous After Effects. Toutes les animations ont ete construites de A a Z.",
      deliverable: 'Une video de motion design. Lien : https://youtu.be/_N68u8loFdM',
      critiqueAndLearnings:
        "Ce projet m'a permis de decouvrir et d'ameliorer mes competences sur les outils et les concepts de design.",
    },
    detail: {
      accent: '#4F46E5',
      hero: {
        image: 'https://img.youtube.com/vi/_N68u8loFdM/maxresdefault.jpg',
        alt: 'Apercu de la video de motion design',
      },
      sections: [
        {
          id: 'contexte',
          title: 'Contexte du projet',
          paragraphs: [
            "Projet d'ecole dont le but etait d'ameliorer mes competences en design motion.",
          ],
        },
        {
          id: 'role',
          title: 'Mon role / mon apport',
          paragraphs: [
            "J'ai construit de A a Z toutes les animations : conception des images sous Illustrator, puis animation sous After Effects.",
          ],
        },
        {
          id: 'rendu',
          title: 'Le rendu',
          paragraphs: ['La video finale :'],
          video: { youtube: '_N68u8loFdM' },
        },
        {
          id: 'critique',
          title: 'Auto-critique',
          paragraphs: [
            "Ce projet m'a permis de decouvrir et d'ameliorer mes competences sur les outils et les concepts de design.",
          ],
        },
      ],
    },
  },
  {
    id: 'konekt',
    title: 'KONEKT',
    tagline:
      "SaaS qui connecte les particuliers a des artisans et prestataires de services verifies, en Cote d'Ivoire.",
    category: 'SaaS / Web',
    period: '2025',
    role: 'Developpeur Web',
    // Stack a preciser : la phrase "Nous avons decide d'utiliser..." n'a pas ete terminee.
    techStack: [],
    links: {
      github: null,
      live: null,
    },
    metrics: [
      { label: 'Type', value: 'SaaS / Marketplace' },
      { label: 'Marche', value: "Cote d'Ivoire" },
      { label: 'Mise en relation', value: '4 etapes' },
    ],
    content: {
      context:
        "KONEKT est un SaaS qui connecte des particuliers avec des artisans et prestataires de services independants verifies, en Cote d'Ivoire : plombier, electricien, menuisier, jardinier, etc.",
      strategyAndChoices: 'Section a completer.',
      deliverable:
        "Application web responsive : recherche d'un professionnel par metier et par ville, catalogue de services par categorie et parcours de mise en relation en quatre etapes.",
      critiqueAndLearnings: 'Section a completer.',
    },
    detail: {
      accent: '#F97316',
      theme: {
        bg: '#FAFAF9',
        surface: '#FFFFFF',
        ink: '#111827',
        muted: 'rgba(17, 24, 39, 0.6)',
      },
      hero: {
        image: "/assets/images/Page d'acceuil Konekt.png",
        alt: "Page d'accueil de KONEKT",
      },
      sections: [
        {
          id: 'contexte',
          title: 'Contexte du projet',
          paragraphs: [
            "KONEKT est un SaaS qui connecte des particuliers avec des artisans et prestataires de services independants verifies, en Cote d'Ivoire : plombier, electricien, climatisation, menuiserie, jardinage, etc.",
            "L'objectif : permettre de trouver le bon professionnel en quelques secondes, avec des profils verifies. Le projet a ete mene lors de mon stage au sein de la start-up La Fondation.",
          ],
        },
        {
          id: 'role',
          title: 'Mon role / mon apport',
          paragraphs: ["J'ai ete developpeur sur cette application web."],
        },
        {
          id: 'fonctionnement',
          title: 'Comment ca marche',
          paragraphs: [
            'La mise en relation se fait en quatre etapes, pensees pour rester simples et rapides :',
          ],
          list: [
            'Cherchez votre professionnel : decrivez votre besoin, filtrez par categorie et localisation pour trouver les meilleurs pros.',
            'Comparez et choisissez : consultez les profils detailles, portfolios, avis clients et tarifs pour faire le bon choix.',
            'Envoyez une demande : contactez directement le professionnel et planifiez votre intervention en quelques clics.',
            'Evaluez la prestation : une fois la mission terminee, laissez un avis pour aider la communaute KONEKT.',
          ],
          image: '/assets/images/Explication Konekt.png',
        },
        {
          id: 'services',
          title: 'Les services couverts',
          paragraphs: [
            "L'application couvre les principaux metiers de l'artisanat et des services a domicile : auto et mecanique, beaute et soins, climatisation, electricite, informatique, jardinage, maconnerie, menuiserie, peinture et plomberie.",
          ],
          image: '/assets/images/Les service Konekt.png',
        },
        {
          // Note utilisateur a completer : "Nous avons decide d'utiliser..."
          id: 'choix',
          title: 'Choix artistiques et strategiques',
          todo: true,
        },
        {
          id: 'rendu',
          title: 'Le rendu',
          paragraphs: [
            "Une application web responsive avec une page d'accueil centree sur la recherche (metier + ville), un catalogue de services par categorie et une section pedagogique « Comment ca marche ».",
          ],
        },
        {
          // Note utilisateur a completer : "Le projet est encore neuf et manque..."
          id: 'critique',
          title: 'Auto-critique',
          todo: true,
        },
      ],
      gallery: [
        {
          src: "/assets/images/Page d'acceuil Konekt.png",
          caption: "Page d'accueil : recherche d'un professionnel par metier et par ville.",
        },
        {
          src: '/assets/images/Les service Konekt.png',
          caption: 'Catalogue des services par categorie.',
        },
        {
          src: '/assets/images/Explication Konekt.png',
          caption: 'Section « Comment ca marche ? » : les 4 etapes de la mise en relation.',
        },
      ],
    },
  },
];

export default projectsData;
