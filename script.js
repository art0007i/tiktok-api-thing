query.addEventListener("input", (e)=>{
  const len = e.target.value.length;
  limit.innerText = len;
  if(len > 3000) {
    promt.classList.add("red");
  }else{
    promt.classList.remove("red");
  }
});

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  var formData = new FormData(e.target);
  
  warn.classList.add("invis");
  let data = formData.get("query");//query.value.trim();
  if(data.length === 0){
    data = "The fungus among us.";
  }

  let payload = {"text": data, "voice": formData.get("voice"), "module_version": 2}

  fetch("https://neos-tts.apithis.net/v1/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "tiktok-epic-voice-globalelite2/1.0.0"
    },
    body: JSON.stringify(payload),
  }).then(resp=>{
    if(resp.status != 200){
      warn.classList.remove("invis");
      return;
    }
    resp.text().then(body=>{
      //console.log(body);
      const newItem = templateClip.content.cloneNode(true);
      let idx = body.indexOf("\n")+1
      let idx2 = body.indexOf("\n", idx);
      let url = body.substring(idx, idx2);
      let audioEl = newItem.querySelector('audio');
      newItem.querySelector('span').innerText = body.substring(idx2+1);
      audioEl.src = url;
      clipRoot.insertBefore(newItem, clipRoot.firstChild);
      audioEl.play();
    });
  });
  
  console.log(data);
});

const apiData = {
    "American English": {
      "en_us_002": "Jessie",
      "en_us_006": "Joey",
      "en_us_007": "Professor",
      "en_us_009": "Scientist",
      "en_us_010": "Confidence"
    },
    "British English": {
      "en_uk_001": "Narrator (Chris)",
      "en_uk_003": "UK Male 2"
    },
    "Australian English": {
      "en_au_001": "Metro (Eddie)",
      "en_au_002": "Smooth (Alex)"
    },
    "Special English": {
      "en_female_emotional": "Peaceful",
      "en_female_samc": "Empathetic",
      "en_male_cody": "Serious",
      "en_male_narration": "Story Teller",
      "en_male_funny": "Wacky",
      "en_male_jarvis": "Alfred",
      "en_male_santa_narration": "Author",
      "en_female_betty": "Bae",
      "en_female_makeup": "Beauty Guru",
      "en_female_richgirl": "Bestie",
      "en_male_cupid": "Cupid",
      "en_female_shenna": "Debutante",
      "en_male_ghosthost": "Ghost Host",
      "en_female_grandma": "Grandma",
      "en_male_ukneighbor": "Lord Cringe",
      "en_male_wizard": "Magician",
      "en_male_trevor": "Marty",
      "en_male_deadpool": "Mr. GoodGuy (Deadpool)",
      "en_male_ukbutler": "Mr. Meticulous",
      "en_male_pirate": "Pirate",
      "en_male_santa": "Santa",
      "en_male_santa_effect": "Santa (w/ effect)",
      "en_female_pansino": "Varsity",
      "en_male_grinch": "Trickster (Grinch)",
      "en_us_ghostface": "Ghostface (Scream)",
      "en_us_chewbacca": "Chewbacca (Star Wars)",
      "en_us_c3po": "C-3PO (Star Wars)",
      "en_us_stormtrooper": "Stormtrooper (Star Wars)",
      "en_us_stitch": "Stitch (Lilo & Stitch)",
      "en_us_rocket": "Rocket (Guardians of the Galaxy)",
      "en_female_madam_leota": "Madame Leota (Haunted Mansion)"
    },
    "Singing English": {
      "en_male_sing_deep_jingle": "Song: Caroler",
      "en_male_m03_classical": "Song: Classic Electric",
      "en_female_f08_salut_damour": "Song: Cottagecore (Salut d'Amour)",
      "en_male_m2_xhxs_m03_christmas": "Song: Cozy",
      "en_female_f08_warmy_breeze": "Song: Open Mic (Warmy Breeze)",
      "en_female_ht_f08_halloween": "Song: Opera (Halloween)",
      "en_female_ht_f08_glorious": "Song: Euphoric (Glorious)",
      "en_male_sing_funny_it_goes_up": "Song: Hypetrain (It Goes Up)",
      "en_male_m03_lobby": "Song: Jingle (Lobby)",
      "en_female_ht_f08_wonderful_world": "Song: Melodrama (Wonderful World)",
      "en_female_ht_f08_newyear": "Song: NYE 2023",
      "en_male_sing_funny_thanksgiving": "Song: Thanksgiving",
      "en_male_m03_sunshine_soon": "Song: Toon Beat (Sunshine Soon)",
      "en_female_f08_twinkle": "Song: Pop Lullaby",
      "en_male_m2_xhxs_m03_silly": "Song: Quirky Time"
    },
    "French": {
      "fr_001": "French Male 1",
      "fr_002": "French Male 2"
    },
    "German": {
      "de_001": "German Female",
      "de_002": "German Male"
    },
    "Indonesian": {
      "id_male_darma": "Darma",
      "id_female_icha": "Icha",
      "id_female_noor": "Noor",
      "id_male_putra": "Putra"
    },
    "Italian": {
      "it_male_m18": "Italian Male"
    },
    "Japanese": {
      "jp_001": "Miho (美穂)",
      "jp_003": "Keiko (恵子)",
      "jp_005": "Sakura (さくら)",
      "jp_006": "Naoki (直樹)",
      "jp_male_osada": "モリスケ (Morisuke)",
      "jp_male_matsuo": "モジャオ (Matsuo)",
      "jp_female_machikoriiita": "まちこりーた (Machikoriiita)",
      "jp_male_matsudake": "マツダ家の日常 (Matsudake)",
      "jp_male_shuichiro": "修一朗 (Shuichiro)",
      "jp_female_rei": "丸山礼 (Maruyama Rei)",
      "jp_male_hikakin": "ヒカキン (Hikakin)",
      "jp_female_yagishaki": "八木沙季 (Yagi Saki)"
    },
    "Korean": {
      "kr_002": "Korean Male 1",
      "kr_004": "Korean Male 2",
      "kr_003": "Korean Female"
    },
    "Portuguese": {
      "br_003": "Júlia",
      "br_004": "Ana",
      "br_005": "Lucas",
      "pt_female_lhays": "Lhays Macedo",
      "pt_female_laizza": "Laizza"
    },
    "Spanish": {
      "es_002": "Spanish Male",
      "es_male_m3": "Julio",
      "es_female_f6": "Alejandra",
      "es_female_fp1": "Mariana",
      "es_mx_002": "Álex (Warm)",
      "es_mx_female_supermom": "Super Mamá"
    }
  }

const select = document.getElementById("voice");
let first = true;

for([key,value] of Object.entries(apiData)) {
  if(first) {first = false}
  else {
    var spc = document.createElement("option");
    spc.disabled = true;
    select.appendChild(spc);
  }
  var opt = document.createElement("option");
  opt.classList.add("voiceHead");
  opt.innerText = key;
  opt.disabled = true;
  select.appendChild(opt);
  for([key2,value2] of Object.entries(value)) {
    var opt2 = document.createElement("option");
    opt2.innerText = value2;
    opt2.value = key2;
    select.appendChild(opt2);
  }
}
