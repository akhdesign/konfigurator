(function(){
  "use strict";
  var SERVICES = [
      {id:"brand-refresh", family:"Brand Identity", name:"Auffrischung", price:4000, unit:"once", excl:"brand", fixed:true,
       desc:"Dezente Auffrischung deiner Marke – Logo-Facelift, aktualisierte Farbpalette und ein Typografiesystem."},
      {id:"brand-full", family:"Brand Identity", name:"Umfassend", price:8000, plus:"+", unit:"once", excl:"brand",
       desc:"Umfassendes Redesign – neues Logo, vollständige Markenrichtlinien und erweiterte Brand-Assets."},

      {id:"website-s", family:"Website", name:"Start", price:5000, unit:"once", excl:"website", fixed:true,
       idealFor:"Für Start-ups und kleine Unternehmen, die einen professionellen Auftritt brauchen.",
       features:["4 individuelle Seiten","Basis-CMS (2–4 Collections)","Einfache Content-Migration","Standard-Animationen","SEO-optimierte Struktur"]},
      {id:"website-m", family:"Website", name:"Wachstum", price:8000, unit:"once", excl:"website", fixed:true, recommended:true,
       idealFor:"Für wachsende Unternehmen, die organischen Traffic steigern und mehr Besucher zu Kunden machen wollen.",
       plusOf:"Start",
       features:["4–10 individuelle Seiten","Komplexes CMS (bis zu 7 Collections)","Vollständige Content-Migration","Erweitertes SEO- & AEO-Setup","Tracking & Analytics integriert"]},
      {id:"website-l", family:"Website", name:"Enterprise", price:13000, unit:"once", excl:"website", fixed:true,
       idealFor:"Für große Organisationen mit maßgeschneiderten Lösungen und Infrastruktur auf Unternehmensniveau.",
       plusOf:"Wachstum",
       features:["Unbegrenzte Seiten & CMS-Collections","Erweiterte Integrationen","Mehrsprachige Website (2 Sprachen)","Individuelle Animationen","Plattform-Integration","Komponenten-Bibliothek"]},

      {id:"shop-native", family:"Webshop", name:"Native", price:7000, unit:"once", excl:"shop", fixed:true,
       idealFor:"Für kleine bis mittlere Sortimente – ein schneller, eigenständiger Shop ohne laufende Plattformgebühren.",
       features:["Nativer Shop – alles in einem System","Produkte, Kategorien & Warenkorb","Standard-Checkout & gängige Zahlungsarten","Keine laufenden Plattform-Gebühren","SEO- & AEO-optimierte Produktseiten"]},
      {id:"shop-shopify", family:"Webshop", name:"Shopify", price:15000, unit:"once", excl:"shop", fixed:true, recommended:true,
       idealFor:"Für wachsende Shops mit großem Sortiment, die volle E-Commerce-Power und echte Skalierung brauchen.",
       features:["Shopify als Backend – volle E-Commerce-Power","Unbegrenztes Sortiment & Varianten","Erweiterte Zahlungs- & Versandoptionen","Bestands- & Order-Management","Anbindung an Marktplätze & Tools"]},

      {id:"care-basic", family:"Betreuung", name:"Basic", unit:"month", excl:"care", fixed:true,
       priceSelf:190, priceHosted:250,
       idealFor:"Für Websites, die zuverlässig laufen und sicher bleiben sollen.",
       featuresSelf:["Technische Wartung & Sicherheits-Updates","Link-Check & Fehlerseiten-Monitoring","1 Std. Arbeitszeit / Monat inkludiert","Reaktionszeit 48 Std."],
       featuresHosted:["Hosting & CMS-Zugang","Technische Wartung & Sicherheits-Updates","Cookie-Banner (DSGVO-konform)","Link-Check & Fehlerseiten-Monitoring","1 Std. Arbeitszeit / Monat inkludiert","Reaktionszeit 48 Std."]},
      {id:"care-advanced", family:"Betreuung", name:"Advanced", unit:"month", excl:"care", fixed:true, recommended:true,
       priceSelf:450, priceHosted:510, plusOf:"Basic",
       idealFor:"Für Unternehmen, die zusätzlich Sichtbarkeit und Performance aktiv verbessern wollen.",
       featuresSelf:["SEO-Seitenindexierung","Core Web Vitals-Check & Bildkomprimierung","Google Analytics & Search Console Report","2 Std. Arbeitszeit / Monat inkludiert","Reaktionszeit 24 Std."],
       featuresHosted:["SEO-Seitenindexierung","Core Web Vitals-Check & Bildkomprimierung","Google Analytics & Search Console Report","Schema-Markup & strukturierte Daten-Check","3 Std. Arbeitszeit / Monat inkludiert","Reaktionszeit 24 Std."]},
      {id:"care-enterprise", family:"Betreuung", name:"Enterprise", unit:"month", excl:"care", fixed:true,
       priceSelf:1310, priceHosted:1370, plusOf:"Advanced",
       idealFor:"Für anspruchsvolle Websites mit maximaler Betreuung, Priorität und SEO-Schub.",
       featuresSelf:["Schema-Markup & strukturierte Daten-Check","SEO Boost","4 Std. Arbeitszeit / Monat inkludiert","Reaktionszeit 4 Std."],
       featuresHosted:["Barrierefreiheits-Monitoring (Compliance-Check)","SEO Boost","6 Std. Arbeitszeit / Monat inkludiert","Reaktionszeit 4 Std."]},

      {id:"ads-basic", family:"Google Ads", name:"Basic", unit:"month", excl:"ads", fixed:true, price:250, setup:650,
       idealFor:"Empf. Werbebudget ab 300 €/Monat (direkt an Google). Ideal für lokale Unternehmen & Einstieg.",
       features:["Zielgruppen- & Keyword-Analyse (Basis)","1–2 Suchkampagnen","Anzeigentexte & Erweiterungen","Monatliches Reporting (Klicks, Conversions, Kosten)","Laufende Optimierung","Conversion-Tracking inkl. Google Tag Manager (Setup)"]},
      {id:"ads-advanced", family:"Google Ads", name:"Advanced", unit:"month", excl:"ads", fixed:true, recommended:true, price:450, setup:900,
       idealFor:"Empf. Werbebudget ab 600 €/Monat (direkt an Google). Für wachsende Unternehmen mit klaren Zielen.",
       plusOf:"Basic",
       features:["Detaillierte Keyword- & Zielgruppenanalyse","Bis zu 4 Kampagnen (Such- & Displaynetzwerk)","A/B-Testing von Anzeigen"]},
      {id:"ads-enterprise", family:"Google Ads", name:"Enterprise", unit:"month", excl:"ads", fixed:true, price:750, setup:1100,
       idealFor:"Empf. Werbebudget ab 1.500 €/Monat (direkt an Google). Für mehrere Standorte oder Produktlinien.",
       plusOf:"Advanced",
       features:["Vollständige Keyword- & Zielgruppenanalyse","Bis zu 8 Kampagnen (Suche, Display, Remarketing)","Betreuung mehrerer Standorte / Marken"]},

      {id:"sst-google", family:"Server Side Tracking", name:"Basic · Google", unit:"month", excl:"sst", fixed:true, price:190, setup:1490,
       idealFor:"Optional: stabile Conversion-Messung trotz Browser- & iOS-Restriktionen.",
       features:["Google Ads Conversions + Enhanced Conversions","Tracking-Konzept & Event-Plan (inkl. Consent-Logik)","First-Party Server-Side Infrastruktur (eigene Subdomain)","QA & Go-Live inkl. Test-Conversions","Monatlich: Health Checks, Anpassungen & Troubleshooting"]},
      {id:"sst-meta", family:"Server Side Tracking", name:"Growth · Meta", unit:"month", excl:"sst", fixed:true, recommended:true, price:240, setup:1790,
       idealFor:"Empfohlen: bessere Datenqualität & Optimierungssignale für Skalierung.",
       features:["Meta Pixel + Conversions API (CAPI) + Deduplication","Tracking-Konzept & Event-Plan (inkl. Consent-Logik)","First-Party Server-Side Infrastruktur (eigene Subdomain)","QA & Go-Live inkl. Test-Conversions","Monatlich: Health Checks, Anpassungen & Troubleshooting"]},
      {id:"sst-pro", family:"Server Side Tracking", name:"Pro · Google + Meta", unit:"month", excl:"sst", fixed:true, price:320, setup:2990,
       idealFor:"Best Practice: maximale Datenqualität, Deduplication & zuverlässige Optimierung.",
       features:["Google + Meta: beide Plattformen angebunden","Gemeinsames Event-Mapping, Deduplication & Cross-Checks","Tracking-Konzept & Event-Plan (inkl. Consent-Logik)","First-Party Server-Side Infrastruktur (eigene Subdomain)","QA & Go-Live inkl. Test-Conversions","Monatlich: Health Checks, Anpassungen & Troubleshooting"]},

      {id:"chat-pilot", family:"ChatGPT Ads", name:"Pilot-Test", unit:"once", price:1380, fixed:true, recommended:true, badgeText:"Empfohlener Start",
       desc:"Test & Learn: kurzer, budgetierter Einstieg (2–3 Wochen). Danach entscheidest du frei über die laufende Betreuung – ohne zweites Setup.",
       features:["Konto & Setup inkl. Basis-Conversion-Tracking","Testkampagne inkl. Anzeigen, Ziel- & Gebotsstrategie","Laufende Steuerung während der Testphase","Abschlussauswertung mit klarer Handlungsempfehlung"]},
      {id:"chat-basic", family:"ChatGPT Ads", name:"Betreuung Basic", unit:"month", excl:"chatcare", fixed:true, price:290,
       idealFor:"Einstieg – laufende Steuerung deiner ChatGPT-Kampagnen.",
       features:["Laufende Kampagnensteuerung & Budgetkontrolle","Monatlicher Performance-Report","Optimierung Context Hints & Creatives (Basis)","Reaktionszeit: Standard"]},
      {id:"chat-advanced", family:"ChatGPT Ads", name:"Betreuung Advanced", unit:"month", excl:"chatcare", fixed:true, recommended:true, badgeText:"Empfohlen", price:590, plusOf:"Betreuung Basic",
       idealFor:"Empfohlen – aktives Optimieren und kanalübergreifende Sicht.",
       features:["Context Hints & Creatives laufend optimiert","Systematisches A/B-Testing (Hints & Creatives)","Cross-Channel-Reporting (ChatGPT + Google Ads)","Attribution-Monitoring (Conversation Gap)","Strategie-Call monatlich","Reaktionszeit: bevorzugt"]},
      {id:"chat-enterprise", family:"ChatGPT Ads", name:"Betreuung Enterprise", unit:"month", excl:"chatcare", fixed:true, price:990, plusOf:"Betreuung Advanced",
       idealFor:"Skalierung – für mehrere Märkte und maximale Messtiefe.",
       features:["Geo-Holdout & Incrementality-Tests","Warehouse-Connector fürs Reporting","Mehrere Märkte & Sprachen","Strategie-Call 14-tägig","Reaktionszeit: Priorität"]}
    ];

  var STEPS = [
      {id:"type",    lbl:"Projekt",   head:"Womit starten wir?",            sub:"Die erste Entscheidung: Brauchst du eine Website oder einen Online-Shop?"},
      {id:"package", lbl:"Paket",     head:"Welches Paket passt?",          sub:"Wähle die Größe, die zu deinem Vorhaben passt."},
      {id:"care",    lbl:"Betreuung", head:"Laufende Betreuung?",           sub:"Nach dem Launch halte ich deine Seite sicher, aktuell und sichtbar. Optional – du kannst diesen Schritt überspringen."},
      {id:"growth",  lbl:"Marketing", head:"Sichtbarkeit & Wachstum?",      sub:"Wähle die Kanäle, die dich interessieren – Google Ads, ChatGPT Ads oder Server Side Tracking. Alles optional."},
      {id:"extras",  lbl:"Branding",  head:"Noch dein Markenauftritt?",     sub:"Zum Schluss optional: dein Branding. Kannst du auch später dazunehmen."},
      {id:"summary", lbl:"Anfrage",   head:"Deine Anfrage",                 sub:"Prüfe deine Auswahl und schick sie unverbindlich ab – ich melde mich mit einem konkreten Angebot."}
    ];

  var ROOT = document.getElementById('ah-konfigurator');
  if(!ROOT){ if(window.console){ console.warn('[AH Konfigurator] #ah-konfigurator nicht gefunden'); } return; }

  var selected = {};
  var hostingIncluded = false;
  var state = { step:0, type:null, channels:{} };

  var nf = new Intl.NumberFormat('de-AT');
  function euro(n){ return nf.format(n) + ' €'; }
  function priceOf(s){ return (s.priceHosted!=null) ? (hostingIncluded ? s.priceHosted : s.priceSelf) : s.price; }
  function byFamily(f){ return SERVICES.filter(function(s){ return s.family===f; }); }
  function chosen(){ return SERVICES.filter(function(s){ return selected[s.id]; }); }
  function familyRecommended(f){ var l=byFamily(f); for(var i=0;i<l.length;i++){ if(l[i].recommended) return l[i].id; } return l[0] ? l[0].id : null; }

  function q(sel, ctx){ return (ctx||ROOT).querySelector(sel); }
  function qa(sel, ctx){ return Array.prototype.slice.call((ctx||ROOT).querySelectorAll(sel)); }
  function setText(ctx, hook, val){ var e=q('[data-ahk="'+hook+'"]', ctx); if(e){ e.textContent=val; } }
  function setTextOrHide(ctx, hook, val){ var e=q('[data-ahk="'+hook+'"]', ctx); if(!e){ return; } if(val){ e.textContent=val; e.style.display=''; } else { e.style.display='none'; } }

  function computeTotals(){
    var items = chosen();
    var once = items.reduce(function(a,s){ return a + (s.unit==='once'?priceOf(s):0) + (s.setup||0); }, 0);
    var month = items.reduce(function(a,s){ return a + (s.unit==='month'?priceOf(s):0); }, 0);
    return { once:once, month:month, items:items };
  }

  var cardTpl = q('[data-ahk-template="card"]');
  if(cardTpl && cardTpl.parentNode){ cardTpl.parentNode.removeChild(cardTpl); }
  var recapWrap = q('[data-ahk-recap]');
  var recapTpl = null;
  if(recapWrap){ recapTpl = q('[data-ahk-template="recap"]', recapWrap) || recapWrap.firstElementChild; if(recapTpl && recapTpl.parentNode){ recapTpl.parentNode.removeChild(recapTpl); } }

  function toggleSelect(s){
    var wasSel = !!selected[s.id];
    if(selected[s.id]){ delete selected[s.id]; }
    else {
      if(s.excl){ SERVICES.forEach(function(o){ if(o.excl===s.excl && o.id!==s.id){ delete selected[o.id]; } }); }
      selected[s.id] = true;
    }
    renderStep();
    if(!wasSel && selected[s.id]){ maybeAutoAdvance(); }
  }

  function maybeAutoAdvance(){
    if(state.step >= STEPS.length-1){ return; }
    var sec = q('[data-ahk-step="'+STEPS[state.step].id+'"]');
    if(sec && sec.hasAttribute('data-ahk-autoadvance')){
      setTimeout(function(){ goStep(state.step+1); }, 350);
    }
  }

  function makeCard(s){
    if(!cardTpl){ return null; }
    var el = cardTpl.cloneNode(true);
    el.removeAttribute('data-ahk-template');
    el.style.display = '';
    el.setAttribute('data-ahk-card', s.id);
    if(!el.getAttribute('role')){ el.setAttribute('role','button'); }
    el.setAttribute('tabindex','0');
    el.classList.toggle('is-selected', !!selected[s.id]);
    el.setAttribute('aria-pressed', selected[s.id] ? 'true':'false');
    el.classList.toggle('is-recommended', !!s.recommended);

    setText(el, 'name', s.name);
    setTextOrHide(el, 'ideal', s.idealFor || '');
    setTextOrHide(el, 'desc', s.desc || '');
    setTextOrHide(el, 'plus', s.plusOf ? ('Alles aus „'+s.plusOf+'“, plus:') : '');
    var prefix = (s.fixed && s.unit==='once') ? 'Paket' : (s.fixed ? '' : 'ab');
    setTextOrHide(el, 'price-prefix', prefix);
    setText(el, 'amount', euro(priceOf(s)) + (s.plus||''));
    setText(el, 'per', s.unit==='month' ? '/ Monat' : 'einmalig');
    setTextOrHide(el, 'setup', s.setup ? ('+ '+euro(s.setup)+' Setup') : '');
    setTextOrHide(el, 'badge', s.recommended ? (s.badgeText || 'Beliebteste Wahl') : '');

    var featWrap = q('[data-ahk="features"]', el);
    if(featWrap){
      var featTpl = q('[data-ahk-template="feature"]', featWrap) || featWrap.firstElementChild;
      var list = (hostingIncluded && s.featuresHosted) ? s.featuresHosted : (s.featuresSelf || s.features) || [];
      featWrap.innerHTML = '';
      if(featTpl){
        list.forEach(function(f){
          var fi = featTpl.cloneNode(true);
          fi.removeAttribute('data-ahk-template');
          fi.style.display = '';
          var t = q('[data-ahk="feature-text"]', fi) || fi;
          t.textContent = f;
          featWrap.appendChild(fi);
        });
      }
    }

    el.addEventListener('click', function(){ toggleSelect(s); });
    el.addEventListener('keydown', function(e){ if(e.key==='Enter' || e.key===' '){ e.preventDefault(); toggleSelect(s); } });
    return el;
  }

  function fillContainer(key, list){
    var c = q('[data-ahk-cards="'+key+'"]');
    if(!c){ return; }
    c.innerHTML = '';
    list.forEach(function(s){ var el=makeCard(s); if(el){ c.appendChild(el); } });
  }

  function renderStep(){
    var id = STEPS[state.step].id;
    qa('[data-ahk-step]').forEach(function(e){ e.style.display = (e.getAttribute('data-ahk-step')===id) ? '' : 'none'; });

    if(id==='type'){ syncChoice(); }
    else if(id==='package'){ fillContainer('package', state.type==='website' ? byFamily('Website') : (state.type==='webshop' ? byFamily('Webshop') : [])); }
    else if(id==='care'){ syncHosting(); fillContainer('care', byFamily('Betreuung')); }
    else if(id==='growth'){ renderGrowth(); }
    else if(id==='extras'){ fillContainer('brand', byFamily('Brand Identity')); }
    else if(id==='summary'){ renderSummary(); }

    renderStepper();
    updateChrome();
    try{ window.scrollTo({ top: ROOT.getBoundingClientRect().top + window.pageYOffset - 20, behavior:'smooth' }); }catch(e){}
  }

  function syncChoice(){
    qa('[data-ahk-choice]').forEach(function(el){
      var on = state.type === el.getAttribute('data-ahk-choice');
      el.classList.toggle('is-selected', on);
      el.setAttribute('aria-pressed', on ? 'true':'false');
    });
  }
  function chooseType(t){
    state.type = t;
    SERVICES.forEach(function(s){ if(s.excl==='website' || s.excl==='shop'){ delete selected[s.id]; } });
    var pre = familyRecommended(t==='website' ? 'Website' : 'Webshop');
    if(pre){ selected[pre] = true; }
    goStep(1);
  }

  function syncHosting(){
    qa('[data-ahk-hosting]').forEach(function(el){
      var on = (el.getAttribute('data-ahk-hosting')==='hosted') === hostingIncluded;
      el.classList.toggle('is-on', on);
      el.setAttribute('aria-pressed', on ? 'true':'false');
    });
  }

  var CHANNELS = [
    { key:'googleads', fam:'Google Ads' },
    { key:'chatads',   fam:'ChatGPT Ads' },
    { key:'sst',       fam:'Server Side Tracking' }
  ];
  function channelHasSel(ch){ return byFamily(ch.fam).some(function(s){ return selected[s.id]; }); }
  function renderGrowth(){
    if(!state.growthInit){
      state.growthInit = true;
      CHANNELS.forEach(function(ch){
        var chip = q('[data-ahk-channel="'+ch.key+'"]');
        var block = q('[data-ahk-channel-block="'+ch.key+'"]');
        if((chip && chip.hasAttribute('data-ahk-default-open')) || (block && block.hasAttribute('data-ahk-default-open'))){ state.channels[ch.key] = true; }
      });
    }
    CHANNELS.forEach(function(ch){ if(channelHasSel(ch)){ state.channels[ch.key]=true; } });
    CHANNELS.forEach(function(ch){
      var on = !!state.channels[ch.key];
      qa('[data-ahk-channel="'+ch.key+'"]').forEach(function(chip){ chip.classList.toggle('is-on', on); chip.setAttribute('aria-pressed', on?'true':'false'); });
      var block = q('[data-ahk-channel-block="'+ch.key+'"]');
      if(block){ block.style.display = on ? '' : 'none'; }
      if(on){ fillContainer(ch.key, byFamily(ch.fam)); }
    });
  }

  function renderStepper(){
    qa('[data-ahk-stepper-item]').forEach(function(el){
      var idx = STEPS.map(function(s){return s.id;}).indexOf(el.getAttribute('data-ahk-stepper-item'));
      el.classList.toggle('is-active', idx===state.step);
      el.classList.toggle('is-done', idx>-1 && idx<state.step);
    });
  }

  function renderSummary(){
    var t = computeTotals();
    if(recapWrap && recapTpl){
      recapWrap.innerHTML = '';
      if(!t.items.length){
        var empty = recapTpl.cloneNode(true); empty.removeAttribute('data-ahk-template'); empty.style.display='';
        setText(empty, 'recap-name', 'Noch nichts ausgewählt');
        setText(empty, 'recap-value', '–');
        var rmE = q('[data-ahk="recap-remove"]', empty); if(rmE){ rmE.style.display='none'; }
        recapWrap.appendChild(empty);
      } else {
        t.items.forEach(function(s){
          var row = recapTpl.cloneNode(true); row.removeAttribute('data-ahk-template'); row.style.display='';
          var fam = s.family ? s.family+' · ' : '';
          var setupTxt = s.setup ? (' (+ '+euro(s.setup)+' Setup)') : '';
          setText(row, 'recap-name', fam + s.name + setupTxt);
          setText(row, 'recap-value', (s.fixed?'':'ab ') + euro(priceOf(s)) + (s.plus||'') + (s.unit==='month'?' /Mon.':''));
          var rm = q('[data-ahk="recap-remove"]', row);
          if(rm){ rm.style.display=''; rm.addEventListener('click', function(ev){ ev.preventDefault(); delete selected[s.id]; renderStep(); }); }
          recapWrap.appendChild(row);
        });
      }
    }
    var lines = t.items.map(function(s){
      var fam = s.family ? s.family+' · ' : '';
      var setupTxt = s.setup ? (' (+ '+euro(s.setup)+' Setup)') : '';
      return '• ' + fam + s.name + setupTxt + ': ' + (s.fixed?'':'ab ') + euro(priceOf(s)) + (s.plus||'') + (s.unit==='month'?' /Monat':' einmalig');
    }).join('\n') || 'Keine Leistung ausgewählt';
    var fA=q('[name="auswahl"]'), fE=q('[name="einmalig"]'), fL=q('[name="laufend"]');
    if(fA){ fA.value = lines; }
    if(fE){ fE.value = euro(t.once); }
    if(fL){ fL.value = euro(t.month) + ' /Monat'; }
  }

  function updateChrome(){
    var t = computeTotals();
    qa('[data-ahk="total-once"]').forEach(function(e){ e.textContent = euro(t.once); });
    qa('[data-ahk="total-month"]').forEach(function(e){ e.textContent = euro(t.month); });

    var isLast = state.step === STEPS.length-1;
    var isFirst = state.step === 0;
    qa('[data-ahk="back"]').forEach(function(b){ b.classList.toggle('is-disabled', isFirst); if('disabled' in b){ b.disabled = isFirst; } });
    qa('[data-ahk="next"]').forEach(function(b){
      b.style.display = isLast ? 'none' : '';
      var lock = isFirst && !state.type;
      b.classList.toggle('is-disabled', lock);
      if('disabled' in b){ b.disabled = lock; }
    });
  }

  function goStep(i){ state.step = Math.max(0, Math.min(STEPS.length-1, i)); renderStep(); }

  qa('[data-ahk-choice]').forEach(function(el){ el.addEventListener('click', function(){ chooseType(el.getAttribute('data-ahk-choice')); }); });
  qa('[data-ahk-hosting]').forEach(function(el){ el.addEventListener('click', function(){ hostingIncluded = (el.getAttribute('data-ahk-hosting')==='hosted'); renderStep(); }); });
  qa('[data-ahk-channel]').forEach(function(el){ el.addEventListener('click', function(){ var k=el.getAttribute('data-ahk-channel'); var now=!state.channels[k]; state.channels[k]=now; if(!now){ byFamily(CHANNELS.filter(function(c){return c.key===k;})[0].fam).forEach(function(s){ delete selected[s.id]; }); } renderStep(); }); });
  qa('[data-ahk-stepper-item]').forEach(function(el){ el.addEventListener('click', function(){ var idx=STEPS.map(function(s){return s.id;}).indexOf(el.getAttribute('data-ahk-stepper-item')); if(idx===0 || state.type!=null){ goStep(idx); } }); });
  qa('[data-ahk="back"]').forEach(function(b){ b.addEventListener('click', function(e){ e.preventDefault(); if(state.step>0){ goStep(state.step-1); } }); });
  qa('[data-ahk="next"]').forEach(function(b){ b.addEventListener('click', function(e){ e.preventDefault(); if(state.step<STEPS.length-1){ goStep(state.step+1); } }); });

  renderStep();
  ROOT.setAttribute('data-ahk-ready','1');

})();
