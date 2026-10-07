// ========== Sample Data ==========
const listings = [
  {
    id: 1,
    title: "iPhone 14 Pro Max 256GB Deep Purple",
    price: 89999,
    category: "mobiles",
    location: "delhi",
    date: "2026-10-05",
    image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=500&h=400&fit=crop",
    description: "Excellent condition. Box + bill available. No scratches. Battery health 94%. Face ID working perfectly. Negotiable."
  },
  {
    id: 2,
    title: "Honda City 2021 VX CVT – Single Owner",
    price: 1050000,
    category: "cars",
    location: "mumbai",
    date: "2026-10-04",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=400&fit=crop",
    description: "Petrol, Automatic. 28,000 km driven. Full service history. Insurance valid till 2027. Looking for urgent sale."
  },
  {
    id: 3,
    title: "Sony WH-1000XM5 Noise Cancelling Headphones",
    price: 18999,
    category: "electronics",
    location: "bangalore",
    date: "2026-10-06",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&h=400&fit=crop",
    description: "Brand new, unopened. Bought last month. Sealed pack with invoice."
  },
  {
    id: 4,
    title: "Wooden King Size Bed with Storage",
    price: 22000,
    category: "furniture",
    location: "pune",
    date: "2026-10-03",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&h=400&fit=crop",
    description: "Solid wood, hydraulic storage. Excellent condition. Can help with delivery within Pune."
  },
  {
    id: 5,
    title: "Royal Enfield Classic 350 – 2022",
    price: 145000,
    category: "bikes",
    location: "hyderabad",
    date: "2026-10-02",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&h=400&fit=crop",
    description: "Gunmetal Grey. 9,800 km. All papers clear. Recently serviced. Serious buyers only."
  },
  {
    id: 6,
    title: "Samsung 55\" 4K Smart TV (2023 model)",
    price: 42000,
    category: "electronics",
    location: "chennai",
    date: "2026-10-01",
    image: "https://images.unsplash.com/photo-1593359677198-acd8d6e0d0e9?w=500&h=400&fit=crop",
    description: "Crystal UHD. Perfect picture. Remote + wall mount included. Moving sale."
  },
  {
    id: 7,
    title: "MacBook Air M2 8/256 – Space Grey",
    price: 78000,
    category: "electronics",
    location: "delhi",
    date: "2026-09-30",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=400&fit=crop",
    description: "Purchased Dec 2024. Barely used. AppleCare+ till 2026. Original box and charger."
  },
  {
    id: 8,
    title: "2 BHK Fully Furnished Flat for Rent",
    price: 28000,
    category: "properties",
    location: "bangalore",
    date: "2026-10-05",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop",
    description: "Indiranagar. 2nd floor. Power backup, lift, security. Available from 15th Oct. Family preferred."
  },
  {
    id: 9,
    title: "Nike Air Force 1 – Size 9 (White)",
    price: 4500,
    category: "fashion",
    location: "mumbai",
    date: "2026-10-06",
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&h=400&fit=crop",
    description: "Worn twice. Original box. Perfect condition. Genuine product."
  },
  {
    id: 10,
    title: "Graphic Designer – Remote / Hybrid",
    price: 45000,
    category: "jobs",
    location: "delhi",
    date: "2026-10-04",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop",
    description: "Looking for experienced UI/UX + Graphic Designer. 2+ years exp preferred. Portfolio required. Salary 40-50k."
  },
  {
    id: 11,
    title: "Maruti Swift VXI 2019 – White",
    price: 485000,
    category: "cars",
    location: "pune",
    date: "2026-10-03",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&h=400&fit=crop",
    description: "Petrol, Manual. 42,000 km. One owner. Excellent condition. All service records available."
  },
  {
    id: 12,
    title: "OnePlus 12 12GB/256GB – Green",
    price: 52000,
    category: "mobiles",
    location: "hyderabad",
    date: "2026-10-07",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=400&fit=crop",
    description: "Just 3 months old. Screen protector + case applied from day 1. Bill + box available."
  }
];

const categories = [
  { id: "all", name: "All", icon: "fa-th-large" },
  { id: "cars", name: "Cars", icon: "fa-car" },
  { id: "mobiles", name: "Mobiles", icon: "fa-mobile-alt" },
  { id: "electronics", name: "Electronics", icon: "fa-laptop" },
  { id: "furniture", name: "Furniture", icon: "fa-couch" },
  { id: "bikes", name: "Bikes", icon: "fa-motorcycle" },
  { id: "fashion", name: "Fashion", icon: "fa-tshirt" },
  { id: "properties", name: "Properties", icon: "fa-home" },
  { id: "jobs", name: "Jobs", icon: "fa-briefcase" }
];

const locationNames = {
  all: "All India",
  delhi: "Delhi",
  mumbai: "Mumbai",
  bangalore: "Bangalore",
  hyderabad: "Hyderabad",
  chennai: "Chennai",
  pune: "Pune"
};

// ========== State ==========
let currentListings = [...listings];
let activeCategory = "all";

// ========== DOM Elements ==========
const listingsGrid = document.getElementById("listingsGrid");
const noResults = document.getElementById("noResults");
const resultsCount = document.getElementById("resultsCount");
const resultsTitle = document.getElementById("resultsTitle");
const categoryList = document.getElementById("categoryList");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const locationSelect = document.getElementById("locationSelect");
const filterCategory = document.getElementById("filterCategory");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const sortBy = document.getElementById("sortBy");
const applyFilters = document.getElementById("applyFilters");
const clearFilters = document.getElementById("clearFilters");
const adModal = document.getElementById("adModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");
const sellModal = document.getElementById("sellModal");
const sellBtn = document.getElementById("sellBtn");
const closeSellModal = document.getElementById("closeSellModal");
const sellForm = document.getElementById("sellForm");
const loginBtn = document.getElementById("loginBtn");

// ========== Helpers ==========
function formatPrice(price) {
  return "₹ " + price.toLocaleString("en-IN");
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  const diff = Math.floor((now - d) / (1000 * 60 * 60 * 24));
  if (diff === 0) return "Today";
  if (diff === 1) return "Yesterday";
  if (diff < 7) return `${diff} days ago`;
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}

// ========== Render Categories ==========
function renderCategories() {
  categoryList.innerHTML = categories
    .map(
      (cat) => `
    <div class="category-item ${cat.id === activeCategory ? "active" : ""}" data-category="${cat.id}">
      <i class="fas ${cat.icon}"></i>
      <span>${cat.name}</span>
    </div>
  `
    )
    .join("");

  document.querySelectorAll(".category-item").forEach((el) => {
    el.addEventListener("click", () => {
      activeCategory = el.dataset.category;
      filterCategory.value = activeCategory;
      renderCategories();
      applyAllFilters();
    });
  });
}

// ========== Render Listings ==========
function renderListings(data) {
  if (data.length === 0) {
    listingsGrid.innerHTML = "";
    noResults.style.display = "block";
    resultsCount.textContent = "0 ads";
    return;
  }

  noResults.style.display = "none";
  resultsCount.textContent = `${data.length} ad${data.length > 1 ? "s" : ""}`;

  listingsGrid.innerHTML = data
    .map(
      (item) => `
    <article class="listing-card" data-id="${item.id}">
      <img class="listing-img" src="${item.image}" alt="${item.title}" loading="lazy"
           onerror="this.src='https://via.placeholder.com/400x300?text=No+Image'" />
      <div class="listing-body">
        <div class="listing-price">${formatPrice(item.price)}</div>
        <div class="listing-title">${item.title}</div>
        <div class="listing-meta">
          <span class="listing-location">
            <i class="fas fa-map-marker-alt"></i>
            ${locationNames[item.location] || item.location}
          </span>
          <span>${formatDate(item.date)}</span>
        </div>
      </div>
    </article>
  `
    )
    .join("");

  document.querySelectorAll(".listing-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = parseInt(card.dataset.id);
      openAdModal(id);
    });
  });
}

// ========== Filters ==========
function applyAllFilters() {
  let filtered = [...listings];

  // Category
  const cat = filterCategory.value || activeCategory;
  if (cat && cat !== "all") {
    filtered = filtered.filter((item) => item.category === cat);
  }

  // Location
  const loc = locationSelect.value;
  if (loc && loc !== "all") {
    filtered = filtered.filter((item) => item.location === loc);
  }

  // Search
  const query = searchInput.value.trim().toLowerCase();
  if (query) {
    filtered = filtered.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
  }

  // Price
  const min = parseInt(minPrice.value) || 0;
  const max = parseInt(maxPrice.value) || Infinity;
  filtered = filtered.filter((item) => item.price >= min && item.price <= max);

  // Sort
  const sort = sortBy.value;
  if (sort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else {
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  currentListings = filtered;

  // Update title
  if (query) {
    resultsTitle.textContent = `Results for "${query}"`;
  } else if (cat && cat !== "all") {
    const catName = categories.find((c) => c.id === cat)?.name || cat;
    resultsTitle.textContent = catName;
  } else {
    resultsTitle.textContent = "Fresh recommendations";
  }

  renderListings(filtered);
}

// ========== Modal: View Ad ==========
function openAdModal(id) {
  const item = listings.find((l) => l.id === id);
  if (!item) return;

  modalBody.innerHTML = `
    <img class="modal-img" src="${item.image}" alt="${item.title}"
         onerror="this.src='https://via.placeholder.com/600x400?text=No+Image'" />
    <div class="modal-price">${formatPrice(item.price)}</div>
    <div class="modal-title">${item.title}</div>
    <div class="modal-meta">
      <span><i class="fas fa-map-marker-alt"></i> ${locationNames[item.location]}</span>
      <span><i class="fas fa-calendar"></i> ${formatDate(item.date)}</span>
      <span><i class="fas fa-tag"></i> ${item.category}</span>
    </div>
    <div class="modal-desc">${item.description}</div>
    <div class="modal-contact">
      <button class="btn-chat" onclick="alert('Chat feature coming soon!')">
        <i class="fas fa-comments"></i> Chat with Seller
      </button>
    </div>
  `;

  adModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeAdModal() {
  adModal.classList.remove("open");
  document.body.style.overflow = "";
}

// ========== Modal: Sell ==========
function openSellModal() {
  sellModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeSellModalFn() {
  sellModal.classList.remove("open");
  document.body.style.overflow = "";
  sellForm.reset();
}

// ========== Event Listeners ==========
searchBtn.addEventListener("click", applyAllFilters);
searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") applyAllFilters();
});

locationSelect.addEventListener("change", applyAllFilters);
applyFilters.addEventListener("click", applyAllFilters);

clearFilters.addEventListener("click", () => {
  searchInput.value = "";
  locationSelect.value = "all";
  filterCategory.value = "all";
  minPrice.value = "";
  maxPrice.value = "";
  sortBy.value = "newest";
  activeCategory = "all";
  renderCategories();
  applyAllFilters();
});

closeModal.addEventListener("click", closeAdModal);
adModal.addEventListener("click", (e) => {
  if (e.target === adModal) closeAdModal();
});

sellBtn.addEventListener("click", openSellModal);
closeSellModal.addEventListener("click", closeSellModalFn);
sellModal.addEventListener("click", (e) => {
  if (e.target === sellModal) closeSellModalFn();
});

sellForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newAd = {
    id: Date.now(),
    title: document.getElementById("adTitle").value.trim(),
    price: parseInt(document.getElementById("adPrice").value),
    category: document.getElementById("adCategory").value,
    location: document.getElementById("adLocation").value,
    date: new Date().toISOString().slice(0, 10),
    image: "https://via.placeholder.com/500x400?text=" + encodeURIComponent("New Ad"),
    description: document.getElementById("adDescription").value.trim() || "No description provided."
  };

  listings.unshift(newAd);
  closeSellModalFn();
  applyAllFilters();
  alert("Your ad has been posted successfully!");
});

loginBtn.addEventListener("click", () => {
  alert("Login feature is a demo. In a real app this would open a login form.");
});

// Close modals with Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeAdModal();
    closeSellModalFn();
  }
});

// ========== Init ==========
renderCategories();
applyAllFilters();
