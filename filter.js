var isFirst=true
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
        "Price":0,
        "Performance":0
    },
    "Price":
    {
        "Camera":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "Camera Lens":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "Charger/Adapter":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "Controller":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "Desktop PC":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "Docking Station":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "DVD/BluRay Players":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "External Hard Drive":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "External Solid State Drive":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "Game":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "Gaming Console":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "HDMI Cable":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "Headset":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "Keyboard":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "Laptop Charger":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "Monitor":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "Mouse":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "Notebook":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "Notebook Case":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "Printer":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "SD Card":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "Smartphone":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "Speaker":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "Tablet":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "TV":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "USB Cable":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}},
        "USB Flash Drive":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}}
    },
        "Brand":
    {
        "Camera":{},
        "Camera Lens":{},
        "Charger/Adapter":{},
        "Controller":{},
        "Desktop PC":{},
        "Docking Station":{},
        "DVD/BluRay Players":{},
        "External Hard Drive":{},
        "External Solid State Drive":{},
        "Game":{},
        "Gaming Console":{},
        "HDMI Cable":{},
        "Headset":{},
        "Keyboard":{},
        "Laptop Charger":{},
        "Monitor":{},
        "Mouse":{},
        "Notebook":{},
        "Notebook Case":{},
        "Printer":{},
        "SD Card":{},
        "Smartphone":{},
        "Speaker":{},
        "Tablet":{},
        "TV":{},
        "USB Cable":{},
        "USB Flash Drive":{}
    },

        "Performance":
    {
        "Camera":{"RAM":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}}},
        "Camera Lens":{},
        "Charger/Adapter":{},
        "Controller":{},
        "Desktop PC":{"RAM":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}}},
        "Docking Station":{},
        "DVD/BluRay Players":{},
        "External Hard Drive":{"Size":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}}},
        "External Solid State Drive":{"Size":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}}},
        "Game":{},
        "Gaming Console":{},
        "HDMI Cable":{},
        "Headset":{},
        "Keyboard":{},
        "Laptop Charger":{},
        "Monitor":{"Size":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}}},
        "Mouse":{},
        "Notebook":{"RAM":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}}},
        "Notebook Case":{},
        "Printer":{},
        "SD Card":{},
        "Smartphone":{"RAM":{"StdDev":0,"Mean":0,"UpperBound":0,"LowerBound":0,"Count":0,"AvgPriceArray":[],"Box":[],"Brand":{}}},
        "Speaker":{},
        "Tablet":{},
        "TV":{},
        "USB Cable":{},
        "USB Flash Drive":{}
    },

}

function addJSONParameter()
{
   var givenObj=JSON.parse(localStorage['prices'])
   for(category in givenObj["Price"])
   {
    for(var i=0; i<=brands.length-1;++i)
    {
        var givenCompany=brands[i]
        givenObj["Price"][category]["Brand"][givenCompany]={"Count":0}
    }
   }
    localStorage.setItem('prices',JSON.stringify(givenObj))

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
    if(localStorage['prices']==null)
    {
        localStorage.setItem('prices',JSON.stringify(jsonObj))
        isFirst=false
    }

    var typeString = localStorage['ID_type']
    var typeJSON = (JSON.parse(localStorage['prices']));


    typeJSON['Price'][typeString]['AvgPriceArray'].push(x);
    var avgPriceArray=typeJSON['Price'][typeString]['AvgPriceArray'].map(Number)
    typeJSON['Price'][typeString]['Count']=typeJSON['Price'][typeString]['Count']+1;

    var lowerBoundPrice=oneSigmaMinus(avgPriceArray)
    if(lowerBoundPrice<0)
    {
        lowerBoundPrice=0
    }
    var upperBoundPrice=oneSigmaPlus(avgPriceArray)
    typeJSON['Price'][typeString]["UpperBound"]=upperBoundPrice
    typeJSON['Price'][typeString]["LowerBound"]=lowerBoundPrice
    localStorage.setItem('prices',JSON.stringify(typeJSON))

}

function updateBrand(brand,givenType)
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

 function mostUsedBrand(productType)
{
     mostUsed=[]
     if(localStorage['prices']==null)
     {
        return null
     }
     var obj=JSON.parse(localStorage['prices'])
     var brandObj=obj["Price"][productType]["Brand"]
     var arrayBrandObj = Object.keys(brandObj).map(function(key) {
         return [key, brandObj[key].Count];});
     arrayBrandObj=arrayBrandObj.sort((a, b) => a[1] - b[1])
     localStorage['Brand0']=arrayBrandObj[arrayBrandObj.length-1][0]
     localStorage['Brand1']=arrayBrandObj[arrayBrandObj.length-2][0]
     localStorage['Brand2']=arrayBrandObj[arrayBrandObj.length-3][0]
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


function filterCapability(brand,givenType,stat,value)
{
     if(localStorage['prices']==null)
    {
        localStorage.setItem('prices',JSON.stringify(jsonObj))
        isFirst=false
    }

    var typeString = localStorage['ID_type']
    var typeJSON = (JSON.parse(localStorage['prices']));


    typeJSON['Performance'][typeString][stat]['AvgPriceArray'].push(value);
    typeJSON['Performance'][typeString][stat]['Count']=typeJSON['Price'][typeString]['Count']+1;

    var lowerBoundPrice=oneSigmaMinus(avgPriceArray)
    if(lowerBoundPrice<0)
    {
        lowerBoundPrice=0
    }
    var upperBoundPrice=oneSigmaPlus(avgPriceArray)
    typeJSON['Performance'][typeString][stat]["UpperBound"]=upperBoundPrice
    typeJSON['Performance'][typeString][stat]["LowerBound"]=lowerBoundPrice
    localStorage.setItem('prices',JSON.stringify(typeJSON))
}




function customQuery()
{
/*
    if()
    ''/price/1000/5000
*/
}


