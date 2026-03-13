// Données cartographiques réelles pour le client (Tracés SVG)
window.TERRITORIES = {
  // --- NORTH AMERICA ---
  'alaska': { 
    name: 'Alaska', 
    continent: 'north_america', 
    x: 35, y: 85, 
    path: 'M 10,60 L 60,60 L 60,110 L 40,110 L 10,90 Z' 
  },
  'northwest_territory': { 
    name: 'NW Territory', 
    continent: 'north_america', 
    x: 110, y: 70, 
    path: 'M 60,60 L 160,50 L 160,90 L 130,110 L 60,110 Z' 
  },
  'greenland': { 
    name: 'Greenland', 
    continent: 'north_america', 
    x: 230, y: 40, 
    path: 'M 190,20 L 270,20 L 270,80 L 220,100 L 190,60 Z' 
  },
  'alberta': { 
    name: 'Alberta', 
    continent: 'north_america', 
    x: 95, y: 125, 
    path: 'M 60,110 L 130,110 L 130,140 L 60,140 Z' 
  },
  'ontario': { 
    name: 'Ontario', 
    continent: 'north_america', 
    x: 155, y: 125, 
    path: 'M 130,110 L 180,100 L 200,120 L 180,150 L 130,150 Z' 
  },
  'quebec': { 
    name: 'Québec', 
    continent: 'north_america', 
    x: 215, y: 125, 
    path: 'M 180,100 L 250,90 L 250,130 L 200,160 L 180,150 Z' 
  },
  'western_us': { 
    name: 'Western US', 
    continent: 'north_america', 
    x: 95, y: 175, 
    path: 'M 60,140 L 130,150 L 130,200 L 60,200 Z' 
  },
  'eastern_us': { 
    name: 'Eastern US', 
    continent: 'north_america', 
    x: 165, y: 185, 
    path: 'M 130,150 L 200,160 L 200,210 L 130,210 Z' 
  },
  'central_america': { 
    name: 'Central America', 
    continent: 'north_america', 
    x: 130, y: 245, 
    path: 'M 90,210 L 170,210 L 170,260 L 110,290 Z' 
  },

  // --- SOUTH AMERICA ---
  'venezuela': { 
    name: 'Venezuela', 
    continent: 'south_america', 
    x: 170, y: 315, 
    path: 'M 130,290 L 210,290 L 210,320 L 150,350 L 130,330 Z' 
  },
  'peru': { 
    name: 'Peru', 
    continent: 'south_america', 
    x: 160, y: 385, 
    path: 'M 130,330 L 150,350 L 190,370 L 190,420 L 130,420 Z' 
  },
  'brazil': { 
    name: 'Brazil', 
    continent: 'south_america', 
    x: 230, y: 385, 
    path: 'M 190,320 L 270,310 L 300,340 L 300,390 L 260,430 L 190,420 L 190,370 Z' 
  },
  'argentina': { 
    name: 'Argentine', 
    continent: 'south_america', 
    x: 180, y: 465, 
    path: 'M 130,420 L 190,420 L 230,480 L 190,530 L 130,530 Z' 
  },

  // --- EUROPE ---
  'iceland': { 
    name: 'Islande', 
    continent: 'europe', 
    x: 335, y: 65, 
    path: 'M 310,40 L 360,40 L 360,90 L 310,90 Z' 
  },
  'great_britain': { 
    name: 'G. Bretagne', 
    continent: 'europe', 
    x: 345, y: 135, 
    path: 'M 310,100 L 380,100 L 380,170 L 340,170 L 310,130 Z' 
  },
  'western_europe': { 
    name: 'Europe Ouest', 
    continent: 'europe', 
    x: 345, y: 205, 
    path: 'M 310,170 L 380,170 L 380,240 L 330,240 L 310,200 Z' 
  },
  'northern_europe': { 
    name: 'Europe Nord', 
    continent: 'europe', 
    x: 415, y: 135, 
    path: 'M 380,100 L 450,100 L 450,170 L 380,170 Z' 
  },
  'southern_europe': { 
    name: 'Europe Sud', 
    continent: 'europe', 
    x: 415, y: 205, 
    path: 'M 380,170 L 450,170 L 450,240 L 380,240 Z' 
  },
  'ukraine': { 
    name: 'Ukraine', 
    continent: 'europe', 
    x: 495, y: 135, 
    path: 'M 450,100 L 540,90 L 540,180 L 450,180 Z' 
  },

  // --- AFRICA ---
  'north_africa': { 
    name: 'Afrique Nord', 
    continent: 'africa', 
    x: 375, y: 305, 
    path: 'M 310,240 L 440,240 L 440,320 L 400,370 L 310,340 Z' 
  },
  'egypt': { 
    name: 'Égypte', 
    continent: 'africa', 
    x: 465, y: 285, 
    path: 'M 440,240 L 520,240 L 520,330 L 440,330 Z' 
  },
  'east_africa': { 
    name: 'Afrique Est', 
    continent: 'africa', 
    x: 505, y: 375, 
    path: 'M 460,330 L 550,330 L 550,420 L 460,420 Z' 
  },
  'central_africa': { 
    name: 'Afrique Centre', 
    continent: 'africa', 
    x: 435, y: 385, 
    path: 'M 400,330 L 460,330 L 460,430 L 400,430 Z' 
  },
  'west_africa': { 
    name: 'Afrique Ouest', 
    continent: 'africa', 
    x: 365, y: 395, 
    path: 'M 310,340 L 400,340 L 400,450 L 310,450 Z' 
  },
  'south_africa': { 
    name: 'Afrique Sud', 
    continent: 'africa', 
    x: 455, y: 475, 
    path: 'M 400,430 L 510,430 L 510,520 L 400,520 Z' 
  },

  // --- ASIA ---
  'ural': { 
    name: 'Oural', 
    continent: 'asia', 
    x: 585, y: 95, 
    path: 'M 540,60 L 630,60 L 630,130 L 540,130 Z' 
  },
  'siberia': { 
    name: 'Sibérie', 
    continent: 'asia', 
    x: 675, y: 75, 
    path: 'M 630,40 L 720,40 L 720,110 L 630,110 Z' 
  },
  'yakutsk': { 
    name: 'Yakoutsk', 
    continent: 'asia', 
    x: 775, y: 65, 
    path: 'M 720,20 L 830,20 L 830,110 L 720,110 Z' 
  },
  'kamchatka': { 
    name: 'Kamtchatka', 
    continent: 'asia', 
    x: 875, y: 85, 
    path: 'M 830,40 L 920,40 L 920,130 L 830,130 Z' 
  },
  'irkutsk': { 
    name: 'Irkoutsk', 
    continent: 'asia', 
    x: 725, y: 145, 
    path: 'M 670,110 L 780,110 L 780,180 L 670,180 Z' 
  },
  'mongolia': { 
    name: 'Mongolie', 
    continent: 'asia', 
    x: 725, y: 205, 
    path: 'M 670,180 L 780,180 L 780,230 L 670,230 Z' 
  },
  'japan': { 
    name: 'Japon', 
    continent: 'asia', 
    x: 845, y: 205, 
    path: 'M 810,160 L 880,160 L 880,250 L 810,250 Z' 
  },
  'afghanistan': { 
    name: 'Afghanistan', 
    continent: 'asia', 
    x: 585, y: 195, 
    path: 'M 540,130 L 630,130 L 630,240 L 540,240 Z' 
  },
  'china': { 
    name: 'Chine', 
    continent: 'asia', 
    x: 705, y: 265, 
    path: 'M 630,230 L 780,230 L 780,300 L 630,300 Z' 
  },
  'middle_east': { 
    name: 'Moyen-Orient', 
    continent: 'asia', 
    x: 545, y: 285, 
    path: 'M 480,240 L 610,240 L 610,330 L 480,330 Z' 
  },
  'india': { 
    name: 'Inde', 
    continent: 'asia', 
    x: 635, y: 315, 
    path: 'M 590,280 L 680,280 L 680,350 L 590,350 Z' 
  },
  'siam': { 
    name: 'Asie du Sud', 
    continent: 'asia', 
    x: 715, y: 335, 
    path: 'M 680,300 L 750,300 L 750,370 L 680,370 Z' 
  },

  // --- OCEANIA ---
  'indonesia': { 
    name: 'Indonésie', 
    continent: 'oceania', 
    x: 725, y: 405, 
    path: 'M 680,370 L 770,370 L 770,440 L 680,440 Z' 
  },
  'new_guinea': { 
    name: 'Nouvelle-Guinée', 
    continent: 'oceania', 
    x: 815, y: 395, 
    path: 'M 770,350 L 860,350 L 860,440 L 770,440 Z' 
  },
  'western_australia': { 
    name: 'Australie Ouest', 
    continent: 'oceania', 
    x: 765, y: 485, 
    path: 'M 720,440 L 810,440 L 810,530 L 720,530 Z' 
  },
  'eastern_australia': { 
    name: 'Australie Est', 
    continent: 'oceania', 
    x: 845, y: 485, 
    path: 'M 800,440 L 890,440 L 890,530 L 800,530 Z' 
  },
};