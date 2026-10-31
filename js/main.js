/**
 * ==========================================================================
 * EGS DIGITAL 2.0 — Portal Institucional de Produção (Interaction & Motion Engine)
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
      metaTheme.setAttribute('content', isDark ? '#000000' : '#F3F4F6');
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
  // 3. Interactive NOC Panel in Hero (Smooth Transition + Clear Language)
  // --------------------------------------------------------------------------
  const nocModules = {
    m1: {
      title: 'Backup Contra Vírus e Sequestro',
      sla: 'CÓPIA EXTERNA BLINDADA',
      desc: 'Seus arquivos e bancos de dados são salvos automaticamente fora da empresa com trava de segurança: nenhum vírus ou erro humano consegue apagar.',
      metrics: ['A cada 15 min', 'Trava Anti-Exclusão', 'Teste Mensal'],
      vizStatus: '100% PROTEGIDO',
      waveLine: 'M0,28 C40,26 80,14 120,18 C160,22 200,10 240,14 C280,18 320,8 360,12',
      waveArea: 'M0,28 C40,26 80,14 120,18 C160,22 200,10 240,14 C280,18 320,8 360,12 L360,44 L0,44 Z'
    },
    m2: {
      title: 'Servidores Locais e em Nuvem',
      sla: 'SISTEMAS 99.9% NO AR',
      desc: 'Cuidamos dos servidores onde rodam o sistema de gestão (ERP), financeiro e pastas da empresa para que sua equipe trabalhe sem lentidão.',
      metrics: ['Vigilância 24h', 'Acesso por Setor', 'Sem Paradas'],
      vizStatus: '99.9% ESTÁVEL',
      waveLine: 'M0,16 C45,14 90,18 135,12 C180,8 225,15 270,10 C315,12 340,9 360,8',
      waveArea: 'M0,16 C45,14 90,18 135,12 C180,8 225,15 270,10 C315,12 340,9 360,8 L360,44 L0,44 Z'
    },
    m3: {
      title: 'Internet Segura, Wi-Fi e Firewall',
      sla: 'REDE PROTEGIDA 24H',
      desc: 'Troca automática para a 2ª internet se a principal cair, Wi-Fi corporativo forte, bloqueio contra invasões e acesso seguro para home-office.',
      metrics: ['2 Internets Ativas', 'Home-Office Seguro', 'Rede Blindada'],
      vizStatus: '0 QUEDAS',
      waveLine: 'M0,30 C50,18 95,28 140,10 C185,24 230,12 275,20 C315,8 340,14 360,10',
      waveArea: 'M0,30 C50,18 95,28 140,10 C185,24 230,12 275,20 C315,8 340,14 360,10 L360,44 L0,44 Z'
    },
    m4: {
      title: 'Suporte Técnico e Telefonia',
      sla: 'ATENDIMENTO EM ATÉ 15 MIN',
      desc: 'Suporte rápido remoto e presencial em BH para os computadores da equipe, aluguel de máquinas e telefone fixo digital na nuvem.',
      metrics: ['Até 15 minutos', 'Remoto e Presencial', 'Relatório Mensal'],
      vizStatus: 'RESPOSTA < 15M',
      waveLine: 'M0,22 C40,20 85,12 130,16 C175,10 220,18 265,11 C310,15 335,7 360,9',
      waveArea: 'M0,22 C40,20 85,12 130,16 C175,10 220,18 265,11 C310,15 335,7 360,9 L360,44 L0,44 Z'
    }
  };

  const nocTabs = $$('.operation-row[role="tab"]');
  const nocTitle = $('#noc-detail-title');
  const nocSla = $('#noc-detail-sla');
  const nocDesc = $('#noc-detail-desc');
  const nocMetric1 = $('#noc-metric-1');
  const nocMetric2 = $('#noc-metric-2');
  const nocMetric3 = $('#noc-metric-3');
  const nocVizStatus = $('#noc-viz-status');
  const nocWaveLine = $('#noc-wave-line');
  const nocWaveArea = $('#noc-wave-area');
  const nocPanel = $('#noc-detail');
  let nocSwitchTimer = null;

  function activateNocTab(tab, shouldFocus = false) {
    const key = tab.getAttribute('data-noc');
    const data = nocModules[key];
    if (!data) return;

    nocTabs.forEach((t) => {
      const active = t === tab;
      t.setAttribute('aria-selected', active ? 'true' : 'false');
      t.setAttribute('tabindex', active ? '0' : '-1');
    });

    if (nocPanel) {
      nocPanel.classList.add('is-switching');
      clearTimeout(nocSwitchTimer);
      nocSwitchTimer = setTimeout(() => {
        if (nocTitle) nocTitle.textContent = data.title;
        if (nocSla) nocSla.textContent = data.sla;
        if (nocDesc) nocDesc.textContent = data.desc;
        if (nocMetric1 && data.metrics[0]) nocMetric1.textContent = data.metrics[0];
        if (nocMetric2 && data.metrics[1]) nocMetric2.textContent = data.metrics[1];
        if (nocMetric3 && data.metrics[2]) nocMetric3.textContent = data.metrics[2];
        if (nocVizStatus && data.vizStatus) nocVizStatus.textContent = data.vizStatus;
        if (nocWaveLine && data.waveLine) nocWaveLine.setAttribute('d', data.waveLine);
        if (nocWaveArea && data.waveArea) nocWaveArea.setAttribute('d', data.waveArea);
        if (tab.id) nocPanel.setAttribute('aria-labelledby', tab.id);
        nocPanel.classList.remove('is-switching');
      }, 110);
    }

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
  // 4. Animated Technical Specification Modal (Deep-Dive for 6 Solutions)
  // --------------------------------------------------------------------------
  const serviceSpecs = {
    msp: {
      code: 'DETALHES DO SERVIÇO · EGS-MSP-01',
      title: 'Suporte de TI Completo (HelpDesk)',
      summary: 'Cuidado completo dos computadores e da rede da sua empresa para que sua equipe trabalhe sem interrupções ou lentidão.',
      sla: 'Até 15 minutos',
      model: 'Mensalidade Fixa',
      stack: 'Atendimento Remoto + Presencial BH',
      deliverables: [
        'Atendimento rápido remoto e visitas presenciais programadas ou de urgência em BH e Região Metropolitana.',
        'Monitoramento 24h dos computadores e servidores para corrigir falhas de disco ou memória antes que travem.',
        'Atualização automática do Windows, antivírus empresarial gerenciado e controle de todos os equipamentos.',
        'Configuração rápida para novos funcionários (criação e bloqueio seguro de senhas, e-mails e acesso às pastas).',
        'Relatório mensal simples mostrando tudo o que foi resolvido e melhorado na empresa.'
      ]
    },
    cloud: {
      code: 'DETALHES DO SERVIÇO · EGS-CLD-02',
      title: 'Servidores Locais e em Nuvem',
      summary: 'Instalação, organização e cuidado diário dos servidores onde ficam o sistema de gestão (ERP), banco de dados e arquivos da empresa.',
      sla: '99.9% de Estabilidade',
      model: 'Projeto + Cuidado Mensal',
      stack: 'Windows · Linux · Nuvem Microsoft/AWS',
      deliverables: [
        'Organização de acessos por setor: cada funcionário vê apenas as pastas do seu próprio departamento.',
        'Configuração de servidores rápidos e seguros, seja dentro da empresa ou na nuvem.',
        'Atualização ou mudança de servidores e sistemas ERP feita fora do horário comercial, sem parar a empresa.',
        'Configuração e suporte completo para e-mails corporativos e pacote Microsoft 365.',
        'Blindagem de segurança no servidor para bloquear invasões externas.'
      ]
    },
    backup: {
      code: 'DETALHES DO SERVIÇO · EGS-BKP-03',
      title: 'Backup Blindado Contra Sequestro de Dados',
      summary: 'Suas cópias de segurança guardadas fora da empresa com trava especial: mesmo que um vírus ataque a rede local, seus dados continuam intactos.',
      sla: 'Cópias a cada 15 min',
      model: 'Mensalidade por Volume',
      stack: 'Cofre em Nuvem com Trava Anti-Exclusão',
      deliverables: [
        'Trava Contra Exclusão: depois que o arquivo é salvo na nuvem, nem um vírus nem ninguém consegue apagar.',
        'Cópia guardada fora da empresa: se houver incêndio, roubo ou pane no servidor local, nada é perdido.',
        'Proteção total com senha criptografada, atendendo às exigências da Lei Geral de Proteção de Dados (LGPD).',
        'Acompanhamento diário pela equipe EGS para garantir que o backup rodou sem falhas todos os dias.',
        'Testes mensais de recuperação para ter certeza de que os arquivos abrem perfeitamente quando precisar.'
      ]
    },
    redes: {
      code: 'DETALHES DO SERVIÇO · EGS-NET-04',
      title: 'Redes, Wi-Fi Corporativo Forte e Firewall',
      summary: 'Solução definitiva para empresas que sofrem com internet caindo, Wi-Fi fraco, cabos bagunçados ou precisam de acesso seguro em casa.',
      sla: 'Troca Automática de Internet',
      model: 'Projeto + Monitoramento',
      stack: 'Firewall · Cabos Furukawa · Wi-Fi 6 · Câmeras IP',
      deliverables: [
        'Sistema com 2 internets: se a operadora principal cair, a segunda internet assume na mesma hora sem ninguém notar.',
        'Acesso seguro para Home-Office e Filiais (VPN): trabalhe de casa acessando o servidor como se estivesse na empresa.',
        'Organização completa do Rack de TI, limpeza de cabos soltos e identificação de cada ponto de rede.',
        'Wi-Fi corporativo forte em todos os ambientes, separando a rede segura da empresa da rede de visitantes.',
        'Instalação e organização de câmeras de segurança IP com gravação protegida.'
      ]
    },
    voip: {
      code: 'DETALHES DO SERVIÇO · EGS-VOIP-05',
      title: 'Telefonia Digital em Nuvem (PABX WideCloud)',
      summary: 'Transforme o telefone fixo da empresa em uma central moderna na nuvem, atendendo clientes no computador, celular ou aparelho de mesa.',
      sla: 'Som Limpo e Sem Quedas',
      model: 'Assinatura Mensal',
      stack: 'PABX em Nuvem · Ramal no Celular e PC',
      deliverables: [
        'Menu de atendimento profissional ("Disque 1 para Comercial, 2 para Financeiro") com horário de funcionamento.',
        'Ramais que funcionam no computador, no aplicativo de celular ou no aparelho de telefone na mesa.',
        'Gravação automática de todas as ligações feitas e recebidas para segurança da empresa.',
        'Painel simples para ver quantas ligações a equipe atendeu ou deixou de atender no dia.',
        'Mantemos o mesmo número de telefone que sua empresa já usa hoje e zeramos o custo de ligação entre filiais.'
      ]
    },
    haas: {
      code: 'DETALHES DO SERVIÇO · EGS-HAAS-06',
      title: 'Aluguel de Computadores e Servidores',
      summary: 'Troque computadores lentos por máquinas novas pagando uma mensalidade fixa, sem precisar tirar dinheiro alto do caixa para comprar.',
      sla: 'Troca Rápida se Quebrar',
      model: 'Mensalidade Fixa Tudo Incluso',
      stack: 'Computadores, Notebooks e Servidores Dell',
      deliverables: [
        'Computadores, notebooks e servidores prontos para uso, configurados na medida do que sua equipe precisa.',
        'Zero gasto extra com peças: qualquer defeito ou manutenção já está 100% coberto pela EGS Digital.',
        'Se uma máquina apresentar defeito grave, substituímos rapidamente para o funcionário não ficar parado.',
        'Você preserva o caixa da empresa para investir no seu negócio em vez de imobilizar dinheiro em computadores.',
        'Facilidade para aumentar a quantidade de máquinas sempre que sua equipe crescer.'
      ]
    }
  };

  const specModal = $('#spec-modal');
  const specCloseBtn = $('#spec-modal-close');
  const specCancelBtn = $('#spec-modal-cancel');
  const specCode = $('#spec-modal-code');
  const specTitle = $('#spec-modal-title');
  const specSummary = $('#spec-modal-summary');
  const specSla = $('#spec-modal-sla');
  const specModel = $('#spec-modal-model');
  const specStack = $('#spec-modal-stack');
  const specList = $('#spec-modal-deliverables');
  const specCta = $('#spec-modal-cta');
  let lastSpecTrigger = null;

  function openSpecModal(key, triggerEl) {
    const data = serviceSpecs[key];
    if (!data || !specModal) return;
    lastSpecTrigger = triggerEl || null;

    // Retrigger stagger animation cleanly
    specModal.classList.remove('is-open');

    if (specCode) specCode.textContent = data.code;
    if (specTitle) specTitle.textContent = data.title;
    if (specSummary) specSummary.textContent = data.summary;
    if (specSla) specSla.textContent = data.sla;
    if (specModel) specModel.textContent = data.model;
    if (specStack) specStack.textContent = data.stack;
    if (specList) {
      specList.innerHTML = data.deliverables
        .map((item) => `<li>${escapeHTML(item)}</li>`)
        .join('');
    }
    if (specCta) {
      const msg = encodeURIComponent(
        `Olá! Analisei a Ficha Técnica de "${data.title}" no portal da EGS Digital e gostaria de solicitar uma proposta comercial.`
      );
      specCta.href = `https://wa.me/553130373451?text=${msg}`;
    }

    requestAnimationFrame(() => {
      specModal.classList.add('is-open');
      specModal.setAttribute('aria-hidden', 'false');
      if (specCloseBtn) specCloseBtn.focus();
    });
  }

  function closeSpecModal() {
    if (!specModal || !specModal.classList.contains('is-open')) return;
    specModal.classList.remove('is-open');
    specModal.setAttribute('aria-hidden', 'true');
    if (lastSpecTrigger) {
      lastSpecTrigger.focus();
    }
  }

  $$('[data-spec]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openSpecModal(el.getAttribute('data-spec'), el);
    });
  });

  $$('.service-card[data-spec-card]').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('button, a')) return;
      const key = card.getAttribute('data-spec-card');
      const btn = card.querySelector('.btn-spec-trigger');
      openSpecModal(key, btn || card);
    });
  });

  if (specCloseBtn) specCloseBtn.addEventListener('click', closeSpecModal);
  if (specCancelBtn) specCancelBtn.addEventListener('click', closeSpecModal);
  if (specModal) {
    specModal.addEventListener('click', (e) => {
      if (e.target === specModal) closeSpecModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && specModal && specModal.classList.contains('is-open')) {
      closeSpecModal();
    }
  });

  // --------------------------------------------------------------------------
  // 5. SpaceX Atmospheric Canvas (Interactive Cursor Constellation + Drift)
  // --------------------------------------------------------------------------
  const canvas = $('#space-canvas');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let particles = [];
    const particleCount = 46;
    const pointer = { x: -9999, y: -9999 };

    function resizeCanvas() {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    }

    const heroSection = $('#inicio');
    if (heroSection) {
      heroSection.addEventListener(
        'mousemove',
        (e) => {
          const rect = canvas.getBoundingClientRect();
          pointer.x = e.clientX - rect.left;
          pointer.y = e.clientY - rect.top;
        },
        { passive: true }
      );
      heroSection.addEventListener(
        'mouseleave',
        () => {
          pointer.x = -9999;
          pointer.y = -9999;
        },
        { passive: true }
      );
    }

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.34;
        this.vy = (Math.random() - 0.5) * 0.34;
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
        ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(9, 9, 11, 0.18)';
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

          // Connect to cursor subtly
          const pdx = particles[i].x - pointer.x;
          const pdy = particles[i].y - pointer.y;
          const pDist = Math.sqrt(pdx * pdx + pdy * pdy);
          if (pDist < 160) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(pointer.x, pointer.y);
            const pAlpha = (1 - pDist / 160) * 0.22;
            ctx.strokeStyle = `rgba(220, 38, 38, ${pAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }

          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 130) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              const alpha = (1 - dist / 130) * (isDark ? 0.085 : 0.048);
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

    if ('IntersectionObserver' in window && heroSection) {
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

  // --------------------------------------------------------------------------
  // 6. Scroll Reveal Observer
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
  // 7. Animated Tabular Metric Counters
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
  // 8. Card Spotlight Cursor Tracker (V7 Labs Craft)
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
  // 9. Interactive IT Architecture Blueprint Simulator 2.0 (Clean & Animated)
  // --------------------------------------------------------------------------
  let selectedSize = '5 a 20 computadores';
  let selectedSector = 'Contabilidade & Advocacia';
  const selectedServices = new Set(['Backup contra Vírus', 'Suporte de TI para a equipe']);

  const sizeButtons = $$('.sim-btn[data-size]');
  const sectorButtons = $$('.sim-btn[data-sector]');
  const serviceButtons = $$('.sim-btn[data-service]');

  const blueprintBox = $('#sim-blueprint');
  const resultCode = $('#sim-plan-code');
  const resultTitle = $('#sim-plan-title');
  const resultDesc = $('#sim-plan-desc');
  const simSpecSla = $('#sim-spec-sla');
  const simSpecTopo = $('#sim-spec-topo');
  const simSpecCost = $('#sim-spec-cost');
  const whatsappCta = $('#sim-whatsapp-btn');
  const simFillFormBtn = $('#sim-fill-form-btn');
  let simAnimTimer = null;
  let currentSimSummary = '';

  sizeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      sizeButtons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      selectedSize = btn.getAttribute('data-size');
      updateSimulator(true);
    });
  });

  sectorButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      sectorButtons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      selectedSector = btn.getAttribute('data-sector');
      updateSimulator(true);
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
          showToast('Mantenha ao menos uma necessidade selecionada.');
          return;
        }
      } else {
        selectedServices.add(serv);
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      }
      updateSimulator(true);
    });
  });

  const sectorFocusMap = {
    'Contabilidade & Advocacia': 'Sigilo de Dados (LGPD) e Sistemas Fiscais',
    'Indústria & Logística': 'Sistema ERP, Galpões e 2 Internets Ativas',
    'Clínicas & Saúde': 'Prontuários Seguros e Telefonia Digital',
    'Comércio & Serviços': 'Sistema de Vendas Estável e Suporte Rápido'
  };

  function applySimulatorValues() {
    if (!resultTitle || !resultDesc || !whatsappCta) return;

    let planCode = 'PLANO RECOMENDADO · EGS ESSENCIAL';
    let planName = 'Suporte Ágil para Equipe e Backup Blindado';
    let coverage = 'Manutenção dos computadores, atendimento rápido aos funcionários e proteção automática contra perda de arquivos.';
    let slaText = 'Até 15 min · Remoto e Presencial';
    let topoText = 'Monitoramento 24h + Backup em Nuvem';

    if (selectedSize.includes('Mais de 50') || selectedServices.size >= 4) {
      planCode = 'PLANO RECOMENDADO · EGS ESTRUTURA COMPLETA';
      planName = 'Gestão Completa de TI e Alta Estabilidade';
      coverage = 'Cuidado total da TI (ou parceria com seu técnico interno) para empresas que não podem correr risco de parada.';
      slaText = 'Prioridade Máxima < 15 min · 24h';
      topoText = 'Servidores + Duas Internets + Backup Blindado';
    } else if (selectedSize.includes('20 a 50') || selectedServices.has('Servidores e Nuvem')) {
      planCode = 'PLANO RECOMENDADO · EGS EMPRESARIAL';
      planName = 'Cuidado de Servidores, Rede e Equipe';
      coverage = 'Organização diária de servidores, controle de pastas por setor, internet segura e suporte rápido para os usuários.';
      slaText = 'Até 15 min · Remoto e Presencial BH';
      topoText = 'Servidor Protegido + Cofre de Backup';
    }

    const servicesList = Array.from(selectedServices).join(', ');
    if (resultCode) resultCode.textContent = planCode;
    resultTitle.textContent = planName;
    resultDesc.textContent = `${coverage} Escopo para ${selectedSize} (${selectedSector}): ${servicesList}.`;
    if (simSpecSla) simSpecSla.textContent = slaText;
    if (simSpecTopo) simSpecTopo.textContent = topoText;
    if (simSpecCost) simSpecCost.textContent = sectorFocusMap[selectedSector] || 'Mensalidade Fixa sem Surpresas';

    currentSimSummary = `Plano sugerido: ${planName} | Porte: ${selectedSize} | Ramo: ${selectedSector} | Necessidades: ${servicesList}`;

    const message = encodeURIComponent(
      `Olá! Fiz a simulação no site da EGS Digital:\n• Plano: ${planName}\n• Porte: ${selectedSize}\n• Ramo: ${selectedSector}\n• O que preciso: ${servicesList}\n\nGostaria de receber um orçamento.`
    );
    whatsappCta.href = `https://wa.me/553130373451?text=${message}`;
  }

  function updateSimulator(animate = false) {
    if (animate && blueprintBox && !prefersReducedMotion) {
      blueprintBox.classList.add('is-updating');
      clearTimeout(simAnimTimer);
      simAnimTimer = setTimeout(() => {
        applySimulatorValues();
        blueprintBox.classList.remove('is-updating');
      }, 110);
    } else {
      applySimulatorValues();
    }
  }

  updateSimulator(false);

  if (simFillFormBtn) {
    simFillFormBtn.addEventListener('click', () => {
      const msgField = $('#form-message');
      const contactSection = $('#contato');
      const nameField = $('#form-name');
      if (msgField && currentSimSummary) {
        msgField.value = currentSimSummary;
      }
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
      showToast('Simulação copiada para o formulário abaixo!');
      setTimeout(() => {
        if (nameField) nameField.focus({ preventScroll: true });
      }, 450);
    });
  }

  // --------------------------------------------------------------------------
  // 10. Smooth Animated FAQ Accordion (#faq)
  // --------------------------------------------------------------------------
  const faqItems = $$('.faq-item');
  faqItems.forEach((item) => {
    const btn = $('.faq-question', item);
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      // Close other open items for clean single-focus reading
      faqItems.forEach((other) => {
        other.classList.remove('is-open');
        const otherBtn = $('.faq-question', other);
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // --------------------------------------------------------------------------
  // 11. Production Contact Form (WhatsApp + E-mail Dispatch)
  // --------------------------------------------------------------------------
  const contactForm = $('#lead-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = ($('#form-name')?.value || '').trim();
      const company = ($('#form-company')?.value || '').trim();
      const email = ($('#form-email')?.value || '').trim() || 'Não informado';
      const phone = ($('#form-phone')?.value || '').trim();
      const demand = ($('#form-message')?.value || '').trim() || 'Avaliação geral de TI para a empresa';

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
  // 12. Accessible Mobile Menu Navigation
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

  // --------------------------------------------------------------------------
  // 13. Seamless Infinite Loop Carousel (#feedbacks-track)
  // --------------------------------------------------------------------------
  const feedbacksTrack = $('#feedbacks-track');
  const feedbacksMarquee = $('.feedbacks-marquee');
  if (feedbacksTrack && feedbacksMarquee && !prefersReducedMotion) {
    const cards = $$('.feedback-card', feedbacksTrack);
    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      feedbacksTrack.appendChild(clone);
    });

    let offset = 0;
    const speed = 0.55; // Smooth ~33px/sec at 60fps
    let isPaused = false;
    let isCarouselVisible = false;
    let carouselRafId = null;

    feedbacksMarquee.addEventListener('mouseenter', () => { isPaused = true; }, { passive: true });
    feedbacksMarquee.addEventListener('mouseleave', () => { isPaused = false; }, { passive: true });
    feedbacksMarquee.addEventListener('focusin', () => { isPaused = true; });
    feedbacksMarquee.addEventListener('focusout', () => { isPaused = false; });
    feedbacksMarquee.addEventListener('touchstart', () => { isPaused = true; }, { passive: true });
    feedbacksMarquee.addEventListener('touchend', () => { isPaused = false; }, { passive: true });

    function stepCarousel() {
      if (!isCarouselVisible) {
        carouselRafId = null;
        return;
      }
      if (!isPaused && !document.hidden) {
        offset += speed;
        const halfWidth = (feedbacksTrack.scrollWidth + 24) / 2;
        if (offset >= halfWidth) {
          offset -= halfWidth;
        }
        feedbacksTrack.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }
      carouselRafId = requestAnimationFrame(stepCarousel);
    }

    if ('IntersectionObserver' in window) {
      const carouselObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          isCarouselVisible = entry.isIntersecting;
          if (isCarouselVisible && carouselRafId === null) {
            carouselRafId = requestAnimationFrame(stepCarousel);
          }
        });
      });
      carouselObserver.observe(feedbacksMarquee);
    } else {
      isCarouselVisible = true;
      carouselRafId = requestAnimationFrame(stepCarousel);
    }
  }

  // --------------------------------------------------------------------------
  // 14. Vertical Section Dots ScrollSpy (#section-dots-nav)
  // --------------------------------------------------------------------------
  const sectionDotsNav = $('.section-dots-nav');
  const sectionDots = $$('.section-dot[data-section-spy]');
  if (sectionDotsNav && sectionDots.length > 0 && 'IntersectionObserver' in window) {
    const spySections = sectionDots
      .map((dot) => document.getElementById(dot.getAttribute('data-section-spy')))
      .filter(Boolean);

    const setActiveDot = (id) => {
      sectionDots.forEach((dot, idx) => {
        const active = dot.getAttribute('data-section-spy') === id;
        dot.classList.toggle('is-active', active);
        if (active) {
          dot.setAttribute('aria-current', 'location');
          const yPos = dot.offsetTop ? dot.offsetTop + (dot.offsetHeight - 10) / 2 : idx * 26 + 5;
          sectionDotsNav.style.setProperty('--active-dot-y', `${yPos}px`);
        } else {
          dot.removeAttribute('aria-current');
        }
      });
    };

    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveDot(entry.target.id);
          }
        });
      },
      { rootMargin: '-38% 0px -52% 0px', threshold: 0 }
    );

    spySections.forEach((sec) => spyObserver.observe(sec));
  }
});
