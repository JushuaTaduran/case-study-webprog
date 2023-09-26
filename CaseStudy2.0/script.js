const favoriteList = [
  {
    id: "dota2--favorite--card",
    img: "https://i.pinimg.com/564x/b0/3a/9a/b03a9ab25a3e9449a6bc4645f97ba213.jpg",
    alt: "dota2",
    text: "DOTA 2",
  },
  {
    id: "valorant--favorite--card",
    img: "https://i.pinimg.com/564x/99/4c/ff/994cff5e8c7d4b73359d015b38c89117.jpg",
    alt: "valorant",
    text: "Valorant",
  },
  {
    id: "albion--upcoming--card",
    img: "https://i.pinimg.com/564x/99/ca/46/99ca4657f329b26cd47b00a2cb342591.jpg",
    alt: "albion",
    text: "Albion Online",
  },
  {
    id: "genshin--upcoming--card",
    img: "https://i.pinimg.com/564x/cf/e6/bd/cfe6bdd5f0d25b0364642d6eafc1e735.jpg",
    alt: "genshin",
    text: "Genshin Impact",
  },
  {
    id: "wildrift--upcoming--card",
    img: "https://i.pinimg.com/564x/26/66/60/2666601b85f40898dc3f2b566f12c075.jpg",
    alt: "wildrift",
    text: "WildRift",
  },
  {
    id: "apex--upcoming--card",
    img: "https://i.pinimg.com/564x/1a/9c/d1/1a9cd17aeeb8d448bdf4d65b96e1650a.jpg",
    alt: "apex",
    text: "Apex Legends",
  },
  {
    id: "octopath--upcoming--card",
    img: "https://i.pinimg.com/564x/a9/d0/7c/a9d07c476ee21a38efb9632a8ee823db.jpg",
    alt: "octopath",
    text: "Octopath Traveler",
  },
  {
    id: "toram--upcoming--card",
    img: "https://toram-jp.akamaized.net/en/img/common/ogp_toramonline.jpg",
    alt: "toram",
    text: "Toram Online",
  },
];

function FavoriteCollection() {
  const cards = document.querySelector(".favorite--cards");

  cards.innerHTML = favoriteList
    .map(
      (card) =>
        `
        <figure id="${card.id}">
              <img
                src="${card.img}"
                alt="${card.alt}"
              />
              <figcaption>
                <h3>${card.text}</h3>
              </figcaption>
            </figure>
   `
    )
    .join("");
}

const upcomingList = [
  {
    id: "blueprotocol--upcoming--card",
    img: "https://www.gematsu.com/wp-content/uploads/2021/11/Gematsu-Page-Box-Art_Blue-Protocol-Inits-320x480.jpg",
    alt: "blueprotocol",
    text: "Blue Protocol",
  },
  {
    id: "TnL--upcoming--card",
    img: "https://images.igdb.com/igdb/image/upload/t_original/co6loz.jpg",
    alt: "TnL",
    text: "Throne and Liberty",
  },
  {
    id: "chrono--upcoming--card",
    img: "https://www.gematsu.com/wp-content/uploads/2023/05/Chrono-Odyssey_2023_05-03-23_053-320x569.jpg",
    alt: "chrono odyssey",
    text: "Chrono Odyssey",
  },
  {
    id: "palworld--upcoming--card",
    img: "https://m.media-amazon.com/images/M/MV5BZWNhOGVmOTQtYThkNC00Nzc2LTg3M2ItNjVlMTEzNTJmZTNiXkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_FMjpg_UX1000_.jpg",
    alt: "palworld",
    text: "PalWorld",
  },
  {
    id: "nightingale--upcoming--card",
    img: "https://www.gematsu.com/wp-content/uploads/2021/12/Game-Page-Box-Art_Nightingale-Inits-320x480.jpg",
    alt: "nightingale",
    text: "Nightingale",
  },
  {
    id: "arcraiders--upcoming--card",
    img: "https://s01.riotpixels.net/data/c9/48/c9480a62-5842-4990-9487-ca3ef30cebc0.jpg.2160p.jpg/artwork.arc-raiders.1440x2160.2021-12-10.26.jpg",
    alt: "arcraiders",
    text: "Arc Raiders",
  },
  {
    id: "nekoodyssey--upcoming--card",
    img: "https://cdn.releases.com/img/image/3fe3cb70-1d42-4909-a447-70514f86db79.jpg/300",
    alt: "nekoodyssey",
    text: "Neko Odyssey",
  },
  {
    id: "papertrail--upcoming--card",
    img: "https://www.gameinformer.com/sites/default/files/styles/product_box_art/public/2023/04/20/025ff8c2/paper_trail_art.jpg",
    alt: "papertrail",
    text: "Paper Trail",
  },
];

function UpcomingCollection() {
  const cards = document.querySelector(".upcoming--cards");

  cards.innerHTML = upcomingList
    .map(
      (card) =>
        `
          <figure id="${card.id}">
                <img
                  src="${card.img}"
                  alt="${card.alt}"
                />
                <figcaption>
                  <h3>${card.text}</h3>
                </figcaption>
              </figure>
     `
    )
    .join("");
}

const newsList = [
  {
    id: "nm01--news--card",
    authorImg:
      "https://media.pocketgamer.biz/2022/11/119406/netmarble-r225x225.png",
    authorAlt: "netmarble",
    author: "NetMarble",
    newsDate: "Sep 19, 2023",
    img: "https://hedwig-cf.netmarble.com/forum-common/nanagb/7ds_en/thumbnail/3b22d367b62e4c3eb3cd06070c2f48a8_1695089205277_d.jpg",
    alt: "blueprotocol",
    title: "[Event] LR Evolution Posting",
    text: "The long awaited third LR Hero is out now! Evolve [New Legend] Princess Elizabeth to LR and show us proof for a chance to win Rewards!",
  },
  {
    id: "nm01--news--card",
    authorImg:
      "https://media.pocketgamer.biz/2022/11/119406/netmarble-r225x225.png",
    authorAlt: "netmarble",
    author: "NetMarble",
    newsDate: "Sep 19, 2023",
    img: "https://hedwig-cf.netmarble.com/forum-common/nanagb/7ds_en/thumbnail/3b22d367b62e4c3eb3cd06070c2f48a8_1695089205277_d.jpg",
    alt: "blueprotocol",
    title: "[Event] LR Evolution Posting",
    text: "The long awaited third LR Hero is out now! Evolve [New Legend] Princess Elizabeth to LR and show us proof for a chance to win Rewards!",
  },
  {
    id: "nm01--news--card",
    authorImg:
      "https://media.pocketgamer.biz/2022/11/119406/netmarble-r225x225.png",
    authorAlt: "netmarble",
    author: "NetMarble",
    newsDate: "Sep 19, 2023",
    img: "https://hedwig-cf.netmarble.com/forum-common/nanagb/7ds_en/thumbnail/3b22d367b62e4c3eb3cd06070c2f48a8_1695089205277_d.jpg",
    alt: "blueprotocol",
    title: "[Event] LR Evolution Posting",
    text: "The long awaited third LR Hero is out now! Evolve [New Legend] Princess Elizabeth to LR and show us proof for a chance to win Rewards!",
  },
];

function NewsCollection() {
  const news = document.querySelector(".news--cards");

  news.innerHTML = newsList
    .map(
      (news) =>
        `
        <figure id="${news.id}">
        <img src="${news.img}" alt="${news.alt}" />
        <figcaption>
         <div class="news--content--body">
          <h3>${news.title}</h3>
          <p>${news.text}</p>
         </div>
         <div class="news--content--author">
          <img src="${news.authorImg}" alt="${news.authorAlt}">
          <div class="author">
            <h4>${news.author}</h4>
            <p>${news.newsDate}</p>
          </div>
         </div>
        </figcaption>
      </figure>
     `
    )
    .join("");
}

const releaseList = [
  {
    id: "blueprotocol--release--card",
    img: "https://i.pinimg.com/564x/8f/33/cc/8f33ccaad67e0be9ef4ea60e902cdedc.jpg",
    title: "Blue Protocol",
    date: "December 2023",
  },
  {
    id: "blueprotocol--release--card",
    img: "https://i.pinimg.com/564x/8f/33/cc/8f33ccaad67e0be9ef4ea60e902cdedc.jpg",
    title: "Blue Protocol",
    date: "December 2023",
  },
  {
    id: "blueprotocol--release--card",
    img: "https://i.pinimg.com/564x/8f/33/cc/8f33ccaad67e0be9ef4ea60e902cdedc.jpg",
    title: "Blue Protocol",
    date: "December 2023",
  },
  {
    id: "blueprotocol--release--card",
    img: "https://i.pinimg.com/564x/8f/33/cc/8f33ccaad67e0be9ef4ea60e902cdedc.jpg",
    title: "Blue Protocol",
    date: "December 2023",
  },
];

function ReleaseCollection() {
  const release = document.querySelector(".release--cards");

  release.innerHTML = releaseList
    .map(
      (release) =>
        `
        <figure id="${release.id}">
        <img src="${release.img}" alt="${release.alt}" />
        <figcaption>
         <h4>${release.title}</h4>
         <p>${release.date}</p>
        </figcaption>
      </figure>
     `
    )
    .join("");
}

ReleaseCollection();
NewsCollection();
FavoriteCollection();
UpcomingCollection();
