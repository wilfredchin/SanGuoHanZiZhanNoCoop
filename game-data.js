const MP3_TRACKS = {
  mainscreen: 'sounds/mainscreen.mp3',
  map:        'sounds/map.mp3',
  battle:     'sounds/battle.mp3',
  feast:      'sounds/feast.mp3',
  activity:   'sounds/activity.mp3',
  victory:    'sounds/victory.mp3',
};

const ALL_HEROES = [
  {key:'guanyu',     name:'关羽',  nameEn:'Guan Yu',      maxHp:7, desc:'Green Dragon Blade',
   zh:'关羽，字云长，河东解良人。桃园三结义中，他以义气闻名天下。手持青龙偃月刀，胯下赤兔马，在曹操百万大军中斩颜良、诛文丑，威震四方。他过五关、斩六将，千里寻兄，忠义之名流传千古。水淹七军，威震华夏，令曹操几欲迁都。刮骨疗毒时，与人对弈谈笑自若，面不改色。后关羽大意失荆州，败走麦城，壮烈殉国。后人尊称"武圣"，与孔子并列，庙宇遍布天下。',
   en:'Guan Yu, styled Yunchang, was the sworn brother of Liu Bei and the most celebrated warrior of the Three Kingdoms era. Wielding his Green Dragon Crescent Blade from horseback, he slew Yuan Shao\'s greatest generals in single combat, rode through five passes killing six enemy commanders to reunite with his brother, and flooded seven armies to shake all of China. When poison was scraped from his bone without anaesthetic, he played chess throughout without flinching. He is worshipped across East Asia as the God of War and brotherhood - a saint of loyalty.'},

  {key:'zhaoyun',    name:'赵云',  nameEn:'Zhao Yun',     maxHp:6, desc:'Dragon Spear',
   zh:'赵云，字子龙，常山真定人。他是刘备麾下最英勇的骑将，以"一身是胆"著称。长坂坡之战，曹操百万大军之中，赵云将幼主阿斗紧缚胸前，单枪匹马，七进七出，所向无敌，终将刘禅安全送还刘备。刘备感动之余，将阿斗掷于地上，道："为了这孺子，几损我一员大将！"赵云戎马一生，七十岁仍能上阵，是蜀汉最忠诚、最稳重的将领之一。',
   en:'Zhao Yun, styled Zilong, was Liu Bei\'s most daring cavalry commander - "a body made entirely of courage." At the Battle of Changban, with Cao Cao\'s vast army surrounding him on all sides, he strapped the infant heir Liu Shan to his chest and fought his way in and out seven times, emerging victorious. Liu Bei, moved to tears, flung the baby to the ground: "For this child, I nearly lost a great general!" Zhao Yun served loyally his entire life and was still riding to battle at seventy.'},

  {key:'zhangfei',   name:'张飞',  nameEn:'Zhang Fei',    maxHp:8, desc:'Serpent Spear',
   zh:'张飞，字翼德，涿郡人，刘备桃园结义的三弟。性格刚烈，嗓门如雷，勇猛无双。长坂坡之战，曹操百万大军前，张飞率二十余骑立于当阳桥头，横矛圆睁，大喝道："我乃燕人张翼德！谁敢与我决一死战！"声若霹雳，竟有曹将被吓得肝胆俱裂，落马而亡。他粗中有细，义释严颜，显露将帅之才。然而生性急躁，醉后鞭打士卒，最终为部下所害。',
   en:'Zhang Fei, styled Yide, was the thunderous youngest sworn brother of Liu Bei - ferocious in battle and notorious for his booming voice. At Changban Bridge, he faced Cao Cao\'s entire vanguard alone with twenty riders, planting his spear across the road and roaring: "I am Zhang Fei of Yan! Who dares fight me to the death!" His voice alone reportedly frightened one enemy general to his death. Beneath the fury was a cunning mind - his release of the captured general Yan Yan won him the whole of Yi Province without another battle.'},

  {key:'huangzhong', name:'黄忠',  nameEn:'Huang Zhong',  maxHp:6, desc:'Master Archer',
   zh:'黄忠，字汉升，南阳人。他是蜀汉的老将，年逾六旬仍英勇善战，弓法出神入化，百步穿杨。定军山之战，黄忠亲率精兵，冒着箭矢冲上山顶，斩杀曹魏名将夏侯渊，此役奠定刘备夺取汉中的基础。他以花甲之年跻身"五虎将"之列，证明英雄不论老幼。《三国志》称其"勇毅冠三军"。',
   en:'Huang Zhong, styled Hansheng, was the veteran archer of Shu Han - past sixty years old yet still unmatched with a bow, capable of hitting targets at a hundred paces. At the Battle of Mount Dingjun, he led a charge up the mountain under fire and personally killed Xiahou Yuan, one of Cao Cao\'s finest commanders, securing Liu Bei\'s conquest of Hanzhong. Named one of the Five Tiger Generals despite his age, he proved that courage knows no years.'},

  {key:'machao',     name:'马超',  nameEn:'Ma Chao',      maxHp:7, desc:'Lightning Spear',
   zh:'马超，字孟起，扶风茂陵人，西凉名将马腾之子。英勇无敌，号称"锦马超"，面若冠玉，眼若流星，威风凛凛。他曾率西凉铁骑大破曹操，杀得曹操割须弃袍，仓皇而逃。后归顺刘备，成为五虎将之一。《三国志》评其"雄烈过人，一世之杰"。曹操见之感叹："马儿不死，吾无葬地也！"',
   en:'Ma Chao, styled Mengqi, was the flamboyant warlord of the northwest - son of the great general Ma Teng, known as "Splendid Ma Chao" for his striking appearance. Leading the iron cavalry of Liang Province, he drove Cao Cao into such panicked flight that Cao Cao cut off his own beard and abandoned his royal robes to escape being recognised. After joining Liu Bei he became one of the Five Tiger Generals. Cao Cao himself said: "If Ma Chao does not die, I will have nowhere to be buried."'},

  {key:'liubei',     name:'刘备',  nameEn:'Liu Bei',      maxHp:6, desc:'Twin Swords',
   zh:'刘备，字玄德，汉景帝之后，中山靖王刘胜之后裔。出身贫寒，以织席贩履为生，却心怀天下。桃园三结义后，他历经坎坷，三顾茅庐请出诸葛亮，终建蜀汉政权，与曹魏、东吴三分天下。他以仁义著称，所到之处百姓归心。曹操曾评价："天下英雄，唯使君与操耳。"临终托孤，泣曰："君才十倍曹丕，必能定国，嗣子可辅则辅之，不可辅则取而代之。"',
   en:'Liu Bei, styled Xuande, was a distant descendant of the Han imperial family who began his life weaving sandals to survive. Through sheer force of will, brotherhood, and reputation for benevolence, he gathered followers across three decades of hardship. He visited Zhuge Liang three times in humility before the great strategist agreed to join him, then built Shu Han into one of three powers of the realm. Cao Cao, his great rival, once told him over wine: "The only heroes in this world are you and I." On his deathbed, he wept as he charged Zhuge Liang: care for my son - or replace him.'},

  {key:'zhugeliang', name:'诸葛亮',nameEn:'Zhuge Liang',  maxHp:5, desc:'Wind Fan Strategist',
   zh:'诸葛亮，字孔明，号卧龙，琅琊阳都人。刘备三顾茅庐，他以《隆中对》提出三分天下之策，自此辅佐刘备，鞠躬尽瘁。赤壁之战前，他舌战群儒，促成孙刘联盟；草船借箭，令周瑜自叹不如；七擒孟获，以德服人，永定南中。北伐时，以空城计令司马懿退兵。他发明木牛流马，革新连弩，出将入相，文武双全。"出师未捷身先死，长使英雄泪满襟。"',
   en:'Zhuge Liang, styled Kongming and called the Sleeping Dragon, was the supreme strategist of his age. When Liu Bei visited three times in the snow, he emerged from retirement with a complete vision for the realm. He forged the alliance that destroyed Cao Cao at Red Cliff, borrowed a hundred thousand arrows from the enemy\'s own bows in a single foggy night, and pacified the south by releasing its king seven times rather than forcing submission. As regent of Shu Han he invented new siege engines and supply wagons, and died in the field still campaigning. Du Fu wrote of him: "The campaign unfinished, the man gone first - this makes the tears of heroes fall forever."'},

  {key:'jiangwei',   name:'姜维',  nameEn:'Jiang Wei',    maxHp:7, desc:'Teal Dragon Spear',
   zh:'姜维，字伯约，天水冀县人。原为曹魏将领，后被诸葛亮识才，归降蜀汉，成为诸葛亮最得意的弟子，被誉为"幼麟"。诸葛亮去世后，姜维独力支撑蜀汉，先后九次北伐，以一隅之地抗衡强魏，虽屡败屡战，忠心不改。蜀汉灭亡后，他仍图谋复国，最终事败被杀，以身殉国。史称"姜维继诸葛亮之志，以弱击强，壮志未酬"。',
   en:'Jiang Wei, styled Boyue and called the Young Qilin, began as a Wei officer before Zhuge Liang recognised his genius and won him over to Shu Han. He became Zhuge Liang\'s most devoted student and, after his master\'s death, the sole pillar holding Shu Han upright. He launched nine northern expeditions against the far stronger Wei, fighting on against all odds out of sheer loyalty to a dying cause. Even after Shu Han fell, he plotted to restore it from within the enemy\'s court - and died trying.'},

  {key:'weiyan',     name:'魏延',  nameEn:'Wei Yan',      maxHp:8, desc:'Dark Flame Dao',
   zh:'魏延，字文长，义阳人。蜀汉最勇猛的先锋大将之一，武艺高强，胆略过人。他镇守汉中十年，令魏军不敢轻进。北伐时屡献奇谋，曾提出"子午谷奇谋"——率五千精兵出子午谷，直捣长安，奈何诸葛亮认为风险太大而未采纳。他性情孤傲，与杨仪不和，诸葛亮死后，两人内讧，魏延兵败被杀。后世评价不一，有人认为他是蜀汉最被埋没的将才。',
   en:'Wei Yan, styled Wenchang, was the fiercest vanguard general of Shu Han - a warrior of reckless courage who guarded Hanzhong for a decade and kept Wei\'s armies at bay by sheer force of personality. He repeatedly proposed bold strikes that Zhuge Liang deemed too risky, most famously the Ziwu Valley gambit - a surprise march of five thousand men to take Chang\'an in a single lightning strike. History still debates whether Zhuge Liang was right to refuse. After his master\'s death, a feud with the official Yang Yi turned fatal, and Wei Yan died in a quarrel that may have cost Shu Han its last great general.'},
];

const CHAPTER_ART = {
  'c1': `<img src="sprites/c1_Peach_Garden_Oath.webp" style="width:100%;max-width:800px;display:block;border-radius:8px" alt="c1">`,
  'c2': `<img src="sprites/c2_Chain_Stratagem.webp" style="width:100%;max-width:800px;display:block;border-radius:8px" alt="c2">`,
  'c3': `<img src="sprites/c3_Three_Visits.webp" style="width:100%;max-width:800px;display:block;border-radius:8px" alt="c3">`,
  'c4': `<img src="sprites/c4_Straw_Boat_Arrows.webp" style="width:100%;max-width:800px;display:block;border-radius:8px" alt="c4">`,
  'c5': `<img src="sprites/c5_Red_Cliff_Fire.webp" style="width:100%;max-width:800px;display:block;border-radius:8px" alt="c5">`,
  'c6': `<img src="sprites/c6_Five_Passes_Six_Generals.webp" style="width:100%;max-width:800px;display:block;border-radius:8px" alt="c6">`,
  'c7': `<img src="sprites/c7_Battle_of_Changban.webp" style="width:100%;max-width:800px;display:block;border-radius:8px" alt="c7">`,
  'c8': `<img src="sprites/c8_Zhao_Yun_Rescues.webp" style="width:100%;max-width:800px;display:block;border-radius:8px" alt="c8">`,
  'c9': `<img src="sprites/c9_Scraping_the_Bone.webp" style="width:100%;max-width:800px;display:block;border-radius:8px" alt="c9">`,
  'c10': `<img src="sprites/c10_Flooding_Seven_Armies.webp" style="width:100%;max-width:800px;display:block;border-radius:8px" alt="c10">`,
  'c11': `<img src="sprites/c11_Seven_Captures.webp" style="width:100%;max-width:800px;display:block;border-radius:8px" alt="c11">`,
  'c13': `<img src="sprites/c13_Memorial.webp" style="width:100%;max-width:800px;display:block;border-radius:8px" alt="c13">`,
  'c14': `<img src="sprites/c14_Empty_City.webp" style="width:100%;max-width:800px;display:block;border-radius:8px" alt="c14">`,
  'c15': `<img src="sprites/c15_Sima_Prevails.webp" style="width:100%;max-width:800px;display:block;border-radius:8px" alt="c15">`,
};

const STORY_CHAPTERS = [
  {
    id: 'c1', unlockAt: 1, illus: '🍑',
    title: '桃园三结义', titleEn: 'The Oath of the Peach Garden',
    zh: '东汉末年，天下大乱，黄巾贼四起。涿郡城外，刘备在桃园中偶遇张飞，又结识关羽，三人志同道合，对天起誓，不求同年同月同日生，但求同年同月同日死，兄弟齐心，共扶汉室。自此，刘关张三结义的故事流传千古，成为华夏文化中忠义的最高象征。',
    en: 'In the final years of the Han dynasty, three strangers met in a peach garden outside Zhuo County. Liu Bei, Guan Yu, and Zhang Fei - a minor nobleman, a fugitive warrior, and a butcher\'s son - swore brotherhood before Heaven. "We do not ask to be born on the same day; we ask only to die on the same day." Their oath became the most celebrated symbol of loyalty and brotherhood in all of Chinese culture.'
  },
  {
    id: 'c2', unlockAt: 4, illus: '💃',
    title: '连环计·美人计', titleEn: 'The Chain Stratagem and the Beauty Trap',
    zh: '司徒王允痛恨董卓专权，却苦无良策。他以义女貂蝉为棋，设下连环计：先将貂蝉许配给吕布，又将她献给董卓为妾。貂蝉在两人之间周旋，暗中挑拨，令吕布对董卓嫉恨入骨。一日，吕布趁董卓不在，私会貂蝉于凤仪亭，被董卓撞见。董卓大怒，抄起方天画戟向吕布掷去。吕布夺路而逃，满心怨恨。王允随即游说吕布，以大义之名，令吕布手刃了义父董卓，一举铲除了汉末最大的奸臣。',
    en: 'Minister Wang Yun burned to destroy Dong Zhuo but lacked a weapon - until he looked at his adopted daughter Diao Chan. He promised her first to Lu Bu, then gifted her to Dong Zhuo. Moving between the two men with grace and courage, Diao Chan stoked Lu Bu\'s jealousy until it became murderous rage. When Dong Zhuo caught Lu Bu with Diao Chan at the Phoenix Pavilion and hurled his halberd at him, Lu Bu fled in fury. Wang Yun seized the moment - and Lu Bu, persuaded that righteousness demanded it, killed the man he called father. The most feared tyrant of the age fell without a battle.'
  },
  {
    id: 'c3', unlockAt: 8, illus: '🛖',
    title: '三顾茅庐', titleEn: 'Three Visits to the Thatched Cottage',
    zh: '刘备听闻卧龙诸葛亮之名，三次亲赴隆中茅庐相请。前两次皆不得相见，第三次方见到诸葛亮。诸葛亮为刘备分析天下大势，提出"三分天下"的战略构想，即隆中对。刘备三顾茅庐的诚意感动了诸葛亮，自此"鱼水之情"成为君臣典范。',
    en: 'Liu Bei had heard of the genius recluse Zhuge Liang, known as the Sleeping Dragon. He visited his thatched cottage three times - twice turned away. On the third visit, Zhuge Liang received him and laid out his complete vision for dividing the realm into three powers and restoring the Han. Liu Bei\'s sincerity moved the great strategist from his retirement, beginning one of history\'s most celebrated partnerships between ruler and advisor.'
  },
  {
    id: 'c4', unlockAt: 12, illus: '🏹',
    title: '草船借箭', titleEn: 'Borrowing Arrows with Straw Boats',
    zh: '赤壁之战前，周瑜嫉妒诸葛亮的才华，命他三天之内造出十万支箭，否则军法处置。诸葛亮胸有成竹，向鲁肃借来二十艘战船，船上扎满草人。趁着大雾漫江，他率船队驶近曹操水寨，擂鼓呐喊，曹军以为敌袭，乱箭齐发。待雾散船回，草人身上已插满箭矢，足有十余万支。诸葛亮笑道："亮谢丞相赐箭！"',
    en: 'Before Red Cliff, Zhou Yu - jealous of Zhuge Liang\'s genius - ordered him to produce 100,000 arrows in three days, on pain of death. Zhuge Liang borrowed twenty boats, filled them with straw soldiers, and waited for a thick river fog. He sailed the fleet close to Cao Cao\'s camp, beating drums and shouting. Cao Cao\'s archers fired blindly into the mist. When the fog lifted, every straw figure bristled with arrows - more than enough. Zhuge Liang smiled: "I thank the Prime Minister for the generous gift of arrows!"'
  },
  {
    id: 'c5', unlockAt: 16, illus: '🔥',
    title: '火烧赤壁', titleEn: 'The Fire at Red Cliff',
    zh: '建安十三年，曹操率大军八十万南下，势要一统天下。孙权与刘备结成联盟，以周瑜为主帅迎战。黄盖诈降，火烧连船，大火借风势漫延，曹操水军顷刻覆灭。赤壁之战奠定了三国鼎立的基础，是中国历史上最著名的以少胜多的战役之一。',
    en: 'In 208 AD, Cao Cao marched south with an army said to number 800,000, certain that the realm would fall to him. Sun Quan and Liu Bei formed an unlikely alliance. Huang Gai pretended to defect, sailing fire-ships into the chained-together fleet. The flames spread in the winter wind and destroyed the great army in a single night. Red Cliff made the Three Kingdoms inevitable - no one power could now dominate the other two.'
  },
  {
    id: 'c6', unlockAt: 20, illus: '🚪',
    title: '过五关斩六将', titleEn: 'Five Passes, Six Generals',
    zh: '关羽在曹操处得知刘备下落后，毅然辞别，千里寻兄。然而曹操不发放行文书，关羽一路斩关夺隘，连斩曹营六员大将，过五道关卡，一路向北，历尽艰险，终于与刘备重聚。此故事成为忠义精神的永恒象征。',
    en: 'When Guan Yu learned that Liu Bei was still alive, he immediately left Cao Cao\'s service - refusing all gifts and treasure, taking only Liu Bei\'s two wives and a single horse. But Cao Cao would not issue travel papers. Guan Yu cut his way through five passes and six generals, fighting every obstacle between himself and his sworn brother. He arrived with nothing but his sword and his loyalty intact.'
  },
  {
    id: 'c7', unlockAt: 24, illus: '⚔️',
    title: '长坂之战', titleEn: 'The Battle of Changban',
    zh: '建安十三年，曹操率轻骑五千，昼夜兼程，追上刘备于当阳长坂坡。刘备军队大乱，百姓哭声震天。张飞率二十余骑断后，立马横矛于当阳桥头，圆睁环眼，大喝道："我乃燕人张翼德！谁敢与我决一死战！"声若雷霆，震得对岸曹军不敢轻进，竟有将领被这一声大喝吓得肝胆俱裂，落马而亡。赵云于乱军中救出阿斗。刘备凭借这段时间，得以逃脱曹操的追击，最终与诸葛亮汇合，转危为安。',
    en: 'Cao Cao\'s elite cavalry caught Liu Bei\'s forces at Changban, scattering his army into terrified flight. Zhang Fei led twenty riders to the Dangyang Bridge, planting his spear across the road. He glared across the water and roared: "I am Zhang Fei of Yan! Who dares fight me to the death!" His voice was like thunder - the sound alone reportedly killed one of Cao Cao\'s generals outright, and the vanguard dared not cross. That bought enough time: Zhao Yun rescued the infant heir, Liu Bei escaped, and the scattered army regrouped to fight another day. Changban became one of the most celebrated last stands in Chinese history.'
  },
  {
    id: 'c8', unlockAt: 28, illus: '🐉',
    title: '赵云救主', titleEn: 'Zhao Yun Rescues His Lord',
    zh: '长坂坡之战，曹操大军追上刘备，士兵四散奔逃。乱军之中，赵云发现刘备之妻糜夫人受伤，幼主阿斗（刘禅）尚在襁褓。糜夫人将阿斗托付给赵云后，跳入枯井自尽，以免拖累赵云。赵云将阿斗紧缚胸前，单枪匹马，在曹军八十余万大军中七进七出，所向披靡，血战出重围，将幼主安然送至刘备身旁。刘备感动之余，将阿斗掷于地上，道："为了这孺子，几损我一员大将！"赵云由此名震天下。',
    en: 'At the Battle of Changban, Cao Cao\'s vast army overran Liu Bei\'s fleeing people. In the chaos, Zhao Yun found Liu Bei\'s wife Lady Mi wounded, cradling the infant Liu Shan. She entrusted the baby to Zhao Yun, then leapt into a dry well rather than slow him down. Zhao Yun strapped the infant to his chest and fought his way through the entire Cao army - in and out seven times - emerging bloodied but victorious. When he delivered the child safely to Liu Bei, Liu Bei flung the baby to the ground crying: "For this child, I nearly lost a great general!" Zhao Yun\'s fame spread across all of China that day.'
  },
  {
    id: 'c9', unlockAt: 32, illus: '💊',
    title: '刮骨疗毒', titleEn: 'Scraping the Bone',
    zh: '关羽攻打樊城时，被毒箭射中右臂。华佗为其疗伤，须剖开手臂，刮去骨上毒素。手术期间，关羽与马良对弈下棋，谈笑风生，面不改色，甚至还能招呼众将饮酒。华佗惊叹道："将军乃神人也！"此事成为千古美谈，展现了关羽超凡的意志力。',
    en: 'An arrow poisoned with aconite struck Guan Yu\'s arm during the siege of Fancheng. Hua Tuo told him the bone must be scraped to remove the poison - with no anaesthetic. Guan Yu stretched out his arm, and played chess with an aide throughout the procedure, never flinching, occasionally calling for wine. When it was done, Hua Tuo said: "I have treated countless patients, but I have never seen anyone like the General."'
  },
  {
    id: 'c10', unlockAt: 36, illus: '🌊',
    title: '水淹七军', titleEn: 'Flooding the Seven Armies',
    zh: '关羽围攻樊城期间，曹操派大将于禁率七路大军前来救援。关羽把握时机，趁秋雨连绵、汉水暴涨之机，以水攻战术淹没于禁七军，生擒于禁，斩杀庞德，威震华夏，震动了整个曹魏阵营，就连曹操都有迁都避其锋芒的念头。',
    en: 'During the siege of Fancheng, Cao Cao sent seven armies under General Yu Jin to relieve the city. Guan Yu waited for the autumn rains to swell the Han River, then broke the levees. The seven armies drowned in the flood - Yu Jin surrendered, Pang De was executed. Guan Yu\'s fame "shook all of China." Even Cao Cao considered moving his capital to escape the threat.'
  },
  {
    id: 'c11', unlockAt: 39, illus: '🏔️',
    title: '七擒孟获', titleEn: 'Seven Captures of Meng Huo',
    zh: '诸葛亮南征时，七次生擒南蛮首领孟获，七次将其释放。孟获每次都不服气，诸葛亮也不解释，只是将其放走，令其再战。第七次被擒，孟获跪地拜服，痛哭道："丞相天威，南人不复反矣！"自此南中彻底平定，诸葛亮的"攻心为上"成为千古名策。',
    en: 'Seven times Zhuge Liang captured Meng Huo, and seven times he released him with gifts and respect. Each time Meng Huo refused to accept defeat, and Zhuge Liang simply smiled and let him go. After the seventh capture, Meng Huo knelt and wept: "The Prime Minister\'s virtue is from Heaven itself. We of the south will never rebel again." No army was needed - only wisdom and respect.'
  },
  {
    id: 'c13', unlockAt: 42, illus: '📜',
    title: '出师表', titleEn: 'Memorial Before the Campaign',
    zh: '诸葛亮北伐前，上《出师表》于后主刘禅，言辞恳切，情真意切。他分析形势，推荐贤臣，告诫后主亲贤臣、远小人，并表达了自己"鞠躬尽瘁，死而后已"的决心。此表被誉为"千古第一忠臣"之作，读者无不动容，杜甫诗云："出师未捷身先死，长使英雄泪满襟。"',
    en: 'Before his northern campaigns, Zhuge Liang submitted the "Memorial Before the Campaign" to the young Emperor Liu Shan. He warned against flattery, praised loyal officials by name, and declared his own vow: "I will give my all until my last breath." It is considered the greatest expression of loyal service in all of Chinese literature. The poet Du Fu wrote of Zhuge Liang\'s eventual death in the field: "The campaign unfinished, the man gone first - this makes the tears of heroes fall forever."'
  },
  {
    id: 'c14', unlockAt: 45, illus: '🪕',
    title: '空城计', titleEn: 'The Empty City Stratagem',
    zh: '诸葛亮第一次北伐时，因马谡失守街亭，蜀军陷入危境。司马懿率十五万大军直逼西城，城内仅有少量文官士兵。诸葛亮临危不乱，大开城门，自坐城楼，焚香抚琴，神态自若。司马懿深知诸葛亮谨慎，疑有伏兵，不敢轻进，遂撤兵而去。',
    en: 'Ma Su\'s catastrophic defeat left Zhuge Liang\'s position exposed with only a few hundred men as Sima Yi marched up with 150,000. Zhuge Liang threw open the city gates, climbed to the ramparts, and played his zither with perfect calm. Sima Yi - knowing Zhuge Liang never took risks - concluded the placid scene must hide a devastating trap, and withdrew. The empty city held by music and nerve alone.'
  },
  {
    id: 'c15', unlockAt: 48, illus: '🌟',
    title: '司马一统', titleEn: 'The House of Sima Prevails',
    zh: '三国末期，曹魏大权逐渐落入司马氏之手。司马炎最终废魏帝，建立晋朝，又灭吴统一天下。从黄巾起义到晋朝统一，历经近百年的分裂与战乱，无数英雄豪杰在这片土地上留下了不朽的传说。"天下大势，分久必合，合久必分"，三国的故事，永远是中华文明最闪耀的篇章之一。',
    en: 'As the Three Kingdoms era drew to a close, power in Wei shifted slowly to the Sima family. Sima Yan finally deposed the last Wei emperor, established the Jin dynasty, and conquered Wu - reunifying China after nearly a century of division. From the Yellow Turbans to final unification, countless heroes lived and died across this land. "The world under heaven, after a long division, tends to reunite; after a long reunion, tends to divide." The Three Kingdoms remains the most brilliantly told chapter in the long story of China.'
  },
];

const PROVINCE_STORIES = {
  0:  { zh:'公孙度割据辽东，建立了半独立的割据政权。他修文教、设郡县，使辽东得以安定发展，被后世称为"辽东之雄"。', en:'Gongsun Du carved out a semi-independent domain in Liaodong. He promoted learning, established counties, and brought stability to the region - earning the title "Hero of Liaodong" from later generations.' },
  1:  { zh:'公孙瓒以白马义从闻名天下。他率领精锐骑兵，多次击败北方游牧民族的入侵，守护了汉朝北疆。然而骄傲自大，终被袁绍所败。', en:'Gongsun Zan was famous for his White Horse Riders - elite cavalry who repelled numerous nomadic invasions, defending the northern frontier. Yet his arrogance proved his undoing, and he fell to Yuan Shao.' },
  2:  { zh:'乌桓是东汉时期强大的游牧民族。曹操北征乌桓，在白狼山大败其主力，彻底消除了北方边患。这是三国统一进程中的重要一战。', en:'The Wuhuan were a powerful nomadic people of the Eastern Han era. Cao Cao marched north and crushed their main force at White Wolf Mountain, eliminating the northern frontier threat - a decisive battle in the long road to unification.' },
  3:  { zh:'颜良是袁绍手下第一猛将，武艺超群，令曹军将领闻风丧胆。然而关羽万军之中，策马扬刀，仅一合便斩颜良于马下，震惊天下。', en:'Yan Liang was Yuan Shao\'s greatest warrior - so fearsome that Cao Cao\'s commanders trembled at his name. Yet Guan Yu rode into the heart of the army and cut him down in a single pass, shocking the entire realm.' },
  4:  { zh:'袁绍"四世三公"，门第显赫，坐拥冀、青、幽、并四州之地，雄踞北方。官渡之战，曹操以少胜多，一举击败袁绍，奠定了北方统一的基础。', en:'Yuan Shao came from four generations of Grand Secretaries - the most prestigious family of the age. He held four provinces and dominated the north. Yet at Guandu, Cao Cao defeated his vast army against all odds, laying the foundation for northern unification.' },
  5:  { zh:'袁谭是袁绍长子，继承了父亲的部分势力。然而兄弟相争，袁谭、袁尚互相攻伐，最终被曹操各个击破，袁氏集团就此走向灭亡。', en:'Yuan Tan inherited a portion of his father\'s power but quarrelled bitterly with his brother Yuan Shang. Their fratricidal war gave Cao Cao the opening he needed - the Yuan clan destroyed itself from within.' },
  6:  { zh:'张角创立太平道，以"苍天已死，黄天当立"为口号，发动了席卷全国的黄巾起义。这场起义撼动了东汉根基，直接导致了三国乱世的到来。', en:'Zhang Jue founded the Way of Great Peace, rallying hundreds of thousands under the cry "The Blue Sky is dead - let the Yellow Sky rise!" His Yellow Turban Uprising shook the Han dynasty to its foundations and opened the age of the Three Kingdoms.' },
  7:  { zh:'颜良与文丑并称袁绍两大猛将。白马之战，颜良斩杀曹军大将宋宪、魏续，曹操麾下众将皆不敢出战。关羽的出现，改变了一切。', en:'Yan Liang and Wen Chou were Yuan Shao\'s twin pillars of war. At the Battle of Baima, Yan Liang slew two of Cao Cao\'s generals, leaving the rest too afraid to fight - until Guan Yu appeared and changed everything.' },
  8:  { zh:'张郃本是袁绍大将，官渡之战后投降曹操，成为曹魏名将。他参与了无数重大战役，因善于用兵而深受曹操信任，被誉为"曹魏五子良将"之一。', en:'Zhang He began as one of Yuan Shao\'s generals, but defected to Cao Cao after Guandu and became one of the great commanders of Wei. His tactical genius earned him a place among the "Five Elite Generals" - the finest commanders Cao Cao ever had.' },
  9:  { zh:'吕布是三国时期天下公认的第一武将，手持方天画戟，胯下赤兔马，所向披靡。"人中吕布，马中赤兔"流传千古。然而反复无常，三姓家奴，终被曹操所擒。', en:'Lu Bu was acknowledged as the greatest warrior of his age - his sky-painted halberd and Red Hare steed were said to be the finest man and horse in the world. But his reputation for treachery - "slave to three lords" - sealed his fate, and Cao Cao had him executed.' },
  10: { zh:'华佗是东汉末年最伟大的医学家，精通内科、外科、妇科、儿科，发明了麻沸散（麻醉药）。他曾为关羽刮骨疗毒，关羽谈笑弈棋，面不改色，令华佗深感敬佩。', en:'Hua Tuo was the greatest physician of his age, equally skilled in surgery, medicine, and anaesthesia - he invented the world\'s first recorded surgical anaesthetic. He once scraped poison from Guan Yu\'s bone while Guan Yu played chess without flinching, earning Hua Tuo\'s deepest admiration.' },
  11: { zh:'夏侯惇是曹操最信任的将领之一，两人是同族兄弟。他曾在战场上被流矢射中左眼，拔箭之时连眼珠带出，大呼"父精母血，不可弃也！"将眼珠吞下，以示对父母的敬重。', en:'Xiahou Dun was Cao Cao\'s most trusted general and kinsman. In battle an arrow struck his left eye - he pulled it out, eyeball and all, cried "The essence of my parents cannot be discarded!" and swallowed it, then fought on.' },
  12: { zh:'曹仁是曹操的宗族大将，以守城著称。樊城之战，关羽水淹七军，威震华夏，而曹仁死守樊城，顽强抵抗，最终等来了徐晃和孙权军队的援救。', en:'Cao Ren, Cao Cao\'s kinsman, was renowned as a defender of cities. When Guan Yu flooded the Seven Armies and shook all of China, it was Cao Ren who held Fancheng against all odds - holding until relief finally came.' },
  13: { zh:'王允是东汉忠臣，表面顺从董卓，暗中联络各方。他设下连环计：先将义女貂蝉许配吕布，再献给董卓，利用吕布的嫉妒之心，最终令吕布手刃董卓，一举除掉了这个大奸臣。', en:'Wang Yun served Dong Zhuo while secretly plotting his downfall. His masterstroke was the Chain Stratagem: first promise Diao Chan to Lu Bu, then gift her to Dong Zhuo - letting jealousy do the rest. Lu Bu killed his own lord, and Wang Yun\'s gamble succeeded.' },
  14: { zh:'貂蝉是中国古代四大美女之一，三国唯一的女性英雄。她自愿成为王允计谋中的棋子，周旋于董卓与吕布之间，以一己之力瓦解了强大的董卓政权，被誉为"闭月"之美。', en:'Diao Chan - "She who makes the moon hide in shame" - is counted among China\'s Four Great Beauties. She volunteered herself as the instrument of Wang Yun\'s plot, moving between Dong Zhuo and Lu Bu with grace and courage, and brought down the most feared tyrant of the age.' },
  15: { zh:'司马懿与诸葛亮是三国后期最伟大的对手。诸葛亮多次北伐，司马懿以守代攻，耗尽了蜀汉的国力。空城计中，诸葛亮独坐城楼抚琴，令司马懿疑心大起而撤兵。', en:'Sima Yi and Zhuge Liang were the supreme rivals of the later Three Kingdoms. Where Zhuge attacked, Sima Yi refused to engage - wearing down Shu through patience. In the Empty City Stratagem, Zhuge Liang sat alone playing a zither atop the gates, and Sima Yi, suspecting a trap, withdrew.' },
  16: { zh:'曹操是三国时代最杰出的政治家、军事家和文学家。他"挟天子以令诸侯"，统一北方，推行屯田制，恢复了战乱中的生产。他的诗"东临碣石，以观沧海"展现了一代枭雄的磅礴胸怀。', en:'Cao Cao was the greatest statesman, general, and poet of the Three Kingdoms era. He unified the north, reformed agriculture, and wielded the emperor\'s name to command the realm. His poem "I climb to Jie Rock to gaze upon the boundless sea" captures the vast ambition of a true titan.' },
  17: { zh:'庞统字士元，号凤雏，与诸葛亮并称"卧龙凤雏"，人称得一可安天下。他入川之战屡献妙计，却在落凤坡遭乱箭射杀，英年早逝。刘备痛失一大谋士，为之痛哭。', en:'Pang Tong - "Young Phoenix" - was considered Zhuge Liang\'s equal. The saying went: "Get either the Sleeping Dragon or the Young Phoenix, and you can pacify the realm." He died young in an ambush at Phoenix Fall Ridge, and Liu Bei wept bitterly at the loss.' },
  18: { zh:'马岱是马超的堂弟，蜀汉名将。诸葛亮北伐期间，他忠心耿耿，屡立战功。魏延叛乱之时，正是马岱临机应变，追上魏延将其斩杀，保住了蜀汉朝纲。', en:'Ma Dai was Ma Chao\'s cousin and a trusted general of Shu. When Wei Yan raised his rebellion after Zhuge Liang\'s death, it was Ma Dai who cut him down - acting swiftly to save the kingdom from internal collapse.' },
  19: { zh:'董卓专权乱政，废立皇帝，横征暴敛，天怒人怨。十八路诸侯联军讨伐董卓，掀起了汉末群雄割据的序幕。貂蝉以美人计配合王允的连环计，最终使吕布杀死了董卓。', en:'Dong Zhuo seized the capital, deposed emperors at will, and plundered the treasury - a tyrant despised by all. Eighteen warlords rose against him. It was Diao Chan\'s beauty and Wang Yun\'s cunning that finally turned his own champion Lu Bu against him.' },
  20: { zh:'许褚外号"虎痴"，是曹操贴身护卫，力大无穷。他曾与马超大战，酣畅淋漓，两人大战数百合不分胜负。据说许褚曾光着上身与马超搏斗，展示了令人叹为观止的战斗意志。', en:'Xu Chu - "Tiger Fool" - was Cao Cao\'s personal bodyguard and perhaps the strongest man in the realm. His duel with Ma Chao lasted hundreds of bouts without result. At one point he stripped off his armour to fight bare-chested, neither willing to yield.' },
  21: { zh:'张辽是曹操手下最著名的大将之一。合肥之战，他以八百勇士突袭孙权十万大军，杀入敌阵如入无人之境，令孙权几乎被俘。"张辽止啼"的故事在江东流传多年，孩子一听张辽的名字便止哭。', en:'At the Battle of Hefei, Zhang Liao led just 800 volunteers in a dawn assault against Sun Quan\'s army of 100,000 - cutting through to Sun Quan\'s personal guard before being repulsed. For years after, parents in Jiangdong calmed crying children by saying "Zhang Liao is coming!"' },
  22: { zh:'黄盖是东吴的老将，以勇猛忠诚著称。赤壁之战中，他主动请缨，以苦肉计诈降曹操，身受数十军棍，血流如注，成功取得曹操信任。火烧赤壁，正是黄盖率战船冲入曹营，点燃了这场改变历史的大火。', en:'Huang Gai was the veteran heart of Wu\'s army. At Red Cliff, he volunteered for the ruse - allowing himself to be flogged nearly to death in front of spies to convince Cao Cao his surrender was genuine. It was Huang Gai\'s fire-ships, sailing straight into the heart of the enemy fleet, that changed the course of history.' },
  23: { zh:'贾诩是三国时期最杰出的谋士之一，人称"毒士"。他算无遗策，连环妙计令天下英雄闻风丧胆。他辅佐过多位主公，每次都能全身而退，被誉为"三国第一智者"。', en:'Jia Xu - the "Poison Counsellor" - was perhaps the greatest strategist of the age. He served multiple lords, survived every political upheaval, and every scheme he devised proved fatal to his enemies. He alone of all the great advisors died peacefully in his bed.' },
  24: { zh:'曹洪是曹操的从弟，忠勇兼备。早年曹操战败，坐骑被夺，曹洪毅然将自己的马让给曹操，大呼："天下可无洪，不可无公！"自此这句话流传千古。他在曹营征战数十年，屡建战功，是曹魏宗族将领中最忠诚的一位。', en:'Cao Hong was Cao Cao\'s cousin and one of his most devoted followers. Early in their campaigns, Cao Cao lost his horse in a defeat and faced death - Cao Hong gave up his own mount and cried: "The world can do without Hong, but not without you!" He fought for Cao Cao for decades, one of the most loyal kinsmen in the entire Wei camp.' },
  25: { zh:'刘表据守荆州，是汉末一方诸侯。他为人宽厚，广纳贤士，使荆州成为乱世中一片难得的安定之地。然而优柔寡断，坐失良机，最终荆州落入曹操之手。', en:'Liu Biao governed Jing Province as a refuge of learning and stability amid the chaos - attracting scholars and warriors from across the realm. But his indecision proved fatal. He never seized his opportunities, and Jingzhou passed to Cao Cao without a fight.' },
  26: { zh:'孙权十九岁继承父兄之业，统治江东数十年。赤壁之战，他力排众议，联合刘备共抗曹操，以少胜多，创造了历史上最著名的以弱胜强的战役之一。曹操曾赞叹："生子当如孙仲谋！"', en:'Sun Quan inherited the Jiangdong domain at just nineteen. At Red Cliff, he rejected all counsel to surrender, allied with Liu Bei, and destroyed Cao Cao\'s fleet against impossible odds. Cao Cao himself praised him: "To have a son, one should have a son like Sun Zhongmou!"' },
  27: { zh:'夏侯渊以行军神速著称，人称"虎步关右"。然而定军山一战，被蜀将黄忠斩于马下，令曹操痛失一员爱将，称其死为"白地将军"之憾。', en:'Xiahou Yuan was famed for the speed of his marches - "Tiger Strides West of the Pass" they called him. But at Mount Dingjun, the elderly Huang Zhong caught him off guard and struck him down, a loss so grievous Cao Cao lamented it for years.' },
  28: { zh:'张鲁割据汉中，以五斗米道治民，信众只需缴纳五斗米即可入教，在乱世中建立了一套独特的政教合一政权。他宽以待民，在汉中经营近三十年，百姓安居乐业。建安二十年，曹操亲征汉中，张鲁出降，汉中纳入曹魏版图。', en:'Zhang Lu ruled Hanzhong through the Way of Five Pecks of Rice - a religious community where followers paid grain rather than taxes. In a time of endless war, he created a strange pocket of stability that lasted nearly thirty years. When Cao Cao personally led an army against him, Zhang Lu surrendered peacefully, and the people of Hanzhong were spared.' },
  29: { zh:'甘宁原是江上强盗，后投效东吴，成为孙权手下最勇猛的将领之一。他曾率百骑劫营，奔袭曹操大营，如入无人之境，斩杀数十人后全身而退，孙权赞叹："孟德有张辽，孤有甘兴霸！"', en:'Gan Ning began life as a river pirate before joining Sun Quan\'s service. His most famous feat: a night raid on Cao Cao\'s main camp with only a hundred riders - killing dozens and escaping without losing a man. Sun Quan declared: "Cao Cao has Zhang Liao; I have Gan Xingba!"' },
  30: { zh:'太史慈是东吴猛将，以弓术神准著称。他曾与孙策单骑对决，两人大战半日不分胜负，孙策夺其短戟，他夺孙策头盔，英雄相惜。此后太史慈归降孙策，成为其麾下大将，守护江东东线，令北方诸侯不敢轻犯。', en:'Taishi Ci was the finest archer in Wu and a warrior of legendary courage. He once fought Sun Ce in single combat - just the two of them, neither able to prevail - Sun Ce seized his short halberd, he grabbed Sun Ce\'s helmet. Two heroes recognizing each other in the fight. Afterwards Taishi Ci joined Sun Ce\'s service and spent his career defending Wu\'s eastern frontier.' },
  31: { zh:'雍闿是益州南中地区的汉族大姓豪强，趁刘备夷陵惨败、蜀汉元气大伤之际，联合孟获等南中豪酋发动叛乱，杀死蜀汉太守，割据一方。诸葛亮南征时，雍闿已被部下所杀，但他掀起的动乱却成为诸葛亮南征的导火索，最终促成了著名的七擒孟获。', en:'Yong Kai was a powerful Han clan leader in the south who seized his moment after Liu Bei\'s catastrophic defeat at Yiling. He killed the Shu governor, allied with Meng Huo and other tribal chieftains, and carved out his own territory. By the time Zhuge Liang marched south, Yong Kai had already been killed by his own allies - but the rebellion he ignited drew Zhuge Liang into the campaign that would produce the legendary Seven Captures.' },
  32: { zh:'刘璋是益州之主，性情懦弱，优柔寡断。张松献图引刘备入川，刘璋以为得到强援，却不知已引狼入室。诸葛亮与庞统精心谋划，刘备步步蚕食，最终刘璋开城出降，益州易主。蜀汉基业由此奠定，刘璋的失败在于他不识人心。', en:'Liu Zhang ruled the rich lands of Yizhou with a gentleness that made him unfit for the age. He invited Liu Bei in as a protector against the north - not realizing he was opening the gates to his own replacement. Zhuge Liang and Pang Tong\'s careful strategy closed around him like a net. When Liu Zhang finally opened the city gates and surrendered, he wept - and Liu Bei reportedly wept with him. The Kingdom of Shu had found its home.' },
  33: { zh:'诸葛瑾是诸葛亮之兄，效忠孙权，是东吴重要谋臣。兄弟二人分事两主，各尽其忠，传为美谈。诸葛瑾形貌奇特，脸长如驴，孙权曾以此取乐，他以智对之，不失风度。他长期主持吴蜀外交，使两国同盟得以延续，是乱世中罕见的君子。', en:'Zhuge Jin was Zhuge Liang\'s elder brother - yet they served rival kingdoms their whole lives, each fiercely loyal to their own lord. Jin served Sun Quan as a diplomat and counsellor, maintaining the delicate alliance between Wu and Shu through years of tension. Sun Quan once mocked his long face by leading a donkey into court with his name attached; Zhuge Jin simply added a character to make it read "Zhuge Jin\'s donkey" - and laughed along.' },
  34: { zh:'王平出身微寒，目不识丁，却凭借过人的军事天赋成为蜀汉名将。街亭之战，他苦劝马谡据险而守，马谡不听，兵败如山倒。唯独王平率本部五千人临危不乱，鼓角争鸣，使司马懿疑有伏兵而不敢追击。', en:'Wang Ping could not read a word, yet became one of Shu\'s finest generals. At Jieting, he begged Ma Su not to abandon the high ground. Ma Su refused, and the army collapsed - but Wang Ping held his 5,000 men in perfect order, beating drums so relentlessly that Sima Yi suspected an ambush and dared not advance.' },
  35: { zh:'鲁肃是东吴的战略家，孙权最重要的谋士之一。赤壁之战，他力主联刘抗曹，亲赴荆州与诸葛亮相会，促成了孙刘联盟。没有鲁肃的外交斡旋，赤壁之战也许根本不会发生。', en:'Lu Su was the architect of the Sun-Liu alliance - without him there would have been no Battle of Red Cliff. He travelled personally to Jingzhou to meet Zhuge Liang, argued forcefully for resistance against Cao Cao, and held the alliance together through years of mutual suspicion.' },
  36: { zh:'蔡瑁是荆州豪强，刘表的大舅子，执掌荆州水军多年。他善于钻营，刘表病重时他暗中勾结曹操，促成荆州不战而降。赤壁之战前，他被周瑜的反间计所害，曹操误以为他与黄盖勾通，将其斩首。一个弄权者最终死于自己的政治游戏之中。', en:'Cai Mao commanded the Jingzhou navy through years of Liu Biao\'s rule - more politician than warrior. When Liu Biao lay dying, Cai Mao secretly opened negotiations with Cao Cao, delivering Jingzhou without a battle. At Red Cliff, Zhou Yu\'s double-agent scheme convinced Cao Cao that Cai Mao had turned traitor. He was executed before the battle even began - destroyed by the very game he loved to play.' },
  37: { zh:'木鹿大王是南蛮深处的部落首领，以驯象为兵，率领象军纵横南中。诸葛亮南征时，木鹿大王以猛兽战象阵令蜀军大惊。诸葛亮以木制假兽喷火破之，象群大乱，木鹿大王落败被俘，其象兵战术令后人称奇。', en:'King Mulu was a chieftain from the deep south who fought with war elephants and fierce beasts - a battlefield unlike anything the Shu generals had ever seen. When his elephant corps charged, the ground shook. Zhuge Liang had wooden fire-breathing beast effigies constructed and deployed against the charge. The elephants panicked and turned on their own men, and King Mulu\'s terrifying army collapsed.' },
  38: { zh:'区星是汉末零陵、桂阳一带的豪强，曾拥兵数万对抗朝廷。孙坚奉命讨伐，以其过人的武勇和谋略，迅速平定了区星之乱，确立了孙氏在江南的威名。', en:'Ou Xing raised tens of thousands in revolt across Lingling and Guiyang. Sun Jian - father of Sun Quan - was sent to suppress him. His swift and decisive campaign crushed the rebellion and established the Sun family\'s reputation across the south.' },
  39: { zh:'严白虎是江东地方豪强，曾割据吴郡一带，自称"东吴德王"。孙策渡江征伐时，严白虎起初顽抗，后战败出逃，辗转藏匿于山越之间。他是孙氏统一江东道路上必须清除的地方势力，其覆灭标志着孙家在江东的权威最终确立。', en:'Yan Baihu - "White Tiger" - was a local strongman who controlled Wu commandery and styled himself "Virtuous King of Eastern Wu." When Sun Ce crossed the Yangtze, Yan Baihu resisted, retreated, and hid among the mountain tribes. He was one of many regional powers that had to be swept away before the Sun family\'s authority over Jiangdong was secure. His end marked the true beginning of Wu.' },
  40: { zh:'征侧是交趾地区的女性首领，领导越南北部各族反抗汉朝统治。她与妹妹征贰联手，起义之初连克数十城，建立了短暂的独立政权，被越南人尊为民族英雄。后汉将马援率军平叛，征侧战败，投水而死，其精神却永远活在越南的历史中。', en:'Trung Trac was a chieftain\'s widow who rose to lead a rebellion against Han rule across what is now northern Vietnam. With her sister Trung Nhi, she swept through dozens of cities and established a brief independent realm. The Han general Ma Yuan eventually crushed the revolt, but Trung Trac chose death over capture. Vietnam has honoured her as a national hero for two thousand years.' },
  41: { zh:'楼兰王是西域丝绸之路咽喉要地楼兰国的统治者。楼兰地处东西方交汇之处，历来是兵家必争之地。汉朝为打通西域通道，曾多次用兵楼兰。楼兰王在强权夹缝中求生，时而附汉，时而从匈奴，最终楼兰古国湮没于历史风沙之中。', en:'The King of Loulan ruled the desert kingdom that sat astride the Silk Road - squeezed between Han China and the Xiongnu steppes. Loulan\'s survival depended on playing the great powers against each other: submit to Han when they were strong, lean toward the nomads when they marched. Eventually the desert reclaimed the city entirely, and Loulan became one of history\'s great lost kingdoms.' },
  42: { zh:'刘焉是益州的开拓者，汉室宗亲，以乱世为由请命出任益州牧，实则割据一方。他在益州广纳流民，打压本地豪强，建立了稳固的地方政权，为其子刘璋奠定基业。刘焉病逝前，亲眼目睹三子被杀，留下无尽遗憾。', en:'Liu Yan was the architect of Yizhou\'s independence - a Han prince who used the chaos of the Yellow Turban rebellion to argue he should govern the distant province. Once there, he closed the roads and built a power base that was virtually a separate kingdom. He crushed local strongmen, settled refugees, and created the secure foundation his son Liu Zhang would inherit - and lose.' },
  43: { zh:'祝融夫人是孟获之妻，南蛮第一女将，善使飞刀，骁勇善战，多次击败蜀汉将领。她是三国时期最著名的女性武将，展示了南中女子的英勇无畏。', en:'Lady Zhurong was Meng Huo\'s wife and the greatest female warrior of the Three Kingdoms - expert with flying knives, she defeated several of Shu\'s generals in single combat. Her courage became legendary across the southern lands.' },
  44: { zh:'沙摩柯是五溪蛮族的英勇首领，归附刘备，参与了夷陵之战。他勇不可挡，在战场上亲手射杀了东吴名将甘宁，完成了一件令天下震惊之事。然而吴军反扑，蜀军溃败，沙摩柯在撤退中力战而死，以一族之勇为刘备流尽最后一滴血。', en:'Shamoke led the Wuxi tribes into Liu Bei\'s great invasion of Wu. A warrior of ferocious power, he personally shot Gan Ning - one of Wu\'s most celebrated generals - with an arrow during the fighting, a feat that stunned both armies. When Lu Xun\'s fire attack shattered the Shu army, Shamoke died fighting in the retreat, giving his life for an alliance that could not be saved.' },
  45: { zh:'陆逊是东吴后期最出色的统帅。夷陵之战，刘备倾全国之力伐吴，陆逊以火攻之策，火烧刘备连营七百里，大获全胜。此战令蜀汉元气大伤，从此再难威胁东吴。', en:'Lu Xun was Wu\'s greatest general of the later era. When Liu Bei launched his massive invasion to avenge Guan Yu, Lu Xun waited patiently for months - then set fire to Liu Bei\'s camps stretched across 700 li of forest, destroying the Shu army in a single night.' },
  46: { zh:'周瑜是东吴最杰出的军事统帅，才貌双全，精通音律。赤壁之战，他以苦肉计、连环计、火攻计连环出招，指挥吴蜀联军火烧赤壁，以区区五万水军大败曹操八十万之众，名垂青史。', en:'Zhou Yu was Wu\'s greatest commander - handsome, musical, and brilliant in war. At Red Cliff, he orchestrated the fire attack on Cao Cao\'s fleet with breathtaking precision, commanding a force of 50,000 against an army claimed to number 800,000. The fire changed the fate of China.' },
  47: { zh:'孟获是南中地区少数民族的首领，多次起兵反抗蜀汉。诸葛亮南征，七擒七纵孟获，每次抓住又放走，终使孟获心服口服，从此南中永不再叛，"攻心为上"成为千古名策。', en:'Meng Huo led the southern tribes in repeated rebellions against Shu. Zhuge Liang captured him seven times and released him seven times - until Meng Huo\'s pride was exhausted and he submitted from the heart. "To conquer the mind is better than to conquer the army" - Zhuge Liang proved it.' },
};