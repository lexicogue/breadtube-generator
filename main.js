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
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587454747/5bbf09fecdc2a-removebg-preview_vcb3wo.png",
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
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587434863/charlottesville_ddwfot.png",
  },
  {
    name: "Trans-exclusionary Radical Feminism",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587434913/1496493576402_hpfx6g.jpg",
  },
  {
    name: "Eco-terrorism",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587437071/latest_ab6jxr.png",
  },
  {
    name: "Sexual Liberation",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587437356/c351bb9144b14049a92fd7ce8429e634_gzlgkc.jpg",
  },
  {
    name: "Abortion Rights",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587527512/supremecourt_wide-dafda4641d4f4cb5556141933fdb43d82e68a2a9-s800-c85_rvxvyp.jpg",
  },
  {
    name: "White Supremecy",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587437482/42-424413_kkk-freetoedit-ku-klux-klan_tnv3pb.png",
  },
  {
    name: "Global Poverty",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587437623/relative-poverty-cover-500x350-c-default_ednt8n.jpg",
  },
  {
    name: "Class Consciousness",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587438156/clipart-fox-robin-hood_llj24f.png",
  },
  {
    name: "the Exploitation of Labor",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587437802/mcdonaldsworker031215_ygwf1n.jpg",
  },
  {
    name: "Private Property",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587438279/private-property-no-outlet-stop-signature-sign-k2-1345_hkgy9b.png",
  },
  {
    name: "Free Speech",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587438422/0502_free_speech_cxqauu.jpg",
  },
  {
    name: "Fossil Fuels",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587438565/Crude-Oil-Barrel-Transparent-PNG_cv5l0f.png",
  },
  {
    name: "Technology",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587438620/clipart-phone-phone-android-9_ntayxk.png",
  },
  {
    name: "Online Radicalization",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587438990/5845cd230b2a3b54fdbaecf7_upey1u.png",
  },
  {
    name: "Dialectic",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587439163/Hegel_by_Schlesinger_igwnwh.jpg",
  },
  {
    name: "Healthcare",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587513266/nursing-health-professional-health-care-hospital-nurse_znctac-removebg-preview_oey6bp.png",
  },
  {
    name: "Immigration",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587439572/Statue-of-Liberty-Transparent-Background_ewm2tg.png",
  },
  {
    name: "Celebrity Worship",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587526810/kim-kardashian-png-clipart_wvzqch-removebg-preview_pnxifx.png",
  },
  {
    name: "Ethics in Video Game Journalism",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587439832/kotaku-logo-png-5_vyojbi.png",
  },
  {
    name: "The Soviet Union",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587438054/thediplomat-11750484506_08ccd2cd8e_b_mjf1ki.jpg",
  },
];

const media = [
  {
    name: "Angry Birds",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587514707/hiclipart.com_bac1l8.png",
  },
  {
    name: "Katamari Damacy",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587514209/kisspng-katamari-damacy-diamant-koninkrijk-koninkrijk-comp-prince-5abe7ca7aa58a5-removebg-preview_whsikw.png",
  },
  {
    name: "Parks and Rec",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587440646/tumblr_static_tumblr_static_6kcpkr4hrhgk4gg04o4kcc4ks_640_sqdazc.png",
  },
  {
    name: "The Secret Life of Pets",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587440864/pets_fhozer.png",
  },
  {
    name: "2 Fast 2 Furious",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587514026/2-fast-2-furious-poster_qdvvk3.jpg",
  },
  {
    name: "Game of Thrones",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587441130/dcrioxu-f14c376e-a0b8-4cc9-8c39-04f1c5665950.png_sgghx6.png",
  },
  {
    name: "Peppa Pig",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587441216/peppa_george_characters_rekk11.png",
  },
  {
    name: "Two and a Half Men",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587441487/1024-removebg-preview_gsywyc.png",
  },
  {
    name: "RuPaul's Drag Race",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587441644/rupaul-7-png-1001571263906jqiedkjo6p_qcxlbx.png",
  },
  {
    name: "Roblox",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587441998/roblox_orpl2y.png",
  },
  {
    name: "Five Nights at Freddy's",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587442051/74aefb7d75053c0e6ea85db8b54ba68d_five-nights-at-freddys-fivenightsatfreddys_3840-2160_qbe4wl.png",
  },
  {
    name: "Super Mario Land 2: 6 Golden Coins",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587442122/91x1gsV0G3L._SL1500__sz6cbk.jpg",
  },
  {
    name: "Crash Team Racing",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587442179/d8bho0k-4f282599-4985-468f-a937-cb599a52c59d.png_rxmmi5.png",
  },
  {
    name: "Dr. Robotnik's Mean Bean Machine",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587442245/latest_r0xndw.png",
  },
  {
    name: "Fallout: 76",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587442301/100-1007257_jpg-transparent-library-fallout-vault-png-fallout-png_u3krgx.png",
  },
  {
    name: "Star Wars: The Clone Wars",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587442380/MV5BZWFlNzRmOTItZjY1Ni00ZjZkLTk5MDgtOGFhOTYzNWFhYzhmXkEyXkFqcGdeQXVyMDM2NDM2MQ_._V1__pqyjqm.jpg",
  },
  {
    name: "Fuller House",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587442437/download_auleji.png",
  },
  {
    name: "Grey's Anatomy",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587526643/237-2377943_greys-anatomy-derek-and-meredith-removebg-preview_iexht4.png",
  },
  {
    name: "Steven Universe",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587533505/latest_ztf8p1.png",
  },
  {
    name: "Barbie: Fairytopia",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587442722/51XV9GPYXGL._SY445__swgaob.jpg",
  },
  {
    name: "Candy Crush Saga",
    imgUrl:
      "https://res.cloudinary.com/dve2z73dr/image/upload/v1587514816/kisspng-candy-crush-saga-candy-crush-jelly-saga-king-andro-candy-crush-5b3169d3b12741.2344771715299650117256_uyzyqx.png",
  },
];

const backgrounds = [
  "linear-gradient(90deg, rgba(54,48,163,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
  "#75e091",
  "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
  "#f5691d",
  "linear-gradient(90deg, #FEE140 0%, #FA709A 100%)",
  "#91fad7",
  "radial-gradient( circle 827px at 47.3% 48%,  rgba(255,255,255,1) 0%, rgba(138,192,216,1) 90%)",
  "#c4b4d6",
  "radial-gradient( circle 523px at 7.1% 19.3%,  rgba(147,15,255,1) 2%, rgba(5,49,255,1) 100.7% )",
  "lightgrey",
  "linear-gradient( 109.6deg,  rgba(114,210,39,1) 11.3%, rgba(182,235,141,1) 100.2% )",
  "radial-gradient(circle, rgba(246,245,254,1) 11%, rgba(210,226,235,1) 26%, rgba(114,223,245,1) 100%)",
  "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)",
  "linear-gradient(180deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%)",
  "linear-gradient( 90.5deg,  rgba(250,156,245,1) 1.6%, rgba(182,76,233,1) 98.2% )",
  "cornflowerblue",
  "linear-gradient( 89.9deg,  rgba(255,18,18,1) -2.8%, rgba(252,246,19,1) 50.8%, rgba(0,159,8,1) 107.9% )",
  "linear-gradient( 111.5deg,  rgba(249,230,1,1) 9.9%, rgba(249,144,1,1) 19.4%, rgba(255,22,22,1) 29.2%, rgba(255,22,133,1) 37.7%, rgba(255,22,197,1) 47.7%, rgba(232,22,255,1) 53.9%, rgba(162,22,255,1) 60%, rgba(80,22,255,1) 68.8%, rgba(22,104,255,1) 74.2%, rgba(22,168,255,1) 77.6%, rgba(22,255,220,1) 86.7%, rgba(22,255,179,1) 92.5%, rgba(22,255,109,1) 97.1%, rgba(92,255,22,1) 103.5% )",
  "linear-gradient( 179deg,  rgba(255,129,27,1) -27.5%, rgba(245,255,56,1) 94.7% )",
  "radial-gradient( circle farthest-corner at 10% 20%,  rgba(43,194,57,1) 0%, rgba(149,250,113,1) 90% )",
  "linear-gradient( 79.8deg,  rgba(101,132,154,1) 3.2%, rgba(160,197,201,1) 89.1% )",
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

const philosophyElem = document.querySelector(".philosophy");
const issueElem = document.querySelector(".issue");
const mediumElem = document.querySelector(".medium");
const thumbnailElem = document.querySelector(".thumbnail");

function placePhil(philosophy) {
  philosophyElem.style.backgroundImage = `url("${philosophy.imgUrl}")`;
  philosophyElem.style.top = `${getRandomInt(40, 45)}%`;
  philosophyElem.style.left = `${getRandomInt(0, 6)}%`;
}

function placeIssue(issue) {
  issueElem.style.backgroundImage = `url("${issue.imgUrl}")`;
  issueElem.style.top = `${getRandomInt(0, 20)}%`;
  issueElem.style.left = `${getRandomInt(32, 36)}%`;
}

function placeMedium(medium) {
  mediumElem.style.backgroundImage = `url("${medium.imgUrl}")`;
  mediumElem.style.top = `${getRandomInt(25, 40)}%`;
  mediumElem.style.left = `${getRandomInt(60, 63)}%`;
}

function init() {
  const philosophy = getRandomItem(philosophies);
  const issue = getRandomItem(issues);
  const medium = getRandomItem(media);

  placePhil(philosophy);
  placeIssue(issue);
  placeMedium(medium);

  videoTitleElem.textContent = `${philosophy.name} and ${issue.name} in ${medium.name}`;
  thumbnailElem.style.background = getRandomItem(backgrounds);
}

init();
