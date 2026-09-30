/*
 * TEMPORARY: Shemini Atzeret and Simchat Torah 2026 closure notice, homepage only (owner request, 2026-09-30).
 * Remove after the holiday: delete this file and the HOLIDAY-NOTICE simchat-torah-2026 block in /index.html.
 *
 * The page is a hydrated Next.js (React 19) export and <main> belongs to the React tree,
 * so the notice is inserted only after React has hydrated <main>. Inserting earlier would
 * cause a hydration mismatch. It re-inserts itself if React re-renders <main>, removes
 * itself on client-side navigation away from "/", and never shows from Monday
 * 2026-10-05 09:00 Eastern. There is no holiday article this time, so the notice has no link.
 */
(function () {
  "use strict";

  var END = Date.parse("2026-10-05T09:00:00-04:00");
  var ID = "bh-holiday-notice";

  if (!(Date.now() < END)) return;

  function expired() {
    return !(Date.now() < END);
  }

  function onHome() {
    var p = window.location.pathname;
    return p === "/" || p === "/index.html";
  }

  function hydrated(el) {
    var keys = Object.keys(el);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i].indexOf("__reactFiber$") === 0) return true;
    }
    return false;
  }

  function build() {
    var box = document.createElement("aside");
    box.id = ID;
    box.setAttribute("aria-label", "Holiday hours notice");
    box.style.cssText = [
      "display:block",
      "margin:0",
      "background:linear-gradient(135deg,rgba(184,134,43,.18) 0%,rgba(11,14,18,.94) 65%)",
      "border-bottom:1px solid rgba(184,134,43,.35)",
      "color:rgb(229,231,234)",
      "font-family:var(--font-inter),system-ui,sans-serif"
    ].join(";");

    var inner = document.createElement("div");
    inner.style.cssText = [
      "box-sizing:border-box",
      "max-width:80rem",
      "margin:0 auto",
      "padding:12px 16px",
      "display:flex",
      "flex-wrap:wrap",
      "align-items:center",
      "gap:8px 16px"
    ].join(";");

    var text = document.createElement("p");
    text.style.cssText = [
      "margin:0",
      "flex:1 1 280px",
      "min-width:0",
      "font-size:14px",
      "line-height:1.5",
      "overflow-wrap:break-word"
    ].join(";");

    var lead = document.createElement("strong");
    lead.style.cssText = [
      "font-family:var(--font-jakarta),var(--font-inter),system-ui,sans-serif",
      "font-weight:800",
      "color:rgb(232,203,126)"
    ].join(";");
    lead.appendChild(document.createTextNode("Closed for Shemini Atzeret and Simchat Torah."));

    text.appendChild(lead);
    text.appendChild(document.createTextNode(
      " We are closed Saturday, October 3 and Sunday, October 4, and reopen Monday, October 5 at 9:00 AM. Chag Sameach!"
    ));

    inner.appendChild(text);
    box.appendChild(inner);
    return box;
  }

  function place() {
    var existing = document.getElementById(ID);
    if (expired() || !onHome()) {
      if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
      return;
    }
    if (existing) return;
    var host = document.querySelector("main") || document.body;
    if (!host) return;
    host.insertBefore(build(), host.firstChild);
  }

  var queued = false;
  function schedule() {
    if (queued) return;
    queued = true;
    setTimeout(function () {
      queued = false;
      place();
    }, 0);
  }

  function go() {
    place();
    if (window.MutationObserver && document.body) {
      new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
    }
  }

  function start() {
    var t0 = Date.now();
    (function tick() {
      var main = document.querySelector("main");
      if (main && hydrated(main)) return go();
      var waited = Date.now() - t0;
      var booted = !!(window.next && window.next.version);
      // No Next.js runtime after the page finished loading: nothing will hydrate, insert now.
      if (!booted && waited > 8000 && document.readyState === "complete") return go();
      if (waited > 30000) return go();
      setTimeout(tick, 120);
    })();
  }

  var started = false;
  function begin() {
    if (started) return;
    started = true;
    start();
  }

  if (document.readyState === "complete") {
    begin();
  } else {
    document.addEventListener("DOMContentLoaded", begin);
    window.addEventListener("load", begin);
  }
})();
