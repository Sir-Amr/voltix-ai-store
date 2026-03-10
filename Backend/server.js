require("dotenv").config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose'); // مكتبة الربط بالسحابة
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();

// إعدادات السيرفر الأساسية
app.use(cors());
app.use(express.json());
const frontendPath = path.join(process.cwd(), "Frontend");
app.use(express.static(frontendPath));
// ================= CONFIGURATIONS =================

// رابط الاتصال بـ MongoDB Atlas 
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
    .then(() => console.log("✅ Voltix Cloud DB Connected! ✨"))
    .catch(err => {
        console.error("❌ Connection Error:", err.message);
        console.log("تأكد من كتابة الباسورد voltix_db بشكل صحيح في الرابط.");
    });
// تعريف شكل بيانات المستخدم (User Schema)
const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // إضافة معرف احترافي يسهل قراءته
    customerId: { 
        type: String, 
        default: () => 'VOLT-' + Math.floor(1000 + Math.random() * 9000) 
    },
    created_at: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// إعداد الذكاء الاصطناعي (Gemini)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-3.1-flash-lite-preview"
});

// ================= PRODUCTS DATA =================
// القائمة الكاملة للمنتجات لضمان معرفة البوت بها
const products = [
{
id:1,
title:"سماعة سوني WH-1000XM5",
price:19500,
category:"headphones",
description:"أفضل سماعات عزل ضوضاء في السوق",
features:{
noise_canceling:"عزل ضوضاء احترافي ANC",
battery:"بطارية 30 ساعة",
connectivity:"Bluetooth 5.2",
weight:"خفيفة ومريحة للاستخدام الطويل",
use_case:"ممتازة للسفر والعمل والتركيز"
}
},

{
id:2,
title:"MacBook Pro M3",
price:125000,
category:"laptops",
description:"لابتوب احترافي لأقوى أداء",
features:{
chip:"Apple M3",
display:"Liquid Retina XDR",
ram:"18GB",
battery:"حتى 22 ساعة",
use_case:"برمجة – مونتاج – تصميم"
}
},

{
id:3,
title:"iPhone 15 Pro Max",
price:65000,
category:"phones",
description:"أقوى آيفون حالياً",
features:{
chip:"A17 Pro",
display:"6.7 Super Retina XDR",
camera:"كاميرا احترافية 48MP",
body:"هيكل تيتانيوم",
battery:"عمر بطارية طويل",
use_case:"تصوير – ألعاب – استخدام يومي قوي"
}
},

{
id:4,
title:"Samsung Galaxy A17 LTE",
price:9300,
category:"phones",
description:"موبايل اقتصادي بأداء ثابت",
features:{
display:"Super AMOLED",
battery:"5000mAh",
camera:"50MP",
storage:"128GB",
use_case:"ممتاز للاستخدام اليومي والسوشيال"
}
},

{
id:5,
title:"Apple Watch Ultra",
price:35000,
category:"watch",
description:"ساعة قوية للرياضة والمغامرات",
features:{
material:"Titanium",
display:"شاشة ساطعة جداً",
battery:"حتى 36 ساعة",
water_resistant:"مقاومة للمياه",
use_case:"الرياضة والرحلات"
}
},

{
id:6,
title:"Canon EOS R5",
price:120000,
category:"cameras",
description:"كاميرا احترافية للتصوير السينمائي",
features:{
sensor:"45MP Full Frame",
video:"8K RAW",
stabilization:"تثبيت صورة قوي",
use_case:"تصوير احترافي وصناعة محتوى"
}
},

{
id:7,
title:"Apple Watch Series 9",
price:21499,
category:"watch",
description:"ساعة ذكية متكاملة للصحة",
features:{
chip:"S9",
display:"Always On Retina",
health:"قياس نبضات القلب والأكسجين",
battery:"18 ساعة",
use_case:"الصحة واللياقة"
}
},

{
id:8,
title:"Power Bank 20000mAh",
price:950,
category:"accessories",
description:"باور بانك قوي للسفر",
features:{
capacity:"20000mAh",
charging:"Fast Charging",
ports:"USB-C + USB-A",
safety:"حماية ضد الشحن الزائد"
}
},

{
id:9,
title:"Gaming RGB Mouse",
price:450,
category:"gaming",
description:"ماوس جيمنج سريع ودقيق",
features:{
dpi:"16000 DPI",
lighting:"RGB",
buttons:"6 أزرار قابلة للبرمجة",
use_case:"الألعاب التنافسية"
}
},

{
id:10,
title:"Mechanical Gaming Keyboard",
price:1100,
category:"gaming",
description:"كيبورد ميكانيكي سريع الاستجابة",
features:{
switches:"Mechanical switches",
lighting:"RGB",
anti_ghosting:"Anti Ghosting",
use_case:"الجيمنج والكتابة السريعة"
}
},

{
id:11,
title:"65W GaN Fast Charger",
price:600,
category:"accessories",
description:"شاحن سريع وقوي",
features:{
power:"65W",
technology:"GaN",
ports:"USB-C",
use_case:"يشحن لابتوبات وموبايلات بسرعة"
}
},

{
id:12,
title:"Wireless Mouse",
price:750,
category:"accessories",
description:"ماوس وايرلس مريح للاستخدام الطويل",
features:{
connectivity:"2.4GHz Wireless",
battery:"بطارية طويلة",
design:"Ergonomic",
use_case:"ممتاز للعمل والمكتب"
}
},

{
id:13,
title:"ANC Headphones",
price:2900,
category:"headphones",
description:"سماعات بعزل ضوضاء قوي",
features:{
noise_canceling:"ANC",
battery:"25 ساعة",
sound:"صوت ستيريو عالي الجودة",
use_case:"السفر والموسيقى"
}
},

{
id:14,
title:"G-Tab Smart Watch",
price:1450,
category:"watch",
description:"ساعة اقتصادية للرياضة",
features:{
health:"قياس نبض القلب",
sports:"أوضاع رياضية متعددة",
battery:"حتى 7 أيام",
use_case:"متابعة النشاط اليومي"
}
},

{
id:15,
title:"Mechanical White Keyboard",
price:1800,
category:"gaming",
description:"كيبورد ميكانيكي أنيق",
features:{
switches:"Mechanical",
lighting:"White LED",
build:"هيكل متين",
use_case:"جيمنج وكتابة"
}
},

{
id:16,
title:"Canon EOS R5 Cinema",
price:45000,
category:"cameras",
description:"كاميرا قوية لصناعة المحتوى",
features:{
video:"8K",
sensor:"Full Frame",
stabilization:"Image Stabilization",
use_case:"يوتيوبرز وصناع المحتوى"
}
},

{
id:17,
title:"Sony Alpha A7 III",
price:38000,
category:"cameras",
description:"كاميرا احترافية للفيديو والصور",
features:{
sensor:"Full Frame",
focus:"Autofocus ذكي",
video:"4K",
use_case:"التصوير الاحترافي"
}
},

{
id:18,
title:"Canon 50mm f1.8 Lens",
price:5500,
category:"camera_accessories",
description:"أفضل عدسة بورتريه اقتصادية",
features:{
aperture:"f/1.8",
effect:"عزل خلفية قوي",
use_case:"تصوير بورتريه احترافي"
}
},

{
id:19,
title:"MacBook Pro 16 M3 Max",
price:145000,
category:"laptops",
description:"أقوى لابتوب من آبل",
features:{
chip:"M3 Max",
display:"16 Liquid Retina XDR",
ram:"36GB",
use_case:"مونتاج 8K وبرمجة ثقيلة"
}
},

{
id:20,
title:"MacBook Air M2",
price:52000,
category:"laptops",
description:"خفيف وسريع للاستخدام اليومي",
features:{
chip:"M2",
display:"13.6 Liquid Retina",
battery:"18 ساعة",
use_case:"طلاب وبرمجة خفيفة"
}
},

{
id:21,
title:"MacBook Pro 14 M2",
price:88000,
category:"laptops",
description:"توازن مثالي بين القوة والسعر",
features:{
chip:"M2 Pro",
display:"120Hz Liquid Retina",
battery:"20 ساعة",
use_case:"برمجة وتصميم"
}
}
]

// ================= ROUTES (PAGES) =================
app.get('/', (req, res) => {
    res.sendFile(path.join(frontendPath, "home.html"));
});
app.get('/products', (req, res) => {
    res.sendFile(path.join(frontendPath, "products.html"));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(frontendPath, "login.html"));
});
app.get('/signup', (req, res) => {
    res.sendFile(path.join(frontendPath, "signup.html"));
});
// ================= DATABASE AUTH =================

app.post('/register', async (req, res) => {
    try {
        const { fullName, email, password } = req.body; // استلام الاسم من الـ Request
        const newUser = new User({ 
            fullName, // حفظ الاسم هنا
            email, 
            password 
        });
        await newUser.save();
        res.status(200).json({ message: "تم التسجيل بنجاح" });
    } catch (err) {
        res.status(500).json({ error: "خطأ في التسجيل" });
    }
});
// مسار تسجيل الدخول
app.post('/auth-login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (user) {
            res.status(200).json({ message: "أهلاً بك مجدداً!" });
        } else {
            res.status(401).json({ error: "البيانات غلط، راجع الإيميل والباسورد" });
        }
    } catch (err) {
        res.status(500).json({ error: "مشكلة في السيرفر" });
    }
});
// ================= AI CHATBOT =================

let chatHistory = []; 

app.post('/chat', async (req, res) => {
    try {
        const { message } = req.body;
        
        // بدء محادثة مع Gemini مع تمرير التاريخ السابق
        const chat = model.startChat({
            history: chatHistory,
            generationConfig: { maxOutputTokens: 500 },
        });
const prompt = `
أنت "فولتكس"، مساعد مبيعات ذكي ومحترف في متجر Voltix للإلكترونيات.

مهمتك الأساسية:
مساعدة العميل في اختيار أفضل جهاز مناسب له وتحويل السؤال إلى فرصة بيع.

--------------------------------------------------

${products.map(p => `
المنتج: ${p.title}
السعر: ${p.price} جنيه
التصنيف: ${p.category}
الوصف: ${p.description}

المواصفات:
${Object.entries(p.features)
.map(([key,value]) => `• ${key}: ${value}`)
.join("\n")}
`).join("\n\n")}
--------------------------------------------------

قواعد صارمة لازم تلتزم بيها:

1️⃣ الشخصية
اتكلم باللهجة المصرية العامية بشكل احترافي ولطيف.
خليك شاطر في البيع وبتحب التكنولوجيا.

2️⃣ ممنوع الهلوسة
ممنوع تماماً اختراع:
- منتجات
- أسعار
- مواصفات
- مميزات

كل رد لازم يعتمد فقط على المنتجات الموجودة في القائمة.

3️⃣ لو العميل سأل عن منتج غير موجود
قول:

"للأسف المنتج ده مش متاح حالياً، بس ممكن يعجبك البديل ده 👇"

وبعدها رشح منتج مناسب من القائمة.

4️⃣ معالجة اعتراض "غالي"
لو العميل قال السعر غالي:

لا تعتذر فقط.

بدلاً من ذلك:
• اشرح القيمة مقابل السعر
أو
• اقترح منتج أرخص من القائمة

مثال:
"فاهم قصدك 👍  
بس الجهاز ده سعره مقابل أداء قوي جداً في الجيمنج.  
ولو حابب خيار أوفر شوية ممكن تشوف ده 👇"

5️⃣ أسلوب الترشيح

عند ترشيح منتج استخدم التنسيق التالي:

• اسم المنتج  
• السعر  
• أهم فايدة للعميل (من الوصف)

مثال:

• Logitech G Pro Headset 🎧  
السعر: 2500 جنيه  

مميزاته:
• صوت محيطي قوي للجيمنج  
• عزل ممتاز عن الدوشة  
• مريح في الاستخدام الطويل

6️⃣ الاختصار
الردود تكون قصيرة وسريعة القراءة.

لو السؤال عام:
رشح **2 أو 3 منتجات فقط**.

7️⃣ تنسيق الرد

استخدم التنسيق التالي:

**اسم المنتج**

السعر: 2500 جنيه

المميزات:
• ميزة 1  
• ميزة 2  
• ميزة 3

استخدم مسافات بين الأسطر عشان يكون سهل القراءة.
8️⃣ استخدام الإيموجي
استخدم الإيموجي بشكل خفيف:
💻 📱 🎧 ✨

--------------------------------------------------

سؤال العميل الآن:

"${message}"
`;
const result = await chat.sendMessage(prompt);
        const response = await result.response;
        const replyText = response.text();

        // تحديث التاريخ بالرسالة الجديدة ورد البوت
chatHistory.push(
            { role: "user", parts: [{ text: message }] },
            { role: "model", parts: [{ text: replyText }] }
        );

        res.json({ reply: replyText });
    } catch (error) {
        console.error("Chat Error:", error);
        res.status(500).json({ reply: "حصلت مشكلة في الذاكرة، جرب تاني." });
    }
});
// ================= START SERVER =================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Voltix Server running at: http://localhost:${PORT}`);
});