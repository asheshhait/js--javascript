// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-420px)";
    nextBtn.style.transform = "translateX(420px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                closeBook(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            case 4:
                openBook();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}
 

// const API_KEY = "c8b2dcfb9173ff93b63b7e63a70605a1";
// const NEWS_URL = `https://gnews.io/api/v4/top-headlines?lang=en&country=in&max=6&token=${API_KEY}`;
const API_KEY = "pub_5c8b7f46717044b1843594565b253149";
const NEWS_URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=in&language=en&category=top`;



// const containers = [
//   document.querySelector("#f1 .news"),
//   document.querySelector("#b1 .news"),
//   document.querySelector("#f2 .news"),
//   document.querySelector("#b2 .news"),
//   document.querySelector("#f3 .news"),
//   document.querySelector("#b3 .news")
// ];

// fetch(NEWS_URL)
//   .then(res => res.json())
//   .then(data => {
//     const articles = data.articles;
// console.log(data.articles);

//     containers.forEach((container, i) => {
//       if (container && articles[i]) {
//         const article = articles[i];
//         const image = article.image ? article.image : 'https://via.placeholder.com/800x250?text=No+Image';

//         // Insert basic HTML
//         container.innerHTML = `
//           <div class="news-card">
//             <img src="${image}" alt="news image">
//             <h2>${article.title}</h2>
//             <p class="news-text">${article.description || article.content || "No content available."}</p>
//           </div>
//         `;

//         // "Read more" logic
//         const card = container.querySelector('.news-card');
//         const para = card.querySelector('p');

//         if (para.scrollHeight > 120) {
//           para.style.maxHeight = "120px";
//           para.style.overflow = "hidden";

//           const readMore = document.createElement('span');
//           readMore.classList.add('read-more');
//           readMore.textContent = 'Read more';
//           readMore.style.color = 'blue';
//           readMore.style.cursor = 'pointer';
//           readMore.style.fontSize = '14px';
//           readMore.style.marginTop = '8px';
//           readMore.style.display = 'inline-block';

//           readMore.addEventListener('click', () => {
//             const isExpanded = para.style.maxHeight === "none";
//             para.style.maxHeight = isExpanded ? "120px" : "none";
//             readMore.textContent = isExpanded ? "Read more" : "Read less";
//           });

//           para.after(readMore);
//         }
//       }
//     });
//   })
//   .catch(err => {
//     containers.forEach(container => {
//       if (container) {
//         container.innerHTML = `<p>Error loading news.</p>`;
//       }
//     });
//     console.error("Failed to load news:", err);
//   });

// ✅ Define containers BEFORE fetch
const containers = [
  document.querySelector("#f1 .news"),
  document.querySelector("#b1 .news"),
  document.querySelector("#f2 .news"),
  document.querySelector("#b2 .news"),
  document.querySelector("#f3 .news"),
  document.querySelector("#b3 .news")
];


fetch(NEWS_URL)
  .then(res => res.json())
  .then(data => {
    const articles = data.results;

    containers.forEach((container, i) => {
      if (container && articles[i]) {
        const article = articles[i];
        const image = article.image_url || 'https://via.placeholder.com/800x250.png?text=No+Image';
        const content = article.content || article.description || "No content available.";

        container.innerHTML = `
          <div class="news-card">
            <img src="${image}" alt="news image">
            <h2>${article.title}</h2>
            <p class="news-text">${content}</p>
            <a class="read-full" href="${article.link}" target="_blank">Read full article</a>
          </div>
        `;
    
      }
        

    });
  })
  .catch(err => {
    containers.forEach(container => {
      if (container) {
        container.innerHTML = `<p>Error loading news.</p>`;
      }
    });
    console.error("Failed to load news:", err);
  });

// Get all elements with the class "date"
const dateElements = document.querySelectorAll(".date");

// Format today’s date
const today = new Date();
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0');
const year = today.getFullYear();
const formattedDate = `d: ${day}/${month}/${year}`;

// Update all .date elements
dateElements.forEach(dateEl => {
  dateEl.textContent = formattedDate;
});

