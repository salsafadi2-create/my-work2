  
  
  
  // فتح وإغلاق القائمة الرئيسية
function toggleNavMenu() {
    const nav = document.getElementById('mainDropdown');
    nav.classList.toggle('active');
}

// فتح وإغلاق القوائم الفرعية (Accordion)
function toggleSubmenu(element) {
    const parent = element.parentElement;
    
    // إغلاق أي قائمة فرعية أخرى مفتوحة (اختياري)
    document.querySelectorAll('.has-submenu').forEach(item => {
        if (item !== parent) item.classList.remove('open');
    });

    parent.classList.toggle('open');
}

// إغلاق القائمة عند الضغط خارجها
window.addEventListener('click', function(e) {
    const nav = document.getElementById('mainDropdown');
    const burger = document.querySelector('.hamburger-menu');
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
        nav.classList.remove('active');
    }
});











    // const modal = document.getElementById("workModal");
    // const modalImg = document.getElementById("modalTargetImg");
    // const closeBtn = document.querySelector(".close-modal-btn");

    // // تشغيل النافذة عند الضغط على أي صورة تملك كلاس clickable-img
    // document.querySelectorAll('.clickable-img').forEach(img => {
    //     img.addEventListener('click', function() {
    //         modal.style.display = "flex";
    //         modalImg.src = this.src;
    //     });
    // });

    // // إغلاق النافذة عند الضغط على زر X
    // closeBtn.onclick = () => {
    //     modal.style.display = "none";
    // };

    // // إغلاق النافذة عند الضغط في أي مكان خارج المحتوى الأبيض
    // window.onclick = (event) => {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // };

    document.addEventListener('DOMContentLoaded', () => {
    // --- 1. إعدادات النافذة المنبثقة (Modal) ---
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalFullImage');
    const closeBtn = document.querySelector('.close-modal');

    // فتح النافذة عند الضغط على أي صورة
    document.querySelectorAll('.clickable-img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
            // إضافة أنيميشن دخول بسيط
            document.querySelector('.modal-container').style.transform = 'scale(1)';
            document.querySelector('.modal-container').style.opacity = '1';
        });
    });

    // إغلاق النافذة
    const closeModal = () => {
        modal.style.display = 'none';
    };

    closeBtn.onclick = closeModal;
    window.onclick = (e) => { if (e.target == modal) closeModal(); };


    // --- 2. نظام الفلترة الذكي (الأقسام الجانبية) ---
    const filterItems = document.querySelectorAll('.sub-category-list li');
    const workCards = document.querySelectorAll('.work-card');

    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            // تغيير الفئة النشطة في القائمة
            filterItems.forEach(li => li.classList.remove('active'));
            this.classList.add('active');

            const category = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            
            // تطبيق الفلترة مع أنيميشن اختفاء وظهور
            workCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                }, 300);
            });
        });
    });

    // --- 3. تأثير "حلو" عند التمرير (Scroll Reveal) ---
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    workCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});