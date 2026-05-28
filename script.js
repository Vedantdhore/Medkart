// ===== PRODUCT DATA =====
const products = [
  { id:1,  name:"Dolo 650 (Paracetamol)",   mfg:"Micro Labs",    price:28.50,  mrp:32,   icon:"💊", cat:"pain",      desc:"Fever & mild pain relief. 650mg, 15 tablets.",              rx:false, stock:50 },
  { id:2,  name:"Aspirin 75mg (Ecosprin)",   mfg:"USV Ltd",       price:45,     mrp:52,   icon:"❤️", cat:"pain",      desc:"Antiplatelet agent. 75mg, 30 tablets.",                     rx:false, stock:30 },
  { id:3,  name:"Crocin Pain Relief",        mfg:"GSK",           price:58,     mrp:65,   icon:"🩹", cat:"pain",      desc:"Extra strength for tough headaches. 500mg.",                rx:false, stock:5  },
  { id:4,  name:"Ibuprofen 400mg",           mfg:"Cipla",         price:38,     mrp:45,   icon:"💊", cat:"pain",      desc:"Anti-inflammatory pain relief. 10 tablets.",                rx:false, stock:25 },
  { id:5,  name:"Combiflam",                 mfg:"Sanofi",        price:54,     mrp:62,   icon:"🔴", cat:"pain",      desc:"Ibuprofen + Paracetamol combo. 20 tablets.",                rx:false, stock:18 },
  { id:6,  name:"Zitawyn Tablet",            mfg:"Sun Pharma",    price:99.75,  mrp:115,  icon:"💙", cat:"pain",      desc:"Joint & muscle pain. 10 tablets.",                          rx:true,  stock:12 },
  { id:7,  name:"Vitamin D3 60000 IU",       mfg:"Alkem",         price:185,    mrp:210,  icon:"☀️", cat:"vitamins",  desc:"Weekly vitamin D supplement. 4 sachets.",                   rx:false, stock:40 },
  { id:8,  name:"Cod Liver Oil 300mg",       mfg:"Apollo Life",   price:202.50, mrp:225,  icon:"🐟", cat:"vitamins",  desc:"Omega-3 fatty acids. 30 capsules.",                         rx:false, stock:20 },
  { id:9,  name:"Calcium + D3 Tablets",      mfg:"Pfizer",        price:120,    mrp:145,  icon:"🦴", cat:"vitamins",  desc:"Bone health support. 30 tablets.",                          rx:false, stock:35 },
  { id:10, name:"Multivitamin Complete",     mfg:"Himalaya",      price:165,    mrp:190,  icon:"💛", cat:"vitamins",  desc:"Daily nutrition support. 30 tablets.",                      rx:false, stock:28 },
  { id:11, name:"Zinc 50mg",                 mfg:"GNC",           price:89,     mrp:105,  icon:"⚡", cat:"vitamins",  desc:"Immune system support. 60 tablets.",                        rx:false, stock:45 },
  { id:12, name:"Metformin 500mg",           mfg:"Abbott",        price:42,     mrp:55,   icon:"🩸", cat:"diabetes",  desc:"Type 2 diabetes management. 30 tablets.",                   rx:true,  stock:15 },
  { id:13, name:"Glucon-D Orange 200ml",     mfg:"Zydus",         price:104.40, mrp:120,  icon:"🍊", cat:"diabetes",  desc:"Instant energy glucose drink.",                             rx:false, stock:60 },
  { id:14, name:"Diabetic Test Strips",      mfg:"Accu-Chek",     price:380,    mrp:420,  icon:"📊", cat:"diabetes",  desc:"Blood glucose test strips. 50 strips.",                     rx:false, stock:22 },
  { id:15, name:"Glipizide 5mg",             mfg:"USV",           price:65,     mrp:78,   icon:"💊", cat:"diabetes",  desc:"Blood sugar control. 30 tablets.",                          rx:true,  stock:8  },
  { id:16, name:"Cetaphil Moisturizer",      mfg:"Galderma",      price:312,    mrp:350,  icon:"🧴", cat:"skin",      desc:"Gentle daily moisturizer. 250ml.",                          rx:false, stock:30 },
  { id:17, name:"Clindamycin Gel 1%",        mfg:"Cipla",         price:95,     mrp:115,  icon:"✨", cat:"skin",      desc:"Acne treatment gel. 20g.",                                  rx:true,  stock:16 },
  { id:18, name:"Betadine Ointment",         mfg:"Win-Medicare",  price:68,     mrp:80,   icon:"🟤", cat:"skin",      desc:"Antiseptic wound ointment. 20g.",                           rx:false, stock:35 },
  { id:19, name:"Sunscreen SPF50+",          mfg:"Lotus Herbals", price:225,    mrp:260,  icon:"🌞", cat:"skin",      desc:"Broad spectrum sun protection. 50ml.",                      rx:false, stock:42 },
  { id:20, name:"Cetirizine 10mg",           mfg:"GSK",           price:18,     mrp:22,   icon:"🤧", cat:"cold",      desc:"Antihistamine for allergies. 10 tablets.",                  rx:false, stock:55 },
  { id:21, name:"Sinarest (Cold Tablet)",    mfg:"Centaur",       price:35,     mrp:42,   icon:"🤒", cat:"cold",      desc:"Cold & congestion relief. 10 tablets.",                     rx:false, stock:30 },
  { id:22, name:"Betadine Gargle",           mfg:"Win-Medicare",  price:78,     mrp:90,   icon:"🫧", cat:"cold",      desc:"Antiseptic throat gargle. 100ml.",                          rx:false, stock:20 },
  { id:23, name:"Vicks Cough Syrup",         mfg:"P&G",           price:92,     mrp:108,  icon:"🍵", cat:"cold",      desc:"Cough suppressant + expectorant. 100ml.",                   rx:false, stock:38 },
  { id:24, name:"Azithromycin 500mg",        mfg:"Pfizer",        price:155,    mrp:182,  icon:"💊", cat:"cold",      desc:"Antibiotic for respiratory infections. 3 tabs.",             rx:true,  stock:14 },
  { id:25, name:"Ranitidine 150mg",          mfg:"Cipla",         price:32,     mrp:38,   icon:"🫃", cat:"digestive", desc:"Acid reflux & heartburn. 10 tablets.",                      rx:false, stock:45 },
  { id:26, name:"ORS Sachet Mango",          mfg:"Electral",      price:28,     mrp:35,   icon:"💧", cat:"digestive", desc:"Oral rehydration salts. Pack of 5.",                        rx:false, stock:70 },
  { id:27, name:"Omeprazole 20mg",           mfg:"Sun Pharma",    price:52,     mrp:65,   icon:"🟡", cat:"digestive", desc:"Proton pump inhibitor. 15 capsules.",                       rx:false, stock:28 },
  { id:28, name:"Isabgol Husk 100g",         mfg:"Dabur",         price:88,     mrp:100,  icon:"🌿", cat:"digestive", desc:"Dietary fiber for digestion & constipation.",               rx:false, stock:50 },
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('medkart_cart') || '[]');
let currentFilter = 'all';
let currentSort = 'default';
let searchQuery = '';

// ===== CART STORAGE =====
function saveCart() {
  localStorage.setItem('medkart_cart', JSON.stringify(cart));
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cart-count').textContent = count;
}

// ===== RENDER PRODUCTS =====
function renderProducts() {
  let list = [...products];

  // Filter by category
  if (currentFilter !== 'all') {
    list = list.filter(p => p.cat === currentFilter);
  }

  // Filter by search query
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.mfg.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
    );
  }

  // Sort
  if (currentSort === 'price-low')  list.sort((a, b) => a.price - b.price);
  if (currentSort === 'price-high') list.sort((a, b) => b.price - a.price);
  if (currentSort === 'discount')   list.sort((a, b) => (b.mrp - b.price) - (a.mrp - a.price));

  const grid = document.getElementById('products-grid');
  document.getElementById('products-count').textContent =
    `Showing ${list.length} product${list.length !== 1 ? 's' : ''}`;

  if (!list.length) {
    grid.innerHTML = '<div class="no-results">😔 No products found. Try a different search.</div>';
    return;
  }

  grid.innerHTML = list.map(p => {
    const inCart = cart.find(i => i.id === p.id);
    const discount = Math.round(((p.mrp - p.price) / p.mrp) * 100);

    return `
      <div class="product-card" id="card-${p.id}">
        ${discount > 0 ? `<div class="product-badge">${discount}% OFF</div>` : ''}
        ${p.rx ? `<div class="product-badge rx" style="top:10px;left:auto;right:10px">Rx</div>` : ''}
        <div class="product-img">${p.icon}</div>
        <div class="product-info">
          <div class="product-name">${p.name}</div>
          <div class="product-mfg">${p.mfg}</div>
          <div class="product-desc">${p.desc}</div>
          ${p.stock <= 10 ? `<div class="stock-low">⚠ Only ${p.stock} left!</div>` : ''}
          <div class="product-bottom">
            <div class="product-price">
              ${p.mrp > p.price ? `<s>₹${p.mrp}</s>` : ''}
              ₹${p.price.toFixed(2)}
            </div>
            <button
              class="add-btn ${inCart ? 'added' : ''}"
              id="btn-${p.id}"
              onclick="addToCart(${p.id})"
            >${inCart ? '✓ Added' : '+ Add'}</button>
          </div>
        </div>
      </div>`;
  }).join('');
}

// ===== CART ACTIONS =====
function addToCart(id) {
  const prod = products.find(p => p.id === id);
  const existing = cart.find(i => i.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...prod, qty: 1 });
  }

  saveCart();
  updateCartCount();
  renderCart();

  const btn = document.getElementById('btn-' + id);
  if (btn) { btn.textContent = '✓ Added'; btn.classList.add('added'); }
  showToast(`${prod.name} added to cart`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartCount();
  renderCart();
  renderProducts();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  saveCart();
  updateCartCount();
  renderCart();
}

// ===== RENDER CART =====
function renderCart() {
  const container = document.getElementById('cart-items-container');
  const footer = document.getElementById('cart-footer');

  if (!cart.length) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🛒</div>
        <p>Your cart is empty</p>
        <p style="font-size:0.8rem;margin-top:4px">Add medicines to get started</p>
      </div>`;
    footer.style.display = 'none';
    return;
  }

  footer.style.display = 'block';
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="ci-icon">${item.icon}</div>
      <div class="ci-info">
        <div class="ci-name">${item.name}</div>
        <div class="ci-mfg">${item.mfg}</div>
        <div class="ci-controls">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
          <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      </div>
      <div class="ci-price">₹${(item.price * item.qty).toFixed(2)}</div>
    </div>`).join('');

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const eligible = subtotal >= 1000;
  const discount = eligible ? subtotal * 0.15 : 0;
  const total = subtotal - discount;

  document.getElementById('cart-subtotal').textContent = '₹' + subtotal.toFixed(2);
  document.getElementById('cart-total').textContent    = '₹' + total.toFixed(2);
  document.getElementById('discount-note').style.display = eligible ? 'block' : 'none';
}

// ===== CART TOGGLE =====
function toggleCart() {
  const overlay = document.getElementById('cart-overlay');
  overlay.classList.toggle('open');
  renderCart();
}

function closeCartOnOverlay(e) {
  if (e.target === document.getElementById('cart-overlay')) toggleCart();
}

// ===== FILTER & SORT =====
function filterCategory(cat, el) {
  currentFilter = cat;
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderProducts();
  scrollToProducts();
}

function sortProducts(type, btn) {
  currentSort = type;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts();
}

function handleSearch(val) {
  searchQuery = val;
  renderProducts();
  if (val) scrollToProducts();
}

// ===== HELPERS =====
function scrollToProducts() {
  document.getElementById('products-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = '✓ ' + msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ===== CHECKOUT =====
function checkout() {
  if (!cart.length) return;

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const discount = subtotal >= 1000 ? subtotal * 0.15 : 0;
  const total = (subtotal - discount).toFixed(2);

  const itemLines = cart.map(i => `${i.name} x${i.qty} — ₹${(i.price * i.qty).toFixed(2)}`).join('\n');
  const discountLine = discount > 0 ? `Discount (15%): -₹${discount.toFixed(2)}\n` : '';

  alert(
    `Order Summary\n\n${itemLines}\n\n${discountLine}Total: ₹${total}\n\n` +
    `Thank you for choosing MedKart! 🎉\n(This is a demo — no real transaction processed)`
  );

  cart = [];
  saveCart();
  updateCartCount();
  renderCart();
  toggleCart();
  renderProducts();
}

// ===== INIT =====
updateCartCount();
renderProducts();
