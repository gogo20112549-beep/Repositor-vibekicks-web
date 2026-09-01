/* ==========================================================================
   VIBEKICKS Core Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // ----------------------------------------------------------------------
    // 1. DATASETS
    // ----------------------------------------------------------------------
    
    // HOME VIEW DATA
    const homeCarousel = [
        { name: "Bapesta Black/Red", img: "assets/001aa55544aa92832847f6c42be2727d8d3b9645.png" },
        { name: "Air Jordan 4 Military Black", img: "assets/017f77e3862129394871ca76408c40dcdac10800.png" },
        { name: "Rick Owens High Top", img: "assets/01c5932629a96ac8ca9d1fc63f1f36ade0a92953.png" }
    ];

    const homeGrid = [
        { name: "Maison Mihara Yasuhiro Hank OG Sole Canvas Low 'Black White'", img: "assets/10bd3a89cdb6a30eff413307715b18694753b623.png" },
        { name: "Lil Yachty x Nike Air Force 1 Low 'Concrete Boys - Lucky Green'", img: "assets/1134105683406059d0f862610f6a5073926d35c9.png" },
        { name: "Nike Mind 001 'Black'", img: "assets/1214f9e51815d83823ac9dcc442ed05d2a0bc495.png" },
        { name: "ASICS Gel 1130 'Black Pure Silver'", img: "assets/da2a5312a571b219c18587653891d799f3b88cf0.png" }, // Replaced Puma logo with real shoe
        { name: "adidas Wmns Samba OG 'Cheetah Pack - Preloved Red'", img: "assets/1e485e8f18da33140361b4af1cdd817f206f6b47.png" },
        { name: "Sp5der x adidas Superstar 'Black Silver Metallic'", img: "assets/1ed4b03f8376d03649ba2bd4974dd83f7ca41f02.png" }
    ];

    // POPULAR VIEW DATA
    const popularCarousel = [
        { name: "DTLR x New Balance 740v2 Little Kid 'Night Moves'", img: "assets/400a496f8d72438bfb03b0d5bd7f22171ea84d11.png" },
        { name: "Under Armour Curry 4 Retro 'White Gold' 2024", img: "assets/4bc07ecfdd06990702f33e4e040dfb41a823e1b6.png" },
        { name: "Fila Stackhouse Spaghetti 'White Navy'", img: "assets/5ffe927a2e65d0a937c1878c5uni5ffe927a2e65d0a937c1878c5bb92a5c90182e60.png" }
    ];

    // Replaced Fila Stackhouse with corrected path
    popularCarousel[2].img = "assets/5ffe927a2e65d0a937c1878c5bb92a5c90182e60.png";

    const popularGridData = [
        { name: "Under Armour Curry 4 Retro 'White Gold' 2024", img: "assets/62ce2b30bd5aaa06182f95f4ad2796395390b317.png" },
        { name: "Under Armour Curry 11 'Future Curry'", img: "assets/4bc07ecfdd06990702f33e4e040dfb41a823e1b6.png" },
        { name: "Nike Air Max Plus OG Premium 'Desert Monarch'", img: "assets/6c3b154af858adb32b2e52144cf06904887b196a.png" },
        { name: "Air Jordan 5 Retro 'Black Carolina / UNC' 2026", img: "assets/6f84c06aa00fb1d6f640323cbc3a6db0de29d632.png" },
        { name: "Lil Yachty x Nike Air Force 1 Low 'Concrete Boys'", img: "assets/1134105683406059d0f862610f6a5073926d35c9.png" },
        { name: "Nike Air Max Plus 'Triple Black'", img: "assets/dbeba915cc563cc8d3f5344820fdaf8b172511ef.png" },
        { name: "Puma LaFrancé 'Written in Chrome Pack - Black'", img: "assets/75ac6446fc35176e1d28a5d5882cfa4686398fad.png" },
        { name: "Puma Suede XL 'Black White'", img: "assets/1e485e8f18da33140361b4af1cdd817f206f6b47.png" },
        { name: "BAPE x adidas Samba 'World Cup'", img: "assets/7866f78f228415b2aa46c4ed06e0be41e623f11b.png" },
        { name: "Hellstar x adidas Superstar 'Hazy Orange'", img: "assets/7ab20d87f128c0a5b202a9086bc4e762b34817be.png" },
        { name: "adidas Wmns Samba OG 'Cheetah Pack'", img: "assets/1e485e8f18da33140361b4af1cdd817f206f6b47.png" },
        { name: "ASICS Gel 1130 'Black Pure Silver'", img: "assets/da2a5312a571b219c18587653891d799f3b88cf0.png" },
        { name: "DTLR x New Balance 740v2 'Night Moves'", img: "assets/400a496f8d72438bfb03b0d5bd7f22171ea84d11.png" },
        { name: "Fila Stackhouse Spaghetti 'White Navy'", img: "assets/5ffe927a2e65d0a937c1878c5bb92a5c90182e60.png" }
    ];

    // ABOUT US VIEW STAFF CHOICES
    const staffChoices = [
        { name: "Rick Owens DRKSHDW Jumbo Lace Denim Low 'Black Milk'", img: "assets/9d3d92fdaea41cc4486e8e69b3c4d618f2fe863c.png" }, // Replaced play button with real shoe
        { name: "Air Jordan 11 Retro 'Gratitude / Defining Moments'", img: "assets/cb301d88d5ae4fa5d23b08aad0752d15a953f277.png" }, // Replaced Boot with real shoe
        { name: "Nike Air Max Plus 'Triple Black'", img: "assets/dbeba915cc563cc8d3f5344820fdaf8b172511ef.png" } // Replaced play button with real shoe
    ];

    // BLOG VIEW DATA
    const blogGridData = [
        { name: "Christian Louboutin Wmns Vieira Spikes Flat Calf 'Black'", img: "assets/86aed52d3b8c9548f3d92e5ff36ba31aef29e293.png" }, // Replaced UA logo with real shoe
        { name: "Supreme x Timberland 6 Inch Premium Waterproof Boot 'Big Logo - Wheat'", img: "assets/972e41eb55f5d118cad109770ea1ba4b12107135.png" },
        { name: "Supreme x Timberland 6 Inch Premium Waterproof Boot 'Big Logo - Wheat' (Black)", img: "assets/97ed27972dd7ad0b042f45f5d4bf9b7cdb5c34d3.png" },
        { name: "Air Jordan 4 Retro 'Fear'", img: "assets/9aa3696d6522f1157a8a2b3dd9ff7d61f32f05fb.png" },
        { name: "Air Jordan 3 Retro 'UNC'", img: "assets/cb301d88d5ae4fa5d23b08aad0752d15a953f277.png" }, // Replaced Adidas logo with real shoe
        { name: "Vans Knu-Skool 'Studs'", img: "assets/9d3d92fdaea41cc4486e8e69b3c4d618f2fe863c.png" },
        { name: "Dc Court Graffik SE 'White'", img: "assets/d6375243d115fddb1cad719c576ec0909888805b.png" }, // Replaced Pin icon with real shoe
        { name: "Air Jordan 5 Retro 'Wolf Grey' 2026", img: "assets/acd0f9b971340697b8fa5577f1e3320859cb7962.png" },
        { name: "Comme des Garçons Play x Converse Chuck 70 Low 'Black'", img: "assets/b1db6251556238b4898dd068b90fb47d24ff60b9.png" },
        { name: "Vans Old Skool 36 LX 'Souvenir Pack - Burgundy'", img: "assets/880cd20f17912c2d3a5ec7c94659d39a17ab35c9.png" } // Replaced Slide with real shoe
    ];

    // CONTACT VIEW DATA
    const contactGridData = [
        { name: "Bapesta #2 M2 'Black'", img: "assets/cb301d88d5ae4fa5d23b08aad0752d15a953f277.png" }, // Replaced Adidas logo with real shoe
        { name: "Balenciaga Track Sneaker 'Triple Black'", img: "assets/62ce2b30bd5aaa06182f95f4ad2796395390b317.png" }, // Replaced Nike logo with real shoe
        { name: "adidas Yeezy Slides 'Dark Onyx'", img: "assets/b3253c74741d509616bfba0bd024d5b16aaae562.png" }, // Replaced Puma logo with Yeezy Slide
        { name: "Puma Suede XL 'Black White'", img: "assets/1e485e8f18da33140361b4af1cdd817f206f6b47.png" } // Replaced AJ5 with real Puma shoe
    ];

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let currentMonthIndex = 5; // Jun
    const calendarDates = [2, 4, 6, 9, 11, 13, 15, 16, 18, 19, 21, 25];

    // ----------------------------------------------------------------------
    // 2. DOM ELEMENTS
    // ----------------------------------------------------------------------
    const navTabs = document.querySelectorAll('.nav-tab');
    const tabViews = document.querySelectorAll('.tab-view');
    const footerTabLinks = document.querySelectorAll('.footer-tab-link');
    const searchInput = document.getElementById('searchInput');

    // Home Carousel Elements
    const heroTrack = document.getElementById('heroCarouselTrack');
    const heroPrev = document.getElementById('heroPrevBtn');
    const heroNext = document.getElementById('heroNextBtn');
    const heroDotsContainer = document.getElementById('heroCarouselDots');

    // Popular Carousel Elements
    const popularTrack = document.getElementById('popularCarouselTrack');
    const popularPrev = document.getElementById('popularPrevBtn');
    const popularNext = document.getElementById('popularNextBtn');
    const popularDotsContainer = document.getElementById('popularCarouselDots');

    // Grid Containers
    const newReleasesGrid = document.getElementById('newReleasesGrid');
    const popularGrid = document.getElementById('popularGrid');
    const staffChoicesGrid = document.getElementById('staffChoicesGrid');
    const blogGrid = document.getElementById('blogGrid');
    const contactGrid = document.getElementById('contactGrid');

    // Calendar Bar
    const calendarDaysContainer = document.getElementById('calendarDaysContainer');
    const calPrevMonth = document.getElementById('calPrevMonth');
    const calNextMonth = document.getElementById('calNextMonth');
    const calendarMonthText = document.querySelector('.calendar-month');

    let currentHeroIndex = 0;
    let currentPopularIndex = 0;
    let activeCalendarDay = 2;

    // ----------------------------------------------------------------------
    // 3. SECURE CARD BUILDERS (XSS Prevention)
    // ----------------------------------------------------------------------
    
    // Vertical Card: Image on top, label below
    const createVerticalCard = (item) => {
        const card = document.createElement('div');
        card.className = 'product-card vertical-card';

        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'product-img-wrapper';
        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.name;
        if (item.img.includes('d6375243d115fddb1cad719c576ec0909888805b.png')) {
            img.classList.add('scale-up');
        }
        imgWrapper.appendChild(img);

        const info = document.createElement('div');
        info.className = 'product-info';
        const title = document.createElement('h4');
        title.textContent = item.name;
        info.appendChild(title);

        card.appendChild(imgWrapper);
        card.appendChild(info);

        return card;
    };

    // Horizontal Card: Image on left, details on the right
    const createHorizontalCard = (item) => {
        const card = document.createElement('div');
        card.className = 'product-card horizontal-card';

        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'product-img-wrapper';
        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.name;
        imgWrapper.appendChild(img);

        const info = document.createElement('div');
        info.className = 'product-info';
        const title = document.createElement('h4');
        title.textContent = item.name;
        info.appendChild(title);

        card.appendChild(imgWrapper);
        card.appendChild(info);

        return card;
    };

    let selectedBrand = 'all';

    const renderPopularGrid = (brand = selectedBrand) => {
        popularGrid.replaceChildren();

        const filteredItems = popularGridData.filter(item => {
            if (!brand || brand === 'all') return true;
            const itemName = item.name.toLowerCase();
            const filterBrand = brand.toLowerCase();

            if (filterBrand === 'nike') {
                return itemName.includes('nike') || itemName.includes('jordan');
            }
            if (filterBrand === 'new balance') {
                return itemName.includes('new balance') || itemName.includes('balance');
            }
            if (filterBrand === 'under armour') {
                return itemName.includes('under armour') || itemName.includes('curry');
            }
            return itemName.includes(filterBrand);
        });

        if (filteredItems.length === 0) {
            const noMatchMsg = document.createElement('div');
            noMatchMsg.className = 'no-brand-items';
            noMatchMsg.style.gridColumn = '1 / -1';
            noMatchMsg.style.padding = '40px 20px';
            noMatchMsg.style.textAlign = 'center';
            noMatchMsg.style.fontWeight = '600';
            noMatchMsg.style.color = 'var(--text-muted)';
            noMatchMsg.textContent = `No ${brand.toUpperCase()} shoes found in current catalog.`;
            popularGrid.appendChild(noMatchMsg);
        } else {
            filteredItems.forEach(item => {
                popularGrid.appendChild(createHorizontalCard(item));
            });
        }
    };

    const renderAllViews = () => {
        // Clear all grids safely
        newReleasesGrid.replaceChildren();
        popularGrid.replaceChildren();
        staffChoicesGrid.replaceChildren();
        blogGrid.replaceChildren();
        contactGrid.replaceChildren();

        // 1. Home Grid - Vertical Cards
        homeGrid.forEach(item => {
            if (activeCalendarDay) {
                // Incorporate both calendar day and month index to randomize releases per date/month combination
                const hashValue = item.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                if ((hashValue + activeCalendarDay + currentMonthIndex) % 3 === 0) {
                    return;
                }
            }
            newReleasesGrid.appendChild(createVerticalCard(item));
        });

        if (newReleasesGrid.children.length === 0 && homeGrid.length > 0) {
            newReleasesGrid.appendChild(createVerticalCard(homeGrid[0]));
            newReleasesGrid.appendChild(createVerticalCard(homeGrid[1]));
        }

        // 2. Popular Grid - Filtered by Brand
        renderPopularGrid(selectedBrand);

        // 3. About Us Staff Choices - Vertical Cards
        staffChoices.forEach(item => {
            staffChoicesGrid.appendChild(createVerticalCard(item));
        });

        // 4. Blog Grid - Vertical Cards
        blogGridData.forEach(item => {
            blogGrid.appendChild(createVerticalCard(item));
        });

        // 5. Contact Grid - Vertical Cards
        contactGridData.forEach(item => {
            contactGrid.appendChild(createVerticalCard(item));
        });
    };

    // Brand Bar Filtering Click Listeners
    const brandItems = document.querySelectorAll('.brand-item');
    brandItems.forEach(item => {
        item.addEventListener('click', () => {
            const brand = item.getAttribute('data-brand') || 'all';

            if (item.classList.contains('active') && brand !== 'all') {
                // Toggle off if already selected, reset to all
                item.classList.remove('active');
                selectedBrand = 'all';
            } else {
                brandItems.forEach(b => b.classList.remove('active'));
                if (brand !== 'all') {
                    item.classList.add('active');
                }
                selectedBrand = brand;
            }

            renderPopularGrid(selectedBrand);
        });
    });

    // ----------------------------------------------------------------------
    // 4. MOBILE DRAWER & NAVIGATION
    // ----------------------------------------------------------------------
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileNavDrawer = document.getElementById('mobileNavDrawer');
    const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');
    const mobileDrawerClose = document.getElementById('mobileDrawerClose');

    const openMobileDrawer = () => {
        if (mobileNavDrawer && mobileNavBackdrop) {
            mobileNavDrawer.classList.add('active');
            mobileNavBackdrop.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeMobileDrawer = () => {
        if (mobileNavDrawer && mobileNavBackdrop) {
            mobileNavDrawer.classList.remove('active');
            mobileNavBackdrop.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMobileDrawer);
    if (mobileDrawerClose) mobileDrawerClose.addEventListener('click', closeMobileDrawer);
    if (mobileNavBackdrop) mobileNavBackdrop.addEventListener('click', closeMobileDrawer);

    // ----------------------------------------------------------------------
    // 4. HEADER ACTION BUTTONS (Mail, Search, Profile) & MODALS
    // ----------------------------------------------------------------------
    const mailBtn = document.getElementById('mailBtn');
    const searchBtn = document.getElementById('searchBtn');
    const profileBtn = document.getElementById('profileBtn');
    const searchBarWrapper = document.getElementById('searchBarWrapper');

    const mailModal = document.getElementById('mailModal');
    const mailModalClose = document.getElementById('mailModalClose');
    const mailForm = document.getElementById('mailForm');

    const profileModal = document.getElementById('profileModal');
    const profileModalClose = document.getElementById('profileModalClose');
    const profileForm = document.getElementById('profileForm');

    const toastBadge = document.getElementById('toastNotification');
    const toastText = document.getElementById('toastText');

    let toastTimer = null;
    const showToast = (message) => {
        if (!toastBadge || !toastText) return;
        toastText.textContent = message;
        toastBadge.classList.remove('hidden');
        if (toastTimer) clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            toastBadge.classList.add('hidden');
        }, 3500);
    };

    const openModal = (modal) => {
        if (modal) {
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeModal = (modal) => {
        if (modal) {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    };

    // Global Functions for direct inline onclick reliability
    window.openMailModal = (e) => {
        if (e) e.preventDefault();
        openModal(mailModal);
    };

    window.closeMailModal = (e) => {
        if (e) e.preventDefault();
        closeModal(mailModal);
    };

    window.focusSearchInput = (e) => {
        if (e) e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (searchInput) {
            searchInput.focus();
            if (searchBarWrapper) {
                searchBarWrapper.classList.add('search-highlight');
                setTimeout(() => {
                    searchBarWrapper.classList.remove('search-highlight');
                }, 1500);
            }
        }
    };

    window.openProfileModal = (e) => {
        if (e) e.preventDefault();
        openModal(profileModal);
    };

    window.closeProfileModal = (e) => {
        if (e) e.preventDefault();
        closeModal(profileModal);
    };

    // Mail Button -> Opens Support & Contact Modal
    if (mailBtn) {
        mailBtn.addEventListener('click', window.openMailModal);
    }
    if (mailModalClose) {
        mailModalClose.addEventListener('click', window.closeMailModal);
    }
    if (mailModal) {
        mailModal.addEventListener('click', (e) => {
            if (e.target === mailModal) closeModal(mailModal);
        });
    }
    if (mailForm) {
        mailForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameEl = document.getElementById('mailName');
            const name = nameEl ? nameEl.value : 'User';
            closeModal(mailModal);
            mailForm.reset();
            showToast(`Thank you ${name}! Message sent successfully to VIBEKICKS Support.`);
        });
    }

    // Search Button -> Focus Search Bar with smooth scroll & pulse animation
    if (searchBtn) {
        searchBtn.addEventListener('click', window.focusSearchInput);
    }

    // Profile Button -> Opens Member Sign In Modal
    if (profileBtn) {
        profileBtn.addEventListener('click', window.openProfileModal);
    }
    if (profileModalClose) {
        profileModalClose.addEventListener('click', window.closeProfileModal);
    }
    if (profileModal) {
        profileModal.addEventListener('click', (e) => {
            if (e.target === profileModal) closeModal(profileModal);
        });
    }
    if (profileForm) {
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            closeModal(profileModal);
            profileForm.reset();
            showToast(`Welcome back! Successfully signed in to VIBEKICKS Member Club.`);
        });
    }

    // ----------------------------------------------------------------------
    // 5. SPA TAB ROUTING
    // ----------------------------------------------------------------------
    const switchTab = (tabId) => {
        tabViews.forEach(view => {
            if (view.id === `${tabId}-view`) {
                view.classList.remove('hidden');
                view.classList.add('active');
            } else {
                view.classList.add('hidden');
                view.classList.remove('active');
            }
        });

        // Update active class on all nav tabs (both desktop and mobile drawer)
        const allNavTabs = document.querySelectorAll('.nav-tab');
        allNavTabs.forEach(tab => {
            if (tab.getAttribute('data-tab') === tabId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        closeMobileDrawer();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const allNavTabs = document.querySelectorAll('.nav-tab');
    allNavTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = tab.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    footerTabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = link.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // ----------------------------------------------------------------------
    // 5. SNEAKER CAROUSELS
    // ----------------------------------------------------------------------
    const buildCarousel = (track, data) => {
        track.replaceChildren();
        data.forEach(item => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';

            const index = data.indexOf(item);
            for (let i = 0; i < 3; i++) {
                const dataIndex = (index + i) % data.length;
                const shoe = data[dataIndex];
                
                const box = document.createElement('div');
                box.className = 'carousel-item-box';
                const img = document.createElement('img');
                img.src = shoe.img;
                img.alt = shoe.name;
                box.appendChild(img);
                slide.appendChild(box);
            }

            track.appendChild(slide);
        });
    };

    const updateCarousel = (track, dotsContainer, index) => {
        track.style.transform = `translateX(-${index * 100}%)`;
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, idx) => {
            if (idx === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    const setupCarousel = (track, dotsContainer, prevBtn, nextBtn, data, indexGetter, indexSetter) => {
        buildCarousel(track, data);

        dotsContainer.replaceChildren();
        data.forEach((_, idx) => {
            const dot = document.createElement('span');
            dot.className = 'dot' + (idx === indexGetter() ? ' active' : '');
            dot.addEventListener('click', () => {
                indexSetter(idx);
                updateCarousel(track, dotsContainer, idx);
            });
            dotsContainer.appendChild(dot);
        });

        prevBtn.addEventListener('click', () => {
            let idx = indexGetter() - 1;
            if (idx < 0) idx = data.length - 1;
            indexSetter(idx);
            updateCarousel(track, dotsContainer, idx);
        });

        nextBtn.addEventListener('click', () => {
            let idx = indexGetter() + 1;
            if (idx >= data.length) idx = 0;
            indexSetter(idx);
            updateCarousel(track, dotsContainer, idx);
        });
    };

    // Initialize Carousels
    setupCarousel(heroTrack, heroDotsContainer, heroPrev, heroNext, homeCarousel, () => currentHeroIndex, (val) => currentHeroIndex = val);
    setupCarousel(popularTrack, popularDotsContainer, popularPrev, popularNext, popularCarousel, () => currentPopularIndex, (val) => currentPopularIndex = val);

    // Auto rotate carousels
    setInterval(() => {
        currentHeroIndex = (currentHeroIndex + 1) % homeCarousel.length;
        updateCarousel(heroTrack, heroDotsContainer, currentHeroIndex);
        currentPopularIndex = (currentPopularIndex + 1) % popularCarousel.length;
        updateCarousel(popularTrack, popularDotsContainer, currentPopularIndex);
    }, 6000);

    // ----------------------------------------------------------------------
    // 6. CALENDAR BAR ACTION
    // ----------------------------------------------------------------------
    const updateCalendarMonthText = () => {
        calendarMonthText.textContent = months[currentMonthIndex];
    };

    calPrevMonth.addEventListener('click', () => {
        currentMonthIndex = (currentMonthIndex - 1 + 12) % 12;
        updateCalendarMonthText();
        renderAllViews();
    });

    calNextMonth.addEventListener('click', () => {
        currentMonthIndex = (currentMonthIndex + 1) % 12;
        updateCalendarMonthText();
        renderAllViews();
    });

    calendarDates.forEach(date => {
        const btn = document.createElement('button');
        btn.className = 'calendar-day-btn';
        btn.textContent = date.toString();
        if (date === activeCalendarDay) {
            btn.classList.add('active');
        }
        btn.addEventListener('click', () => {
            const dayBtns = calendarDaysContainer.querySelectorAll('.calendar-day-btn');
            dayBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCalendarDay = date;
            renderAllViews();
        });
        calendarDaysContainer.appendChild(btn);
    });

    // ----------------------------------------------------------------------
    // 7. REAL-TIME SEARCH FILTER
    // ----------------------------------------------------------------------
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            const nameEl = card.querySelector('h4');
            if (nameEl) {
                const name = nameEl.textContent.toLowerCase();
                if (name.includes(query)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });

    // Render initially
    renderAllViews();
});
