import { Game } from '@/entities/model';

export const gamesFakeTable: Readonly<Array<Omit<Game, 'rating' | 'starRating' | 'votedQuantity'>>> = [
  {
    id: '540',
    title: 'Overwatch',
    shortDescription:
      'A hero-focused first-person team shooter from Blizzard Entertainment.',
    genre: 'Shooter',
    publisher: 'Activision Blizzard',
    developer: 'Blizzard Entertainment',
    releaseDate: '2022-10-04',
  },
  {
    id: '516',
    title: 'PUBG: BATTLEGROUNDS',
    shortDescription:
      'Get into the action in one of the longest running battle royale games PUBG Battlegrounds.',
    genre: 'Shooter',
    publisher: 'KRAFTON, Inc.',
    developer: 'KRAFTON, Inc.',
    releaseDate: '2022-01-12',
  },
  {
    id: '508',
    title: 'Enlisted',
    shortDescription:
      'Get ready to command your own World War II military squad in Gaijin and Darkflow Software’s MMO squad-based shooter Enlisted. ',
    genre: 'Shooter',
    publisher: 'Gaijin Entertainment',
    developer: 'Darkflow Software',
    releaseDate: '2021-04-08',
  },
  {
    id: '644',
    title: 'World of Tanks: HEAT',
    shortDescription:
      'A free-to-play hero-based shooter set in the World of Tanks universe.',
    genre: 'Shooter',
    publisher: 'Wargaming Group Limited',
    developer: 'Wargaming Group Limited',
    releaseDate: '2026-05-26',
  },
  {
    id: '642',
    title: 'Neverness to Everness',
    shortDescription:
      'Neverness to Everness is a gacha game that blends some GTA-style play with team-based combat.',
    genre: 'RPG',
    publisher: 'Perfect World Entertainment',
    developer: 'Hotta Studio',
    releaseDate: '2026-04-29',
  },
  {
    id: '590',
    title: 'Throne And Liberty',
    shortDescription:
      'A free-to-play multi-platorm MMORPG from NCSoft and Amazon Games.',
    genre: 'MMORPG',
    publisher: 'Amazon Games',
    developer: 'NCSoft',
    releaseDate: '2024-10-01',
  },
  {
    id: '523',
    title: 'Fall Guys',
    shortDescription:
      'Play the most competitive massively multiplayer party royale game featuring beans ever for free on a variety of platforms. ',
    genre: 'Battle Royale',
    publisher: 'Mediatonic',
    developer: 'Mediatonic',
    releaseDate: '2020-08-04',
  },
  {
    id: '11',
    title: 'Neverwinter',
    shortDescription:
      'A free-to-play 3D action MMORPG based on the acclaimed Dungeons & Dragons fantasy roleplaying game. ',
    genre: 'MMORPG',
    publisher: 'Perfect World Entertainment',
    developer: 'Cryptic Studios',
    releaseDate: '2013-12-06',
  },
  {
    id: '517',
    title: 'Lost Ark',
    shortDescription:
      'Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.',
    genre: 'ARPG',
    publisher: 'Amazon Games',
    developer: 'Smilegate RPG',
    releaseDate: '2022-02-11',
  },
  {
    id: '475',
    title: 'Genshin Impact',
    shortDescription:
      'If you’ve been looking for a game to scratch that open-world action RPG itch, one with perhaps a bit of Asian flair, then you’re going to want to check out miHoYo’s Genshin Impact.',
    genre: 'Action RPG',
    publisher: 'miHoYo',
    developer: 'miHoYo',
    releaseDate: '2020-09-28',
  },
  {
    id: '9',
    title: 'World of Warships',
    shortDescription:
      'A 3D free to play naval action-themed MMO from the creators of World of Tanks! ',
    genre: 'Shooter',
    publisher: 'Wargaming',
    developer: 'Wargaming',
    releaseDate: '2015-07-02',
  },
  {
    id: '2',
    title: 'World of Tanks',
    shortDescription:
      'If you like blowing up tanks, with a quick and intense game style you will love this game!',
    genre: 'Shooter',
    publisher: 'Wargaming',
    developer: 'Wargaming',
    releaseDate: '2011-04-12',
  },
  {
    id: '628',
    title: 'World of Sea Battle',
    shortDescription: 'A free-to-play historical open-sea MMORPG.',
    genre: 'MMORPG',
    publisher: 'Thera Interactive',
    developer: 'Thera Interactive',
    releaseDate: '2025-10-21',
  },
  {
    id: '521',
    title: 'Diablo Immortal',
    shortDescription:
      'Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.',
    genre: 'MMOARPG',
    publisher: 'Blizzard Entertainment',
    developer: 'Blizzard Entertainment',
    releaseDate: '2022-06-02',
  },
  {
    id: '511',
    title: 'Phantasy Star Online 2 New Genesis',
    shortDescription:
      'The legacy of Phantasy Star Online 2 continues a thousand years later!',
    genre: 'MMORPG',
    publisher: 'Sega',
    developer: 'Sega',
    releaseDate: '2021-06-09',
  },
  {
    id: '5',
    title: 'Crossout',
    shortDescription: 'A post-apocalyptic MMO vehicle combat game! ',
    genre: 'Shooter',
    publisher: 'Targem',
    developer: 'Gaijin',
    releaseDate: '2017-05-30',
  },
  {
    id: '12',
    title: 'War Thunder',
    shortDescription:
      'A MMO shooter that puts you in command of hundreds of the finest combat vehicles of World War II.',
    genre: 'Shooter',
    publisher: 'Gaijin Entertainment',
    developer: 'Gaijin Entertainment',
    releaseDate: '2013-08-15',
  },
  {
    id: '648',
    title: 'Ragnarok: The New World',
    shortDescription: 'An open-world entry in the Ragnarok IP.',
    genre: 'MMORPG',
    publisher: 'Gravity Game Vision Limited',
    developer: 'Gravity Game Vision Limited',
    releaseDate: '2026-07-27',
  },
  {
    id: '624',
    title: 'Battlefield REDSEC',
    shortDescription:
      'A free-to-play battle royale game built with Battlefield DNA.',
    genre: 'Shooter',
    publisher: 'Electronic Arts',
    developer: 'Battlefield Studios',
    releaseDate: '2025-10-28',
  },
  {
    id: '641',
    title: 'Foundation: Galactic Frontier',
    shortDescription:
      'Isaac Asimov’s series brought to life in a massive real-time strategy RPG featuring crew management and galactic warfare.',
    genre: 'Strategy',
    publisher: 'FunPlus International',
    developer: 'FunPlus International',
    releaseDate: '2025-10-21',
  },
  {
    id: '599',
    title: 'Marvel Rivals',
    shortDescription: 'A free-to-play superhero team shooter from NetEase.',
    genre: 'Shooter',
    publisher: 'NetEase',
    developer: 'NetEase',
    releaseDate: '2024-12-06',
  },
  {
    id: '640',
    title: 'Project Entropy',
    shortDescription:
      'Project Entropy drops you into a living sci-fi MMO universe!',
    genre: 'Strategy',
    publisher: 'FunPlus International',
    developer: 'FunPlus International',
    releaseDate: '2024-04-17',
  },
  {
    id: '560',
    title: 'Palia',
    shortDescription: 'A cozy MMO with homebuilding and some adventure.',
    genre: 'MMORPG',
    publisher: 'Singularity Six',
    developer: 'Singularity Six',
    releaseDate: '2023-08-10',
  },
  {
    id: '14',
    title: 'Star Trek Online',
    shortDescription:
      'A free-to-play, 3D, Sci-Fi MMORPG based on the popular Star Trek series.',
    genre: 'MMORPG',
    publisher: 'Perfect World Entertainment',
    developer: ' Cryptic Studios',
    releaseDate: '2010-02-02',
  },
  {
    id: '626',
    title: 'Where Winds Meet',
    shortDescription:
      'A free-to-play open-world ARPG set in tenth-century China.',
    genre: 'RPG',
    publisher: 'Everstone Studio',
    developer: 'NetEase Games',
    releaseDate: '2025-11-14',
  },
];
