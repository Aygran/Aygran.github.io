function updateModifiers() {
  // Convert ability scores into modifiers.
  
  // Arcane Score
  var arcScore = document.getElementById("arcScore").value;
  document.getElementById("arcMod").value = Math.floor((arcScore - 10)/2);
  
  // Charisma Score
  var chaScore = document.getElementById("chaScore").value;
  document.getElementById("chaMod").value = Math.floor((chaScore - 10)/2);
  
  // Constitution Score
  var conScore = document.getElementById("conScore").value;
  document.getElementById("conMod").value = Math.floor((conScore - 10)/2);
  
  // Dexterity Score
  var dexScore = document.getElementById("dexScore").value;
  document.getElementById("dexMod").value = Math.floor((dexScore - 10)/2);
  
  // Strength Score
  var strScore = document.getElementById("strScore").value;
  document.getElementById("strMod").value = Math.floor((strScore - 10)/2);
  
  // Wisdom Score
  var wisScore = document.getElementById("wisScore").value;
  document.getElementById("wisMod").value = Math.floor((wisScore - 10)/2);
  
  setSkills();
  equipArmor(equippedArmor);
  equipShield(equipShield);
  setAbilities();
}

function updateTreePoints() {
  // Updates Tree Points 2 per level.
  
  var playerLevel = document.getElementById("playerLevel").value;
  
  if (playerLevel >= 2) {
    document.getElementById("treePoints").value = Math.floor((playerLevel * 2) + 1); 
  } else if (playerLevel == 1) {
    document.getElementById("treePoints").value = 3;
  }  
}

function setSkills() {
  var arcMod = parseInt(document.getElementById("arcMod").value);
  var chaMod = parseInt(document.getElementById("chaMod").value);
  var conMod = parseInt(document.getElementById("conMod").value);
  var dexMod = parseInt(document.getElementById("dexMod").value);
  var strMod = parseInt(document.getElementById("strMod").value);
  var wisMod = parseInt(document.getElementById("wisMod").value);
  
  // Athletics Mastery
  if (document.getElementById("athlMast").checked == true) {
    document.getElementById("athlScore").value = Math.floor(strMod + 12);
  } else if (document.getElementById("athlVete").checked == true) {
    document.getElementById("athlScore").value = Math.floor(strMod + 8);
  } else if (document.getElementById("athlJour").checked == true) {
    document.getElementById("athlScore").value = Math.floor(strMod + 4);
  } else if (document.getElementById("athlKnow").checked == true) {
    document.getElementById("athlScore").value = Math.floor(strMod + 2);
  } else {
    document.getElementById("athlScore").value = strMod;
  }
  
  // Crafting Mastery
    if (document.getElementById("crafMast").checked == true) {
    document.getElementById("crafScore").value = Math.floor(wisMod + 12);
  } else if (document.getElementById("crafVete").checked == true) {
    document.getElementById("crafScore").value = Math.floor(wisMod + 8);
  } else if (document.getElementById("crafJour").checked == true) {
    document.getElementById("crafScore").value = Math.floor(wisMod + 4);
  } else if (document.getElementById("crafKnow").checked == true) {
    document.getElementById("crafScore").value = Math.floor(wisMod + 2);
  } else {
    document.getElementById("crafScore").value = wisMod;
  }
  
  // Diplomacy Mastery
  if (document.getElementById("diplMast").checked == true) {
    document.getElementById("diplScore").value = Math.floor(chaMod + 12);
  } else if (document.getElementById("diplVete").checked == true) {
    document.getElementById("diplScore").value = Math.floor(chaMod + 8);
  } else if (document.getElementById("diplJour").checked == true) {
    document.getElementById("diplScore").value = Math.floor(chaMod + 4);
  } else if (document.getElementById("diplKnow").checked == true) {
    document.getElementById("diplScore").value = Math.floor(chaMod + 2);
  } else {
    document.getElementById("diplScore").value = chaMod;
  }
  
  // Deception Mastery
  if (document.getElementById("deceMast").checked == true) {
    document.getElementById("deceScore").value = Math.floor(chaMod + 12);
  } else if (document.getElementById("deceVete").checked == true) {
    document.getElementById("deceScore").value = Math.floor(chaMod + 8);
  } else if (document.getElementById("deceJour").checked == true) {
    document.getElementById("deceScore").value = Math.floor(chaMod + 4);
  } else if (document.getElementById("deceKnow").checked == true) {
    document.getElementById("deceScore").value = Math.floor(chaMod + 2);
  } else {
    document.getElementById("deceScore").value = chaMod;
  }
  
  // Guile Mastery
  if (document.getElementById("guilMast").checked == true) {
    document.getElementById("guilScore").value = Math.floor(dexMod + 12);
  } else if (document.getElementById("guilVete").checked == true) {
    document.getElementById("guilScore").value = Math.floor(dexMod + 8);
  } else if (document.getElementById("guilJour").checked == true) {
    document.getElementById("guilScore").value = Math.floor(dexMod + 4);
  } else if (document.getElementById("guilKnow").checked == true) {
    document.getElementById("guilScore").value = Math.floor(dexMod + 2);
  } else {
    document.getElementById("guilScore").value = dexMod;
  }
  
  // Healing Mastery
  if (document.getElementById("healMast").checked == true) {
    document.getElementById("healScore").value = Math.floor(wisMod + 12);
  } else if (document.getElementById("healVete").checked == true) {
    document.getElementById("healScore").value = Math.floor(wisMod + 8);
  } else if (document.getElementById("healJour").checked == true) {
    document.getElementById("healScore").value = Math.floor(wisMod + 4);
  } else if (document.getElementById("healKnow").checked == true) {
    document.getElementById("healScore").value = Math.floor(wisMod + 2);
  } else {
    document.getElementById("healScore").value = wisMod;
  }
  
  // Hunting Mastery
  if (document.getElementById("huntMast").checked == true) {
    document.getElementById("huntScore").value = Math.floor(dexMod + 12);
  } else if (document.getElementById("huntVete").checked == true) {
    document.getElementById("huntScore").value = Math.floor(dexMod + 8);
  } else if (document.getElementById("huntJour").checked == true) {
    document.getElementById("huntScore").value = Math.floor(dexMod + 4);
  } else if (document.getElementById("huntKnow").checked == true) {
    document.getElementById("huntScore").value = Math.floor(dexMod + 2);
  } else {
    document.getElementById("huntScore").value = dexMod;
  }
  
  // Intuition Mastery
  if (document.getElementById("intuMast").checked == true) {
    document.getElementById("intuScore").value = Math.floor(wisMod + 12);
  } else if (document.getElementById("intuVete").checked == true) {
    document.getElementById("intuScore").value = Math.floor(wisMod + 8);
  } else if (document.getElementById("intuJour").checked == true) {
    document.getElementById("intuScore").value = Math.floor(wisMod + 4);
  } else if (document.getElementById("intuKnow").checked == true) {
    document.getElementById("intuScore").value = Math.floor(wisMod + 2);
  } else {
    document.getElementById("intuScore").value = wisMod;
  }
  
  // Lore Mastery
  if (document.getElementById("loreMast").checked == true) {
    document.getElementById("loreScore").value = Math.floor(arcMod + 12);
  } else if (document.getElementById("loreVete").checked == true) {
    document.getElementById("loreScore").value = Math.floor(arcMod + 8);
  } else if (document.getElementById("loreJour").checked == true) {
    document.getElementById("loreScore").value = Math.floor(arcMod + 4);
  } else if (document.getElementById("loreKnow").checked == true) {
    document.getElementById("loreScore").value = Math.floor(arcMod + 2);
  } else {
    document.getElementById("loreScore").value = arcMod;
  }
  
  // Perception Mastery
  if (document.getElementById("percMast").checked == true) {
    document.getElementById("percScore").value = Math.floor(wisMod + 12);
  } else if (document.getElementById("percVete").checked == true) {
    document.getElementById("percScore").value = Math.floor(wisMod + 8);
  } else if (document.getElementById("percJour").checked == true) {
    document.getElementById("percScore").value = Math.floor(wisMod + 4);
  } else if (document.getElementById("percKnow").checked == true) {
    document.getElementById("percScore").value = Math.floor(wisMod + 2);
  } else {
    document.getElementById("percScore").value = wisMod;
  }
  
  // Prowess Mastery
  if (document.getElementById("prowMast").checked == true) {
    document.getElementById("prowScore").value = Math.floor(strMod + 12);
  } else if (document.getElementById("prowVete").checked == true) {
    document.getElementById("prowScore").value = Math.floor(strMod + 8);
  } else if (document.getElementById("prowJour").checked == true) {
    document.getElementById("prowScore").value = Math.floor(strMod + 4);
  } else if (document.getElementById("prowKnow").checked == true) {
    document.getElementById("prowScore").value = Math.floor(strMod + 2);
  } else {
    document.getElementById("prowScore").value = strMod;
  }
  
  // Machinery Mastery
  if (document.getElementById("machMast").checked == true) {
    document.getElementById("machScore").value = Math.floor(arcMod + 12);
  } else if (document.getElementById("machVete").checked == true) {
    document.getElementById("machScore").value = Math.floor(arcMod + 8);
  } else if (document.getElementById("machJour").checked == true) {
    document.getElementById("machScore").value = Math.floor(arcMod + 4);
  } else if (document.getElementById("machKnow").checked == true) {
    document.getElementById("machScore").value = Math.floor(arcMod + 2);
  } else {
    document.getElementById("machScore").value = arcMod;
  }
  
  // Song & Story Mastery
  if (document.getElementById("songMast").checked == true) {
    document.getElementById("songScore").value = Math.floor(chaMod + 12);
  } else if (document.getElementById("songVete").checked == true) {
    document.getElementById("songScore").value = Math.floor(chaMod + 8);
  } else if (document.getElementById("songJour").checked == true) {
    document.getElementById("songScore").value = Math.floor(chaMod + 4);
  } else if (document.getElementById("songKnow").checked == true) {
    document.getElementById("songScore").value = Math.floor(chaMod + 2);
  } else {
    document.getElementById("songScore").value = chaMod;
  }
  
  // Stealth Mastery
  if (document.getElementById("steaMast").checked == true) {
    document.getElementById("steaScore").value = Math.floor(dexMod + 12);
  } else if (document.getElementById("steaVete").checked == true) {
    document.getElementById("steaScore").value = Math.floor(dexMod + 8);
  } else if (document.getElementById("steaJour").checked == true) {
    document.getElementById("steaScore").value = Math.floor(dexMod + 4);
  } else if (document.getElementById("steaKnow").checked == true) {
    document.getElementById("steaScore").value = Math.floor(dexMod + 2);
  } else {
    document.getElementById("steaScore").value = dexMod;
  }
  
}

function equipArmor(equippedArmor) {
  var armor = equippedArmor.value;
  
  if (armor == "noArmor") {
    document.getElementById("armorValue").value = parseInt(document.getElementById("conMod").value) + 5;
  } else if (armor == "peasentsCloths") {
    document.getElementById("armorValue").value = parseInt(document.getElementById("dexMod").value) + 7;
  } else if (armor == "necromancerGarb") {
    document.getElementById("armorValue").value = parseInt(document.getElementById("chaMod").value) + 7;
  } else if (armor == "wizardRobes") {
    document.getElementById("armorValue").value = parseInt(document.getElementById("arcMod").value) + 7;
  } else if (armor == "monkVestaments") {
    document.getElementById("armorValue").value = parseInt(document.getElementById("dexMod").value) + 7;
  } else if (armor == "gambesonArmor") {
    document.getElementById("armorValue").value = parseInt(document.getElementById("dexMod").value) + 8;
  } else if (armor == "blackleatherArmor") {
    document.getElementById("armorValue").value = parseInt(document.getElementById("dexMod").value) + 9;
  } else if (armor == "berserkersRaiment") {
    document.getElementById("armorValue").value = parseInt(document.getElementById("strMod").value) + 8;
  } else if (armor == "holyArmaments") {
    document.getElementById("armorValue").value = parseInt(document.getElementById("wisMod").value) + 8;
  } else if (armor == "bardicAtire") {
    document.getElementById("armorValue").value = parseInt(document.getElementById("chaMod").value) + 8;
  } else if (armor == "peltsAndFurs") {
    document.getElementById("armorValue").value = parseInt(document.getElementById("wisMod").value) + 8;
  } else if (armor == "sellswordArmor") {
    document.getElementById("armorValue").value = parseInt(document.getElementById("conMod").value) + 9;
  } else if (armor == "battlemagePlate") {
    document.getElementById("armorValue").value = parseInt(document.getElementById("arcMod").value) + 9;
  } else if (armor == "chainHauberk") {
    document.getElementById("armorValue").value = 11;
  } else if (armor == "brigandine") {
    document.getElementById("armorValue").value = 13;
  } else if (armor == "halfPlateArmor") {
    document.getElementById("armorValue").value = 15;
  } else if (armor == "deathKnightRaiment") {
    document.getElementById("armorValue").value = parseInt(document.getElementById("arcMod").value) + 13;
  } else if (armor == "paladinsFullArmor") {
    document.getElementById("armorValue").value = parseInt(document.getElementById("wisMod").value) + 13;
  } else if (armor == "knightsFullPlate") {
    document.getElementById("armorValue").value = parseInt(document.getElementById("strMod").value) + 13;
  }
  
  equipShield(equipShield);
  
}

function equipShield(equipShield) {
  var shield = equipShield.value;
  
  if (shield == "noShield") {
    equipArmor(equippedArmor);
  } else if (shield == "buckler") {
    document.getElementById("armorValue").value = parseInt(document.getElementById("armorValue").value) + 2;
  } else if (shield == "parryingBuckler") {
    document.getElementById("armorValue").value = parseInt(document.getElementById("armorValue").value) + 2;
  } else if (shield == "heaterShield") {
    document.getElementById("armorValue").value = parseInt(document.getElementById("armorValue").value) + 3;
  } else if (shield == "towerShield") {
    document.getElementById("armorValue").value = parseInt(document.getElementById("armorValue").value) + 4;
  }
  
}

function equipWeapon1(equipWeapon1) {
  var weapon1 = equipWeapon1.value;
}

function setAbilities() {
  var arcMod = parseInt(document.getElementById("arcMod").value);
  var chaMod = parseInt(document.getElementById("chaMod").value);
  var conMod = parseInt(document.getElementById("conMod").value);
  var dexMod = parseInt(document.getElementById("dexMod").value);
  var strMod = parseInt(document.getElementById("strMod").value);
  var wisMod = parseInt(document.getElementById("wisMod").value);
  
  var abilityOne = document.getElementById("abilityOne").value
  
  document.getElementById("eleBoltHit").value = arcMod
  document.getElementById("eleBoltDam").value = arcMod
  
}

function playerLevelChange() {
  updateTreePoints();
  updateModifiers();
  setSkills();
  equipArmor(equippedArmor);
  equipShield(equippedShield);
  setAbilities();
}