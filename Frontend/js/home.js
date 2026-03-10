    // 1. بيانات المنتجات الأصلية من تصميمك
    const productsData = [
        { id: 1, name: "آيفون 15 برو ماكس", price: "59,999", priceNum: 59999, badge: "الأكثر مبيعاً", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500" },
        { id: 2, name: "ماك بوك برو 16 بوصة M3", price: "124,999", priceNum: 124999, badge: "الأعلى تقييماً", image: "https://images.unsplash.com/photo-1710905059620-796ae1458a0a?w=500" },
        { id: 3, name: "سوني WH-1000XM5", price: "19,999", priceNum: 19999, badge: "عرض خاص", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
        { id: 4, name: "آبل ووتش سيريز 9", price: "21,499", priceNum: 21499, image: "https://images.unsplash.com/photo-1579721840641-7d0e67f1204e?w=500" }
    ];

    let cart = [];

    // 2. دالة البداية وتهيئة العناصر
    function init() {
        renderCategories();
        renderProducts(productsData);
        renderFeatures();
        renderChatbot();
        lucide.createIcons(); // تفعيل أيقونات Lucide
    }

    function renderCategories() {
        const categories = [
            { icon: 'smartphone', name: 'موبايلات', color: 'from-blue-500 to-cyan-500' },
            { icon: 'laptop', name: 'لابتوبات', color: 'from-purple-500 to-pink-500' },
            { icon: 'headphones', name: 'سماعات', color: 'from-orange-500 to-red-500' },
            { icon: 'watch', name: 'ساعات ذكية', color: 'from-green-500 to-emerald-500' },
            { icon: 'gamepad-2', name: 'جيمنج', color: 'from-indigo-500 to-purple-500' },
            { icon: 'home', name: 'منزليات', color: 'from-yellow-500 to-orange-500' },
            { icon: 'cable', name: 'إكسسوارات', color: 'from-teal-500 to-cyan-500' }
        ];
        const box = document.getElementById('categories-container');
        box.innerHTML = categories.map(cat => `
            <button class="group p-8 bg-white rounded-2xl border border-slate-200 hover:shadow-xl transition-all flex flex-col items-center gap-4">
                <div class="w-16 h-16 bg-gradient-to-br ${cat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <i data-lucide="${cat.icon}" class="w-8 h-8 text-white"></i>
                </div>
                <span class="text-slate-900 text-sm font-medium">${cat.name}</span>
            </button>`).join('');
    }

    function renderProducts(data) {
        const box = document.getElementById('featured-products');
        box.innerHTML = data.map(p => `
            <div class="product-card group bg-white rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all overflow-hidden">
                <div class="relative aspect-square overflow-hidden bg-slate-50">
                    <img src="${p.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    ${p.badge ? `<div class="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-[10px]">${p.badge}</div>` : ''}
                    <button onclick="addToCart(${p.id})" class="absolute bottom-4 left-4 p-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-600 hover:text-white">
                        <i data-lucide="shopping-cart" class="w-5 h-5"></i>
                    </button>
                </div>
                <div class="p-6">
                    <h3 class="mb-2 text-slate-900 font-bold text-sm h-10 overflow-hidden">${p.name}</h3>
                    <div class="flex items-center gap-2">
                        <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">${p.price} ج.م</span>
                    </div>
                </div>
            </div>`).join('');
        lucide.createIcons();
    }

    function renderFeatures() {
        const features = [
            { icon: 'sparkles', title: 'توصيات ذكية', description: 'مساعدنا الذكي يساعدك تختار المنتج المثالي.' },
            { icon: 'shield-check', title: 'ضمان كامل', description: 'براندات موثوقة وأجهزة أصلية مع ضمان سنة.' },
            { icon: 'truck', title: 'توصيل لباب البيت', description: 'طلباتك توصلك بأمان وفي أسرع وقت ممكن.' }
        ];
        const box = document.getElementById('features-container');
        box.innerHTML = features.map(f => `
            <div class="p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all">
                <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6"><i data-lucide="${f.icon}" class="text-white"></i></div>
                <h3 class="mb-3 text-slate-900 font-bold">${f.title}</h3>
                <p class="text-slate-600 text-sm leading-relaxed">${f.description}</p>
            </div>`).join('');
    }

    // 3. منطق السلة
    function toggleCartModal() {
        document.getElementById('cart-modal').classList.toggle('hidden');
    }

    function addToCart(id) {
        const product = productsData.find(p => p.id === id);
        const exists = cart.find(item => item.id === id);
        if (exists) exists.quantity++;
        else cart.push({ ...product, quantity: 1 });
        updateCartUI();
        toggleCartModal();
    }

    function updateCartUI() {
        const badge = document.getElementById('cart-badge');
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.innerText = totalItems;
        badge.classList.toggle('hidden', totalItems === 0);

        const container = document.getElementById('cart-items');
        const summary = document.getElementById('cart-summary');

        if (cart.length === 0) {
            container.innerHTML = `<div class="text-center py-20 text-gray-500 font-bold text-lg animate-fadeIn">السلة فارغة</div>`;
            summary.innerHTML = '';
            return;
        }

            container.innerHTML = cart.map((item, index) => `
                <div class="bg-white p-4 rounded-xl border border-purple-100 flex gap-4 animate-slideUp shadow-sm hover:border-purple-200 transition-all">
                    <img src="${item.image}" class="w-20 h-20 rounded-lg object-cover">
                    <div class="flex-1 min-w-0">
                        <h4 class="font-bold text-sm text-gray-800 truncate">${item.name}</h4>
                        <div class="text-purple-600 font-bold mt-1">${item.price} ج.م</div>
                        <div class="flex items-center gap-4 mt-2">
                            <button onclick="changeQty(${index}, -1)" class="p-1 bg-purple-50 rounded text-purple-600 hover:bg-purple-100"><i data-lucide="minus" class="w-4 h-4"></i></button>
                            <span class="text-sm font-bold w-4 text-center">${item.quantity}</span>
                            <button onclick="changeQty(${index}, 1)" class="p-1 bg-purple-50 rounded text-purple-600 hover:bg-purple-100"><i data-lucide="plus" class="w-4 h-4"></i></button>
                        </div>
                    </div>
                    <button onclick="removeFromCart(${index})" class="text-red-400 p-1 hover:text-red-600 transition-colors"><i data-lucide="trash-2" class="w-5 h-5"></i></button>
                </div>`).join('');
            const subtotal = cart.reduce((sum, item) => sum + (item.priceNum * item.quantity), 0);
            summary.innerHTML = `
                <div class="space-y-3 mb-4">
                    <div class="flex justify-between text-gray-600 text-sm"><span>المجموع الفرعي</span><span>${subtotal.toLocaleString()} ج.م</span></div>
                    <div class="flex justify-between text-xl font-bold"><span>الإجمالي</span><span class="text-purple-600">${subtotal.toLocaleString()} ج.م</span></div>
                </div>
                <button onclick="sendToWhatsApp()" class="w-full bg-green-600 text-white py-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 hover:bg-green-700 transition-all active:scale-95">
                    <i data-lucide="message-circle"></i> اتمام الطلب عبر واتساب
                </button>`;
            lucide.createIcons();
        }

        function changeQty(index, delta) {
            cart[index].quantity += delta;
            if (cart[index].quantity <= 0) cart.splice(index, 1);
            updateCartUI();
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartUI();
        }

        function sendToWhatsApp() {
            let message = "🌟 *طلب جديد من فولتكس* 🌟\n\n";
            cart.forEach((item, i) => message += `${i + 1}. *${item.name}* (الكمية: ${item.quantity})\n`);
            const total = cart.reduce((sum, item) => sum + (item.priceNum * item.quantity), 0);
            message += `\n💰 *الإجمالي: ${total.toLocaleString()} ج.م*`;
            window.open(`https://wa.me/201234567890?text=${encodeURIComponent(message)}`, '_blank');
        }

        //منطق البحث//
        function searchProducts() {
            const query = document.getElementById('main-search').value.toLowerCase().trim();
            const box = document.getElementById('featured-products');

            // تأثير خفوت بسيط قبل عرض النتائج
            box.style.opacity = "0.5";

            setTimeout(() => {
                const filtered = productsData.filter(p =>
                    p.name.toLowerCase().includes(query)
                );

                if (filtered.length > 0) {
                    renderProducts(filtered);
                } else {
                    box.innerHTML = `
                <div class="col-span-full text-center py-20">
                    <p class="text-slate-400 text-xl">مفيش نتايج للبحث ده.. جرب كلمة تانية 🔍</p>
                </div>`;
                }
                box.style.opacity = "1";
            }, 200);
            if (query.length > 0) {
                box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }

        }


    // 4. منطق الشات بوت المرتبط بـ Node.js
    function renderChatbot() {
        const container = document.getElementById('chatbot-container');
        container.innerHTML = `
            <button id="chat-toggle-btn" class="fixed bottom-6 left-6 z-50 flex flex-col items-center gap-2">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all">
                    <i data-lucide="message-square" class="w-7 h-7 text-white"></i>
                </div>
            </button>
            <div id="chat-window-box" class="fixed bottom-6 left-6 z-50 w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 hidden">
                <div class="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex justify-between items-center font-bold text-white">
                    <span>مساعد Voltix الذكي</span>
                    <button onclick="toggleChatWindow()"><i data-lucide="x"></i></button>
                </div>
                <div id="chat-messages-area" class="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-sm">
                    <div class="bg-white p-3 rounded-xl border border-slate-200 self-start text-right">أهلاً بيك في فولتكس! 👋 إزاي أقدر أساعدك؟</div>
                </div>
                <div class="p-3 border-t bg-white flex gap-2">
                    <input id="chat-input-field" type="text" placeholder="اكتب سؤالك..." class="flex-1 border p-2 rounded-lg outline-none text-sm focus:ring-1 focus:ring-blue-500 text-right">
                    <button id="ai-send-btn" class="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"><i data-lucide="send" class="w-4 h-4 rotate-180"></i></button>
                </div>
            </div>`;

        document.getElementById('chat-toggle-btn').onclick = toggleChatWindow;
        document.getElementById('ai-send-btn').onclick = sendChatMessage;
        document.getElementById('chat-input-field').onkeypress = (e) => { if (e.key === 'Enter') sendChatMessage(); };
    }

    function toggleChatWindow() {
        document.getElementById('chat-window-box').classList.toggle('hidden');
        document.getElementById('chat-toggle-btn').classList.toggle('hidden');
    }

    // الربط مع سيرفر Node.js
async function sendChatMessage() {

    const input = document.getElementById('chat-input-field');
    const area = document.getElementById('chat-messages-area');

    const userText = input.value.trim();

    if (!userText) return;

    // رسالة المستخدم
    area.innerHTML += `
    <div class="bg-blue-600 text-white p-3 rounded-xl 
    self-end text-right ml-auto max-w-[80%] mb-2">
        ${userText}
    </div>`;

    input.value = '';
    area.scrollTop = area.scrollHeight;

    const loadingId = "loading-" + Date.now();

    area.innerHTML += `
    <div id="${loadingId}" 
    class="text-xs text-slate-400 animate-pulse text-right">
        فولتكس بيفكر...
    </div>`;

    try {

        const response = await fetch('http://localhost:3000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: userText
            })
        });

        // مهم جداً
        if (!response.ok) {
            throw new Error("Server Error");
        }

        const data = await response.json();

        document.getElementById(loadingId)?.remove();

        area.innerHTML += `
        <div class="bg-white p-3 rounded-xl 
        border border-slate-200 max-w-[80%]
        mb-2 self-start shadow-sm text-right font-medium">
            ${data.reply || "مفيش رد"}
        </div>`;

    } catch (error) {

        console.error("Chat Error:", error);

        const loading = document.getElementById(loadingId);

        if (loading) {
            loading.innerText =
            "❌حدث مشكله حاول مره اخري  أو تتواصل مع الدعم";
        }
    }

    area.scrollTop = area.scrollHeight;
}
    

    // تشغيل التطبيق
    init();
    
