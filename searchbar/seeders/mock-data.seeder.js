const { Seeder } = require('mongoose-data-seed');
const model = require('../database/index');

const data = [
  {
    uniqueID: 1,
    name: `Sony - PlayStation 4 1TB Console - Jet Black`,
    description: `Battle friends and foes with the Sony PlayStation 4 Pro console. Its 1TB capacity lets you store plenty of games without an external hard drive, and the dual-shock controller improves your hands-on gaming experience. See enemies in clear, vibrant detail with the included HDMI cable of the Sony PlayStation 4 Pro console.`,
    brand: 'Sony',
    department: 'Video Games',
    color: 'Jet Black',
    subDept: 'PlayStation 4',
    sku: 5388900,
    price: 399.99,
    avgRating: 4.8,
    colors: ['black'],
    reviews: [],
    questions: {
      question: `Q: What's the difference between the PS4 Slim and the PS4 Pro?`,
      answer: `A: The PS4 Slim outputs games at full 1080p, while the PS4 Pro can output games at up to 4K resolution (2160p). If you have a 4K television, you'll see a noticeable difference in game quality. Note that not all games support 4K, but some will receive updates such as higher framerates, making gameplay smoother.`
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5388/5388900_sd.jpg;maxHeight=640;maxWidth=550`,`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5388/5388900_rd.jpg;maxHeight=640;maxWidth=550`,`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5388/5388900cv11d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 2,
    name: 'God of War - PlayStation Hits Standard Edition - PlayStation 4',
    description: `It is a new beginning for Kratos. Living as a man, outside the shadow of the gods, he seeks solitude in the unfamiliar lands of Norse mythology. With new purpose and his son Atreus at his side, Kratos must fight for survival as powerful forces threaten to disrupt the new life he has created...`,
    brand: 'Santa Monica Studio',
    department: 'Video Games',
    color: '',
    subDept: 'PlayStation 4',
    sku: 5358600,
    price: 19.99,
    avgRating: 4.9,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: 'Q: When are you expecting to have god of war for ps4 in the store?',
      answer: `A: As soon as they release the release date I WILL PRE-ORDER THIS BRAND NEW GOD OF WAR. Absolutely can't wait to play. Since were guessing I will say April 26th Is my answer! Sincerely, Hard core Gamer`
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5358/5358600_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5358/5358600cv12d.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5358/5358600cv13d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 3,
    name: `Marvel's Spider-Man Game of the Year Edition - PlayStation 4`,
    description: `Experience the Game of the Year Edition of Marvel's Spider-Man, which includes the full game, plus Marvel's Spider-Man: The City That Never Sleeps complete DLC story arc content (Marvel's Spider-Man: The City That Never Sleeps DLC content provided via voucher code to download content. Voucher expires August 28, 2022).`,
    brand: 'Insomniac Games',
    department: 'Video Games',
    color: '',
    subDept: 'PlayStation 4',
    sku: 636373,
    price: 35.99,
    avgRating: 4.9,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {},
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6363/6363873_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6363/6363873cv16d.jpg`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6363/6363873cv12d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 4,
    name: 'Grand Theft Auto V: Premium Edition - PlayStation 4',
    description: `The Grand Theft Auto V: Premium Edition is available for PS4 and includes the complete Grand Theft Auto V story experience, the ever-evolving world of Grand Theft Auto Online, and all the existing gameplay upgrades and content, including The Doomsday Heist, Gunrunning, Smuggler's Run, Bikers and much more. You'll also get the Criminal Enterprise starter pack.`,
    brand: 'Rockstar Games',
    department: 'Video Games',
    color: '',
    subDept: 'PlayStation 4',
    sku: 6259727,
    price: 19.99,
    avgRating: 4.8,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: '',
      answer: ''
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6259/6259297_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6259/6259297cv11d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 5,
    name: 'Red Dead Redemption 2 Standard Edition - PlayStation 4',
    description: `Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, Red Dead Redemption 2 is an epic tale of honor and loyalty at the dawn of the modern age.
    America, 1899.
    Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.
    Now featuring additional Story Mode content and a fully-featured Photo Mode, Red Dead Redemption 2 also includes free access to the shared living world of Red Dead Online, where players take on an array of roles to carve their own unique path on the frontier as they track wanted criminals as a Bounty Hunter, create a business as a Trader, unearth exotic treasures as a Collector or run an underground distillery as a Moonshiner and much more.
    This item cannot be returned or refunded, please visit to learn more.`,
    brand: 'Rockstar Games',
    department: 'Video Games',
    color: '',
    subDept: 'PlayStation 4',
    sku: 5352400,
    price: 29.99,
    avgRating: 4.8,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: 'Q: How long is the campaign ?',
      answer: 'A: 50 hours minimum'
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5352/5352400_sa.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5352/5352400cv11d.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5352/5352400cv12d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 6,
    name: 'The Witcher 3: Wild Hunt Complete Edition - PlayStation 4',
    description: `Follow Geralt of Rivia's story through additional adventures in The Witcher 3: Wild Hunt, with access to both expansion packs in one neat little purchase. Download exclusive content including quests, armor and hairstyle sets. Embark on the final journey as Geralt discovers each of the three possible endings to the series in The Witcher 3: Wild Hunt.`,
    brand: 'WB Games',
    department: 'Video Games',
    color: '',
    subDept: 'PlayStation 4',
    sku: 5560400,
    price: 39.99,
    avgRating: 4.8,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: '',
      answer: ''
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5560/5560400_sa.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5560/5560400cv11d.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5560/5560400cv12d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 7,
    name: `Assassin's Creed Odyssey Standard Edition - PlayStation 4`,
    description: `Write your own epic odyssey and become a legendary Spartan hero. Forge your destiny in a world on the brink of tearing itself apart. Influence how history unfolds in an ever-changing world shaped by your choices.`,
    brand: 'Ubisoft',
    department: 'Video Games',
    color: '',
    subDept: 'PlayStation 4',
    sku: 6260468,
    price: 49.99,
    avgRating: 4.7,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: 'Q: Is this game suitable for a 10 year old?',
      answer: `A: It's a long game, and to get the weapons and power-ups to get better and stronger in weapons and strength may become a tedious task for your 10 year old. Also, if your 10 year old wants to be entertained, this will not work for him/her. It does require a lot of patience, and there are some adult situations that you may not want to subject your child to. But to be quite honest with you I would say NO! IT'S RATED "M" FOR THAT REASON! Let your child play games suitable for his/her age range!`
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6260/6260468_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6260/6260468cv11d.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6260/6260468cv13d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 8,
    name: 'Ghost of Tsushima Standard Edition - PlayStation 4',
    description: `In the late 13th century, the Mongol empire has laid waste to entire nations along their campaign to conquer the East. Tsushima Island is all that stands between mainland Japan and a massive Mongol invasion fleet led by the ruthless and cunning general, Khotun Khan. As the island burns in the wake of the first wave of the Mongol assault, samurai warrior Jin Sakai stands as one of the last surviving members of his clan. He is resolved to do whatever it takes, at any cost, to protect his people and reclaim his home. He must set aside the traditions that have shaped him as a warrior to forge a new path, the path of the Ghost, and wage an unconventional war for the freedom of Tsushima.`,
    brand: 'Sony',
    department: 'Video Games',
    color: '',
    subDept: 'PlayStation 4',
    sku: 6419920,
    price: 59.99,
    avgRating: 4.8,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: 'Q: Does this come with any bonuses in the box like a game map poster?',
      answer: 'A: No, it is just the game and the manual. Nothing else special.'
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6419/6419920_sd.jpg;maxHeight=640;maxWidth=550,`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6419/6419920cv13d.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6419/6419920cv14d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 9,
    name: 'Horizon Zero Dawn: Complete Edition - PlayStation 4',
    description: `Become Aloy in Horizon Zero Dawn Complete Edition for PlayStation4, and experience nature versus machine with stunning graphics. This RPG features an immersive storyline based on puzzling through the history of a post-apocalyptic world. Vibrant landscapes and cutting-edge technology collide in Horizon Zero Dawn Complete Edition, creating a memorable gaming experience.`,
    brand: 'Guerrilla Games',
    department: 'Video Games',
    color: '',
    subDept: 'PlayStation 4',
    sku: 6138365,
    price: 19.99,
    avgRating: 4.9,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: 'Q: I know it says complete edition, but on the description it does not mention what exactly that means. Does the game come with the new DLC?',
      answer: `A: According to this item's post on GameStop's page, YES it includes both the main game AND The Frozen Wilds DLC`
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6138/6138365_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6138/6138365cv12d.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6138/6138365cv16d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 10,
    name: 'The Last of Us Part II Standard Edition - PlayStation 4',
    description: `Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving community of survivors has allowed them peace and stability, despite the constant threat of the infected and other, more desperate survivors. When a violent event disrupts that peace, Ellie embarks on a relentless journey to carry out justice and find closure. As she hunts those responsible one by one, she is confronted with the devastating physical and emotional repercussions of her actions.`,
    brand: 'Naughty Dog',
    department: 'Video Games',
    color: '',
    subDept: 'PlayStation 4',
    sku: 6255399,
    price: 59.99,
    avgRating: 4.6,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: 'Q: Does this come with the pre-order bonuses as promised to come with the standard edition? I dont see it listed on the bestbuy listing for this. See attached photo.',
      answer: `A: I did some research - The standard edition, which costs $60, comes with just the base game and will include any pre-order bonuses. The Last of Us Part 2 pre-order bonuses If you pre-order The Last of Us Part 2, you'll receive two in-game items--an ammo capacity upgrade and crafting training manual--at launch. Pre-order the standard or Digital Deluxe edition on the PlayStation Store, and you'll also receive a PSN avatar featuring Ellie's tattoo. Hope this helps!`
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6255/6255399_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6255/6255399cv11d.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6255/6255399cv15d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 11,
    name: 'Cyberpunk 2077 Standard Edition - PlayStation 4, PlayStation 5',
    description: `Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamor, and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character's cyberware, skill set, and playstyle, and explore a vast city where the choices you make shape the story and world around you.`,
    brand: 'WB Games',
    department: 'Video Games',
    color: '',
    subDept: 'PlayStation 4',
    sku: 6255151,
    price: 59.99,
    avgRating: 0.0,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: '',
      answer: ''
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6255/6255151_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6255/6255151cv14d.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6255/6255151cv16d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 12,
    name: `Assassin's Creed Valhalla Standard Edition - PlayStation 4`,
    description: `Upgrade to PlayStation 5 Version: Assassin's Creed Valhalla PlayStation 4 game on Blu-Ray Disc must be kept inserted in a PlayStation 5 console to play the corresponding Assassin's Creed Valhalla PlayStation 5 digital version at no additional cost, when available.
    Requires a PlayStation 5, the game Blu-Ray Disc, a PlayStation Network registration, additional storage & Broadband internet connection. May incur bandwidth usage fees.
    Become Eivor, a legendary Viking raider on a quest for glory. Explore England's Dark Ages as you raid your enemies, grow your settlement, and build your political power.`,
    brand: 'Ubisoft',
    department: 'Video Games',
    color: '',
    subDept: 'PlayStation 4',
    sku: 6142166,
    price: 59.99,
    avgRating: 0.0,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: '',
      answer: ''
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6412/6412166_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6412/6412166cv11d.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6412/6412166cv14d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 13,
    name: 'Microsoft - Xbox One S 1TB Console Bundle - White',
    description: `Unlock a world of endless gaming with this white Microsoft Xbox One S console. The 4K Ultra Blu-ray and 4K video streaming let you play and watch content in high definition, while the built-in Dolby Atmos and DTS:X audio deliver rich sounds during gameplay. This Microsoft Xbox One S console features entertainment apps for more entertainment, and the 1TB of storage offers ample space for games.`,
    brand: 'Microsoft',
    department: 'Video Games',
    color: 'white',
    subDept: 'Xbox One',
    sku: '6415222',
    price: '$299.99',
    avgRating: 4.6,
    colors: ['white', 'black'],
    reviews: [],
    questions: {
      question: 'Q: Can I play my Xbox 360 games on it?',
      answer: 'A: Xbox One S is backwards compatible with hundreds of Xbox 360 and original Xbox games. Discover which Xbox games are backwards compatible here: https://xbox.com/backcompat'
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6415/6415222_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6415/6415222cv11d.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6415/6415222cv12d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 14,
    name: 'Madden NFL 21 - Xbox One',
    description: `Rise to Fame in Madden NFL 21. Pre-order and receive the following.*1 of 32 NFL Team Elite Pack*5 Madden Ultimate Team Gold Team Fantasy Packs*1 Uniform Pack of Your ChoiceA new generation is leaving its mark in the NFL. Will you rise to the occasion? Change the game and take control of your own legacy.`,
    brand: 'EA Sports',
    department: 'Video Games',
    color: '',
    subDept: 'Xbox One',
    sku: 6407617,
    price: 59.99,
    avgRating: 0.0,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: '',
      answer: ''
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6407/6407617_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6407/6407617cv11d.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6407/6407617cv15d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 15,
    name: 'Halo: The Master Chief Collection Standard Edition - Xbox One',
    description: `The Master Chief's iconic journey includes six games, built for PC and collected in a single integrated experience where each game is delivered over time. Whether you're a long-time fan or meeting Spartan 117 for the first time, The Master Chief Collection is the definitive Halo gaming experience.`,
    brand: '343 Industries',
    department: 'Video Games',
    color: '',
    subDept: 'Xbox One',
    sku: 7041003,
    price: 29.99,
    avgRating: 4.5,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: 'Q: Can you play this on PC? Or just XO.',
      answer: 'A: This version is to be played on your xbox one console only, the pc version must be purchased through STEAM or Windows 10 App Store, I know because I own both versions.'
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/7041/7041003_sa.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 16,
    name: 'Forza Motorsport 7 Standard Edition - Xbox One',
    description: 'Experience the danger and beauty of competitive racing at the limit. Enjoy gorgeous graphics at 60fps and true 4K resolution in HDR. Collect over 700 Forzavista™ cars, including the largest assortment of Ferraris, Porsches, and Lamborghinis ever. Master over 30 famous environments with race conditions that change every time you race.',
    brand: 'Microsoft',
    department: 'Video Games',
    color: '',
    subDept: 'Xbox One',
    sku: 5891060,
    price: 39.99,
    avgRating: 4.7,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: 'Q: Does forza horizon 7 for xbox one have 2 player offline',
      answer: 'A: Sadly, as of 10-11-19 forza horizon 7 does not yet exist. However if you intended to say forza motorsport 7, yes it is split screen. If you ment forza horizon 4, the latest horizon installation, no there is no local co-op, but online servers do exist.'
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5891/5891060_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5891/5891060cv13d.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5891/5891060cv12d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 17,
    name: 'Halo 5: Guardians Standard Edition - Xbox One',
    description: `A mysterious and unstoppable force threatens the galaxy, the Master Chief is missing and his loyalty questioned. Experience the most dramatic Halo story to date in a 4-player cooperative epic that spans three worlds. Challenge friends and rivals in new multiplayer modes: Warzone, massive 24-player battles, and Arena, pure 4-vs-4 competitive combat.*
    *Online multiplayer features require Xbox Live Gold membership (sold separately).`,
    brand: '343 Indusries',
    department: 'Video Games',
    color: '',
    subDept: 'Xbox One',
    sku: 9441137,
    price: 15.99,
    avgRating: 4.4,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: 'Q: Do you need internet to download this game if you have the physical copy because I dont have internet so would I be able to play download and play this offline line with 2-4 people offline (couch co op)',
      answer: 'A: You can play this without internet but any updates are going to require internet connection.'
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9441/9441137_sa.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9441/9441137_001_ss.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 18,
    name: 'Call of Duty: Modern Warfare Standard Edition - Xbox One',
    description: 'Prepare to go dark, Modern Warfare® is back.',
    brand: 'Activision',
    department: 'Video Games',
    color: '',
    subDept: 'Xbox One',
    sku: 6255144,
    price: 59.99,
    avgRating: 4.7,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: 'Q: Is this game just like being in the military?',
      answer: 'A: It is a 1:1 simulation. So be careful out there.'
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6255/6255144_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6255/6255144cv11d.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6255/6255144cv13d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 19,
    name: 'NBA 2K20 Standard Edition - Xbox One',
    description: `NBA 2K has evolved into much more than a basketball simulation. 2K continues to redefine what's possible in sports gaming with NBA 2K20, featuring great graphics and gameplay, ground-breaking game modes, and unparalleled player control and customization. Plus, with its immersive open-world Neighborhood, NBA 2K20 is a platform for gamers and ballers to come together and create what's next in basketball culture.`,
    brand: '2K Sports',
    department: 'Video Games',
    color: '',
    subDept: 'Xbox One',
    sku: 6358991,
    price: 18.99,
    avgRating: 4.7,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: 'Q: Will there be a campaign with it?',
      answer: 'A: There will be a my career which will have it’s own storyline'
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6358/6358991_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6358/6358991cv11d.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6358/6358991cv12d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 20,
    name: 'Mortal Kombat 11 Aftermath Kollection - Xbox One',
    description: `Unleash fury on opponents in this Mortal Kombat 11 Aftermath Kollection for Xbox One. The limitless customization of characters offers a personalized gaming experience, while the multiple and newly added fighters, including Sheeva, provide different styles of throwing crushing blows. Mortal Kombat 11 Aftermath Kollection features multiplayer support to test your combo skills against friends.`,
    brand: 'WB Games',
    department: 'Video Games',
    color: '',
    subDept: 'Xbox One',
    sku: 6413221,
    price: 39.99,
    avgRating: 4.8,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: '',
      answer: ''
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6413/6413221_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6413/6413221cv11d.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6413/6413221cv14d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 21,
    name: 'Gears 5 Standard Edition - Xbox One',
    description: `From one of gaming's most acclaimed sagas, Gears is bigger than ever, with five thrilling modes and the deepest campaign yet. With all-out war descending, Kait Diaz breaks away to uncover her connection to the enemy and discovers the true danger to Sera - herself.`,
    brand: 'Microsoft',
    department: 'Video Games',
    color: '',
    subDept: 'Xbox One',
    sku: 6255311,
    price: 25.99,
    avgRating: 4.7,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: 'Q: When is this game on sale til ?',
      answer: 'A: Probably until it is no longer available on xbox gamepass'
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6255/6255311_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6255/6255311cv11d.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6255/6255311cv13d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 22,
    name: 'Far Cry 6 Standard Edition - Xbox One, Xbox Series X',
    description: `Game leverages Smart Delivery allowing access to both the Xbox One title and Xbox Series X title when available.
    Welcome to Yara, a tropical paradise frozen in time. As the dictator of Yara, Anton Castillo is intent on restoring his nation back to its former glory by any means, with his son, Diego, following in his bloody footsteps. Their oppressive rule has ignited a revolution.`,
    brand: 'Ubisoft',
    department: 'Video Games',
    color: '',
    subDept: 'Xbox One',
    sku: 6421395,
    price: 59.99,
    avgRating: 0.0,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: '',
      answer: ''
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6421/6421395_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6421/6421395cv13d.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6421/6421395cv14d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 23,
    name: 'LEGO Star Wars: The Skywalker Saga Standard Edition - Xbox One',
    description: 'Play through nine movies in one game with LEGO Star Wars: The Skywalker Saga for Xbox One. All nine original Star Wars films are featured in this installment, and players can start playing from any point in the film timeline. LEGO Star Wars: The Skywalker Saga features hundreds of playable characters, offering something for every fan.',
    brand: 'WB Games',
    department: 'Video Games',
    color: '',
    subDept: 'Xbox One',
    sku: 6352427,
    price: 59.99,
    avgRating: 0.0,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: 'Q: When is the exact release date of the game?',
      answer: 'A: Well to answer your question, no one really knows the release date as the LEGO team kept their mouth shut for over 8 months so far while the game was in development. However in recent news, with the release of the mandalorian LEGO ship that is said to be on sale in September first with a label that said (inside have a code that can unlock the ship inside the game) so fans and experts alike have guessed that it should be release before September. Don’t get your hopes up though, we don’t yet know if there’s been a delay due to the corona virus or not so stay tune'
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6352/6352427_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6352/6352427cv11d.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6352/6352427cv15d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 24,
    name: 'Nintendo - Switch 32GB Console',
    description: `Introducing Nintendo Switch, the new home video game system from Nintendo. In addition to providing single and multiplayer thrills at home, the Nintendo Switch system can be taken on the go so players can enjoy a full home console experience anytime, anywhere. The mobility of a handheld is now added to the power of a home gaming system, with unprecedented new play styles brought to life by the two new Joy-Con controllers.
    PLAY ANYWHERE
    At home the system rests in the Nintendo Switch dock, which lets you play with family and friends on a TV in the comfort of your living room.
    By simply lifting Nintendo Switch from the dock at any time, the system instantly transitions to handheld mode, and the same great gaming experience that was being enjoyed at home now travels with you. The portability of Nintendo Switch is enhanced by its 6.2-inch screen, which displays bright, high-definition gameplay at the park, on an airplane, in a car, or at a friend's apartment.
    Nintendo Switch comes with two Joy-Con that can each act as a standalone controller with an analog stick, a full complement of face and shoulder buttons, built in motion-sensing technology and new HD Rumble. They can be inserted into a Joy-Con grip accessory to be used like a traditional controller, held comfortably in each hand for independent left and right motion controls, or shared between two players for instant multiplayer gaming in front of the TV or out on the go.
    This bundle includes the Nintendo Switch console and Nintendo Switch dock in black, with contrasting left and right Joy-Con controllers-one blue, one red. It also includes all the extras you need to get started.
    If you don’t already have a Nintendo Switch Online membership, you can try it out with a free 7-day trial. Don't worry if you already activated a previous free trial— an additional seven-day free trial is now available.
    Nintendo Switch Online membership and Nintendo Account required for online features. Free trial automatically converts to 1-month auto-renewing membership unless automatic renewal is turned off by the end of the free trial. Credit card/PayPal account required for 18+. Free trial cannot be redeemed by a Nintendo Account with an active Individual Membership or Family Membership. Not available in all countries. Internet access required for online features. Terms apply. nintendo.com/switch-online`,
    brand: 'Nintendo',
    department: 'Video Games',
    color: '',
    subDept: 'Nintendo Switch',
    sku: 6364255,
    price: 299.99,
    avgRating: 4.8,
    colors: ['Gray Joy-Con', 'Neon Red/Neon Blue Joy-Con'],
    reviews: [],
    questions: {
      question: 'Q: When will there be a restock of this console, they seem to be sold out at literally every store out there (Not just Best Buy). Do you believe the sell out is from the release of Animal Crossing or the Carona Virus? And will the virus affect new shipments?',
      answer: 'A: You are correct. many people are taking advantage of the very limited production due to corona and adding a $200 resale tax to the new consoles. humans make me sick sometimes.'
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6364/6364255_sa.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 25,
    name: 'Super Smash Bros. Ultimate - Nintendo Switch',
    description: `Gaming icons clash in the ultimate brawl you can play anytime, anywhere! Smash rivals off the stage as new characters Simon Belmont and King K. Rool join Inkling, Ridley, and every fighter in Super Smash Bros. history. Enjoy enhanced speed and combat at new stages based on the Castlevania series, Super Mario Odyssey, and more!
    Having trouble choosing a stage? Then select the Stage Morph option to transform one stage into another while battling—a series first! Plus, new echo fighters Dark Samus, Richter Belmont, and Chrom join the battle. Whether you play locally or online, savor the faster combat, new attacks, and new defensive options, like a perfect shield. Jam out to 900 different music compositions and go 1-on-1 with a friend, hold a 4-player free-for-all, kick it up to 8-player battles and more! Feel free to bust out your GameCube controllers—legendary couch competitions await—or play together anytime, anywhere!
    If you don’t already have a Nintendo Switch Online membership, you can try it out with a free 7-day trial. Don't worry if you already activated a previous free trial— an additional seven-day free trial is now available.`,
    brand: 'Nintendo',
    department: 'Video Games',
    color: '',
    subDept: 'Nintendo Switch',
    sku: 5723319,
    price: 59.99,
    avgRating: 4.9,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: `Q: Due to fact that ALL Smash players are wanting Snake back and massively sad & dissapointed when he isn't back...Will you learn from your mistakes this time and bring him back?`,
      answer: 'A: Hello, I am Masahiro Sakur-Buy, expert of the Super Smash Bros. series at Best Buy. After taking thoughts into consideration, I am proud to inform you Everyone Is Here. Smash Bros spans across multiple decades, and the vision for this Smash Bros was to include every fighter from past entries in the series. It truly will make everyone at Best Buy happy, as well as each and every single fan. Please, enjoy the game, as well as Geek Squad services. -Massive Hero Soccer Guy'
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5723/5723319_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5723/5723319cv12d.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5723/5723319cv11d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 26,
    name: 'The Legend of Zelda: Breath of the Wild - Nintendo Switch',
    description: 'Forget everything you know about The Legend of Zelda games. Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule in this stunning Open-Air Adventure. Now on Nintendo Switch, your journey is freer and more open than ever. Take your system anywhere, and adventure as Link any way you like.',
    brand: 'Nintendo',
    department: 'Video Games',
    color: '',
    subDept: 'Nintendo',
    sku: 5721500,
    price: 49.99,
    avgRating: 4.9,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: 'Q: QuestionDo weapons break in the middle of intense combat?',
      answer: 'A: Yes'
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721500_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721500cv12d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 27,
    name: 'Mario Kart 8 Deluxe - Nintendo Switch',
    description: `Hit the road with the definitive version of Mario Kart 8 and play anytime, any-where! Race your friends or battle them in a revised battle mode on new and returning battle courses. Play locally in up to 4-player multiplayer in 1080p while playing in TV Mode. Every track from the Wii U version, including DLC, makes a glorious return. Plus, the Inklings appear as all-new guest characters, along with returning favorites, such as King Boo, Dry Bones, and Bowser Jr.!
    If you don’t already have a Nintendo Switch Online membership, you can try it out with a free 7-day trial. Don't worry if you already activated a previous free trial— an additional seven-day free trial is now available.`,
    brand: 'Nintendo',
    department: 'Video Games',
    color: '',
    subDept: 'Nintendo Switch',
    sku: 5723304,
    price: 49.99,
    avgRating: 4.9,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: 'Q: Can you play 3 or 4 players on one console? ((Without going online?)) I know that you would need extra controllers, but will it do a 4 person split screen? Thanks, Noob',
      answer: 'A: Yes you can 1-4 players, it should say it on the back of the game case'
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5723/5723304_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5723/5723304cv11d.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5723/5723304cv12d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 28,
    name: 'Animal Crossing: New Horizons - Nintendo Switch',
    description: `Escape to a deserted island and create your own paradise as you explore, create, and customize in the Animal Crossing: New Horizons game. Your island getaway has a wealth of natural resources that can be used to craft everything from tools to creature comforts. You can hunt down insects at the crack of dawn, decorate your paradise throughout the day, or enjoy sunset on the beach while fishing in the ocean. The time of day and season match real life, so each day on your island is a chance to check in and find new surprises all year round.
    Show off your island utopia to family and friends—or pack your bags and visit theirs. Whether playing online* or with others beside you**, island living is even better when you can share it. Even without hopping on a flight, you’ll meet a cast of charming animal residents bursting with personality. Friendly faces like Tom Nook and Isabelle will lend their services and happily help you grow your budding community. Escape to your island getaway—however, whenever, and wherever you want.
    Polygon - "...crafting systems in this game are lovely."`,
    brand: 'Nintendo',
    department: 'Video Games',
    color: '',
    subDept: 'Nintendo Switch',
    sku: 5723316,
    price: 59.99,
    avgRating: 4.9,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: 'Q: When you download it on digital can it go on a Tablet!! Like a Samsung tablet or Ipad??',
      answer: 'A: It’s a Nintendo Switch game ... download only works for Nintendo Switch console'
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5723/5723316_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5723/5723316cv11d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 29,
    name: `Luigi's Mansion 3 - Nintendo Switch`,
    description: `Luigi’s invited to the towering Last Resort hotel, but when Mario and friends go missing, our green-clad hero will have to conquer his fears to save them! Slam, blow away, and vacuum up ghosts with the all-new Poltergust G-00, and join forces with Gooigi to overcome the puzzling contraptions and mischievous boss on each themed floor. And that’s just the Last Resort. Enter the ScareScraper for 8-player local wireless or online co-op gameplay.
    See if you can defeat all the ghosts, rescue all the toads, or clear other objectives before time runs out…in the ScareScraper! And for more mini-game madness, compete on teams at the ScreamPark! Whether you play with friends or wander the hotel alone, you’ll be sucked in by the atmospheric music and ghoulish décor of every cobwebby corner you explore. Why not take in the cinematic sights and sounds with a friend? In the main adventure, you and a friend can play together as Luigi and Gooigi in two-player co-op! Gooigi can walk on spikes, slip through tight spaces, and help Luigi overcome obstacles he can’t tackle alone. Never hurts to have a friend in this hotel; it may not be very spooky, but Luigi begs to differ!`,
    brand: 'Nintendo',
    department: 'Video Games',
    color: '',
    subDept: 'Nintendo Switch',
    sku: 6255379,
    price: 59.99,
    avgRating: 4.8,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: `Q: Can you play as different character's ?,`,
      answer: `A: You play in the game as the main character Luigi, when you need help, you can also call on Gooigi. Gooigi is his ectoplasmic doppleganger.`
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6255/6255379_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6255/6255379cv12d.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6255/6255379cv13d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 30,
    name: 'Super Mario Odyssey Standard Edition - Nintendo Switch',
    description: `Embark on a cap-tivating, globe-trotting adventure!
    Join Mario on a massive, globe-trotting 3D adventure and use his incredible new abilities to collect Moons so you can power up your airship, the Odyssey, and rescue Princess Peach from Bowser's wedding plans! This sandbox-style 3D Mario adventure—the first since 1996's beloved Super Mario 64 and 2002's Nintendo GameCube classic Super Mario Sunshine—is packed with secrets and surprises, and with Mario's new moves like cap throw, cap jump, and capture, you'll have fun and exciting gameplay experiences unlike anything you've enjoyed in a Mario game before. Get ready to be whisked away to strange and amazing places far from the Mushroom Kingdom!`,
    brand: 'Nintendo',
    department: 'Video Games',
    color: '',
    subDept: 'Nintendo Switch',
    sku: 5721722,
    price: 49.99,
    avgRating: 4.9,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: 'Q: I preordered 2 copies of the game (2 separate transactions) but only received a $10 voucher for one of them. When should I expect the second voucher? I double checked and did not see anything that mentioned that it is limited to only one.',
      answer: 'A: I did the same thing with NBA 2k18. Read the fine print. Only one reward per account per title. You won’t get two certificates, only one'
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721722_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721722cv13a.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 31,
    name: 'Donkey Kong Country: Tropical Freeze - Nintendo Switch',
    description: `Take on new challenges with the old Kong crew when you play Donkey Kong Country Tropical Freeze for Nintendo Switch. Donkey, Diddy, Dixie and Cranky team up for more jumps and rolls, while Funky Kong climbs onto his trusty surfboard to show off his best moves. Rated E for everyone, Donkey Kong Country Tropical Freeze is an ideal option for family game night.',
    brand: 'Nintendo`,
    department: 'Video Games',
    color: '',
    subDept: 'Nintendo Switch',
    sku: 6193916,
    price: 59.99,
    avgRating: 4.8,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: 'Q: Do they have this game for Xbox one?',
      answer: 'A: No... its a Nintendo property. Why would it be on a competitors console?'
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6193/6193916_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6193/6193916cv11d.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6193/6193916cv13d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 32,
    name: `Yoshi's Crafted World - Nintendo Switch`,
    description: `Jump into a new Yoshi adventure in a world made of everyday objects - like boxes and paper cups! As Yoshi, you’ll leap up high, gulp down enemies, and set out on a treasure hunt to find all the different collectables. On the flip side, stages can be played backwards, providing new perspectives to explore and new ways to locate some of the more craftily hidden items!
    It all started when Kamek and Baby Bowser set out to steal a gem-set stone. Legend has it that this fabled artifact can grant the bearer their wildest dreams! But when the artifact’s gems are sent flying, it falls upon Yoshi and friends to find them. Luckily, saving the day can be cooperative and challenging. Pass a Joy-Con™ controller to a friend to team up as fellow Yoshis. Also, Mellow mode gives Yoshi wings for a breezier experience, which may come in handy! Finding all the flowers, coins, and Poochy Pups is no small feat! For extra protection, suit up in one of the handicraft costumes you can unlock in-game!`,
    brand: 'Nintendo',
    department: 'Video Games',
    color: '',
    subDept: 'Nintendo',
    sku: 5897109,
    price: 49.99,
    avgRating: 4.7,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: 'Q: Why is the game called "Yoshi"? Seems awfully generic',
      answer: `A: Yes bestbuy just threw Yoshi as the title for this preorder. Nintendo released gameplay of Yoshi's Crafted World (that's the title for the new switch game). I'm sure bestbuy will update game title when release information is obtained.`
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5897/5897109_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5897/5897109cv11d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 33,
    name: 'New Super Mario Bros. U Deluxe - Nintendo Switch',
    description: `Join Mario, Luigi, and pals for single-player or multiplayer fun anytime, anywhere. Take on two family-friendly, side-scrolling adventures with up to three friends* as you try to save the Mushroom Kingdom. Includes the New Super Mario Bros. U game and a harder, faster New Super Luigi U game - both of which include Nabbit and Toadette as playable characters.
    Two games in one for double the fun. Simple, straightforward controls, new playable characters optimized for younger and less-experienced players, and a wealth of bonus content, such as a Hints gallery and helpful reference videos**, make this a perfect choice for anyone looking to introduce their family to the wonderful world of Mario. All a player needs is one Joy-Con controller, so two people can team up right out of the box. Tackle 164 platforming courses in two main game modes, and enjoy extra replayability with three additional game modes, in which you can also play as a Mii character: Challenges, Boost Rush, and Coin Battle.`,
    brand: 'Nintendo',
    department: 'Video Games',
    color: '',
    subDept: 'Nintendo',
    sku: 6311892,
    price: 49.99,
    avgRating: 4.8,
    colors: ['physical copy', 'digital download'],
    reviews: [],
    questions: {
      question: 'Q: What do you need to buy to play this game?',
      answer: 'A: You need to have a Switch or Switch Lite. If you have that, they both come with controllers. So the actual console and the game is the minimum you need.'
    },
    images: [`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6311/6311892_sd.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6311/6311892cv11d.jpg;maxHeight=640;maxWidth=550`, `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6311/6311892cv14d.jpg;maxHeight=640;maxWidth=550`],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 90,
    name: 'Apple - 21.5" iMac® with Retina 4K display - Intel Core i3 (3.6GHz) - 8GB Memory - 1TB Hard Drive',
    description: "iMac performance is at an all-time high with a new eighth-generation Intel Core processor, powerful Radeon Pro 500X-series graphics, Thunderbolt 3 (USB-C) connectivity, and stunning Retina 4K display with one billion colors and 500 nits of brightness for vibrant images and razor-sharp text.",
    brand: 'Apple',
    department: 'Computers',
    color: 'Silver',
    subDept: 'Desktops',
    sku: 5998901,
    price: 1299.99,
    avgRating: 4.6,
    colors: ['Silver'],
    reviews: [],
    questions: {
      question: 'Why is this computer so expensive?',
      answer: "Apple's reputation and brand allow it to charge a premium for its high-end products."
      },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5998/5998901_sd.jpg;maxHeight=1000;maxWidth=1000', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5998/5998901ld.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5998/5998901cv12d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 91,
    name: 'Apple - 27" iMac® with Retina 5k display - Intel Core i5 (3.1GHz) - 8GB Memory - 1TB Fusion Drive',
    description: 'iMac performance is at an all-time high with a new eighth-generation Intel Core processor, powerful Radeon Pro 500X-series graphics, Thunderbolt 3 (USB-C) connectivity, and stunning Retina 5K display with one billion colors and 500 nits of brightness for vibrant images and razor-sharp text.',
    brand: 'Apple',
    department: 'Computers',
    color: 'Silver',
    subDept: 'Desktops',
    sku: 5998910,
    price: 1999.99,
    avgRating: 4.8,
    colors: ['Silver'],
    reviews: [],
    questions: {
      question: 'Does this computer have a headphone jack?',
      answer: "Yes."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5998/5998910_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5998/5998910ld.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5998/5998910cv12d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 92,
    name: 'Apple - MacBook Pro - 16" Display with Touch Bar - Intel Core i7 - 16GB Memory - AMD Radeon Pro 5300M - 512GB SSD (Latest Model)',
    description: 'Expand your view of everything on MacBook Pro thanks to a larger 16" Retina display with sharper pixel resolution and support for millions of colors.¹ Harness the power of 6-core processors and AMD Radeon Pro 5000M series graphics with 4GB of GDDR6 memory, together with an optimized thermal architecture for groundbreaking performance. Featuring 16GB memory and 512GB of storage.³ Touch ID and the Touch Bar. And all-day battery life.² Designed for pros who put performance above all else, MacBook Pro gives you the power to accomplish anything, anywhere.',
    brand: 'Apple',
    department: 'Computers',
    color: 'Space Gray',
    subDept: 'Laptops',
    sku: 6366564,
    price: 2099.99,
    avgRating: 4.8,
    colors: ['Space Gray', 'Silver'],
    reviews: [],
    questions: {
      question: 'What types of ports does this computer have?',
      answer: "It has four USB-C ports and one headphone jack."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6394/6394170_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6394/6394170cv11d.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6394/6394170cv14d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 93,
    name: 'Apple - MacBook Pro - 13" Display with Touch Bar - Intel Core i5 - 16GB Memory - 512GB SSD (Latest Model)',
    description: "MacBook Pro has a tenth-generation quad-core Intel processor with Turbo Boost up to 3.8GHz. A brilliant and colorful Retina display with True Tone technology for a more true-to-life viewing experience. A backlit Magic Keyboard and Touch ID. Fast integrated graphics. And the versatile Touch Bar for more ways to be productive. It's Apple's most powerful 13-inch notebook. Pushed even further.",
    brand: 'Apple',
    department: 'Computers',
    color: 'Space Gray',
    subDept: 'Laptops',
    sku: 6287726,
    price: 1799.99,
    avgRating: 4.8,
    colors: ['Space Gray', 'Silver'],
    reviews: [],
    questions: {
      question: 'Is this a good computer for students?',
      answer: "Yes, the 13-inch size makes the device very portable and light."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6287/6287723_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6287/6287723cv11d.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6287/6287723cv13d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 94,
    name: 'Apple - MacBook Air 13.3" Laptop with Touch ID - Intel Core i3 - 8GB Memory - 256GB Solid State Drive (Latest Model)',
    description: "Available in silver, space gray, and gold, the latest MacBook Air features a stunning Retina display with True Tone technology, Touch ID, a backlit Magic Keyboard, and a Force Touch trackpad - all housed in a thin and light iconic wedge design made from 100 percent recycled aluminum. And with 11-hour battery life, it's a do-it-all notebook that goes all day long.",
    brand: 'Apple',
    department: 'Computers',
    color: 'Space Gray',
    subDept: 'Laptops',
    sku: 6366606,
    price: 949.99,
    avgRating: 4.8,
    colors: ['Space Gray', 'Silver', 'Gold'],
    reviews: [],
    questions: {
      question: 'How much does the computer weigh?',
      answer: "About 2.75 pounds."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6366/6366606_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6366/6366606cv11d.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6366/6366606cv13d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 95,
    name: 'Apple - MacBook Air 13.3" Laptop with Touch ID - Intel Core i5 - 8GB Memory - 512GB Solid State Drive (Latest Model)',
    description: "Available in silver, space gray, and gold, the latest MacBook Air features a stunning Retina display with True Tone technology, Touch ID, a backlit Magic Keyboard, and a Force Touch trackpad - all housed in a thin and light iconic wedge design made from 100 percent recycled aluminum. And with 11-hour battery life, it's a do-it-all notebook that goes all day long.",
    brand: 'Apple',
    department: 'Computers',
    color: 'Gold',
    subDept: 'Laptops',
    sku: 6366614,
    price: 949.99,
    avgRating: 4.8,
    colors: ['Space Gray', 'Silver', 'Gold'],
    reviews: [],
    questions: {
      question: 'Does the touchbar freeze a lot?',
      answer: "It is possible for the touchbar to freeze. Please do not throw your computer if this happens."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6366/6366612_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6366/6366612cv11d.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6366/6366612cv13d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 96,
    name: 'Apple - MacBook Pro - 13" Display with Touch Bar - Intel Core i5 - 16GB Memory - 1TB SSD (Latest Model)',
    description: "MacBook Pro has a tenth-generation quad-core Intel processor with Turbo Boost up to 3.8GHz. A brilliant and colorful Retina display with True Tone technology for a more true-to-life viewing experience. A backlit Magic Keyboard and Touch ID. Fast integrated graphics. And the versatile Touch Bar for more ways to be productive. It's Apple's most powerful 13-inch notebook. Pushed even further.",
    brand: 'Apple',
    department: 'Computers',
    color: 'Space Gray',
    subDept: 'Laptops',
    sku: 6287730,
    price: 1999.99,
    avgRating: 4.8,
    colors: ['Space Gray', 'Silver'],
    reviews: [],
    questions: {
      question: 'How many photos can I put on this laptop?',
      answer: "It is possible to store about 250,000 photos taken with a 12MP camera on 1TB of storage."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6287/6287723_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6287/6287723cv11d.jpg','https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6287/6287723cv13d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 97,
    name: 'Dell - Inspiron 2-in-1 - 15.6" 4K UltraHD Touch Laptop - Intel Core i7 - 16GB RAM - 1TB SSD+32GB Intel Optane -NVIDIA MX330',
    description: 'Dell Inspiron Convertible 2-in-1 Laptop: Handle your daily computing tasks with this 15.6-inch 4K Dell Inspiron notebook. The 16GB RAM reduces slowdowns during operation for multitasking across open tabs, while the Intel Core i7 processor provides powerful support for programs. This Dell Inspiron notebook features a robust 1TB SSD plus 32GB Intel Optane to store files and programs while accelerating boot up times. Equipped with NVIDIA GeForce MX330 Graphics to enhance productivity and power.',
    brand: 'Dell',
    department: 'Computers',
    color: 'Black',
    subDept: 'Laptops',
    sku: 6409060,
    price: 1399.99,
    avgRating: 4.8,
    colors: ['Black'],
    reviews: [],
    questions: {
      question: "What's a 2-in-1 laptop?",
      answer: "You get the best of both worlds with a tablet and laptop in one...how fun!"
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6409/6409060_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6409/6409060_rd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6409/6409060cv13d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 98,
    name: 'Dell - Inspiron 17.3" Laptop - Intel Core i7 - 8GB Memory - 2TB HDD',
    description: 'Dell Inspiron Laptop: Boost your productivity with this black Dell Inspiron laptop. An Intel Core i7 processor and 8GB of RAM run multiple demanding applications simultaneously for seamless multitasking, while the 2TB HDD offers vast storage space. This Dell Inspiron laptop has Intel Iris Plus integrated graphics for delivering stunning visuals on the 17.3-inch Full HD display.',
    brand: 'Dell',
    department: 'Computers',
    color: 'Black',
    subDept: 'Laptops',
    sku: 6406467,
    price: 1399.99,
    avgRating: 4.5,
    colors: ['Black'],
    reviews: [],
    questions: {
      question: "What's a 2-in-1 laptop?",
      answer: "You get the best of both worlds with a tablet and laptop in one...how fun!"
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6406/6406467_sd.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 99,
    name: 'Dell - Latitude 14" Laptop - Intel Core i7 - 16GB Memory - 512GB SSD',
    description: 'Complete work on time with this Dell Latitude 5400 laptop. The Intel Core i7 processor and 16GB of RAM offer smooth performance, while the 512GB SSD provides ample storage space and swift boots. This Dell Latitude 5400 laptop has Intel UHD 620 integrated graphics for crisp, detailed visuals on the 14-inch Full HD display.',
    brand: 'Dell',
    department: 'Computers',
    color: 'Black',
    subDept: 'Laptops',
    sku: 6362950,
    price: 1690.99,
    avgRating: 4.0,
    colors: ['Black'],
    reviews: [],
    questions: {
      question: "What is a laptop?",
      answer: "A portable computer."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6362/6362950_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6362/6362950cv11d.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6362/6362950cv12d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 100,
    name: 'HP - ENVY 17.3" Touch-Screen Laptop - Intel Core i7 - 12GB Memory - 512GB SSD + 32GB Optane – NVIDIA GeForce MX330 - Natural',
    description: 'HP ENVY Laptop: Unleash your creativity with this 17.3-inch HP ENVY laptop. The Intel Core i7 processor and 12GB of RAM offer fast, responsive performance, while the 512GB SSD provides storage space and rapid data access. This 17.3-inch HP ENVY laptop has an NVIDIA GeForce MX330 graphics card for fluid visuals when running CAD, video editing and gaming software.',
    brand: 'HP',
    department: 'Computers',
    color: 'Silver',
    subDept: 'Laptops',
    sku: 6402200,
    price: 1249.99,
    avgRating: 4.7,
    colors: ['Silver'],
    reviews: [],
    questions: {
      question: "Will people envy me if I get this laptop?",
      answer: "Probably not."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6402/6402200_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6402/6402200_rd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6402/6402200cv10d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 101,
    name: 'HP - Spectre x360 2-in-1 15.6" 4K Ultra HD Touch-Screen Laptop - Intel Core i7 - 16GB Memory - GeForce MX330 - 512GB SSD',
    description: 'HP Spectre x360 Convertible 2-in-1 Laptop: Finish work on time with this HP Spectre x360 convertible laptop. An Intel Core i7 processor and 16GB of RAM handle multiple office programs effortlessly, while the 522GB SSD and 32GB of Intel Optane memory offer ample media storage and rapid OS boots. This HP Spectre x360 convertible laptop has an NVIDIA GeForce MX330 graphics card, which renders detailed visuals on the 15.6-inch 4K touchscreen.',
    brand: 'HP',
    department: 'Computers',
    color: 'Black',
    subDept: 'Laptops',
    sku: 6406695,
    price: 1599.99,
    avgRating: 4.8,
    colors: ['Black'],
    reviews: [],
    questions: {
      question: "What is 4k?",
      answer: "4K means a horizontal resolution of 4,096 pixels."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6406/6406695_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6406/6406695cv1d.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6406/6406695cv4d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 102,
    name: 'HP - Pavilion x360 2-in-1 11.6" Touch-Screen Laptop - Intel Pentium - 4GB Memory - 128GB Solid State Drive',
    description: 'HP Pavilion x360 Convertible 2-in-1 Laptop: Work or enjoy entertainment anywhere with this lightweight HP Pavilion convertible laptop. The Windows 10 Home OS and 128GB solid-state drive offer rapid boot times and responsiveness, while Bluetooth technology supports wireless devices for convenience. This HP Pavilion convertible laptop delivers an immersive media experience with an 11.5-inch HD touchscreen and high-quality B&O speakers.',
    brand: 'HP',
    department: 'Computers',
    color: 'Silver',
    subDept: 'Laptops',
    sku: 6339311,
    price: 399.99,
    avgRating: 4.6,
    colors: ['Silver'],
    reviews: [],
    questions: {
      question: "Can I game on this laptop?",
      answer: "If you have too little RAM—say, 4GB—there's a good chance a lot of the games you want to play just won't run, or at least won't run well."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6339/6339311_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6339/6339311_rd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6339/6339311cv4d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 103,
    name: 'HP - Pavilion 27" Touch-Screen All-In-One - Intel Core i7 - 12GB Memory - 256GB Solid State Drive',
    description: "Enjoy smooth multitasking and high-quality entertainment with this HP Pavilion all-in-one desktop. The 12GB of RAM and hexa-core Intel Core i7 processor handle high-bandwidth computing, and the 27-inch Full HD touch screen display lets you navigate multiple windows quickly. Launch and run programs without lag thanks to this HP Pavilion all-in-one desktop's 256GB solid-state drive.",
    brand: 'HP',
    department: 'Computers',
    color: 'White',
    subDept: 'Desktops',
    sku: 6331730,
    price: 1299.99,
    avgRating: 4.7,
    colors: ['White'],
    reviews: [],
    questions: {
      question: "Can I game on this laptop?",
      answer: "If you're an average PC user outside of heavy data processing, you probably won't need more than 8 to 12GB of laptop RAM. For those who want to push the boundaries of a PC's capabilities and run several large programs at once, 12GB RAM laptops, 16GB RAM laptops, 32GB RAM laptops, or even 64GB are considerable options."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6331/6331730cv16d.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6331/6331730_bd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6331/6331730ld.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 104,
    name: 'HP - ENVY 27" Touch-Screen All-In-One - Intel Core i7 - 16GB Memory - 256GB SSD + 2TB Hard drive',
    description: 'Increase desk space with this HP ENVY all-in-one PC. Its dual hard drives, 256GB solid-state drive and 2TB HDD, provide ample file storage space, and its 27-inch touch-enabled display has a 2560 x 1440 resolution that shows crisp, colorful pictures. This HP ENVY all-in-one PC has an Intel Core i7 processor and 16GB of RAM for smooth multitasking.',
    brand: 'HP',
    department: 'Computers',
    color: 'Silver',
    subDept: 'Desktops',
    sku: 6221032,
    price: 1799.99,
    avgRating: 4.7,
    colors: ['Silver'],
    reviews: [],
    questions: {
      question: "Is this a good laptop?",
      answer: "This is a high-end laptop that can fit most consumers needs."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6221/6221032_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6221/6221032_rd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6221/6221032ld.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 105,
    name: 'Dell - Inspiron 23.8" Touch-Screen All-In-One - Intel Core i3 - 8GB Memory - 256GB SSD',
    description: 'Boost your productivity with this 23.8-inch Dell Inspiron all-in-one desktop computer. The Intel Core i3 processor and 8GB of RAM ensure fast, responsive program execution, while the 256GB SSD provides vast storage space for files. This Dell Inspiron all-in-one desktop computer has Intel UHD 620 integrated graphics that produce detailed visuals on the Full HD touch screen.',
    brand: 'Dell',
    department: 'Computers',
    color: 'Black',
    subDept: 'Desktops',
    sku: 6398974,
    price: 679.99,
    avgRating: 4.7,
    colors: ['Black'],
    reviews: [],
    questions: {
      question: "What does all-in-one mean?",
      answer: "An all in one computer is basically a monitor in which you just plug in your mouse and keyboard, all the hardware are inside the monitor's case."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6398/6398974_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6398/6398974_rd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6398/6398974_bd.jpg'],
    peopleAlsoBought: '',
    peopleAlsoViewed: '',
    recentlyViewed: ''
  },
  {
    uniqueID: 106,
    name: 'Dell - Inspiron 23.8" Touch-Screen All-In-One - Intel Core i7 - 16GB Memory - 512GB SSD',
    description: 'Unleash your creativity with this all-in-one Dell Inspiron desktop computer. The 23.8-inch Full HD capacitive display delivers detailed visuals and offers smooth touch operation, while the 512GB SSD minimizes load times, letting you jump into work sessions quickly. This Dell Inspiron desktop computer has a 10th Gen Intel Core i7 processor and 16GB of RAM for running multiple programs simultaneously.',
    brand: 'Dell',
    department: 'Computers',
    color: 'Silver',
    subDept: 'Desktops',
    sku: 6374387,
    price: 1149.99,
    avgRating: 4.7,
    colors: ['Silver'],
    reviews: [],
    questions: {
      question: "What does all-in-one mean?",
      answer: "An all in one computer is basically a monitor in which you just plug in your mouse and keyboard, all the hardware are inside the monitor's case."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6374/6374387_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6374/6374387cv2d.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6374/6374387cv3d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 107,
    name: 'Dell - Inspiron Desktop - Intel Core i7 - 16GB Memory - 256GB SSD + 1TB HDD',
    description: 'Dell Inspiron Desktop: Enjoy everyday functions with this Dell Inspiron desktop. The 256GB SSD and 1TB HDD offer speedy file access and vast storage space, while the Intel UHD integrated graphics deliver crisp, clear visuals.',
    brand: 'Dell',
    department: 'Computers',
    color: 'Black',
    subDept: 'Desktops',
    sku: 6387210,
    price: 849.99,
    avgRating: 4.7,
    colors: ['Black'],
    reviews: [],
    questions: {
      question: "Does this come in other colors?",
      answer: "No."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6387/6387210_rd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6387/6387210_bd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6387/6387210cv11d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 108,
    name: 'HP - Envy Desktop - Intel Core i7 - 16GB Memory - 512GB Solid State Drive',
    description: 'HP ENVY Desktop: Enjoy solid power while creating content with this HP ENVY desktop computer. The 8th Gen Intel Core i7-8700 processor and 16GB of RAM provide high performance for running editing programs and simple multitasking, and the Intel UHD graphics 630 produce fast framerates for quality visuals. This HP ENVY desktop computer has a 512GB SSD for swift startup and data access times.',
    brand: 'HP',
    department: 'Computers',
    color: 'Black',
    subDept: 'Desktops',
    sku: 6366132,
    price: 869.99,
    avgRating: 4.7,
    colors: ['Black'],
    reviews: [],
    questions: {
      question: "What does solid state drive mean?",
      answer: "Solid state drives and hard disk drives are similar in their physical specifications, but they store data very differently."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6366/6366132_rd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6366/6366132cv12d.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6366/6366132cv11d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 109,
    name: 'Lenovo - Yoga C740 2-in-1 14" Touch-Screen Laptop - Intel Core i5 - 8GB Memory - 256GB Solid State Drive',
    description: 'Lenovo Yoga C740 Convertible 2-in-1 Laptop: Increase productivity at work with this Lenovo Yoga notebook. The Intel UHD integrated graphics unit renders high-quality visuals on the 14-inch Full HD touch screen, while the 256GB SSD offers ample storage space for your files.',
    brand: 'Lenovo',
    department: 'Computers',
    color: 'Silver',
    subDept: 'Laptops',
    sku: 6367805,
    price: 699.99,
    avgRating: 4.5,
    colors: ['Silver'],
    reviews: [],
    questions: {
      question: "Does this laptop have a touch screen?",
      answer: "Yes."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6367/6367805_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6367/6367805_rd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6367/6367805cv10d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 110,
    name: 'Lenovo - Yoga C740 2-in-1 14" Touch-Screen Laptop - Intel Core i5 - 8GB Memory - 256GB Solid State Drive',
    description: 'Lenovo Yoga C740 Convertible 2-in-1 Laptop: Increase productivity at work with this Lenovo Yoga notebook.',
    brand: 'Lenovo',
    department: 'Computers',
    color: 'Gray',
    subDept: 'Laptops',
    sku: 6367803,
    price: 849.99,
    avgRating: 4.5,
    colors: ['Gray'],
    reviews: [],
    questions: {
      question: "Does this laptop have a touch screen?",
      answer: "Yes."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6367/6367803_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6367/6367803_rd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6367/6367803cv14d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 111,
    name: 'Lenovo - IdeaPad 1 14" Laptop - AMD A6-Series - 4GB Memory - AMD Radeon R4 - 64GB eMMC Flash Memory',
    description: ' Lenovo IdeaPad 1 14" Laptop: Complete daily computing tasks quickly with this Lenovo IdeaPad laptop. The 7th Gen AMD A6-9220E processor and 4GB of RAM offer ample power to run multiple applications seamlessly for efficient multitasking, while the AMD Radeon R4 integrated graphics deliver quality visuals on the 14-inch HD display.',
    brand: 'Lenovo',
    department: 'Computers',
    color: 'Gray',
    subDept: 'Laptops',
    sku: 6359222,
    price: 229.99,
    avgRating: 3.6,
    colors: ['Gray'],
    reviews: [],
    questions: {
      question: "Is there an HDMI port?",
      answer: "Yes, there is one HDMI port."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6359/6359222_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6359/6359222_rd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6359/6359222cv10d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 112,
    name: 'Lenovo - ThinkPad T495s 14" Touch-Screen Laptop - AMD Ryzen 7 PRO - 16GB Memory - 512GB Solid State Drive',
    description: 'Increase your productivity with this Lenovo ThinkPad laptop. The AMD Ryzen 7 processor and 16GB of RAM provide reliable performance, while a 512GB M.2 SSD offers ample storage and fast start-ups. This Bluetooth-enabled Lenovo ThinkPad laptop features a 14-inch Full HD IPS display and integrated AMD Radeon Vega 10 graphics for crisp clear visuals.',
    brand: 'Lenovo',
    department: 'Computers',
    color: 'Black',
    subDept: 'Laptops',
    sku: 6394634,
    price: 1699.99,
    avgRating: 5.0,
    colors: ['Black'],
    reviews: [],
    questions: {
      question: "Need a new laptop, considering a MacBook Is this one better?",
      answer: "Really, that will depend on what software you will be using with your new computer. Is your software compatible with the iOS or the Windows 10 Operating System? Choose your Operating System then choose your computer configuration based on the software you need to use to do your work."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6394/6394634_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6394/6394634cv1d.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6394/6394634cv12d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 113,
    name: 'Acer - Nitro 5 17.3" Laptop - Intel Core i5 - 8GB Memory - NVIDIA GeForce GTX 1650 Ti - 512GB SSD',
    description: 'Acer Nitro 5 Laptop: Step up your game with this Acer Nitro 5 gaming laptop. The Intel Core i5 processor and 8GB of RAM handle modern titles effortlessly, while the 512GB SSD provides ample storage for your game collection and shortens app load times. This Acer Nitro 5 gaming laptop has an NVIDIA GeForce GTX 1650 Ti graphics card for rendering 4K games in stunning clarity.',
    brand: 'Acer',
    department: 'Computers',
    color: 'Black',
    subDept: 'Laptops',
    sku: 6413248,
    price: 769.99,
    avgRating: 4.3,
    colors: ['Black'],
    reviews: [],
    questions: {
      question: "I can put a 1tb HDD hard drive?",
      answer: "Yes, you can install a 2.5 hdd or SSHD in this Nitro 5 laptop."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6413/6413248_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6413/6413248_rd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6413/6413248cv4d.jpg;maxHeight=1000;maxWidth=1000'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 114,
    name: 'Acer - Swift 5 15.6" Touch-Screen Laptop - Intel Core i5 - 8GB Memory - 256GB Solid State Drive',
    description: 'Acer Swift 5 Laptop: Enjoy high-end computing power and superior portability with this lightweight Acer Swift 5 notebook. The 15.6-inch Full HD touchscreen offers intuitive functionality and crisp details, while the 256GB SSD provides fast boot times and data access. This Acer Swift 5 notebook has an Intel Core i5 processor complemented by 8GB of RAM to load applications quickly and support multitasking.',
    brand: 'Acer',
    department: 'Computers',
    color: 'Silver',
    subDept: 'Laptops',
    sku: 6359965,
    price: 999.99,
    avgRating: 4.4,
    colors: ['Silver'],
    reviews: [],
    questions: {
      question: "Is this model of the Acer Swift 5 available with more SSD?",
      answer: "No."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6359/6359965_sa.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6359/6359965_ra.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6359/6359965cv11a.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 115,
    name: 'Acer - Spin 1 2-in-1 11.6" Refurbished Touch-Screen Laptop - Intel Pentium Silver - 4GB Memory - 64GB eMMC Flash Memory',
    description: 'Refurbished Acer Spin 1 Convertible 2-in-1 Laptop: Handle your assignments on the go with this refurbished Acer Spin 1 laptop. The 11.6-inch touchscreen HD display provides crisp visuals and supports intuitive control, while the Intel Pentium Silver processor and 4GB of RAM power through everyday applications. This convertible Acer Spin 1 laptop has a 360-degree hinge for easy switching between tablet, tent and laptop modes.',
    brand: 'Acer',
    department: 'Computers',
    color: 'Black',
    subDept: 'Laptops',
    sku: 6402656,
    price: 249.99,
    avgRating: 4.3,
    colors: ['Black'],
    reviews: [],
    questions: {
      question: "Does this laptop allow you to use Google Chrome?",
      answer: "Yes, you can use the Google Chrome browser with this Windows laptop"
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6402/6402656_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6402/6402656cv12d.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6402/6402656cv14d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 116,
    name: 'ASUS - 15.6" Touch-Screen Laptop - Intel Core i7 - 16GB Memory - 1TB Hard Drive + 128GB Solid State Drive',
    description: 'ASUS Laptop: Stay productive while on the go with this convertible ASUS laptop. The Intel Core i7 processor and 16GB of RAM offer high performance, letting you work with multiple windows simultaneously for effortless multitasking, while the 15.6-inch Full HD touch display delivers stunning visuals. This ASUS laptop has a 1TB HDD for file and application storage, while the 128GB SSD shortens load times.',
    brand: 'ASUS',
    department: 'Computers',
    color: 'Gray',
    subDept: 'Laptops',
    sku: 6373047,
    price: 1099.99,
    avgRating: 4.6,
    colors: ['Gray'],
    reviews: [],
    questions: {
      question: "Would this laptop be able to run a game like Fortnite?",
      answer: "According to systemrequirementslab.com (Can You Run It) this laptop meets the minimum requirements to run Fortnite and Fortnite Battle Royale. It does not meet the recommended specs due to the lack of a discrete graphics card and video RAM."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6373/6373047_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6373/6373047_rd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6373/6373047cv11d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 117,
    name: 'ASUS - 15.6" Laptop - AMD Ryzen 7 - 8GB Memory - NVIDIA GeForce RTX 2060 - 512GB SSD',
    description: 'ASUS TUF Gaming A15 Laptop: Get an edge on the competition with this ASUS gaming laptop. The AMD Ryzen 7 processor and 8GB of RAM power through modern titles, while the NVIDIA GeForce RTX 2060 graphics card produces fluid visuals for tear-free gameplay. This ASUS gaming laptop has a 512GB SSD that offers ultra-fast boots and ample storage.',
    brand: 'ASUS',
    department: 'Computers',
    color: 'Gray',
    subDept: 'Laptops',
    sku: 6408464,
    price: 999.99,
    avgRating: 4.3,
    colors: ['Gray'],
    reviews: [],
    questions: {
      question: "Does this model have the 144hz screen?",
      answer: "60Hz screen, just got mine a few hours ago and was able to confirm this."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6408/6408464_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6408/6408464ld.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6408/6408464cv4d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 118,
    name: 'ASUS - Zenbook 14" Laptop - AMD Ryzen 5 - 8GB Memory - NVIDIA GeForce MX350 - 256GB SSD',
    description: 'ASUS ZenBook 14 Q407IQ Laptop: Complete urgent projects on the go with this ASUS ZenBook laptop. The 14-inch Full HD display provides stunning visuals, while the AMD Ryzen 5 processor and 8GB of RAM power through everyday software and support smooth multitasking. This Wi-Fi and Bluetooth-enabled ASUS ZenBook laptop has a 256GB SSD for rapid boots.',
    brand: 'ASUS',
    department: 'Computers',
    color: 'Gray',
    subDept: 'Laptops',
    sku: 6403819,
    price: 699.99,
    avgRating: 4.2,
    colors: ['Gray'],
    reviews: [],
    questions: {
      question: "Is the RAM upgradable?",
      answer: "Unfortunately the memory is soldered to the motherboard and cannot be upgraded."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6403/6403819_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6403/6403819cv1d.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6403/6403819cv10d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 119,
    name: 'ASUS - ROG Zephyrus G14 14" Gaming Laptop - AMD Ryzen 9 - 16GB Memory - NVIDIA GeForce RTX 2060 Max-Q - 1TB SSD',
    description: 'ASUS ROG Zephyrus G14 Gaming Laptop: Enjoy everyday gaming with this ASUS notebook PC. The AMD Ryzen 9 processor and 16GB of RAM let you run graphics-heavy games smoothly, while the potent NVIDIA GeForce RTX 2060 Max-Q graphics produce high-quality visuals on the 14-inch Full HD display. This ASUS notebook PC has 1TD SSD that shortens load times and offers ample storage.',
    brand: 'ASUS',
    department: 'Computers',
    color: 'White',
    subDept: 'Laptops',
    sku: 6403816,
    price: 1499.99,
    avgRating: 4.4,
    colors: ['White'],
    reviews: [],
    questions: {
      question: "Does this model have 2x8gb ram stick or is it 1 16gb ram with 1 open slot?",
      answer: "This model comes with 1 slot with 8GB DDR4-3200 installed and 8GB DDR4 on board."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6403/6403816_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6403/6403816_rd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6403/6403816cv4d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 120,
    name: 'Microsoft - Surface Laptop 3 - 13.5" Touch-Screen - Intel Core i5 - 8GB Memory - 128GB Solid State Drive (Latest Model)',
    description: 'Make a powerful statement, and fuel your ideas with new Surface Laptop 3. Sleek and light, with improved speed, performance, typing comfort, and battery life, it travels with ease and makes every day more productive. Now with improved speed and performance to do what you want, Surface Laptop 3 13.5" is two times faster than Surface Laptop 2.',
    brand: 'Microsoft',
    department: 'Computers',
    color: 'Platinum',
    subDept: 'Laptops',
    sku: 6374327,
    price: 999.99,
    avgRating: 4.6,
    colors: ['Platinum'],
    reviews: [],
    questions: {
      question: "Does this come laptop come already with windows 7 or 10 in it?",
      answer: "Windows 10."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6374/6374327_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6374/6374327cv15d.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6374/6374327cv13d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 121,
    name: 'Microsoft - Surface Book 3 13.5" Touch-Screen PixelSense™ - 2-in-1 Laptop - Intel Core i5 - 8GB Memory - 256GB SSD',
    description: 'Performance meets versatility. Meet the laptop that can handle your biggest demands. The most powerful Surface laptop yet combines speed, graphics, and immersive gaming with the versatility of a laptop, tablet, and portable studio. Tackle your biggest demands with quad-core powered 10th Gen Intel® Core™ processors, blazing graphics, and high-resolution PixelSense™ Display designed for Surface Pen* and touch.',
    brand: 'Microsoft',
    department: 'Computers',
    color: 'Platinum',
    subDept: 'Laptops',
    sku: 6408383,
    price: 1399.99,
    avgRating: 4.5,
    colors: ['Platinum'],
    reviews: [],
    questions: {
      question: "Can you connect an Xbox controller to Surface Book 3?",
      answer: " You can pair up to 8 Xbox Wireless controllers with Surface Book 3 15” to enjoy the latest Xbox Game Pass titles for PC."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6408/6408383_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6408/6408383cv13d.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6408/6408383cv14d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 122,
    name: 'Microsoft - Surface Laptop 3 - 15" Touch-Screen - AMD Ryzen™ 7 Surface Edition - 32GB Memory - 1TB SSD (Latest Model)',
    description: "Make a powerful statement, and fuel your ideas with the new Surface Laptop 3. Sleek and light, with improved speed, performance, typing comfort, and battery life, it travels with ease and makes every day more productive. And whether you're creating, catching up, or chilling out, Surface Laptop 3 is ready when you are.",
    brand: 'Microsoft',
    department: 'Computers',
    color: 'Matte Black',
    subDept: 'Laptops',
    sku: 6374319,
    price: 2799.99,
    avgRating: 4.8,
    colors: ['Matte Black'],
    reviews: [],
    questions: {
      question: "Hi! I would like to know if I can get this with a Spanish keyboard? Thank you very much!",
      answer: "No, this item doesn't come with a Spanish keyboard."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6374/6374319_sd.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6374/6374319cv15d.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6374/6374319cv13d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  },
  {
    uniqueID: 123,
    name: 'Microsoft - Surface Pro 6 - 12.3" Touch Screen - Intel Core i5 - 8GB Memory - 256GB Solid State Drive',
    description: "Complete presentations with this 12.3-inch Microsoft Surface Pro 6 bundle. The Intel Core i5 processor and 8GB of RAM power programs that keep you on task, and the 256GB solid-state drive lacks moving parts to operate quietly.",
    brand: 'Microsoft',
    department: 'Computers',
    color: 'Black',
    subDept: 'Laptops',
    sku: 6306014,
    price: 930.99,
    avgRating: 4.7,
    colors: ['Black'],
    reviews: [],
    questions: {
      question: "Does this work with the full and regular version of Office 365 where you can create and use real Excel spreadsheets that support macros?",
      answer: "Yep! It runs full Windows 10 and full versions of all the Office365 products."
    },
    images: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6306/6306014ld.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6306/6306014cv13d.jpg', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6306/6306014cv12d.jpg'],
    peopleAlsoBought: [],
    peopleAlsoViewed: [],
    recentlyViewed: false
  }

];

class MockDataSeeder extends Seeder {

  async shouldRun() {
    return model.ProductModel.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return model.ProductModel.create(data);
  }
}

module.exports ={ MockDataSeeder };
