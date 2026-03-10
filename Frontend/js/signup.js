      lucide.createIcons();

      const signUpForm = document.getElementById("signUpForm");

      signUpForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(signUpForm);
        const data = {
          email: formData.get("email"),
          password: formData.get("password"),
          confirmPassword: formData.get("confirmPassword"),
        };

        // التحقق من البيانات قبل الإرسال
        if (data.password !== data.confirmPassword) {
          alert("كلمات المرور غير متطابقة!");
          return;
        }

        try {
          // إرسال البيانات إلى السيرفر (مسار الـ register اللي عملناه في server.js)
          const response = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: data.email,
              password: data.password,
              fullName: formData.get("fullName"), // إرسال الاسم الكامل للسيرفر
            }),
          });

          const result = await response.json();

          if (response.ok) {
            alert("تم إنشاء الحساب بنجاح");
            window.location.href = "login.html"; // توجيه المستخدم لصفحة الدخول
          } else {
            alert("خطأ: " + result.error);
          }
        } catch (error) {
          console.error("Error:", error);
          alert("فشل الاتصال بالسيرفر، تأكد إن السيرفر شغال.");
        }
      });
