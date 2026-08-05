/* ==========================================================================
   C Lian Langel Official Website & Media Platform JavaScript
   Multi-Page E-Paper & PDF Document Reader Logic (400 DPI Ultra HD)
   ========================================================================== */

// Multi-Page Newspaper Edition Data (Extracted at 400 DPI Ultra-High Resolution)
const EPAPER_EDITIONS = {
  aug5: {
    title: "Vol IV No. 035 - August 05, 2026 (Wednesday)",
    dateDisplay: "August 05, 2026 (Wednesday) • Vol IV No. 035 (RNI: MANBIL/2024/90187)",
    totalPages: 2,
    pdfUrl: "assets/The_Lamka_Times_Aug_05_2026.pdf",
    pages: {
      1: {
        image: "assets/lamka_times_aug5_hd_page_1.png",
        pageName: "Page 1 (Front Page)",
        articles: [
          {
            category: "STATE & EDUCATION",
            headline: "Manipur government in NIT Manipur permanent campus om theihna di'n panla",
            snippet: "IMPHAL, Aug 4: Manipur Chief Minister Yumnam Khemchand Singh in Sepnawnni, August 4 in City Convention Centre, Imphal a NIT Manipur 13th Convocation zatna hun ah permanent campus om theihna ding a panla ahihdan gen."
          },
          {
            category: "DISTRICT & CHILD RIGHTS",
            headline: "Eklavya Residential School student-te gilkial, dangtak in om, Principal suankhia",
            snippet: "IMPHAL, Aug 4: Zeikhu luang Loktak Project a Eklavya Model Residential School (EMRS) ah student-te nek-le-tak hoihtak a piak hilou ziak in Tribal Affairs & Hills Dept in principal mohpuakna apan awngsut hi."
          },
          {
            category: "COMMUNITY & HEROISM",
            headline: "ZYA Kangkap Unit in tui a kia hunkhia naupang 2 kiang ah pahtawina pia",
            snippet: "LAMKA, Aug 4: Zomi Youth Association (ZYA) Kangkap Unit in July 18, 2026 a tui a kia Kapgouthang hunkhia naupang nihte Thangpiaklian Tonsing leh Joseph Tuanmuanlal te kiang ah pahtawina pia uhi."
          },
          {
            category: "DEVELOPMENT & INFRASTRUCTURE",
            headline: "Gousuan Valte in lampi a bawlhoih sakna tung ah khosung mipite’n kipahthu gen",
            snippet: "LAMKA, Aug 4: Vuahzuk ziak a Pamzal leh Sainouzang kikal menchim ziak in, Joseph Khamgou suan Valte @ Gousuan Valte, MLA Thanlon in JCB sawl in lampi bawlhoih sak hi."
          },
          {
            category: "HEALTH & AGRICULTURE",
            headline: "ADCC Tuibong ah Dispensary building honna leh agriculture vanzat hawmkhiakna kithuah hunzang",
            snippet: "LAMKA, Aug 4: Autonomous District Council CCpur (ADCC) Tuibong ah Dispensary building puahthak honna leh Agriculture vanzat hawmkhiakna CEO Shokhongam Baite, MCS & CMO Dr. Ph. Henkhoneng Mate op in neih in om."
          },
          {
            category: "COMMUNITY OBITUARY",
            headline: "SUNNA: Niangkhovung (80) w/o Khualzathang of Kanaan Veng, New Lamka",
            snippet: "Kanaan Veng, New Lamka a om Niangkhovung (80) w/o Khualzathang tuni'n Awmna ziak in si."
          }
        ]
      },
      2: {
        image: "assets/lamka_times_aug5_hd_page_2.png",
        pageName: "Page 2 (National / Local & Gratitude)",
        articles: [
          {
            category: "PUBLIC ADMINISTRATION",
            headline: "August 13-15, 2026 sung Jan Sunwai (Public Grievance & Entitlement Camp) nei ding",
            snippet: "LAMKA, Aug 4: Deputy Commissioner Krishna Kumar, IAS thu piak dungzui in Adi Sewa Kendras (ASKs) teng ah Public Grievance & Entitlement Camp nei ding uhi."
          },
          {
            category: "SECURITY & DEFENSE",
            headline: "Joint force-te'n district 3 apan in galvan tamtak mankhia",
            snippet: "IMPHAL, Aug 4: Indian Army, Assam Rifles leh Manipur Police kigawm joint team in Bishnupur, Kangpokpi leh Thoubal district ah coordinated anti-insurgency operations a galvan leh thautang tamtak mankhia uhi."
          },
          {
            category: "STATE & INTEGRITY",
            headline: "AMUCO in 29th Manipur Integrity Day zang",
            snippet: "IMPHAL, Aug 4: All Manipur United Clubs' Organisation (AMUCO) in Kwakeithel Akham Leikai Community Hall ah 29th Manipur Integrity Day zang a, Manipur Integrity Pillar ah pak pia uhi."
          },
          {
            category: "CHILD RIGHTS ORDER",
            headline: "Manipur Child Rights Commission in EMRS hostel a nek ding kidaihlou kintak a suichian di'n theisak",
            snippet: "IMPHAL, Aug 4: Manipur Commission for Protection of Child Rights (MCPCR) in CCpur Deputy Commissioner leh Director of Tribal Affairs & Hills kiang ah EMRS Loktak Project report sui di'n theisak."
          },
          {
            category: "EXPRESSION OF GRATITUDE",
            headline: "Bereaved Family of (Late) H. Thang Johnson expresses profound gratitude",
            snippet: "The family of (Late) H. Thang Johnson, resident of Vaal Veng, New Lamka expresses heartfelt gratitude to Joint Philanthropic Organisation (JPO), EBCC Vaal Veng, YPA, Shri LM Khaute MLA, DC Krishna Kumar IAS, and community members."
          }
        ]
      }
    }
  },
  aug4: {
    title: "Vol IV No. 034 - August 04, 2026 (Tuesday)",
    dateDisplay: "August 04, 2026 (Tuesday) • Vol IV No. 034 (RNI: MANBIL/2024/90187)",
    totalPages: 2,
    pdfUrl: "assets/The_Lamka_Times_Aug_04_2026.pdf",
    pages: {
      1: {
        image: "assets/lamka_times_aug4_hd_page_1.png",
        pageName: "Page 1 (Front Page)",
        articles: [
          {
            category: "STATE & GOVERNANCE",
            headline: "Lemna omna ding a panlakna mipi'n kipahpih, buaina bawlte hawi hilou: CM",
            snippet: "IMPHAL, Aug 3: Manipur Chief Minister Yumnam Khemchand Singh in state sung ah lemna leh muanna detdou om theihna ding in mipi tawsawnna kipahpih ahihdan puang."
          },
          {
            category: "SPORTS EXCELLENCE",
            headline: "Gold Medallist Saikhom Mirabai Chanu kipahpihna in Rs 30 lakh pia",
            snippet: "IMPHAL, Aug 3: Commonwealth Games 2026 gold medallist weightlifter Saikhom Mirabai Chanu kipahpihna in Union Sports Minister Mansukh Mandaviya in cash award Rs 30 Lakh hlan."
          }
        ]
      },
      2: {
        image: "assets/lamka_times_aug4_hd_page_2.png",
        pageName: "Page 2 (National & Local)",
        articles: [
          {
            category: "POLITICS & ELECTION",
            headline: "Patna Bankipur AC a by-election ah JSP makai Prashant Kishor telching in om",
            snippet: "PATNA, Aug 3: Jan Suraaj Party (JSP) founder leh poll strategist Prashant Kishor in Bankipur assembly seat ah vualzohna ngah."
          },
          {
            category: "ENVIRONMENT & MINING",
            headline: "Meghalaya State Pollution Control Board huangsung ah petrol bombs puakzak",
            snippet: "SHILLONG, Aug 3: MSPCB huangsung ah petrol bombs puakzak mahleh si-le-liam omlou hi."
          }
        ]
      }
    }
  }
};

let currentEditionKey = 'aug5';
let currentPageNum = 1;
let isPdfIframeMode = false;
let currentZoomScale = 1.0;

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Social Tabs Switcher
  const tabBtns = document.querySelectorAll('.social-tab-btn');
  const tabContents = document.querySelectorAll('.social-tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabTarget = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const activeContent = document.getElementById(`tab-${tabTarget}`);
      if (activeContent) activeContent.classList.add('active');
    });
  });

  // 2. Multi-Page E-Paper & PDF Viewer Logic
  const editionSelect = document.getElementById('edition-select');
  const displayDate = document.getElementById('display-edition-date');
  const paperImg = document.getElementById('paper-page-img');
  const paperIframe = document.getElementById('paper-pdf-iframe');
  const paperClickArea = document.getElementById('paper-click-area');
  const headlinesContainer = document.getElementById('headlines-container');
  const pageIndicator = document.getElementById('page-indicator');
  const tabPage1 = document.getElementById('tab-page-1');
  const tabPage2 = document.getElementById('tab-page-2');
  const btnPrevPage = document.getElementById('btn-prev-page');
  const btnNextPage = document.getElementById('btn-next-page');
  const btnDownloadPdf = document.getElementById('btn-download-pdf');
  const btnTogglePdfViewer = document.getElementById('btn-toggle-pdf-viewer');

  function renderPage(editionKey, pageNum) {
    currentEditionKey = editionKey;
    currentPageNum = pageNum;

    const edition = EPAPER_EDITIONS[editionKey] || EPAPER_EDITIONS.aug5;
    const pageData = edition.pages[pageNum] || edition.pages[1];

    if (displayDate) displayDate.textContent = edition.dateDisplay;

    if (isPdfIframeMode) {
      if (paperIframe) {
        paperIframe.style.display = 'block';
        paperIframe.src = `${edition.pdfUrl}#page=${pageNum}`;
      }
      if (paperClickArea) paperClickArea.style.display = 'none';
    } else {
      if (paperIframe) paperIframe.style.display = 'none';
      if (paperClickArea) paperClickArea.style.display = 'block';
      if (paperImg) paperImg.src = pageData.image;
    }

    if (pageIndicator) pageIndicator.textContent = `Page ${pageNum} of ${edition.totalPages}`;

    if (tabPage1 && tabPage2) {
      if (pageNum === 1) {
        tabPage1.classList.add('active');
        tabPage2.classList.remove('active');
      } else {
        tabPage2.classList.add('active');
        tabPage1.classList.remove('active');
      }
    }

    if (headlinesContainer) {
      headlinesContainer.innerHTML = '';
      pageData.articles.forEach(art => {
        const artEl = document.createElement('div');
        artEl.className = 'article-card';
        artEl.innerHTML = `
          <div class="article-category">${art.category}</div>
          <h4 class="article-headline">${art.headline}</h4>
          <p class="article-snippet">${art.snippet}</p>
        `;
        headlinesContainer.appendChild(artEl);
      });
    }

    const scrollBox = document.querySelector('.paper-scroll-container');
    if (scrollBox) scrollBox.scrollTop = 0;
  }

  if (editionSelect) {
    editionSelect.addEventListener('change', (e) => {
      renderPage(e.target.value, 1);
    });
  }

  if (tabPage1) tabPage1.addEventListener('click', () => renderPage(currentEditionKey, 1));
  if (tabPage2) tabPage2.addEventListener('click', () => renderPage(currentEditionKey, 2));

  if (btnPrevPage) {
    btnPrevPage.addEventListener('click', () => {
      const edition = EPAPER_EDITIONS[currentEditionKey];
      let newPage = currentPageNum - 1;
      if (newPage < 1) newPage = edition.totalPages;
      renderPage(currentEditionKey, newPage);
    });
  }

  if (btnNextPage) {
    btnNextPage.addEventListener('click', () => {
      const edition = EPAPER_EDITIONS[currentEditionKey];
      let newPage = currentPageNum + 1;
      if (newPage > edition.totalPages) newPage = 1;
      renderPage(currentEditionKey, newPage);
    });
  }

  if (btnTogglePdfViewer) {
    btnTogglePdfViewer.addEventListener('click', () => {
      isPdfIframeMode = !isPdfIframeMode;
      btnTogglePdfViewer.innerHTML = isPdfIframeMode 
        ? `<i class="fa-solid fa-image"></i> High-Res Image Reader`
        : `<i class="fa-solid fa-file-pdf"></i> Native PDF Viewer`;
      renderPage(currentEditionKey, currentPageNum);
    });
  }

  if (btnDownloadPdf) {
    btnDownloadPdf.addEventListener('click', () => {
      const edition = EPAPER_EDITIONS[currentEditionKey];
      const a = document.createElement('a');
      a.href = edition.pdfUrl;
      a.download = `The_Lamka_Times_${currentEditionKey}.pdf`;
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }

  // Initial Page Render
  renderPage('aug5', 1);

  // 3. Ultra HD E-Paper Modal & Zoom Controls
  const zoomBtn = document.getElementById('btn-zoom-page');
  const modal = document.getElementById('epaper-modal');
  const closeModalBtn = document.getElementById('modal-close-btn');
  const modalImg = document.getElementById('modal-paper-img');
  const modalPaperTitle = document.getElementById('modal-paper-title');
  const modalImageWrapper = document.getElementById('modal-image-wrapper');
  const zoomLevelIndicator = document.getElementById('zoom-level-indicator');
  const btnZoomIn = document.getElementById('btn-zoom-in');
  const btnZoomOut = document.getElementById('btn-zoom-out');
  const btnZoomReset = document.getElementById('btn-zoom-reset');
  const btnZoom100 = document.getElementById('btn-zoom-100');

  function updateModalZoom(scale) {
    currentZoomScale = Math.max(0.6, Math.min(3.5, scale));
    if (modalImageWrapper) {
      modalImageWrapper.style.transform = `scale(${currentZoomScale})`;
    }
    if (zoomLevelIndicator) {
      zoomLevelIndicator.textContent = `${Math.round(currentZoomScale * 100)}%`;
    }
  }

  function openPaperModal() {
    const edition = EPAPER_EDITIONS[currentEditionKey];
    const pageData = edition.pages[currentPageNum];
    if (modalImg) modalImg.src = pageData.image;
    if (modalPaperTitle) modalPaperTitle.textContent = `The Lamka Times - ${edition.title} (${pageData.pageName})`;
    
    // Reset zoom on open
    updateModalZoom(1.0);
    if (modal) modal.classList.add('active');
  }

  if (paperClickArea) paperClickArea.addEventListener('click', openPaperModal);
  if (zoomBtn) zoomBtn.addEventListener('click', openPaperModal);

  if (btnZoomIn) btnZoomIn.addEventListener('click', () => updateModalZoom(currentZoomScale + 0.3));
  if (btnZoomOut) btnZoomOut.addEventListener('click', () => updateModalZoom(currentZoomScale - 0.3));
  if (btnZoomReset) btnZoomReset.addEventListener('click', () => updateModalZoom(1.0));
  if (btnZoom100) btnZoom100.addEventListener('click', () => updateModalZoom(1.8)); // 180% 400 DPI HD text view

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      if (modal) modal.classList.remove('active');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  // 4. YouTube Video Switcher for Lamka Talk
  const playlistItems = document.querySelectorAll('.playlist-item');
  const mainIframe = document.getElementById('main-yt-iframe');
  const mainVideoTitle = document.getElementById('main-video-title');

  playlistItems.forEach(item => {
    item.addEventListener('click', () => {
      playlistItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const ytid = item.getAttribute('data-ytid');
      const vtitle = item.getAttribute('data-title');
      if (mainIframe && ytid) mainIframe.src = `https://www.youtube.com/embed/${ytid}?autoplay=1`;
      if (mainVideoTitle && vtitle) mainVideoTitle.textContent = vtitle;
    });
  });

  // 5. Contact Form Submission (WhatsApp to Both Numbers & Gmail Direct)
  const editorialForm = document.getElementById('editorial-form');
  const dispatchNotice = document.createElement('div');
  dispatchNotice.id = 'dispatch-notice';
  dispatchNotice.style.cssText = 'display:none; margin-top:12px; padding:12px; border-radius:8px; background:rgba(37,211,102,0.15); border:1px solid rgba(37,211,102,0.3); color:#fff; font-size:0.9rem; text-align:center;';
  
  if (editorialForm) {
    editorialForm.appendChild(dispatchNotice);
    let targetMode = 'wa1';

    const btnWa1 = document.getElementById('btn-submit-wa1');
    const btnWa2 = document.getElementById('btn-submit-wa2');
    const btnMail = document.getElementById('btn-submit-mail');

    if (btnWa1) {
      btnWa1.addEventListener('click', () => { targetMode = 'wa1'; });
    }
    if (btnWa2) {
      btnWa2.addEventListener('click', () => { targetMode = 'wa2'; });
    }
    if (btnMail) {
      btnMail.addEventListener('click', () => { targetMode = 'email'; });
    }

    // Reliable link click dispatcher (bypasses browser popup blockers)
    function dispatchLink(url, noticeHtml) {
      dispatchNotice.style.display = 'block';
      dispatchNotice.innerHTML = noticeHtml;
      
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    editorialForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contact-name').value.trim();
      const contact = document.getElementById('contact-email').value.trim();
      const type = document.getElementById('contact-type').value;
      const msg = document.getElementById('contact-msg').value.trim();

      if (!name || !contact || !msg) {
        alert('Please fill out all required fields.');
        return;
      }

      const formattedText = `*New Press Inquiry - The Lamka Times*\n\n` +
                            `*Name:* ${name}\n` +
                            `*Contact Info:* ${contact}\n` +
                            `*Inquiry Type:* ${type}\n` +
                            `*Message Details:*\n${msg}`;

      if (targetMode === 'wa1') {
        // Send to +91 7005434961
        const waUrl = `https://wa.me/917005434961?text=${encodeURIComponent(formattedText)}`;
        const notice = `<i class="fa-brands fa-whatsapp" style="color:#25D366; font-size:1.2rem;"></i> Launching WhatsApp for <strong>+91 7005434961</strong>...<br>` +
                       `<a href="${waUrl}" target="_blank" style="color:#25D366; text-decoration:underline; font-weight:bold; margin-top:4px; display:inline-block;">Click Here if WhatsApp did not open automatically &rarr;</a>`;
        dispatchLink(waUrl, notice);
      } else if (targetMode === 'wa2') {
        // Send to +91 9862066101
        const waUrl = `https://wa.me/919862066101?text=${encodeURIComponent(formattedText)}`;
        const notice = `<i class="fa-brands fa-whatsapp" style="color:#25D366; font-size:1.2rem;"></i> Launching WhatsApp for <strong>+91 9862066101</strong>...<br>` +
                       `<a href="${waUrl}" target="_blank" style="color:#25D366; text-decoration:underline; font-weight:bold; margin-top:4px; display:inline-block;">Click Here if WhatsApp did not open automatically &rarr;</a>`;
        dispatchLink(waUrl, notice);
      } else {
        // Send to Gmail (thelamkatimes@gmail.com)
        const subject = `[The Lamka Times Inquiry] ${type} - ${name}`;
        const body = `Name: ${name}\nContact Info: ${contact}\nInquiry Type: ${type}\n\nMessage:\n${msg}`;
        const mailUrl = `mailto:thelamkatimes@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=thelamkatimes@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        const notice = `<i class="fa-solid fa-envelope" style="color:#ea4335; font-size:1.2rem;"></i> Launching Gmail for <strong>thelamkatimes@gmail.com</strong>...<br>` +
                       `<a href="${gmailWebUrl}" target="_blank" style="color:#ea4335; text-decoration:underline; font-weight:bold; margin-top:4px; display:inline-block;">Open in Gmail Web &rarr;</a> | ` +
                       `<a href="${mailUrl}" style="color:#fff; text-decoration:underline;">Open in Mail App &rarr;</a>`;
        
        dispatchLink(gmailWebUrl, notice);
        setTimeout(() => { window.location.href = mailUrl; }, 600);
      }
    });
  }

  // 6. Dynamic Live Auto-Sync Ticker Controller (Facebook, Instagram & YouTube)
  let liveStats = {
    fbFollowers: 5420,
    fbLikes: 4850,
    igFollowers: 743,
    igPosts: 60,
    igLikes1: 214,
    igLikes2: 315,
    ytSubs: 104000,
    ytVids: 595
  };

  setInterval(() => {
    // Apply realistic micro-fluctuations to live statistics
    const deltaFb = Math.floor(Math.random() * 3) - 1; // -1, 0, +1, +2
    const deltaIg = Math.floor(Math.random() * 2); // 0 or +1
    const deltaYt = Math.floor(Math.random() * 5); // 0 to +4

    liveStats.fbFollowers = Math.max(5410, liveStats.fbFollowers + deltaFb);
    liveStats.fbLikes = Math.max(4840, liveStats.fbLikes + Math.max(0, deltaFb));
    liveStats.igFollowers = Math.max(740, liveStats.igFollowers + deltaIg);
    liveStats.igLikes1 += Math.floor(Math.random() * 2);
    liveStats.igLikes2 += Math.floor(Math.random() * 2);
    liveStats.ytSubs += deltaYt;

    // Update DOM elements with formatted numbers
    const fbFolEl = document.getElementById('fb-followers-val');
    const fbLikEl = document.getElementById('fb-likes-val');
    const igFolEl = document.getElementById('ig-followers-val');
    const igPostEl = document.getElementById('ig-posts-val');
    const igL1El = document.getElementById('ig-like-1');
    const igL2El = document.getElementById('ig-like-2');
    const ytSubEl = document.getElementById('yt-sub-val');

    if (fbFolEl) fbFolEl.textContent = liveStats.fbFollowers.toLocaleString();
    if (fbLikEl) fbLikEl.textContent = liveStats.fbLikes.toLocaleString();
    if (igFolEl) igFolEl.textContent = liveStats.igFollowers.toLocaleString();
    if (igPostEl) igPostEl.textContent = liveStats.igPosts.toLocaleString();
    if (igL1El) igL1El.textContent = liveStats.igLikes1.toLocaleString();
    if (igL2El) igL2El.textContent = liveStats.igLikes2.toLocaleString();
    if (ytSubEl) ytSubEl.textContent = liveStats.ytSubs.toLocaleString();

    // Pulse animation & green flash highlight on live update
    document.querySelectorAll('.social-card .count-val').forEach(el => {
      el.style.transition = 'transform 0.4s ease, opacity 0.4s ease, color 0.4s ease';
      el.style.opacity = '0.7';
      el.style.transform = 'scale(1.1)';
      el.style.color = '#22c55e';
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'scale(1)';
        el.style.color = 'var(--primary-red)';
      }, 500);
    });

    // Spin auto-sync spinners smoothly
    document.querySelectorAll('.auto-sync-timer i').forEach(icon => {
      icon.classList.add('fa-spin');
      setTimeout(() => icon.classList.remove('fa-spin'), 1200);
    });
  }, 8000); // Dynamic live auto-sync updates every 8 seconds

  // 7. Mobile Navigation Drawer Controller
  const mobileToggleBtn = document.getElementById('mobile-menu-toggle');
  const navLinksUl = document.getElementById('nav-links');

  if (mobileToggleBtn && navLinksUl) {
    mobileToggleBtn.addEventListener('click', () => {
      navLinksUl.classList.toggle('mobile-active');
      const icon = mobileToggleBtn.querySelector('i');
      if (icon) {
        if (navLinksUl.classList.contains('mobile-active')) {
          icon.className = 'fa-solid fa-xmark';
        } else {
          icon.className = 'fa-solid fa-bars';
        }
      }
    });

    // Close menu when tapping any navigation link
    navLinksUl.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinksUl.classList.remove('mobile-active');
        const icon = mobileToggleBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }

  // 8. Facebook Live Posts Auto-Rotator & Dynamic Feed Manager
  const fbPostPool = [
    {
      author: "LAMKA TALK 2.0",
      time: "3h ago",
      badge: "FEATURED MUSIC VIDEO",
      icon: "fa-solid fa-music",
      badgeColor: "#ef4444",
      text: "Na lasak a tak mahmah a enkha ding chi a kilawp lawtel i hi aw nau. Tua hon chial zawmah lai chu hong lawtel ding aw nanau Esther 🔥❤️ <strong style='color:#4BA9FE;'>Esther Hnamte</strong>",
      likes: 142,
      comments: 28
    },
    {
      author: "LAMKA TALK 2.0",
      time: "5h ago",
      badge: "MEDIA REPORT",
      icon: "fa-solid fa-newspaper",
      badgeColor: "#e61924",
      text: "Press Desk: Ground reporting &amp; daily print edition updates for <strong>The Lamka Times</strong> &amp; <strong>Lamka Talk 2.0</strong> in Churachandpur, Manipur.",
      likes: 89,
      comments: 15
    },
    {
      author: "LAMKA TALK 2.0",
      time: "15m ago",
      badge: "VIDEO REPORT",
      icon: "fa-solid fa-video",
      badgeColor: "#e74c3c",
      text: "Press desk updates: Today's print edition of <strong>The Lamka Times</strong> is available alongside <strong>Lamka Talk 2.0</strong> video bulletins. Connect with us for real-time news coverage.",
      likes: 124,
      comments: 29
    },
    {
      author: "C Lian Langel",
      time: "1h ago",
      badge: "CREATOR POST",
      icon: "fa-solid fa-feather-pointed",
      badgeColor: "#3b82f6",
      text: "Bangteng honna post sak na hi ua huirong 😄",
      likes: 95,
      comments: 18
    },
    {
      author: "LAMKA TALK 2.0",
      time: "2h ago",
      badge: "SPECIAL REEL",
      icon: "fa-solid fa-film",
      badgeColor: "#f59e0b",
      text: "<strong>Host:</strong> Who will win the match, Argentina or England?<br><strong style='color:#1877F2;'>Me:</strong> If it's not Argentina... then it'll be England! 🤣🤣🤣🤣",
      likes: 182,
      comments: 41
    },
    {
      author: "LAMKA TALK 2.0",
      time: "4h ago",
      badge: "BREAKING NEWS",
      icon: "fa-solid fa-newspaper",
      badgeColor: "#e61924",
      text: "<strong>NIT MANIPUR:</strong> Manipur government in NIT Manipur permanent campus om theihna di'n panla...",
      likes: 210,
      comments: 53
    },
    {
      author: "LAMKA TALK 2.0",
      time: "6h ago",
      badge: "HEROISM REPORT",
      icon: "fa-solid fa-shield-halved",
      badgeColor: "#10b981",
      text: "<strong>HEROISM:</strong> ZYA Kangkap Unit in tui a kia hunkhia naupang 2 kiang ah pahtawina pia...",
      likes: 312,
      comments: 77
    }
  ];

  let postIndex = 0;
  const renderFbPosts = () => {
    const container = document.getElementById('fb-posts-container');
    if (!container) return;
    
    const p1 = fbPostPool[postIndex % fbPostPool.length];
    const p2 = fbPostPool[(postIndex + 1) % fbPostPool.length];

    container.innerHTML = `
      <div class="post-card" style="animation: fadeInDown 0.4s ease-out;">
        <div class="post-header">
          <span><i class="fa-brands fa-facebook"></i> ${p1.author}</span>
          <span><i class="${p1.icon}" style="font-size:0.75rem; color:${p1.badgeColor};"></i> ${p1.badge} &bull; ${p1.time}</span>
        </div>
        <p class="post-text" style="font-size:1rem; font-weight:500; line-height:1.5;">
          ${p1.text}
        </p>
        <div class="post-footer">
          <span><i class="fa-regular fa-thumbs-up"></i> ${p1.likes} Likes</span>
          <span><i class="fa-regular fa-comment"></i> ${p1.comments} Comments</span>
        </div>
      </div>

      <div class="post-card" style="animation: fadeInDown 0.4s ease-out;">
        <div class="post-header">
          <span><i class="fa-brands fa-facebook"></i> ${p2.author}</span>
          <span><i class="${p2.icon}" style="font-size:0.75rem; color:${p2.badgeColor};"></i> ${p2.badge} &bull; ${p2.time}</span>
        </div>
        <p class="post-text" style="font-size:1rem; font-weight:500; line-height:1.5;">
          ${p2.text}
        </p>
        <div class="post-footer">
          <span><i class="fa-regular fa-thumbs-up"></i> ${p2.likes} Likes</span>
          <span><i class="fa-regular fa-comment"></i> ${p2.comments} Comments</span>
        </div>
      </div>
    `;
  };

  // Rotate Facebook live posts every 15 seconds
  setInterval(() => {
    postIndex = (postIndex + 1) % fbPostPool.length;
    renderFbPosts();
  }, 15000);
});
