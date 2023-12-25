// Modify your allMusic array with URLs
// https://justnaija.com/
// https://xclusiveloaded.com/
// https://pagalsong.com.in/search
let allMusic = [
    {
      name: "I Guess I m In Love",
      artist: "Clinton Kane",
      img: "https://ww-pagalworld.com/uploads/thumb/sft28/13834_4.jpg",
      src: "https://ww-pagalworld.com/files/download/id/13834"
    },
    {
      name: "My Baby Love",
      artist: "Jony",
      img: "https://ww-pagalworld.com/uploads/thumb/sft14/6851_4.jpg",
      src: "https://ww-pagalworld.com/files/download/id/6851"
    },
    {
      name: "Gasolina",
      artist: "Daddy Yankee",
      img: "https://ww-pagalworld.com/uploads/thumb/sft26/12922_4.jpg",
      src: "https://ww-pagalworld.com/files/download/id/12922"
    //   src: "https://www.jiosaavn.com/song/gasolina/RAAjZENnT0s"
    },
    {
      name: "Heeriye Heeriye Aa",
      artist: "Arijit Singh",
      img: "https://ww-pagalworld.com/uploads/thumb/sft27/13270_4.jpg",
      src: "https://ww-pagalworld.com/files/download/id/13270"
    },
    {
      name: "Calm Down Slowed Reverb",
      artist: "Rema",
      img: "https://ww-pagalworld.com/uploads/thumb/sft26/12678_4.jpg",
      src: "https://ww-pagalworld.com/files/download/id/12678"
    },
    {
      name: "Taki Taki",
      artist: "DJ Snake, Selena Gomez",
      img: "https://pagalworlld.com/siteuploads/thumb/sft11/5088_4.jpg",
      src: "https://pagalworlld.com/files/download/id/5088"
    },
    {
      name: "Let Me Love You",
      artist: "Justin Bieber",
      img: "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/update/1599607201/srch_universalmusic_00602557056273-QMZSY1600019.jpg",
      src: "https://paglasongs.com/files/download/id/3537"
    },
    {
      name: "Baby",
      artist: "Justin Bieber",
      img: "https://pagalworlld.com/siteuploads/thumb/sft10/4702_4.jpg",
      src: "https://pagalworlld.com/files/download/id/4702"
    },
    {
      name: "Despacito",
      artist: "Daddy Yankee, Luis Fonsi",
      img: "https://pagalworld.ink/siteuploads/thumb/sft6/2899_6_resize2x_300x300.webp",
      src: "https://paglasongs.com/files/download/id/2110"
    },
        {
      name: "Sorry",
      artist: "Justin Bieber",
      img: "https://pagalworld.com.im/datadbs/thumb/sft8/3860_4.jpg",
      src: "https://pagalworld.com.im/files/download/id/3860"
    },
    {
      name: "Water",
      artist: "Tyla",
      img: "https://i0.wp.com/justnaija.com/uploads/2023/07/Tyla-Water-artwork.jpeg?ulb=false&ssl=1&resize=320,350",
      src: "https://cdn3.justnaija.me/uploads/music/2023/07/Tyla-Water-(JustNaija.com).mp3"
    },
    {
      name: "Sawarne Lage",
      artist: "Jubin Nautiyal",
      img: "https://pagalworlld.com/siteuploads/thumb/sft15/7472_4.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Mitron/Sawarne%20Lage%20(Mitron)%20128%20Kbps.mp3"
    },
    {
      name: "Malang Sajna",
      artist: "Parampara Tandon",
      img: "https://i.ytimg.com/vi/-T1lDt7ttro/maxresdefault.jpg",
      // img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_782231041.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Malang%20Sajna%20-%20Sachet%20Tandon/Malang%20Sajna%20-%20Sachet%20Tandon%20128%20Kbps.mp3"
    },
    {
      name: "Sajde - Kill Dil",
      artist: "Arijit Singh, Nihira, Gulzar",
      img: "https://i.ytimg.com/vi/P4fzOSVy6-o/maxresdefault.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Kill%20Dil/Sajde%20-%20Kill%20Dil%20128%20Kbps.mp3"
    },
    {
      name: "Mere Liye - Broken but Beautiful",
      artist: "Akhil Sachdeva",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_1140277330.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Broken%20but%20Beautiful%20Season%203/Mere%20Liye%20-%20Broken%20but%20Beautiful%20Season%203%20128%20Kbps.mp3"
      // src: "https://pagalsong.com.in/download/52905/Mere%20Liye%20320%20KBPS%20mp3"
    },
    {
      name: "Dil Jaaniye",
      artist: "Tulsi Kumar, Jubin Nautiyal",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_795589986.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Khandaani%20Shafakhana/Dil%20Jaaniye%20-%20Khandaani%20Shafakhana%20128%20Kbps.mp3"
      // src: "https://pagalsong.com.in/download/10200/Dil%20Jaaniye%20320%20KBPS%20mp3"
    },
        {
      name: "Jitni Dafa - Parmanu",
      artist: "Yasser Desai",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_787724045.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Parmanu/Jitni%20Dafa%20(Parmanu%20-%20The%20Story%20Of%20Pokhran)%20128%20Kbps.mp3",
      // src: "https://pagalsong.com.in/download/1540/Jitni%20Dafa%20320%20KBPS%20mp3"
    },
    {
      name: "Hum Mar Jayenge - Aashiqui 2",
      artist: "Tulsi Kumar, Arijit Singh",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_872050244.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Aashiqui%202/Hum%20Mar%20Jayenge.mp3"
    },
    {
      name: "Humdard - Ek Villain",
      artist: "Mithoon, Arijit Singh",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_1050342207.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Ek%20Villain/Humdard.mp3"
    },
    {
      name: "Tujhe Kitna Chahne Lage - Kabir Singh",
      artist: "Mithoon, Arijit Singh",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_102009727.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Kabir%20Singh/Tujhe%20Kitna%20Chahne%20Lage%20-%20Kabir%20Singh%20128%20Kbps.mp3"
    },
    {
      name: "Ek Tarfa",
      artist: "Darshan Raval",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_537500319.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Ek%20Tarfa%20-%20Darshan%20Raval/Ek%20Tarfa%20-%20Darshan%20Raval%20128%20Kbps.mp3"
    },
    {
      name: "Besharam Rang - Pathaan",
      artist: "Vishal Shekhar, Shilpa Rao",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_1969274076.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Pathaan/Besharam%20Rang%20-%20Pathaan%20128%20Kbps.mp3"
    },
    {
      name: "Barbaadiyan - Shiddat",
      artist: "Sachet Tandon, Nikhita Gandhi",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_915626579.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Shiddat/Barbaadiyan%20-%20Shiddat%20128%20Kbps.mp3"
    },
    {
      name: "Bandeya - Dil Juunglee",
      artist: "Arijit Singh",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_643490699.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Dil%20Juunglee/Bandeya%20(Dil%20Juunglee)%20128%20Kbps.mp3"
    },
    {
      name: "Akhiyaan Milavanga - Commando 3",
      artist: "Arijit Singh, Sruthy Sasidharan",
      img: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_25762861.jpg",
      src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Commando%203/Akhiyaan%20Milavanga%20-%20Commando%203%20128%20Kbps.mp3"
    },
    // {
    //   name: "",
    //   artist: "",
    //   img: "",
    //   src: ""
    // },
    // ... (add more entries with image and music URLs)
  ];
