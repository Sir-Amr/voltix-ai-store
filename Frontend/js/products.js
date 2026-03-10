        // --- الأساسيات والبيانات ---
        lucide.createIcons();

        const categories = [
            { value: 'all', label: 'كل المنتجات' },
            { value: 'phones', label: 'موبايلات' },
            { value: 'headphones', label: 'سماعات' },
            { value: 'laptops', label: 'لابتوبات' },
            { value: 'watch', label: 'ساعات ذكية' },
            { value: 'cameras', label: 'كاميرات' },
            { value: 'gamepad-2', label: 'جيمينج' },
            { value: 'cable', label: 'اكسسوارات' },
        ];

        const products = [
            {
                id: 1, title: "سماعة سوني WH-1000XM5",
                price: 19500,
                oldPrice: 22000,
                rating: 4.8,
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
                , onSale: true, category: 'headphones',
                description: "تجربة صوتية تعزلك عن العالم مع تقنية إلغاء الضجيج الرائدة، وتصميم مريح للاستخدام الطويل مع بطارية تدوم حتى 30 ساعة من المتعة المتواصلة."
            },

            {
                id: 2, title: "ماك بوك pro M3",
                price: 125000,
                rating: 5.0,
                image: "https://images.unsplash.com/photo-1710905059620-796ae1458a0a?w=500",
                onSale: false, category: 'laptops',
                description: "الأداء الخارق يلتقي مع الكفاءة؛ مدعوم بشريحة M3 الجديدة كلياً لتقديم سرعة مذهلة في المونتاج والبرمجة، مع شاشة Liquid Retina XDR الأفضل في فئتها.",
            },

            {
                id: 3, title: "آيفون 15 برو ماكس",
                price: 65000,
                oldPrice: 68000,
                rating: 4.9,
                image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
                onSale: true, category: 'phones',
                description: "قوة التيتانيوم في يدك؛ يتميز بأقوى نظام كاميرات في تاريخ الآيفون مع تقريب بصري مذهل، ومعالج A17 Pro الذي ينقل ألعاب الموبايل لمستوى الكونسول",
            },
            {
                id: 4, title: "موبايل سامسونج جالاكسي A17 LTE",
                price: 9300,
                oldPrice: 9600,
                rating: 4.9,
                image: "https://img2.freejobalert.com/freejobalert/2025/07/samsung-galaxy-a17-5g-launch-date-price-specifications-features-battery-display-and-m-6881d12bf281c72185023-1200.webp",
                onSale: true, category: 'phones',
                description: "استمتع بتجربة بصرية فائقة النعومة مع شاشة Super AMOLED مذهلة، وأداء مستقر يلبي احتياجاتك اليومية بذكاء، مع نظام كاميرات متطور يلتقط أدق تفاصيل لحظاتك بوضوح تام",
            },

            {
                id: 5,
                title: " ساعه Apple Ultra ",
                price: 35000,
                rating: 4.5,
                category: "watch", onSale: false,
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop",
                description: "الساعة الأكثر صلابة وقدرة على الإطلاق؛ مصممة من التيتانيوم القوي لتتحمل أقسى الظروف، مع شاشة هي الأكثر سطوعاً، وبطارية استثنائية ونظام GPS دقيق للمغامرين والمحترفين الذين لا يعرفون المستحيل",
            },

            {
                id: 6,
                title: "Canon EOS R5",
                price: 120000,
                rating: 5,
                category: "cameras", onSale: false,
                image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop",
                description: "قمة الإبداع في عالم التصوير؛ كاميرا خارقة تمنحك دقة 45 ميجابكسل وتصوير فيديو سينمائي بدقة 8K RAW. بفضل نظام التركيز التلقائي الأكثر ذكاءً وثبات الصورة الجبار، ستلتقط المستحيل بكل سهولة واحترافية.",
            },

            {
                id: 7,
                title: "آبل ووتش سيريز 9",
                price: "21,499",
                rating: 4.3,
                category: "watch", onSale: false,
                image: "https://images.unsplash.com/photo-1579721840641-7d0e67f1204e?w=500",
                description: "الأكثر ذكاءً وقوة؛ تأتي بمعالج S9 الجديد الذي يمنحك سرعة فائقة وشاشة هي الأكثر سطوعاً. استمتع بميزة 'النقر المزدوج' السحرية للتحكم في ساعتك دون لمس الشاشة، مع تتبع دقيق لصحتك ولياقتك البدنية على مدار الساعة",
            },
            {

                id: 8,
                title: "باور بانك 20000 مللي أمبير",
                price: 950,
                oldPrice: 1000,
                rating: 5,
                image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=400",
                category: "cable", onSale: true,
                description: "طاقتك معك في كل مكان؛ سعة ضخمة تكفي لشحن هاتفك عدة مرات بفضل تقنية الشحن السريع الآمن. يتميز بتصميم متين ومنافذ متعددة تتيح لك شحن أكثر من جهاز في وقت واحد، مع نظام حماية متطور يحمي أجهزتك من التيار الزائد والحرارة",
            },
            {
                id: 9,
                title: "ماوس جيمنج RGB احترافي",
                price: 450,
                oldPrice: 700,
                rating: 5.2,
                image: "https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/83/3208031/1.jpg?7186",
                category: "gamepad-2", onSale: true,
                description: "سيطر على اللعبة بدقة متناهية وسرعة استجابة لا تُضاهى؛ صُمم هذا الماوس ليوفر لك الراحة التامة خلال جلسات اللعب الطويلة مع حساس (Sensor) عالي الدقة وقابل للتخصيص. أضف لمسة سحرية لمكتبك مع إضاءة RGB خلابة تتفاعل مع حركاتك وتجعلك في قلب الحدث",
            },
            {
                id: 10,
                title: "كيبورد ميكانيكي مضيء",
                price: 1100,
                oldPrice: 1400,
                rating: 5.4,
                image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=400",
                category: "gamepad-2", onSale: true,
                description: "دقة لا تخطئ مع كل ضغطة؛ صُمم هذا الكيبورد الميكانيكي ليدوم طويلاً مع مفاتيح (Switches) سريعة الاستجابة توفر لك شعوراً مذهلاً أثناء الكتابة أو اللعب. استمتع بإضاءة خلفية مبهرة قابلة للتخصيص تضيء طريقك نحو النصر وتضيف لمسة جمالية احترافية لمكتبك"

            },
            {
                id: 11,
                title: "شاحن سريع 65 وات Gan",
                price: 600,
                rating: 5.1,
                image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=400",
                category: "cable",
                description: "قوة هائلة في حجم الجيب؛ بفضل تقنية نتريد الغاليوم (GaN) المتطورة، يمنحك هذا الشاحن سرعة شحن مذهلة تصل لـ 65 وات مع كفاءة طاقة أعلى وحرارة أقل. شاحن واحد يكفي لجميع أجهزتك، من اللابتوب وحتى سماعات الأذن، مع نظام حماية ذكي يضمن سلامة بطاريتك",
            },

            {
                id: 12,
                title: "ماوس وايرلس مريح (Ergonomic)",
                price: 750,
                rating: 5.1,
                image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=400",
                category: "cable",
                description: "وداعاً لإجهاد اليد؛ صُمم هذا الماوس بشكل انسيابي فريد ليدعم يدك ومعصمك في وضعهما الطبيعي، مما يوفر لك راحة استثنائية طوال ساعات العمل الطويلة. استمتع بحرية الحركة اللاسلكية مع بطارية تدوم طويلاً وحساس دقيق يعمل بسلاسة على كافة الأسطح",
            },
            {
                id: 13,
                title: "سماعات رأس عازلة للضوضاء",
                price: 2900,
                rating: 5.1,
                image: "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=400",
                category: "headphones",
                description: "انعزل عن العالم واستمتع بنقاء الصوت؛ بفضل تقنية إلغاء الضوضاء النشطة (ANC)، ستختبر تجربة استماع غامرة بلا مشتتات. تصميم مريح يحيط بالأذن مع وسائد ناعمة للجلسات الطويلة، وصوت فائق الدقة (Hi-Res) ينبض بالتفاصيل في كل نغمة",
            },
            {
                id: 14,
                title: "ساعة رياضية ذكية G-Tab",
                price: 1450,
                rating: 5.1,
                image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400",
                category: "watch",
                description: "رفيقك المثالي في التمرين واليوميات؛ ساعة ذكية تجمع بين التصميم الرياضي العصري وأحدث تقنيات تتبع الصحة. بفضل شاشتها الواضحة ومقاومتها للماء، ستكون معك في كل خطوة، مع بطارية تدوم طويلاً لتواكب نشاطك دون انقطاع.",
            },
            {
                id: 15,
                title: "لوحة مفاتيح ميكانيكية (White Edition)",
                price: 1800,
                rating: 5.1,
                image: "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=400",
                category: "gamepad-2",
                description: "أناقة اللون الأبيض تلتقي بقوة الأداء الميكانيكي؛ لوحة مفاتيح استثنائية بتصميم عصري يضيف لمسة من الفخامة لمكتبك. تتميز بمفاتيح سريعة الاستجابة مع إضاءة خلفية هادئة، مما يجعلها الخيار المثالي لمن يبحث عن الدقة في العمل والجمال في التصميم",
            },
            {
                id: 16,
                title: "كاميرا Canon EOS R5 احترافية",
                rating: 4.9,
                price: 45000,
                image: "https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=400",
                category: "cameras",
                description: "أعد تعريف حدود الإبداع مع Canon EOS R5؛ الكاميرا التي تمنحك دقة مذهلة 45 ميجابكسل وتصوير فيديو سينمائي بدقة 8K. بفضل أسرع نظام تركيز تلقائي في العالم وثبات صورة جبار، ستلتقط أدق التفاصيل في أصعب الظروف بكل سلاسة واحترافية.",
            },
            {
                id: 17,
                title: "كاميرا Sony Alpha v-7 III",
                price: 38000,
                rating: 4.3,
                image: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=400",
                category: "cameras",
                description: "الأداء بلا حدود؛ كاميرا الـ Full-frame الأكثر شهرة وتفضيلاً للمحترفين. تجمع بين مستشعر 24.2 ميجابكسل المتطور ونظام تركيز تلقائي ذكي يغطي 93% من الشاشة، لتضمن لك لقطات حادة وألواناً واقعية سواء كنت تصور فوتوغراف أو فيديو بدقة 4K سينمائية",
            },
            {
                id: 18,
                title: "عدسة كانون 50mm f/1.8",
                price: 5500,
                rating: 3.9,
                image: "https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=400",
                category: "cable",
                description: "سر الصورة الاحترافية في جيبك؛ العدسة الأكثر مبيعاً التي تمنحك خلفيات ضبابية (عزل) مذهلة بفضل فتحة عدسة واسعة. مثالية لتصوير الأشخاص، اللقطات الليلية، واللقطات السينمائية، مع محرك فوكس هادئ وسريع يضمن لك نتائج حادة وواضحة في كل مرة",
            },
            {
                id: 19,
                title: "MacBook Pro 16-inch M3 Max",
                price: 145000,
                rating: 5.1,
                image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
                category: "laptops",
                description: "القوة التي لا تُقهر؛ صُمم للمحترفين الذين يتجاوزون الحدود. مع شريحة M3 Max الأكثر تطوراً في العالم، استمتع بأداء جرافيك مرعب وسرعة معالجة خيالية، كل ذلك مع شاشة Liquid Retina XDR الأفضل في فئتها وبطارية ترافقك طوال اليوم مهما بلغت صعوبة مهامك.",
            },
            {
                id: 20,
                title: "MacBook Air M2 - Silver",
                price: 52000,
                rating: 5,
                image: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=400",
                category: "laptops",
                description: "الأناقة في أخف صورها؛ جهاز يجمع بين التصميم النحيف المذهل وقوة شريحة M2 الثورية. بفضل شاشة Liquid Retina الساحرة وهيكله المصنوع من الألومنيوم المتين، ستحصل على أداء فائق وهدوء تام (بدون مراوح) مع بطارية تدوم معك طوال اليوم وأنت في قمة تألقك.",
            },
            {
                id: 21,
                title: "MacBook Pro 14-inch M2",
                price: 88000,
                rating: 4.9,
                image: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=400",
                category: "laptops",
                description: "القوة المحمولة في أبهى صورها؛ استمتع بأداء احترافي مذهل بفضل شريحة M2 التي تنجز أصعب المهام بلمح البصر. مع شاشة Liquid Retina XDR بتردد 120Hz ونظام تبريد متطور، ستحصل على تجربة بصرية وسرعة استجابة لا مثيل لها في هيكل مدمج يرافقك أينما ذهبت.",
            },

        ];


        let state = {
            viewMode: 'grid',
            selectedCategory: 'all',
            cart: []
        };
        // --- وظائف الرندر ---
        function renderFilters() {
            const container = document.getElementById('category-filters');
            container.innerHTML = categories.map(cat => `
                <button onclick="setCategory('${cat.value}')" class="px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-300 ${state.selectedCategory === cat.value ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'bg-purple-50 text-purple-700 hover:bg-purple-100'}">
                    ${cat.label}
                </button>
            `).join('');
        }

        function renderProducts(productsToRender = products) {
            const container = document.getElementById('product-container');
            container.className = state.viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn' : 'flex flex-col gap-4 animate-fadeIn';

            const filtered = productsToRender.filter(p => state.selectedCategory === 'all' || p.category === state.selectedCategory);
            // إذا لا توجد نتائج بعد الفلترة نعرض رسالة مفهومة للمستخدم
            if (filtered.length === 0) {
                container.innerHTML = `<div class="col-span-full text-center py-20 text-gray-500">عذراً، المنتج غير متوفر</div>`;
                lucide.createIcons();
                return;
            }

            container.innerHTML = filtered.map((p, i) => {
                const discount = p.oldPrice ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100) : 0;
                const isGrid = state.viewMode === 'grid';

                return `
                    <div class="bg-white/90 backdrop-blur-lg rounded-2xl shadow-md border border-purple-100 overflow-hidden group hover:shadow-2xl transition-all animate-slideUp" style="animation-delay: ${i * 50}ms">
                        <div class="relative ${isGrid ? 'h-64' : 'w-48 h-48 flex-shrink-0'}">
                            <img src="${p.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                            ${p.onSale ? `<div class="absolute top-3 right-3 bg-pink-500 text-white text-xs px-3 py-1 rounded-full">خصم ${discount}%</div>` : ''}
                        </div>
                        <div class="p-4 flex flex-col justify-between flex-1">
                            <div>
                                <h3 class="text-lg font-bold mb-2 text-gray-800">${p.title}</h3>
                                <div class="flex items-center gap-1 mb-3 text-purple-500"><i data-lucide="star" class="w-4 h-4 fill-current"></i> <span class="text-sm">(${p.rating})</span></div>
                                <div class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">${p.price.toLocaleString()} ج.م</div>
                            </div>
                            <div>
                                <button onclick="addToCart(${p.id})" class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"><i data-lucide="shopping-cart" class="w-5 h-5"></i> أضف للعربة</button>
                                <button onclick="toggleDetail(${p.id})" class="w-full mt-3 text-base text-slate-700 hover:text-blue-600 transition">عرض التفاصيل</button>
                                   <div id="detail-${p.id}" class="product-detail overflow-hidden max-h-0 opacity-0 transition-all duration-300">
                               <div class="mt-3 p-3 bg-slate-50 rounded-xl border border-purple-100 shadow-inner">
                               <h4 class="text-[20px] uppercase tracking-wider text-purple-600 font-bold mb-1">المواصفات الأساسية</h4>
                               <p class="text-base text-gray-700 leading-normal font-mediam">
                              ${p.description ? p.description : 'لا توجد تفاصيل إضافية لهذا المنتج حالياً.'}  </p>
                            </div>
</div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            lucide.createIcons();
        }

        // --- منطق السلة والواتساب ---
        function addToCart(id) {
            const product = products.find(p => p.id === id);
            const exists = state.cart.find(item => item.id === id);
            if (exists) exists.quantity++;
            else state.cart.push({ ...product, quantity: 1 });
            updateCart();
            toggleCartModal();
        }

        function updateCart() {
            const badge = document.getElementById('cart-badge');
            const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
            badge.innerText = totalItems;
            badge.classList.toggle('hidden', totalItems === 0);

            const cartItemsContainer = document.getElementById('cart-items');
            if (state.cart.length === 0) {
                cartItemsContainer.innerHTML = `<div class="text-center py-20 text-gray-500">السلة فارغة</div>`;
                document.getElementById('cart-summary').innerHTML = '';
            } else {
                cartItemsContainer.innerHTML = state.cart.map(item => `
                    <div class="bg-white p-4 rounded-xl border border-purple-100 flex gap-4">
                        <img src="${item.image}" class="w-20 h-20 rounded-lg object-cover">
                        <div class="flex-1">
                            <h4 class="font-bold text-sm">${item.title}</h4>
                            <div class="text-purple-60{ id :5 , title:, price: , oldPrice: , rating: ,
                image:"" , onSale: true, category: '' },0 font-bold">${item.price.toLocaleString()} ج.م</div>
                            <div class="flex items-center gap-4 mt-2">
                                <button onclick="changeQty(${item.id}, -1)" class="p-1 bg-purple-50 rounded"><i data-lucide="minus" class="w-4 h-4"></i></button>
                                <span>${item.quantity}</span>
                                <button onclick="changeQty(${item.id}, 1)" class="p-1 bg-purple-50 rounded"><i data-lucide="plus" class="w-4 h-4"></i></button>
                            </div>
                        </div>
                    </div>
                `).join('');

                const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                document.getElementById('cart-summary').innerHTML = `
                    <div class="space-y-3 mb-4">
                        <div class="flex justify-between text-gray-600"><span>المجموع الفرعي</span><span>${subtotal.toLocaleString()} ج.م</span></div>
                        <div class="flex justify-between text-xl font-bold"><span>الإجمالي</span><span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">${subtotal.toLocaleString()} ج.م</span></div>
                    </div>
                    <button onclick="checkoutToWhatsApp()" class="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2">
                        <i data-lucide="message-circle"></i> إتمام الطلب عبر واتساب
                    </button>
                `;
            }
            lucide.createIcons();
        }

        function changeQty(id, delta) {
            const item = state.cart.find(i => i.id === id);
            item.quantity += delta;
            if (item.quantity <= 0) state.cart = state.cart.filter(i => i.id !== id);
            updateCart();
        }

        // --- فتح/طي تفاصيل المنتج داخل الكارد ---
        function toggleDetail(id) {
            const el = document.getElementById(`detail-${id}`);
            if (!el) return;
            const content = el.firstElementChild;
            const open = el.dataset.open === '1';
            if (open) {
                el.style.maxHeight = null;
                el.style.padding = '0';
                el.style.opacity = '0';
                el.dataset.open = '0';
            } else {
                // set padding first so scrollHeight includes inner padding
                el.style.padding = '1rem';
                el.style.maxHeight = (content.scrollHeight + 16) + 'px';
                el.style.opacity = '1';
                el.dataset.open = '1';
                // make sure the card is visible when expanding
                el.parentElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }

        window.checkoutToWhatsApp = () => {
            if (state.cart.length === 0) return alert("السلة فارغة!");

            const myNumber = "201234567890"; // استبدل برقمك الحقيقي
            let message = "🌟 *طلب جديد من Voltix*\n\n";

            state.cart.forEach((item, i) => {
                message += `${i + 1}. *${item.title}*\n   الكمية: ${item.quantity}\n   السعر: ${item.price.toLocaleString()} ج.م\n\n`;
            });

            const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            message += `*الإجمالي النهائي: ${total.toLocaleString()} ج.م*`;

            window.open(`https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`, '_blank');
        };

        // --- البحث والترتيب والدردشة ---
        document.getElementById('search-input').addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = products.filter(p => p.title.toLowerCase().includes(term));
            renderProducts(filtered);


        });

        window.handleSort = () => {
            const val = document.getElementById('sort-select').value;
            if (val === 'price-low') products.sort((a, b) => a.price - b.price);
            else if (val === 'price-high') products.sort((a, b) => b.price - a.price);
            renderProducts();
        };

async function sendMessage() {
            const input = document.getElementById('chat-input');
            const area = document.getElementById('chat-messages');
            const userText = input.value.trim();

            if (!userText) return;

            // 1. عرض رسالة المستخدم
            appendMessage(userText, 'user');
            input.value = '';

            // 2. إظهار حالة "جاري التفكير" بما يتناسب مع تصميمك
            const loadingId = "loading-" + Date.now();
            const loadingDiv = document.createElement('div');
            loadingDiv.id = loadingId;
            loadingDiv.className = "text-xs text-slate-400 animate-pulse text-right p-2";
            loadingDiv.innerText = "فولتكس بيفكر...";
            area.appendChild(loadingDiv);
            area.scrollTop = area.scrollHeight;

            try {
                // 3. الاتصال بسيرفر Node.js (Port 3000)
                const response = await fetch('http://localhost:3000/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: userText })
                });

                const data = await response.json();
                
                // إزالة علامة التحميل
                const loadingEl = document.getElementById(loadingId);
                if (loadingEl) loadingEl.remove();

                if (data.reply) {
                    // 4. عرض رد الذكاء الاصطناعي
                    appendMessage(data.reply, 'bot');
                } else {
                    appendMessage("عذراً، واجهت مشكلة في فهم الرسالة.", 'bot');
                }
            } catch (error) {
                const loadingEl = document.getElementById(loadingId);
                if (loadingEl) loadingEl.innerText = "تأكد من تشغيل السيرفر (node server.js)";
                console.error("Connection Error:", error);
            }
        }

        // تحديث دالة appendMessage لتكون أكثر مرونة في الشكل
        function appendMessage(text, sender) {
            const msgDiv = document.createElement('div');
            if (sender === 'user') {
                msgDiv.className = "bg-blue-600 text-white p-3 rounded-2xl shadow-sm self-end text-sm ml-auto max-w-[80%] mb-2 text-right animate-slideUp";
            } else {
                msgDiv.className = "bg-white p-3 rounded-2xl shadow-sm border border-purple-100 text-sm max-w-[80%] mb-2 text-right font-medium animate-slideUp";
            }
            msgDiv.innerText = text;
            const container = document.getElementById('chat-messages');
            container.appendChild(msgDiv);
            container.scrollTop = container.scrollHeight;
        }

        // تفعيل زر الإرسال عند الضغط على Enter في حقل الشات
        document.getElementById('chat-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
        // --- التحكم في الواجهة ---
        window.setCategory = (val) => { state.selectedCategory = val; renderFilters(); renderProducts(); };
        window.changeView = (mode) => { state.viewMode = mode; renderProducts(); };
        window.toggleChat = () => document.getElementById('chat-window').classList.toggle('hidden');
        window.toggleCartModal = () => document.getElementById('cart-modal').classList.toggle('hidden');

        // Initial Boot
        renderFilters();
        renderProducts();
