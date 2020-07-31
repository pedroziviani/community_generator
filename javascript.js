let status = [
    'Slave',
    'Tenant',
    'Runemaster',
    'Seidkona',
    'Low Status Householder',
    'Low Status Householder',
    'Low Status Householder',
    'High Status Householder',
    'High Status Householder',
    'High Status Householder'
]

let gender = ['M', 'F']

let femaleName = [
    'Dagbjört Eiríkursdóttir',
    'Guðmunda Granisdóttir',
    'Kolbrún Friðgeirsdóttir',
    'Hróðný Sváfnirsdóttir',
    'Gyda Grettirsdóttir',
    'Ástriður Heimirsdóttir',
    'Berglind Þorkellsdóttir',
    'Álfífa Leifursdóttir',
    'Ljót Þorbrandursdóttir',
    'Ýr Valgarðursdóttir',
    'Þórhalla Vöggursdóttir',
    'Jófrídur Sumarliðisdóttir',
    'Lofn Álfgeirsdóttir',
    'Þóra Halfarsdóttir',
    'Æsa Hjörleifursdóttir',
    'Reginleif Erpursdóttir',
    'Véfreyja Ýmirsdóttir',
    'Vildís Skorrisdóttir',
    'Sif Ólafursdóttir',
    'Mjöll Erlendursdóttir',
    'Gerður Högnisdóttir',
    'Eyr Guðmundursdóttir',
    'Oddkatla Sorlisdóttir',
    'Þórdís Hédinnsdóttir',
    'Hildigunna Grímursdóttir',
    'Ásgerður Helgisdóttir',
    'Ölrún Sigmundursdóttir',
    'Helga Einarsdóttir',
    'Ljótunn Hnikarrsdóttir',
    'Hrafnhildur Gissursdóttir',
    'Oddfríður Sigfússdóttir',
    'Hlín Glúmursdóttir',
    'Úlfhildur Fjörnirsdóttir',
    'Snæfríður Hjálmursdóttir',
    'Ásta Atlisdóttir',
    'Sigríður Guttormursdóttir',
    'Gjaflaug Bragisdóttir',
    'Sölva Veturliðisdóttir',
    'Sylgja Gaukursdóttir',
    'Jórunn Skeggisdóttir',
    'Arnþrúður Þráinnsdóttir',
    'Brynhildur Hrappursdóttir',
    'Unnur Geirsdóttir',
    'Herdís Hreinnsdóttir',
    'Rannveig Hrafnsdóttir',
    'Fönn Mársdóttir',
    'Hödd Gellirsdóttir',
    'Ingunn Hafsteinnsdóttir',
    'Þórunn Njállsdóttir',
    'Þuríður Björnsdóttir',
    'Nótt Svanursdóttir',
    'Bergþóra Dufþakursdóttir',
    'Vigdís Gíslisdóttir',
    'Auður Skarpheðinnsdóttir',
    'Eyvör Kjartansdóttir',
    'Halldóra Hallisdóttir',
    'Hrund Flosisdóttir',
    'Sólbjört Þórðursdóttir',
    'Gróa Þórólfursdóttir',
    'Álfdís Friðleifursdóttir',
    'Heiður Þóroddursdóttir',
    'Ingveldur Sturlasdóttir',
    'Valgerður Þjóðólfursdóttir',
    'Ormfríður Egillsdóttir',
    'Dúfa Svartursdóttir',
    'Hallbera Halldorsdóttir',
    'Bót Hallbjörnsdóttir',
    'Hallgerður Völundursdóttir',
    'Iðunn Össursdóttir',
    'Finna Kárisdóttir',
    'Hjördís Þrymursdóttir',
    'Guðrún Úlfursdóttir',
    'Yrsa Eilífursdóttir',
    'Geirþrúður Floggisdóttir',
    'Kneif Fródisdóttir',
    'Hlaðgerður Hreiðarsdóttir',
    'Lofthæna Gunnlaugursdóttir',
    'Álfhildur Þorvarðursdóttir',
    'Birna Haukursdóttir',
    'Ingibjörg Magnússdóttir',
    'Svanhildur Gnúpursdóttir',
    'Ormhildur Ketillsdóttir',
    'Álfheiður Óttarsdóttir',
    'Aldís Reginsdóttir',
    'Áslaug Þorgrímursdóttir',
    'Þorgerður Ísleifursdóttir',
    'Ósk Randversdóttir',
    'Ísgerður Hróarsdóttir',
    'Sæunn Sæmundursdóttir',
    'Gunnur Dýrisdóttir',
    'Katla Haraldursdóttir',
    'Bergdís Gunnarsdóttir',
    'Droplaug Ormursdóttir',
    'Geirríður Harisdóttir',
    'Þrúður Mördursdóttir',
    'Friða Hakisdóttir',
    'Þórfinna Arnþórsdóttir',
    'Álöf Skaftisdóttir',
    'Sælaug Sigurðursdóttir',
    'Una Sveinnsdóttir'
]

let maleName = [
    'Björn Skeggisson',
    'Össur Eiríkursson',
    'Hrappur Hnikarrsson',
    'Ketill Hjálmursson',
    'Þjóðólfur Völundursson',
    'Dufþakur Ormursson',
    'Guttormur Þorvarðursson',
    'Valgarður Flosisson',
    'Geir Leifursson',
    'Halfar Sigfússson',
    'Guðmundur Geirsson',
    'Grímur Svanursson',
    'Haki Þóroddursson',
    'Kjartan Egillsson',
    'Friðleifur Vöggursson',
    'Þorvarður Gíslisson',
    'Hallbjörn Hallisson',
    'Egill Hrappursson',
    'Fjörnir Hreinnsson',
    'Ólafur Njállsson',
    'Gnúpur Ketillsson',
    'Flosi Gunnlaugursson',
    'Sturla Heimirsson',
    'Svartur Hreiðarsson',
    'Hreinn Þórólfursson',
    'Ormur Gunnarsson',
    'Hrafn Fjörnirsson',
    'Þórólfur Guðmundursson',
    'Þorkell Skorrisson',
    'Heimir Gellirsson',
    'Gaukur Atlisson',
    'Svanur Sigmundursson',
    'Sigfús Glúmursson',
    'Haukur Hjörleifursson',
    'Njáll Þrymursson',
    'Bragi Sveinnsson',
    'Ýmir Granisson',
    'Eiríkur Sváfnirsson',
    'Halldor Kárisson',
    'Grani Ýmirsson',
    'Sigurður Sigurðursson',
    'Álfgeir Álfgeirsson',
    'Þórður Mördursson',
    'Þorbrandur Gissursson',
    'Þráinn Helgisson',
    'Dýri Haraldursson',
    'Már Dufþakursson',
    'Erpur Skarpheðinnsson',
    'Fródi Hallbjörnsson',
    'Grettir Þorbrandursson',
    'Gissur Mársson',
    'Sveinn Þorgrímursson',
    'Hari Hédinnsson',
    'Halli Valgarðursson',
    'Völundur Kjartansson',
    'Hjörleifur Sorlisson',
    'Sorli Einarsson',
    'Hróar Arnþórsson',
    'Hafsteinn Halldorsson',
    'Friðgeir Randversson',
    'Hjálmur Hakisson',
    'Sumarliði Þorkellsson',
    'Þrymur Þráinnsson',
    'Glúmur Harisson',
    'Skeggi Hróarsson',
    'Sæmundur Friðleifursson',
    'Regin Eilífursson',
    'Leifur Hafsteinnsson',
    'Magnús Úlfursson',
    'Atli Veturliðisson',
    'Ísleifur Gnúpursson',
    'Úlfur Össursson',
    'Þóroddur Grímursson',
    'Hreiðar Magnússson',
    'Kári Hrafnsson',
    'Gellir Þjóðólfursson',
    'Skarpheðinn Sturlasson',
    'Hédinn Sumarliðisson',
    'Gunnlaugur Gaukursson',
    'Sigmundur Sæmundursson',
    'Floggi Björnsson',
    'Vöggur Halfarsson',
    'Einar Erpursson',
    'Helgi Reginsson',
    'Haraldur Haukursson',
    'Óttar Ólafursson',
    'Sváfnir Floggisson',
    'Eilífur Grettirsson',
    'Gunnar Bragisson',
    'Randver Óttarsson',
    'Veturliði Erlendursson',
    'Þorgrímur Högnisson',
    'Arnþór Skaftisson',
    'Erlendur Friðgeirsson',
    'Skorri Guttormursson',
    'Högni Ísleifursson',
    'Hnikarr Dýrisson',
    'Mördur Fródisson',
    'Gísli Þórðursson',
    'Skafti Svartursson'
]

let nickname = [
    '1. the Proud',
    'the Vile',
    'the Learned',
    'the Excellent',
    'the White',
    'the Unruly',
    'the Red',
    'the Black',
    'the Powerful',
    'the Mighty',
    'the Grey',
    'the Ugly',
    'the Bald-Headed',
    'the Beardless',
    'the Bounteous',
    'the Yeller',
    'the Wise',
    'the Tall',
    'the Short',
    'the Fat',
    'the Slim',
    'the Old',
    'the Squinter',
    'Flatnose',
    'Forkbeard',
    'the Brave',
    'Greycloak',
    'the Fair',
    'the Lucky',
    'the Quiet',
    'Longnose',
    'the Good',
    'Barelegs',
    'Silkbeard',
    'Snake-tongue',
    'Long-Chin',
    'Child-Sparer',
    'the Broad',
    'Ale-Lover',
    'Deep-Minded',
    'the Shifty',
    'the Rash',
    'Oxen-Might',
    'the Peacock',
    'the Coward',
    'Cod-Biter',
    'the Unwashed',
    'the Smooth-Tongued',
    'Hog-Head',
    'Tangle-Hair',
    'Hairy-Cheek',
    'Half-Troll',
    'the Careless',
    'the Elegant',
    'the Walker',
    'Shaggy-Breeches',
    'the Uninspired',
    'Bow-Bender',
    'the Valiant',
    'the Pock-Marked',
    'Horse-Head',
    'Skull-Splitter',
    'Half-Giant',
    'the Generous',
    'The Bellower',
    'Foal-brow',
    'the Lean',
    'Tree-Foot',
    'Night-Wolf',
    'the Filthy',
    'Thunder',
    'Black-Tooth',
    'the Unlucky',
    'the Vicious',
    'Crooked-Nose',
    'Swift-eyed',
    'the Clumsy',
    'Crow-nose',
    'the Troubled',
    'The Timber-quaker',
    'Fairhair',
    'Gold-Beard',
    'the Foolish',
    'Broad-Bearded',
    'Black-Beard',
    'the Far-Travelled',
    'the Sharp',
    'Red-Cloak',
    'the Bow-Swayer',
    'the Barker',
    'Hawk-nose',
    'the Fast-Traveller',
    'the Horn-Breaker',
    'Coal-Brow',
    'the Great-Slasher',
    'the Thin-Bearded',
    'Giant-Destroyer',
    'the Bristle-Bearded',
    'the Dueller ',
    'The Poet'
]

let feature = [
    'Bald',
    'Black hair',
    'Blond hair',
    'Braided hair',
    'Curly hair',
    'Gray hair',
    'Matted hair',
    'Red hair',
    'Shaven head',
    'Very long hair',
    'Birthmark',
    'Broken teeth',
    'Hairy ears',
    'Hooked nose',
    'Large nose',
    'Large ears',
    'Long eyelashes',
    'Pointed chin',
    'Thin lips',
    'Tiny ears',
    'Alluring expression',
    'Arrogant expression',
    'Bright-eyed expression',
    'Curious expression',
    'Dour expression',
    'Friendly expression',
    'Leering expression',
    'Mischievous expression',
    'Naïve expression',
    'Seductive expression',
    'Angry bearing',
    'Clumsy bearing',
    'Confident bearing',
    'Fearful bearing',
    'Graceful bearing',
    'Cheerful bearing',
    'Nimble bearing',
    'Stiff bearing',
    'Swaying bearing',
    'Wary bearing',
    'Accented speech',
    'Aggressive speech',
    'Deep speech',
    'Faint speech',
    'Hard-of-hearing and hence loud',
    'High-pitched speech',
    'Raspy speech',
    'Slow speech',
    'Soft-spoken',
    'Throaty speech',
    'Birthmark visible on arms',
    'Bracelets or other arm jewelry',
    'Bulging biceps',
    'Calloused hands',
    'Left-handed',
    'Long fingernails',
    'Muscular arms',
    'One finger missing',
    'Scar on arm',
    'Very hairy arms'
]

let personality = [
    'Mighty',
    'Steadfast',
    'Spiritual',
    'Wanderer',
    'Cunning',
    'Manipulative'
]

let agilitySkills = [
    'Boat',
    'Climb',
    'Ride',
    'Skii',
    'Swim'
]

let manipulationSkills = [
	'Craft (Brewing)',
	'Craft (Carpentry)',
	'Craft (Leatherworking)',
	'Craft (Ironsmithing)',
	'Craft (Ship-building)',
	'Craft (Weaving)',
	'Melee Weapon (any)',
	'Missile Weapon (any)'
]

let communicationSkills = [
    'Art (Bronze)',
	'Art (Tapestry)',
	'Art (Wood)',
	'Charm',
	'Dance',
	'Fast Talk',
	'Intimidate',
	'Sing',
	'Skaldic Poetry',
	'Speak Other Language'
]

let knowledgeSkills = [
    'Animal Lore',
	'Area Lore (Iceland)',
	'Area Lore (any)',
	'First Aid',
	'Law',
	'Myth Lore',
	'Plant Lore',
	'Read/Write (language)',
	'Shiphandling',
	'Treat Disease'
]

let perceptionAndStealthSkills = [
    'Hide',
	'Insight',
	'Listen',
	'Move Quietly',
	'Scan',
	'Search',
	'Track'
]

let mythicSkills = [
    'Prophecy',
	'Rune Magic',
	'Second Sight',
	'Seidur Magic'
]

let passions = [
    'Loyalty',
    'Love',
    'Hate',
    'Fear',
    'Envy',
    'Oath'
]

let communityNpcs = [
    'NPC #1',
    'NPC #2',
    'NPC #3',
    'NPC #4',
    'NPC #5',
    'NPC #6',
    'NPC #7',
    'NPC #8',
    'NPC #9',
    'Special'
]

let specialNpcs = [
    'Hidden-Person',
    'Troll',
    'Seal-Skin',
    'Raven',
    'Jotun',
    'Merman',
    'Polar Bear',
    'Foreign Berserker',
    'King of Denmark',
    'King of Norway'
]

let oaths = [
    'Alliance',
    'Protection',
    'Secrecy',
    'Debt',
    'Find',
    'Support'
]

let adventurers = [
    'Adventurer #1',
    'Adventurer #2',
    'Adventurer #3',
    'Adventurer #4',
    'Adventurer #5'
]

let motivation = [
    'Get Revenge (against those who ruined my life)',
    'Get Revenge (for the family dishonor)',
    'Get Revenge (against the godi)',
    'Get Revenge (against an outlaw)',
    'Get Revenge (for the killing of my relative)',
    'Get Revenge (for insults against my family)',
    'Get Revenge (against a troll)',
    'Get Revenge (for not being invited to join in a raid)',
    'Get Revenge (for insulting comments)',
    'Get Revenge (against the hideen people)',
    'Gain status (by winning a case at the assembly)',
	'Gain status (by befriending a hidden person)',
	'Gain status (by having a bigger farm)',
	'Gain status (by capturing an outlaw)',
	'Gain status (by acquiring a famous weapon)',
	'Gain status (by winning a duel)',
	'Gain status (by becoming a godi)',
	'Gain status (by finding new land)',
	'Gain status (by slaying a fierce monster)',
    'Gain status (by marrying into a powerful family)',
    'Become wealthy (by going on a Viking raid)',
	'Become wealthy (by taking over a neighbor’s farm)',
	'Become wealthy (by raiding the grave a rich man)',
	'Become wealthy (by serving a foreign king)',
	'Become wealthy (by becoming a great poet)',
	'Become wealthy (by finding buried silver)',
	'Become wealthy (by claiming the bounty on an outlaw)',
	'Become wealthy (by stealing from a foreign king)',
	'Become wealthy (by selling elven treasure)',
    'Become wealthy (by trading with foreigners)',
	'Get away (with murder)',
	'Get away (the people trying to kill me)',
	'Get away (from an oath)',
	'Get away (from Iceland)',
	'Get away (with all the silver)',
	'Get away (from paying a debt owed)',
	'Get away (with an forbidden love affair)',
	'Get away (from my family)',
	'Get away (from the haunting)',
    'Get away (to the hidden world)',
    'Win respect (from my father)',
	'Win respect (from the one I want to marry)',
	'Win respect (from my vengeful neighbors)',
	'Win respect (from the goði)',
	'Win respect (from my family)',
	'Win respect (from the crew of the ship)',
	'Win respect (from the lawspeaker)',
	'Win respect (from the gods)',
	'Win respect (from a foreign king)',
    'Win respect (from my brothers)',
	'Find out (who killed my father / relative)',
	'Find out (how to use rune magic)',
	'Find out (how to use seiður magic)',
	'Find out (the meaning of a dream)',
	'Find out (who the mysterious slave really is)',
	'Find out (who stole my silver)',
	'Find out (who killed my lover)',
	'Find out (how to cure my ilness)',
	'Find out (what lies west of Iceland)',
	'Find out (why my wife/husband left me)'
]

function randomAge(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomGender(status) {
    if (status == 'Seidkona') {
        return 'F';
    } else if (status == 'Runemaster') {
        return 'M';
    } else {
        return gender[Math.floor(Math.random() * (gender.length))];
    }
}

function randomName(gender) {
    if (gender == 'F') {
        return femaleName[Math.floor(Math.random() * (femaleName.length))];
    } else {
        return maleName[Math.floor(Math.random() * (maleName.length))];
    }
}

function randomBestSkill(personality) {
    if (personality == 'Mighty') {
        return agilitySkills[Math.floor(Math.random() * (agilitySkills.length))];
    } else if (personality == 'Steadfast') {
        return manipulationSkills[Math.floor(Math.random() * (manipulationSkills.length))];
    } else if (personality == 'Manipulative') {
        return communicationSkills[Math.floor(Math.random() * (communicationSkills.length))];
    } else if (personality == 'Wanderer') {
        return knowledgeSkills[Math.floor(Math.random() * (knowledgeSkills.length))];
    } else if (personality == 'Cunning') {
        return perceptionAndStealthSkills[Math.floor(Math.random() * (perceptionAndStealthSkills.length))];
    } else if (personality == 'Spiritual') {
        return mythicSkills[Math.floor(Math.random() * (mythicSkills.length))];
    } else {
        return '-';
    }
}

function secondRandomBestSkill(statusPick, bestSkillPick) {
    if (statusPick == 'Runemaster' && bestSkillPick != 'Rune Magic') {
        return 'Rune Magic';
    } else if (statusPick == 'Seidkona' && bestSkillPick != 'Seidur Magic') {
        return 'Seidur Magic';
    } else {
        randomPersonality = personality[Math.floor(Math.random() * (personality.length))];
        return randomBestSkill(randomPersonality);
    }
}

function randomPassion() {
    passion = passions[Math.floor(Math.random() * (passions.length))];
    if (passion == 'Oath') {
        return passion + ': ' + oaths[Math.floor(Math.random() * (oaths.length))];
    } else {
        return passion;
    }
}

function randomNPC(thisNpc) {
    let randomNPCfromList = communityNpcs[Math.floor(Math.random() * (communityNpcs.length))];
    if (randomNPCfromList == 'Special' || randomNPCfromList == thisNpc) {
        return specialNpcs[Math.floor(Math.random() * (specialNpcs.length))];
    } else {
        return randomNPCfromList;
    }
}

function randomSecondNPC(thisNpc,firstNpc) {
    npcArray = removeItem(communityNpcs, firstNpc);
    let randomNPCfromList = npcArray[Math.floor(Math.random() * (npcArray.length))];
    if (randomNPCfromList == 'Special' || randomNPCfromList == thisNpc) {
        return specialNpcs[Math.floor(Math.random() * (specialNpcs.length))];
    } else {
        return randomNPCfromList;
    }
}

function randomSecondAdventurer(firstAdventurer) {
    adventurersArray = removeItem(adventurers, firstAdventurer);
    return adventurersArray[Math.floor(Math.random() * (adventurersArray.length))];
}

function removeItem(array, item) {
    var newArray = array.slice();
    const index = newArray.indexOf(item);
    if (index > -1) {
        newArray.splice(index, 1);
      }
    return newArray;
}

function newNPC() {
    let statusPick = status[Math.floor(Math.random() * (status.length))];
    let genderPick = randomGender(statusPick);
    let agePick = randomAge(11,69);
    let namePick = randomName(genderPick);
    let nicknamePick = nickname[Math.floor(Math.random() * (nickname.length))];
    let featurePick = feature[Math.floor(Math.random() * (feature.length))];
    let personalityPick = personality[Math.floor(Math.random() * (personality.length))];
    let bestSkillPick = randomBestSkill(personalityPick);
    let secondBestSkillPick = secondRandomBestSkill(statusPick,bestSkillPick);
    let firstCommunityPassionPick = randomPassion();
    let secondCommunityPassionPick = randomPassion();
    let firstNpcPick = randomNPC('NPC #1');
    let secondNpcPick = randomSecondNPC('NPC #1',firstNpcPick);
    let firstAdventurerPassionPick = randomPassion();
    let firstAdventurerPick = adventurers[Math.floor(Math.random() * (adventurers.length))];
    let secondAdventurerPassionPick = randomPassion();
    let secondAdventurerPick = randomSecondAdventurer(firstAdventurerPick);
    let motivationPassion = motivation[Math.floor(Math.random() * (motivation.length))];
    document.getElementById('statusDisplay').innerHTML = '<b>Status:</b> ' + statusPick;
    document.getElementById('genderDisplay').innerHTML = '<b>Gender:</b> ' + genderPick;
    document.getElementById('ageDisplay').innerHTML = '<b>Age:</b> ' + agePick;
    document.getElementById('nameDisplay').innerHTML = '<b>Name:</b> ' + namePick;
    document.getElementById('nicknameDisplay').innerHTML = '<b>Nickname:</b> ' + nicknamePick;
    document.getElementById('featureDisplay').innerHTML = '<b>D. Feature:</b> ' + featurePick;
    document.getElementById('personalityDisplay').innerHTML = '<b>Personality:</b> ' + personalityPick;
    document.getElementById('bestSkillDisplay').innerHTML = '<b>Best Skill:</b> ' + bestSkillPick + ' 80%';
    document.getElementById('secondBestSkillDisplay').innerHTML = '<b>2nd Best Skill:</b> ' + secondBestSkillPick + ' 60%';
    document.getElementById('firstCommunityPassionDisplay').innerHTML = firstCommunityPassionPick + ' (' + firstNpcPick + ') 80%';
    document.getElementById('secondCommunityPassionDisplay').innerHTML = secondCommunityPassionPick + ' (' + secondNpcPick + ') 60%';
    document.getElementById('firstAdventurerPassionDisplay').innerHTML = firstAdventurerPassionPick + ' (' + firstAdventurerPick + ') 80%';
    // document.getElementById('secondAdventurerPassionDisplay').innerHTML = '<b>2nd Adventurer Passion:</b> ' + secondAdventurerPassionPick + ' (' + secondAdventurerPick + ') 60%';
    document.getElementById('motivationPassionDisplay').innerHTML = '<b>Motivation:</b> ' + motivationPassion + ' 90%';
}

function newNPCTwo() {
    let statusPick = status[Math.floor(Math.random() * (status.length))];
    let genderPick = randomGender(statusPick);
    let agePick = randomAge(11,69);
    let namePick = randomName(genderPick);
    let nicknamePick = nickname[Math.floor(Math.random() * (nickname.length))];
    let featurePick = feature[Math.floor(Math.random() * (feature.length))];
    let personalityPick = personality[Math.floor(Math.random() * (personality.length))];
    let bestSkillPick = randomBestSkill(personalityPick);
    let secondBestSkillPick = secondRandomBestSkill(statusPick,bestSkillPick);
    let firstCommunityPassionPick = randomPassion();
    let secondCommunityPassionPick = randomPassion();
    let firstNpcPick = randomNPC('NPC #2');
    let secondNpcPick = randomSecondNPC('NPC #2',firstNpcPick);
    let firstAdventurerPassionPick = randomPassion();
    let firstAdventurerPick = adventurers[Math.floor(Math.random() * (adventurers.length))];
    let secondAdventurerPassionPick = randomPassion();
    let secondAdventurerPick = randomSecondAdventurer(firstAdventurerPick);
    let motivationPassion = motivation[Math.floor(Math.random() * (motivation.length))];
    document.getElementById('statusDisplayTwo').innerHTML = '<b>Status:</b> ' + statusPick;
    document.getElementById('genderDisplayTwo').innerHTML = '<b>Gender:</b> ' + genderPick;
    document.getElementById('ageDisplayTwo').innerHTML = '<b>Age:</b> ' + agePick;
    document.getElementById('nameDisplayTwo').innerHTML = '<b>Name:</b> ' + namePick;
    document.getElementById('nicknameDisplayTwo').innerHTML = '<b>Nickname:</b> ' + nicknamePick;
    document.getElementById('featureDisplayTwo').innerHTML = '<b>D. Feature:</b> ' + featurePick;
    document.getElementById('personalityDisplayTwo').innerHTML = '<b>Personality:</b> ' + personalityPick;
    document.getElementById('bestSkillDisplayTwo').innerHTML = '<b>Best Skill:</b> ' + bestSkillPick + ' 80%';
    document.getElementById('secondBestSkillDisplayTwo').innerHTML = '<b>2nd Best Skill:</b> ' + secondBestSkillPick + ' 60%';
    document.getElementById('firstCommunityPassionDisplayTwo').innerHTML = firstCommunityPassionPick + ' (' + firstNpcPick + ') 80%';
    document.getElementById('secondCommunityPassionDisplayTwo').innerHTML = secondCommunityPassionPick + ' (' + secondNpcPick + ') 60%';
    document.getElementById('firstAdventurerPassionDisplayTwo').innerHTML = firstAdventurerPassionPick + ' (' + firstAdventurerPick + ') 80%';
    // document.getElementById('secondAdventurerPassionDisplayTwo').innerHTML = '<b>2nd Adventurer Passion:</b> ' + secondAdventurerPassionPick + ' (' + secondAdventurerPick + ') 60%';
    document.getElementById('motivationPassionDisplayTwo').innerHTML = '<b>Motivation:</b> ' + motivationPassion + ' 90%';
}

function newNPCThree() {
    let statusPick = status[Math.floor(Math.random() * (status.length))];
    let genderPick = randomGender(statusPick);
    let agePick = randomAge(11,69);
    let namePick = randomName(genderPick);
    let nicknamePick = nickname[Math.floor(Math.random() * (nickname.length))];
    let featurePick = feature[Math.floor(Math.random() * (feature.length))];
    let personalityPick = personality[Math.floor(Math.random() * (personality.length))];
    let bestSkillPick = randomBestSkill(personalityPick);
    let secondBestSkillPick = secondRandomBestSkill(statusPick,bestSkillPick);
    let firstCommunityPassionPick = randomPassion();
    let secondCommunityPassionPick = randomPassion();
    let firstNpcPick = randomNPC('NPC #2');
    let secondNpcPick = randomSecondNPC('NPC #2',firstNpcPick);
    let firstAdventurerPassionPick = randomPassion();
    let firstAdventurerPick = adventurers[Math.floor(Math.random() * (adventurers.length))];
    let secondAdventurerPassionPick = randomPassion();
    let secondAdventurerPick = randomSecondAdventurer(firstAdventurerPick);
    let motivationPassion = motivation[Math.floor(Math.random() * (motivation.length))];
    document.getElementById('statusDisplayThree').innerHTML = '<b>Status:</b> ' + statusPick;
    document.getElementById('genderDisplayThree').innerHTML = '<b>Gender:</b> ' + genderPick;
    document.getElementById('ageDisplayThree').innerHTML = '<b>Age:</b> ' + agePick;
    document.getElementById('nameDisplayThree').innerHTML = '<b>Name:</b> ' + namePick;
    document.getElementById('nicknameDisplayThree').innerHTML = '<b>Nickname:</b> ' + nicknamePick;
    document.getElementById('featureDisplayThree').innerHTML = '<b>D. Feature:</b> ' + featurePick;
    document.getElementById('personalityDisplayThree').innerHTML = '<b>Personality:</b> ' + personalityPick;
    document.getElementById('bestSkillDisplayThree').innerHTML = '<b>Best Skill:</b> ' + bestSkillPick + ' 80%';
    document.getElementById('secondBestSkillDisplayThree').innerHTML = '<b>2nd Best Skill:</b> ' + secondBestSkillPick + ' 60%';
    document.getElementById('firstCommunityPassionDisplayThree').innerHTML = firstCommunityPassionPick + ' (' + firstNpcPick + ') 80%';
    document.getElementById('secondCommunityPassionDisplayThree').innerHTML = secondCommunityPassionPick + ' (' + secondNpcPick + ') 60%';
    document.getElementById('firstAdventurerPassionDisplayThree').innerHTML = firstAdventurerPassionPick + ' (' + firstAdventurerPick + ') 80%';
    // document.getElementById('secondAdventurerPassionDisplayThree').innerHTML = '<b>2nd Adventurer Passion:</b> ' + secondAdventurerPassionPick + ' (' + secondAdventurerPick + ') 60%';
    document.getElementById('motivationPassionDisplayThree').innerHTML = '<b>Motivation:</b> ' + motivationPassion + ' 90%';
}

function newNPCFour() {
    let statusPick = status[Math.floor(Math.random() * (status.length))];
    let genderPick = randomGender(statusPick);
    let agePick = randomAge(11,69);
    let namePick = randomName(genderPick);
    let nicknamePick = nickname[Math.floor(Math.random() * (nickname.length))];
    let featurePick = feature[Math.floor(Math.random() * (feature.length))];
    let personalityPick = personality[Math.floor(Math.random() * (personality.length))];
    let bestSkillPick = randomBestSkill(personalityPick);
    let secondBestSkillPick = secondRandomBestSkill(statusPick,bestSkillPick);
    let firstCommunityPassionPick = randomPassion();
    let secondCommunityPassionPick = randomPassion();
    let firstNpcPick = randomNPC('NPC #2');
    let secondNpcPick = randomSecondNPC('NPC #2',firstNpcPick);
    let firstAdventurerPassionPick = randomPassion();
    let firstAdventurerPick = adventurers[Math.floor(Math.random() * (adventurers.length))];
    let secondAdventurerPassionPick = randomPassion();
    let secondAdventurerPick = randomSecondAdventurer(firstAdventurerPick);
    let motivationPassion = motivation[Math.floor(Math.random() * (motivation.length))];
    document.getElementById('statusDisplayFour').innerHTML = '<b>Status:</b> ' + statusPick;
    document.getElementById('genderDisplayFour').innerHTML = '<b>Gender:</b> ' + genderPick;
    document.getElementById('ageDisplayFour').innerHTML = '<b>Age:</b> ' + agePick;
    document.getElementById('nameDisplayFour').innerHTML = '<b>Name:</b> ' + namePick;
    document.getElementById('nicknameDisplayFour').innerHTML = '<b>Nickname:</b> ' + nicknamePick;
    document.getElementById('featureDisplayFour').innerHTML = '<b>D. Feature:</b> ' + featurePick;
    document.getElementById('personalityDisplayFour').innerHTML = '<b>Personality:</b> ' + personalityPick;
    document.getElementById('bestSkillDisplayFour').innerHTML = '<b>Best Skill:</b> ' + bestSkillPick + ' 80%';
    document.getElementById('secondBestSkillDisplayFour').innerHTML = '<b>2nd Best Skill:</b> ' + secondBestSkillPick + ' 60%';
    document.getElementById('firstCommunityPassionDisplayFour').innerHTML = firstCommunityPassionPick + ' (' + firstNpcPick + ') 80%';
    document.getElementById('secondCommunityPassionDisplayFour').innerHTML = secondCommunityPassionPick + ' (' + secondNpcPick + ') 60%';
    document.getElementById('firstAdventurerPassionDisplayFour').innerHTML = firstAdventurerPassionPick + ' (' + firstAdventurerPick + ') 80%';
    // document.getElementById('secondAdventurerPassionDisplayFour').innerHTML = '<b>2nd Adventurer Passion:</b> ' + secondAdventurerPassionPick + ' (' + secondAdventurerPick + ') 60%';
    document.getElementById('motivationPassionDisplayFour').innerHTML = '<b>Motivation:</b> ' + motivationPassion + ' 90%';
}

function newNPCFive() {
    let statusPick = status[Math.floor(Math.random() * (status.length))];
    let genderPick = randomGender(statusPick);
    let agePick = randomAge(11,69);
    let namePick = randomName(genderPick);
    let nicknamePick = nickname[Math.floor(Math.random() * (nickname.length))];
    let featurePick = feature[Math.floor(Math.random() * (feature.length))];
    let personalityPick = personality[Math.floor(Math.random() * (personality.length))];
    let bestSkillPick = randomBestSkill(personalityPick);
    let secondBestSkillPick = secondRandomBestSkill(statusPick,bestSkillPick);
    let firstCommunityPassionPick = randomPassion();
    let secondCommunityPassionPick = randomPassion();
    let firstNpcPick = randomNPC('NPC #2');
    let secondNpcPick = randomSecondNPC('NPC #2',firstNpcPick);
    let firstAdventurerPassionPick = randomPassion();
    let firstAdventurerPick = adventurers[Math.floor(Math.random() * (adventurers.length))];
    let secondAdventurerPassionPick = randomPassion();
    let secondAdventurerPick = randomSecondAdventurer(firstAdventurerPick);
    let motivationPassion = motivation[Math.floor(Math.random() * (motivation.length))];
    document.getElementById('statusDisplayFive').innerHTML = '<b>Status:</b> ' + statusPick;
    document.getElementById('genderDisplayFive').innerHTML = '<b>Gender:</b> ' + genderPick;
    document.getElementById('ageDisplayFive').innerHTML = '<b>Age:</b> ' + agePick;
    document.getElementById('nameDisplayFive').innerHTML = '<b>Name:</b> ' + namePick;
    document.getElementById('nicknameDisplayFive').innerHTML = '<b>Nickname:</b> ' + nicknamePick;
    document.getElementById('featureDisplayFive').innerHTML = '<b>D. Feature:</b> ' + featurePick;
    document.getElementById('personalityDisplayFive').innerHTML = '<b>Personality:</b> ' + personalityPick;
    document.getElementById('bestSkillDisplayFive').innerHTML = '<b>Best Skill:</b> ' + bestSkillPick + ' 80%';
    document.getElementById('secondBestSkillDisplayFive').innerHTML = '<b>2nd Best Skill:</b> ' + secondBestSkillPick + ' 60%';
    document.getElementById('firstCommunityPassionDisplayFive').innerHTML = firstCommunityPassionPick + ' (' + firstNpcPick + ') 80%';
    document.getElementById('secondCommunityPassionDisplayFive').innerHTML = secondCommunityPassionPick + ' (' + secondNpcPick + ') 60%';
    document.getElementById('firstAdventurerPassionDisplayFive').innerHTML = firstAdventurerPassionPick + ' (' + firstAdventurerPick + ') 80%';
    // document.getElementById('secondAdventurerPassionDisplayFive').innerHTML = '<b>2nd Adventurer Passion:</b> ' + secondAdventurerPassionPick + ' (' + secondAdventurerPick + ') 60%';
    document.getElementById('motivationPassionDisplayFive').innerHTML = '<b>Motivation:</b> ' + motivationPassion + ' 90%';
}

function newNPCSix() {
    let statusPick = status[Math.floor(Math.random() * (status.length))];
    let genderPick = randomGender(statusPick);
    let agePick = randomAge(11,69);
    let namePick = randomName(genderPick);
    let nicknamePick = nickname[Math.floor(Math.random() * (nickname.length))];
    let featurePick = feature[Math.floor(Math.random() * (feature.length))];
    let personalityPick = personality[Math.floor(Math.random() * (personality.length))];
    let bestSkillPick = randomBestSkill(personalityPick);
    let secondBestSkillPick = secondRandomBestSkill(statusPick,bestSkillPick);
    let firstCommunityPassionPick = randomPassion();
    let secondCommunityPassionPick = randomPassion();
    let firstNpcPick = randomNPC('NPC #2');
    let secondNpcPick = randomSecondNPC('NPC #2',firstNpcPick);
    let firstAdventurerPassionPick = randomPassion();
    let firstAdventurerPick = adventurers[Math.floor(Math.random() * (adventurers.length))];
    let secondAdventurerPassionPick = randomPassion();
    let secondAdventurerPick = randomSecondAdventurer(firstAdventurerPick);
    let motivationPassion = motivation[Math.floor(Math.random() * (motivation.length))];
    document.getElementById('statusDisplaySix').innerHTML = '<b>Status:</b> ' + statusPick;
    document.getElementById('genderDisplaySix').innerHTML = '<b>Gender:</b> ' + genderPick;
    document.getElementById('ageDisplaySix').innerHTML = '<b>Age:</b> ' + agePick;
    document.getElementById('nameDisplaySix').innerHTML = '<b>Name:</b> ' + namePick;
    document.getElementById('nicknameDisplaySix').innerHTML = '<b>Nickname:</b> ' + nicknamePick;
    document.getElementById('featureDisplaySix').innerHTML = '<b>D. Feature:</b> ' + featurePick;
    document.getElementById('personalityDisplaySix').innerHTML = '<b>Personality:</b> ' + personalityPick;
    document.getElementById('bestSkillDisplaySix').innerHTML = '<b>Best Skill:</b> ' + bestSkillPick + ' 80%';
    document.getElementById('secondBestSkillDisplaySix').innerHTML = '<b>2nd Best Skill:</b> ' + secondBestSkillPick + ' 60%';
    document.getElementById('firstCommunityPassionDisplaySix').innerHTML = firstCommunityPassionPick + ' (' + firstNpcPick + ') 80%';
    document.getElementById('secondCommunityPassionDisplaySix').innerHTML = secondCommunityPassionPick + ' (' + secondNpcPick + ') 60%';
    document.getElementById('firstAdventurerPassionDisplaySix').innerHTML = firstAdventurerPassionPick + ' (' + firstAdventurerPick + ') 80%';
    // document.getElementById('secondAdventurerPassionDisplaySix').innerHTML = '<b>2nd Adventurer Passion:</b> ' + secondAdventurerPassionPick + ' (' + secondAdventurerPick + ') 60%';
    document.getElementById('motivationPassionDisplaySix').innerHTML = '<b>Motivation:</b> ' + motivationPassion + ' 90%';
}

function newNPCSeven() {
    let statusPick = status[Math.floor(Math.random() * (status.length))];
    let genderPick = randomGender(statusPick);
    let agePick = randomAge(11,69);
    let namePick = randomName(genderPick);
    let nicknamePick = nickname[Math.floor(Math.random() * (nickname.length))];
    let featurePick = feature[Math.floor(Math.random() * (feature.length))];
    let personalityPick = personality[Math.floor(Math.random() * (personality.length))];
    let bestSkillPick = randomBestSkill(personalityPick);
    let secondBestSkillPick = secondRandomBestSkill(statusPick,bestSkillPick);
    let firstCommunityPassionPick = randomPassion();
    let secondCommunityPassionPick = randomPassion();
    let firstNpcPick = randomNPC('NPC #2');
    let secondNpcPick = randomSecondNPC('NPC #2',firstNpcPick);
    let firstAdventurerPassionPick = randomPassion();
    let firstAdventurerPick = adventurers[Math.floor(Math.random() * (adventurers.length))];
    let secondAdventurerPassionPick = randomPassion();
    let secondAdventurerPick = randomSecondAdventurer(firstAdventurerPick);
    let motivationPassion = motivation[Math.floor(Math.random() * (motivation.length))];
    document.getElementById('statusDisplaySeven').innerHTML = '<b>Status:</b> ' + statusPick;
    document.getElementById('genderDisplaySeven').innerHTML = '<b>Gender:</b> ' + genderPick;
    document.getElementById('ageDisplaySeven').innerHTML = '<b>Age:</b> ' + agePick;
    document.getElementById('nameDisplaySeven').innerHTML = '<b>Name:</b> ' + namePick;
    document.getElementById('nicknameDisplaySeven').innerHTML = '<b>Nickname:</b> ' + nicknamePick;
    document.getElementById('featureDisplaySeven').innerHTML = '<b>D. Feature:</b> ' + featurePick;
    document.getElementById('personalityDisplaySeven').innerHTML = '<b>Personality:</b> ' + personalityPick;
    document.getElementById('bestSkillDisplaySeven').innerHTML = '<b>Best Skill:</b> ' + bestSkillPick + ' 80%';
    document.getElementById('secondBestSkillDisplaySeven').innerHTML = '<b>2nd Best Skill:</b> ' + secondBestSkillPick + ' 60%';
    document.getElementById('firstCommunityPassionDisplaySeven').innerHTML = firstCommunityPassionPick + ' (' + firstNpcPick + ') 80%';
    document.getElementById('secondCommunityPassionDisplaySeven').innerHTML = secondCommunityPassionPick + ' (' + secondNpcPick + ') 60%';
    document.getElementById('firstAdventurerPassionDisplaySeven').innerHTML = firstAdventurerPassionPick + ' (' + firstAdventurerPick + ') 80%';
    // document.getElementById('secondAdventurerPassionDisplaySeven').innerHTML = '<b>2nd Adventurer Passion:</b> ' + secondAdventurerPassionPick + ' (' + secondAdventurerPick + ') 60%';
    document.getElementById('motivationPassionDisplaySeven').innerHTML = '<b>Motivation:</b> ' + motivationPassion + ' 90%';
}

function newNPCEight() {
    let statusPick = status[Math.floor(Math.random() * (status.length))];
    let genderPick = randomGender(statusPick);
    let agePick = randomAge(11,69);
    let namePick = randomName(genderPick);
    let nicknamePick = nickname[Math.floor(Math.random() * (nickname.length))];
    let featurePick = feature[Math.floor(Math.random() * (feature.length))];
    let personalityPick = personality[Math.floor(Math.random() * (personality.length))];
    let bestSkillPick = randomBestSkill(personalityPick);
    let secondBestSkillPick = secondRandomBestSkill(statusPick,bestSkillPick);
    let firstCommunityPassionPick = randomPassion();
    let secondCommunityPassionPick = randomPassion();
    let firstNpcPick = randomNPC('NPC #2');
    let secondNpcPick = randomSecondNPC('NPC #2',firstNpcPick);
    let firstAdventurerPassionPick = randomPassion();
    let firstAdventurerPick = adventurers[Math.floor(Math.random() * (adventurers.length))];
    let secondAdventurerPassionPick = randomPassion();
    let secondAdventurerPick = randomSecondAdventurer(firstAdventurerPick);
    let motivationPassion = motivation[Math.floor(Math.random() * (motivation.length))];
    document.getElementById('statusDisplayEight').innerHTML = '<b>Status:</b> ' + statusPick;
    document.getElementById('genderDisplayEight').innerHTML = '<b>Gender:</b> ' + genderPick;
    document.getElementById('ageDisplayEight').innerHTML = '<b>Age:</b> ' + agePick;
    document.getElementById('nameDisplayEight').innerHTML = '<b>Name:</b> ' + namePick;
    document.getElementById('nicknameDisplayEight').innerHTML = '<b>Nickname:</b> ' + nicknamePick;
    document.getElementById('featureDisplayEight').innerHTML = '<b>D. Feature:</b> ' + featurePick;
    document.getElementById('personalityDisplayEight').innerHTML = '<b>Personality:</b> ' + personalityPick;
    document.getElementById('bestSkillDisplayEight').innerHTML = '<b>Best Skill:</b> ' + bestSkillPick + ' 80%';
    document.getElementById('secondBestSkillDisplayEight').innerHTML = '<b>2nd Best Skill:</b> ' + secondBestSkillPick + ' 60%';
    document.getElementById('firstCommunityPassionDisplayEight').innerHTML = firstCommunityPassionPick + ' (' + firstNpcPick + ') 80%';
    document.getElementById('secondCommunityPassionDisplayEight').innerHTML = secondCommunityPassionPick + ' (' + secondNpcPick + ') 60%';
    document.getElementById('firstAdventurerPassionDisplayEight').innerHTML = firstAdventurerPassionPick + ' (' + firstAdventurerPick + ') 80%';
    // document.getElementById('secondAdventurerPassionDisplayEight').innerHTML = '<b>2nd Adventurer Passion:</b> ' + secondAdventurerPassionPick + ' (' + secondAdventurerPick + ') 60%';
    document.getElementById('motivationPassionDisplayEight').innerHTML = '<b>Motivation:</b> ' + motivationPassion + ' 90%';
}

function newNPCNine() {
    let statusPick = status[Math.floor(Math.random() * (status.length))];
    let genderPick = randomGender(statusPick);
    let agePick = randomAge(11,69);
    let namePick = randomName(genderPick);
    let nicknamePick = nickname[Math.floor(Math.random() * (nickname.length))];
    let featurePick = feature[Math.floor(Math.random() * (feature.length))];
    let personalityPick = personality[Math.floor(Math.random() * (personality.length))];
    let bestSkillPick = randomBestSkill(personalityPick);
    let secondBestSkillPick = secondRandomBestSkill(statusPick,bestSkillPick);
    let firstCommunityPassionPick = randomPassion();
    let secondCommunityPassionPick = randomPassion();
    let firstNpcPick = randomNPC('NPC #2');
    let secondNpcPick = randomSecondNPC('NPC #2',firstNpcPick);
    let firstAdventurerPassionPick = randomPassion();
    let firstAdventurerPick = adventurers[Math.floor(Math.random() * (adventurers.length))];
    let secondAdventurerPassionPick = randomPassion();
    let secondAdventurerPick = randomSecondAdventurer(firstAdventurerPick);
    let motivationPassion = motivation[Math.floor(Math.random() * (motivation.length))];
    document.getElementById('statusDisplayNine').innerHTML = '<b>Status:</b> ' + statusPick;
    document.getElementById('genderDisplayNine').innerHTML = '<b>Gender:</b> ' + genderPick;
    document.getElementById('ageDisplayNine').innerHTML = '<b>Age:</b> ' + agePick;
    document.getElementById('nameDisplayNine').innerHTML = '<b>Name:</b> ' + namePick;
    document.getElementById('nicknameDisplayNine').innerHTML = '<b>Nickname:</b> ' + nicknamePick;
    document.getElementById('featureDisplayNine').innerHTML = '<b>D. Feature:</b> ' + featurePick;
    document.getElementById('personalityDisplayNine').innerHTML = '<b>Personality:</b> ' + personalityPick;
    document.getElementById('bestSkillDisplayNine').innerHTML = '<b>Best Skill:</b> ' + bestSkillPick + ' 80%';
    document.getElementById('secondBestSkillDisplayNine').innerHTML = '<b>2nd Best Skill:</b> ' + secondBestSkillPick + ' 60%';
    document.getElementById('firstCommunityPassionDisplayNine').innerHTML = firstCommunityPassionPick + ' (' + firstNpcPick + ') 80%';
    document.getElementById('secondCommunityPassionDisplayNine').innerHTML = secondCommunityPassionPick + ' (' + secondNpcPick + ') 60%';
    document.getElementById('firstAdventurerPassionDisplayNine').innerHTML = firstAdventurerPassionPick + ' (' + firstAdventurerPick + ') 80%';
    // document.getElementById('secondAdventurerPassionDisplayNine').innerHTML = '<b>2nd Adventurer Passion:</b> ' + secondAdventurerPassionPick + ' (' + secondAdventurerPick + ') 60%';
    document.getElementById('motivationPassionDisplayNine').innerHTML = '<b>Motivation:</b> ' + motivationPassion + ' 90%';
}