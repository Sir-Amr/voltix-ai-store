      // تفعيل الأيقونات
      lucide.createIcons();

      // منطق إظهار وإخفاء كلمة المرور
      const passwordInput = document.getElementById("password");
      const toggleButton = document.getElementById("togglePassword");
      const eyeIcon = document.getElementById("eyeIcon");

      toggleButton.addEventListener("click", () => {
        const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";

        // تغيير الأيقونة
        eyeIcon.setAttribute("data-lucide", isPassword ? "eye-off" : "eye");
        lucide.createIcons(); // إعادة تفعيل الأيقونات بعد التغيير
      });
      //  التعامل مع الفورم
      //
      const loginForm = document.getElementById("loginForm");

      loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
          // الاتصال بمسار auth-login المكتوب في server.js
          const response = await fetch("http://localhost:3000/auth-login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });

          const result = await response.json();

          if (response.ok) {
            alert("أهلاً بك في فولتكس! ✨");
            // توجيه المستخدم للصفحة الرئيسية بعد نجاح الدخول
            window.location.href = "home.html";
          } else {
            // إظهار رسالة الخطأ القادمة من السيرفر
            alert("خطأ: " + result.error);
          }
        } catch (error) {
          console.error("Login Error:", error);
          alert("فشل الاتصال بالسيرفر، تأكد من تشغيله.");
        }
      });
