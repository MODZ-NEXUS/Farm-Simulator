/* ============================================================
   MODZ NEXUS — EMPEROR EDITION v6.0
   ============================================================ */

// ==================== DATABASE ====================
const CROPS = {
  wheat:{name:'قمح',emoji:'🌾',price:8,sell:18,grow:45,xp:4,season:['spring','summer']},
  corn:{name:'ذرة',emoji:'🌽',price:14,sell:32,grow:70,xp:7,season:['summer']},
  tomato:{name:'طماطم',emoji:'🍅',price:12,sell:26,grow:55,xp:6,season:['summer','spring']},
  carrot:{name:'جزر',emoji:'🥕',price:10,sell:22,grow:50,xp:5,season:['spring','autumn']},
  potato:{name:'بطاطس',emoji:'🥔',price:16,sell:34,grow:80,xp:8,season:['autumn','winter']},
  strawberry:{name:'فراولة',emoji:'🍓',price:22,sell:48,grow:90,xp:10,season:['spring']},
  pumpkin:{name:'قرع',emoji:'🎃',price:28,sell:60,grow:100,xp:12,season:['autumn']},
  garlic:{name:'ثوم',emoji:'🧄',price:13,sell:28,grow:60,xp:6,season:['autumn','winter']},
  pepper:{name:'فلفل',emoji:'🌶️',price:26,sell:55,grow:85,xp:11,season:['summer']},
  rice:{name:'أرز',emoji:'🌾',price:20,sell:42,grow:75,xp:9,season:['summer']},
  grape:{name:'عنب',emoji:'🍇',price:35,sell:75,grow:120,xp:15,season:['autumn']},
  melon:{name:'شمام',emoji:'🍈',price:40,sell:85,grow:130,xp:18,season:['summer']},
  lavender:{name:'خزامى',emoji:'💜',price:45,sell:95,grow:110,xp:16,season:['spring','summer']},
  golden:{name:'القمح الذهبي',emoji:'✨',price:120,sell:250,grow:200,xp:40,season:['spring','summer','autumn','winter']}
};

const ANIMALS = {
  chicken:{name:'دجاج',emoji:'🐔',price:120,prod:'egg',prodTime:60,xp:8},
  duck:{name:'بطة',emoji:'🦆',price:150,prod:'egg',prodTime:70,xp:10},
  goat:{name:'ماعز',emoji:'🐐',price:280,prod:'milk',prodTime:100,xp:15},
  sheep:{name:'خروف',emoji:'🐑',price:350,prod:'wool',prodTime:130,xp:20},
  cow:{name:'بقرة',emoji:'🐄',price:550,prod:'milk',prodTime:150,xp:28},
  pig:{name:'خنزير',emoji:'🐷',price:420,prod:'truffle',prodTime:180,xp:24},
  ostrich:{name:'نعامة',emoji:'🦤',price:900,prod:'feather',prodTime:200,xp:35},
  dragon:{name:'تنين',emoji:'🐲',price:5000,prod:'dragonScale',prodTime:400,xp:100}
};

const PRODUCTS = {
  egg:{name:'بيض',emoji:'🥚',sell:6},
  milk:{name:'حليب',emoji:'🥛',sell:12},
  wool:{name:'صوف',emoji:'🧶',sell:18},
  truffle:{name:'كمأة',emoji:'🍄',sell:45},
  feather:{name:'ريش نعام',emoji:'🪶',sell:80},
  dragonScale:{name:'حرشفة تنين',emoji:'🔥',sell:500}
};

const FISH = {
  sardine:{name:'سردين',emoji:'🐟',price:15,rarity:'شائع',seasons:['spring','summer','autumn','winter']},
  tuna:{name:'تونة',emoji:'🐠',price:45,rarity:'غير شائع',seasons:['summer','autumn']},
  salmon:{name:'سلمون',emoji:'🐡',price:80,rarity:'نادر',seasons:['spring','autumn']},
  swordfish:{name:'سمك سيف',emoji:'🗡️',price:150,rarity:'نادر',seasons:['summer']},
  golden_fish:{name:'سمكة ذهبية',emoji:'🐠',price:300,rarity:'أسطوري',seasons:['spring','summer','autumn','winter']},
  dragon_fish:{name:'سمكة تنين',emoji:'🐉',price:1000,rarity:'أسطوري',seasons:['winter']}
};

const ORES = {
  coal:{name:'فحم',emoji:'⚫',price:10,rarity:'شائع'},
  copper:{name:'نحاس',emoji:'🟤',price:25,rarity:'شائع'},
  iron:{name:'حديد',emoji:'⚙️',price:50,rarity:'غير شائع'},
  silver:{name:'فضة',emoji:'⚪',price:100,rarity:'نادر'},
  gold:{name:'ذهب',emoji:'🟡',price:200,rarity:'نادر'},
  diamond:{name:'ألماس',emoji:'💎',price:500,rarity:'أسطوري'},
  ruby:{name:'ياقوت',emoji:'🔴',price:800,rarity:'أسطوري'},
  voidStone:{name:'حجر الفراغ',emoji:'🟣',price:2000,rarity:'خرافي'}
};

const HERBS = {
  mint:{name:'نعناع',emoji:'🌿',price:15},
  chamomile:{name:'بابونج',emoji:'🌼',price:25},
  ginseng:{name:'جينسنغ',emoji:'🪴',price:80},
  mandrake:{name:'جذور اليأس',emoji:'🌱',price:200},
  moonflower:{name:'زهرة القمر',emoji:'🌸',price:500},
  starDust:{name:'غبار النجوم',emoji:'✨',price:1500}
};

const PETS = {
  cat:{name:'قطة',emoji:'🐱',price:800,bonus:'-10% استهلاك الطاقة',effect:'energy'},
  dog:{name:'كلب',emoji:'🐕',price:900,bonus:'+15% إنتاج الحيوانات',effect:'animal'},
  rabbit:{name:'أرنب',emoji:'🐰',price:700,bonus:'+10% سرعة النمو',effect:'growth'},
  owl:{name:'بومة',emoji:'🦉',price:1500,bonus:'+20% قيمة البيع ليلاً',effect:'night'},
  fox:{name:'ثعلب',emoji:'🦊',price:2000,bonus:'+25% حظ في الغابة',effect:'luck'},
  dragon_pet:{name:'تنين صغير',emoji:'🐉',price:10000,bonus:'+30% كل المكافآت',effect:'all'}
};

const VILLAGERS = [
  {id:'farmer',name:'المزارع سالم',emoji:'👨‍🌾',likes:['wheat','corn']},
  {id:'baker',name:'الخبازة نورة',emoji:'👩‍🍳',likes:['egg','milk','bread']},
  {id:'blacksmith',name:'الحداد خالد',emoji:'👨‍🏭',likes:['iron','coal']},
  {id:'fisher',name:'الصياد أحمد',emoji:'🎣',likes:['sardine','tuna']},
  {id:'merchant',name:'التاجر ليلى',emoji:'👩‍💼',likes:['gold','diamond']},
  {id:'mage',name:'الساحر زيد',emoji:'🧙‍♂️',likes:['moonflower','starDust']}
];

const MONSTERS = [
  {id:'spider',name:'عنكبوت كهفي',emoji:'🕷️',hp:30,atk:5,reward:80,xp:15,minDepth:1,ore:'coal',oreQty:2},
  {id:'rat',name:'جرذ عملاق',emoji:'🐀',hp:40,atk:8,reward:120,xp:20,minDepth:1,ore:'copper',oreQty:2},
  {id:'bat',name:'خفاش مصاص',emoji:'🦇',hp:55,atk:12,reward:180,xp:30,minDepth:2,ore:'iron',oreQty:2},
  {id:'wolf',name:'ذئب جبلي',emoji:'🐺',hp:80,atk:18,reward:300,xp:50,minDepth:3,ore:'silver',oreQty:1},
  {id:'golem',name:'غولم حجري',emoji:'🗿',hp:150,atk:25,reward:600,xp:100,minDepth:5,ore:'gold',oreQty:1},
  {id:'dragon',name:'تنين الكهف',emoji:'🐉',hp:300,atk:45,reward:2000,xp:300,minDepth:8,ore:'diamond',oreQty:1},
  {id:'void_lord',name:'سيد الفراغ',emoji:'👹',hp:600,atk:80,reward:5000,xp:800,minDepth:12,ore:'voidStone',oreQty:1}
];

const RECIPES = [
  {id:'bread',name:'خبز',emoji:'🍞',sell:35,ing:{wheat:3,egg:1},xp:8},
  {id:'cheese',name:'جبن',emoji:'🧀',sell:50,ing:{milk:4},xp:10},
  {id:'wine',name:'نبيذ',emoji:'🍷',sell:120,ing:{grape:5},xp:20},
  {id:'cake',name:'كعكة',emoji:'🍰',sell:180,ing:{wheat:5,egg:3,milk:2,strawberry:2},xp:30},
  {id:'pie',name:'فطيرة',emoji:'🥧',sell:140,ing:{wheat:3,pumpkin:2,egg:1},xp:25},
  {id:'silk',name:'حرير',emoji:'🧵',sell:200,ing:{wool:3},xp:28},
  {id:'oil',name:'زيت',emoji:'🫒',sell:75,ing:{lavender:3},xp:15},
  {id:'perfume',name:'عطر',emoji:'💐',sell:250,ing:{lavender:2,moonflower:1},xp:35},
  {id:'jam',name:'مربى',emoji:'🍯',sell:110,ing:{strawberry:4,tomato:2},xp:22},
  {id:'steel',name:'فولاذ',emoji:'🔩',sell:150,ing:{iron:3,coal:2},xp:20},
  {id:'jewelry',name:'مجوهرات',emoji:'💍',sell:800,ing:{gold:2,diamond:1},xp:80},
  {id:'potion',name:'جرعة سحرية',emoji:'🧪',sell:400,ing:{ginseng:2,mandrake:1,mint:3},xp:45}
];

const TREASURES = [
  {id:'silver',name:'صندوق فضي',emoji:'🎁',price:200,rarity:'شائع',drops:[
    {item:'money',min:100,max:400,weight:50},
    {item:'coal',min:2,max:5,weight:30},
    {item:'copper',min:1,max:3,weight:20}
  ]},
  {id:'gold',name:'صندوق ذهبي',emoji:'🏆',price:800,rarity:'غير شائع',drops:[
    {item:'money',min:500,max:1500,weight:40},
    {item:'iron',min:2,max:6,weight:25},
    {item:'silver',min:1,max:3,weight:20},
    {item:'gold',min:1,max:2,weight:10},
    {item:'diamond',min:1,max:1,weight:5}
  ]},
  {id:'legendary',name:'صندوق أسطوري',emoji:'💎',price:2500,rarity:'نادر',drops:[
    {item:'money',min:2000,max:6000,weight:30},
    {item:'gold',min:3,max:8,weight:25},
    {item:'diamond',min:2,max:5,weight:20},
    {item:'ruby',min:1,max:3,weight:15},
    {item:'moonflower',min:1,max:2,weight:8},
    {item:'starDust',min:1,max:1,weight:2}
  ]},
  {id:'imperial',name:'صندوق إمبراطوري',emoji:'👑',price:10000,rarity:'خرافي',drops:[
    {item:'money',min:10000,max:30000,weight:25},
    {item:'ruby',min:5,max:15,weight:20},
    {item:'voidStone',min:1,max:3,weight:15},
    {item:'starDust',min:2,max:5,weight:15},
    {item:'dragonScale',min:1,max:2,weight:10},
    {item:'dragon_fish',min:1,max:1,weight:10},
    {item:'golden',min:5,max:10,weight:5}
  ]}
];

const RANKS = [
  {id:'beginner',name:'مزارع مبتدئ',emoji:'🥉',minLevel:1,minMoney:0},
  {id:'apprentice',name:'مزارع متدرب',emoji:'🥈',minLevel:5,minMoney:2000},
  {id:'farmer',name:'مزارع',emoji:'🥇',minLevel:10,minMoney:5000},
  {id:'expert',name:'مزارع خبير',emoji:'🏅',minLevel:15,minMoney:15000},
  {id:'master',name:'مزارع ماهر',emoji:'🎖️',minLevel:20,minMoney:30000},
  {id:'lord',name:'لورد المزرعة',emoji:'👑',minLevel:30,minMoney:75000},
  {id:'baron',name:'بارون',emoji:'💎',minLevel:40,minMoney:150000},
  {id:'duke',name:'دوق',emoji:'💠',minLevel:50,minMoney:300000},
  {id:'king',name:'ملك المزارع',emoji:'👑',minLevel:65,minMoney:500000},
  {id:'emperor',name:'إمبراطور',emoji:'🏆',minLevel:80,minMoney:1000000}
];

const LEGENDARY_WEATHERS = [
  {id:'golden_rain',icon:'🌟',name:'مطر ذهبي',temp:22,bonus:2.0,dry:-0.5,effect:'golden',chance:0.03},
  {id:'lightning',icon:'⚡',name:'عاصفة برق',temp:12,bonus:0.8,dry:0.5,effect:'lightning',chance:0.05},
  {id:'star_storm',icon:'✨',name:'عاصفة نجوم',temp:18,bonus:1.8,dry:-0.3,effect:'stars',chance:0.02},
  {id:'meteor',icon:'☄️',name:'وابل شهب',temp:25,bonus:2.5,dry:0.2,effect:'meteor',chance:0.01}
];

const WEATHERS = [
  {id:'sunny',icon:'☀️',name:'مشمس',temp:28,bonus:1.1,dry:0.8},
  {id:'cloudy',icon:'⛅',name:'غائم',temp:22,bonus:1.0,dry:0.5},
  {id:'rainy',icon:'🌧️',name:'ممطر',temp:18,bonus:1.2,dry:-0.8},
  {id:'stormy',icon:'⛈️',name:'عاصف',temp:14,bonus:0.7,dry:0.3},
  {id:'snowy',icon:'❄️',name:'مثلج',temp:2,bonus:0.5,dry:0.2},
  {id:'drought',icon:'🔥',name:'جفاف',temp:40,bonus:0.8,dry:2.0},
  {id:'foggy',icon:'🌫️',name:'ضباب',temp:15,bonus:0.9,dry:0.1},
  {id:'rainbow',icon:'🌈',name:'قوس قزح',temp:24,bonus:1.5,dry:-0.3}
];

const SEASONS = ['spring','summer','autumn','winter'];
const SEASON_INFO = {
  spring:{name:'🌱 الربيع',bonus:1.15},
  summer:{name:'☀️ الصيف',bonus:1.0},
  autumn:{name:'🍂 الخريف',bonus:1.1},
  winter:{name:'❄️ الشتاء',bonus:0.75}
};

const DAILY_QUESTS = [
  {id:'dq_harvest',name:'حصاد 5',icon:'🌾',target:5,reward:80,type:'harvest'},
  {id:'dq_collect',name:'جمع 4',icon:'📦',target:4,reward:60,type:'collect'},
  {id:'dq_plant',name:'زرع 4',icon:'🌱',target:4,reward:50,type:'plant'},
  {id:'dq_sell',name:'بيع 6',icon:'💰',target:6,reward:90,type:'sell'},
  {id:'dq_water',name:'ري 5',icon:'💧',target:5,reward:40,type:'water'},
  {id:'dq_fish',name:'صيد سمكة',icon:'🎣',target:1,reward:70,type:'fish'},
  {id:'dq_mine',name:'استخرج معدن',icon:'⛏️',target:1,reward:75,type:'mine'},
  {id:'dq_monster',name:'اهزم وحشاً',icon:'🐉',target:1,reward:100,type:'monster'},
  {id:'dq_craft',name:'اصنع منتجاً',icon:'🧪',target:1,reward:85,type:'craft'}
];

const STORY_QUESTS = [
  {id:'sq1',name:'البداية',desc:'احصد 5 محاصيل',target:5,type:'harvest',reward:200,rep:5},
  {id:'sq2',name:'قطيع صغير',desc:'اشترِ 3 حيوانات',target:3,type:'buy_animal',reward:300,rep:10},
  {id:'sq3',name:'صياد مبتدئ',desc:'اصطد 5 أسماك',target:5,type:'fish',reward:400,rep:15},
  {id:'sq4',name:'منقّب محترف',desc:'استخرج 10 معادن',target:10,type:'mine',reward:600,rep:20},
  {id:'sq5',name:'محارب شجاع',desc:'اهزم 3 وحوش',target:3,type:'monster',reward:800,rep:25},
  {id:'sq6',name:'صانع ماهر',desc:'اصنع 5 منتجات',target:5,type:'craft',reward:500,rep:20},
  {id:'sq7',name:'ثري المنطقة',desc:'اجمع 10,000 جنيه',target:10000,type:'money',reward:1000,rep:30},
  {id:'sq8',name:'أسطورة المزرعة',desc:'وصل مستوى 25',target:25,type:'level',reward:5000,rep:100}
];

const ACHIEVEMENTS = [
  {id:'a1',name:'أول حصاد',desc:'احصد محصول',icon:'🌾',check:s=>s.stats.harvested>=1},
  {id:'a2',name:'مزارع',desc:'احصد 50',icon:'🧑‍🌾',check:s=>s.stats.harvested>=50},
  {id:'a3',name:'أسطورة الزراعة',desc:'احصد 500',icon:'👑',check:s=>s.stats.harvested>=500},
  {id:'a4',name:'ثري',desc:'امتلك 10,000',icon:'💰',check:s=>s.player.money>=10000},
  {id:'a5',name:'مليونير',desc:'امتلك 100,000',icon:'💎',check:s=>s.player.money>=100000},
  {id:'a6',name:'خبير',desc:'مستوى 10',icon:'⭐',check:s=>s.player.level>=10},
  {id:'a7',name:'محترف',desc:'مستوى 25',icon:'🌟',check:s=>s.player.level>=25},
  {id:'a8',name:'أسطورة',desc:'مستوى 50',icon:'💫',check:s=>s.player.level>=50},
  {id:'a9',name:'صياد ماهر',desc:'اصطد 10',icon:'🎣',check:s=>s.stats.fishCaught>=10},
  {id:'a10',name:'منقّب',desc:'استخرج 20',icon:'⛏️',check:s=>s.stats.oreMined>=20},
  {id:'a11',name:'جامع أعشاب',desc:'اجمع 15',icon:'🌿',check:s=>s.stats.herbsCollected>=15},
  {id:'a12',name:'بطل القرية',desc:'سمعة 100',icon:'🏆',check:s=>s.player.reputation>=100},
  {id:'a13',name:'محارب',desc:'اهزم 5 وحوش',icon:'⚔️',check:s=>s.stats.monstersDefeated>=5},
  {id:'a14',name:'صانع',desc:'اصنع 10 منتجات',icon:'🧪',check:s=>s.stats.crafted>=10},
  {id:'a15',name:'مقامر',desc:'العب 10 مرات',icon:'🎰',check:s=>s.stats.casinoPlays>=10},
  {id:'a16',name:'فاتح كنوز',desc:'افتح 5 صناديق',icon:'🎁',check:s=>s.stats.boxesOpened>=5},
  {id:'a17',name:'إمبراطور',desc:'رتبة الإمبراطور',icon:'🏆',check:s=>getCurrentRank(s).id==='emperor'}
];

const HOUSECOST = {1:600,2:1400,3:3000,4:6500,5:15000,6:30000};
const FARMLEVELS = {1:4,2:6,3:9,4:12,5:16,6:20,7:25,8:30};
const FARMCOST = {1:400,2:900,3:1800,4:3500,5:7000,6:15000,7:30000};
const ANIMALLIMIT = {1:2,2:4,3:6,4:8,5:10,6:14,7:18,8:25};
const GREENHOUSE_COST = 5000;
const CASTLE_COSTS = {1:3000,2:8000,3:20000,4:50000,5:120000};

// ==================== STATE ====================
let S = null;
let currentPage = 'home';
let loopTimer=null, autoSaveTimer=null;
let lastStatDecay=0, lastDayCheck=0, lastMarketUpdate=0;
let soundEnabled = true, vibrateEnabled = false, musicEnabled = false;
let fishing = null, mine = null, battle = null;
let audioCtx = null;
let casinoHistory = [];

function getCurrentRank(state){
  const p = state.player;
  for(let i=RANKS.length-1;i>=0;i--){
    const r = RANKS[i];
    if(p.level>=r.minLevel && p.money>=r.minMoney) return r;
  }
  return RANKS[0];
}

function makeNewState(){
  return {
    v:6,
    player:{
      money:1000,xp:0,level:1,energy:100,hunger:100,thirst:100,
      health:100,happy:100,day:1,house:1,farm:1,reputation:0,
      castle:0,rank:'beginner',tickets:0
    },
    plots:[], animals:[], pets:[],
    greenhouse:{owned:false,plots:[]},
    inv:{
      wheat:0,corn:0,tomato:0,carrot:0,potato:0,strawberry:0,pumpkin:0,garlic:0,pepper:0,rice:0,grape:0,melon:0,lavender:0,golden:0,
      egg:0,milk:0,wool:0,truffle:0,feather:0,dragonScale:0,
      seed_wheat:3,seed_corn:1,seed_tomato:1,seed_carrot:2,
      seed_potato:0,seed_strawberry:0,seed_pumpkin:0,seed_garlic:0,seed_pepper:0,
      seed_rice:0,seed_grape:0,seed_melon:0,seed_lavender:0,seed_golden:0,
      feed:2,water:3,food:3,fertilizer:0,medicine:0,bait:0,pickaxe:0,
      coal:0,copper:0,iron:0,silver:0,gold:0,diamond:0,ruby:0,voidStone:0,
      mint:0,chamomile:0,ginseng:0,mandrake:0,moonflower:0,starDust:0,
      sardine:0,tuna:0,salmon:0,swordfish:0,golden_fish:0,dragon_fish:0,
      bread:0,cheese:0,wine:0,cake:0,pie:0,silk:0,oil:0,perfume:0,jam:0,steel:0,jewelry:0,potion:0
    },
    quests:{}, storyQuests:{}, achievements:{}, villagers:{},
    defeatedMonsters:{},
    stats:{
      earned:0,spent:0,harvested:0,collected:0,planted:0,sold:0,watered:0,
      fishCaught:0,oreMined:0,herbsCollected:0,animalsBred:0,giftsGiven:0,
      daysPlayed:0,trades:0,monstersDefeated:0,crafted:0,casinoPlays:0,
      casinoWon:0,casinoLost:0,boxesOpened:0,pvpWins:0,pvpLosses:0
    },
    weather:{id:'sunny',until:Date.now()+45000,legendary:null},
    season:'spring', seasonDay:1, market:{},
    mineDepth:1, maxMineDepth:1,
    encyclopedia:{crops:[],animals:[],fish:[],ores:[],herbs:[],monsters:[],crafted:[]},
    casinoLog:[], treasureLog:[],
    createdAt:Date.now(), lastSave:Date.now()
  };
}

function sanitize(s){
  if(!s||!s.player) return makeNewState();
  const d = makeNewState();
  s.player = {...d.player,...s.player};
  s.inv = {...d.inv,...s.inv};
  s.stats = {...d.stats,...s.stats};
  s.greenhouse = {...d.greenhouse,...(s.greenhouse||{})};
  s.encyclopedia = {...d.encyclopedia,...(s.encyclopedia||{})};
  if(!Array.isArray(s.plots)) s.plots=[];
  if(!Array.isArray(s.animals)) s.animals=[];
  if(!Array.isArray(s.pets)) s.pets=[];
  if(!Array.isArray(s.greenhouse.plots)) s.greenhouse.plots=[];
  if(!Array.isArray(s.casinoLog)) s.casinoLog=[];
  if(!Array.isArray(s.treasureLog)) s.treasureLog=[];
  if(!s.quests) s.quests={};
  if(!s.storyQuests) s.storyQuests={};
  if(!s.achievements) s.achievements={};
  if(!s.villagers) s.villagers={};
  if(!s.defeatedMonsters) s.defeatedMonsters={};
  if(!s.market) s.market={};
  if(!s.weather) s.weather={id:'sunny',until:Date.now()+45000,legendary:null};
  if(!s.season) s.season='spring';
  if(!s.seasonDay) s.seasonDay=1;
  if(!s.mineDepth) s.mineDepth=1;
  if(!s.maxMineDepth) s.maxMineDepth=1;
  if(typeof s.player.tickets!=='number') s.player.tickets=0;
  if(typeof s.player.castle!=='number') s.player.castle=0;

  const maxP = FARMLEVELS[s.player.farm]||4;
  while(s.plots.length<maxP) s.plots.push(newPlot(s.plots.length));
  s.plots = s.plots.slice(0,maxP);

  for(const q of DAILY_QUESTS){ if(!s.quests[q.id]) s.quests[q.id]={progress:0,done:false,claimed:false}; }
  for(const q of STORY_QUESTS){ if(!s.storyQuests[q.id]) s.storyQuests[q.id]={progress:0,done:false,claimed:false}; }
  for(const a of ACHIEVEMENTS){ if(!s.achievements[a.id]) s.achievements[a.id]={unlocked:false}; }
  for(const v of VILLAGERS){ if(!s.villagers[v.id]) s.villagers[v.id]={friendship:0,requests:[]}; }
  for(const [k,c] of Object.entries(CROPS)){ if(!s.market[k]) s.market[k]=c.sell; }
  for(const [k,p] of Object.entries(PRODUCTS)){ if(!s.market[k]) s.market[k]=p.sell; }

  return s;
}

function newPlot(idx){
  return {id:idx+1,crop:null,planted:null,ready:null,status:'empty',quality:50,water:100,pest:false,sick:false,fertilized:false,mutated:false};
}

// ==================== SAVE/LOAD ====================
function saveGame(showMsg){
  try{
    S.lastSave = Date.now();
    localStorage.setItem('modz_nexus_save_v6', JSON.stringify(S));
    if(showMsg) toast('💾 تم الحفظ');
  }catch(e){console.error(e);}
}
function loadGame(){
  try{ const raw = localStorage.getItem('modz_nexus_save_v6'); if(raw) return sanitize(JSON.parse(raw)); }
  catch(e){}
  return null;
}
function exportSave(){
  const blob = new Blob([JSON.stringify(S,null,2)],{type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'MODZ_Emperor_Save.json';
  a.click(); URL.revokeObjectURL(url); toast('📦 تم التصدير');
}
function importSave(e){
  const f = e.target.files[0]; if(!f) return;
  const r = new FileReader();
  r.onload = ev => {
    try{
      const data = JSON.parse(ev.target.result);
      if(data && data.player){ S = sanitize(data); saveGame(false); renderPage(currentPage); renderTop(); toast('✅ تم الاستيراد'); }
      else toast('❌ ملف غير صالح');
    }catch(err){ toast('❌ ملف تالف'); }
  };
  r.readAsText(f); e.target.value='';
}
function resetGame(){
  if(!confirm('⚠️ سيتم حذف كل التقدم!')) return;
  localStorage.removeItem('modz_nexus_save_v6');
  S = makeNewState(); saveGame(false); renderPage(currentPage); renderTop(); toast('🔄 تم الإعادة');
}
function toggleSound(){ soundEnabled = document.getElementById('soundToggle').checked; }
function toggleVibrate(){ vibrateEnabled = document.getElementById('vibrateToggle').checked; if(vibrateEnabled && navigator.vibrate) navigator.vibrate(30); }
function toggleMusic(){
  musicEnabled = document.getElementById('musicToggle').checked;
  if(musicEnabled) startMusic(); else stopMusic();
}

// ==================== MUSIC (SYNTHWAVE) ====================
function startMusic(){
  if(!soundEnabled || audioCtx) return;
  try{
    audioCtx = new(window.AudioContext||window.webkitAudioContext)();
    const loop = () => {
      if(!musicEnabled || !audioCtx) return;
      const bass = audioCtx.createOscillator();
      const bassGain = audioCtx.createGain();
      bass.type='sawtooth';
      bass.frequency.value = 55;
      bassGain.gain.value = 0.03;
      bass.connect(bassGain); bassGain.connect(audioCtx.destination);
      bass.start(); bass.stop(audioCtx.currentTime+1.8);
      const notes = [220,277,330,440];
      notes.forEach((freq,i)=>{
        const osc = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        osc.type='square';
        osc.frequency.value = freq;
        g.gain.value = 0;
        osc.connect(g); g.connect(audioCtx.destination);
        osc.start(audioCtx.currentTime + i*0.4);
        g.gain.setValueAtTime(0, audioCtx.currentTime + i*0.4);
        g.gain.linearRampToValueAtTime(0.015, audioCtx.currentTime + i*0.4 + 0.05);
        g.gain.linearRampToValueAtTime(0, audioCtx.currentTime + i*0.4 + 0.35);
        osc.stop(audioCtx.currentTime + i*0.4 + 0.4);
      });
      setTimeout(loop, 1800);
    };
    loop();
  }catch(e){}
}
function stopMusic(){
  if(audioCtx){ audioCtx.close(); audioCtx = null; }
}

// ==================== TOAST ====================
function toast(msg,type='info'){
  const c = document.getElementById('toastContainer');
  const t = document.createElement('div');
  t.className = 'toast';
  if(type==='legendary') t.style.borderColor = 'var(--neon-pink)';
  t.textContent = msg;
  c.appendChild(t);
  if(vibrateEnabled && navigator.vibrate) navigator.vibrate(15);
  setTimeout(()=>t.remove(),2800);
}

// ==================== SOUND ====================
function playSound(type){
  if(!soundEnabled) return;
  try{
    const ctx = new(window.AudioContext||window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    const tones = {
      harvest:[800,0.1],buy:[600,0.15],collect:[1000,0.08],
      levelup:[523,0.3],error:[200,0.2],coin:[1200,0.1],
      battle:[150,0.3],win:[880,0.4],lose:[180,0.4],legendary:[1200,0.6]
    };
    const [freq,dur] = tones[type]||[440,0.1];
    osc.frequency.value = freq;
    gain.gain.value = 0.08;
    osc.start();
    if(type==='levelup'){
      osc.frequency.setValueAtTime(659,ctx.currentTime+0.1);
      osc.frequency.setValueAtTime(784,ctx.currentTime+0.2);
    }
    if(type==='legendary'){
      osc.frequency.setValueAtTime(1500,ctx.currentTime+0.15);
      osc.frequency.setValueAtTime(1800,ctx.currentTime+0.3);
    }
    osc.stop(ctx.currentTime+dur);
  }catch(e){}
}

// ==================== DRAWER/NAV ====================
function toggleDrawer(){
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('drawer-overlay').classList.toggle('open');
}
function nav(page){
  currentPage = page;
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const el = document.getElementById('page-'+page);
  if(el) el.classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  const btn = document.querySelector(`.nav-btn[data-page="${page}"]`);
  if(btn) btn.classList.add('active');
  toggleDrawer();
  window.scrollTo({top:0,behavior:'auto'});
  renderPage(page);
  renderTop();
}

// ==================== FORMAT ====================
const money = n => Math.floor(n).toLocaleString('ar-EG');

// ==================== RENDER TOP ====================
function renderTop(){
  document.getElementById('topMoney').textContent = money(S.player.money);
  document.getElementById('topDay').textContent = S.player.day;
  const rank = getCurrentRank(S);
  document.getElementById('topRank').textContent = `${rank.emoji} ${rank.name}`;
  const w = WEATHERS.find(w=>w.id===S.weather.id)||LEGENDARY_WEATHERS.find(w=>w.id===S.weather.id)||WEATHERS[0];
  document.getElementById('weatherBadge').textContent = w.icon;
}

// ==================== RENDER PAGE ====================
function renderPage(page){
  if(!S) return;
  const map = {
    home:renderHome, farm:renderFarm, animals:renderAnimals, greenhouse:renderGreenhouse,
    shop:renderShop, sell:renderSell, bag:renderBag, market:renderMarket, crafting:renderCrafting,
    quests:renderQuests, achievements:renderAchievements, fishing:renderFishing,
    mining:renderMining, monsters:renderMonsters, forest:renderForest,
    casino:renderCasino, treasure:renderTreasure, castle:renderCastle,
    village:renderVillage, trading:renderTrading, pets:renderPets,
    encyclopedia:renderEncyclopedia, stats:renderStats, settings:()=>{}
  };
  if(map[page]) map[page]();
}

// ==================== HOME ====================
function renderHome(){
  const p = S.player;
  const rank = getCurrentRank(S);
  document.getElementById('heroDay').textContent = p.day;
  document.getElementById('heroMoney').textContent = money(p.money);
  document.getElementById('heroSeason').textContent = SEASON_INFO[S.season].name;
  document.getElementById('heroRank').textContent = `${rank.emoji} ${rank.name}`;
  document.getElementById('homeLevel').textContent = p.level;
  document.getElementById('homeFarm').textContent = p.farm;
  document.getElementById('homeHouse').textContent = p.house;
  document.getElementById('homeRep').textContent = p.reputation;

  const bars = [['barEnergy',p.energy,'⚡'],['barHunger',p.hunger,'🍲'],['barThirst',p.thirst,'💧'],['barHealth',p.health,'❤️'],['barHappy',p.happy,'😊']];
  bars.forEach(([id,v,ic])=>{
    const el = document.getElementById(id);
    const val = Math.max(0,Math.min(100,Math.floor(v)));
    el.style.width = val+'%';
    el.textContent = `${ic} ${val}%`;
    if(val<25 && !el.classList.contains('bar-critical')) el.classList.add('bar-critical');
    else if(val>=25) el.classList.remove('bar-critical');
  });
  const xpEl = document.getElementById('barXP');
  const xpPct = Math.min(100, Math.floor((p.xp/(p.level*100))*100));
  xpEl.style.width = xpPct+'%';
  xpEl.textContent = `⭐ ${xpPct}%`;

  const w = WEATHERS.find(w=>w.id===S.weather.id) || LEGENDARY_WEATHERS.find(w=>w.id===S.weather.id) || WEATHERS[0];
  document.getElementById('wIcon').textContent = w.icon;
  document.getElementById('wTemp').textContent = w.temp;
  document.getElementById('wDesc').textContent = w.name;
  document.getElementById('seasonName').textContent = SEASON_INFO[S.season].name;
  document.getElementById('seasonDay').textContent = S.seasonDay;

  const cost = HOUSECOST[p.house];
  const info = document.getElementById('houseInfo');
  const btn = document.getElementById('houseBtn');
  if(cost){
    info.textContent = `مستوى ${p.house} — طاقة أفضل عند النوم`;
    btn.textContent = `🔨 ترقية (💰 ${money(cost)})`;
    btn.disabled = p.money < cost;
  } else {
    info.textContent = '🏠 أقصى مستوى';
    btn.textContent = '✅ مكتمل'; btn.disabled = true;
  }
  renderEvents();
}

// ==================== FARM ====================
function renderFarm(){
  const p = S.player;
  const maxP = FARMLEVELS[p.farm]||4;
  while(S.plots.length<maxP) S.plots.push(newPlot(S.plots.length));
  S.plots = S.plots.slice(0,maxP);

  const grid = document.getElementById('plotsGrid');
  const now = Date.now();
  let html = '', active = 0;

  S.plots.forEach((plot,i)=>{
    if(plot.status!=='empty') active++;
    if(plot.status==='growing' && plot.ready && now>=plot.ready) plot.status='ready';
    let cls = 'plot';
    if(plot.water<25 && plot.status!=='empty') cls += ' dry';
    if(plot.sick) cls += ' sick';
    if(plot.status==='ready') cls += ' ready';
    if(plot.mutated) cls += ' mutated';

    if(plot.status==='empty'){
      html += `<div class="${cls}"><div style="font-size:2.2em;opacity:.35">🟫</div>
        <div style="font-size:.68em;color:var(--text2);margin:4px 0">فارغة</div>
        <button class="btn btn-green btn-sm" onclick="openPlant(${i},false)">🌱 زراعة</button></div>`;
    } else if(plot.status==='growing'){
      const crop = CROPS[plot.crop];
      const remain = Math.max(0, plot.ready-now);
      const s = Math.floor(remain/1000), m = Math.floor(s/60), sec = s%60;
      const wi = plot.water<25?'🔴':'💧';
      html += `<div class="${cls}"><div class="crop-emoji">${crop.emoji}</div>
        <div class="crop-name">${crop.name}</div>
        <div class="timer">⏳ ${m}:${String(sec).padStart(2,'0')}</div>
        <div style="font-size:.58em;color:var(--neon-cyan);margin:2px">${wi} ${Math.floor(plot.water)}%</div>
        ${plot.pest?'<span class="warn-badge">🐛</span>':''}
        ${plot.sick?'<span class="warn-badge">💊</span>':''}
        ${plot.mutated?'<span class="warn-badge" style="background:linear-gradient(135deg,#ec4899,#a855f7)">✨</span>':''}</div>`;
    } else {
      const crop = CROPS[plot.crop];
      const stars = plot.quality>=85?'⭐⭐⭐':plot.quality>=65?'⭐⭐':'⭐';
      html += `<div class="${cls}"><div class="crop-emoji">${crop.emoji}</div>
        <div class="crop-name">${crop.name} ${stars}</div>
        <div class="ready-badge">✅</div>
        <button class="btn btn-gold btn-sm" style="margin-top:5px" onclick="harvest(${i},false)">🌾 حصاد</button></div>`;
    }
  });
  grid.innerHTML = html;
  document.getElementById('plotCount').textContent = `(${active}/${maxP})`;

  const cost = FARMCOST[p.farm];
  const info = document.getElementById('farmInfo');
  const btn = document.getElementById('farmBtn');
  const nextP = FARMLEVELS[p.farm+1]||'—';
  if(cost){
    info.textContent = `مستوى ${p.farm} — ${maxP} → ${nextP} قطعة`;
    btn.textContent = `🔨 ترقية (💰 ${money(cost)})`;
    btn.disabled = p.money<cost;
  } else {
    info.textContent = `مستوى ${p.farm} — ${maxP} قطعة (أقصى)`;
    btn.textContent = '✅ مكتمل'; btn.disabled = true;
  }
}

// ==================== GREENHOUSE ====================
function renderGreenhouse(){
  const c = document.getElementById('greenhouseContent');
  if(!S.greenhouse.owned){
    c.innerHTML = `<p style="color:var(--text2);text-align:center;padding:20px">🏡 لم تشترِ الصوبة</p>
      <button class="btn btn-green" style="width:100%;margin-top:12px" onclick="buyGreenhouse()" ${S.player.money<GREENHOUSE_COST?'disabled':''}>🛒 شراء (💰 ${money(GREENHOUSE_COST)})</button>`;
    return;
  }
  while(S.greenhouse.plots.length<6) S.greenhouse.plots.push({...newPlot(S.greenhouse.plots.length),greenhouse:true});
  let html = '<div class="plots-grid">';
  const now = Date.now();
  S.greenhouse.plots.forEach((plot,i)=>{
    if(plot.status==='growing' && plot.ready && now>=plot.ready) plot.status='ready';
    let cls = 'plot';
    if(plot.status==='ready') cls += ' ready';
    if(plot.status==='empty'){
      html += `<div class="${cls}"><div style="font-size:2.2em;opacity:.35">🏡</div>
        <button class="btn btn-green btn-sm" onclick="openPlant(${i},true)">🌱</button></div>`;
    } else if(plot.status==='growing'){
      const crop = CROPS[plot.crop];
      const remain = Math.max(0, plot.ready-now);
      const s = Math.floor(remain/1000);
      html += `<div class="${cls}"><div class="crop-emoji">${crop.emoji}</div>
        <div class="crop-name">${crop.name}</div>
        <div class="timer">⏳ ${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}</div></div>`;
    } else {
      const crop = CROPS[plot.crop];
      html += `<div class="${cls}"><div class="crop-emoji">${crop.emoji}</div>
        <div class="ready-badge">✅</div>
        <button class="btn btn-gold btn-sm" onclick="harvest(${i},true)">🌾</button></div>`;
    }
  });
  html += '</div>';
  c.innerHTML = html;
}
function buyGreenhouse(){
  if(S.player.money < GREENHOUSE_COST){ toast('❌ رصيد ناقص'); return; }
  S.player.money -= GREENHOUSE_COST;
  S.greenhouse.owned = true;
  toast('🏡 اشتريت الصوبة!');
  playSound('buy');
  saveGame(false); renderGreenhouse(); renderTop();
}

// ==================== PLANT ====================
function openPlant(idx, isGreenhouse){
  const plot = isGreenhouse ? S.greenhouse.plots[idx] : S.plots[idx];
  if(plot.status!=='empty') return;
  let opts = '', has = false;
  for(const [k,c] of Object.entries(CROPS)){
    const qty = S.inv['seed_'+k]||0;
    if(qty>0){
      has = true;
      const okSeason = isGreenhouse || c.season.includes(S.season);
      opts += `<button class="btn ${okSeason?'btn-green':'btn-outline'}" style="width:100%;margin:4px 0" onclick="plant(${idx},'${k}',${isGreenhouse})">
        ${c.emoji} ${c.name} (${qty}) ${okSeason?'✅':'⛔'}</button>`;
    }
  }
  if(!has) opts = '<p style="color:var(--text2);padding:12px">❌ لا بذور</p>';
  const m = document.createElement('div');
  m.className = 'modal-overlay';
  m.innerHTML = `<div class="modal-box"><h3 style="margin-bottom:12px">🌱 زراعة ${isGreenhouse?'صوبة':'قطعة'} ${idx+1}</h3>${opts}<button class="btn btn-red btn-sm" style="margin-top:8px;width:100%" onclick="closeModal()">إلغاء</button></div>`;
  document.body.appendChild(m);
  m.addEventListener('click',e=>{if(e.target===m) closeModal();});
}
function closeModal(){ document.querySelectorAll('.modal-overlay').forEach(m=>m.remove()); }

function plant(idx,type,isGreenhouse){
  const plot = isGreenhouse ? S.greenhouse.plots[idx] : S.plots[idx];
  if(plot.status!=='empty') return;
  const crop = CROPS[type];
  const seedKey = 'seed_'+type;
  if((S.inv[seedKey]||0)<=0){ toast('❌ لا بذور'); return; }
  if(!isGreenhouse && !crop.season.includes(S.season)){ toast('⚠️ خارج الموسم'); return; }
  S.inv[seedKey]--;
  plot.crop = type; plot.status = 'growing'; plot.planted = Date.now();
  plot.quality = 50; plot.water = 100;
  plot.pest = false; plot.sick = false; plot.fertilized = false;
  plot.mutated = Math.random() < 0.03;
  const w = WEATHERS.find(w=>w.id===S.weather.id) || LEGENDARY_WEATHERS.find(w=>w.id===S.weather.id) || WEATHERS[0];
  let growMul = 1/SEASON_INFO[S.season].bonus * 1/w.bonus;
  if(isGreenhouse) growMul = 0.9;
  if(S.pets.some(p=>p.type==='rabbit')) growMul *= 0.9;
  plot.ready = Date.now() + Math.max(8000, crop.grow * growMul * 1000);
  S.stats.planted++;
  questProgress('plant',1);
  if(!S.encyclopedia.crops.includes(type)) S.encyclopedia.crops.push(type);
  closeModal();
  toast(`🌱 زرعت ${crop.name}${plot.mutated?' ✨':''}`);
  playSound('buy');
  saveGame(false);
  if(isGreenhouse) renderGreenhouse(); else renderFarm();
  renderBag();
}

// ==================== HARVEST ====================
function harvest(idx, isGreenhouse){
  const plot = isGreenhouse ? S.greenhouse.plots[idx] : S.plots[idx];
  if(plot.status!=='ready') return;
  const crop = CROPS[plot.crop];
  let qty = plot.quality>=85?3:plot.quality>=65?2:1;
  if(plot.mutated) qty *= 2;
  if(S.pets.some(p=>p.type==='fox') && Math.random()<0.25) qty++;
  if(S.weather.legendary==='golden') qty *= 2;
  S.inv[plot.crop] = (S.inv[plot.crop]||0)+qty;
  const xp = Math.round(crop.xp*qty*(plot.mutated?1.5:1));
  S.player.xp += xp;
  S.stats.harvested += qty;
  questProgress('harvest',qty);
  checkLevel();
  plot.crop=null; plot.status='empty'; plot.planted=null; plot.ready=null;
  plot.water=100; plot.pest=false; plot.sick=false; plot.fertilized=false; plot.quality=50; plot.mutated=false;
  toast(`🌾 ${crop.name} ×${qty} (+${xp}XP)`);
  playSound('harvest');
  saveGame(false);
  if(isGreenhouse) renderGreenhouse(); else renderFarm();
  renderBag(); renderTop();
}

// ==================== IRRIGATE / FERTILIZE ====================
function irrigateAll(){
  let c=0;
  S.plots.forEach(p=>{ if(p.status==='growing'&&p.water<100){ p.water=Math.min(100,p.water+60); c++; } });
  if(c===0){ toast('💧 لا محاصيل عطشى'); return; }
  S.stats.watered += c; questProgress('water',1);
  toast(`💧 ريّت ${c}`);
  playSound('collect');
  saveGame(false); renderFarm();
}
function waterAll(){ irrigateAll(); }
function fertilizeAll(){
  if((S.inv.fertilizer||0)<=0){ toast('❌ لا سماد'); return; }
  let c=0;
  S.plots.forEach(p=>{ if(p.status==='growing'&&!p.fertilized){ p.fertilized=true; p.quality=Math.min(100,p.quality+25); if(p.ready)p.ready-=15000; c++; } });
  if(c===0){ toast('🧪 لا تحتاج'); return; }
  S.inv.fertilizer--;
  toast(`🧪 سمّدت ${c}`);
  saveGame(false); renderFarm(); renderBag();
}
function treatAll(){
  let c=0;
  S.plots.forEach(p=>{ if(p.pest){p.pest=false;c++;} if(p.sick){p.sick=false;c++;} });
  if(c===0){ toast('✅ سليمة'); return; }
  toast(`💊 عالجت ${c}`);
  saveGame(false); renderFarm();
}
function harvestAll(){
  let n = 0;
  S.plots.forEach((p,idx)=>{ if(p.status==='ready'){ harvest(idx,false); n++; } });
  if(S.greenhouse.owned) S.greenhouse.plots.forEach((p,idx)=>{ if(p.status==='ready'){ harvest(idx,true); n++; } });
  if(n===0) toast('🌾 لا شيء جاهز'); else toast(`🌾 حصدت ${n}`);
}

// ==================== ANIMALS ====================
function renderAnimals(){
  const grid = document.getElementById('animalsGrid');
  let html = '';
  document.getElementById('animalCount').textContent = `(${S.animals.length})`;
  if(S.animals.length===0){
    html = '<p style="color:var(--text2);text-align:center;padding:24px;grid-column:1/-1">🐄 لا حيوانات</p>';
  }
  const now = Date.now();
  S.animals.forEach((a,idx)=>{
    if(a.status==='waiting' && a.readyAt && now>=a.readyAt) a.status='ready';
    const info = ANIMALS[a.type];
    const happy = Math.floor(a.happy||100);
    let time = '';
    if(a.status==='waiting' && a.readyAt){
      const s = Math.max(0,Math.floor((a.readyAt-now)/1000));
      time = `<div class="timer">⏳ ${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}</div>`;
    }
    html += `<div class="animal-card">
      <span class="animal-emoji">${info.emoji}</span>
      <div class="animal-name">${info.name}</div>
      <div class="animal-status">${a.status==='ready'?'✅ جاهز':a.status==='waiting'?'⏳ ينتج...':'😊'}</div>
      ${time}
      <div class="happiness-bar"><div class="happiness-fill" style="width:${happy}%"></div></div>
      <div style="font-size:.62em;color:var(--text2);margin-bottom:6px">سعادة ${happy}%</div>
      <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:center">
        ${a.status==='ready'?`<button class="btn btn-gold btn-sm" onclick="collectProduct(${idx})">📦</button>`:''}
        <button class="btn btn-cyan btn-sm" onclick="feedAnimal(${idx})">🌿</button>
        <button class="btn btn-purple btn-sm" onclick="petAnimalIdx(${idx})">🐾</button>
      </div></div>`;
  });
  grid.innerHTML = html;

  const buyGrid = document.getElementById('buyAnimals');
  let bHtml = '';
  const limit = ANIMALLIMIT[S.player.farm]||2;
  if(S.animals.length>=limit){
    bHtml = `<p style="color:var(--text2);width:100%;text-align:center;padding:12px;grid-column:1/-1">⚠️ الحد (${limit})</p>`;
  } else {
    for(const [k,i] of Object.entries(ANIMALS)){
      bHtml += `<div class="shop-item">
        <span class="item-icon">${i.emoji}</span>
        <div class="item-name">${i.name}</div>
        <div class="price">💰 ${money(i.price)}</div>
        <button class="btn btn-green btn-sm" onclick="buyAnimal('${k}')" ${S.player.money<i.price?'disabled':''}>شراء</button></div>`;
    }
  }
  buyGrid.innerHTML = bHtml;
}
function buyAnimal(type){
  const info = ANIMALS[type];
  const limit = ANIMALLIMIT[S.player.farm]||2;
  if(S.animals.length>=limit){ toast('❌ ممتلئة'); return; }
  if(S.player.money<info.price){ toast('❌ رصيد ناقص'); return; }
  S.player.money -= info.price; S.stats.spent += info.price;
  S.animals.push({id:Date.now(),type,status:'waiting',readyAt:Date.now()+info.prodTime*1000,happy:100,fed:Date.now()});
  toast(`🐄 اشتريت ${info.name}`);
  playSound('buy');
  storyProgress('buy_animal',1);
  if(!S.encyclopedia.animals.includes(type)) S.encyclopedia.animals.push(type);
  saveGame(false); renderAnimals(); renderTop(); renderHome();
}
function collectProduct(idx){
  const a = S.animals[idx];
  if(a.status!=='ready') return;
  const info = ANIMALS[a.type];
  let qty = (a.happy||100)>=70?2:1;
  if(S.pets.some(p=>p.type==='dog')) qty = Math.ceil(qty*1.15);
  S.inv[info.prod] = (S.inv[info.prod]||0)+qty;
  S.player.xp += info.xp; S.stats.collected += qty;
  questProgress('collect',qty); checkLevel();
  a.status='waiting'; a.readyAt=Date.now()+info.prodTime*1000;
  a.happy = Math.min(100,(a.happy||100)+2);
  toast(`📦 ${PRODUCTS[info.prod].emoji} ×${qty}`);
  playSound('collect');
  saveGame(false); renderAnimals(); renderBag(); renderTop();
}
function feedAnimal(idx){
  const a = S.animals[idx]; if(!a) return;
  if((S.inv.feed||0)<=0){ toast('❌ لا علف'); return; }
  S.inv.feed--; a.happy = Math.min(100,(a.happy||100)+18); a.fed=Date.now();
  toast(`🌿 أطعمت`);
  saveGame(false); renderAnimals(); renderBag();
}
function petAnimalIdx(idx){
  const a = S.animals[idx]; if(!a) return;
  a.happy = Math.min(100,(a.happy||100)+10);
  toast(`🐾 سعيد!`);
  saveGame(false); renderAnimals();
}
function breedAnimals(){
  const happy = S.animals.filter(a=>(a.happy||100)>=70);
  if(happy.length<2){ toast('⚠️ تحتاج حيوانين سعيدين'); return; }
  const limit = ANIMALLIMIT[S.player.farm]||2;
  if(S.animals.length>=limit){ toast('❌ ممتلئة'); return; }
  const p1 = happy[Math.floor(Math.random()*happy.length)];
  let p2 = happy[Math.floor(Math.random()*happy.length)];
  while(p2===p1 && happy.length>1) p2 = happy[Math.floor(Math.random()*happy.length)];
  const info = ANIMALS[p1.type];
  S.animals.push({id:Date.now(),type:p1.type,status:'waiting',readyAt:Date.now()+info.prodTime*1000,happy:80,fed:Date.now()});
  p1.happy = Math.max(0,(p1.happy||100)-10);
  p2.happy = Math.max(0,(p2.happy||100)-10);
  S.stats.animalsBred++;
  toast(`🧬 وُلد ${info.emoji}!`);
  playSound('levelup');
  saveGame(false); renderAnimals();
}

// ==================== SHOP ====================
function renderShop(){
  const sg = document.getElementById('shopSeeds');
  let sHtml = '';
  for(const [k,c] of Object.entries(CROPS)){
    const ok = c.season.includes(S.season) || S.greenhouse.owned;
    sHtml += `<div class="shop-item">
      <span class="item-icon">${c.emoji}</span>
      <div class="item-name">بذور ${c.name}</div>
      <div class="price">💰 ${money(c.price)}</div>
      <div class="stock">📦 ${S.inv['seed_'+k]||0}</div>
      ${!ok?'<div style="font-size:.58em;color:var(--neon-orange)">⛔ خارج الموسم</div>':''}
      <button class="btn btn-green btn-sm" onclick="buySeed('${k}')" ${!ok||S.player.money<c.price?'disabled':''}>شراء</button></div>`;
  }
  sg.innerHTML = sHtml;

  const rg = document.getElementById('shopRes');
  let rHtml = '';
  const res = [
    {k:'feed',n:'علف',e:'🌿',p:8},{k:'water',n:'مياه',e:'💧',p:5},
    {k:'food',n:'طعام',e:'🍲',p:15},{k:'fertilizer',n:'سماد',e:'🧪',p:25},
    {k:'medicine',n:'دواء',e:'💊',p:40},{k:'bait',n:'طُعم',e:'🪱',p:10},
    {k:'pickaxe',n:'فأس',e:'⛏️',p:50}
  ];
  res.forEach(r=>{
    rHtml += `<div class="shop-item">
      <span class="item-icon">${r.e}</span>
      <div class="item-name">${r.n}</div>
      <div class="price">💰 ${money(r.p)}</div>
      <div class="stock">📦 ${S.inv[r.k]||0}</div>
      <button class="btn btn-green btn-sm" onclick="buyRes('${r.k}','${r.n}',${r.p})" ${S.player.money<r.p?'disabled':''}>شراء</button></div>`;
  });
  rg.innerHTML = rHtml;

  const tg = document.getElementById('shopTickets');
  let tHtml = '';
  const ticketPrices = [{qty:1,p:50},{qty:10,p:400},{qty:50,p:1800},{qty:100,p:3000}];
  ticketPrices.forEach(t=>{
    tHtml += `<div class="shop-item">
      <span class="item-icon">🎰</span>
      <div class="item-name">${t.qty} تذكرة</div>
      <div class="price">💰 ${money(t.p)}</div>
      <button class="btn btn-pink btn-sm" onclick="buyTickets(${t.qty},${t.p})" ${S.player.money<t.p?'disabled':''}>شراء</button></div>`;
  });
  tg.innerHTML = tHtml;
}
function buySeed(k){
  const c = CROPS[k];
  if(S.player.money<c.price){ toast('❌ رصيد ناقص'); return; }
  if(!c.season.includes(S.season) && !S.greenhouse.owned){ toast('⚠️ خارج الموسم'); return; }
  S.player.money -= c.price; S.stats.spent += c.price;
  S.inv['seed_'+k] = (S.inv['seed_'+k]||0)+1;
  toast(`🌱 اشتريت بذور ${c.name}`);
  playSound('buy');
  saveGame(false); renderShop(); renderBag(); renderTop(); renderHome();
}
function buyRes(k,n,p){
  if(S.player.money<p){ toast('❌ رصيد ناقص'); return; }
  S.player.money -= p; S.stats.spent += p;
  S.inv[k] = (S.inv[k]||0)+1;
  toast(`✅ اشتريت ${n}`);
  playSound('buy');
  saveGame(false); renderShop(); renderBag(); renderTop(); renderHome();
}
function buyTickets(qty,price){
  if(S.player.money<price){ toast('❌ رصيد ناقص'); return; }
  S.player.money -= price;
  S.player.tickets += qty;
  toast(`🎰 +${qty} تذكرة`);
  playSound('coin');
  saveGame(false); renderShop(); renderCasino(); renderTop();
}

// ==================== SELL ====================
function renderSell(){
  const list = document.getElementById('sellList');
  const items = [];
  for(const [k,v] of Object.entries(CROPS)){
    const q = S.inv[k]||0;
    if(q>0) items.push({k,n:v.name,e:v.emoji,p:S.market[k]||v.sell,q});
  }
  for(const [k,v] of Object.entries(PRODUCTS)){
    const q = S.inv[k]||0;
    if(q>0) items.push({k,n:v.name,e:v.emoji,p:S.market[k]||v.sell,q});
  }
  for(const [k,v] of Object.entries(FISH)){
    const q = S.inv[k]||0;
    if(q>0) items.push({k,n:v.name,e:v.emoji,p:v.price,q});
  }
  for(const [k,v] of Object.entries(ORES)){
    const q = S.inv[k]||0;
    if(q>0) items.push({k,n:v.name,e:v.emoji,p:v.price,q});
  }
  for(const [k,v] of Object.entries(HERBS)){
    const q = S.inv[k]||0;
    if(q>0) items.push({k,n:v.name,e:v.emoji,p:v.price,q});
  }
  RECIPES.forEach(r=>{
    const q = S.inv[r.id]||0;
    if(q>0) items.push({k:r.id,n:r.name,e:r.emoji,p:r.sell,q});
  });

  document.getElementById('sellCount').textContent = `(${items.length} صنف)`;
  if(items.length===0){
    list.innerHTML = '<p style="color:var(--text2);text-align:center;padding:24px">📭 لا منتجات للبيع</p>';
    return;
  }
  let html = '';
  items.forEach(it=>{
    html += `<div class="sell-item">
      <span class="s-icon">${it.e}</span>
      <div style="flex:1;min-width:80px">
        <div style="font-weight:800;font-size:.85em">${it.n}</div>
        <div style="font-size:.68em;color:var(--text2)">متاح: ${it.q}</div>
      </div>
      <div style="font-weight:900;color:var(--neon-yellow);font-size:.9em">💰 ${money(it.p)}</div>
      <div style="display:flex;gap:3px">
        <button class="btn btn-green btn-sm" onclick="sell('${it.k}',1)">1</button>
        <button class="btn btn-orange btn-sm" onclick="sell('${it.k}',5)">5</button>
        <button class="btn btn-gold btn-sm" onclick="sell('${it.k}',${Math.min(99,it.q)})">الكل</button>
      </div></div>`;
  });
  list.innerHTML = html;
}
function sell(k,q){
  const qty = Math.min(q, S.inv[k]||0);
  if(qty<=0){ toast('❌ كمية ناقصة'); return; }
  let price = S.market[k] || PRODUCTS[k]?.sell || CROPS[k]?.sell || FISH[k]?.price || ORES[k]?.price || HERBS[k]?.price || RECIPES.find(r=>r.id===k)?.sell || 10;
  if(S.pets.some(p=>p.type==='owl') && (S.player.day%2===0)) price = Math.round(price*1.2);
  if(S.weather.legendary==='golden') price = Math.round(price*1.5);
  const total = price*qty;
  S.inv[k] -= qty; S.player.money += total;
  S.stats.earned += total; S.stats.sold += qty;
  questProgress('sell',qty);
  toast(`💰 +${money(total)}`);
  playSound('coin');
  saveGame(false); renderSell(); renderBag(); renderTop(); renderHome();
}

// ==================== BAG ====================
function renderBag(){
  const grid = document.getElementById('invGrid');
  const all = [
    ...Object.entries(CROPS).map(([k,c])=>({k,n:c.name,e:c.emoji})),
    ...Object.entries(PRODUCTS).map(([k,p])=>({k,n:p.name,e:p.emoji})),
    ...Object.entries(FISH).map(([k,f])=>({k,n:f.name,e:f.emoji})),
    ...Object.entries(ORES).map(([k,o])=>({k,n:o.name,e:o.emoji})),
    ...Object.entries(HERBS).map(([k,h])=>({k,n:h.name,e:h.emoji})),
    ...RECIPES.map(r=>({k:r.id,n:r.name,e:r.emoji})),
    ...Object.entries(CROPS).map(([k,c])=>({k:'seed_'+k,n:'بذور '+c.name,e:'🌱'})),
    {k:'feed',n:'علف',e:'🌿'},{k:'water',n:'مياه',e:'💧'},
    {k:'food',n:'طعام',e:'🍲'},{k:'fertilizer',n:'سماد',e:'🧪'},{k:'medicine',n:'دواء',e:'💊'},
    {k:'bait',n:'طُعم',e:'🪱'},{k:'pickaxe',n:'فأس',e:'⛏️'}
  ];
  let total = 0, html = '';
  all.forEach(it=>{
    const q = S.inv[it.k]||0;
    if(q>0) total++;
    html += `<div class="inv-item"><span class="emoji">${it.e}</span><div class="name">${it.n}</div><div class="qty">${q}</div></div>`;
  });
  grid.innerHTML = html;
  document.getElementById('invTotal').textContent = `(${total} صنف)`;
}

// ==================== MARKET ====================
function renderMarket(){
  const mg = document.getElementById('marketGrid');
  let html = '';
  const mk = [
    ...Object.entries(CROPS).map(([k,c])=>({k,n:c.name,e:c.emoji,base:c.sell})),
    ...Object.entries(PRODUCTS).map(([k,p])=>({k,n:p.name,e:p.emoji,base:p.sell}))
  ];
  mk.forEach(it=>{
    const price = S.market[it.k]||it.base;
    const diff = price - it.base;
    const pct = it.base>0?Math.round((diff/it.base)*100):0;
    html += `<div class="market-item">
      <span class="m-icon">${it.e}</span>
      <div class="m-name">${it.n}</div>
      <div class="m-price">💰 ${price}</div>
      <div class="m-change ${diff>=0?'up':'down'}">${diff>=0?'▲':'▼'} ${Math.abs(pct)}%</div></div>`;
  });
  mg.innerHTML = html;

  const trend = document.getElementById('marketTrend');
  let rising = 0, falling = 0;
  mk.forEach(it=>{
    const p = S.market[it.k]||it.base;
    if(p>it.base) rising++;
    else if(p<it.base) falling++;
  });
  trend.innerHTML = `<div style="display:flex;gap:10px;flex-wrap:wrap">
    <div class="badge" style="color:var(--neon-green)">📈 صاعد: ${rising}</div>
    <div class="badge" style="color:var(--neon-red)">📉 هابط: ${falling}</div>
    <div class="badge" style="color:var(--neon-cyan)">➡️ مستقر: ${mk.length-rising-falling}</div>
  </div>`;
}

// ==================== CRAFTING ====================
function renderCrafting(){
  const grid = document.getElementById('craftGrid');
  let html = '';
  RECIPES.forEach(r=>{
    const canCraft = Object.entries(r.ing).every(([k,q])=>(S.inv[k]||0)>=q);
    const ingList = Object.entries(r.ing).map(([k,q])=>{
      const info = CROPS[k]||PRODUCTS[k]||HERBS[k]||ORES[k]||{name:k,emoji:'?'};
      const have = S.inv[k]||0;
      const color = have>=q?'var(--neon-green)':'var(--neon-red)';
      return `<span style="color:${color}">${info.emoji}${have}/${q}</span>`;
    }).join(' + ');
    html += `<div class="craft-item">
      <span class="c-icon">${r.emoji}</span>
      <div class="c-name">${r.name}</div>
      <div class="c-recipe">${ingList}</div>
      <div style="font-size:.72em;color:var(--neon-gold);font-weight:800;margin:4px 0">💰 ${money(r.sell)}</div>
      <button class="btn btn-purple btn-sm" onclick="craft('${r.id}')" ${!canCraft?'disabled':''}>🧪 اصنع</button>
    </div>`;
  });
  grid.innerHTML = html;

  const cg = document.getElementById('craftedGrid');
  let ch = '';
  RECIPES.forEach(r=>{
    const q = S.inv[r.id]||0;
    ch += `<div class="inv-item"><span class="emoji">${r.emoji}</span><div class="name">${r.name}</div><div class="qty">${q}</div></div>`;
  });
  cg.innerHTML = ch;
}
function craft(id){
  const r = RECIPES.find(x=>x.id===id);
  if(!r) return;
  for(const [k,q] of Object.entries(r.ing)){
    if((S.inv[k]||0)<q){ toast('❌ مواد ناقصة'); return; }
  }
  for(const [k,q] of Object.entries(r.ing)) S.inv[k] -= q;
  S.inv[r.id] = (S.inv[r.id]||0)+1;
  S.player.xp += r.xp;
  S.stats.crafted++;
  questProgress('craft',1);
  checkLevel();
  if(!S.encyclopedia.crafted.includes(id)) S.encyclopedia.crafted.push(id);
  toast(`🧪 صنعت ${r.name}`);
  playSound('levelup');
  saveGame(false); renderCrafting(); renderBag(); renderTop();
}

// ==================== MONSTERS ====================
function renderMonsters(){
  const grid = document.getElementById('monstersGrid');
  let html = '';
  MONSTERS.forEach(m=>{
    const available = S.mineDepth >= m.minDepth;
    const defeated = S.defeatedMonsters[m.id];
    if(!available){
      html += `<div class="monster-card defeated">
        <span class="m-emoji">🔒</span>
        <div class="m-name">؟؟؟</div>
        <div class="m-stats">العمق ${m.minDepth}+</div>
      </div>`;
      return;
    }
    html += `<div class="monster-card${defeated?' defeated':''}" onclick="fightMonster('${m.id}')">
      <span class="m-emoji">${m.emoji}</span>
      <div class="m-name">${m.name}</div>
      <div class="m-stats">HP ${m.hp} | ATK ${m.atk}</div>
      <div class="m-reward">💰 ${money(m.reward)} | +${m.xp}XP</div>
      ${defeated?'<div style="font-size:.65em;color:var(--neon-green);margin-top:4px">✅ مهزوم</div>':''}
    </div>`;
  });
  grid.innerHTML = html;

  const log = document.getElementById('battleLog');
  if(log && !log.innerHTML.trim()) log.innerHTML = '<span style="color:var(--text2)">اختر وحشاً للقتال</span>';
}
function fightMonster(id){
  const m = MONSTERS.find(x=>x.id===id);
  if(!m) return;
  if(S.mineDepth < m.minDepth){ toast(`⚠️ يحتاج عمق ${m.minDepth}+`); return; }
  if(S.player.energy < 10){ toast('⚡ طاقة قليلة'); return; }
  S.player.energy -= 10;

  const playerPower = 20 + S.player.level*3 + S.player.castle*10 + S.pets.length*5;
  const monsterPower = m.atk * 2 + m.hp/3;
  const playerRoll = playerPower * (0.8 + Math.random()*0.4);
  const monsterRoll = monsterPower * (0.8 + Math.random()*0.4);

  const log = document.getElementById('battleLog');
  let logHtml = `<div>⚔️ <strong>${m.emoji} ${m.name}</strong> ظهر!</div>`;
  logHtml += `<div class="log-hit">قوتك: ${Math.round(playerRoll)} vs الوحش: ${Math.round(monsterRoll)}</div>`;

  if(playerRoll > monsterRoll){
    const reward = m.reward;
    S.player.money += reward;
    S.player.xp += m.xp;
    S.stats.earned += reward;
    S.stats.monstersDefeated++;
    if(m.ore) S.inv[m.ore] = (S.inv[m.ore]||0) + m.oreQty;
    S.defeatedMonsters[m.id] = (S.defeatedMonsters[m.id]||0)+1;
    questProgress('monster',1);
    checkLevel();
    if(!S.encyclopedia.monsters.includes(id)) S.encyclopedia.monsters.push(id);
    logHtml += `<div class="log-win">✅ فزت! +💰${money(reward)} +${m.xp}XP +${m.oreQty} ${ORES[m.ore]?.emoji||''}</div>`;
    toast(`⚔️ هزمت ${m.name}!`);
    playSound('win');
  } else {
    const damage = Math.min(S.player.health-1, Math.floor(m.atk/2));
    S.player.health = Math.max(1, S.player.health - damage);
    logHtml += `<div class="log-lose">❌ خسرت! -${damage} صحة</div>`;
    toast(`💔 خسرت ضد ${m.name}`);
    playSound('lose');
  }
  log.innerHTML = logHtml;
  saveGame(false); renderMonsters(); renderTop(); renderHome();
}

// ==================== FOREST ====================
function renderForest(){
  const hg = document.getElementById('herbGrid');
  let html = '';
  Object.entries(HERBS).forEach(([k,h])=>{
    const q = S.inv[k]||0;
    html += `<div class="inv-item"><span class="emoji">${h.emoji}</span><div class="name">${h.name}</div><div class="qty">${q}</div></div>`;
  });
  hg.innerHTML = html;
}
function forage(){
  if(S.player.energy<5){ toast('⚡ طاقة قليلة'); return; }
  S.player.energy -= 5;
  const roll = Math.random();
  let herb;
  if(roll > 0.98) herb = 'starDust';
  else if(roll > 0.9) herb = 'moonflower';
  else if(roll > 0.75) herb = 'mandrake';
  else if(roll > 0.5) herb = 'ginseng';
  else if(roll > 0.25) herb = 'chamomile';
  else herb = 'mint';
  S.inv[herb] = (S.inv[herb]||0)+1;
  S.stats.herbsCollected++;
  const h = HERBS[herb];
  S.player.xp += Math.round(h.price/3);
  checkLevel();
  if(!S.encyclopedia.herbs.includes(herb)) S.encyclopedia.herbs.push(herb);
  const fs = document.getElementById('forestStatus');
  if(fs) fs.textContent = `🌿 وجدت ${h.name}!`;
  toast(`🌿 ${h.emoji} ${h.name}`);
  playSound('collect');
  saveGame(false); renderForest(); renderBag(); renderHome();
}
function deepForage(){
  if(S.player.energy<15){ toast('⚡ طاقة قليلة'); return; }
  S.player.energy -= 15;
  for(let i=0;i<3;i++) forage();
}

// ==================== FISHING ====================
function renderFishing(){
  const log = document.getElementById('fishLog');
  let html = '';
  Object.entries(FISH).forEach(([k,f])=>{
    const q = S.inv[k]||0;
    html += `<div class="inv-item"><span class="emoji">${f.emoji}</span><div class="name">${f.name}</div><div class="qty">${q}</div></div>`;
  });
  log.innerHTML = html;
}
function castLine(){
  if((S.inv.bait||0)<=0){ toast('❌ لا طُعم!'); return; }
  S.inv.bait--;
  const pool = Object.entries(FISH).filter(([k,f])=>f.seasons.includes(S.season));
  const luckBonus = S.pets.some(p=>p.type==='fox')?0.15:0;
  const roll = Math.random() - luckBonus;
  let caught;
  if(roll > 0.95) caught = pool.find(([k])=>k==='dragon_fish') || pool[0];
  else if(roll > 0.85) caught = pool.find(([k])=>k==='golden_fish') || pool[Math.floor(Math.random()*pool.length)];
  else if(roll > 0.6) caught = pool.find(([k,f])=>f.rarity==='نادر') || pool[Math.floor(Math.random()*pool.length)];
  else caught = pool[Math.floor(Math.random()*pool.length)];
  const [key,fish] = caught;
  S.inv[key] = (S.inv[key]||0)+1;
  S.stats.fishCaught++;
  S.player.xp += Math.round(fish.price/2);
  questProgress('fish',1);
  checkLevel();
  if(!S.encyclopedia.fish.includes(key)) S.encyclopedia.fish.push(key);
  const fi = document.getElementById('fishIcon');
  const fs = document.getElementById('fishingStatus');
  if(fi) fi.textContent = fish.emoji;
  if(fs) fs.textContent = `🎣 ${fish.name}! (${fish.rarity})`;
  toast(`🎣 ${fish.emoji} ${fish.name}`);
  playSound('collect');
  saveGame(false); renderFishing(); renderBag(); renderTop();
}
function autoFish(){
  let caught = 0;
  for(let i=0;i<5;i++){ if((S.inv.bait||0)>0){ castLine(); caught++; } }
  if(caught===0) toast('❌ لا طُعم');
}

// ==================== MINING ====================
function renderMining(){
  const grid = document.getElementById('mineGrid');
  if(!mine) mine = {cells:Array(16).fill(null).map(()=>({ore:null,dug:false}))};
  let html = '';
  mine.cells.forEach((cell,i)=>{
    let cls = 'mine-cell';
    if(cell.dug) cls += ' empty';
    else if(cell.ore){
      const ore = ORES[cell.ore];
      if(ore.rarity==='أسطوري'||ore.rarity==='خرافي') cls += ' gem';
      else cls += ' ore';
    }
    const emoji = cell.dug ? '⬛' : (cell.ore ? ORES[cell.ore].emoji : '🟫');
    html += `<div class="${cls}" onclick="digCell(${i})">${emoji}</div>`;
  });
  grid.innerHTML = html;
  document.getElementById('mineDepth').textContent = `(العمق ${S.mineDepth})`;

  const og = document.getElementById('oreGrid');
  let oHtml = '';
  Object.entries(ORES).forEach(([k,o])=>{
    const q = S.inv[k]||0;
    oHtml += `<div class="inv-item"><span class="emoji">${o.emoji}</span><div class="name">${o.name}</div><div class="qty">${q}</div></div>`;
  });
  og.innerHTML = oHtml;
}
function mineDig(){
  if(!mine) mine = {cells:Array(16).fill(null).map(()=>({ore:null,dug:false}))};
  const empty = mine.cells.findIndex(c=>!c.dug && !c.ore);
  if(empty===-1){ toast('⛏️ انزل عمقاً'); return; }
  if(S.player.energy<2){ toast('⚡ طاقة قليلة'); return; }
  S.player.energy -= 2;
  const roll = Math.random();
  const depth = S.mineDepth;
  const oreList = Object.entries(ORES);
  const weights = oreList.map(([k,o])=>{
    if(o.rarity==='شائع') return 50;
    if(o.rarity==='غير شائع') return 25;
    if(o.rarity==='نادر') return 12 + depth*0.5;
    if(o.rarity==='أسطوري') return 5 + depth*0.3;
    return 1 + depth*0.2;
  });
  const total = weights.reduce((a,b)=>a+b,0);
  let r = roll*total;
  let oreKey = null;
  for(let i=0;i<oreList.length;i++){
    if(r < weights[i]){ oreKey = oreList[i][0]; break; }
    r -= weights[i];
  }
  if(oreKey) mine.cells[empty].ore = oreKey;
  else mine.cells[empty].dug = true;
  saveGame(false); renderMining(); renderHome();
}
function digCell(i){
  if(!mine) return;
  const cell = mine.cells[i];
  if(cell.dug) return;
  if(!cell.ore){ toast('🟫 لا شيء'); return; }
  const ore = ORES[cell.ore];
  S.inv[cell.ore] = (S.inv[cell.ore]||0)+1;
  S.stats.oreMined++;
  S.player.xp += Math.round(ore.price/5);
  questProgress('mine',1);
  checkLevel();
  if(!S.encyclopedia.ores.includes(cell.ore)) S.encyclopedia.ores.push(cell.ore);
  cell.dug = true;
  toast(`⛏️ ${ore.emoji} ${ore.name}!`);
  playSound('collect');
  saveGame(false); renderMining(); renderBag(); renderTop();
}
function descendMine(){
  if(S.player.energy<20){ toast('⚡ طاقة قليلة'); return; }
  S.player.energy -= 20;
  S.mineDepth++;
  if(S.mineDepth > S.maxMineDepth) S.maxMineDepth = S.mineDepth;
  mine = {cells:Array(16).fill(null).map(()=>({ore:null,dug:false}))};
  toast(`⬇️ العمق ${S.mineDepth}`);
  playSound('levelup');
  saveGame(false); renderMining(); renderHome();
}
function returnToSurface(){
  S.mineDepth = 1;
  mine = {cells:Array(16).fill(null).map(()=>({ore:null,dug:false}))};
  toast('⬆️ عدت للسطح');
  saveGame(false); renderMining();
}

// ==================== CASINO ====================
function renderCasino(){
  const tc = document.getElementById('ticketCount');
  if(tc) tc.textContent = S.player.tickets;
  const log = document.getElementById('casinoLog');
  if(!log) return;
  if(casinoHistory.length===0){
    log.textContent = 'لم تلعب بعد';
  } else {
    log.innerHTML = casinoHistory.slice(-5).reverse().map(h=>`<div>${h}</div>`).join('');
  }
}
function useTicket(){
  if(S.player.tickets<=0){ toast('❌ لا تذاكر!'); return false; }
  S.player.tickets--;
  S.stats.casinoPlays++;
  return true;
}
function playSlots(){
  if(!useTicket()) return;
  const symbols = ['🍒','🍋','🔔','💎','7️⃣','⭐'];
  const r1 = symbols[Math.floor(Math.random()*symbols.length)];
  const r2 = symbols[Math.floor(Math.random()*symbols.length)];
  const r3 = symbols[Math.floor(Math.random()*symbols.length)];
  let prize = 0;
  if(r1===r2 && r2===r3){
    prize = r1==='💎'?5000:r1==='7️⃣'?3000:r1==='⭐'?2000:r1==='🔔'?1000:500;
  } else if(r1===r2 || r2===r3 || r1===r3){
    prize = 100;
  }
  if(prize>0){
    S.player.money += prize;
    S.stats.earned += prize;
    S.stats.casinoWon++;
    casinoHistory.push(`🎰 ${r1}${r2}${r3} → 💰 +${money(prize)}`);
    toast(`🎰 ${r1}${r2}${r3} +${money(prize)}!`);
    playSound('win');
  } else {
    S.stats.casinoLost++;
    casinoHistory.push(`🎰 ${r1}${r2}${r3} → خسارة`);
    toast(`🎰 ${r1}${r2}${r3} خسارة`);
  }
  saveGame(false); renderCasino(); renderTop(); renderHome();
}
function playDice(){
  if(!useTicket()) return;
  const roll = Math.floor(Math.random()*6)+1;
  const guess = Math.floor(Math.random()*6)+1;
  const win = roll === guess || roll === 7-guess;
  if(win){
    const prize = 200;
    S.player.money += prize;
    S.stats.earned += prize;
    S.stats.casinoWon++;
    casinoHistory.push(`🎲 ${roll} (خمّنت ${guess}) → +${money(prize)}`);
    toast(`🎲 +${money(prize)}!`);
    playSound('win');
  } else {
    S.stats.casinoLost++;
    casinoHistory.push(`🎲 ${roll} (خمّنت ${guess}) → خسارة`);
    toast(`🎲 خسارة`);
  }
  saveGame(false); renderCasino(); renderTop(); renderHome();
}
function playCards(){
  if(!useTicket()) return;
  const yourCard = Math.floor(Math.random()*13)+1;
  const dealerCard = Math.floor(Math.random()*13)+1;
  if(yourCard > dealerCard){
    const prize = 300;
    S.player.money += prize;
    S.stats.earned += prize;
    S.stats.casinoWon++;
    casinoHistory.push(`🃏 ${yourCard} vs ${dealerCard} → +${money(prize)}`);
    toast(`🃏 +${money(prize)}!`);
    playSound('win');
  } else if(yourCard < dealerCard){
    S.stats.casinoLost++;
    casinoHistory.push(`🃏 ${yourCard} vs ${dealerCard} → خسارة`);
    toast(`🃏 خسارة`);
  } else {
    casinoHistory.push(`🃏 ${yourCard} vs ${dealerCard} → تعادل`);
    toast(`🃏 تعادل — أعد التذكرة`);
    S.player.tickets++;
  }
  saveGame(false); renderCasino(); renderTop(); renderHome();
}
function playRoulette(){
  if(!useTicket()) return;
  const num = Math.floor(Math.random()*37);
  const color = num===0?'أخضر':(num%2===0?'أسود':'أحمر');
  const guess = Math.random()<0.5?'أحمر':'أسود';
  if(color === guess){
    const prize = 400;
    S.player.money += prize;
    S.stats.earned += prize;
    S.stats.casinoWon++;
    casinoHistory.push(`🎡 ${num} ${color} → +${money(prize)}`);
    toast(`🎡 +${money(prize)}!`);
    playSound('win');
  } else if(color === 'أخضر'){
    const prize = 2000;
    S.player.money += prize;
    S.stats.earned += prize;
    S.stats.casinoWon++;
    casinoHistory.push(`🎡 ${num} أخضر! → +${money(prize)}`);
    toast(`🎡 جاكبوت! +${money(prize)}`);
    playSound('legendary');
  } else {
    S.stats.casinoLost++;
    casinoHistory.push(`🎡 ${num} ${color} → خسارة`);
    toast(`🎡 خسارة`);
  }
  saveGame(false); renderCasino(); renderTop(); renderHome();
}

// ==================== TREASURE ====================
function renderTreasure(){
  const grid = document.getElementById('treasureGrid');
  let html = '';
  TREASURES.forEach(t=>{
    html += `<div class="treasure-box" onclick="openTreasure('${t.id}')">
      <span class="tb-icon">${t.emoji}</span>
      <div class="tb-name">${t.name}</div>
      <div style="font-size:.65em;color:var(--text2);margin:3px 0">${t.rarity}</div>
      <div class="tb-price">💰 ${money(t.price)}</div>
    </div>`;
  });
  grid.innerHTML = html;

  const log = document.getElementById('treasureLog');
  if(!log) return;
  if(S.treasureLog.length===0){
    log.textContent = 'لم تفتح أي صندوق';
  } else {
    log.innerHTML = S.treasureLog.slice(-5).reverse().map(h=>`<div>${h}</div>`).join('');
  }
}
function openTreasure(id){
  const t = TREASURES.find(x=>x.id===id);
  if(!t) return;
  if(S.player.money < t.price){ toast('❌ رصيد ناقص'); return; }
  S.player.money -= t.price;
  S.stats.boxesOpened++;
  const totalW = t.drops.reduce((s,d)=>s+d.weight,0);
  let r = Math.random()*totalW;
  let drop = t.drops[0];
  for(const d of t.drops){
    if(r < d.weight){ drop = d; break; }
    r -= d.weight;
  }
  const qty = Math.floor(Math.random()*(drop.max-drop.min+1)) + drop.min;
  let resultMsg = '';
  if(drop.item === 'money'){
    S.player.money += qty;
    S.stats.earned += qty;
    resultMsg = `💰 +${money(qty)} جنيه`;
  } else {
    S.inv[drop.item] = (S.inv[drop.item]||0) + qty;
    const itemInfo = CROPS[drop.item]||PRODUCTS[drop.item]||ORES[drop.item]||HERBS[drop.item]||FISH[drop.item]||{name:drop.item,emoji:'📦'};
    resultMsg = `${itemInfo.emoji} ${itemInfo.name} ×${qty}`;
  }
  S.treasureLog.push(`${t.emoji} ${t.name} → ${resultMsg}`);
  toast(`🎁 ${resultMsg}`);
  playSound('legendary');
  saveGame(false); renderTreasure(); renderBag(); renderTop(); renderHome();
}

// ==================== CASTLE ====================
function renderCastle(){
  const c = document.getElementById('castleContent');
  const lvl = S.player.castle;
  if(lvl === 0){
    c.innerHTML = `<div class="castle-display">
      <div class="castle-emoji">🏚️</div>
      <div class="castle-level">لا تملك قلعة</div>
      <p style="color:var(--text2);font-size:.85em;margin:12px 0">ابنِ قلعتك لحماية مزرعتك وزيادة قوتك!</p>
      <button class="btn btn-green" onclick="upgradeCastle()" ${S.player.money<CASTLE_COSTS[1]?'disabled':''}>🏰 ابنِ (💰 ${money(CASTLE_COSTS[1])})</button>
    </div>`;
    return;
  }
  const power = lvl*50 + S.player.level*5;
  const nextCost = CASTLE_COSTS[lvl+1];
  const castleEmojis = ['🏚️','🏠','🏡','🏘️','🏰','🏯'];
  c.innerHTML = `<div class="castle-display">
    <div class="castle-emoji">${castleEmojis[lvl]||'🏯'}</div>
    <div class="castle-level">قلعة المستوى ${lvl}</div>
    <div class="castle-power">⚔️ القوة: ${power}</div>
    <div class="castle-power" style="margin-top:6px">🎁 مكافأة يومية: +${money(lvl*200)}</div>
    ${nextCost?`<button class="btn btn-purple" style="margin-top:14px" onclick="upgradeCastle()" ${S.player.money<nextCost?'disabled':''}>🔨 ترقية (💰 ${money(nextCost)})</button>`:'<p style="color:var(--neon-gold);margin-top:14px">👑 أقصى مستوى!</p>'}
  </div>`;
}
function upgradeCastle(){
  const lvl = S.player.castle;
  const cost = CASTLE_COSTS[lvl+1];
  if(!cost){ toast('🏰 أقصى مستوى'); return; }
  if(S.player.money < cost){ toast('❌ رصيد ناقص'); return; }
  S.player.money -= cost;
  S.player.castle++;
  S.stats.spent += cost;
  toast(`🏰 القلعة مستوى ${S.player.castle}!`);
  playSound('levelup');
  saveGame(false); renderCastle(); renderTop(); renderHome();
}
function pvpBattle(){
  if(S.player.energy < 15){ toast('⚡ طاقة قليلة'); return; }
  if(S.player.castle === 0){ toast('🏰 ابنِ قلعة أولاً'); return; }
  S.player.energy -= 15;
  const myPower = S.player.castle*50 + S.player.level*5 + S.pets.length*20;
  const enemyNames = ['مزارع مجهول','فارس الظلام','لورد المحاصيل','تنين المزرعة','عدو غامض'];
  const enemyPower = 100 + Math.floor(Math.random()*500) + S.player.level*10;
  const enemy = enemyNames[Math.floor(Math.random()*enemyNames.length)];
  const log = document.getElementById('pvpLog');

  if(myPower > enemyPower){
    const reward = 200 + Math.floor(Math.random()*800);
    S.player.money += reward;
    S.player.reputation += 3;
    S.stats.earned += reward;
    S.stats.pvpWins++;
    log.innerHTML = `<div style="color:var(--neon-green);font-weight:800">✅ هزمت ${enemy}! +💰${money(reward)} +3 سمعة</div>`;
    toast(`⚔️ فزت على ${enemy}!`);
    playSound('win');
  } else {
    const loss = Math.min(S.player.money, 100);
    S.player.money -= loss;
    S.stats.pvpLosses++;
    log.innerHTML = `<div style="color:var(--neon-red);font-weight:800">❌ خسرت أمام ${enemy}! -💰${money(loss)}</div>`;
    toast(`💔 خسرت أمام ${enemy}`);
    playSound('lose');
  }
  saveGame(false); renderTop(); renderHome();
}

// ==================== VILLAGE ====================
function renderVillage(){
  const grid = document.getElementById('villageGrid');
  let html = '';
  VILLAGERS.forEach(v=>{
    const vd = S.villagers[v.id];
    const friendship = vd?.friendship||0;
    html += `<div class="villager-card">
      <span class="v-emoji">${v.emoji}</span>
      <div class="v-name">${v.name}</div>
      <div class="v-status">صداقة ${friendship}/100</div>
      <div class="happiness-bar"><div class="happiness-fill" style="width:${friendship}%"></div></div>
      <button class="btn btn-cyan btn-sm" style="margin-top:6px" onclick="visitVillager('${v.id}')">🤝 زيارة</button>
    </div>`;
  });
  grid.innerHTML = html;

  const gl = document.getElementById('giftList');
  let gHtml = '';
  VILLAGERS.forEach(v=>{
    gHtml += `<div class="quest-item">
      <span class="quest-icon">${v.emoji}</span>
      <div class="quest-info">
        <div class="qtitle">${v.name}</div>
        <div class="qdesc">يحب: ${v.likes.join(', ')}</div>
      </div>
      <button class="btn btn-purple btn-sm" onclick="giveGift('${v.id}')">🎁</button>
    </div>`;
  });
  gl.innerHTML = gHtml;
}
function visitVillager(id){
  const v = VILLAGERS.find(x=>x.id===id);
  const vd = S.villagers[id];
  vd.friendship = Math.min(100, (vd.friendship||0)+5);
  if(Math.random()<0.4){
    const likes = v.likes[Math.floor(Math.random()*v.likes.length)];
    const qty = 1+Math.floor(Math.random()*3);
    vd.requests = vd.requests || [];
    vd.requests.push({item:likes,qty,reward:qty*30});
    toast(`📋 ${v.name} يطلب ${qty}× ${likes}`);
  } else {
    toast(`🤝 زرت ${v.name}`);
  }
  saveGame(false); renderVillage();
}
function giveGift(id){
  const v = VILLAGERS.find(x=>x.id===id);
  for(const item of v.likes){
    if((S.inv[item]||0)>0){
      S.inv[item]--;
      S.villagers[id].friendship = Math.min(100,(S.villagers[id].friendship||0)+15);
      S.stats.giftsGiven++;
      toast(`🎁 أهديت ${v.name} ${item}`);
      saveGame(false); renderVillage(); renderBag();
      return;
    }
  }
  toast('❌ لا تملك شيئاً يحبه');
}
function fulfillRequest(vid, ri){
  const v = VILLAGERS.find(x=>x.id===vid);
  const vd = S.villagers[vid];
  const req = vd.requests[ri];
  if((S.inv[req.item]||0) < req.qty){ toast('❌ كمية ناقصة'); return; }
  S.inv[req.item] -= req.qty;
  S.player.money += req.reward;
  vd.friendship = Math.min(100,(vd.friendship||0)+10);
  vd.requests.splice(ri,1);
  toast(`✅ +${req.reward}`);
  playSound('coin');
  saveGame(false); renderVillage(); renderTop();
}

// ==================== TRADING ====================
function renderTrading(){
  const tl = document.getElementById('tradingList');
  const trades = [];
  const cropKeys = Object.keys(CROPS);
  for(let i=0;i<3;i++){
    const give = cropKeys[Math.floor(Math.random()*cropKeys.length)];
    const get = cropKeys[Math.floor(Math.random()*cropKeys.length)];
    if(give===get) continue;
    const ratio = 2 + Math.floor(Math.random()*3);
    trades.push({give,get,qtyGive:ratio,qtyGet:1});
  }
  let html = '';
  trades.forEach(t=>{
    const giveCrop = CROPS[t.give];
    const getCrop = CROPS[t.get];
    const have = (S.inv[t.give]||0) >= t.qtyGive;
    html += `<div class="sell-item">
      <span class="s-icon">${giveCrop.emoji} → ${getCrop.emoji}</span>
      <div style="flex:1;min-width:100px">
        <div style="font-weight:800;font-size:.82em">${t.qtyGive}× ${giveCrop.name} → ${t.qtyGet}× ${getCrop.name}</div>
      </div>
      <button class="btn btn-green btn-sm" onclick="doTrade('${t.give}','${t.get}',${t.qtyGive},${t.qtyGet})" ${!have?'disabled':''}>تبديل</button>
    </div>`;
  });
  tl.innerHTML = html || '<p style="color:var(--text2);text-align:center;padding:14px">لا عروض حالياً</p>';
}
function doTrade(give,get,qg,qp){
  if((S.inv[give]||0)<qg){ toast('❌ كمية ناقصة'); return; }
  S.inv[give] -= qg;
  S.inv[get] = (S.inv[get]||0)+qp;
  S.stats.trades++;
  toast(`💱 تم التبادل`);
  playSound('collect');
  saveGame(false); renderTrading(); renderBag();
}

// ==================== PETS ====================
function renderPets(){
  const grid = document.getElementById('petsGrid');
  let html = '';
  if(S.pets.length===0){
    html = '<p style="color:var(--text2);text-align:center;padding:20px;grid-column:1/-1">🐕 لا رفقاء بعد</p>';
  } else {
    S.pets.forEach((p)=>{
      const info = PETS[p.type];
      html += `<div class="pet-card">
        <span class="p-emoji">${info.emoji}</span>
        <div class="p-name">${info.name}</div>
        <div class="p-status">${info.bonus}</div>
      </div>`;
    });
  }
  grid.innerHTML = html;

  const bg = document.getElementById('buyPets');
  let bHtml = '';
  for(const [k,p] of Object.entries(PETS)){
    if(S.pets.some(x=>x.type===k)) continue;
    bHtml += `<div class="shop-item">
      <span class="item-icon">${p.emoji}</span>
      <div class="item-name">${p.name}</div>
      <div class="price">💰 ${money(p.price)}</div>
      <div class="stock" style="font-size:.58em">${p.bonus}</div>
      <button class="btn btn-pink btn-sm" onclick="buyPet('${k}')" ${S.player.money<p.price?'disabled':''}>تبني</button></div>`;
  }
  bg.innerHTML = bHtml || '<p style="color:var(--text2);text-align:center;padding:14px">لا رفقاء متاحين</p>';
}
function buyPet(type){
  const info = PETS[type];
  if(S.player.money<info.price){ toast('❌ رصيد ناقص'); return; }
  S.player.money -= info.price;
  S.pets.push({type,adoptedAt:Date.now()});
  toast(`🐾 تبنيّت ${info.name}!`);
  playSound('levelup');
  saveGame(false); renderPets(); renderTop();
}

// ==================== ENCYCLOPEDIA ====================
let currentEncTab = 'crops';
function renderEncyclopedia(){
  renderEncTab(currentEncTab);
}
function encTab(tab){
  currentEncTab = tab;
  renderEncTab(tab);
}
function renderEncTab(tab){
  const c = document.getElementById('encContent');
  let html = '';
  if(tab==='crops'){
    Object.entries(CROPS).forEach(([k,crop])=>{
      const found = S.encyclopedia.crops.includes(k);
      html += `<div class="enc-item${found?'':' locked'}">
        <span class="enc-emoji">${found?crop.emoji:'❓'}</span>
        <div class="enc-info">
          <div class="enc-name">${found?crop.name:'غير مكتشف'}</div>
          <div class="enc-desc">${found?`سعر: 💰${crop.sell} | وقت: ${crop.grow}s | XP: ${crop.xp}`:'اكتشفه لتعرفه'}</div>
        </div>
      </div>`;
    });
  } else if(tab==='animals'){
    Object.entries(ANIMALS).forEach(([k,a])=>{
      const found = S.encyclopedia.animals.includes(k);
      html += `<div class="enc-item${found?'':' locked'}">
        <span class="enc-emoji">${found?a.emoji:'❓'}</span>
        <div class="enc-info">
          <div class="enc-name">${found?a.name:'غير مكتشف'}</div>
          <div class="enc-desc">${found?`ينتج: ${PRODUCTS[a.prod]?.emoji} ${PRODUCTS[a.prod]?.name} | XP: ${a.xp}`:'اكتشفه لتعرفه'}</div>
        </div>
      </div>`;
    });
  } else if(tab==='fish'){
    Object.entries(FISH).forEach(([k,f])=>{
      const found = S.encyclopedia.fish.includes(k);
      html += `<div class="enc-item${found?'':' locked'}">
        <span class="enc-emoji">${found?f.emoji:'❓'}</span>
        <div class="enc-info">
          <div class="enc-name">${found?f.name:'غير مكتشف'}</div>
          <div class="enc-desc">${found?`سعر: 💰${f.price} | ندرة: ${f.rarity}`:'اصطده لتعرفه'}</div>
        </div>
      </div>`;
    });
  } else if(tab==='ores'){
    Object.entries(ORES).forEach(([k,o])=>{
      const found = S.encyclopedia.ores.includes(k);
      html += `<div class="enc-item${found?'':' locked'}">
        <span class="enc-emoji">${found?o.emoji:'❓'}</span>
        <div class="enc-info">
          <div class="enc-name">${found?o.name:'غير مكتشف'}</div>
          <div class="enc-desc">${found?`سعر: 💰${o.price} | ندرة: ${o.rarity}`:'استخرجه لتعرفه'}</div>
        </div>
      </div>`;
    });
  } else if(tab==='herbs'){
    Object.entries(HERBS).forEach(([k,h])=>{
      const found = S.encyclopedia.herbs.includes(k);
      html += `<div class="enc-item${found?'':' locked'}">
        <span class="enc-emoji">${found?h.emoji:'❓'}</span>
        <div class="enc-info">
          <div class="enc-name">${found?h.name:'غير مكتشف'}</div>
          <div class="enc-desc">${found?`سعر: 💰${h.price}`:'ابحث في الغابة'}</div>
        </div>
      </div>`;
    });
  } else if(tab==='monsters'){
    MONSTERS.forEach(m=>{
      const found = S.encyclopedia.monsters.includes(m.id);
      html += `<div class="enc-item${found?'':' locked'}">
        <span class="enc-emoji">${found?m.emoji:'❓'}</span>
        <div class="enc-info">
          <div class="enc-name">${found?m.name:'غير مكتشف'}</div>
          <div class="enc-desc">${found?`HP: ${m.hp} | ATK: ${m.atk} | 💰${m.reward}`:`يظهر في عمق ${m.minDepth}+`}</div>
        </div>
      </div>`;
    });
  } else if(tab==='crafted'){
    RECIPES.forEach(r=>{
      const found = S.encyclopedia.crafted.includes(r.id);
      html += `<div class="enc-item${found?'':' locked'}">
        <span class="enc-emoji">${found?r.emoji:'❓'}</span>
        <div class="enc-info">
          <div class="enc-name">${found?r.name:'غير مكتشف'}</div>
          <div class="enc-desc">${found?`سعر: 💰${r.sell}`:'اصنعه لتعرفه'}</div>
        </div>
      </div>`;
    });
  }
  c.innerHTML = html;
}

// ==================== QUESTS ====================
function renderQuests(){
  const ql = document.getElementById('questsList');
  let qHtml = '';
  DAILY_QUESTS.forEach(q=>{
    const d = S.quests[q.id]||{progress:0,done:false,claimed:false};
    const prog = Math.min(d.progress,q.target);
    const done = d.done||prog>=q.target;
    qHtml += `<div class="quest-item${done?' completed':''}">
      <span class="quest-icon">${q.icon}</span>
      <div class="quest-info">
        <div class="qtitle">${q.name}</div>
        <div class="qdesc">مكافأة: ${money(q.reward)}</div>
      </div>
      <div class="quest-progress">${prog}/${q.target}</div>
      ${done&&!d.claimed?`<button class="btn btn-gold btn-sm" onclick="claimQuest('${q.id}')">🎁</button>`:''}
      ${d.claimed?'<span style="color:var(--neon-green)">✅</span>':''}</div>`;
  });
  ql.innerHTML = qHtml;

  const sl = document.getElementById('storyQuests');
  let sHtml = '';
  STORY_QUESTS.forEach(q=>{
    const d = S.storyQuests[q.id]||{progress:0,done:false,claimed:false};
    const prog = Math.min(d.progress,q.target);
    const done = d.done||prog>=q.target;
    sHtml += `<div class="quest-item${done?' completed':''}">
      <span class="quest-icon">📜</span>
      <div class="quest-info">
        <div class="qtitle">${q.name}</div>
        <div class="qdesc">${q.desc} — 💰${money(q.reward)} + ${q.rep} سمعة</div>
      </div>
      <div class="quest-progress">${prog}/${q.target}</div>
      ${done&&!d.claimed?`<button class="btn btn-gold btn-sm" onclick="claimStoryQuest('${q.id}')">🎁</button>`:''}
      ${d.claimed?'<span style="color:var(--neon-green)">✅</span>':''}</div>`;
  });
  sl.innerHTML = sHtml;

  const vl = document.getElementById('villageRequests');
  let vHtml = '';
  let hasReq = false;
  VILLAGERS.forEach(v=>{
    const vd = S.villagers[v.id];
    if(vd && vd.requests && vd.requests.length>0){
      vd.requests.forEach((r,ri)=>{
        hasReq = true;
        vHtml += `<div class="quest-item">
          <span class="quest-icon">${v.emoji}</span>
          <div class="quest-info">
            <div class="qtitle">${v.name}</div>
            <div class="qdesc">يطلب: ${r.qty}× ${r.item}</div>
          </div>
          <button class="btn btn-green btn-sm" onclick="fulfillRequest('${v.id}',${ri})">تسليم</button></div>`;
      });
    }
  });
  if(!hasReq) vHtml = '<p style="color:var(--text2);text-align:center;padding:14px">لا طلبات — زُر القرية</p>';
  vl.innerHTML = vHtml;
}
function questProgress(type, amount){
  const q = DAILY_QUESTS.find(q=>q.type===type);
  if(q){
    const d = S.quests[q.id];
    if(d && !d.claimed){
      d.progress = (d.progress||0)+amount;
      if(d.progress>=q.target && !d.done){ d.done=true; toast(`✅ مهمة: ${q.name}`); }
    }
  }
  storyProgress(type, amount);
}
function storyProgress(type, amount){
  STORY_QUESTS.forEach(q=>{
    if(q.type===type){
      const d = S.storyQuests[q.id];
      if(d && !d.claimed){
        d.progress = (d.progress||0)+amount;
        if(d.progress>=q.target && !d.done){ d.done=true; toast(`📜 قصة: ${q.name}`); }
      }
    }
  });
}
function claimQuest(id){
  const q = DAILY_QUESTS.find(q=>q.id===id);
  const d = S.quests[id];
  if(!q||!d||d.claimed||(!d.done&&d.progress<q.target)) return;
  d.claimed = true;
  S.player.money += q.reward; S.stats.earned += q.reward;
  toast(`🎁 +${money(q.reward)}`);
  playSound('coin');
  saveGame(false); renderQuests(); renderTop(); renderHome();
}
function claimStoryQuest(id){
  const q = STORY_QUESTS.find(q=>q.id===id);
  const d = S.storyQuests[id];
  if(!q||!d||d.claimed||(!d.done&&d.progress<q.target)) return;
  d.claimed = true;
  S.player.money += q.reward;
  S.player.reputation += q.rep;
  S.stats.earned += q.reward;
  toast(`🎁 +${money(q.reward)} +${q.rep} سمعة`);
  playSound('levelup');
  saveGame(false); renderQuests(); renderTop(); renderHome();
}

// ==================== ACHIEVEMENTS ====================
function renderAchievements(){
  const grid = document.getElementById('achGrid');
  let html = '', unlocked = 0;
  ACHIEVEMENTS.forEach(a=>{
    const u = S.achievements[a.id]?.unlocked;
    if(u) unlocked++;
    html += `<div class="ach-item${u?'':' locked'}">
      <span class="ach-icon">${a.icon}</span>
      <div class="ach-name">${a.name}</div>
      <div class="ach-desc">${a.desc}</div>
      ${u?'<div style="color:var(--neon-green);margin-top:4px">✅</div>':'<div style="color:var(--text2);margin-top:4px">🔒</div>'}
    </div>`;
  });
  grid.innerHTML = html;
  document.getElementById('achCount').textContent = `(${unlocked}/${ACHIEVEMENTS.length})`;
}
function checkAchievements(){
  ACHIEVEMENTS.forEach(a=>{
    if(!S.achievements[a.id].unlocked && a.check(S)){
      S.achievements[a.id].unlocked = true;
      S.player.money += 100;
      toast(`🏆 إنجاز: ${a.name}! +100`);
      playSound('levelup');
    }
  });
}

// ==================== STATS ====================
function renderStats(){
  const list = document.getElementById('statsList');
  const p = S.player, st = S.stats;
  const rank = getCurrentRank(S);
  const data = [
    ['🏅 الرتبة', `${rank.emoji} ${rank.name}`],
    ['💰 الرصيد', money(p.money)],
    ['⭐ المستوى', p.level],
    ['📊 XP', Math.floor(p.xp)+' / '+(p.level*100)],
    ['🎯 السمعة', p.reputation],
    ['📅 اليوم', p.day],
    ['🍂 الموسم', SEASON_INFO[S.season].name],
    ['🌾 المزرعة', p.farm],
    ['🏠 المنزل', p.house],
    ['🏰 القلعة', p.castle],
    ['🐄 الحيوانات', S.animals.length],
    ['🐕 الرفقاء', S.pets.length],
    ['🌾 محاصيل محصودة', st.harvested],
    ['📦 منتجات مجموعة', st.collected],
    ['🎣 أسماك مصطادة', st.fishCaught],
    ['⛏️ معادن مستخرجة', st.oreMined],
    ['🌿 أعشاب مجموعة', st.herbsCollected],
    ['🧬 حيوانات مولودة', st.animalsBred],
    ['🐉 وحوش مهزومة', st.monstersDefeated],
    ['🧪 منتجات مصنوعة', st.crafted],
    ['🎰 مرات الكازينو', st.casinoPlays],
    ['✅ كازينو مربوح', st.casinoWon],
    ['❌ كازينو خاسر', st.casinoLost],
    ['🎁 صناديق مفتوحة', st.boxesOpened],
    ['⚔️ PvP انتصارات', st.pvpWins],
    ['💔 PvP خسائر', st.pvpLosses],
    ['💰 إجمالي مكتسب', money(st.earned)],
    ['💸 إجمالي مصروف', money(st.spent)],
    ['⛏️ أقصى عمق', S.maxMineDepth],
    ['📅 أيام اللعب', st.daysPlayed]
  ];
  list.innerHTML = data.map(([k,v])=>`<li><span>${k}</span><strong>${v}</strong></li>`).join('');
}

// ==================== EVENTS ====================
function renderEvents(){
  const c = document.getElementById('eventContainer');
  if(!c) return;
  const events = [];
  const season = SEASON_INFO[S.season];
  events.push({icon:season.name.split(' ')[0],title:season.name,desc:`نمو ×${season.bonus}`});
  const w = WEATHERS.find(w=>w.id===S.weather.id) || LEGENDARY_WEATHERS.find(w=>w.id===S.weather.id) || WEATHERS[0];
  const isLegendary = LEGENDARY_WEATHERS.some(lw=>lw.id===S.weather.id);
  if(w.id!=='sunny'&&w.id!=='cloudy'){
    events.push({icon:w.icon,title:w.name,desc:`تأثير ×${w.bonus}`,danger:['stormy','snowy','drought'].includes(w.id),legendary:isLegendary});
  }
  const ready = S.plots.filter(p=>p.status==='ready').length;
  if(ready>0) events.push({icon:'🌾',title:`${ready} جاهز`,desc:'احصدهم!'});
  const dry = S.plots.filter(p=>p.status==='growing'&&p.water<25).length;
  if(dry>0) events.push({icon:'🔴',title:`${dry} عطشان`,desc:'اسقهم!',danger:true});
  const petsBonus = S.pets.map(p=>PETS[p.type].emoji).join(' ');
  if(petsBonus) events.push({icon:'🐾',title:'رفقاؤك',desc:petsBonus});
  let html = '';
  events.forEach(ev=>{
    let cls = 'event-banner';
    if(ev.danger) cls += ' danger';
    if(ev.legendary) cls += ' legendary';
    html += `<div class="${cls}">
      <span class="event-icon">${ev.icon}</span>
      <div style="flex:1"><div class="etitle">${ev.title}</div><div class="edesc">${ev.desc}</div></div></div>`;
  });
  c.innerHTML = html;
}

// ==================== ACTIONS ====================
function sleepNight(){
  const p = S.player;
  if(p.energy>=100){ toast('⚡ طاقتك ممتلئة'); return; }
  p.day++;
  S.stats.daysPlayed++;
  p.energy = 100;
  p.hunger = Math.max(0,p.hunger-20);
  p.thirst = Math.max(0,p.thirst-25);
  p.happy = Math.min(100,p.happy+5);
  if(p.hunger<20||p.thirst<20) p.health = Math.max(0,p.health-8);
  else p.health = Math.min(100,p.health+4);
  // Castle daily bonus
  if(p.castle>0){
    const bonus = p.castle*200;
    p.money += bonus;
    toast(`🏰 مكافأة القلعة: +${money(bonus)}`);
  }
  for(const q of DAILY_QUESTS) S.quests[q.id] = {progress:0,done:false,claimed:false};
  toast(`😴 نمت — يوم ${p.day}`);
  playSound('levelup');
  saveGame(false); renderHome(); renderTop();
}
function eat(){
  const p = S.player;
  if((S.inv.food||0)<=0){ toast('❌ لا طعام'); return; }
  S.inv.food--; p.hunger = Math.min(100,p.hunger+40);
  p.happy = Math.min(100,p.happy+2);
  toast('🍲 أكلت');
  saveGame(false); renderHome(); renderBag();
}
function drink(){
  const p = S.player;
  if((S.inv.water||0)<=0){ toast('❌ لا مياه'); return; }
  S.inv.water--; p.thirst = Math.min(100,p.thirst+40);
  toast('💧 شربت');
  saveGame(false); renderHome(); renderBag();
}
function collectAll(){
  let n = 0;
  S.animals.forEach((a,idx)=>{if(a.status==='ready'){collectProduct(idx);n++;}});
  if(n===0) toast('📦 لا شيء جاهز'); else toast(`📦 جمعت ${n}`);
}
function upgradeHouse(){
  const p = S.player;
  const cost = HOUSECOST[p.house];
  if(!cost){ toast('🏠 أقصى مستوى'); return; }
  if(p.money<cost){ toast('❌ رصيد ناقص'); return; }
  p.money -= cost; p.house++; S.stats.spent += cost;
  toast(`🏠 المنزل مستوى ${p.house}`);
  playSound('levelup');
  saveGame(false); renderHome(); renderTop();
}
function upgradeFarm(){
  const p = S.player;
  const cost = FARMCOST[p.farm];
  if(!cost){ toast('🌾 أقصى مستوى'); return; }
  if(p.money<cost){ toast('❌ رصيد ناقص'); return; }
  p.money -= cost; p.farm++; S.stats.spent += cost;
  const maxP = FARMLEVELS[p.farm]||4;
  while(S.plots.length<maxP) S.plots.push(newPlot(S.plots.length));
  toast(`🌾 المزرعة مستوى ${p.farm} (${maxP} قطع)`);
  playSound('levelup');
  saveGame(false); renderFarm(); renderHome(); renderTop();
}

// ==================== LEVEL ====================
function checkLevel(){
  const p = S.player;
  while(p.xp >= p.level*100){
    p.xp -= p.level*100;
    p.level++;
    p.energy = Math.min(100,p.energy+20);
    p.happy = Math.min(100,p.happy+10);
    p.money += 50;
    toast(`🎉 مستوى ${p.level}! +50`);
    playSound('levelup');
  }
  // Update rank
  const newRank = getCurrentRank(S);
  if(S.player.rank !== newRank.id){
    S.player.rank = newRank.id;
    toast(`🏅 رتبة جديدة: ${newRank.emoji} ${newRank.name}!`, 'legendary');
  }
  renderTop();
  // Story quest money type
  const sq7 = S.storyQuests['sq7'];
  if(sq7 && !sq7.claimed){ sq7.progress = S.player.money; if(sq7.progress>=10000) sq7.done=true; }
  const sq8 = S.storyQuests['sq8'];
  if(sq8 && !sq8.claimed){ sq8.progress = S.player.level; if(sq8.progress>=25) sq8.done=true; }
}

// ==================== GAME LOOP ====================
let tick = 0;
function gameLoop(){
  if(!S) return;
  const now = Date.now();
  tick++;

  // Crops
  const processPlot = (plot) => {
    if(plot.status==='growing'){
      const w = WEATHERS.find(w=>w.id===S.weather.id) || LEGENDARY_WEATHERS.find(w=>w.id===S.weather.id) || WEATHERS[0];
      plot.water = Math.max(0, plot.water - (0.15+(w.dry||0)*0.1));
      if(!plot.pest && Math.random()<0.0008){ plot.pest=true; plot.quality=Math.max(10,plot.quality-15); }
      if(!plot.sick && plot.water<30 && Math.random()<0.002){ plot.sick=true; plot.quality=Math.max(10,plot.quality-20); }
      if(plot.water>50 && !plot.pest && !plot.sick) plot.quality = Math.min(100, plot.quality+0.05);
      if(plot.ready && now>=plot.ready && plot.status!=='ready') plot.status='ready';
    }
  };
  S.plots.forEach(processPlot);
  if(S.greenhouse.owned) S.greenhouse.plots.forEach(processPlot);

  // Animals
  S.animals.forEach(a=>{
    if(a.status==='waiting' && a.readyAt && now>=a.readyAt) a.status='ready';
    a.happy = Math.max(0,(a.happy||100)-0.02);
  });

  // Player decay
  if(now-lastStatDecay > 8000){
    lastStatDecay = now;
    const p = S.player;
    p.hunger = Math.max(0,p.hunger-0.6);
    p.thirst = Math.max(0,p.thirst-0.7);
    p.happy = Math.max(0,p.happy-0.15);
    if(p.hunger<15||p.thirst<15) p.health = Math.max(0,p.health-0.5);
    else p.health = Math.min(100,p.health+0.08);
    if(currentPage==='home') renderHome();
  }

  // Day change (3 min)
  if(now-lastDayCheck > 180000){
    lastDayCheck = now;
    S.player.day++;
    S.stats.daysPlayed++;
    toast(`📅 يوم ${S.player.day}`);
    for(const q of DAILY_QUESTS) S.quests[q.id] = {progress:0,done:false,claimed:false};
    S.seasonDay++;
    if(S.seasonDay>7){
      S.seasonDay=1;
      const idx = SEASONS.indexOf(S.season);
      S.season = SEASONS[(idx+1)%SEASONS.length];
      toast(`🍂 الموسم: ${SEASON_INFO[S.season].name}`);
    }
    if(currentPage==='home') renderHome();
  }

  // Weather change (with legendary chance)
  if(now >= (S.weather.until||0)){
    // Legendary chance
    let legendary = null;
    if(Math.random() < 0.06){
      const roll = Math.random();
      for(const lw of LEGENDARY_WEATHERS){
        if(roll < lw.chance * 10){
          legendary = lw;
          break;
        }
      }
    }
    if(legendary){
      S.weather.id = legendary.id;
      S.weather.legendary = legendary.effect;
      S.weather.until = now + 30000;
      toast(`${legendary.icon} ${legendary.name}!`, 'legendary');
      playSound('legendary');
    } else {
      const pool = WEATHERS.filter(w=>{
        if(S.season==='winter'&&w.id==='drought') return false;
        if(S.season==='summer'&&w.id==='snowy') return false;
        if(S.season!=='winter'&&w.id==='snowy') return false;
        if(S.season!=='spring'&&w.id==='rainbow') return false;
        return true;
      });
      const w = pool[Math.floor(Math.random()*pool.length)];
      S.weather.id = w.id;
      S.weather.legendary = null;
      S.weather.until = now+40000+Math.random()*50000;
      toast(`${w.icon} ${w.name}`);
    }
    if(currentPage==='home') renderHome();
  }

  // Market update
  if(now-lastMarketUpdate > 15000){
    lastMarketUpdate = now;
    for(const [k,c] of Object.entries(CROPS)){
      const cur = S.market[k]||c.sell;
      S.market[k] = Math.max(1, cur+Math.floor(Math.random()*5-2));
    }
    for(const [k,p] of Object.entries(PRODUCTS)){
      const cur = S.market[k]||p.sell;
      S.market[k] = Math.max(1, cur+Math.floor(Math.random()*3-1));
    }
  }

  // Render current page (throttled)
  if(tick%2===0){
    if(currentPage==='farm') renderFarm();
    else if(currentPage==='animals') renderAnimals();
    else if(currentPage==='greenhouse') renderGreenhouse();
    else if(currentPage==='home') renderTop();
  }

  // Achievements check every 10s
  if(tick%10===0) checkAchievements();
}

// ==================== BOOT ====================
window.addEventListener('DOMContentLoaded',()=>{
  const loadSteps = [
    'تحميل البيانات...',
    'بناء المزرعة...',
    'إحياء الحيوانات...',
    'ملء البحيرة...',
    'تفعيل المناجم...',
    'استدعاء الوحوش...',
    'فتح الكازينو...',
    'اكتمل!'
  ];
  let step = 0;
  const loadFill = document.getElementById('loadFill');
  const loadText = document.getElementById('loadText');
  const interval = setInterval(()=>{
    step++;
    loadFill.style.width = (step/loadSteps.length*100)+'%';
    loadText.textContent = loadSteps[Math.min(step,loadSteps.length-1)];
    if(step>=loadSteps.length){
      clearInterval(interval);
      S = loadGame();
      if(!S){ S = makeNewState(); saveGame(false); }
      setTimeout(()=>{
        document.getElementById('splash').classList.add('hide');
        renderTop();
        renderPage('home');
        loopTimer = setInterval(gameLoop, 1000);
        autoSaveTimer = setInterval(()=>saveGame(false), 20000);
      }, 400);
    }
  }, 200);

  window.addEventListener('beforeunload',()=>saveGame(false));
  document.addEventListener('visibilitychange',()=>{ if(document.hidden) saveGame(false); });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){
      closeModal();
      document.getElementById('sidebar').classList.remove('open');
      document.getElementById('drawer-overlay').classList.remove('open');
    }
  });
});
document.addEventListener('dblclick',e=>e.preventDefault(),{passive:false});