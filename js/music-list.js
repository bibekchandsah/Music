// Modify your allMusic array with URLs
// https://justnaija.com/
// https://xclusiveloaded.com/
// for hindi song only
// https://pagalsong.com.in/search
// https://pagalworld.ink/
// https://gospeljingle.com/?s=culpa+mia+song
// category : bass hiphop hindi english sad romantic attitude
let allMusic = [
    {
      name: "I Guess I m In Love",
      artist: "Clinton Kane",
      category: "romantic english",
      img: "https://ww-pagalworld.com/uploads/thumb/sft28/13834_4.jpg",
      src: "https://files.gospeljingle.com/uploads/music/2023/01/Clinton_Kane_-_I_Guess_Im_In_Love.mp3"
    },
    {
      name: "My Baby Love",
      artist: "Jony",
      category: "romantic english",
      img: "https://ww-pagalworld.com/uploads/thumb/sft14/6851_4.jpg",
      // src: "https://ww-pagalworld.com/files/download/id/6851"
      src: "https://github.com/bibek10550/Music/raw/main/Music/My-Baby-Love.mp3"
    },
    {
      name: "Gasolina",
      artist: "Daddy Yankee",
      category: "bass attitude english",
      img: "https://ww-pagalworld.com/uploads/thumb/sft26/12922_4.jpg",
      src: "https://github.com/bibek10550/Music/raw/main/Music/Gasolina.mp3"
    //   src: "https://www.jiosaavn.com/song/gasolina/RAAjZENnT0s"
    },
    {
      name: "Heeriye Heeriye Aa",
      artist: "Arijit Singh",
      category: "romantic hindi",
      img: "https://ww-pagalworld.com/uploads/thumb/sft27/13270_4.jpg",
      src: "https://files.gospeljingle.com/uploads/music/2023/10/Heeriye-feat-Arijit-Singh-Jasleen-Royal-(Gospeljingle.com).mp3"
    },
    {
      name: "Calm Down",
      artist: "Rema",
      category: "english",
      img: "https://ww-pagalworld.com/uploads/thumb/sft26/12678_4.jpg",
      src: "https://cdn.xclusiveloaded.com/wp-content/uploads/2022/08/Rema_Ft_Selena_Gomez_-_Calm_Down_Remix_Audio_.mp3"
    },
    {
      name: "Taki Taki",
      artist: "DJ Snake, Selena Gomez",
      category: "bass english",
      img: "https://pagalworlld.com/siteuploads/thumb/sft11/5088_4.jpg",
      src: "https://github.com/bibek10550/Music/raw/main/Music/Taki-Taki.mp3"
    },
    {
      name: "Let Me Love You",
      artist: "Justin Bieber",
      category: "romantic english",
      img: "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/update/1599607201/srch_universalmusic_00602557056273-QMZSY1600019.jpg",
      src: "https://github.com/bibek10550/Music/raw/main/Music/Let-Me-Love-You.mp3"
    },
    {
      name: "Baby",
      artist: "Justin Bieber",
      category: "romantic english",
      img: "https://pagalworlld.com/siteuploads/thumb/sft10/4702_4.jpg",
      src: "https://github.com/bibek10550/Music/raw/main/Music/Baby.mp3"
    },
    {
      name: "Despacito",
      artist: "Daddy Yankee, Luis Fonsi",
      category: "bass english",
      img: "https://pagalworld.ink/siteuploads/thumb/sft6/2899_6_resize2x_300x300.webp",
      src: "https://github.com/bibek10550/Music/raw/main/Music/Despacito.mp3"
    },
    {
      name: "Sorry",
      artist: "Justin Bieber",
      category: "sad english",
      img: "https://pagalworld.com.im/datadbs/thumb/sft8/3860_4.jpg",
      src: "https://github.com/bibek10550/Music/raw/main/Music/Sorry.mp3"
    },
    {
      name: "Water",
      artist: "Tyla",
      category: "english",
      img: "https://i0.wp.com/justnaija.com/uploads/2023/07/Tyla-Water-artwork.jpeg?ulb=false&ssl=1&resize=320,350",
      src: "https://cdn3.justnaija.me/uploads/music/2023/07/Tyla-Water-(JustNaija.com).mp3"
    },
    {
      name: "Sawarne Lage",
      artist: "Jubin Nautiyal",
      category: "bass hiphop hindi",
      img: "https://pagalworlld.com/siteuploads/thumb/sft15/7472_4.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Mitron/Sawarne%20Lage%20(Mitron)%20128%20Kbps.mp3"
    },
    {
      name: "Malang Sajna",
      artist: "Parampara Tandon",
      category: "bass hiphop hindi",
      img: "https://i.ytimg.com/vi/-T1lDt7ttro/maxresdefault.jpg",
      // img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_782231041.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Malang%20Sajna%20-%20Sachet%20Tandon/Malang%20Sajna%20-%20Sachet%20Tandon%20128%20Kbps.mp3"
    },
    {
      name: "Sajde - Kill Dil",
      artist: "Arijit Singh, Nihira, Gulzar",
      category: "sad hindi",
      img: "https://i.ytimg.com/vi/P4fzOSVy6-o/maxresdefault.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Kill%20Dil/Sajde%20-%20Kill%20Dil%20128%20Kbps.mp3"
    },
    {
      name: "Mere Liye - Broken but Beautiful",
      artist: "Akhil Sachdeva",
      category: "sad hindi",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_1140277330.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Broken%20but%20Beautiful%20Season%203/Mere%20Liye%20-%20Broken%20but%20Beautiful%20Season%203%20128%20Kbps.mp3"
      // src: "https://pagalsong.com.in/download/52905/Mere%20Liye%20320%20KBPS%20mp3"
    },
    {
      name: "Dil Jaaniye",
      artist: "Tulsi Kumar, Jubin Nautiyal",
      category: "sad hindi",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_795589986.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Khandaani%20Shafakhana/Dil%20Jaaniye%20-%20Khandaani%20Shafakhana%20128%20Kbps.mp3",
      // src: "https://pagalsong.com.in/download/10200/Dil%20Jaaniye%20320%20KBPS%20mp3"
    },
    {
      name: "Jitni Dafa - Parmanu",
      artist: "Yasser Desai",
      category: "sad hindi",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_787724045.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Parmanu/Jitni%20Dafa%20(Parmanu%20-%20The%20Story%20Of%20Pokhran)%20128%20Kbps.mp3",
      // src: "https://pagalsong.com.in/download/1540/Jitni%20Dafa%20320%20KBPS%20mp3"
    },
    {
      name: "Hum Mar Jayenge - Aashiqui 2",
      artist: "Tulsi Kumar, Arijit Singh",
      category: "sad romantic hiphop hindi",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_872050244.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Aashiqui%202/Hum%20Mar%20Jayenge.mp3"
    },
    {
      name: "Humdard - Ek Villain",
      artist: "Mithoon, Arijit Singh",
      category: "sad romantic hindi",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_1050342207.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Ek%20Villain/Humdard.mp3"
    },
    {
      name: "Tujhe Kitna Chahne Lage",
      artist: "Mithoon, Arijit Singh",
      category: "sad romantic hindi",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_102009727.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Kabir%20Singh/Tujhe%20Kitna%20Chahne%20Lage%20-%20Kabir%20Singh%20128%20Kbps.mp3"
    },
    {
      name: "Ek Tarfa",
      artist: "Darshan Raval",
      category: "bass sad hindi",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_537500319.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Ek%20Tarfa%20-%20Darshan%20Raval/Ek%20Tarfa%20-%20Darshan%20Raval%20128%20Kbps.mp3"
    },
    {
      name: "Besharam Rang - Pathaan",
      artist: "Vishal Shekhar, Shilpa Rao",
      category: "bass hiphop hindi",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_1969274076.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Pathaan/Besharam%20Rang%20-%20Pathaan%20128%20Kbps.mp3"
    },
    {
      name: "Barbaadiyan - Shiddat",
      artist: "Sachet Tandon, Nikhita Gandhi",
      category: "bass hiphop hindi",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_915626579.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Shiddat/Barbaadiyan%20-%20Shiddat%20128%20Kbps.mp3"
    },
    {
      name: "Bandeya - Dil Juunglee",
      artist: "Arijit Singh",
      category: "sad hindi",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_643490699.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Dil%20Juunglee/Bandeya%20(Dil%20Juunglee)%20128%20Kbps.mp3"
    },
    {
      name: "Akhiyaan Milavanga - Commando 3",
      artist: "Arijit Singh, Sruthy Sasidharan",
      category: "bass hiphop hindi",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_25762861.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Commando%203/Akhiyaan%20Milavanga%20-%20Commando%203%20128%20Kbps.mp3"
    },
    {
      name: "Roi Na Je yaad Meri Aayi Ve",
      artist: "Ninja",
      category: "sad hindi punjabi",
      img: "https://img.youtube.com/vi/uMsR_R9xWpM/maxresdefault.jpg",
      src: "https://dl230.dlmate56.xyz/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ1dsOXh4NlJGb0s2NEh2NHd1MDYrTkp0dEdaWVlPMUlQcEo5c2Z2aERkWnB1NE1RdkNoWmNvUldESzM5OHp2VGFFb2Q1eUNZSTZmaC8ybisvb3BUQnl3alQ2Y04rR1hvdFhhVHhJckU1a3dHM1k0dlREOGliNXR6YWVxRU9FSWlrYTRYME5OUG5Wem85SndXR1dLcVhDeXA4UXVUT2Q1OThiL1AyTjUwU2s1YmQ3NnZwZ2MxZEdUS0lFd2EzbDhyN0J0UlJmaDV3VGgyU0s3K2UrRnBjbkdiR1hkREl0YjNWWnVyaTVCVTFLbldNTjhYYTdxL3gxdURsZUl2WXorM1RwL2ZDNE5nPT0%3D"
    },
    {
      name: "Mujhko Yaad Sataye Teri - Phir Hera Pheri",
      artist: "Himesh Reshammiya",
      category: "hindi hiphop",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_1056876323.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Phir%20Hera%20Pheri/Mujhko%20Yaad%20Sataye%20Teri%20-%20Phir%20Hera%20Pheri%20128%20Kbps.mp3"
    },
    {
      name: "Hookah Bar - Khiladi 786",
      artist: "Himesh Reshammiya, Vineet Singh",
      category: "hindi hiphop",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_627530666.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Khiladi%20786/Hookah%20Bar%20-%20Khiladi%20786%20128%20Kbps.mp3"
    },
    {
      name: "Khaab",
      artist: "Akhil",
      category: "sad punjabi hindi",
      img: "https://img.youtube.com/vi/2eliQ_KR8yA/maxresdefault.jpg",
      src: "https://pagalworld.ink/files/download/type/320/id/9024"
      // https://pagalworld.ink/files/download/type/64/id/9024
    },
    {
      name: "Kiya Kiya - Welcome",
      artist: "Anand Raj Anand, Shweta Pandit",
      category: "hindi hiphop",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_184312163.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Welcome/Kiya%20Kiya%20-%20Welcome%20128%20Kbps.mp3"
    },
    {
      name: "Sadi Gali - Tanu Weds Manu",
      artist: "Lehmber Hussainpuri",
      category: "hindi punjabi hiphop",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_236692627.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Tanu%20Weds%20Manu/Sadi%20Gali%20-%20Tanu%20Weds%20Manu%20128%20Kbps.mp3"
    },
    {
      name: "Brown Rang - International Villager",
      artist: "Yo Yo Honey Singh",
      category: "hindi hiphop attitude",
      img: "https://img.youtube.com/vi/BYIDm2K8RJc/maxresdefault.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/International%20Villager/Brown%20Rang%20-%20International%20Villager%20128%20Kbps.mp3"
    },
    {
      name: "Sunny Sunny - Yaariyan",
      artist: "Yo Yo Honey Singh, Neha Kakkar",
      category: "hindi hiphop",
      img: "https://i.ytimg.com/vi/MXJCnccDLA0/hqdefault.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Yaariyan/Sunny%20Sunny%20-%20Yaariyan%20128%20Kbps.mp3"
    },
    {
      name: "Blue Eyes",
      artist: "Yo Yo Honey Singh",
      category: "hindi hiphop",
      img: "https://img.youtube.com/vi/NbyHNASFi6U/maxresdefault.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Blue%20Eyes%20-%20Yo%20Yo%20Honey%20Singh/Blue%20Eyes%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3"
    },
    {
      name: "Baby Doll",
      artist: "Meet Bros, Kanika Kapoor",
      category: "hindi hiphop",
      img: "https://img.youtube.com/vi/yP9KiFTyBks/maxresdefault.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Ragini%20MMS%202/Baby%20Doll%20-%20Ragini%20MMS%202%20128%20Kbps.mp3"
    },
    {
      name: "Tu Cheez Badi Hai Mast Mast",
      artist: "Udit Narayan, Neha Kakkar",
      category: "hindi hiphop",
      img: "https://pagalworlld.com/siteuploads/thumb/sft1/241_4.jpg",
      src: "https://pagalworlld.com/files/download/id/241"
    },
    {
      name: "Sakhiyaan",
      artist: "Maninder Buttar",
      category: "hindi punjabi hiphop romantic",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_947457968.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Sakhiyaan%20%20-%20Maninder%20Buttar/Sakhiyaan%20-%20Maninder%20Buttar%20128%20Kbps.mp3"
    },
    {
      name: "Saiyaara - Ek Tha Tiger",
      artist: "Mohit Chauhan, Tarannum Mallik",
      category: "hindi sad",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_1809697404.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Ek%20Tha%20Tiger/Saiyaara.mp3"
    },
    {
      name: "Aankhon Mein Teri Ajab Si",
      artist: "K.K.",
      category: "hindi romantic",
      img: "https://img.youtube.com/vi/qSy6xPm_Tpo/maxresdefault.jpg",
      src: "https://paglasongs.com/files/download/id/14030"
    },
    {
      name: "High Heels - Ki & Ka",
      artist: "Yo Yo Honey Singh, Meet Bros",
      category: "hindi hiphop",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_1320932489.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Ki%20&%20Ka/01%20-%20High%20Heels.mp3"
    },
    {
      name: "Lat Lag Gayee - Race 2",
      artist: "Benny Dayal, Shalmali Kholgade",
      category: "hindi hiphop",
      img: "https://img.youtube.com/vi/KxCjVIFxZNo/maxresdefault.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Race%202/Lat%20Lag%20Gayee%20-%20Race%202%20128%20Kbps.mp3"
    },
    {
      name: "But Slowly Slowly",
      artist: "Rekha Thapa",
      category: "nepali hiphop",
      img: "https://i.ytimg.com/vi/WgMffMxvVfs/0.jpg",
      src: "https://dl159.dlmate15.online/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ0dqY0Z4OUJ3c0ZxZFY3YjRqMlBPc09vSUVDTElEd2NHUkh0QlR2blh6VVBHbkdVVENoSjB0U25MS3c5NDhxVDZCL3A1ekg4OTRXaFBIaStlM25td3oyeUhzY2MzWkFMcFRLQ1ZkcmxBd2xuUzFsYlNHbnlML25udXJpbFdWV2lJWi9EWWJiclBYOUpBVi9FZU5hdS8wMm9JQXVTK1M1OGNZamFETzQxZWhrT05vL3M5OFJFRXBJTWtJajhpaWhyYmZzeG9kZ3NoTg%3D%3D"
    },
    {
      name: "Kasari Bhanu",
      artist: "Swoopna Suman",
      category: "nepali sad",
      img: "https://img.youtube.com/vi/7SaM24Cjzj0/maxresdefault.jpg",
      src: "https://dl253.dlmate07.online/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ1BtY1k3MVJsb0k2Tk5xSmhrbk11bUpjQk1KNllEaHFhN0E5ZFg5REtUUjltUE5RREMvYXN4VFh5UitkZDJpaXJDOG9CckV1aGpWQi9zaWVleGozcFptdzd5ZDliTUdhc1lZR2NvNVVacTN5T3MzUERBc1VpOTRWdTBxRmlYZVNZUDkya3RNT1dEdE0xdTFDeVpTYURYMHIxWCtRV1YrSkFabFAyTjUwZnh4cjFqa2ZJelcxeGtlb0pZelpQNDJxMmQ4aGRLMTg5TGpCdng3L0d2SEp0b1NmRElLR1VvYkdRYS83THJYa2s9"
    },
    {
      name: "Maya",
      artist: "Ashutosh KC",
      category: "nepali sad",
      img: "https://img.youtube.com/vi/kEbcHhNsRoU/maxresdefault.jpg",
      src: "https://github.com/bibek10550/bibeksha/raw/main/songs/music-2.mp3"
    },
    // {
    //   name: "",
    //   artist: "",
    //   category: "",
    //   img: "",
    //   src: ""
    // },
    // ... (add more entries with image and music URLs)
  ];
