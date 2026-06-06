/* ============================================================
   作品集交互 — 侘寂美学 — 完全响应式
   ============================================================ */

// ==================== 数据 ====================
const data = {
  aigc: [
    { title:'AIGC 海报 1',desc:'AI 辅助生成的创意广告海报',file:'AIGC海报1.webp' },
    { title:'AIGC 海报 2',desc:'AI 辅助生成的创意广告海报',file:'AIGC海报2.webp' },
    { title:'AIGC 海报 3',desc:'AI 辅助生成的创意广告海报',file:'AIGC海报3.webp' },
    { title:'AIGC 海报 4',desc:'AI 辅助生成的创意广告海报',file:'AIGC海报4.webp' },
    { title:'AIGC 海报 5',desc:'AI 辅助生成的创意广告海报',file:'AIGC海报5.webp' },
    { title:'AIGC 海报 6',desc:'AI 辅助生成的创意广告海报',file:'AIGC海报6.webp' },
    { title:'AIGC 海报 7',desc:'AI 辅助生成的创意广告海报',file:'AIGC海报7.webp' },
    { title:'AIGC 海报 8',desc:'AI 辅助生成的创意广告海报',file:'AIGC海报8.webp' },
    { title:'AIGC 海报 9',desc:'AI 辅助生成的创意广告海报',file:'AIGC海报9.webp' }
  ],
  posters: [
    { title:'海报设计 1',desc:'创意海报设计作品',file:'海报1.webp' },
    { title:'海报设计 2',desc:'创意海报设计作品',file:'海报2.webp' },
    { title:'海报设计 3',desc:'创意海报设计作品',file:'海报3.webp' },
    { title:'海报设计 4',desc:'创意海报设计作品',file:'海报4.webp' },
    { title:'海报设计 5',desc:'创意海报设计作品',file:'海报5.webp' },
    { title:'海报设计 6',desc:'创意海报设计作品',file:'海报6.webp' },
    { title:'海报设计 7',desc:'创意海报设计作品',file:'海报7.webp' },
    { title:'海报设计 8',desc:'创意海报设计作品',file:'海报8.webp' },
    { title:'海报设计 9',desc:'创意海报设计作品',file:'海报9.webp' },
    { title:'海报设计 10',desc:'创意海报设计作品',file:'海报10.webp' },
    { title:'海报设计 11',desc:'创意海报设计作品',file:'海报11.webp' },
    { title:'海报设计 12',desc:'创意海报设计作品',file:'海报12.webp' }
  ],
  web: [
    { title:'MSTI — 胃格测试',desc:'三九胃泰品牌创意测试页，蓝绿渐变风格，趣味问答互动。',file:'sanjiuweitai.html',tags:['Brand','Quiz','Interactive'],preview:'MSTI',color:'blue',cover:'assets/images/msti-cover.svg' },
    { title:'她 — 一份女性主义手稿',desc:'以波伏娃思想为灵感的交互式长页面，探讨性别建构与重塑，黑暗美学风格，文字与视觉交织的沉浸式阅读体验。',file:'nvxingzhuyi.html',tags:['Essay','Feminist','Interactive'],preview:'她',color:'violet',cover:'assets/images/nvxingzhuyi-cover.svg' }
  ],
  video: [
    { title:'AIGC 广告歌',desc:'AI 辅助创作的广告歌曲视频，探索 AI 在音乐与广告创意中的应用。',file:'AIGC广告歌.mp4',tags:['AI','广告','音乐'],cover:'AI 广告歌',bg:'#2a1a3a' },
    { title:'AIGC 视频 1',desc:'AI 辅助生成的创意视频，结合 AI 素材与后期剪辑。',file:'AIGC视频1.mp4',tags:['AI Video','创意','短片'],cover:'AIGC 视频',bg:'#1a2a3a' },
    { title:'南澳妈祖',desc:'潮汕文化主题视频，地方传统文化与现代影像技术的结合。',file:'南澳妈祖.mp4',tags:['文化','纪实','视频'],cover:'南澳妈祖',bg:'#1a2a2a' }
  ],
  copy: [
    { title:'广告文案 — 榄菊',name:'榄菊',type:'文案',desc:'榄菊品牌广告文案策划，品牌定位与核心卖点提炼。',
      file:'assets/documents/广告文案-榄菊.pdf' },
    { title:'广告文案 — 江中健胃消食片',name:'江中健胃消食片',type:'文案',desc:'江中健胃消食片广告文案，聚焦功能与消费者痛点。',
      file:'assets/documents/广告文案-江中健胃消食片.pdf' },
    { title:'视频脚本 — 一阵风的植愈之旅',name:'一阵风的植愈之旅',type:'脚本',desc:'以风的视角展开植物治愈之旅的视频创意脚本。',
      file:'assets/documents/视频脚本-一阵风的植愈之旅.pdf' },
    { title:'策划案 — 娃哈哈',name:'娃哈哈',type:'策划案',desc:'娃哈哈品牌策划案，市场分析与品牌策略。',
      file:'assets/documents/策划案-娃哈哈策划案.pdf' }
  ]
};

// ==================== DOM 快捷方式 ====================
const $ = s => document.querySelector(s);

// ==================== 渲染 ====================
function renderPhotoGrid(id, items, base) {
  const grid = $(id);
  if (!grid) return;
  grid.innerHTML = items.map((w,i) => `
    <article class="photo-card reveal d${(i%3)+1}">
      <button type="button" data-pimg="${base}${w.file}" data-ptitle="${w.title}" data-pdesc="${w.desc}">
        <img src="${base}${w.file}" alt="${w.title}" loading="lazy" width="400" height="300">
        <div class="card-copy"><h3>${w.title}</h3><p>${w.desc}</p></div>
      </button>
    </article>`).join('');
  // 新渲染的卡片需要注册滚动观察
  observeNewReveals();
  // 重新绑定磁吸
  if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) bindMagneticAll();
}

function renderProjectGrid(id, items, opts) {
  const grid = $(id);
  if (!grid) return;
  const {isVideo,base} = opts;
  grid.innerHTML = items.map(w => `
    <article class="project-card reveal">
      ${isVideo?`
      <div class="video-cover"
           data-vsrc="${base}${w.file}"
           data-vtitle="${w.title}"
           data-vdesc="${w.desc}"
           style="background:linear-gradient(160deg,${w.bg||'#1a1a2e'} 0%,#0d0d14 100%);">
        <div class="video-cover-inner">
          <span class="video-cover-title">${w.cover||w.title}</span>
          <span class="video-cover-tag">MOVIE</span>
        </div>
        <div class="video-cover-play"></div>
      </div>
      `:`
      <a class="project-preview browser-preview${w.cover?' has-cover':''}"
         href="${base}${w.file}" target="_blank" rel="noreferrer"
         data-preview="${w.preview||w.title}">
        ${w.cover
          ? `<img src="${w.cover}" alt="${w.title}" loading="lazy" class="cover-img"><div class="cover-overlay"><span>预览页面 →</span></div>`
          : `<div class="browser-preview-bar"><span></span><span></span><span></span><em>${w.file}</em></div>`
        }
      </a>
      `}
      <div class="project-body">
        <h3>${w.title}</h3><p>${w.desc}</p>
        ${w.tags?`<div class="tag-row">${w.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>`:''}
        <a class="demo-link magnetic" href="${base}${w.file}" target="_blank" rel="noreferrer">${isVideo?'播放视频':'打开页面'} →</a>
      </div>
    </article>`).join('');
  observeNewReveals();
  if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) bindMagneticAll();
}

// 为新渲染的 .reveal 和 .sumi 元素注册 IntersectionObserver
let revealObserver = null;
function observeNewReveals() {
  if (!revealObserver) return;
  document.querySelectorAll('.reveal:not(.reveal-observed), .sumi:not(.sumi-observed), .thin-rule:not(.tr-observed)').forEach(el => {
    el.classList.add(el.classList.contains('reveal')?'reveal-observed':el.classList.contains('sumi')?'sumi-observed':'tr-observed');
    revealObserver.observe(el);
  });
}

/** 渲染文案卡片 — 点击通过 iframe 展示 PDF */
function renderCopyCards() {
  const grid = $('#copyGrid');
  if (!grid) return;
  grid.innerHTML = data.copy.map((item, i) => {
    return `
    <article class="project-card reveal copy-card"
             data-copy="${i}">
      <div class="project-preview browser-preview copy-btn"
           style="display:flex;align-items:center;justify-content:center;width:100%;">
        <span class="copy-type-char">${item.type}</span>
      </div>
      <div class="project-body">
        <h3>${item.name}</h3><p>${item.desc}</p>
        <span class="demo-link">点击预览 →</span>
      </div>
    </article>`;
  }).join('');
  observeNewReveals();
}

/** 文案 PDF 预览 — iframe 内嵌显示，无外部依赖 */
function bindCopyPreview() {
  const dlg = $('#copyDialog');
  if (!dlg) return;
  const iframe = $('#copyIframe');
  const ttl = $('#copyDialogTitle');
  const dsc = $('#copyDialogDesc');

  document.body.addEventListener('click', e => {
    const card = e.target.closest('[data-copy]');
    if (!card) return;
    e.preventDefault();
    const idx = parseInt(card.dataset.copy, 10);
    const item = data.copy[idx];
    if (!item) return;
    if (ttl) ttl.textContent = item.title || '';
    if (dsc) dsc.textContent = item.desc || '';
    if (iframe) {
      const pdfPath = encodeURI(item.file || '') + '#toolbar=0&navpanes=0';
      iframe.src = pdfPath;
      iframe.onerror = function() {
        console.error('PDF 加载失败，文件路径:', pdfPath);
      };
    }
    if (typeof dlg.showModal === 'function') dlg.showModal();
  });

  const closeDlg = () => {
    dlg.close();
    if (iframe) iframe.src = '';
  };

  const cb = dlg.querySelector('.dialog-close');
  if (cb) cb.addEventListener('click', closeDlg);
  dlg.addEventListener('click', e => { if (e.target === dlg) closeDlg(); });
}

// ==================== 图片预览 ====================
function bindPreview() {
  const dlg = $('#previewDialog'), img = $('#previewImage'), ttl = $('#previewTitle'), dsc = $('#previewDesc');
  if (!dlg) return;
  document.body.addEventListener('click', e => {
    const btn = e.target.closest('[data-pimg]');
    if (!btn) return;
    img.src = btn.dataset.pimg; ttl.textContent = btn.dataset.ptitle; dsc.textContent = btn.dataset.pdesc;
    if (typeof dlg.showModal === 'function') dlg.showModal();
  });
  const cb = dlg.querySelector('.dialog-close');
  if (cb) cb.addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
}

// ==================== 视频预览 ====================
function bindVideo() {
  const dlg = $('#videoDialog'), plr = $('#videoPlayer'), ttl = $('#videoDialogTitle'), dsc = $('#videoDialogDesc');
  if (!dlg||!plr) return;
  document.body.addEventListener('click', e => {
    const thumb = e.target.closest('[data-vsrc]');
    if (!thumb) return;
    plr.src = thumb.dataset.vsrc; ttl.textContent = thumb.dataset.vtitle||''; dsc.textContent = thumb.dataset.vdesc||'';
    if (typeof dlg.showModal === 'function') { dlg.showModal(); plr.play().catch(()=>{}); }
  });
  const cb = dlg.querySelector('.dialog-close');
  if (cb) cb.addEventListener('click', () => { dlg.close(); plr.pause(); });
  dlg.addEventListener('click', e => { if (e.target===dlg) { dlg.close(); plr.pause(); } });
}
window.addEventListener('keydown', e => {
  if (e.key==='Escape') {
    const pd=$('#previewDialog'),vd=$('#videoDialog'),vp=$('#videoPlayer');
    const cd=$('#copyDialog');
    if (pd&&pd.open) pd.close();
    if (vd&&vd.open) { vd.close(); if(vp)vp.pause(); }
    if (cd&&cd.open) cd.close();
  }
});

// ==================== 滚动渐显 ====================
function initReveal() {
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); revealObserver.unobserve(en.target); }
    });
  }, { threshold: .08, rootMargin: '0px 0px -20px 0px' });
  document.querySelectorAll('.sumi,.reveal,.thin-rule').forEach(el => revealObserver.observe(el));
}

// ==================== 金色圆环光标 (桌面 + 移动) ====================
function initCursor() {
  const cur = $('#cur');
  if (!cur) return;

  const isDesktop = window.matchMedia('(hover:hover) and (pointer:fine)').matches;

  if (isDesktop) {
    // 桌面：平滑跟随
    let mx = 0, my = 0, cx = 0, cy = 0;
    document.addEventListener('mousemove', e => {
      document.body.classList.add('cur-ready');
      mx = e.clientX; my = e.clientY;
    });
    function anim() {
      cx += (mx - cx) * 0.28;
      cy += (my - cy) * 0.28;
      cur.style.left = cx + 'px';
      cur.style.top = cy + 'px';
      requestAnimationFrame(anim);
    }
    requestAnimationFrame(anim);

    const hoverSel = 'a,button,.tag,.stat-cell,.pillar,.photo-card button,.hamburger,.copy-card';
    document.addEventListener('mouseover', e => {
      const target = e.target.closest(hoverSel);
      if (target) document.body.classList.add('on-el');
    });
    document.addEventListener('mouseout', e => {
      const target = e.target.closest(hoverSel);
      if (target && !target.contains(e.relatedTarget)) {
        document.body.classList.remove('on-el');
      }
    });
  }

  // 移动端：触摸涟漪
  if (!isDesktop) {
    document.addEventListener('touchstart', e => {
      const touch = e.touches[0];
      if (!touch) return;
      const ripple = document.createElement('div');
      ripple.className = 'touch-ripple';
      ripple.style.left = touch.clientX + 'px';
      ripple.style.top = touch.clientY + 'px';
      document.body.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    }, { passive: true });
  }
}

// ==================== 磁吸 (仅桌面) ====================
function bindMagneticAll() {
  if (!window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  document.querySelectorAll('.magnetic').forEach(el => {
    if (el.dataset.magBound) return;
    el.dataset.magBound='1';
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.18}px)`;
      el.style.transition = 'transform .1s ease-out';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform='translate(0,0)';
      el.style.transition = 'transform .8s cubic-bezier(.23,1,.32,1)';
    });
  });
}

// ==================== 计数器 ====================
function initCounters() {
  const ease=t=>1-Math.pow(1-t,3);
  document.querySelectorAll('[data-count]').forEach(el => {
    new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting||el.dataset.done) return;
      el.dataset.done='1';
      const target = parseInt(el.dataset.count,10), dur = target>100?2400:1600;
      let start;
      function step(ts) {
        if (!start) start=ts;
        const p = Math.min((ts-start)/dur,1);
        el.textContent = Math.floor(ease(p)*target);
        if (p<1) requestAnimationFrame(step); else el.textContent=target;
      }
      requestAnimationFrame(step);
    },{threshold:.5}).observe(el);
  });
}

// ==================== 滚动效果 ====================
function initScroll() {
  const pg = $('#pg'), nav = $('.site-nav');
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (pg) pg.style.width = total>0?(window.scrollY/total)*100+'%':'0%';
    if (nav) nav.classList.toggle('scrolled', window.scrollY>16);
    document.querySelectorAll('.ink-deco').forEach(el => el.style.transform=`translateY(${window.scrollY*.06}px)`);
  },{passive:true});
}

// ==================== 汉堡菜单 (<=639px 手机) ====================
function initHamburger() {
  const btn = $('#hamburger'), menu = $('#navMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.classList.toggle('open');
    btn.setAttribute('aria-expanded', open?'true':'false');
  });

  // 点击菜单项后关闭
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
    });
  });

  // 点击页面其他区域关闭
  document.addEventListener('click', e => {
    if (!menu.classList.contains('open')) return;
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
    }
  });
}

// ==================== 平滑滚动 ====================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const t = document.querySelector(this.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior:'smooth', block:'start' }); }
    });
  });
}

// ==================== 版权保护 ====================
function initProtection() {
  const isContact = el => el && el.closest('#contact');

  // 右键菜单 — 仅联系方式区域放行
  document.addEventListener('contextmenu', e => {
    if (!isContact(e.target)) { e.preventDefault(); return false; }
  });

  // 文本选择 — 仅联系方式区域放行
  document.addEventListener('selectstart', e => {
    if (!isContact(e.target)) { e.preventDefault(); return false; }
  });

  // 拖拽 — 仅联系方式区域放行
  document.addEventListener('dragstart', e => {
    if (!isContact(e.target)) { e.preventDefault(); return false; }
  });

  // 复制/剪切 — 仅联系方式区域放行
  document.addEventListener('copy', e => {
    if (!isContact(e.target)) { e.preventDefault(); e.clipboardData.setData('text/plain', ''); return false; }
  });
  document.addEventListener('cut', e => {
    if (!isContact(e.target)) { e.preventDefault(); return false; }
  });

  // 键盘快捷键拦截
  document.addEventListener('keydown', e => {
    // 如果焦点在 input/textarea 内，全部放行
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement.isContentEditable) return;
    // 如果在联系方式区域，只放行 Ctrl+C
    if (isContact(document.activeElement) || isContact(e.target)) {
      if (e.ctrlKey && e.key === 'c') return;
    }
    // 拦截: Ctrl+S (保存), Ctrl+P (打印), Ctrl+U (查看源码)
    if (e.ctrlKey && (e.key === 's' || e.key === 'p' || e.key === 'u')) {
      e.preventDefault(); return false;
    }
    // 拦截: Ctrl+Shift+I / F12 (开发者工具)
    if ((e.ctrlKey && e.shiftKey && e.key === 'i') || e.key === 'F12') {
      e.preventDefault(); return false;
    }
  });
}

// ==================== 启动 ====================
function init() {
  renderPhotoGrid('#aigcGrid', data.aigc, 'assets/images/aigc-posters/');
  renderPhotoGrid('#posterGrid', data.posters, 'assets/images/posters/');
  renderProjectGrid('#webGrid', data.web, {base:'assets/pages/'});
  renderProjectGrid('#videoGrid', data.video, {isVideo:true, base:'assets/videos/'});
  renderCopyCards();
  bindPreview(); bindVideo(); bindCopyPreview();
  initReveal(); initCursor(); initCounters(); initScroll();
  bindMagneticAll();
  initProtection();
  initHamburger(); initSmoothScroll();
}
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init):init();
