var isFirst=true;
var brands=
    [
        'HP','Dell','Asus','Acer','Apple',
        'Huawei','Microsoft','Lenovo','GIGABYTE','LG',
        'Smart-US','JUMPER EZbook','XIDU','Samsung','Latitude',
        'HP-Stream-Pro','Computer Upgrade King','HP-Stream-14-4GB-32GB','Samsung Chromebook','NUVISION',
        'RCA','MSI','Oemgenuine','jumper','Sumsung',
        'Google','BenQ','ViewSonic','Sceptre','AOC',
        'Raspberry Pi','Planar','Viotek','Loncevon','Philips Computer Monitors',
        'ELECROW','HP-monitors','Gechic','Kuman','Devmlicor',
        'egiant','ProCase','MOSISO','JETech','AmazonBasics',
        'CaseBuy','beyle','Lacdo','OneOdio','tomtoc',
        'Qishare','NIDOO','Ytonet','LONMEN','KSW KINGDO',
        'Thule','Mancro','amCase','changel','iCozzier',
        'AboveTEK','FreeBiz','KEC','Cyber Acoustics','RAINYEAR make life easier',
        'ARMYCAMOUSA','Govee','WIWU','Youpeck','BTSKY',
        'kayond','KK Crafts','RUBAN','null','Naukay',
        'CAISON','HOMIEE','YIDA','Comfyable','Great Wall',
        'Ramhorn','Evecase','CCPK','BRINCH','Targus',
        'VicTsing','Jelly Comb','PICTEK','Logitech','Havit',
        'TECKNET','Tecland','LOVRI','PASONOMI','Redragon',
        'USTEK','Catcha','Generic','inphic','LENRUE',
        'Corsair','Chuanyue','Sonfan','by','SteelSeries',
        'vive comb','Razer','Xergur','MChoice','Splaks',
        'FIRSTBLOOD ONLY GAME.','FD','Victor','Hasbro','NR',
        'VersionTECH','noximi','Rii','Philips','Anker',
        'ARyee','BATURU','ZOZO','Bestland','Nicpower',
        'LVSun','ELECJET','Superer','NEW POW','EBK',
        'Ineedup','DTK','Powseed','TNP Products','Dell Charger',
        'Power Depot','Reparo','Novelty','Selectec','ANTIEE',
        'Westronix','PWR+','Belker','Outtag','Purpleleaf',
        'SoulBay','ROLADA','Easy Style','Padarsey','Reo',
        'ISUER','CHOETECH','Crucial','Born for Mac Notebook','VUOHOEG',
        'Laimate','Novobit','aceyoon','PUIZHAK','SKstyle',
        'DJW','HYTED','WEGWANG','Futurebatt','Tonb Shop',
        'EBOYEE','MAGIPEA','Chicony','CHANZON','Toshiba',
        'BIGPRIN INC','Charger','Acbel','PowerSource','SKY BOY',
        'usmart','BAJ','Sopito','StarTech','CYD',
        'Innergie','GANA','PEGLY','DODAUG','ChargerBuy',
        'LeapFrog','TSKYBEAR','S SKstyle','Arteck','YEKBEE',
        'Ombar','Azio','Das Keyboard','AUKEY','TOMOKO',
        'TEC.BEAN','Kensington','Rottay','OfficeTec','Gamers Digital',
        'LESHP','Macally','KLIM Technologies','Airfox','Mpow',
        'Adesso','CHONCHOW','Rosewill','BFRIENDit','Zoweetek',
        'OMOTON','Belkin','i-rocks','BronaGrand','EagleTec',
        'ACEPHA','seenda','Aerb','iClever','TECWARE',
        'Inland','HyperX','KHOMO','SecurOMax','Twisted Veins',
        'HUANUO','BlueRigger','KabelDirekt','BAM','PowerBear',
        'Fusion4k','Syncwire','Rankie','CableVantage','IBRAÃ‚',
        'Signstek','polestar connect','C&E','Lesozoh','Sansui',
        'Cable Matters','Farstrider','Sailfish','Monster','DIRECTV',
        'NewBEP','Aurum Cables','MINC Cable','MPI','VAlinks',
        'Kawany','Smart Stereo','Bugubird','Postta','Jumbl',
        'Importer520','Maximm','Electop','Benfei','Monoprice',
        'BATIGE','uni','Tuscom','BUSUQ','Capshi',
        'RELM','UPTab','Letter Love Fashion Furniture','FosPower','Northbear',
        'IBRAÂ®','PERLESMITH','AMICCOM','Cables Unlimited','ATEVON',
        'Ultra Clarity Cables','iBirdie','Plugable','WAVLINK','Pezin & Hulin',
        'BESTHING','Sabrent','Diamond Multimedia','zeateck','segrewall',
        'EasyAcc','Rostmary GIFT Shop','Greta Oto Design','IOGEAR','Thermaltake',
        'Sigma Sport','SIIG','Hyper','L.win','Sisun',
        'Cshidworld','Elite Tech Gear','Asustek','Unitek','Poweroni',
        'Pillarr','KEEPOW','ATZEBE','CableCreation','Hercules Tuff',
        'Xiemin','Mediasonic','A ADAM ELEMENTS','Simicore','WEme',
        'yinboti','Henge Docks','AudioSnax','BarvA','COSOOS',
        'TOBENONE','MagiDeal','Zettaguard','KABCON','Amazon',
        'Pyle','Cambridge Soundworks','WZK','DOSS','ZoeeTree',
        'Vomach','SHAVA','Marvotek','Harman Kardon','OSD Audio',
        'RECCAZR','JBL','Sylvania','AOMAIS','Zosam',
        'APIE','COMISO','XLeader','Aduro','Rockville',
        'Aptoyu','Ultimate Ears','VOCH','ZENBRE','Nyne',
        'Klipsch','NUBWO','Long Run Technologies','WEYANG','Etekcity',
        'Ozzie','Forcovr','SplashSound','JEFAL','KOOINGYUE',
        'Soundcore','MIABOO','Sony','JONTER','Tribit',
        'Xeneo','GOgroove','Soundbot','ARCHEER','NANYI',
        'BAXIA TECHNOLOGY','Axess','NSOSAUE','Ematic','iGearPro',
        'NEWBEING','Muzili','Vomercy','Lexon','N&M Tech',
        'SOUNDBOKS','Paradigm','Ancord','Aneerx','Marshall',
        'Elemusi','punkcase','Lonchan','Aiwa','Vtin',
        'MIFA','BUMMD','AUCEE','Ewa','TaoTronics',
        'Otis & Eleanor','Sbode','CT Sounds','Soundvox','Mix Hero',
        'AURTEC','Bose','JSAUX','Coolwind','Auto Tech',
        'dodocool','Gideon','SoundSOUL','I-STAR','Treblab',
        'Sound Appeal','VOGUISH','GGMM','MiNE','DEWALT',
        'Audioengine','Tronsmart','Polk Audio','HROMEN','UD',
        'AYL','Photive','YELLYOUTH','Batai','Haehne',
        'Victbing','Dragon Touch','Tagital','Azpen','Lectrus',
        'ibowin','Yuntab','YDZB','Wecool','BENEVE',
        'Aoson','Kivors','ALLDOCUBE','LLLCCORP','TOPELOTEK',
        'B.B.PAW','Aurorax','CHUWI','llltrade','iRULU',
        'Yue Ying','Simbans','reMarkable','Fusion5','Hoozo',
        'TenYiDe','Contixo','NeuTab','Utopia Home','Nextbook',
        'Winsing','Nokia','CUBOT','Unihertz','BLU',
        'Motorola','Blackview','TracFone','UMIDIGI','Nokia mobile',
        'RugGear','Kyocera','Xiaomi','Orchideous','Boost Mobile',
        'Double-Lin','OnePlus','Xgody','AGM','Moto',
        'NUU','Letv','Hipipooo','HTC','DORLAND',
        'E&L','LG Electronics','Ulefone','Cubot KingKong','KEN XIN DA',
        'DOOGEE','US-PopTrading','Samber','BlackBerry','Padcod',
        'Sudroid','POPTEL','Kingston','JLXMROSE','LAXTEK',
        'SanDisk','Best for most','PNY','AUAMOZ','Lexar',
        'SP Silicon Power','Patriot','ZBHTCM','Everything But Stromboli','GGenerici',
        'EBS LLC','BOYMXU','Polaroid','Transcend','Kingflash',
        'Nasceret','Tomameri','ProGrade Digital Incorporated','FATTYDOVE','MiniMicro',
        'Amplim','Beeway','Wolkano','TAMSOI','shenzs',
        'Gigastone','HBJH','Queenwing','XINHUAYI','ADATA',
        'Gleewin','AEGO','Verbatim','MYMAHDI','Panasonic',
        'Vanja','Eco-Fused','fushen','Season','SOREDO',
        'Canon','Brother','Epson','Kodak','Xerox',
        'Lifeprint','Fujifilm','DYMO','HeroFiber','Dynastar',
        'Tyler','OPPO Digital','Craig Electronics','Impecca','Marantz Professional',
        'LONPOO','KASKAWISE','GPX','VocoPro','Pioneer',
        'LP','AD ALICE DREAMS','PDP','PowerA','Total Control',
        'Snakebyte','ThrustMaster','Collective Minds','Hori','KontrolFreek',
        'NACON','RDS Industries','Qanba','ZTHY','BestPlayer',
        'WANDESHA EASTE','BatPower','NiceTQ','RocketBus','BND',
        'QIANXIANG','TPLTECH','JUYOON','Eton','VHBW',
        'That Is Just Genius','IBERLS','Tripp Lite','SZYSK','JBtek',
        'Factory Direct','Stone Digital','ANTOBLE','Smays','WEETEN',
        'SOONHUA','ELENKER','PoderCamino','KINGDO','Ztotop',
        'Ostrich','AC Doctor INC','iafer','Superadapter','YIPBOWPT',
        'KJ-KayJI','Czznn','Atabletparts','YGJ','A-lig',
        'Eaglewood','CANON(R)','Nikon','YISENCE','The Imaging World',
        'AOM','AbergBest','Photo Savings','Olympus','GLOUE',
        'Turtle Beach','HC GAMERLIFE','Sennheiser','Micolindun','RUNMUS',
        'DLAND','REDESS','Jabra','ARKARTECH','Ceppekyy',
        'ENVEL','BENGOO','BYZ','Amerzam','ONIKUMA',
        'VersionTECH.','Sades','LaCie','Silicon Power','Western Digital',
        'G-Technology','Apricorn','Seagate','KESU','Maxone',
        'RAVPower','Intel','Oyen Digital','KOOTION','MyDigitalSSD',
        'Glyph','KingDian','TEYADI','Titanium Micro','OWC',
        'Nekteck','Blackjet','VectoTech','Blackmagic Design','Ubisoft',
        'Sega','Warner Bros','Bandai Namco Entertainment America','2K Games','Konami',
        'Capcom','Blizzard Entertainment','Activision','704 Games','Rockstar Games',
        'Warner Home Video - Games','Square Enix','Koei','Sold Out','Electronic Arts',
        'Bethesda','Studio Wildcard','Gearbox Publishing','Atlus','GAEMS',
        'Atari','Timorn','Hermitshell','Sony.','Co2Crea',
        'Enfain','iDiskk','HHAPPINESS','PACE','Picture Keeper',
        'Yubico','VICFUN','JUANWE','JOIOT','RAOYI',
        'Rhapsody & Mogan','Tecneca','Velcro Panel','Guchoi','BrexLink',
        'SNANSHI','Pengo','UGREEN','SMALLElectric','Sigma',
        'Rokinon','YONGNUO','Moment','Tamron','VIZIO',
        'Jensen','PROSCAN','Toshiba TV','Hisense','ASA',
        'Hitachi','TCL','Hitachi(r)'
    ]



var jsonObj = {
    "Macro":
    {
        "Price":

        {
             "UpperBound":0,
             "LowerBound":0,
             "Type":{
                     "monitor":
                     {
                     "mean": 287.7161249999998,
                     "std": 229.69772072913653
                     },
                     "notebook_case":
                     {
                     "mean": 26.680365853658543,
                     "std": 35.256799972614395
                     },
                     "mouse":
                     {
                     "mean": 17.095769230769235,
                     "std": 14.265397652355162
                     },
                     "notebook":
                     {
                     "mean": 729.0934705882355,
                     "std": 594.4080325242113
                     },
                     "keyboard":
                     {
                     "mean": 48.8332291666666,
                     "std": 42.285523577219195
                     },
                     "cable":
                     {
                     "mean": 14.13912751677852,
                     "std": 17.429407540321115
                     },
                     "charger":
                     {
                     "mean": 28.03568862275443,
                     "std": 61.16828876120985
                     },
                     "docking station":
                     {
                     "mean": 91.76902912621348,
                     "std": 52.429681021243496
                     },
                     "speaker":
                     {
                     "mean": 80.8170866141731,
                     "std": 223.55085042107197
                     },
                     "tablet":
                     {
                     "mean": 121.93373015873001,
                     "std": 101.37227294075339
                     },
                     "mobile":
                     {
                     "mean": 232.86562500000042,
                     "std": 162.36250895139597
                     },
                     "dvd_br":
                     {
                     "mean": 111.36943396226408,
                     "std": 217.0607974864247
                     },
                     "printer":
                     {
                     "mean": 203.0585714285714,
                     "std": 148.50640954795657
                     },
                     "desktop":
                     {
                     "mean": 576.3286956521741,
                     "std": 493.2261829970727
                     },
                     "controller":
                     {
                     "mean": 66.36405797101445,
                     "std": 57.70837510119409
                     },
                     "camera":
                     {
                     "mean": 950.0461538461539,
                     "std": 904.6660652789349
                     },
                     "headset":
                     {
                     "mean": 53.10025641025641,
                     "std": 40.950373848764514
                     },
                     "game":
                     {
                     "mean": 37.242027027027014,
                     "std": 17.877701039703428
                     },
                     "lens":
                     {
                     "mean": 862.5420833333334,
                     "std": 740.2445234154936
                     },
                     "console":
                     {
                     "mean": 403.1593430656931,
                     "std": 189.39056201717892
                     },
                     "television":
                     {
                     "mean": 204.8599999999999,
                     "std": 100.5614953421763
                     },
                     "drive":
                     {
                     "mean": 87.48210884353756,
                     "std": 156.96517051864456
                     }

             }
        },
        "Performance":0
    },
    "Price":
    {
        "camera":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":10,"AvgPriceArray":[90,120,200,50,220,170,180,155,100,250],"Box":[],"Brand":{},"min":1,"max":15},
        "lens":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":10,"AvgPriceArray":[130,90,86,129,196,109,248,100,150,200],"Box":[],"Brand":{},"min":1,"max":15},
        "charger":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":10,"AvgPriceArray":[7,11,13,10,11,15,9,10,8,7],"Box":[],"Brand":{},"min":1,"max":15},
        "controller":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":10,"AvgPriceArray":[15,20,25,10,8,30,20,20,21,18],"Box":[],"Brand":{},"min":1,"max":15},
        "desktop":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":10,"AvgPriceArray":[279,130,200,198,260,150,200,210,180,299],"Box":[],"Brand":{},"min":1,"max":15},
        "docking_station":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":10,"AvgPriceArray":[20,30,25,30,20,35,40,30,39,50],"Box":[],"Brand":{},"min":1,"max":15},
        "dvd_br":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":10,"AvgPriceArray":[15,20,30,25,27,28,19,26,27,19],"Box":[],"Brand":{},"min":1,"max":15},
        "drive":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":10,"AvgPriceArray":[10,15,12,9,15,19,18,10,15,13],"Box":[],"Brand":{},"min":1,"max":15},
        "game":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":10,"AvgPriceArray":[20,12,25,15,25,19,12,25,15,14],"Box":[],"Brand":{},"min":1,"max":15},
        "console":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":10,"AvgPriceArray":[209,200,250,280,210,290,300,210,210,250],"Box":[],"Brand":{},"min":1,"max":15},
        "cable":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":10,"AvgPriceArray":[7,10,7,12,10,8,10,12,9,9],"Box":[],"Brand":{},"min":1,"max":15},
        "headset":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":10,"AvgPriceArray":[20,15,25,20,25,30,20,15,29,26],"Box":[],"Brand":{},"min":1,"max":15},
        "keyboard":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":10,"AvgPriceArray":[19,19,21,23,21,9,10,15,10,15],"Box":[],"Brand":{},"min":1,"max":15},
        "monitor":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":10,"AvgPriceArray":[150,100,80,180,90,150,160,170,180,190],"Box":[],"Brand":{},"min":1,"max":15},
        "mouse":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":10,"AvgPriceArray":[11.99, 9.95, 7.99, 6.99, 9.99, 8.99, 9.99, 14.99, 2.64, 7.99],"Box":[],"Brand":{},"min":1,"max":15},
        "notebook":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":10,"AvgPriceArray":[349.9, 208.9, 272, 265.99, 269, 217.95, 294.85, 274.5, 217.95, 228],"Box":[],"Brand":{},"min":1,"max":15},
        "notebook_case":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":10,"AvgPriceArray":[16,12,10,14,16,10,12,15,16,15],"Box":[],"Brand":{},"min":1,"max":15},
        "printer":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":10,"AvgPriceArray":[100,50,60,90,65,100,64,75,100,100],"Box":[],"Brand":{},"min":1,"max":15},
        "mobile":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":10,"AvgPriceArray":[109,50,60,75,65,55,90,95,50,65],"Box":[],"Brand":{},"min":1,"max":15},
        "speaker":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":10,"AvgPriceArray":[15,20,19,20,15,14,10,15,16,18],"Box":[],"Brand":{},"min":1,"max":15},
        "tablet":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":10,"AvgPriceArray":[100,89,50,64,90,75,80,90,100,70],"Box":[],"Brand":{},"min":1,"max":15},
        "television":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":10,"AvgPriceArray":[200,180,150,100,170,190,195,175,197,160],"Box":[],"Brand":{},"min":1,"max":15},
    },
        "Brand":
    {
        "camera":{},
        "lens":{},
        "charger":{},
        "controller":{},
        "desktop":{},
        "docking_station":{},
        "dvd_br":{},
        "drive":{},
        "game":{},
        "console":{},
        "cable":{},
        "headset":{},
        "keyboard":{},
        "monitor":{},
        "mouse":{},
        "notebook":{},
        "notebook_case":{},
        "printer":{},
        "mobile":{},
        "speaker":{},
        "tablet":{},
        "television":{},
    },

        "Performance":
    {

        "camera":{"RAM":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgArray":[],"min":1,"max":15}},
        "lens":{"Size":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15,"Unit":"mm"}},

        "charger":{},
        "controller":{"Xbox":{"isBox":1,"isClicked":0},"PS4":{"isBox":1,"isClicked":0}},
        "desktop":{"RAM":{"StdDev":0,"Mean":0,"UpperBound":10,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15,"Unit":"GB"},
                      "CPU":{"StdDev":0,"Mean":0,"UpperBound":10,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15,"Unit":"GHz"},
                      "HDD":{"StdDev":0,"Mean":0,"UpperBound":10,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15,"Unit":"GB"}},
        "docking_station":{"Port":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15,"Unit":"No."},
                            "USB":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15,"Unit":"No."}},
        "dvd_br":{"Resolution":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15,"Unit":"Pixels"}
                               ,"DVD":{"isBox":1,"isClicked":0},"BR":{"isBox":1,"isClicked":0,"min":1,"max":15}},
        "drive":{"Size":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15},"Unit":"GB"},
        "game":{"Xbox":{"isBox":1,"isClicked":0},"PS4":{"isBox":1,"isClicked":0}},
        "console":{"HDD":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15,"Unit":"GB"},
                          "Xbox":{"isBox":1,"isClicked":0},"PS4":{"isBox":1,"isClicked":0}},

        "cable":{"Length":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15}},
        "headset":{"Wired":{"isBox":1,"isClicked":0},"Wireless":{"isBox":1,"isClicked":0},"Gaming":{"isBox":1,"isClicked":0,"min":1,"max":15,"Unit":"ft"}},
        "keyboard":{"Backlit":{"isBox":1,"isClicked":0},"Wireless":{"isBox":1,"isClicked":0,"min":1,"max":15}},
        "monitor":{"Size":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15,"Unit":"In"},
                   "Resolution":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15,"Unit":"Pixels"}},
        "mouse":{"Wireless":{"isBox":1,"isClicked":0},"DPI":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15,"Unit":"DPI"}},
        "notebook":{"RAM":{"StdDev":0,"Mean":0,"UpperBound":10,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15,"Unit":"GB"},
                      "CPU":{"StdDev":0,"Mean":0,"UpperBound":10,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15,"Unit":"GHz"},
                      "HDD":{"StdDev":0,"Mean":0,"UpperBound":10,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15,"Unit":"GB"},
                      "Size":{"StdDev":0,"Mean":0,"UpperBound":10,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15,"Unit":"In"}},
        "notebook_case":{"Size":{"StdDev":0,"Mean":0,"UpperBound":10,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15,"Unit":"In"}},
        "printer":{"Wired":{"isBox":1,"isClicked":0},"Wireless":{"isBox":1,"isClicked":0},"All in One":{"isBox":1,"isClicked":0},"Inkjet":{"isBox":1,"isClicked":0}
                    ,"Laser":{"isBox":1,"isClicked":0}},
        "mobile":{"RAM":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgArray":[],"Box":[],"Brand":{},"isBox":0,"min":1,"max":15,"Unit":"GB"},
                      "HDD":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgArray":[],"Box":[],"Brand":{},"isBox":0,"min":1,"max":15,"Unit":"GB"}},
        "speaker":{"Wired":{"isBox":1,"isClicked":0},"Wireless":{"isBox":1,"isClicked":0},"Waterproof":{"isBox":1,"isClicked":0}},
        "tablet":{"RAM":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15,"Unit":"GB"},
                      "CPU":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15,"Unit":"GHz"},
                      "HDD":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15,"Unit":"GB"},
                      "Size":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15,"Unit":"In"}},
        "television":{"Size":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15,"Unit":"In"},
              "Resolution":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgArray":[],"isBox":0,"min":1,"max":15,"Unit":"Pixels"}}

    },

}



function getJsonPrice(){
     return JSON.parse(localStorage['prices']);
}

function getJsonBrand(){
     return JSON.parse(localStorage['brand']);
}

var typeArrayFixed = ["notebook","monitor","notebook_case","mouse","charger","keyboard","cable","docking_station","speaker","tablet","mobile","drive","printer","dvd_br","desktop","controller","camera","headset","game","console","lens","television"];

function initJsonObject(){

    for(let i = 0; i < typeArrayFixed.length; ++i) {
        var typeString = typeArrayFixed[i];
        var avgPriceArray = jsonObj['Price'][typeString]['AvgPriceArray'].map(Number);


        var lowerBoundPrice = oneSigmaMinus(avgPriceArray);
        if (lowerBoundPrice < 0) {
            lowerBoundPrice = 0;
        }
        var upperBoundPrice = oneSigmaPlus(avgPriceArray);
        jsonObj['Price'][typeString]["UpperBound"] = upperBoundPrice;
        jsonObj['Price'][typeString]["LowerBound"] = lowerBoundPrice;

    }
 localStorage['prices'] = JSON.stringify(jsonObj['Price']);
    localStorage['brand'] = JSON.stringify(jsonObj['Brand']);
 localStorage['Macro']  = JSON.stringify(jsonObj['Macro'])
}

function addJSONParameter()
{
   var givenObj=JSON.parse(localStorage['brand']);
   for(category in givenObj)
   {
    for(var i=0; i<=brands.length-1;++i)
    {
        var givenCompany=brands[i]
        givenObj[category][givenCompany]={"Count":0}
    }
   }
    localStorage.setItem('brand',JSON.stringify(givenObj))
    testPerformanceFilter(jsonObj)

}

function averageArray(arrayGiven)
{
    if(arrayGiven.length==0)
    {
        return null
    }
    var sum=0;
    for(var i=0; i<=arrayGiven.length-1;i++)
    {
        sum+=arrayGiven[i];
    }
    return sum/arrayGiven.length
}

function stdDevArray(arrayGiven)
{
    if(arrayGiven.length===0)
    {
        return null
    }
    avg=averageArray(arrayGiven)
    squares=0;
    for(var i=0; i<=arrayGiven.length-1;i++)
    {
        squares+=Math.pow((arrayGiven[i]-avg),2)
    }
    return Math.pow((squares/(arrayGiven.length-1)),0.5);
}

function oneSigmaPlus(arrayGiven)
{
    return averageArray(arrayGiven)+stdDevArray(arrayGiven)
}

function oneSigmaMinus(arrayGiven)
{
    return averageArray(arrayGiven)-stdDevArray(arrayGiven)
}




function updateAveragePrice(x)
{
    //getTypePriceData()
    if(localStorage['prices']==null)
    {
        localStorage.setItem('prices',JSON.stringify(jsonObj))
        isFirst=false
    }

    var typeString = localStorage['ID_type']
    var typeJSON = (JSON.parse(localStorage['prices']));


    typeJSON[typeString]['AvgPriceArray'].push(x);
    var avgPriceArray=typeJSON[typeString]['AvgPriceArray'].map(Number)
    typeJSON[typeString]['Count']=typeJSON[typeString]['Count']+1;
    var averagePrice = averageArray(avgPriceArray)
    var stdDevPrice = stdDevArray(avgPriceArray)
    var lowerBoundPrice=oneSigmaMinus(avgPriceArray)
    if(lowerBoundPrice<0)
    {
        lowerBoundPrice=0
    }
    var upperBoundPrice=oneSigmaPlus(avgPriceArray)
    typeJSON[typeString]["UpperBound"]=upperBoundPrice
    typeJSON[typeString]["LowerBound"]=lowerBoundPrice
    typeJSON[typeString]["Mean"]= averagePrice
    typeJSON[typeString]["StdDev"]= stdDevPrice
    localStorage.setItem('prices',JSON.stringify(typeJSON))
    //updateMacroPriceFilter()

}

function updateBrand(brand,givenType)
{
    var localJSON=JSON.parse(localStorage['brand']);
    if(localJSON[givenType][brand]==null)
    {
        addJSONParameter();
        localJSON=JSON.parse(localStorage['brand']);
    }
    localJSON[givenType][brand]["Count"]=localJSON[givenType][brand]["Count"]+1;
    localStorage.setItem('brand',JSON.stringify(localJSON))
}

 function mostUsedBrand(productType)
{
     var mostUsed=[];
     if(localStorage.brand==null)
     {
        return null
     }
     var obj=JSON.parse(localStorage['brand']);
     var brandObj=obj[productType];
     var arrayBrandObj = Object.keys(brandObj).map(function(key) {
         return [key, brandObj[key].Count];});
     arrayBrandObj=arrayBrandObj.sort((a, b) => a[1] - b[1]);

     localStorage['Brand0']=arrayBrandObj[arrayBrandObj.length-1];
     localStorage['Brand1']=arrayBrandObj[arrayBrandObj.length-2];
     localStorage['Brand2']=arrayBrandObj[arrayBrandObj.length-3];
     mostUsed.push(arrayBrandObj[arrayBrandObj.length-1]);
     mostUsed.push(arrayBrandObj[arrayBrandObj.length-2]);
     mostUsed.push(arrayBrandObj[arrayBrandObj.length-3]);
    // console.log(arrayBrandObj);

    return mostUsed;

}

function updateCapability(brand,givenType)
{
    var localJSON=JSON.parse(localStorage['prices'])
    if(localJSON['Price'][givenType]["Brand"][brand]==null)
    {
        addJSONParameter()
        localJSON=JSON.parse(localStorage['prices'])
    }
    localJSON['Price'][givenType]["Brand"][brand]["Count"]=localJSON['Price'][givenType]["Brand"][brand]["Count"]+1
    localStorage.setItem('prices',JSON.stringify(localJSON))
    mostUsedBrand(givenType)
}


function filterPerformance(givenType,stat,value)
{
     if(localStorage['prices']==null)
    {
        localStorage.setItem('prices',JSON.stringify(jsonObj))
        isFirst=false
    }

    var typeString = localStorage['ID_type']
    var typeJSON = (JSON.parse(localStorage['prices']));


    typeJSON['Performance'][givenType][stat]['AvgArray'].push(value);
    typeJSON['Performance'][givenType][stat]['Count']=typeJSON['Performance'][givenType][stat]['Count']+1;
    var avgPriceArray=typeJSON['Performance'][givenType][stat]['AvgArray'].map(Number)
    typeJSON['Performance'][givenType][stat]['Mean']=averageArray(avgPriceArray)
    typeJSON['Performance'][givenType][stat]['StdDev']=stdDevArray(avgPriceArray)
    var lowerBoundPrice=oneSigmaMinus(avgPriceArray)
    if(lowerBoundPrice<0)
    {
        lowerBoundPrice=0
    }
    var upperBoundPrice=oneSigmaPlus(avgPriceArray)
    typeJSON['Performance'][givenType][stat]["UpperBound"]=upperBoundPrice
    typeJSON['Performance'][givenType][stat]["LowerBound"]=lowerBoundPrice
    localStorage.setItem('prices',JSON.stringify(typeJSON))
}




function customQuery()
{
/*
    if()
    ''/price/1000/5000
*/
}

function testPerformanceFilter(givenJSON)
{
    for (var outerKey in givenJSON['Performance'])
    {
        for (var innerKey in givenJSON['Performance'][outerKey])
        {
            if(givenJSON['Performance'][outerKey][innerKey]["isBox"]==0)
            {
                givenJSON['Performance'][outerKey][innerKey]
                //filterPerformance(outerKey,innerKey,Math.floor((Math.random() * 100) + 1))
            }
        }
    }
}




function getZPercent(z)
  {
    //z == number of standard deviations from the mean

    //if z is greater than 6.5 standard deviations from the mean
    //the number of significant digits will be outside of a reasonable
    //range
    if ( z < -6.5)
      return 0.0;
    if( z > 6.5)
      return 1.0;

    var factK = 1;
    var sum = 0;
    var term = 1;
    var k = 0;
    var loopStop = Math.exp(-23);
    while(Math.abs(term) > loopStop)
    {
      term = .3989422804 * Math.pow(-1,k) * Math.pow(z,k) / (2 * k + 1) / Math.pow(2,k) * Math.pow(z,k+1) / factK;
      sum += term;
      k++;
      factK *= k;

    }
    sum += 0.5;

    return sum;
  }

function getZScore(stdDev,mean,givenScore)
{
    return (givenScore-mean)/stdDev

}



/*
function updateMacroPriceFilter()
{
    var zScoreSumUpper=0
    var zScoreSumLower=0
    var count=0
    var jsonPrice = JSON.parse(localStorage['prices'])
    var jsonMacro = JSON.parse(localStorage['Macro'])
    for(var i=0; i<=Object.keys(jsonPrice['Price']).length-1;++i)
    {
        const keys = Object.keys(jsonPrice['Price'])

        if( (jsonPrice[keys[i]]['UpperBound']!=0)
        &&  (jsonPrice[keys[i]]['UpperBound']!=0))
        {
            let stdDev= jsonMacro["Price"]["Type"][keys[i]]['StdDev']
            let mean =  jsonMacro["Price"]["Type"][keys[i]]['Mean']

            let givenScoreUpper = jsonPrice[keys[i]]['UpperBound']
            let zScoreUpper = getZScore(stdDev,mean,givenScoreUpper)
            let percentUpper = getZPercent(zScore)
            zScoreSumUpper = zScoreSumUpper + percentUpper

            let givenScoreLower = jsonPrice[keys[i]]['LowerBound']
            let zScoreLower = getZScore(stdDev,mean,givenScore)
            let percentLower = getZPercent(zScore)
            zScoreSumLower = zScoreSumLower + percentLower

            count=count + 1
        }
    }
    jsonMacro['Price']['UpperBound'] = zScoreSumUpper/count
    jsonMacro['Price']['LowerBound'] = zScoreSumLower/count

}*/



function macroPriceFilter(givenType)
{





}

function getTypePriceData()
{

        var alpha = $.ajax({
            url: 'http://techsailsrestful.us-east-2.elasticbeanstalk.com/getInfo/item_type',
            dataType: 'json',
            type: 'GET',
            success: function (data) {


                    $.ajax({
                    url: 'http://techsailsrestful.us-east-2.elasticbeanstalk.comg/getItemsBy/item_type/'+value,
                    dataType: 'json',
                    type: 'GET',
                    success: function (secondData) {
                        averagePriceArray=[]
                    },
                    error: function (error) {
                    }
                    });

                console.log(isLoaded+ "asdfasdfasdf")
            },
            error: function (error) {
            }
        });
}






