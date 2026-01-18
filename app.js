//     // تنسيق الهيدر

//     const hBtn = document.getElementById('hamburgerBtn');
//     const sNav = document.getElementById('sideNav');
//     const overlay = document.getElementById('navOverlay');
//     const closeBtn = document.getElementById('closeBtn');

//     // فتح القائمة
//     hBtn.onclick = () => {
//         sNav.classList.add('open');
//         overlay.classList.add('show');
//     };

//     // إغلاق القائمة
//     const closeMenu = () => {
//         sNav.classList.remove('open');
//         overlay.classList.remove('show');
//     };
//     closeBtn.onclick = closeMenu;
//     overlay.onclick = closeMenu;

//     // تشغيل التفرعات داخل المنيو
//     document.querySelectorAll('.has-submenu').forEach(item => {
//         item.onclick = (e) => {
//             item.classList.toggle('active');
//         };
//     });
    
//     document.addEventListener('DOMContentLoaded', function() {
//     const burger = document.getElementById('hamburgerBtn');
//     const popNav = document.getElementById('navPopOverlay');

//     if (burger && popNav) { // التأكد من وجود العناصر في الصفحة الحالية
//         burger.onclick = function() {
//             popNav.classList.toggle('active');
//         };
//     }
// });
    
    
// // وظيفة فتح وإغلاق بوب-آب الفلترة
// function toggleFilterPop() {
//     const overlay = document.getElementById('filterOverlay');
//     if (overlay) {
//         // تبديل العرض بين flex و none
//         const isVisible = window.getComputedStyle(overlay).display === 'flex';
//         overlay.style.display = isVisible ? 'none' : 'flex';
//     }
// }

// // وظيفة تطبيق الفلاتر
// function applyFilters() {
//     // هنا تضع منطق الفلترة الخاص بمنتجاتك
//     console.log("جاري تطبيق الفلاتر...");
//     toggleFilterPop(); // إغلاق النافذة بعد التطبيق
// }

// // إغلاق النافذة عند الضغط خارج البطاقة البيضاء
// window.addEventListener('click', function(event) {
//     const overlay = document.getElementById('filterOverlay');
//     if (event.target === overlay) {
//         overlay.style.display = 'none';
//     }
// });
    
    
    
    
    
    
    
    
    
//     const menuBtn = document.getElementById('menuBtn');
//     const sideDropdown = document.getElementById('sideDropdown');

//     menuBtn.onclick = function() {
//         sideDropdown.classList.toggle('show-menu');
//     }

//     // إغلاق المنيو إذا ضغطت في أي مكان بره
//     window.onclick = function(event) {
//         if (!event.target.closest('#menuBtn')) {
//             sideDropdown.classList.remove('show-menu');
//         }
//     }

 
 
//  function toggleGhayaMenu() {
//     const menu = document.getElementById('dropdownFloating');
//     menu.classList.toggle('is-open');
// }

// function toggleSubItem(event, element) {
//     event.stopPropagation(); // يمنع إغلاق القائمة عند الضغط على العناصر
//     const parent = element.parentElement;
//     parent.classList.toggle('active-sub');
// }

// // إغلاق عند الضغط خارج المنيو
// window.onclick = function(event) {
//     if (!event.target.closest('.menu-side')) {
//         document.getElementById('dropdownFloating').classList.remove('is-open');
//     }
// } 
  
  
//   // فتح وإغلاق القائمة الرئيسية
// function toggleNavMenu() {
//     const nav = document.getElementById('mainDropdown');
//     nav.classList.toggle('active');
// }

// // فتح وإغلاق القوائم الفرعية (Accordion)
// function toggleSubmenu(element) {
//     const parent = element.parentElement;
    
//     // إغلاق أي قائمة فرعية أخرى مفتوحة (اختياري)
//     document.querySelectorAll('.has-submenu').forEach(item => {
//         if (item !== parent) item.classList.remove('open');
//     });

//     parent.classList.toggle('open');
// }

// // إغلاق القائمة عند الضغط خارجها
// window.addEventListener('click', function(e) {
//     const nav = document.getElementById('mainDropdown');
//     const burger = document.querySelector('.hamburger-menu');
//     if (!nav.contains(e.target) && !burger.contains(e.target)) {
//         nav.classList.remove('active');
//     }
// });





// function toggleFinalFilter(e) {
//     e.stopPropagation();
//     var menu = document.getElementById('servicesMenu');
//     // إذا ضغطنا داخل المنيو لا نغلقه
//     if (e.target.closest('.filter-dropdown-panel')) return;
    
//     menu.classList.toggle('active');
// }

// // إغلاق عند الضغط في الخارج
// document.addEventListener('click', function() {
//     var menu = document.getElementById('servicesMenu');
//     if (menu) menu.classList.remove('active');
// });





//     // const modal = document.getElementById("workModal");
//     // const modalImg = document.getElementById("modalTargetImg");
//     // const closeBtn = document.querySelector(".close-modal-btn");

//     // // تشغيل النافذة عند الضغط على أي صورة تملك كلاس clickable-img
//     // document.querySelectorAll('.clickable-img').forEach(img => {
//     //     img.addEventListener('click', function() {
//     //         modal.style.display = "flex";
//     //         modalImg.src = this.src;
//     //     });
//     // });

//     // // إغلاق النافذة عند الضغط على زر X
//     // closeBtn.onclick = () => {
//     //     modal.style.display = "none";
//     // };

//     // // إغلاق النافذة عند الضغط في أي مكان خارج المحتوى الأبيض
//     // window.onclick = (event) => {
//     //     if (event.target == modal) {
//     //         modal.style.display = "none";
//     //     }
//     // };

//     document.addEventListener('DOMContentLoaded', () => {
//     // --- 1. إعدادات النافذة المنبثقة (Modal) ---
//     const modal = document.getElementById('imageModal');
//     const modalImg = document.getElementById('modalFullImage');
//     const closeBtn = document.querySelector('.close-modal');

//     // فتح النافذة عند الضغط على أي صورة
//     document.querySelectorAll('.clickable-img').forEach(img => {
//         img.addEventListener('click', function() {
//             modal.style.display = 'flex';
//             modalImg.src = this.src;
//             // إضافة أنيميشن دخول بسيط
//             document.querySelector('.modal-container').style.transform = 'scale(1)';
//             document.querySelector('.modal-container').style.opacity = '1';
//         });
//     });

//     // إغلاق النافذة
//     const closeModal = () => {
//         modal.style.display = 'none';
//     };

//     closeBtn.onclick = closeModal;
//     window.onclick = (e) => { if (e.target == modal) closeModal(); };


//     // --- 2. نظام الفلترة الذكي (الأقسام الجانبية) ---
//     const filterItems = document.querySelectorAll('.sub-category-list li');
//     const workCards = document.querySelectorAll('.work-card');

//     filterItems.forEach(item => {
//         item.addEventListener('click', function() {
//             // تغيير الفئة النشطة في القائمة
//             filterItems.forEach(li => li.classList.remove('active'));
//             this.classList.add('active');

//             const category = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            
//             // تطبيق الفلترة مع أنيميشن اختفاء وظهور
//             workCards.forEach(card => {
//                 card.style.opacity = '0';
//                 card.style.transform = 'scale(0.8)';
                
//                 setTimeout(() => {
//                     if (category === 'all' || card.getAttribute('data-category') === category) {
//                         card.style.display = 'block';
//                         setTimeout(() => {
//                             card.style.opacity = '1';
//                             card.style.transform = 'scale(1)';
//                         }, 50);
//                     } else {
//                         card.style.display = 'none';
//                     }
//                 }, 300);
//             });
//         });
//     });

//     // --- 3. تأثير "حلو" عند التمرير (Scroll Reveal) ---
//     const observerOptions = { threshold: 0.1 };
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.style.opacity = '1';
//                 entry.target.style.transform = 'translateY(0)';
//             }
//         });
//     }, observerOptions);

//     workCards.forEach(card => {
//         card.style.opacity = '0';
//         card.style.transform = 'translateY(30px)';
//         card.style.transition = 'all 0.6s ease-out';
//         observer.observe(card);
//     });
// });



// document.addEventListener('DOMContentLoaded', function () {
//     const hamburgerBtn = document.getElementById('hamburgerBtn');
//     const sideNav = document.getElementById('sideNav');
//     const closeBtn = document.getElementById('closeBtn');
//     const navOverlay = document.getElementById('navOverlay');

//     if (hamburgerBtn && sideNav && closeBtn && navOverlay) {
//         hamburgerBtn.addEventListener('click', function () {
//             sideNav.classList.add('open');
//             navOverlay.classList.add('show');
//         });

//         closeBtn.addEventListener('click', function () {
//             sideNav.classList.remove('open');
//             navOverlay.classList.remove('show');
//         });

//         navOverlay.addEventListener('click', function () {
//             sideNav.classList.remove('open');
//             navOverlay.classList.remove('show');
//         });
//     } else {
//         console.error("لم يتم العثور على عناصر الهيدر — تأكد من وجودها في HTML.");
//     }
// });


// const hamburger = document.querySelector('.hamburger-menu');
// const sideNav = document.querySelector('.side-nav');
// const overlay = document.querySelector('.overlay');

// hamburger.addEventListener('click', () => {
//     sideNav.classList.add('open');
//     overlay.classList.add('show');
// });

// overlay.addEventListener('click', () => {
//     sideNav.classList.remove('open');
//     overlay.classList.remove('show');
// });

// // فتح نافذة البحث على الجوال
// function openSearchPop() {
//     const overlay = document.getElementById('searchOverlay');
//     if (overlay) {
//         overlay.style.display = 'flex';
//         // تركيز على حقل البحث تلقائيًا
//         setTimeout(() => {
//             const input = document.getElementById('mobileSearchInput');
//             if (input) input.focus();
//         }, 300);
//     }
// }

// // إغلاق نافذة البحث
// function closeSearchPop() {
//     const overlay = document.getElementById('searchOverlay');
//     if (overlay) overlay.style.display = 'none';
// }

// // تنفيذ البحث
// function performSearch() {
//     const query = document.getElementById('mobileSearchInput').value;
//     if (query.trim()) {
//         alert('جارٍ البحث عن: ' + query);
//         // هنا يمكنك ربطه بمنطق البحث الفعلي
//         closeSearchPop();
//     } else {
//         alert('يرجى كتابة كلمة للبحث!');
//     }
// }

// // ربط حدث النقر على أيقونة البحث (على الجوال)
// document.addEventListener('DOMContentLoaded', function () {
//     const mobileSearchIcon = document.querySelector('.mobile-search-icon');
//     if (mobileSearchIcon && window.innerWidth <= 768) {
//         mobileSearchIcon.addEventListener('click', openSearchPop);
//     }

//     // إغلاق النافذة عند الضغط على الخلفية
//     const overlay = document.getElementById('searchOverlay');
//     if (overlay) {
//         overlay.addEventListener('click', function(e) {
//             if (e.target === overlay) closeSearchPop();
//         });
//     }
// });


// document.addEventListener('DOMContentLoaded', function () {
//     // جلب العناصر
//     const hamburgerBtn = document.getElementById('hamburgerBtn');
//     const sideNav = document.getElementById('sideNav');
//     const closeBtn = document.getElementById('closeBtn');
//     const navOverlay = document.getElementById('navOverlay');

//     // التحقق من وجود العناصر
//     if (!hamburgerBtn || !sideNav || !closeBtn || !navOverlay) {
//         console.error('❌ ناقص عناصر الهيدر! تأكد من وجود: #hamburgerBtn, #sideNav, #closeBtn, #navOverlay');
//         return;
//     }

//     // فتح القائمة
//     hamburgerBtn.addEventListener('click', function () {
//         sideNav.classList.add('open');
//         navOverlay.classList.add('show');
//     });

//     // إغلاق القائمة
//     closeBtn.addEventListener('click', function () {
//         sideNav.classList.remove('open');
//         navOverlay.classList.remove('show');
//     });

//     // إغلاق عند الضغط على الخلفية
//     navOverlay.addEventListener('click', function () {
//         sideNav.classList.remove('open');
//         navOverlay.classList.remove('show');
//     });
// });


// app.js - متوافق مع index.html و categories.html بعد التعديل

document.addEventListener('DOMContentLoaded', function () {
    // === 1. عناصر الهيدر ===
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const sideNav = document.getElementById('sideNav');
    const closeBtn = document.getElementById('closeBtn');
    const navOverlay = document.getElementById('navOverlay');

    // === 2. عناصر الفلترة (في categories.html) ===
    const filterBtn = document.getElementById('filterBtn');
    const filterOverlay = document.getElementById('filterOverlay');

    // === 3. عناصر المودال (في categories.html) ===
    const imageModal = document.getElementById('imageModal');
    const modalFullImage = document.getElementById('modalFullImage');

    // === فتح/إغلاق القائمة الجانبية ===
    if (hamburgerBtn && sideNav && closeBtn && navOverlay) {
        hamburgerBtn.addEventListener('click', () => {
            sideNav.classList.add('open');
            navOverlay.classList.add('show');
        });

        closeBtn.addEventListener('click', () => {
            sideNav.classList.remove('open');
            navOverlay.classList.remove('show');
        });

        navOverlay.addEventListener('click', (e) => {
            if (e.target === navOverlay) {
                sideNav.classList.remove('open');
                navOverlay.classList.remove('show');
            }
        });
    }

    // === فتح/إغلاق نافذة الفلترة ===
    if (filterBtn && filterOverlay) {
        filterBtn.addEventListener('click', () => {
            filterOverlay.style.display = 'flex';
        });

        // زر الإغلاق في الفلترة
        const closeFilterBtn = filterOverlay.querySelector('.close-pop-btn');
        if (closeFilterBtn) {
            closeFilterBtn.addEventListener('click', () => {
                filterOverlay.style.display = 'none';
            });
        }

        // إغلاق عند الضغط على الخلفية
        filterOverlay.addEventListener('click', (e) => {
            if (e.target === filterOverlay) {
                filterOverlay.style.display = 'none';
            }
        });
    }

    // === فتح المودال عند الضغط على الصورة ===
    if (imageModal && modalFullImage) {
        document.querySelectorAll('.work-card img').forEach(img => {
            img.addEventListener('click', () => {
                modalFullImage.src = img.src;
                imageModal.style.display = 'flex';
            });
        });

        // زر الإغلاق
        const closeModal = imageModal.querySelector('.close-modal');
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                imageModal.style.display = 'none';
            });
        }

        // إغلاق عند الضغط على الخلفية
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal) {
                imageModal.style.display = 'none';
            }
        });
    }

    // === دوال الفلترة (اختياري) ===
    window.toggleFilterPop = function() {
        if (filterOverlay) {
            filterOverlay.style.display = 
                filterOverlay.style.display === 'flex' ? 'none' : 'flex';
        }
    };

    window.applyFilters = function() {
        alert('تم تطبيق الفلاتر!');
        if (filterOverlay) filterOverlay.style.display = 'none';
    };

    console.log('✅ JavaScript جاهز للعمل.');
});

// وظيفة لفتح وإغلاق القوائم المنسدلة
function toggleDrop(id) {
    const currentMenu = document.getElementById(id);
    const allMenus = document.querySelectorAll('.drop-menu');
    const allButtons = document.querySelectorAll('.drop-btn i');

    // 1. إغلاق أي قائمة أخرى مفتوحة وتدوير أسهمها للوضع الأصلي
    allMenus.forEach(menu => {
        if (menu.id !== id) {
            menu.style.display = 'none';
            menu.parentElement.querySelector('i').style.transform = 'rotate(0deg)';
        }
    });

    // 2. تبديل حالة القائمة الحالية (فتح/إغلاق)
    const isOpen = currentMenu.style.display === 'block';
    currentMenu.style.display = isOpen ? 'none' : 'block';
    
    // 3. تدوير السهم الخاص بالزر الحالي
    const icon = currentMenu.parentElement.querySelector('i');
    icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
    icon.style.transition = '0.3s';
}

// إغلاق القوائم عند الضغط في أي مكان خارجها على الشاشة
window.onclick = function(event) {
    if (!event.target.closest('.custom-dropdown')) {
        document.querySelectorAll('.drop-menu').forEach(menu => {
            menu.style.display = 'none';
            menu.parentElement.querySelector('i').style.transform = 'rotate(0deg)';
        });
    }
}