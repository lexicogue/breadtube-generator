const philosophies = [
  {
    name: "Liberalism",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587452562/dems-logo_ts8c8r.png",
  },
  {
    name: "Marxism",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587449990/karl-marx-the-communist-manifesto-theses-on-feuerbach-marxism-socialism-others_hrge9t-removebg-preview_rryaa2.png",
  },
  {
    name: "Strasserism",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587429308/Gregor-Strasser_fu20ab.jpg",
  },
  {
    name: "Utilitarianism",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587429389/John_Stuart_Mill_by_London_Stereoscopic_Company_2C_c1870_wsxbhm.jpg",
  },
  {
    name: "Postmodernism",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587429659/Foucault8_zq5v7m.gif",
  },
  {
    name: "Aristotle",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587450423/Aristotle_transparent_yi8sbc.png",
  },
  {
    name: "Capitalism",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587429912/monopoly-man-png-3_ldcxzt.png",
  },
  {
    name: "Anarcho-Syndicalism",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587449227/423-4237605_anarchy-symbol-transparent-background-removebg-preview_rgj8va.png",
  },
  {
    name: "Paganism",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587448695/134-1348490_pentagram-pentacle-wicca-symbol-satanism-pentagram-symbol-hd_s2po5u-removebg-preview_qvmz2c.png",
  },
  {
    name: "Noam Chomsky",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587430366/CDI2017_NoamChomsky_dcsfx2.png",
  },
  {
    name: "Feminism",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587454153/459-4591184_feminismo-feminista-feminist-symbol-simbolo-girl-white-feminist-removebg-preview_eex4as.png",
  },
  {
    name: "Veganism",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587449785/65-651627_vegan-logo-png-transparent-background-vegan-symbol-transparent-removebg-preview_thitf8.png",
  },
  {
    name: "Libertarianism",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587430964/1200px-Gadsden_flag.svg_fal7qd.png",
  },
  {
    name: "Individualism",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587452279/kisspng-individualism-collectivism-individualism-colle-amerika-niversite-bu-yazy-okumadan-gelece-5b6f7e39c27411-removebg-preview_bmtbuu.png",
  },
  {
    name: "Populism",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587432517/0ebfce38-d484-11e9-8367-807ebd53ab77_i6ozih.png",
  },
  {
    name: "Social Justice",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587454336/335-3351471_social-justice-png-transparent-png_k9y46t-removebg-preview_l0scqg.png",
  },
  {
    name: "Nationalism",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587432714/donald-trump-nationalism_nycm9w.jpg",
  },
  {
    name: "Jordan Peterson",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587432871/jordan-peterson-png-5_hfvior.png",
  },
  {
    name: "Maoism",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587432988/mao-zedong-portrait-transparent-png-stickpng-mao-zedong-png-689_912_ydri2q.png",
  },
  {
    name: "Fascism",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587433270/adolf-hitler-nazi-germany-second-world-war-downfall-adolf-hitler_cs9tgk.jpg",
  },
];

const issues = [
  {
    name: "Women's Rights",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587434822/290px-Annie_Kenney_and_Christabel_Pankhurst_trnzac.jpg",
  },
  {
    name: "Racism",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587434863/charlottesville_ddwfot.png",
  },
  {
    name: "Trans-exclusionary Radical Feminism",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587434913/1496493576402_hpfx6g.jpg",
  },
  {
    name: "Eco-terrorism",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587437071/latest_ab6jxr.png",
  },
  {
    name: "Sexual Liberation",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587437356/c351bb9144b14049a92fd7ce8429e634_gzlgkc.jpg",
  },
  {
    name: "Abortion Rights",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587437429/sipaphotosthree072008-sipausa.30068566000008.sm-a_adbrj2.jpg",
  },
  {
    name: "White Supremecy",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587437482/42-424413_kkk-freetoedit-ku-klux-klan_tnv3pb.png",
  },
  {
    name: "Global Poverty",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587437623/relative-poverty-cover-500x350-c-default_ednt8n.jpg",
  },
  {
    name: "Class Consciousness",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587438156/clipart-fox-robin-hood_llj24f.png",
  },
  {
    name: "the Exploitation of Labor",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587437802/mcdonaldsworker031215_ygwf1n.jpg",
  },
  {
    name: "Private Property",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587438279/private-property-no-outlet-stop-signature-sign-k2-1345_hkgy9b.png",
  },
  {
    name: "Free Speech",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587438422/0502_free_speech_cxqauu.jpg",
  },
  {
    name: "Fossil Fuels",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587438565/Crude-Oil-Barrel-Transparent-PNG_cv5l0f.png",
  },
  {
    name: "Technology",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587438620/clipart-phone-phone-android-9_ntayxk.png",
  },
  {
    name: "Online Radicalization",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587438990/5845cd230b2a3b54fdbaecf7_upey1u.png",
  },
  {
    name: "Dialectic",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587439163/Hegel_by_Schlesinger_igwnwh.jpg",
  },
  {
    name: "Healthcare",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587439488/nursing-health-professional-health-care-hospital-nurse_znctac.jpg",
  },
  {
    name: "Immigration",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587439572/Statue-of-Liberty-Transparent-Background_ewm2tg.png",
  },
  {
    name: "Celebrity Worship",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587439753/kim-kardashian-png-clipart_wvzqch.jpg",
  },
  {
    name: "Ethics in Video Game Journalism",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587439832/kotaku-logo-png-5_vyojbi.png",
  },
  {
    name: "The Soviet Union",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587438054/thediplomat-11750484506_08ccd2cd8e_b_mjf1ki.jpg",
  },
];

const media = [
  { name: "Angry Birds", imageUrl: "" },
  {
    name: "Katamari Damacy",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587440403/kisspng-katamari-damacy-diamant-koninkrijk-koninkrijk-comp-prince-5abe7ca7aa58a5.6750333715224331916978_fmiahq.jpg",
  },
  {
    name: "Parks and Rec",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587440646/tumblr_static_tumblr_static_6kcpkr4hrhgk4gg04o4kcc4ks_640_sqdazc.png",
  },
  {
    name: "The Secret Life of Pets",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587440864/pets_fhozer.png",
  },
  {
    name: "2 Fast 2 Furious",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587441038/fast-and-furious-collection-folder-icon-pack-2-fast-2-furious-png-icon-thumbnail_dxsahj.jpg",
  },
  {
    name: "Game of Thrones",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587441130/dcrioxu-f14c376e-a0b8-4cc9-8c39-04f1c5665950.png_sgghx6.png",
  },
  {
    name: "Peppa Pig",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587441216/peppa_george_characters_rekk11.png",
  },
  {
    name: "Two and a Half Men",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587441487/1024-removebg-preview_gsywyc.png",
  },
  {
    name: "RuPaul's Drag Race",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587441644/rupaul-7-png-1001571263906jqiedkjo6p_qcxlbx.png",
  },
  {
    name: "Roblox",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587441998/roblox_orpl2y.png",
  },
  {
    name: "Five Nights at Freddy's",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587442051/74aefb7d75053c0e6ea85db8b54ba68d_five-nights-at-freddys-fivenightsatfreddys_3840-2160_qbe4wl.png",
  },
  {
    name: "Super Mario Land 2: 6 Golden Coins",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587442122/91x1gsV0G3L._SL1500__sz6cbk.jpg",
  },
  {
    name: "Crash Team Racing",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587442179/d8bho0k-4f282599-4985-468f-a937-cb599a52c59d.png_rxmmi5.png",
  },
  {
    name: "Dr. Robotnik's Mean Bean Machine",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587442245/latest_r0xndw.png",
  },
  {
    name: "Fallout: 76",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587442301/100-1007257_jpg-transparent-library-fallout-vault-png-fallout-png_u3krgx.png",
  },
  {
    name: "Star Wars: The Clone Wars",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587442380/MV5BZWFlNzRmOTItZjY1Ni00ZjZkLTk5MDgtOGFhOTYzNWFhYzhmXkEyXkFqcGdeQXVyMDM2NDM2MQ_._V1__pqyjqm.jpg",
  },
  {
    name: "Fuller House",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587442437/download_auleji.png",
  },
  {
    name: "Grey's Anatomy",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/e_bgremoval/v1587442495/jessica-capshaw-grey-s-anatomy-april-kepner-meredith-grey-alex-karev-grey-anatomy_dtxmzh.jpg",
  },
  {
    name: "Steven Universe",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/e_bgremoval/v1587442598/file-history-steven-universe-1156290095261iaa8uyqk_ywpfyy.png",
  },
  {
    name: "Barbie: Fairytopia",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587442722/51XV9GPYXGL._SY445__swgaob.jpg",
  },
  {
    name: "Candy Crush Saga",
    imageUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587442795/candy-crush-saga-candy-crush-jelly-saga-king-android-candy-crush_mkmtw8.jpg",
  },
];

const videoTitleElem = document.querySelector(".title");

function getRandomItem(category) {
  return category[Math.floor(Math.random() * category.length)];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const philosophy = getRandomItem(philosophies);
const issue = getRandomItem(issues);
const medium = getRandomItem(media);

const philosophyElem = document.querySelector(".philosophy");
const issueElem = document.querySelector(".issue");
const mediumElem = document.querySelector(".medium");

function placePhil() {
  philosophyElem.style.backgroundImage = `url("${philosophy.imgUrl}")`;
  // philosophyElem.style.backgroundImage = `url("https://res.cloudinary.com/dve2z73dr/image/upload/v1587454747/5bbf09fecdc2a-removebg-preview_vcb3wo.png")`;
  philosophyElem.style.top = `${getRandomInt(0, 50)}%`;
  philosophyElem.style.left = `${getRandomInt(0, 6)}%`;
}

function placeIssue() {
  console.log(issue);
  issueElem.style.backgroundImage = `url("${issue.imgUrl}")`;
  // philosophyElem.style.backgroundImage = `url("https://res.cloudinary.com/dve2z73dr/image/upload/v1587454747/5bbf09fecdc2a-removebg-preview_vcb3wo.png")`;
  issueElem.style.top = `${getRandomInt(5, 55)}%`;
  issueElem.style.left = `${getRandomInt(36, 42)}%`;
}

videoTitleElem.textContent = `${philosophy.name} and ${issue.name} in ${medium.name}`;
placePhil();
placeIssue();
