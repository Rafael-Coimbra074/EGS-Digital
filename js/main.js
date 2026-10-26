/**
 * ==========================================================================
 * EGS DIGITAL — Portal Institucional de Produção (Interaction & Motion Engine)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  const escapeHTML = (str) =>
    String(str).replace(/[&<>"']/g, (ch) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[ch]));

  // --------------------------------------------------------------------------
  // 1. Toast Notification
  // --------------------------------------------------------------------------
  let toastTimer = null;
  function showToast(message) {
    const toast = $('#toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 3400);
  }

  // --------------------------------------------------------------------------
  // 2. Dual-Theme Management (Instantaneous Switch per rules.md)
  // --------------------------------------------------------------------------
  const themeToggle = $('#theme-toggle');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('egs_theme') || 'dark';
  root.setAttribute('data-theme', savedTheme);
  updateThemeUI(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const activeTheme = root.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';

      root.classList.add('theme-switching');
      root.setAttribute('data-theme', newTheme);
      try {
        localStorage.setItem('egs_theme', newTheme);
      } catch (_) {}
      updateThemeUI(newTheme);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          root.classList.remove('theme-switching');
        });
      });
    });
  }

  function updateThemeUI(theme) {
    if (!themeToggle) return;
    const isDark = theme === 'dark';
    const metaTheme = $('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', isDark ? '#000000' : '#FAFAFA');
    }
    themeToggle.setAttribute(
      'aria-label',
      isDark ? 'Ativar modo claro' : 'Ativar modo escuro'
    );
    themeToggle.innerHTML = isDark
      ? '<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>'
      : '<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>';
  }

  // --------------------------------------------------------------------------
  // 3. Interactive NOC Panel in Hero (6 Operational Modules)
  // --------------------------------------------------------------------------
  const nocModules = {
    m1: {
      title: 'Backup Imutável Off-site',
      sla: 'RETENÇÃO IMUTÁVEL · ISO 27001',
      desc: 'Gravação em sessão única isolada da rede primária, imune a exclusão ou criptografia por ransomware.'
    },
    m2: {
      title: 'Ambientes de Servidores & Cloud',
      sla: 'UPTIME 99.9% · ALTA DISPONIBILIDADE',
      desc: 'Orquestração de servidores físicos e nuvem híbrida com controle estrito de diretórios e permissões.'
    },
    m3: {
      title: 'Perímetro de Rede & Firewall',
      sla: 'MONITORAMENTO 24/7 · ZERO TRUST',
      desc: 'Segmentação de tráfego, VPN corporativa criptografada, switches gerenciáveis e proteção de borda.'
    },
    m4: {
      title: 'Suporte Gerenciado MSP & WideCloud',
      sla: 'SLA < 15 MIN · BELO HORIZONTE / MG',
      desc: 'Atendimento preventivo presencial e remoto, gestão de parque de hardware e telefonia PABX em nuvem.'
    }
  };

  const nocTabs = $$('.operation-row[role="tab"]');
  const nocTitle = $('#noc-detail-title');
  const nocSla = $('#noc-detail-sla');
  const nocDesc = $('#noc-detail-desc');
  const nocPanel = $('#noc-detail');

  function activateNocTab(tab, shouldFocus = false) {
    const key = tab.getAttribute('data-noc');
    const data = nocModules[key];
    if (!data) return;

    nocTabs.forEach((t) => {
      const active = t === tab;
      t.setAttribute('aria-selected', active ? 'true' : 'false');
      t.setAttribute('tabindex', active ? '0' : '-1');
    });

    if (nocTitle) nocTitle.textContent = data.title;
    if (nocSla) nocSla.textContent = data.sla;
    if (nocDesc) nocDesc.textContent = data.desc;
    if (nocPanel && tab.id) nocPanel.setAttribute('aria-labelledby', tab.id);
    if (shouldFocus) tab.focus();
  }

  nocTabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => activateNocTab(tab));
    tab.addEventListener('keydown', (e) => {
      let nextIdx = null;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        nextIdx = (idx + 1) % nocTabs.length;
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        nextIdx = (idx - 1 + nocTabs.length) % nocTabs.length;
      } else if (e.key === 'Home') {
        nextIdx = 0;
      } else if (e.key === 'End') {
        nextIdx = nocTabs.length - 1;
      }
      if (nextIdx !== null) {
        e.preventDefault();
        activateNocTab(nocTabs[nextIdx], true);
      }
    });
  });

  // --------------------------------------------------------------------------
  // 4. SpaceX Atmospheric Canvas (Subtle Particle & Network Drift)
  // --------------------------------------------------------------------------
  const canvas = $('#space-canvas');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let particles = [];
    const particleCount = 42;

    function resizeCanvas() {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    }

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.32;
        this.vy = (Math.random() - 0.5) * 0.32;
        this.radius = Math.random() * 1.4 + 0.8;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw(isDark) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.28)' : 'rgba(9, 9, 11, 0.18)';
        ctx.fill();
      }
    }

    function initParticles() {
      resizeCanvas();
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    window.addEventListener('resize', resizeCanvas, { passive: true });

    let isHeroVisible = true;
    let rafId = null;

    function renderCanvas() {
      if (!isHeroVisible) {
        rafId = null;
        return;
      }
      if (!document.hidden) {
        ctx.clearRect(0, 0, width, height);
        const isDark = root.getAttribute('data-theme') === 'dark';

        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw(isDark);

          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 130) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              const alpha = (1 - dist / 130) * (isDark ? 0.08 : 0.045);
              ctx.strokeStyle = isDark
                ? `rgba(255, 255, 255, ${alpha})`
                : `rgba(9, 9, 11, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
      }
      rafId = requestAnimationFrame(renderCanvas);
    }

    initParticles();
    rafId = requestAnimationFrame(renderCanvas);

    if ('IntersectionObserver' in window) {
      const heroSection = $('#inicio');
      if (heroSection) {
        const canvasObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            isHeroVisible = entry.isIntersecting;
            if (isHeroVisible && rafId === null) {
              rafId = requestAnimationFrame(renderCanvas);
            }
          });
        });
        canvasObserver.observe(heroSection);
      }
    }
  }

  // --------------------------------------------------------------------------
  // 5. Scroll Reveal Observer
  // --------------------------------------------------------------------------
  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -50px 0px', threshold: 0.1 }
    );
    reveals.forEach((el) => revealObserver.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  // --------------------------------------------------------------------------
  // 6. Animated Tabular Metric Counters
  // --------------------------------------------------------------------------
  const statNums = $$('.stat-num[data-target]');
  if (statNums.length > 0 && 'IntersectionObserver' in window && !prefersReducedMotion) {
    const statsObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseFloat(el.getAttribute('data-target'));
            const prefix = el.getAttribute('data-prefix') || '';
            const suffix = el.getAttribute('data-suffix') || '';
            const isDecimal = target % 1 !== 0;
            const duration = 1100;
            const startTime = performance.now();

            function step(now) {
              const progress = Math.min((now - startTime) / duration, 1);
              const ease = 1 - Math.pow(1 - progress, 3);
              const current = target * ease;
              el.textContent = `${prefix}${isDecimal ? current.toFixed(1) : Math.round(current)}${suffix}`;
              if (progress < 1) {
                requestAnimationFrame(step);
              }
            }
            requestAnimationFrame(step);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    statNums.forEach((el) => statsObserver.observe(el));
  }

  // --------------------------------------------------------------------------
  // 7. Card Spotlight Cursor Tracker (V7 Labs Craft)
  // --------------------------------------------------------------------------
  $$('.service-card').forEach((card) => {
    card.addEventListener(
      'mousemove',
      (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      },
      { passive: true }
    );
  });

  // --------------------------------------------------------------------------
  // 8. Interactive IT Demand Simulator
  // --------------------------------------------------------------------------
  let selectedSize = '5 a 20 computadores';
  const selectedServices = new Set(['Backup Imutável', 'Suporte MSP']);

  const sizeButtons = $$('.sim-btn[data-size]');
  const serviceButtons = $$('.sim-btn[data-service]');
  const resultTitle = $('#sim-plan-title');
  const resultDesc = $('#sim-plan-desc');
  const whatsappCta = $('#sim-whatsapp-btn');

  sizeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      sizeButtons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      selectedSize = btn.getAttribute('data-size');
      updateSimulator();
    });
  });

  serviceButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const serv = btn.getAttribute('data-service');
      if (selectedServices.has(serv)) {
        if (selectedServices.size > 1) {
          selectedServices.delete(serv);
          btn.classList.remove('active');
          btn.setAttribute('aria-pressed', 'false');
        } else {
          showToast('Mantenha ao menos uma demanda selecionada.');
        }
      } else {
        selectedServices.add(serv);
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      }
      updateSimulator();
    });
  });

  function updateSimulator() {
    if (!resultTitle || !resultDesc || !whatsappCta) return;

    let planName = 'Gestão Essencial de TI';
    let coverage = 'Atendimento proativo, manutenção preventiva e rotinas de segurança.';

    if (selectedSize.includes('50') || selectedServices.size >= 4) {
      planName = 'Gestão Crítica & Alta Disponibilidade';
      coverage = 'Ambiente corporativo de missão crítica com resposta em SLA prioritário e redundância completa.';
    } else if (selectedSize.includes('20 a 50') || selectedServices.has('Servidores Cloud')) {
      planName = 'Gestão Corporativa Avançada';
      coverage = 'Administração contínua de servidores híbridos, proteção de dados e monitoramento de conectividade.';
    }

    const servicesList = Array.from(selectedServices).join(', ');
    resultTitle.textContent = planName;
    resultDesc.textContent = `${coverage} Escopo dimensionado para ${selectedSize}: ${servicesList}.`;

    const message = encodeURIComponent(
      `Olá! Fiz o diagnóstico no portal da EGS Digital para minha operação (${selectedSize}) com interesse em: ${servicesList}. Gostaria de agendar uma avaliação técnica.`
    );
    whatsappCta.href = `https://wa.me/553130373451?text=${message}`;
  }

  updateSimulator();

  // --------------------------------------------------------------------------
  // 9. Production Contact Form (WhatsApp + E-mail Dispatch)
  // --------------------------------------------------------------------------
  const contactForm = $('#lead-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = ($('#form-name')?.value || '').trim();
      const company = ($('#form-company')?.value || '').trim();
      const email = ($('#form-email')?.value || '').trim();
      const phone = ($('#form-phone')?.value || '').trim();
      const demand = ($('#form-message')?.value || '').trim() || 'Avaliação geral de infraestrutura de TI';

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Processando solicitação...';
      }

      const whatsappText = encodeURIComponent(
        `Olá, equipe EGS Digital!\n\nSolicito uma avaliação técnica:\n• Nome: ${name}\n• Empresa: ${company}\n• E-mail: ${email}\n• Telefone: ${phone}\n• Cenário: ${demand}`
      );
      const mailSubject = encodeURIComponent(`Avaliação Técnica de TI — ${company}`);
      const mailBody = encodeURIComponent(
        `Nome: ${name}\nEmpresa: ${company}\nE-mail: ${email}\nTelefone: ${phone}\n\nDemanda:\n${demand}`
      );

      setTimeout(() => {
        showToast('Solicitação pronta para envio imediato.');
        contactForm.innerHTML = `
          <div class="form-success-state">
            <h3>Diagnóstico Estruturado</h3>
            <p>
              Obrigado, <strong>${escapeHTML(name)}</strong> (<strong>${escapeHTML(company)}</strong>). Escolha abaixo o canal de sua preferência para concluir o envio imediato à equipe técnica em Belo Horizonte:
            </p>
            <div class="form-success-actions">
              <a href="https://wa.me/553130373451?text=${whatsappText}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Enviar Agora via WhatsApp Oficial ↗
              </a>
              <a href="mailto:contato@egsdigital.com.br?subject=${mailSubject}&body=${mailBody}" class="btn btn-secondary">
                Enviar por E-mail Corporativo
              </a>
            </div>
          </div>
        `;
      }, 350);
    });
  }

  // --------------------------------------------------------------------------
  // 10. Accessible Mobile Menu Navigation
  // --------------------------------------------------------------------------
  const mobileToggle = $('#mobile-toggle');
  const navMenu = $('#nav-menu');

  function closeMobileMenu() {
    if (!navMenu || !mobileToggle) return;
    navMenu.classList.remove('is-open');
    mobileToggle.setAttribute('aria-expanded', 'false');
  }

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    $$('.nav-link', navMenu).forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        closeMobileMenu();
        mobileToggle.focus();
      }
    });
  }
});
