// GENERATED — do not edit. Built from the modular sources by tools/bundle.py.
// Everything the app needs is in this one file so it can be deployed by
// uploading two files from a phone.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import WebSocket, { WebSocketServer } from 'ws';

const run = promisify(execFile);
const ASSETS = {"index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=1\">\n<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"default\">\n<meta name=\"theme-color\" content=\"#D7DAD3\">\n<title>Disclaimer</title>\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n<link href=\"https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@600;700&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap\" rel=\"stylesheet\">\n<style>\n  :root {\n    --paper:    #D7DAD3;\n    --paper-2:  #C6CAC1;\n    --ink:      #14181C;\n    --ink-soft: #5A6169;\n    --tally:    #B33A22;\n    --filed:    #2C5F7C;\n    --inferred: #8A6D1F;\n    --rule:     #A8AEA3;\n    --slab-h:   132px;\n  }\n\n  * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }\n\n  html, body {\n    margin: 0; padding: 0;\n    background: var(--paper);\n    color: var(--ink);\n    font-family: 'IBM Plex Sans', system-ui, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    overscroll-behavior: none;\n  }\n\n  body {\n    min-height: 100dvh;\n    padding: 20px 18px calc(var(--slab-h) + env(safe-area-inset-bottom) + 24px);\n  }\n\n  /* \u2500\u2500 masthead \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  .eyebrow {\n    font-family: 'IBM Plex Mono', monospace;\n    font-size: 10px; font-weight: 500;\n    letter-spacing: 0.16em; text-transform: uppercase;\n    color: var(--ink-soft);\n    display: flex; align-items: center; gap: 8px;\n  }\n  .eyebrow .sep { opacity: 0.4; }\n  .tally {\n    width: 7px; height: 7px; border-radius: 50%;\n    background: var(--rule); flex: none;\n  }\n  body.live .tally { background: var(--tally); animation: breathe 1.4s ease-in-out infinite; }\n  @keyframes breathe { 50% { opacity: 0.25; } }\n\n  h1 {\n    font-family: 'Archivo Narrow', 'Helvetica Neue', sans-serif;\n    font-weight: 700; font-size: clamp(38px, 13vw, 58px);\n    line-height: 0.9; letter-spacing: -0.02em;\n    text-transform: uppercase;\n    margin: 10px 0 0;\n  }\n  .standfirst {\n    font-size: 14px; line-height: 1.45; color: var(--ink-soft);\n    margin: 12px 0 0; max-width: 34ch;\n  }\n\n  hr.rule {\n    border: 0; border-top: 1px solid var(--rule);\n    margin: 22px 0 0;\n  }\n\n  /* \u2500\u2500 transcript \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  .section-label {\n    font-family: 'IBM Plex Mono', monospace;\n    font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase;\n    color: var(--ink-soft);\n    margin: 18px 0 8px;\n  }\n\n  #transcript {\n    font-family: 'IBM Plex Mono', monospace;\n    font-size: 13px; line-height: 1.6;\n    max-height: 30vh; overflow-y: auto;\n    color: var(--ink);\n    word-break: break-word;\n  }\n  #transcript .interim { color: var(--ink-soft); }\n  #transcript:empty::after {\n    content: 'Nothing yet. Start listening, then play or wait for an ad.';\n    color: var(--ink-soft); font-family: 'IBM Plex Sans', sans-serif;\n    font-size: 13px;\n  }\n\n  /* \u2500\u2500 attribution cards \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  .card {\n    border: 1px solid var(--ink);\n    background: var(--paper-2);\n    margin: 14px 0 0;\n    animation: rise 260ms cubic-bezier(.2,.7,.3,1) both;\n  }\n  @keyframes rise { from { opacity: 0; transform: translateY(8px); } }\n\n  .card-head {\n    background: var(--ink); color: var(--paper);\n    padding: 9px 12px;\n    font-family: 'IBM Plex Mono', monospace;\n    font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase;\n    display: flex; justify-content: space-between; gap: 10px;\n  }\n  .card-body { padding: 14px 12px 16px; }\n\n  .tier { margin: 0 0 16px; }\n  .tier:last-child { margin-bottom: 0; }\n\n  .tier-label {\n    font-family: 'IBM Plex Mono', monospace;\n    font-size: 9px; letter-spacing: 0.16em; text-transform: uppercase;\n    display: inline-flex; align-items: center; gap: 6px;\n    padding: 3px 7px; margin-bottom: 8px;\n    border: 1px solid currentColor;\n  }\n  .tier-disclosed .tier-label { color: var(--ink); }\n  .tier-filed    .tier-label { color: var(--filed); }\n  .tier-inferred .tier-label { color: var(--inferred); }\n\n  .tier-disclosed .headline {\n    font-family: 'Archivo Narrow', sans-serif;\n    font-weight: 700; font-size: 24px; line-height: 1.1;\n    text-transform: uppercase; margin: 0;\n  }\n  .tier p { margin: 0; font-size: 14px; line-height: 1.5; }\n  .tier-inferred p { color: #4A4033; }\n\n  .meta {\n    font-family: 'IBM Plex Mono', monospace;\n    font-size: 11px; color: var(--ink-soft);\n    margin-top: 8px; line-height: 1.6;\n  }\n  .meta a { color: var(--filed); }\n\n  .donors { list-style: none; margin: 8px 0 0; padding: 0; }\n  .donors li {\n    display: flex; justify-content: space-between; gap: 12px;\n    font-family: 'IBM Plex Mono', monospace; font-size: 11.5px;\n    padding: 4px 0; border-bottom: 1px dotted var(--rule);\n  }\n  .donors li span:last-child { flex: none; color: var(--ink-soft); }\n\n  .claims { margin: 10px 0 0; padding-left: 18px; }\n  .claims li { font-size: 13.5px; line-height: 1.45; margin-bottom: 6px; }\n  .donors em { font-style: normal; color: var(--ink-soft); font-size: 10px; display: block; }\n  .claims em { font-style: normal; color: var(--ink-soft); font-size: 11.5px; display: block; margin-top: 2px; }\n  .nores { font-size: 13.5px; line-height: 1.45; }\n\n  .gap-note {\n    border-left: 2px solid var(--inferred);\n    padding-left: 10px; font-size: 12.5px; line-height: 1.5;\n    color: #4A4033;\n  }\n\n  .tier-matched .tier-label { color: var(--tally); }\n  .tier-matched .headline {\n    font-family: 'Archivo Narrow', sans-serif;\n    font-weight: 700; font-size: 22px; line-height: 1.1;\n    text-transform: uppercase; margin: 0 0 6px;\n  }\n\n  /* Where the snippet sits inside the spot \u2014 the thing fingerprinting\n     buys you that a disclaimer never could. */\n  .posbar {\n    position: relative; height: 16px; margin: 10px 0 6px;\n    border: 1px solid var(--rule); background: var(--paper);\n  }\n  .posbar i {\n    position: absolute; top: -1px; bottom: -1px; width: 2px;\n    background: var(--tally);\n  }\n  .posbar span {\n    position: absolute; right: 4px; top: 1px;\n    font-family: 'IBM Plex Mono', monospace; font-size: 9px;\n    color: var(--ink-soft);\n  }\n\n  .pending {\n    border: 1px dashed var(--inferred); background: transparent;\n  }\n  .pending .card-head { background: var(--inferred); }\n\n  .stance-grid {\n    display: grid; grid-template-columns: auto 1fr; gap: 4px 10px;\n    font-size: 14px; margin-top: 4px;\n  }\n  .stance-grid dt {\n    font-family: 'IBM Plex Mono', monospace; font-size: 10px;\n    letter-spacing: 0.1em; text-transform: uppercase;\n    color: var(--ink-soft); padding-top: 3px;\n  }\n  .stance-grid dd { margin: 0; font-weight: 500; }\n\n  /* \u2500\u2500 the slab: signature element \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  #slab {\n    position: fixed; left: 0; right: 0; bottom: 0;\n    height: calc(var(--slab-h) + env(safe-area-inset-bottom));\n    padding: 14px 16px calc(14px + env(safe-area-inset-bottom));\n    background: var(--ink); color: var(--paper);\n    display: flex; flex-direction: column; justify-content: space-between;\n    cursor: pointer; user-select: none;\n    border: 0; width: 100%; text-align: left;\n    font: inherit;\n  }\n  #slab:focus-visible { outline: 3px solid var(--tally); outline-offset: -3px; }\n\n  #slabLine {\n    font-family: 'Archivo Narrow', sans-serif;\n    font-weight: 700; font-size: 19px; line-height: 1.15;\n    text-transform: uppercase; letter-spacing: 0.01em;\n    min-height: 2.3em;\n  }\n  #slabLine .caret {\n    display: inline-block; width: 9px; height: 15px;\n    background: var(--paper); vertical-align: -2px; margin-left: 2px;\n  }\n  body.live #slabLine .caret { animation: blink 1s step-end infinite; }\n  @keyframes blink { 50% { opacity: 0; } }\n\n  #meter { display: flex; align-items: flex-end; gap: 2px; height: 22px; }\n  #meter i {\n    flex: 1; background: #3A4048; height: 2px;\n    transition: height 90ms linear, background 90ms linear;\n  }\n\n  .control {\n    display: inline-flex; align-items: center; gap: 8px;\n    color: var(--paper);\n  }\n  .glyph {\n    width: 26px; height: 26px; border-radius: 50%;\n    border: 1.5px solid var(--paper);\n    display: inline-flex; align-items: center; justify-content: center;\n    flex: none;\n  }\n  /* Play: a triangle drawn with borders. Stop: a square. No icon font, no\n     network dependency on the one control that has to work instantly. */\n  .glyph::before {\n    content: ''; display: block;\n    border-style: solid;\n    border-width: 6px 0 6px 9px;\n    border-color: transparent transparent transparent var(--paper);\n    margin-left: 3px;\n  }\n  body.live .glyph { border-color: var(--tally); background: var(--tally); }\n  body.live .glyph::before {\n    border: 0; width: 9px; height: 9px; background: var(--paper); margin: 0;\n  }\n  body.starting .glyph::before { animation: blink 0.6s step-end infinite; }\n\n  #slabFoot {\n    display: flex; justify-content: space-between; align-items: center;\n    font-family: 'IBM Plex Mono', monospace;\n    font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase;\n    color: #8B939C;\n  }\n  #slabAction { color: var(--paper); }\n\n  .toast {\n    position: fixed; left: 16px; right: 16px;\n    bottom: calc(var(--slab-h) + env(safe-area-inset-bottom) + 12px);\n    background: var(--tally); color: #fff;\n    font-size: 13px; line-height: 1.4; padding: 11px 13px;\n    animation: rise 200ms both;\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    *, *::before, *::after { animation: none !important; transition: none !important; }\n  }\n</style>\n</head>\n<body>\n\n<div class=\"eyebrow\"><span class=\"tally\"></span><span id=\"status\">Idle</span><span class=\"sep\">/</span><span id=\"locale\">Location pending</span></div>\n<h1>Who paid<br>for that?</h1>\n<p class=\"standfirst\">Point your phone at the ad. A few seconds from anywhere in the spot\nis enough \u2014 you don't need to catch the start or the disclaimer.</p>\n\n<hr class=\"rule\">\n\n<div class=\"section-label\">Findings</div>\n<div id=\"results\"></div>\n\n<button id=\"slab\" aria-live=\"polite\">\n  <div id=\"slabLine\">Tap to start listening<span class=\"caret\"></span></div>\n  <div id=\"meter\"></div>\n  <div id=\"slabFoot\">\n    <span id=\"slabMeta\">Ready</span>\n    <span class=\"control\"><span id=\"slabAction\">Start</span><span class=\"glyph\"></span></span>\n  </div>\n</button>\n\n<script>\nconst els = {\n  status: document.getElementById('status'),\n  locale: document.getElementById('locale'),\n  results: document.getElementById('results'),\n  slab: document.getElementById('slab'),\n  slabLine: document.getElementById('slabLine'),\n  slabMeta: document.getElementById('slabMeta'),\n  slabAction: document.getElementById('slabAction'),\n  meter: document.getElementById('meter'),\n};\n\nconst BARS = 40;\nfor (let i = 0; i < BARS; i++) els.meter.appendChild(document.createElement('i'));\nconst bars = [...els.meter.children];\n\nconst TAG_HASHES = 1;\nconst TAG_PCM = 2;\n\nlet ctx, stream, node, source, ws, worker, wakeLock;\nlet running = false;\nlet streamAudio = false;   // only true for ads the index doesn't recognise\nlet finalText = '';\n\n/* Fingerprints go up constantly \u2014 about 1KB/s. Raw audio goes up only when the\n   server says it has no idea what it's hearing. Most airings never trigger it. */\nfunction hashFrame(buf, frame) {\n  const src = new Int32Array(buf);\n  const out = new Int32Array(2 + src.length);\n  out[0] = TAG_HASHES;\n  out.set(src, 1);\n  out[out.length - 1] = frame;\n  return out.buffer;\n}\nfunction pcmFrame(pcm) {\n  const out = new Uint8Array(4 + pcm.byteLength);\n  new DataView(out.buffer).setInt32(0, TAG_PCM, true);\n  out.set(new Uint8Array(pcm), 4);\n  return out.buffer;\n}\n\n/* \u2500\u2500 slab copy \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\nfunction slab(text, caret = true) {\n  els.slabLine.innerHTML = escapeHtml(text) + (caret ? '<span class=\"caret\"></span>' : '');\n}\nfunction escapeHtml(s) {\n  return String(s).replace(/[&<>\"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]));\n}\nfunction toast(msg) {\n  document.querySelector('.toast')?.remove();\n  const t = document.createElement('div');\n  t.className = 'toast';\n  t.textContent = msg;\n  document.body.appendChild(t);\n  setTimeout(() => t.remove(), 6000);\n}\n\n/* \u2500\u2500 level meter \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\nlet meterHead = 0;\nfunction pushLevel(peak) {\n  const h = Math.max(2, Math.min(22, Math.round(Math.sqrt(peak) * 22)));\n  const bar = bars[meterHead % BARS];\n  bar.style.height = h + 'px';\n  bar.style.background = peak > 0.6 ? '#B33A22' : peak > 0.04 ? '#7E8891' : '#3A4048';\n  meterHead++;\n}\n\n/* \u2500\u2500 start / stop \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\nlet state = 'idle';   // idle | starting | live\n\nfunction setState(next, { line, meta, action } = {}) {\n  state = next;\n  document.body.classList.toggle('live', next === 'live');\n  document.body.classList.toggle('starting', next === 'starting');\n  els.slab.setAttribute('aria-label',\n    next === 'live' ? 'Stop listening' : 'Start listening');\n  if (line !== undefined) slab(line, next !== 'idle');\n  if (meta !== undefined) els.slabMeta.textContent = meta;\n  if (action !== undefined) els.slabAction.textContent = action;\n}\n\nels.slab.addEventListener('click', () => {\n  // Stop is honoured mid-startup too \u2014 otherwise a slow mic prompt leaves the\n  // button dead for a second, which reads as a broken app.\n  if (state === 'idle') start();\n  else stop('Stopped');\n});\n\n/* Location is requested once, on the first tap, and only ever leaves the phone\n   rounded to two decimal places \u2014 about a kilometre. That resolves a state,\n   which is all the server needs, and deliberately not enough to place someone\n   at an address. Declining costs you nothing but state-level narrowing. */\nlet locationAsked = false;\nfunction requestLocation() {\n  if (locationAsked || !navigator.geolocation) return;\n  locationAsked = true;\n  navigator.geolocation.getCurrentPosition(\n    pos => {\n      const lat = Math.round(pos.coords.latitude * 100) / 100;\n      const lon = Math.round(pos.coords.longitude * 100) / 100;\n      if (ws?.readyState === WebSocket.OPEN) {\n        ws.send(JSON.stringify({ type: 'hello', lat, lon }));\n      }\n    },\n    () => { els.locale.textContent = 'Location off'; },\n    { enableHighAccuracy: false, timeout: 8000, maximumAge: 600000 }\n  );\n}\n\n/* Pre-warm everything that doesn't need a user gesture, so the tap itself only\n   has to do getUserMedia. The socket and the fingerprint worker are the slow\n   parts and neither of them requires permission. */\nfunction prewarm() {\n  if (!worker) {\n    worker = new Worker('/fingerprint-worker.js', { type: 'module' });\n    worker.onmessage = ({ data }) => {\n      if (data.type === 'hashes' && ws?.readyState === WebSocket.OPEN) {\n        ws.send(hashFrame(data.buf, data.frame));\n      }\n    };\n  }\n  if (!ws || ws.readyState > WebSocket.OPEN) connect();\n}\nprewarm();\ndocument.addEventListener('visibilitychange', () => { if (!document.hidden) prewarm(); });\n\nasync function start() {\n  setState('starting', { line: 'Starting\u2026', meta: 'Waking the mic', action: '' });\n  // Create and resume the context synchronously inside the gesture. iOS will\n  // leave a context created after an await in 'suspended' with no error thrown.\n  try {\n    ctx = new (window.AudioContext || window.webkitAudioContext)();\n    await ctx.resume();\n  } catch (e) {\n    setState('idle', { line: 'Audio blocked', meta: 'Mic off', action: 'Retry' });\n    toast('Audio is blocked here. Open the page in Safari itself, not an in-app browser.');\n    return;\n  }\n\n  try {\n    stream = await navigator.mediaDevices.getUserMedia({\n      audio: {\n        channelCount: 1,\n        // Across-the-room TV capture: both of these are tuned for a face at\n        // 20cm and will gate out the thing we're trying to hear.\n        echoCancellation: false,\n        noiseSuppression: false,\n        autoGainControl: true,\n      }\n    });\n  } catch (e) {\n    const denied = e.name === 'NotAllowedError';\n    setState('idle', {\n      line: denied ? 'Microphone blocked' : 'Microphone unavailable',\n      meta: 'Mic off', action: 'Retry',\n    });\n    toast(denied\n      ? 'Allow the mic in Settings \u2192 Safari \u2192 Microphone, then reload.'\n      : 'No mic found: ' + e.name);\n    return;\n  }\n\n  // A call or another app can take the mic away mid-session.\n  stream.getAudioTracks()[0].addEventListener('ended', () => stop('Mic was taken'));\n\n  await ctx.audioWorklet.addModule('/pcm-processor.js');\n  source = ctx.createMediaStreamSource(stream);\n  node = new AudioWorkletNode(ctx, 'pcm-processor', {\n    processorOptions: { targetRate: 16000 }\n  });\n  worker.postMessage({ type: 'reset' });\n  liveCard = null;\n  if (ws?.readyState === WebSocket.OPEN) ws.send(JSON.stringify({ type: 'session_start' }));\n\n  node.port.onmessage = ({ data }) => {\n    pushLevel(data.peak);\n    // Copy for the socket before handing the buffer to the worker \u2014 the\n    // postMessage below transfers it and leaves data.pcm detached.\n    if (streamAudio && ws?.readyState === WebSocket.OPEN) ws.send(pcmFrame(data.pcm));\n    worker.postMessage({ type: 'audio', pcm: data.pcm }, [data.pcm]);\n  };\n  source.connect(node);\n  // Worklet has no output; connecting to destination keeps the graph alive on\n  // some Safari builds without producing sound (we post no output samples).\n  node.connect(ctx.destination);\n\n  prewarm();\n  requestLocation();\n  requestWakeLock();\n\n  running = true;\n  els.status.textContent = 'Listening';\n  setState('live', {\n    line: 'Listening\u2026',\n    meta: Math.round(ctx.sampleRate / 1000) + 'k \u2192 16k',\n    action: 'Stop',\n  });\n}\n\nfunction stop(reason) {\n  running = false;\n  streamAudio = false;\n  node?.port.close(); node?.disconnect(); source?.disconnect();\n  node = source = null;\n  // Cut the mic first and synchronously \u2014 the indicator in the status bar going\n  // dark is the only proof the user has that stop actually stopped.\n  stream?.getTracks().forEach(t => t.stop());\n  stream = null;\n  wakeLock?.release().catch(() => {});\n  wakeLock = null;\n  ctx?.close().catch(() => {});\n  ctx = null;\n  // Keep the worker and socket warm so the next tap starts instantly; just\n  // clear the fingerprinter's frame counter and rolling peaks.\n  worker?.postMessage({ type: 'reset' });\n  if (ws?.readyState === WebSocket.OPEN) ws.send(JSON.stringify({ type: 'session_stop' }));\n  finalText = '';\n\n  els.status.textContent = reason || 'Idle';\n  setState('idle', { line: 'Tap to start listening', meta: 'Ready', action: 'Start' });\n  bars.forEach(b => { b.style.height = '2px'; b.style.background = '#3A4048'; });\n}\n\n/* iOS suspends the mic when the screen locks or you switch apps. Say so. */\ndocument.addEventListener('visibilitychange', () => {\n  if (document.hidden && running) {\n    stop('Paused \u2014 iOS stops the mic in the background');\n    toast('iOS cuts microphone access when Safari is backgrounded. Tap to resume.');\n  }\n});\n\nasync function requestWakeLock() {\n  try { wakeLock = await navigator.wakeLock?.request('screen'); } catch {}\n}\n\n/* \u2500\u2500 transport \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\nfunction connect() {\n  const proto = location.protocol === 'https:' ? 'wss:' : 'ws:';\n  ws = new WebSocket(`${proto}//${location.host}/stream`);\n  ws.binaryType = 'arraybuffer';\n  ws.onmessage = e => handle(JSON.parse(e.data));\n  ws.onerror = () => toast('Lost the connection to the server.');\n  ws.onclose = () => {\n    if (running) stop('Disconnected');\n    // Reconnect while idle so the next tap doesn't wait on a handshake.\n    else if (!document.hidden) setTimeout(prewarm, 2000);\n  };\n}\n\nfunction handle(msg) {\n  if (msg.type === 'status') {\n    const label = { transcribing: 'Identifying', analyzing: 'Identifying',\n                    records: 'Pulling records', listening: 'Listening' }[msg.stage];\n    if (label) els.status.textContent = label;\n    return;\n  }\n  if (msg.type === 'located') { els.locale.textContent = msg.data.name; return; }\n\n  if (msg.type === 'subject') {\n    renderSubject(msg.data);\n    const d = msg.data;\n    slab(!d.isPoliticalAd ? \"Not a political ad\"\n       : d.promotes ? 'About ' + d.promotes\n       : d.attacks ? 'About ' + d.attacks\n       : d.issue ? 'About ' + d.issue : 'Political ad');\n    return;\n  }\n  if (msg.type === 'record') { renderRecord(msg.data); return; }\n  if (msg.type === 'stakes') { renderStakes(msg.data); return; }\n  if (msg.type === 'sponsor') { renderSponsor(msg.data); return; }\n\n  if (msg.type === 'match') {\n    const d = msg.data;\n    if (d.subject) renderSubject(d.subject);\n    if (d.promoted || d.attacked) renderRecord(d);\n    if (d.stakes) renderStakes(d.stakes);\n    if (d.funding) renderSponsor({ sponsor: d.sponsor, ...d.funding });\n    return;\n  }\n\n  if (msg.type === 'unknown') { slab('Listening for the subject'); return; }\n  if (msg.type === 'need_audio') { streamAudio = true; els.slabMeta.textContent = 'Identifying'; return; }\n  if (msg.type === 'stop_audio') { streamAudio = false; els.slabMeta.textContent = 'Known ad'; return; }\n  if (msg.type === 'fingerprint_only') {\n    streamAudio = false;\n    toast('Server has no GROQ_API_KEY, so it cannot identify unfamiliar ads.');\n    return;\n  }\n  if (msg.type === 'transcript' && msg.windows) {\n    els.slabMeta.textContent = `${msg.windows * 8}s heard`;\n    return;\n  }\n  if (msg.type === 'error') { toast(msg.message); els.status.textContent = 'Error'; return; }\n}\n\n/* \u2500\u2500 rendering \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\nfunction fmt(sec) {\n  return `${Math.floor(sec / 60)}:${String(Math.floor(sec % 60)).padStart(2, '0')}`;\n}\n\nfunction renderMatch(d) {\n  const card = document.createElement('article');\n  card.className = 'card' + (d.status === 'identified' ? '' : ' pending');\n\n  const pos = d.durationSec\n    ? `<div class=\"posbar\">\n         <i style=\"left:${Math.min(99, (d.positionSec / d.durationSec) * 100)}%\"></i>\n         <span>${fmt(d.positionSec)} of ${fmt(d.durationSec)}</span>\n       </div>`\n    : '';\n\n  const known = d.status === 'identified';\n  const body = known\n    ? `<p class=\"headline\">${escapeHtml(d.sponsor || 'Sponsor not recorded')}</p>\n       ${d.supports || d.opposes ? `<dl class=\"stance-grid\">\n          ${d.supports ? `<dt>For</dt><dd>${escapeHtml(d.supports)}</dd>` : ''}\n          ${d.opposes ? `<dt>Against</dt><dd>${escapeHtml(d.opposes)}</dd>` : ''}\n       </dl>` : ''}\n       <div class=\"meta\">\n         ${d.committeeId ? escapeHtml(d.committeeId) + ' \u00b7 ' : ''}\n         match confidence ${(d.confidence * 100).toFixed(0)}%\n         ${d.sourceUrl ? `<br><a href=\"${escapeHtml(d.sourceUrl)}\" target=\"_blank\" rel=\"noopener\">Source record</a>` : ''}\n       </div>`\n    : `<p class=\"headline\">Unidentified spot</p>\n       <p>Heard ${d.airings || 2} times${d.markets?.length ? ' in ' + escapeHtml(d.markets.join(', ')) : ''}.\n       Repetition is what makes it an ad \u2014 but nobody has caught its disclaimer yet.</p>\n       <div class=\"meta\">Keep listening through the end of the spot to name it.</div>`;\n\n  card.innerHTML = `\n    <div class=\"card-head\">\n      <span>Recognised by sound</span>\n      <span>${escapeHtml(d.race || (known ? '' : 'Pending'))}</span>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"tier tier-matched\">\n        <div class=\"tier-label\">${known ? 'Known ad' : 'Recurring, unidentified'}</div>\n        ${pos}\n        ${body}\n      </div>\n    </div>`;\n  els.results.prepend(card);\n}\n\nfunction renderStance(d) {\n  if (!d || (!d.supports && !d.opposes && !d.issue)) return;\n  const card = document.createElement('article');\n  card.className = 'card';\n  card.innerHTML = `\n    <div class=\"card-head\">\n      <span>From the ad's own words</span><span>${escapeHtml(d.race || '')}</span>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"tier tier-disclosed\">\n        <div class=\"tier-label\">Position</div>\n        <dl class=\"stance-grid\">\n          ${d.supports ? `<dt>For</dt><dd>${escapeHtml(d.supports)}</dd>` : ''}\n          ${d.opposes ? `<dt>Against</dt><dd>${escapeHtml(d.opposes)}</dd>` : ''}\n          ${d.issue ? `<dt>Issue</dt><dd>${escapeHtml(d.issue)}</dd>` : ''}\n          ${d.tone ? `<dt>Type</dt><dd>${escapeHtml(d.tone)}</dd>` : ''}\n          ${d.callToAction ? `<dt>Asks you to</dt><dd>${escapeHtml(d.callToAction)}</dd>` : ''}\n        </dl>\n        <div class=\"meta\">Read from the ad copy, not from filings. Says nothing about who paid.</div>\n      </div>\n    </div>`;\n  els.results.prepend(card);\n}\n\nlet liveCard = null;\nconst money = n => '$' + Number(n).toLocaleString('en-US', { maximumFractionDigits: 0 });\n\nfunction cardShell() {\n  const card = document.createElement('article');\n  card.className = 'card';\n  card.innerHTML = `<div class=\"card-head\"><span>${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span><span class=\"race\"></span></div><div class=\"card-body\"></div>`;\n  els.results.prepend(card);\n  return card;\n}\nfunction section(cls) {\n  if (!liveCard) liveCard = cardShell();\n  const body = liveCard.querySelector('.card-body');\n  let el = body.querySelector('.' + cls);\n  if (!el) { el = document.createElement('div'); el.className = cls; body.append(el); }\n  return el;\n}\n\nfunction renderSubject(d) {\n  if (!liveCard) liveCard = cardShell();\n  liveCard.querySelector('.race').textContent = d.office || d.issue || '';\n  const sec = section('sec-subject');\n  sec.className = 'tier tier-disclosed sec-subject';\n  sec.innerHTML = `\n    <div class=\"tier-label\">This ad is about</div>\n    <p class=\"headline\">${escapeHtml(d.promotes || d.attacks || d.issue || 'Unclear')}</p>\n    <dl class=\"stance-grid\">\n      ${d.promotes ? `<dt>Promotes</dt><dd>${escapeHtml(d.promotes)}</dd>` : ''}\n      ${d.attacks ? `<dt>Attacks</dt><dd>${escapeHtml(d.attacks)}</dd>` : ''}\n      ${d.issue ? `<dt>Issue</dt><dd>${escapeHtml(d.issue)}</dd>` : ''}\n    </dl>\n    <div class=\"meta\">Everything below comes from public records, not from the ad.</div>`;\n}\n\nfunction moneyBlock(p, role) {\n  if (!p) return '';\n  const m = p.money;\n  const donors = (m?.topContributors || []).map(x =>\n    `<li><span>${escapeHtml(x.name)}${x.employer ? ` <em>${escapeHtml(x.employer)}</em>` : ''}</span><span>${money(x.amount)}</span></li>`).join('');\n  return `\n    <div class=\"tier tier-filed\">\n      <div class=\"tier-label\">${role}</div>\n      <p class=\"headline\">${escapeHtml(p.name)}</p>\n      ${p.heardAs ? `<div class=\"meta\">Ad said \u201c${escapeHtml(p.heardAs)}\u201d \u2014 closest filing match</div>` : ''}\n      <dl class=\"stance-grid\">\n        ${p.party ? `<dt>Party</dt><dd>${escapeHtml(p.party)}</dd>` : ''}\n        ${p.office ? `<dt>Office</dt><dd>${escapeHtml(p.office)}${p.state ? ' \u2014 ' + escapeHtml(p.state) : ''}</dd>` : ''}\n        ${p.status ? `<dt>Status</dt><dd>${escapeHtml(p.status)}</dd>` : ''}\n        ${m?.receipts ? `<dt>Raised</dt><dd>${money(m.receipts)} this cycle</dd>` : ''}\n      </dl>\n      ${donors ? `<div class=\"meta\">Largest reported donors</div><ul class=\"donors\">${donors}</ul>` : ''}\n      <div class=\"meta\"><a href=\"${escapeHtml(p.sourceUrl)}\" target=\"_blank\" rel=\"noopener\">FEC record</a></div>\n    </div>`;\n}\n\nfunction trackBlock(t, subject, stateName) {\n  if (!t) return '';\n  if (!t.held) {\n    return `\n      <div class=\"tier tier-inferred\">\n        <div class=\"tier-label\">Track record</div>\n        <p>No officeholder matching <strong>${escapeHtml(t.name)}</strong> was found in federal\n        records${stateName ? ` or the ${escapeHtml(stateName)} legislature` : ''}. Either they have\n        not held office, or the name was misheard \u2014 proper nouns are the least reliable part of a\n        noisy transcript.</p>\n        <div class=\"meta\">If the name looks wrong, that's the transcription, not the candidate.</div>\n      </div>`;\n  }\n  const bills = (t.relevantBills || []).map(b => `\n    <li><strong>${escapeHtml(b.number)}</strong> \u2014 ${escapeHtml(b.title)}\n    ${b.status ? `<em>${escapeHtml(b.status)}</em>` : ''}</li>`).join('');\n  const where = t.level === 'state'\n    ? `${escapeHtml(t.role || 'state legislator')}${t.district ? `, District ${escapeHtml(t.district)}` : ''}`\n    : escapeHtml(t.chamber || 'Congress');\n  return `\n    <div class=\"tier tier-filed\">\n      <div class=\"tier-label\">Track record on this issue</div>\n      ${t.heardAs ? `<div class=\"meta\">Ad said \u201c${escapeHtml(t.heardAs)}\u201d \u2014 matched to the record below</div>` : ''}\n      <p><strong>${escapeHtml(t.name)}</strong> \u2014 ${where}${t.party ? `, ${escapeHtml(t.party)}` : ''}.\n      ${t.totalSponsored} bills sponsored.</p>\n      ${bills\n        ? `<div class=\"meta\">Sponsored legislation matching this issue</div><ul class=\"claims\">${bills}</ul>`\n        : `<p class=\"nores\">None of their sponsored bills match \u201c${escapeHtml(subject?.issue || 'this issue')}\u201d.\n           They may have voted on others' bills, which this does not yet check.</p>`}\n      <div class=\"meta\"><a href=\"${escapeHtml(t.sourceUrl)}\" target=\"_blank\" rel=\"noopener\">Congress.gov record</a></div>\n    </div>`;\n}\n\nfunction renderRecord(d) {\n  const sec = section('sec-record');\n  const html = trackBlock(d.track, d.subject, d.state)\n             + moneyBlock(d.promoted, 'Who funds the candidate this ad backs')\n             + moneyBlock(d.attacked, 'Who funds the candidate this ad attacks');\n  sec.innerHTML = html || `<div class=\"tier\"><div class=\"gap-note\">No candidate filings matched. This is likely a state, local, or ballot contest \u2014 the briefing below covers the measure itself.</div></div>`;\n}\n\nfunction renderStakes(d) {\n  const sec = section('sec-stakes');\n  const gains = (d.accruesTo || []).map(x =>\n    `<li><strong>${escapeHtml(x.group)}</strong> \u2014 ${escapeHtml(x.how)}${x.scale ? ` <em>${escapeHtml(x.scale)}</em>` : ''}</li>`).join('');\n  const loses = (d.paidForBy || []).map(x =>\n    `<li><strong>${escapeHtml(x.group)}</strong> \u2014 ${escapeHtml(x.how)}</li>`).join('');\n  sec.innerHTML = `\n    <div class=\"tier tier-disclosed\">\n      <div class=\"tier-label\">What the policy actually does</div>\n      <p>${escapeHtml(d.whatItIs)}</p>\n      ${d.mechanism ? `<div class=\"meta\">How it works</div><p>${escapeHtml(d.mechanism)}</p>` : ''}\n    </div>\n    ${d.unspecified ? `\n    <div class=\"tier tier-inferred\">\n      <div class=\"tier-label\">What the promise leaves out</div>\n      <p>${escapeHtml(d.unspecified)}</p>\n    </div>` : ''}\n    ${gains ? `<div class=\"tier tier-filed\"><div class=\"tier-label\">Who actually gets it</div><ul class=\"claims\">${gains}</ul></div>` : ''}\n    ${loses ? `<div class=\"tier tier-inferred\"><div class=\"tier-label\">Who pays for it</div><ul class=\"claims\">${loses}</ul></div>` : ''}\n    <div class=\"tier\">\n      <div class=\"tier-label\">The two cases</div>\n      <dl class=\"stance-grid\">\n        <dt>Supporters</dt><dd>${escapeHtml(d.supportersArgue || '\u2014')}</dd>\n        <dt>Opponents</dt><dd>${escapeHtml(d.opponentsArgue || '\u2014')}</dd>\n      </dl>\n    </div>\n    ${d.trackRecordNote ? `<div class=\"tier\"><div class=\"tier-label\">Worth checking</div><p>${escapeHtml(d.trackRecordNote)}</p></div>` : ''}\n    <div class=\"tier tier-inferred\">\n      <div class=\"tier-label\">Genuinely contested</div>\n      <p>${escapeHtml(d.disputed || 'Not established.')}</p>\n      <div class=\"meta\">This section is written by a language model, not read from filings. Treat it as a starting point.</div>\n    </div>`;\n}\n\nfunction renderSponsor(d) {\n  const sec = section('sec-sponsor');\n  const f = d.filed;\n  const donors = (f?.topContributors || []).map(x =>\n    `<li><span>${escapeHtml(x.name)}</span><span>${money(x.amount)}</span></li>`).join('');\n  sec.innerHTML = `\n    <div class=\"tier tier-disclosed\">\n      <div class=\"tier-label\">Who paid for this spot</div>\n      <p class=\"headline\">${escapeHtml(d.sponsor || 'Not disclosed in what was heard')}</p>\n      ${f ? `<p>${escapeHtml(f.summary)}</p>${donors ? `<ul class=\"donors\">${donors}</ul>` : ''}\n        <div class=\"meta\">${escapeHtml(f.committeeId || '')}${f.receipts ? ' \u00b7 ' + money(f.receipts) + ' raised' : ''}\n        ${f.sourceUrl ? `<br><a href=\"${escapeHtml(f.sourceUrl)}\" target=\"_blank\" rel=\"noopener\">FEC committee filing</a>` : ''}</div>` : ''}\n      ${d.coverageGap ? `<div class=\"gap-note\" style=\"margin-top:10px\">${escapeHtml(d.coverageGap)}</div>` : ''}\n      ${d.stateSource ? `<div class=\"meta\"><a href=\"${escapeHtml(d.stateSource.finance)}\" target=\"_blank\" rel=\"noopener\">${escapeHtml(d.stateSource.state)} disclosure registry</a></div>` : ''}\n    </div>`;\n}\n\n/* Warn early rather than failing silently on the two common setup mistakes. */\nif (!navigator.mediaDevices?.getUserMedia) {\n  setState('idle', { line: 'Needs HTTPS', meta: 'Unavailable', action: '' });\n  toast('Microphone access requires https:// \u2014 a tunnel like ngrok works for testing.');\n}\n</script>\n</body>\n</html>\n", "pcm-processor.js": "/**\n * Runs on the audio thread. Receives 128-sample blocks at the hardware rate\n * (48000 on iOS), decimates to 16000, converts to Int16, and posts ~100ms\n * buffers back to the main thread as transferable ArrayBuffers.\n *\n * Decimation here is a box-filter average over each source window. It is not a\n * proper anti-aliasing filter, but speech energy sits well below 8kHz so the\n * aliasing that survives is inaudible to an STT model. If you later care about\n * music or fingerprinting, replace this with a windowed-sinc.\n */\nclass PCMProcessor extends AudioWorkletProcessor {\n  constructor(options) {\n    super();\n    this.targetRate = options.processorOptions.targetRate || 16000;\n    this.ratio = sampleRate / this.targetRate; // `sampleRate` is a worklet global\n    this.chunkSamples = Math.round(this.targetRate * 0.1); // 100ms\n    this.buffer = new Int16Array(this.chunkSamples);\n    this.written = 0;\n    this.offset = 0; // fractional read position into the incoming block\n    this.peak = 0;\n  }\n\n  process(inputs) {\n    const channel = inputs[0]?.[0];\n    if (!channel) return true;\n\n    while (this.offset < channel.length) {\n      const start = Math.floor(this.offset);\n      const end = Math.min(Math.floor(this.offset + this.ratio), channel.length);\n\n      let sum = 0;\n      for (let i = start; i < end; i++) sum += channel[i];\n      const sample = end > start ? sum / (end - start) : 0;\n\n      const abs = Math.abs(sample);\n      if (abs > this.peak) this.peak = abs;\n\n      // Clamp before scaling; iOS AGC can briefly push past 1.0.\n      const clamped = Math.max(-1, Math.min(1, sample));\n      this.buffer[this.written++] = clamped < 0 ? clamped * 0x8000 : clamped * 0x7fff;\n\n      this.offset += this.ratio;\n\n      if (this.written === this.chunkSamples) {\n        const out = this.buffer.buffer;\n        this.port.postMessage({ pcm: out, peak: this.peak }, [out]);\n        this.buffer = new Int16Array(this.chunkSamples);\n        this.written = 0;\n        this.peak = 0;\n      }\n    }\n\n    this.offset -= channel.length;\n    return true;\n  }\n}\n\nregisterProcessor('pcm-processor', PCMProcessor);\n", "fingerprint-core.js": "/**\n * Landmark (\"constellation\") fingerprinting, Wang/Shazam-style.\n *\n * Shared by the browser worker and the server-side ingest job. The index and\n * the query MUST come from identical code \u2014 a one-bin difference in peak\n * picking silently destroys recall, and it fails in the worst way: quietly,\n * with plausible-looking near-misses.\n *\n * Why this algorithm for this problem:\n *   - It is inherently a PARTIAL matcher. Hashes are local time-frequency\n *     events, so 3-5 seconds from anywhere inside an ad identifies it. There\n *     is no need to hear the start, the end, or the disclaimer.\n *   - It survives a phone mic across a room: peaks are picked per frequency\n *     band, so room EQ, TV speaker rolloff, and broadband noise change the\n *     magnitudes but not which bin is locally strongest.\n *   - It is cheap enough to run on the client. At 16kHz with a 512-sample hop\n *     that is ~31 FFTs of size 1024 per second. Doing it on-device means we\n *     ship ~1KB/s of hashes instead of 32KB/s of PCM \u2014 a real difference on\n *     cellular \u2014 and raw room audio never leaves the phone.\n *\n * Known limitation to design around: this is not robust to time-scaling.\n * Broadcasters routinely compress spots 1-3% to fit a pod. The fix lives on\n * the index side; see ingest.js, which stores stretched variants.\n */\n\nexport const SAMPLE_RATE = 16000;\nexport const FFT_SIZE = 1024;\nexport const HOP = 512;                       // ~32ms frames\nexport const FRAMES_PER_SEC = SAMPLE_RATE / HOP;\n\n// Logarithmic bands over 0-4kHz, where broadcast speech and music beds sit.\n// One peak per band per frame holds density steady whether the ad is a dry\n// voiceover or a full music mix.\nconst BANDS = [[2, 10], [10, 20], [20, 40], [40, 80], [80, 160], [160, 256]];\n\nexport const DEFAULTS = {\n  fanOut: 8,\n  minDt: 1,\n  maxDt: 40,        // ~1.3s pairing window\n  decay: 0.97,      // threshold half-life ~23 frames (0.7s)\n  bands: BANDS,\n};\n\n/* \u2500\u2500 iterative radix-2 FFT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\nconst cosT = new Float32Array(FFT_SIZE / 2);\nconst sinT = new Float32Array(FFT_SIZE / 2);\nfor (let i = 0; i < FFT_SIZE / 2; i++) {\n  cosT[i] = Math.cos((-2 * Math.PI * i) / FFT_SIZE);\n  sinT[i] = Math.sin((-2 * Math.PI * i) / FFT_SIZE);\n}\nconst rev = new Uint16Array(FFT_SIZE);\n{\n  const bits = Math.log2(FFT_SIZE);\n  for (let i = 0; i < FFT_SIZE; i++) {\n    let r = 0;\n    for (let b = 0; b < bits; b++) r |= ((i >> b) & 1) << (bits - 1 - b);\n    rev[i] = r;\n  }\n}\nconst hann = new Float32Array(FFT_SIZE);\nfor (let i = 0; i < FFT_SIZE; i++) {\n  hann[i] = 0.5 - 0.5 * Math.cos((2 * Math.PI * i) / (FFT_SIZE - 1));\n}\n\n/** 9 bits anchor bin | 9 bits target bin | 10 bits frame delta -> 28-bit int. */\nexport const packHash = (f1, f2, dt) =>\n  ((f1 & 0x1ff) << 19) | ((f2 & 0x1ff) << 10) | (dt & 0x3ff);\n\nexport class Fingerprinter {\n  constructor(opts = {}) {\n    this.cfg = { ...DEFAULTS, ...opts };\n    this.re = new Float32Array(FFT_SIZE);\n    this.im = new Float32Array(FFT_SIZE);\n    this.mag = new Float32Array(FFT_SIZE / 2);\n    this.window = new Float32Array(FFT_SIZE);\n    this.thresholds = new Float32Array(this.cfg.bands.length);\n    this.recentPeaks = [];\n    this.filled = 0;\n    this.frame = 0;\n  }\n\n  reset() {\n    this.filled = 0;\n    this.frame = 0;\n    this.recentPeaks.length = 0;\n    this.thresholds.fill(0);\n  }\n\n  _spectrum() {\n    const { re, im, mag, window } = this;\n    for (let i = 0; i < FFT_SIZE; i++) {\n      re[rev[i]] = window[i] * hann[i];\n      im[rev[i]] = 0;\n    }\n    for (let size = 2; size <= FFT_SIZE; size <<= 1) {\n      const half = size >> 1;\n      const step = FFT_SIZE / size;\n      for (let i = 0; i < FFT_SIZE; i += size) {\n        for (let j = i, k = 0; j < i + half; j++, k += step) {\n          const tre = re[j + half] * cosT[k] - im[j + half] * sinT[k];\n          const tim = re[j + half] * sinT[k] + im[j + half] * cosT[k];\n          re[j + half] = re[j] - tre;\n          im[j + half] = im[j] - tim;\n          re[j] += tre;\n          im[j] += tim;\n        }\n      }\n    }\n    for (let i = 0; i < FFT_SIZE / 2; i++) {\n      mag[i] = Math.sqrt(re[i] * re[i] + im[i] * im[i]);\n    }\n    return mag;\n  }\n\n  _peaks(spec) {\n    const { bands, decay } = this.cfg;\n    const out = [];\n    for (let b = 0; b < bands.length; b++) {\n      const [lo, hi] = bands[b];\n      let best = -1, bestVal = 0;\n      for (let i = lo; i < hi; i++) {\n        if (spec[i] > bestVal) { bestVal = spec[i]; best = i; }\n      }\n      // The threshold always decays, whether or not this frame emitted. A\n      // gate that only relaxes on failure latches after one loud transient and\n      // starves the rest of the spot of peaks.\n      this.thresholds[b] *= decay;\n      if (best >= 0 && bestVal > this.thresholds[b]) {\n        out.push({ frame: this.frame, bin: best });\n        this.thresholds[b] = bestVal;\n      }\n    }\n    return out;\n  }\n\n  _pair(peaks) {\n    const { fanOut, minDt, maxDt } = this.cfg;\n    const pairs = [];\n    for (const anchor of peaks) {\n      let fanned = 0;\n      // Pair against the most recent targets first: nearby peaks are the ones\n      // most likely to survive together in a noisy capture.\n      for (let i = this.recentPeaks.length - 1; i >= 0; i--) {\n        const target = this.recentPeaks[i];\n        const dt = anchor.frame - target.frame;\n        if (dt < minDt) continue;\n        if (dt > maxDt) break;\n        pairs.push(packHash(target.bin, anchor.bin, dt), target.frame);\n        if (++fanned >= fanOut) break;\n      }\n    }\n    this.recentPeaks.push(...peaks);\n    while (this.recentPeaks.length && this.frame - this.recentPeaks[0].frame > maxDt) {\n      this.recentPeaks.shift();\n    }\n    return pairs;\n  }\n\n  /**\n   * Feed audio. Accepts Int16Array (from the mic worklet) or Float32Array\n   * (from a decoded reference file).\n   * @returns {number[]} interleaved [hash, frame, hash, frame, ...]\n   */\n  push(samples) {\n    const float = samples instanceof Float32Array;\n    const out = [];\n    for (let i = 0; i < samples.length; i++) {\n      this.window[this.filled++] = float ? samples[i] : samples[i] / 32768;\n      if (this.filled < FFT_SIZE) continue;\n\n      const pairs = this._pair(this._peaks(this._spectrum()));\n      for (let k = 0; k < pairs.length; k++) out.push(pairs[k]);\n      this.frame++;\n\n      this.window.copyWithin(0, HOP);\n      this.filled = FFT_SIZE - HOP;\n    }\n    return out;\n  }\n}\n\n/** Convenience for offline use: fingerprint a whole buffer at once. */\nexport function fingerprintBuffer(samples, opts) {\n  const fp = new Fingerprinter(opts);\n  return Int32Array.from(fp.push(samples));\n}\n", "fingerprint-worker.js": "/**\n * Module worker. Keeps the FFT off both the audio thread (where it could cause\n * dropouts) and the main thread (where it would jank the meter).\n *\n * Requires module-worker support: Safari 15+. We already need 14.5 for\n * AudioWorklet, so this does not move the floor much.\n */\nimport { Fingerprinter, FRAMES_PER_SEC } from './fingerprint-core.js';\n\nconst fp = new Fingerprinter();\nlet pending = [];\nlet lastFlush = 0;\n\nself.onmessage = ({ data }) => {\n  if (data.type === 'reset') {\n    fp.reset();\n    pending = [];\n    lastFlush = 0;\n    return;\n  }\n\n  const chunk = fp.push(new Int16Array(data.pcm));\n  for (let i = 0; i < chunk.length; i++) pending.push(chunk[i]);\n\n  // Batch to ~2 packets/sec. Matching needs a few seconds of hashes regardless,\n  // so chattier framing buys nothing and costs radio wakeups.\n  if (pending.length && fp.frame - lastFlush >= FRAMES_PER_SEC / 2) {\n    const buf = Int32Array.from(pending).buffer;\n    self.postMessage({ type: 'hashes', buf, frame: fp.frame }, [buf]);\n    pending = [];\n    lastFlush = fp.frame;\n  }\n};\n"};

/**
 * Landmark ("constellation") fingerprinting, Wang/Shazam-style.
 *
 * Shared by the browser worker and the server-side ingest job. The index and
 * the query MUST come from identical code — a one-bin difference in peak
 * picking silently destroys recall, and it fails in the worst way: quietly,
 * with plausible-looking near-misses.
 *
 * Why this algorithm for this problem:
 *   - It is inherently a PARTIAL matcher. Hashes are local time-frequency
 *     events, so 3-5 seconds from anywhere inside an ad identifies it. There
 *     is no need to hear the start, the end, or the disclaimer.
 *   - It survives a phone mic across a room: peaks are picked per frequency
 *     band, so room EQ, TV speaker rolloff, and broadband noise change the
 *     magnitudes but not which bin is locally strongest.
 *   - It is cheap enough to run on the client. At 16kHz with a 512-sample hop
 *     that is ~31 FFTs of size 1024 per second. Doing it on-device means we
 *     ship ~1KB/s of hashes instead of 32KB/s of PCM — a real difference on
 *     cellular — and raw room audio never leaves the phone.
 *
 * Known limitation to design around: this is not robust to time-scaling.
 * Broadcasters routinely compress spots 1-3% to fit a pod. The fix lives on
 * the index side; see ingest.js, which stores stretched variants.
 */

const SAMPLE_RATE = 16000;
const FFT_SIZE = 1024;
const HOP = 512;                       // ~32ms frames
const FRAMES_PER_SEC = SAMPLE_RATE / HOP;

// Logarithmic bands over 0-4kHz, where broadcast speech and music beds sit.
// One peak per band per frame holds density steady whether the ad is a dry
// voiceover or a full music mix.
const BANDS = [[2, 10], [10, 20], [20, 40], [40, 80], [80, 160], [160, 256]];

const DEFAULTS = {
  fanOut: 8,
  minDt: 1,
  maxDt: 40,        // ~1.3s pairing window
  decay: 0.97,      // threshold half-life ~23 frames (0.7s)
  bands: BANDS,
};

/* ── iterative radix-2 FFT ─────────────────────────────────── */
const cosT = new Float32Array(FFT_SIZE / 2);
const sinT = new Float32Array(FFT_SIZE / 2);
for (let i = 0; i < FFT_SIZE / 2; i++) {
  cosT[i] = Math.cos((-2 * Math.PI * i) / FFT_SIZE);
  sinT[i] = Math.sin((-2 * Math.PI * i) / FFT_SIZE);
}
const rev = new Uint16Array(FFT_SIZE);
{
  const bits = Math.log2(FFT_SIZE);
  for (let i = 0; i < FFT_SIZE; i++) {
    let r = 0;
    for (let b = 0; b < bits; b++) r |= ((i >> b) & 1) << (bits - 1 - b);
    rev[i] = r;
  }
}
const hann = new Float32Array(FFT_SIZE);
for (let i = 0; i < FFT_SIZE; i++) {
  hann[i] = 0.5 - 0.5 * Math.cos((2 * Math.PI * i) / (FFT_SIZE - 1));
}

/** 9 bits anchor bin | 9 bits target bin | 10 bits frame delta -> 28-bit int. */
const packHash = (f1, f2, dt) =>
  ((f1 & 0x1ff) << 19) | ((f2 & 0x1ff) << 10) | (dt & 0x3ff);

class Fingerprinter {
  constructor(opts = {}) {
    this.cfg = { ...DEFAULTS, ...opts };
    this.re = new Float32Array(FFT_SIZE);
    this.im = new Float32Array(FFT_SIZE);
    this.mag = new Float32Array(FFT_SIZE / 2);
    this.window = new Float32Array(FFT_SIZE);
    this.thresholds = new Float32Array(this.cfg.bands.length);
    this.recentPeaks = [];
    this.filled = 0;
    this.frame = 0;
  }

  reset() {
    this.filled = 0;
    this.frame = 0;
    this.recentPeaks.length = 0;
    this.thresholds.fill(0);
  }

  _spectrum() {
    const { re, im, mag, window } = this;
    for (let i = 0; i < FFT_SIZE; i++) {
      re[rev[i]] = window[i] * hann[i];
      im[rev[i]] = 0;
    }
    for (let size = 2; size <= FFT_SIZE; size <<= 1) {
      const half = size >> 1;
      const step = FFT_SIZE / size;
      for (let i = 0; i < FFT_SIZE; i += size) {
        for (let j = i, k = 0; j < i + half; j++, k += step) {
          const tre = re[j + half] * cosT[k] - im[j + half] * sinT[k];
          const tim = re[j + half] * sinT[k] + im[j + half] * cosT[k];
          re[j + half] = re[j] - tre;
          im[j + half] = im[j] - tim;
          re[j] += tre;
          im[j] += tim;
        }
      }
    }
    for (let i = 0; i < FFT_SIZE / 2; i++) {
      mag[i] = Math.sqrt(re[i] * re[i] + im[i] * im[i]);
    }
    return mag;
  }

  _peaks(spec) {
    const { bands, decay } = this.cfg;
    const out = [];
    for (let b = 0; b < bands.length; b++) {
      const [lo, hi] = bands[b];
      let best = -1, bestVal = 0;
      for (let i = lo; i < hi; i++) {
        if (spec[i] > bestVal) { bestVal = spec[i]; best = i; }
      }
      // The threshold always decays, whether or not this frame emitted. A
      // gate that only relaxes on failure latches after one loud transient and
      // starves the rest of the spot of peaks.
      this.thresholds[b] *= decay;
      if (best >= 0 && bestVal > this.thresholds[b]) {
        out.push({ frame: this.frame, bin: best });
        this.thresholds[b] = bestVal;
      }
    }
    return out;
  }

  _pair(peaks) {
    const { fanOut, minDt, maxDt } = this.cfg;
    const pairs = [];
    for (const anchor of peaks) {
      let fanned = 0;
      // Pair against the most recent targets first: nearby peaks are the ones
      // most likely to survive together in a noisy capture.
      for (let i = this.recentPeaks.length - 1; i >= 0; i--) {
        const target = this.recentPeaks[i];
        const dt = anchor.frame - target.frame;
        if (dt < minDt) continue;
        if (dt > maxDt) break;
        pairs.push(packHash(target.bin, anchor.bin, dt), target.frame);
        if (++fanned >= fanOut) break;
      }
    }
    this.recentPeaks.push(...peaks);
    while (this.recentPeaks.length && this.frame - this.recentPeaks[0].frame > maxDt) {
      this.recentPeaks.shift();
    }
    return pairs;
  }

  /**
   * Feed audio. Accepts Int16Array (from the mic worklet) or Float32Array
   * (from a decoded reference file).
   * @returns {number[]} interleaved [hash, frame, hash, frame, ...]
   */
  push(samples) {
    const float = samples instanceof Float32Array;
    const out = [];
    for (let i = 0; i < samples.length; i++) {
      this.window[this.filled++] = float ? samples[i] : samples[i] / 32768;
      if (this.filled < FFT_SIZE) continue;

      const pairs = this._pair(this._peaks(this._spectrum()));
      for (let k = 0; k < pairs.length; k++) out.push(pairs[k]);
      this.frame++;

      this.window.copyWithin(0, HOP);
      this.filled = FFT_SIZE - HOP;
    }
    return out;
  }
}

/** Convenience for offline use: fingerprint a whole buffer at once. */
function fingerprintBuffer(samples, opts) {
  const fp = new Fingerprinter(opts);
  return Int32Array.from(fp.push(samples));
}

/**
 * Fingerprint index + matcher.
 *
 * Matching is offset-histogram voting. A handful of hashes will collide with
 * any track by chance, but only the true track has hashes that all agree on
 * the SAME time offset between query and reference. That agreement is the
 * signal; raw hash overlap is not.
 *
 * Because the offset also tells you where inside the reference you are, a
 * match answers "which ad" and "how far in" at once — which is what makes a
 * mid-ad snippet sufficient.
 */

const MIN_ALIGNED = 12;      // aligned hashes required to call a match
const AMBIGUITY_RATIO = 2.5; // winner must beat runner-up by this much

class FingerprintIndex {
  constructor() {
    this.postings = new Map(); // hash -> [trackId, frame, trackId, frame, ...]
    this.tracks = new Map();   // trackId -> metadata
  }

  addTrack(trackId, meta, hashes) {
    this.tracks.set(trackId, { ...meta, hashCount: hashes.length / 2 });
    for (let i = 0; i < hashes.length; i += 2) {
      const h = hashes[i];
      let list = this.postings.get(h);
      if (!list) this.postings.set(h, (list = []));
      // Cap posting lists. A hash that appears in thousands of tracks is a
      // silence or tone artifact and carries no discriminative information;
      // keeping it only costs lookup time.
      if (list.length < 2000) list.push(trackId, hashes[i + 1]);
    }
  }

  removeTrack(trackId) {
    this.tracks.delete(trackId);
    for (const [h, list] of this.postings) {
      for (let i = list.length - 2; i >= 0; i -= 2) {
        if (list[i] === trackId) list.splice(i, 2);
      }
      if (!list.length) this.postings.delete(h);
    }
  }

  /**
   * @param {Int32Array} query  interleaved [hash, frame, hash, frame, ...]
   * @returns best match or null
   */
  match(query) {
    const votes = new Map(); // trackId -> Map<offset, count>

    for (let i = 0; i < query.length; i += 2) {
      const list = this.postings.get(query[i]);
      if (!list) continue;
      const qt = query[i + 1];
      for (let j = 0; j < list.length; j += 2) {
        const trackId = list[j];
        const offset = list[j + 1] - qt;
        let bins = votes.get(trackId);
        if (!bins) votes.set(trackId, (bins = new Map()));
        bins.set(offset, (bins.get(offset) || 0) + 1);
      }
    }

    const scored = [];
    for (const [trackId, bins] of votes) {
      let best = 0, bestOffset = 0;
      for (const [offset, count] of bins) {
        // Allow ±1 frame of jitter: FFT frames rarely land in phase between
        // the reference and a live capture.
        const smoothed = count + (bins.get(offset - 1) || 0) + (bins.get(offset + 1) || 0);
        if (smoothed > best) { best = smoothed; bestOffset = offset; }
      }
      scored.push({ trackId, aligned: best, offset: bestOffset });
    }

    scored.sort((a, b) => b.aligned - a.aligned);
    const top = scored[0];
    if (!top || top.aligned < MIN_ALIGNED) return null;
    if (scored[1] && top.aligned < scored[1].aligned * AMBIGUITY_RATIO) return null;

    const meta = this.tracks.get(top.trackId);
    return {
      trackId: top.trackId,
      meta,
      aligned: top.aligned,
      // Where the snippet sits inside the reference spot.
      positionSec: Math.max(0, top.offset / FRAMES_PER_SEC),
      durationSec: meta?.durationSec ?? null,
      confidence: Math.min(0.99, top.aligned / 40),
    };
  }
}

/* ────────────────────────────────────────────────────────────
   Per-connection matching session.

   Keeps a rolling window of query hashes and re-runs matching as
   audio arrives, so a match fires as soon as enough evidence
   exists rather than waiting for a fixed interval.
   ──────────────────────────────────────────────────────────── */

class MatchSession {
  constructor(index, { onMatch, onUnknown, windowSec = 12, unknownAfterSec = 10 }) {
    this.index = index;
    this.onMatch = onMatch;
    this.onUnknown = onUnknown;
    this.windowFrames = windowSec * FRAMES_PER_SEC;
    this.unknownAfterFrames = unknownAfterSec * FRAMES_PER_SEC;
    this.buffer = [];
    this.lastFrame = 0;
    this.matched = null;
    this.unknownFired = false;
  }

  /** Called when the client starts a new listening session. Frame numbers
   *  restart from zero, so stale hashes would never age out of the window. */
  reset() {
    this.buffer = [];
    this.lastFrame = 0;
    this.matched = null;
    this.unknownFired = false;
  }

  push(hashes, frame) {
    this.lastFrame = frame;
    for (let i = 0; i < hashes.length; i += 2) this.buffer.push(hashes[i], hashes[i + 1]);

    // Drop hashes older than the window so a match from a previous spot in the
    // ad break doesn't linger into the next one.
    const cutoff = frame - this.windowFrames;
    let drop = 0;
    while (drop < this.buffer.length && this.buffer[drop + 1] < cutoff) drop += 2;
    if (drop) this.buffer.splice(0, drop);

    if (this.buffer.length < MIN_ALIGNED * 2) return;

    const hit = this.index.match(Int32Array.from(this.buffer));
    if (hit && hit.trackId !== this.matched) {
      this.matched = hit.trackId;
      this.unknownFired = false;
      this.onMatch(hit);
      return;
    }

    if (!hit && !this.unknownFired && this.buffer.length / 2 > this.unknownAfterFrames / 4) {
      this.unknownFired = true;
      this.matched = null;
      // Nothing in the index sounds like this. Hand it off so we can start
      // transcribing and, if it recurs, learn it.
      this.onUnknown(Int32Array.from(this.buffer));
    }
  }
}

/* ────────────────────────────────────────────────────────────
   Unknown-ad clustering.

   The key observation: repetition is what makes something an ad.
   We do not need to know who paid for a spot to know it is a spot —
   we only need to see the same fingerprint recur. So unmatched
   captures are pooled and matched against each other. Once a
   cluster has aired more than once it is promoted into the live
   index as a pending track, and every later partial hit lands on
   it. When some user eventually catches a full airing with its
   disclaimer, the attribution is written back onto the cluster and
   every earlier sighting is retroactively explained.
   ──────────────────────────────────────────────────────────── */

class UnknownPool {
  constructor(index, { promoteAfter = 2, maxCandidates = 500 } = {}) {
    this.index = index;
    this.promoteAfter = promoteAfter;
    this.maxCandidates = maxCandidates;
    this.candidates = [];
    this.seq = 0;
  }

  submit(hashes, context = {}) {
    // Does this look like something we've already banked but not yet promoted?
    const scratch = new FingerprintIndex();
    this.candidates.forEach((c, i) => scratch.addTrack(i, {}, c.hashes));
    const hit = scratch.match(hashes);

    if (hit) {
      const c = this.candidates[hit.trackId];
      c.airings.push({ at: Date.now(), ...context });
      if (c.airings.length >= this.promoteAfter && !c.promoted) {
        c.promoted = `pending:${++this.seq}`;
        this.index.addTrack(c.promoted, {
          status: 'unidentified',
          airings: c.airings.length,
          firstHeard: c.airings[0].at,
          markets: [...new Set(c.airings.map(a => a.market).filter(Boolean))],
        }, c.hashes);
      }
      return c;
    }

    const c = { hashes, airings: [{ at: Date.now(), ...context }], promoted: null };
    this.candidates.push(c);
    if (this.candidates.length > this.maxCandidates) this.candidates.shift();
    return c;
  }

  /** Called when a session finally hears a disclaimer for a known track. */
  label(trackId, attribution) {
    const meta = this.index.tracks.get(trackId);
    if (!meta) return false;
    Object.assign(meta, {
      status: 'identified',
      attribution,
      identifiedAt: Date.now(),
    });
    return true;
  }
}


/**
 * STT adapter interface:
 *   send(int16Buffer)  — push audio
 *   close()            — flush and disconnect
 *   onTranscript(cb)   — cb({ text, isFinal })
 *
 * Deepgram is implemented here because its realtime endpoint takes raw
 * linear16 directly, which is exactly what the AudioWorklet produces.
 * AssemblyAI's realtime API is a near drop-in (same shape, different query
 * params). Whisper has no streaming endpoint — if you swap it in you'll need
 * to buffer ~5s windows, wrap each in a WAV header, and POST them, accepting
 * that word-boundary errors at window edges get worse.
 */
function createDeepgramStream({ apiKey, onTranscript, onError }) {
  const params = new URLSearchParams({
    encoding: 'linear16',
    sample_rate: '16000',
    channels: '1',
    model: 'nova-3',
    language: 'en-US',
    punctuate: 'true',
    smart_format: 'true',
    interim_results: 'true',
    // Disclaimers are read fast at the tail of an ad and often butt up against
    // the next spot. Short endpointing keeps segments from merging.
    endpointing: '400',
  });

  const socket = new WebSocket(
    `wss://api.deepgram.com/v1/listen?${params}`,
    { headers: { Authorization: `Token ${apiKey}` } }
  );

  const backlog = [];
  let open = false;

  socket.on('open', () => {
    open = true;
    while (backlog.length) socket.send(backlog.shift());
  });

  socket.on('message', raw => {
    let msg;
    try { msg = JSON.parse(raw); } catch { return; }
    const text = msg.channel?.alternatives?.[0]?.transcript;
    if (text) onTranscript({ text, isFinal: Boolean(msg.is_final) });
  });

  socket.on('error', err => onError?.(err));

  return {
    send(chunk) {
      if (open && socket.readyState === WebSocket.OPEN) socket.send(chunk);
      // Audio arrives before the upstream socket finishes its handshake.
      // Cap the backlog so a dead upstream can't grow memory without bound.
      else if (backlog.length < 100) backlog.push(chunk);
    },
    close() {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'CloseStream' }));
      }
      socket.close();
    },
  };
}

/* ────────────────────────────────────────────────────────────
   Groq Whisper adapter.

   Whisper has no streaming endpoint, so this buffers audio and
   posts fixed windows. That is a worse fit for live capture than
   Deepgram — but it runs on a free tier with no card, and this
   path only ever handles ads the fingerprint index doesn't know,
   which is a shrinking minority once the index starts learning.

   Two details that matter:
   - Groq bills a 10s minimum per request, so windows below that
     are wasted quota.
   - Windows overlap by OVERLAP_SEC. Without it a disclaimer split
     across a boundary ("paid for by" | "Duty and Country PAC")
     loses the sponsor name, which is the one thing we need.
   ──────────────────────────────────────────────────────────── */

const BYTES_PER_SEC = 16000 * 2;
const OVERLAP_SEC = 2;

function wavHeader(dataLength) {
  const h = Buffer.alloc(44);
  h.write('RIFF', 0);
  h.writeUInt32LE(36 + dataLength, 4);
  h.write('WAVE', 8);
  h.write('fmt ', 12);
  h.writeUInt32LE(16, 16);      // PCM chunk size
  h.writeUInt16LE(1, 20);       // format: PCM
  h.writeUInt16LE(1, 22);       // mono
  h.writeUInt32LE(16000, 24);
  h.writeUInt32LE(16000 * 2, 28);
  h.writeUInt16LE(2, 32);
  h.writeUInt16LE(16, 34);
  h.write('data', 36);
  h.writeUInt32LE(dataLength, 40);
  return h;
}

function createGroqStream({ apiKey, onTranscript, onError, windowSec = 8 }) {
  const target = BYTES_PER_SEC * windowSec;
  let chunks = [];
  let bytes = 0;
  let tail = Buffer.alloc(0);
  let inFlight = false;
  let closed = false;

  async function flush() {
    if (!bytes || inFlight) return;
    const pcm = Buffer.concat([tail, ...chunks], tail.length + bytes);
    chunks = [];
    bytes = 0;
    tail = pcm.subarray(Math.max(0, pcm.length - BYTES_PER_SEC * OVERLAP_SEC));
    inFlight = true;

    try {
      const form = new FormData();
      form.append('file', new Blob([wavHeader(pcm.length), pcm], { type: 'audio/wav' }), 'a.wav');
      form.append('model', process.env.GROQ_STT_MODEL || 'whisper-large-v3-turbo');
      form.append('response_format', 'json');
      form.append('language', 'en');

      const res = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}` },
        body: form,
      });
      if (!res.ok) throw new Error(`Groq STT ${res.status}: ${(await res.text()).slice(0, 120)}`);
      const { text } = await res.json();
      if (text?.trim()) onTranscript({ text: text.trim(), isFinal: true });
    } catch (err) {
      onError?.(err);
    } finally {
      inFlight = false;
    }
  }

  return {
    send(chunk) {
      if (closed) return;
      chunks.push(chunk);
      bytes += chunk.length;
      if (bytes >= target) flush();
    },
    close() {
      closed = true;
      flush();
    },
  };
}

/** Picks whichever provider has a key. Deepgram first: it streams. */
function createSTT(opts) {
  if (process.env.DEEPGRAM_API_KEY) {
    return { stream: createDeepgramStream({ ...opts, apiKey: process.env.DEEPGRAM_API_KEY }), batched: false };
  }
  if (process.env.GROQ_API_KEY) {
    return { stream: createGroqStream({ ...opts, apiKey: process.env.GROQ_API_KEY }), batched: true };
  }
  return null;
}

const FEC = 'https://api.open.fec.gov/v1';

/* One fetch-based call for whichever provider has a key. Groq is checked first
   because its free tier needs no card, which is the difference between this
   pipeline running and not running. Both endpoints take the same shape of
   request, so the prompts below are unchanged between them. */
function provider() {
  if (process.env.GROQ_API_KEY) {
    return {
      url: 'https://api.groq.com/openai/v1/chat/completions',
      key: process.env.GROQ_API_KEY,
      model: process.env.MODEL || 'llama-3.3-70b-versatile',
      openaiStyle: true,
    };
  }
  if (process.env.ANTHROPIC_API_KEY) {
    return {
      url: 'https://api.anthropic.com/v1/messages',
      key: process.env.ANTHROPIC_API_KEY,
      model: process.env.MODEL || 'claude-sonnet-5',
      openaiStyle: false,
    };
  }
  return null;
}

const hasModel = () => provider() !== null;

async function callModel({ system, user, maxTokens }) {
  const p = provider();
  if (!p) throw new Error('No model API key set (GROQ_API_KEY or ANTHROPIC_API_KEY)');

  const body = p.openaiStyle
    ? {
        model: p.model,
        max_tokens: maxTokens,
        temperature: 0,
        // Whisper output is messy; a stray sentence of prose around the JSON
        // breaks the parse. Force the response format where it's supported.
        response_format: { type: 'json_object' },
        messages: [{ role: 'system', content: system }, { role: 'user', content: user }],
      }
    : {
        model: p.model,
        max_tokens: maxTokens,
        system,
        messages: [{ role: 'user', content: user }],
      };

  const res = await fetch(p.url, {
    method: 'POST',
    headers: p.openaiStyle
      ? { 'content-type': 'application/json', authorization: `Bearer ${p.key}` }
      : { 'content-type': 'application/json', 'x-api-key': p.key, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(30000),
  });
  if (!res.ok) throw new Error(`Model ${res.status}: ${(await res.text()).slice(0, 160)}`);

  const data = await res.json();
  return p.openaiStyle
    ? data.choices?.[0]?.message?.content ?? ''
    : (data.content || []).map(b => b.text || '').join('');
}

/* ────────────────────────────────────────────────────────────
   1. SEGMENTER

   Political ads are 15/30/60s and nearly all end with a legally
   required disclaimer. Rather than trying to detect ad boundaries
   acoustically, we watch the transcript for the disclaimer itself —
   it's the most reliable signal in the stream, and it's also the
   only part we actually need.

   52 U.S.C. §30120 requires "Paid for by"; the BCRA "Stand By Your
   Ad" provision adds the spoken approval line for candidate
   committees. Independent expenditures carry the "not authorized"
   language.
   ──────────────────────────────────────────────────────────── */

const TRIGGERS = [
  /\bpaid for by\b/i,
  /\bapprove(?:d|s)? th(?:is|e) (?:message|ad)\b/i,
  /\bis responsible for the content of this (?:advertis|ad)/i,
  /\bnot authorized by any candidate\b/i,
  /\bsponsored by\b/i,
];

class Segmenter {
  constructor({ onSegment, tailMs = 2500, windowChars = 1600 }) {
    this.onSegment = onSegment;
    this.tailMs = tailMs;
    this.windowChars = windowChars;
    this.buffer = '';
    this.armed = false;
    this.timer = null;
  }

  /** Feed finalized transcript only — interim results retrigger constantly. */
  push(text) {
    this.buffer = (this.buffer + ' ' + text).slice(-this.windowChars);

    if (this.armed) return;
    if (!TRIGGERS.some(re => re.test(this.buffer))) return;

    this.armed = true;
    // Wait for the rest of the disclaimer to land before cutting. The sponsor
    // name follows "paid for by", so firing on the trigger word alone gets you
    // a segment that stops one word short of the answer.
    this.timer = setTimeout(() => this.flush(), this.tailMs);
  }

  flush() {
    clearTimeout(this.timer);
    const segment = this.buffer;
    this.buffer = '';
    this.armed = false;
    if (segment.trim()) this.onSegment(segment.trim());
  }

  dispose() { clearTimeout(this.timer); }
}

/* ────────────────────────────────────────────────────────────
   2. ANALYSIS — one pass, content first.

   The earlier design ran extraction only after the segmenter
   spotted a disclaimer phrase, which meant a capture that missed
   the disclaimer produced nothing at all — not even what the ad
   was arguing. That is backwards. What an ad says is present in
   every second of it; who paid is present in about four seconds
   at the end. So we analyse whatever transcript exists, treat the
   sponsor as an optional bonus field, and never let its absence
   suppress the rest.

   One call rather than two also halves latency and request count,
   which matters on a free tier metered by requests.
   ──────────────────────────────────────────────────────────── */

const IDENTIFY_SYSTEM = `You read transcripts of political advertisements to work out \
WHAT THE AD IS ABOUT. You are not summarising the ad and not repeating its claims — the \
ad's own framing is the thing the user is trying to see past. Your only job is to name \
the subject accurately so real records can be looked up.

Return ONLY a JSON object:
{
  "isPoliticalAd": boolean,
  "isBallotMeasure": boolean,
  "promotes": string | null,
  "attacks": string | null,
  "office": string | null,
  "issue": string | null,
  "confidence": "high" | "medium" | "low"
}

- promotes / attacks: the person or measure, named as precisely as the audio allows. Use \
full names when spoken. Null if not named.
- office: the seat or measure number if stated ("U.S. Senate", "Question 3", "Governor").
- issue: the policy area in two or three words.
- Do not include the ad's claims, statistics, adjectives, or characterisations anywhere.
- Do not state or guess party. Party is looked up from filings.
- If it is not a political ad, set isPoliticalAd false and everything else null.`;

async function identifySubject(transcript, { state = null } = {}) {
  const user = state
    ? `Listener is in ${state.name}; use only to resolve unnamed measures or "our state". \
Do not assume the ad concerns ${state.name} if it names elsewhere.\n\nTRANSCRIPT:\n${transcript}`
    : transcript;
  return safeJson(await callModel({ system: IDENTIFY_SYSTEM, user, maxTokens: 300 }));
}

/* ────────────────────────────────────────────────────────────
   3. FEC LOOKUP — the `filed` tier is assembled in code, not by
   the model, so nothing in it can be hallucinated.
   ──────────────────────────────────────────────────────────── */

async function fecJson(path, params = {}) {
  const url = new URL(FEC + path);
  url.searchParams.set('api_key', process.env.FEC_API_KEY);
  for (const [k, v] of Object.entries(params)) {
    if (v != null) url.searchParams.set(k, v);
  }
  const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
  if (!res.ok) throw new Error(`FEC ${res.status} on ${path}`);
  return res.json();
}

const CYCLE = Number(process.env.CYCLE) || currentCycle();
function currentCycle() {
  const y = new Date().getFullYear();
  return y % 2 === 0 ? y : y + 1; // FEC cycles are even-numbered years
}

const COMMITTEE_TYPES = {
  P: 'Presidential committee', H: 'House committee', S: 'Senate committee',
  N: 'PAC — nonqualified', Q: 'PAC — qualified', O: 'Super PAC (independent-expenditure only)',
  U: 'Single-candidate independent expenditure', V: 'Hybrid PAC', W: 'Hybrid PAC',
  X: 'Party committee — nonqualified', Y: 'Party committee — qualified', Z: 'National party account',
  I: 'Independent expenditure filer (person)', D: 'Delegate committee', E: 'Electioneering communications filer',
};

async function lookupCommittee(name) {
  if (!name) return null;

  const search = await fecJson('/names/committees/', { q: name });
  const hit = search.results?.[0];
  if (!hit) return null;

  const id = hit.id;
  const [detail, totals, donors] = await Promise.allSettled([
    fecJson(`/committee/${id}/`),
    fecJson(`/committee/${id}/totals/`, { cycle: CYCLE }),
    fecJson('/schedules/schedule_a/', {
      committee_id: id,
      two_year_transaction_period: CYCLE,
      sort: '-contribution_receipt_amount',
      per_page: 5,
    }),
  ]);

  const c = detail.status === 'fulfilled' ? detail.value.results?.[0] : null;
  const t = totals.status === 'fulfilled' ? totals.value.results?.[0] : null;
  const d = donors.status === 'fulfilled' ? donors.value.results ?? [] : [];

  const type = COMMITTEE_TYPES[c?.committee_type] || c?.committee_type_full || 'Committee';

  return {
    committeeId: id,
    matchedName: hit.name,
    // Name matching is fuzzy and the transcript is noisy. Surface the match so
    // the user can catch "Citizens for Ohio" vs "Ohio Citizens Fund" themselves.
    exactMatch: normalize(hit.name) === normalize(name),
    type,
    party: c?.party_full || null,
    receipts: t?.receipts ?? null,
    topContributors: d.map(r => ({
      name: r.contributor_name,
      amount: r.contribution_receipt_amount,
    })),
    sourceUrl: `https://www.fec.gov/data/committee/${id}/`,
  };
}

const normalize = s => String(s).toLowerCase().replace(/[^a-z0-9]/g, '');
const surname = n => String(n || '').trim().split(/\s+/).filter(Boolean).pop()?.toLowerCase() || '';

/* Coarse location → state. Uses the FCC's census block lookup: free, no key,
   no account. We only ever receive coordinates rounded to ~1km by the client,
   which is far more than enough to resolve a state and far less than enough to
   locate a person. */
async function stateFromCoords(lat, lon) {
  try {
    const url = `https://geo.fcc.gov/api/census/block/find?latitude=${lat}&longitude=${lon}&censusYear=2020&format=json`;
    const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
    if (!res.ok) return null;
    const d = await res.json();
    if (!d.State?.code) return null;
    return { code: d.State.code, name: d.State.name, county: d.County?.name || null };
  } catch (err) {
    console.error('[geo]', err.message);
    return null;
  }
}

/* Party is the one field most tempting to guess and most damaging to get
   wrong, so it never comes from the model — it comes from the candidate's own
   FEC registration. If there's no registration, party stays null rather than
   being inferred from the ad's politics. */
/* Names come out of a phone mic in a noisy room, so the transcribed spelling is
   the least reliable thing we have — and everything downstream keys off it.
   "Ty" becomes "Tom" and every lookup misses. Surnames survive transcription far
   better than given names, so we match on surname within the listener's state
   and report the correction rather than silently searching for someone who does
   not exist. */
async function lookupCandidate(name, state = null) {
  if (!name) return null;
  try {
    // Filtering by state is what turns a common surname from a coin flip into
    // an answer. Without it, "Kelly" matches candidates in a dozen states.
    const last = surname(name);
    let res = await fecJson('/candidates/search/', {
      q: name, state, sort: '-election_years', per_page: 10,
    });
    // Fall back to surname alone before giving up: the given name is the part
    // most likely to have been misheard.
    if (!res.results?.length) {
      res = await fecJson('/candidates/search/', { q: last, state, sort: '-election_years', per_page: 10 });
    }
    if (!res.results?.length && state) {
      res = await fecJson('/candidates/search/', { q: last, sort: '-election_years', per_page: 10 });
    }
    const results = res.results || [];
    const hit = results.find(r => normalize(r.name).includes(normalize(name)))
      || results.find(r => surname((r.name || '').split(',')[0]) === last && (!state || r.state === state))
      || results.find(r => surname((r.name || '').split(',')[0]) === last)
      || null;
    if (!hit) return null;
    return {
      candidateId: hit.candidate_id,
      name: hit.name,
      party: hit.party_full || null,
      office: hit.office_full || null,
      state: hit.state || null,
      district: hit.district && hit.district !== '00' ? hit.district : null,
      status: hit.incumbent_challenge_full || null,
      inUserState: Boolean(state) && hit.state === state,
      heardAs: normalize(hit.name).includes(normalize(name)) ? null : name,
      sourceUrl: `https://www.fec.gov/data/candidate/${hit.candidate_id}/`,
    };
  } catch (err) {
    console.error('[fec candidate]', err.message);
    return null;
  }
}

function summarizeFiled(f, disclosedName) {
  if (!f) return null;
  const bits = [];
  bits.push(f.exactMatch
    ? `Registered with the FEC as a ${f.type.toLowerCase()}.`
    : `Closest FEC registration is “${f.matchedName}” — a ${f.type.toLowerCase()}. This may not be the same organization as “${disclosedName}”.`);
  if (f.party) bits.push(`Party: ${f.party}.`);
  if (f.topContributors.length) {
    bits.push('Largest itemized contributions this cycle are listed below.');
  } else {
    bits.push('No itemized contributions returned for this cycle — the group may fund itself through transfers or non-reportable sources.');
  }
  return bits.join(' ');
}

/* ────────────────────────────────────────────────────────────
   4. SYNTHESIS — the model gets the *last* word only, and only
   about inference. It cannot touch the disclosed or filed tiers.
   ──────────────────────────────────────────────────────────── */

const INFER_SYSTEM = `You are annotating a campaign-finance lookup for a transparency \
tool. You will be given (a) an ad's disclaimer and (b) whatever public filing data was \
retrieved, which may be empty.

Your job is to explain what the filing data does and does not establish. Return ONLY \
JSON, no fences:
{
  "reasoning": string,      // 1-3 sentences, plain language
  "coverageGap": string|null // what this data cannot show, or null
}

Hard constraints — these exist because naming a funder who did not fund an ad is \
defamatory:
- NEVER name a person or organization as a backer unless that exact name appears in \
the retrieved filing data provided to you.
- If the data is thin or missing, say so directly. "The disclosed sponsor's own funding \
sources are not in this dataset" is a correct and useful answer.
- You may describe patterns without accusing anyone: naming conventions, the fact that a \
group registered recently, that its money arrives as transfers rather than individual \
donations, that its name does not indicate its issue focus.
- Do not speculate about ideology or affiliation from the ad's content. Say what the \
filings show.
- Use "reportedly", "filings show", "according to" for anything from the data. Use \
"cannot be determined from public filings" where that's true.

Useful context for coverageGap: the FEC covers federal races only — state, local, and \
ballot-measure ads are absent. 501(c)(4) social welfare organizations are not required \
to disclose donors, so a c4 named as a sponsor is typically a dead end. Money moved \
between committees obscures original sources.`;

async function infer({ disclosed, filed }) {
  return safeJson(await callModel({
    system: INFER_SYSTEM,
    user: JSON.stringify({ disclosed, filed: filed || 'no matching FEC registration found' }),
    maxTokens: 400,
  })) || {};
}

/* ────────────────────────────────────────────────────────────
   5. PIPELINE
   ──────────────────────────────────────────────────────────── */

/* Funding is a second, separate stage. It runs only when analysis actually
   found a sponsor, and its failure never removes the content card that has
   already been shown. */
async function fundingFor({ sponsor, beneficiary, state = null, ballotMeasure = false }) {
  const [filed, candidate] = await Promise.all([
    lookupCommittee(sponsor).catch(err => { console.error('[fec committee]', err.message); return null; }),
    ballotMeasure ? null : lookupCandidate(beneficiary, state),
  ]);

  let inferred = null, coverageGap = null;
  try {
    const r = await infer({ disclosed: { sponsor }, filed });
    inferred = r.reasoning ? { reasoning: r.reasoning } : null;
    coverageGap = r.coverageGap || null;
  } catch (err) {
    console.error('[infer]', err.message);
  }

  return {
    candidate,
    filed: filed && { ...filed, summary: summarizeFiled(filed, sponsor) },
    inferred,
    coverageGap: coverageGap || (ballotMeasure && state ? stateGap(state) : null),
    stateSource: (ballotMeasure || !filed) && state ? stateSource(state) : null,
  };
}

/* Ballot measures, state races, and local contests are outside the FEC
   entirely. Saying so and pointing at the right registry is a real answer;
   silently returning nothing is not. */
function stateGap(state) {
  return `${state.name} ballot measures are not filed with the FEC — federal data cannot show who funds this. State disclosure filings are the source.`;
}

function stateSource(state) {
  const slug = state.name.replace(/ /g, '_');
  return {
    state: state.name,
    measures: `https://ballotpedia.org/${slug}_2026_ballot_measures`,
    finance: `https://ballotpedia.org/Campaign_finance_requirements_in_${slug}`,
  };
}

/** Party lookup alone, for ads where we know the beneficiary but not the payer. */
/* ────────────────────────────────────────────────────────────
   BRIEFING — the actual product.

   Two sections, kept apart on purpose:

   RECORD is assembled in code from FEC filings. Committee IDs,
   receipts, named donors. Nothing here passes through a model, so
   nothing here can be invented.

   STAKES is model-written, and is where honesty gets hard. Who
   gains and who loses from a policy is usually contested, not
   unknown-but-discoverable. A confident neutral-sounding verdict
   would be the same move the ad makes, just harder to catch. So
   the model is required to attribute each position to whoever
   holds it and to name where the evidence itself is disputed.
   ──────────────────────────────────────────────────────────── */

/** The candidate's own principal committee — where their money actually sits. */
async function principalCommittee(candidateId) {
  if (!candidateId) return null;
  try {
    const res = await fecJson(`/candidate/${candidateId}/committees/`, { designation: 'P' });
    const c = res.results?.[0];
    if (!c) return null;
    const [totals, donors] = await Promise.allSettled([
      fecJson(`/committee/${c.committee_id}/totals/`, { cycle: CYCLE }),
      fecJson('/schedules/schedule_a/', {
        committee_id: c.committee_id, two_year_transaction_period: CYCLE,
        sort: '-contribution_receipt_amount', per_page: 5,
      }),
    ]);
    return {
      committeeId: c.committee_id,
      name: c.name,
      receipts: totals.status === 'fulfilled' ? totals.value.results?.[0]?.receipts ?? null : null,
      topContributors: (donors.status === 'fulfilled' ? donors.value.results ?? [] : [])
        .map(r => ({ name: r.contributor_name, amount: r.contribution_receipt_amount,
                     employer: r.contributor_employer || null })),
      sourceUrl: `https://www.fec.gov/data/committee/${c.committee_id}/`,
    };
  } catch (err) {
    console.error('[fec principal]', err.message);
    return null;
  }
}

async function profileOf(name, state) {
  const candidate = await lookupCandidate(name, state);
  if (!candidate) return null;
  const money = await principalCommittee(candidate.candidateId);
  return { ...candidate, money };
}

const STAKES_SYSTEM = `A political ad has made a promise. Your job is to explain the \
policy behind it well enough that someone can judge the promise for themselves. Write about \
the POLICY, never about the ad.

Return ONLY JSON:
{
  "whatItIs": string,
  "mechanism": string,
  "unspecified": string,
  "accruesTo": [{ "group": string, "how": string, "scale": string }],
  "paidForBy": [{ "group": string, "how": string }],
  "trackRecordNote": string,
  "supportersArgue": string,
  "opponentsArgue": string,
  "disputed": string
}

Field by field:
- whatItIs: what the policy or measure actually changes, in plain language. Two \
sentences. If this is a ballot measure, describe what a yes vote does and what a no vote \
leaves in place.
- mechanism: how the change would physically work — which tax, which rate, which \
threshold, which agency, what timeline. If the usual version of this policy has specific \
numbers, give them.
- unspecified: what a proposal like this normally leaves undefined — the offsetting \
revenue, the phase-in, the eligibility line, who administers it. This field is important. \
Most campaign promises specify an outcome and not a mechanism, and naming that gap is \
more useful than either side's rhetoric.
- accruesTo: WHO ACTUALLY GETS THE MONEY OR BENEFIT. Be specific about whether it flows to \
households or businesses, and to which ones. Use income bands, firm sizes, sectors, or \
regions. "scale" should indicate rough magnitude per recipient and how it varies — a flat \
benefit and a proportional one land very differently. Never say "taxpayers" without \
saying which.
- paidForBy: who bears the cost — forgone revenue falling on which services, which \
budgets, which other taxpayers, or borrowing. If the cost is genuinely unclear, say so.
- trackRecordNote: what a reader should check to verify this for themselves — for a \
candidate, whether they have pursued it before versus only campaigned on it; for a ballot \
measure, the actual text of the measure and which organisations registered for and \
against it.
- supportersArgue / opponentsArgue: strongest honest case for each, equal length, no \
tell of your own view.
- disputed: the specific empirical questions credible analysts disagree on, and why. Be \
concrete. Not "experts differ".

Rules: no party labels as shorthand. No loaded adjectives. No predictions about elections. \
If you lack reliable knowledge of this policy, say so in whatItIs and leave the lists \
empty rather than inventing figures.`;

async function stakesFor({ issue, office, isBallotMeasure, state, subject }) {
  // Run on any identifiable subject, not just a named issue. A local measure
  // often has no tidy "issue" label but is still the whole point of the ad.
  const topic = issue || subject;
  if (!topic) return null;
  const ctx = [
    `Policy or measure: ${topic}`,
    office ? `Office sought: ${office}` : null,
    state ? `Jurisdiction: ${state.name}` : null,
    isBallotMeasure ? 'This is a ballot measure, so the question is the policy itself.' : null,
  ].filter(Boolean).join('\n');
  try {
    return safeJson(await callModel({ system: STAKES_SYSTEM, user: ctx, maxTokens: 1600 }));
  } catch (err) {
    console.error('[stakes]', err.message);
    return null;
  }
}

/* ────────────────────────────────────────────────────────────
   TRACK RECORD — has this person actually done the thing?

   Congress.gov runs on the same free api.data.gov key as the FEC,
   so this costs no extra signup. The member list is fetched once
   and cached; matching by name against ~540 sitting members is
   far more reliable than the API's own name search.

   The most valuable outcome here is often the negative one. An ad
   that implies a track record from someone who has never held
   office is making a promise dressed as a history, and saying
   "no legislative record exists" is a hard, checkable fact.
   ──────────────────────────────────────────────────────────── */

let memberCache = null;
async function currentMembers() {
  if (memberCache) return memberCache;
  const out = [];
  try {
    for (let offset = 0; offset < 600; offset += 250) {
      const url = `https://api.congress.gov/v3/member?currentMember=true&limit=250&offset=${offset}&format=json&api_key=${process.env.FEC_API_KEY}`;
      const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
      if (!res.ok) break;
      const d = await res.json();
      out.push(...(d.members || []));
      if ((d.members || []).length < 250) break;
    }
  } catch (err) {
    console.error('[congress members]', err.message);
  }
  memberCache = out;
  setTimeout(() => { memberCache = null; }, 6 * 3600 * 1000).unref?.();
  return out;
}

async function trackRecord(name, issue, state) {
  if (!name || !process.env.FEC_API_KEY) return null;
  const members = await currentMembers();
  const target = normalize(name);
  const last = surname(name);

  let hit = members.find(m => normalize(m.name || '').includes(target.slice(0, 12)))
    || members.find(m => surname((m.name || '').split(',')[0]) === last
         && (!state || m.state === state || (m.state || '').toLowerCase().startsWith((state || '').toLowerCase())));
  if (!hit?.bioguideId) return { held: false, name };

  let bills = [];
  try {
    const url = `https://api.congress.gov/v3/member/${hit.bioguideId}/sponsored-legislation?limit=250&format=json&api_key=${process.env.FEC_API_KEY}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (res.ok) bills = (await res.json()).sponsoredLegislation || [];
  } catch (err) {
    console.error('[congress bills]', err.message);
  }

  // Keyword-match the issue against bill titles. Crude, but it is a filter over
  // real filings rather than a model recalling what someone probably supported.
  const words = String(issue || '').toLowerCase().split(/\W+/).filter(w => w.length > 3);
  const relevant = bills.filter(b => {
    const t = (b.title || '').toLowerCase();
    return words.some(w => t.includes(w));
  }).slice(0, 6);

  return {
    held: true,
    name: hit.name,
    chamber: hit.terms?.item?.[0]?.chamber || null,
    state: hit.state || null,
    party: hit.partyName || null,
    bioguideId: hit.bioguideId,
    totalSponsored: bills.length,
    relevantBills: relevant.map(b => ({
      title: b.title,
      number: `${b.type || ''}${b.number || ''}`,
      introduced: b.introducedDate || null,
      status: b.latestAction?.text || null,
    })),
    sourceUrl: `https://www.congress.gov/member/${hit.bioguideId}`,
  };
}

/* Congress.gov only knows federal officeholders. Most political ads are for
   state and local races, so without this the answer is almost always "no
   record", which is useless. OpenStates covers state legislatures and issues
   free keys; if one is present we use it. */
async function stateRecord(name, state) {
  if (!process.env.OPENSTATES_API_KEY || !name || !state?.name) return null;
  const last = surname(name);
  try {
    const url = `https://v3.openstates.org/people?jurisdiction=${encodeURIComponent(state.name)}` +
      `&name=${encodeURIComponent(last)}&include=other_names&per_page=10&apikey=${process.env.OPENSTATES_API_KEY}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(9000) });
    if (!res.ok) return null;
    const people = (await res.json()).results || [];
    const person = people.find(p => normalize(p.name).includes(normalize(name))) || people[0];
    if (!person) return null;

    let bills = [];
    try {
      const b = await fetch(`https://v3.openstates.org/bills?sponsor=${encodeURIComponent(person.id)}` +
        `&sort=updated_desc&per_page=20&apikey=${process.env.OPENSTATES_API_KEY}`,
        { signal: AbortSignal.timeout(9000) });
      if (b.ok) bills = (await b.json()).results || [];
    } catch {}

    return {
      held: true,
      level: 'state',
      name: person.name,
      heardAs: normalize(person.name).includes(normalize(name)) ? null : name,
      party: person.party || person.current_role?.party || null,
      role: person.current_role
        ? `${person.current_role.title || ''} ${person.current_role.org_classification || ''}`.trim()
        : null,
      district: person.current_role?.district || null,
      totalSponsored: bills.length,
      relevantBills: bills.slice(0, 6).map(b => ({
        number: b.identifier, title: b.title,
        status: b.latest_action_description || null,
      })),
      sourceUrl: person.openstates_url || `https://openstates.org/person/${person.id}/`,
    };
  } catch (err) {
    console.error('[openstates]', err.message);
    return null;
  }
}

async function candidateFor(name, state = null) {
  return lookupCandidate(name, state);
}

function safeJson(text) {
  try {
    return JSON.parse(text.replace(/```json|```/g, '').trim());
  } catch {
    console.error('[parse] model did not return JSON:', text.slice(0, 200));
    return null;
  }
}



/* ────────────────────────────────────────────────────────────
   WHERE THE REFERENCE CORPUS COMES FROM

   Fingerprinting can only recognize an ad it has already heard.
   This is the part of the project that is actually hard, and it
   is a data-sourcing problem, not a signal-processing one.

   Bulk sources, roughly in order of usefulness:

   1. FCC Political Files — publicfiles.fcc.gov, free API.
      Broadcast and cable stations are legally required to upload
      every political ad contract: sponsor, buyer, gross spend,
      flight dates, and the station. It does not contain audio,
      but it tells you which sponsors are on air in which market
      this week, which narrows attribution enormously and gives
      you the metadata to attach once you do have audio.

   2. Meta Ad Library API — political/issue ads with a declared
      "paid for by" entity, spend range, and the creative itself.
      Video creatives can be fingerprinted directly.

   3. Google Ads Transparency Center — YouTube and display
      political ads with verified advertiser identity, downloadable
      creatives.

   4. Internet Archive TV News Archive — actual broadcast capture.
      This is what the original Political Ad Archive project used;
      you can mine airings rather than waiting to hear them live.

   5. AdImpact / Kantar CMAG — commercial, authoritative, expensive.
      Worth it if this becomes a newsroom tool.

   6. Your own users. See UnknownPool in matcher.js — repetition
      identifies an ad as an ad before anyone knows who paid for it.

   A manifest entry looks like:
   { "file": "ads/oh-sen-042.mp4",
     "meta": { "sponsor": "Duty and Country PAC", "committeeId": "C00842921",
               "supports": "Jane Doe", "opposes": "Bob Roe",
               "race": "U.S. Senate — Ohio", "source": "meta_ad_library",
               "sourceUrl": "https://...", "market": "Cleveland-Akron" } }
   ──────────────────────────────────────────────────────────── */

// Broadcasters time-compress spots to fit a pod, and landmark hashes are not
// scale-invariant: a 2% stretch moves every frame delta and most peak bins,
// which drops recall off a cliff. Indexing stretched variants is the cheap fix
// — it costs index size, which is the resource we have most of.
const TIME_VARIANTS = [1.0, 0.98, 0.99, 1.01, 1.02];

async function decode(file, tempo = 1.0) {
  const filter = tempo === 1.0 ? [] : ['-filter:a', `atempo=${tempo}`];
  const { stdout } = await run('ffmpeg', [
    '-i', file,
    ...filter,
    '-ac', '1',
    '-ar', String(SAMPLE_RATE),
    '-f', 's16le',
    '-loglevel', 'error',
    'pipe:1',
  ], { maxBuffer: 256 * 1024 * 1024, encoding: 'buffer' });

  const pcm = new Int16Array(stdout.buffer, stdout.byteOffset, stdout.length / 2);
  return pcm;
}

async function buildIndex(manifestPath) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const root = path.dirname(manifestPath);
  const index = new FingerprintIndex();

  for (const [i, entry] of manifest.entries()) {
    const file = path.resolve(root, entry.file);
    let durationSec = null;

    for (const tempo of TIME_VARIANTS) {
      let pcm;
      try {
        pcm = await decode(file, tempo);
      } catch (err) {
        console.error(`[skip] ${entry.file} @${tempo}: ${err.message.split('\n')[0]}`);
        continue;
      }
      if (durationSec === null) durationSec = pcm.length / SAMPLE_RATE;

      const fp = new Fingerprinter();
      const hashes = Int32Array.from(fp.push(pcm));

      // Variants share a trackId so a hit on any of them resolves to one ad.
      const trackId = entry.meta.id || `ad:${i}`;
      index.addTrack(
        tempo === 1.0 ? trackId : `${trackId}@${tempo}`,
        { ...entry.meta, canonicalId: trackId, durationSec, tempo, status: 'identified' },
        hashes
      );
    }

    console.log(`[ok] ${entry.meta.sponsor || entry.file} — ${durationSec?.toFixed(1)}s`);
  }

  return index;
}

/* ── persistence ───────────────────────────────────────────────
   JSON is fine up to a few thousand ads (~10M postings, low
   hundreds of MB). Past that, move postings into Postgres with a
   BIGINT hash column and a hash index, or Redis with one sorted
   set per hash — the matcher's match() only needs the postings
   lookup to be swappable.
   ──────────────────────────────────────────────────────────── */

function saveIndex(index, file) {
  const out = {
    version: 1,
    builtAt: Date.now(),
    framesPerSec: FRAMES_PER_SEC,
    tracks: [...index.tracks],
    postings: [...index.postings],
  };
  fs.writeFileSync(file, JSON.stringify(out));
  console.log(`wrote ${file} — ${index.tracks.size} tracks, ${index.postings.size} distinct hashes`);
}

function loadIndex(file) {
  const index = new FingerprintIndex();
  if (!fs.existsSync(file)) {
    console.warn(`No index at ${file}. Starting empty — every ad will be unidentified until the pool learns it.`);
    return index;
  }
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  index.tracks = new Map(data.tracks);
  index.postings = new Map(data.postings);
  console.log(`loaded ${index.tracks.size} tracks from ${file}`);
  return index;
}





const PORT = process.env.PORT || 3000;
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json' };

// Bump on every build. Visiting /version tells you instantly which code is
// actually running, instead of inferring it from the UI.
const BUILD = 'v9-names-issues';

const TAG_HASHES = 1;
const TAG_PCM = 2;

const index = loadIndex(process.env.INDEX_FILE || 'corpus/index.json');
const pool = new UnknownPool(index);
const STARTED = Date.now();
const sttAvailable = Boolean(process.env.DEEPGRAM_API_KEY || process.env.GROQ_API_KEY);

/* ── static ────────────────────────────────────────────────── */
const server = http.createServer((req, res) => {
  if (req.url === '/version') {
    res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
    res.end(JSON.stringify({
      build: BUILD,
      transcription: Boolean(process.env.GROQ_API_KEY || process.env.DEEPGRAM_API_KEY),
      model: hasModel(),
      fecAndCongress: Boolean(process.env.FEC_API_KEY),
      startedAt: new Date(STARTED).toISOString(),
    }, null, 2));
    return;
  }
  const name = req.url === '/' ? 'index.html' : decodeURIComponent(req.url.split('?')[0]).replace(/^\//, '');
  const body = ASSETS[name];
  if (body === undefined) { res.writeHead(404).end('Not found'); return; }
  res.writeHead(200, {
    'Content-Type': MIME[path.extname(name)] || 'application/octet-stream',
    'Cache-Control': 'no-cache',
  });
  res.end(body);
});

/* ── session ───────────────────────────────────────────────── */
const wss = new WebSocketServer({ server, path: '/stream' });

wss.on('connection', client => {
  const send = obj => client.readyState === 1 && client.send(JSON.stringify(obj));

  let context = {};
  let state = null;        // resolved once per session from coarse coordinates
  let stt = null;
  let transcript = '';
  let windows = 0;
  let analyzing = false;
  let lastAnalyzedWords = 0;
  let subjectKey = null;    // dedupe: don't re-run records for the same subject
  let sponsorPending = null;
  let sponsorDone = false;
  let currentTrack = null;
  let currentUnknown = null;

  const matchSession = new MatchSession(index, {
    onMatch: hit => {
      currentTrack = hit.trackId;
      const meta = hit.meta || {};
      // Only stop transcribing if the match actually carries an answer. A bare
      // fingerprint hit with no attribution is not a reason to stop listening.
      if (meta.status === 'identified') stopAudio();
      send({ type: 'match', data: {
        status: meta.status || 'identified',
        trackId: meta.canonicalId || hit.trackId,
        confidence: hit.confidence,
        positionSec: hit.positionSec,
        durationSec: hit.durationSec,
        airings: meta.airings ?? null,
        subject: meta.subject ?? null,
        promoted: meta.promoted ?? null,
        attacked: meta.attacked ?? null,
        stakes: meta.stakes ?? null,
        funding: meta.funding ?? null,
        sponsor: meta.sponsor ?? null,
      }});
    },

    onUnknown: hashes => {
      currentUnknown = pool.submit(hashes, context);
      currentTrack = currentUnknown.promoted || null;
      send({ type: 'unknown', data: { airings: currentUnknown.airings.length } });
      startAudio();
    },
  });

  /* Analysis runs on whatever transcript exists. It is deliberately not gated
     on hearing a disclaimer — most captures never will, and the ad's argument
     is the part the user came for. */
  /* The ad is only a pointer. Identify the subject, then answer from records:
     who pays, who funds the people involved, and what the policy actually does.
     The ad's own claims are deliberately never shown back to the user. */
  async function analyze(reason) {
    const words = transcript.trim().split(/\s+/).filter(Boolean).length;
    if (analyzing || words < 8) return;
    if (words - lastAnalyzedWords < 10 && reason !== 'segment') return;

    analyzing = true;
    lastAnalyzedWords = words;
    send({ type: 'status', stage: 'analyzing' });

    try {
      const subject = await identifySubject(transcript, { state });
      if (!subject?.isPoliticalAd) { send({ type: 'status', stage: 'listening' }); return; }

      const key = [subject.promotes, subject.attacks, subject.issue].join('|');
      send({ type: 'subject', data: subject });

      if (key === subjectKey) { send({ type: 'status', stage: 'listening' }); return; }
      subjectKey = key;

      send({ type: 'status', stage: 'records' });

      // Both sides' money, looked up in parallel. Comparing who funds the
      // attacker with who funds the target is usually the most informative
      // thing available, and neither number comes from a model.
      const [promoted, attacked, record, stakes] = await Promise.all([
        subject.isBallotMeasure ? null : profileOf(subject.promotes, state),
        subject.isBallotMeasure ? null : profileOf(subject.attacks, state),
        subject.isBallotMeasure ? null : trackRecord(subject.promotes, subject.issue, state?.code),
        stakesFor({
          issue: subject.issue, office: subject.office, subject: subject.promotes || subject.attacks,
          isBallotMeasure: subject.isBallotMeasure, state,
        }),
      ]);

      // Congress.gov covers federal officeholders only. Most ads are for state
      // and local races, so fall through to the state legislature before
      // concluding there is no record.
      let track = record;
      if (!subject.isBallotMeasure && (!track || !track.held) && state) {
        const st = await stateRecord(subject.promotes, state);
        if (st) track = st;
      }

      send({ type: 'record', data: { promoted, attacked, subject, track, state: state?.name || null } });
      if (stakes) send({ type: 'stakes', data: stakes });

      if (currentTrack) {
        const meta = index.tracks.get(currentTrack);
        if (meta) Object.assign(meta, { subject, promoted, attacked, track, stakes });
      }
      send({ type: 'status', stage: 'listening' });
    } catch (err) {
      console.error('[analyze]', err);
      send({ type: 'error', message: 'Lookup failed: ' + err.message });
    } finally {
      analyzing = false;
    }
  }

  /* The disclaimer path still runs, but only to answer "who paid for this
     particular spot" — it is no longer what unlocks everything else. */
  async function checkSponsor() {
    if (!sponsorPending || sponsorDone) return;
    sponsorDone = true;
    try {
      const subject = await identifySubject(transcript, { state });
      const sp = sponsorPending;
      const funding = await fundingFor({
        sponsor: sp, beneficiary: subject?.promotes, state,
        ballotMeasure: Boolean(subject?.isBallotMeasure),
      });
      send({ type: 'sponsor', data: { sponsor: sp, ...funding } });
      if (currentTrack) pool.label(currentTrack, { sponsor: sp, funding });
    } catch (err) {
      console.error('[sponsor]', err.message);
    }
  }

  // The segmenter no longer gates anything; it just triggers analysis sooner
  // when a disclaimer phrase shows up.
  const segmenter = new Segmenter({
    tailMs: 2500,
    onSegment: text => {
      // Grab the sponsor name out of the disclaimer directly; it's a fixed
      // phrase followed by a proper noun, which regex handles fine and a
      // model call would only slow down.
      const m = text.match(/paid for by[,:]?\s+([^.]{3,80})/i);
      if (m) { sponsorPending = m[1].trim().replace(/\s+and (is )?not authorized.*$/i, ''); checkSponsor(); }
    },
  });

  function startAudio() {
    if (stt) return;
    if (!sttAvailable || !hasModel()) { send({ type: 'fingerprint_only' }); return; }

    const built = createSTT({
      onTranscript: ({ text, isFinal }) => {
        if (!isFinal) { send({ type: 'transcript', text, isFinal }); return; }
        windows++;
        transcript = (transcript + ' ' + text).trim().slice(-4000);
        send({ type: 'transcript', text, isFinal: true, windows });
        segmenter.push(text);
        analyze('window');
      },
      onError: err => {
        console.error('[stt]', err.message);
        // Surface the real error. A silent STT failure is indistinguishable
        // from "no ad playing", which is the worst possible way to fail.
        send({ type: 'error', message: 'Transcription: ' + err.message });
      },
    });
    if (!built) { send({ type: 'fingerprint_only' }); return; }
    stt = built.stream;
    send({ type: 'need_audio' });
    send({ type: 'status', stage: 'transcribing' });
  }

  function stopAudio() {
    if (!stt) return;
    stt.close();
    stt = null;
    send({ type: 'stop_audio' });
  }

  client.on('message', (data, isBinary) => {
    if (!isBinary) {
      try {
        const msg = JSON.parse(data.toString());
        if (msg.type === 'hello') {
          context = { market: msg.market };
          if (typeof msg.lat === 'number' && typeof msg.lon === 'number') {
            stateFromCoords(msg.lat, msg.lon).then(st => {
              if (!st) return;
              state = st;
              context.market = st.county ? `${st.county}, ${st.code}` : st.name;
              send({ type: 'located', data: { name: st.name, code: st.code } });
            });
          }
        }
        if (msg.type === 'session_start') {
          matchSession.reset();
          transcript = ''; windows = 0; lastAnalyzedWords = 0;
          subjectKey = null; sponsorPending = null; sponsorDone = false;
          currentTrack = null; currentUnknown = null;
        }
        if (msg.type === 'session_stop') stopAudio();
      } catch {}
      return;
    }
    if (data.length < 8) return;

    const tag = data.readInt32LE(0);
    const body = data.subarray(4);

    if (tag === TAG_HASHES) {
      const hashes = new Int32Array(body.length / 4);
      Buffer.from(hashes.buffer).set(body);
      matchSession.push(hashes.subarray(0, hashes.length - 1), hashes[hashes.length - 1]);
      return;
    }
    if (tag === TAG_PCM && stt) stt.send(body);
  });

  client.on('close', () => { stt?.close(); segmenter.dispose(); });
});

server.listen(PORT, () => {
  if (sttAvailable && hasModel()) {
    console.log(`Full mode: ${process.env.DEEPGRAM_API_KEY ? 'Deepgram' : 'Groq Whisper'} + ` +
      `${process.env.GROQ_API_KEY ? 'Groq' : 'Anthropic'}. Unknown ads are identified and written back to the index.`);
  } else {
    console.warn('Fingerprint-only: set GROQ_API_KEY to identify ads that are not already in the index.');
  }
  console.log(`http://localhost:${PORT} — forward this port over https to reach an iPhone`);
});

/* CLI: `node app.js ingest [manifest] [out]` builds the fingerprint index. */
if (process.argv[2] === 'ingest') {
  const manifest = process.argv[3] || 'corpus/manifest.json';
  const out = process.argv[4] || process.env.INDEX_FILE || 'corpus/index.json';
  buildIndex(manifest).then(idx => saveIndex(idx, out)).then(() => process.exit(0));
}
