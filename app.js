/* ===================================================
   Rock-i DownApp — Landing Page Logic
   Bilingual: Français (default) / العربية (RTL)
   =================================================== */

// -------- Translation Dictionary --------
const translations = {
    fr: {
        // Nav
        nav_features: "Fonctionnalités",
        nav_app: "Application",
        nav_download: "Télécharger",

        // Hero
        hero_badge: "Disponible maintenant sur Android",
        hero_title_1: "Votre Trajet,",
        hero_title_2: "Plus Intelligent.",
        hero_desc: "Rock-i est l'application compagnon intelligente pour votre trottinette électrique Rocki. Connectez-vous via Bluetooth, surveillez les diagnostics en temps réel, suivez chaque trajet et rejoignez une communauté grandissante de riders.",
        btn_download_android: "Télécharger pour Android",
        btn_soon: "Bientôt",
        stat_features: "Fonctionnalités",
        stat_connectivity: "Connectivité",
        stat_models: "Modèles",
        scroll_explore: "Défiler pour explorer",

        // Features
        features_label: "Fonctionnalités",
        features_title: "Tout Ce Dont Vous Avez<br>Besoin en Une App",
        features_subtitle: "De la connexion Bluetooth en temps réel aux diagnostics avancés, Rock-i met le contrôle total de votre trottinette dans votre poche.",
        feat_bt_title: "Connexion Bluetooth",
        feat_bt_desc: "Appairage BLE 5.0 instantané avec votre trottinette Rocki. La reconnexion automatique vous garde toujours connecté.",
        feat_lock_title: "Sécurité & Verrouillage",
        feat_lock_desc: "Verrouillage/déverrouillage à distance, protection PIN et alarme antivol pour sécuriser votre trajet.",
        feat_dash_title: "Tableau de Bord en Direct",
        feat_dash_desc: "Vitesse, batterie, température et autonomie affichés en temps réel sur votre téléphone.",
        feat_diag_title: "Diagnostics Intelligents",
        feat_diag_desc: "Vérifications approfondies du système — cellules de batterie, CPU, capteurs et modules de communication.",
        feat_nav_title: "Navigation & Cartes",
        feat_nav_desc: "Navigation intégrée avec styles de carte Rocki personnalisés, vue satellite et mode terrain 3D.",
        feat_history_title: "Historique des Trajets",
        feat_history_desc: "Journaux détaillés de chaque trajet — distance, durée, graphiques de vitesse et replay du parcours sur la carte.",

        // Preview
        preview_label: "Aperçu de l'Application",
        preview_title: "Puissante & Intuitive",
        preview_subtitle: "Une interface moderne dotée de tous les outils nécessaires pour gérer, surveiller et optimiser votre expérience trottinette.",
        prev_dashboard_title: "Tableau de Bord",
        prev_dashboard_desc: "Vitesse, batterie, autonomie et température en un coup d'œil",
        prev_diag_title: "Diagnostics",
        prev_diag_desc: "Analyse complète de l'état du système avec détection de codes d'erreur",
        prev_nav_title: "Navigation",
        prev_nav_desc: "Navigation guidée avec style de carte Rocki personnalisé",
        prev_history_title: "Historique",
        prev_history_desc: "Revoyez chaque trajet avec statistiques détaillées et replay du parcours",
        prev_security_title: "Sécurité",
        prev_security_desc: "Verrouillage PIN, alarme antivol et verrouillage à distance",
        prev_fault_title: "Détection de Pannes",
        prev_fault_desc: "Scan automatique des erreurs avec dépannage guidé",
        prev_custom_title: "Personnalisation",
        prev_custom_desc: "Thème sombre/clair, langue, unités et réglages de vitesse",
        prev_ai_title: "Assistant IA",
        prev_ai_desc: "Chatbot intégré pour aide, conseils et dépannage",

        // Compatibility
        compat_label: "Compatibilité",
        compat_title: "Compatible avec Votre Appareil",
        compat_android: "Android 8.0+ (Oreo)",
        compat_ios: "Bientôt disponible",
        compat_ble: "BLE 5.0 requis",

        // CTA
        cta_title_1: "Prêt à",
        cta_title_2: "Rouler Plus Intelligemment ?",
        cta_desc: "Téléchargez Rock-i maintenant et exploitez tout le potentiel de votre trottinette Rocki.",
        btn_download_apk: "Télécharger APK",

        // Footer
        footer_desc: "L'application officielle pour les trottinettes Rocki. Conçue et développée par WeFixIT.",
        footer_product: "Produit",
        footer_support: "Assistance",
        footer_legal: "Mentions Légales",
        footer_guide: "Guide de l'App",
        footer_contact: "Contactez-nous",
        footer_privacy: "Politique de Confidentialité",
        footer_deletion: "Suppression de Compte",
        footer_terms: "Conditions d'Utilisation",
        footer_by: "par",
        footer_rights: "Tous droits réservés.",
        footer_made: "Conçu avec précision au Maroc 🇲🇦",

        // Toast
        toast_apk: "Le lien de téléchargement APK sera configuré bientôt."
    },

    ar: {
        // Nav
        nav_features: "المميزات",
        nav_app: "التطبيق",
        nav_download: "تحميل",

        // Hero
        hero_badge: "متاح الآن على أندرويد",
        hero_title_1: "رحلتك،",
        hero_title_2: "أكثر ذكاءً.",
        hero_desc: "Rock-i هو التطبيق الذكي المرافق لسكوتر Rocki الكهربائي. اتصل عبر البلوتوث، راقب التشخيصات في الوقت الفعلي، تتبع كل رحلة وانضم إلى مجتمع متنامي من الراكبين.",
        btn_download_android: "تحميل لأندرويد",
        btn_soon: "قريباً",
        stat_features: "ميزة",
        stat_connectivity: "الاتصال",
        stat_models: "موديلات",
        scroll_explore: "مرر للاستكشاف",

        // Features
        features_label: "المميزات",
        features_title: "كل ما تحتاجه<br>في تطبيق واحد",
        features_subtitle: "من الاتصال بالبلوتوث في الوقت الفعلي إلى التشخيصات المتقدمة، يضع Rock-i التحكم الكامل بسكوترك في جيبك.",
        feat_bt_title: "اتصال بلوتوث",
        feat_bt_desc: "اقتران فوري BLE 5.0 مع سكوتر Rocki. إعادة الاتصال التلقائي تبقيك متصلاً دائماً.",
        feat_lock_title: "الأمان والقفل",
        feat_lock_desc: "قفل/فتح عن بُعد، حماية برمز PIN وإنذار ضد السرقة لتأمين رحلتك.",
        feat_dash_title: "لوحة القيادة المباشرة",
        feat_dash_desc: "السرعة والبطارية والحرارة والمدى معروضة في الوقت الفعلي على هاتفك.",
        feat_diag_title: "تشخيصات ذكية",
        feat_diag_desc: "فحوصات معمقة للنظام — خلايا البطارية والمعالج والمستشعرات ووحدات الاتصال.",
        feat_nav_title: "الملاحة والخرائط",
        feat_nav_desc: "ملاحة مدمجة مع أنماط خرائط Rocki المخصصة وعرض الأقمار الصناعية ووضع التضاريس ثلاثي الأبعاد.",
        feat_history_title: "سجل الرحلات",
        feat_history_desc: "سجلات تفصيلية لكل رحلة — المسافة والمدة ورسوم السرعة وإعادة تشغيل المسار على الخريطة.",

        // Preview
        preview_label: "نظرة داخل التطبيق",
        preview_title: "قوي وبديهي",
        preview_subtitle: "واجهة حديثة مليئة بكل الأدوات التي تحتاجها لإدارة ومراقبة وتحسين تجربة السكوتر الخاص بك.",
        prev_dashboard_title: "لوحة القيادة",
        prev_dashboard_desc: "السرعة والبطارية والمدى والحرارة بنظرة واحدة",
        prev_diag_title: "التشخيصات",
        prev_diag_desc: "تحليل كامل لصحة النظام مع اكتشاف رموز الأخطاء",
        prev_nav_title: "الملاحة",
        prev_nav_desc: "ملاحة موجهة مع نمط خريطة Rocki مخصص",
        prev_history_title: "السجل",
        prev_history_desc: "راجع كل رحلة مع إحصائيات مفصلة وإعادة تشغيل المسار",
        prev_security_title: "الأمان",
        prev_security_desc: "قفل PIN وإنذار ضد السرقة وقفل السكوتر عن بُعد",
        prev_fault_title: "كشف الأعطال",
        prev_fault_desc: "فحص تلقائي للأخطاء مع استكشاف الأخطاء الموجه",
        prev_custom_title: "التخصيص",
        prev_custom_desc: "المظهر الداكن/الفاتح، اللغة، الوحدات وإعدادات السرعة",
        prev_ai_title: "مساعد الذكاء الاصطناعي",
        prev_ai_desc: "روبوت محادثة مدمج للمساعدة والنصائح واستكشاف الأخطاء",

        // Compatibility
        compat_label: "التوافق",
        compat_title: "يعمل على جهازك",
        compat_android: "أندرويد 8.0+ (Oreo)",
        compat_ios: "قريباً",
        compat_ble: "يتطلب BLE 5.0",

        // CTA
        cta_title_1: "مستعد",
        cta_title_2: "للقيادة بذكاء أكثر؟",
        cta_desc: "حمّل Rock-i الآن واستفد من كامل إمكانيات سكوتر Rocki الخاص بك.",
        btn_download_apk: "تحميل APK",

        // Footer
        footer_desc: "التطبيق الرسمي لسكوترات Rocki الكهربائية. صمم وطوّر بواسطة WeFixIT.",
        footer_product: "المنتج",
        footer_support: "الدعم",
        footer_legal: "قانوني",
        footer_guide: "دليل التطبيق",
        footer_contact: "اتصل بنا",
        footer_privacy: "سياسة الخصوصية",
        footer_deletion: "حذف الحساب",
        footer_terms: "شروط الاستخدام",
        footer_by: "من",
        footer_rights: "جميع الحقوق محفوظة.",
        footer_made: "صُنع بدقة في المغرب 🇲🇦",

        // Toast
        toast_apk: "سيتم تكوين رابط تحميل APK قريباً."
    }
};

// -------- i18n Engine --------
let currentLang = localStorage.getItem('rocki_lang') || 'fr';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('rocki_lang', lang);

    const dict = translations[lang];
    if (!dict) return;

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    // Set document direction and lang
    const html = document.documentElement;
    if (lang === 'ar') {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
        document.body.classList.add('rtl');
    } else {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'fr');
        document.body.classList.remove('rtl');
    }

    // Update switcher buttons (desktop + mobile) — icon is static, only code text changes
    const code = lang === 'ar' ? 'AR' : 'FR';
    ['langCode', 'langCodeMobile'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = code;
    });

    // Update page title & meta
    if (lang === 'ar') {
        document.title = 'Rock-i App — إدارة ذكية للسكوتر الكهربائي';
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.content = 'حمّل Rock-i — التطبيق الذكي لإدارة سكوتر Rocki الكهربائي. تشخيصات في الوقت الفعلي وتتبع الرحلات والأمان والمجتمع.';
    } else {
        document.title = 'Rock-i App — Gestion Intelligente de Trottinette Électrique';
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.content = "Téléchargez Rock-i — l'application intelligente pour gérer votre trottinette électrique Rocki. Diagnostics en temps réel, suivi de trajets, sécurité et communauté.";
    }
}

function toggleLanguage() {
    const next = currentLang === 'fr' ? 'ar' : 'fr';
    setLanguage(next);
}

// -------- Main Init --------
document.addEventListener('DOMContentLoaded', () => {

    // Apply stored language on load
    setLanguage(currentLang);

    // -------- Language Switcher Click --------
    ['langSwitcher', 'langSwitcherMobile'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.addEventListener('click', toggleLanguage);
    });

    // -------- Navbar Scroll Effect --------
    const navbar = document.getElementById('navbar');

    const handleScroll = () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // -------- Mobile Menu Toggle --------
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            const isOpen = navLinks.classList.contains('open');
            const bars = menuToggle.querySelectorAll('span');
            if (isOpen) {
                bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                bars[0].style.transform = '';
                bars[1].style.opacity = '';
                bars[2].style.transform = '';
            }
        });

        // Close on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                const bars = menuToggle.querySelectorAll('span');
                bars[0].style.transform = '';
                bars[1].style.opacity = '';
                bars[2].style.transform = '';
            });
        });
    }

    // -------- Scroll Reveal Animation --------
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // -------- Smooth Anchor Scrolling --------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // -------- Parallax on Hero App Icon --------
    const heroAppIcon = document.querySelector('.hero-app-icon');
    if (heroAppIcon && window.matchMedia('(min-width: 768px)').matches) {
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 12;
            const y = (e.clientY / window.innerHeight - 0.5) * 8;
            heroAppIcon.style.transform = `translate(${x}px, ${y}px)`;
        }, { passive: true });
    }

    // -------- Count Up Animation for Stats --------
    const statElements = document.querySelectorAll('.hero-stat .value');
    const countUpObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const text = el.textContent.trim();
                const num = parseInt(text);
                if (!isNaN(num) && num > 0) {
                    animateCount(el, 0, num, 1200);
                }
                countUpObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statElements.forEach(el => countUpObserver.observe(el));

    function animateCount(el, start, end, duration) {
        const suffix = el.textContent.replace(/[0-9]/g, '').trim();
        const startTime = performance.now();

        function tick(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - (1 - progress) * (1 - progress);
            const current = Math.round(start + (end - start) * eased);
            el.textContent = current + (suffix ? suffix : '+');
            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        }

        requestAnimationFrame(tick);
    }
});

// -------- Download Handler --------
const APK_URL = 'https://github.com/ayoublamzoudi-ops/DownAppRocki/releases/latest/download/Rock-i.apk';

function handleDownload(e) {
    e.preventDefault();
    window.location.href = APK_URL;
}

function showToast(message) {
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.style.cssText = `
        position: fixed;
        bottom: 32px;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        padding: 14px 28px;
        border-radius: 100px;
        background: rgba(18, 22, 40, 0.9);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255,255,255,0.1);
        color: #fff;
        font-family: var(--font-body);
        font-size: 14px;
        font-weight: 500;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s, transform 0.3s;
        direction: ${currentLang === 'ar' ? 'rtl' : 'ltr'};
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
