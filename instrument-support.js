(() => {
  const status = document.getElementById('status');
  const start = document.getElementById('go');
  if (status) { status.setAttribute('role', 'status'); status.setAttribute('aria-live', 'polite'); }
  if (!start) return;

  const instrument = location.pathname.split('/').pop();
  const usesMedia = ['prominence.html', 'phonation.html', 'pulse.html'].includes(instrument);
  let unavailable = '';
  if (!window.isSecureContext) {
    unavailable = 'Sensor access requires HTTPS or localhost. Open the hosted website to use this instrument.';
  } else if (usesMedia && !navigator.mediaDevices?.getUserMedia) {
    unavailable = 'This browser does not support the recording access needed by this instrument. Try a supported browser on your phone or computer.';
  } else if (instrument === 'tremor.html' && !('DeviceMotionEvent' in window)) {
    unavailable = 'This device does not provide browser motion access. Use a supported phone to record movement.';
  }
  if (unavailable) { start.disabled = true; status.textContent = unavailable; }

  const explanation = document.createElement('p');
  explanation.className = 'fine';
  explanation.id = 'signal-source';
  explanation.textContent = 'Before recording, any moving trace is an illustration of a signal, not a measurement.';
  document.querySelector('.lead').after(explanation);

  const controls = document.createElement('div');
  controls.className = 'example-controls';
  const example = document.createElement('button');
  example.type = 'button';
  example.textContent = 'Load example';
  const cancel = document.createElement('button');
  cancel.type = 'button';
  cancel.textContent = 'Cancel recording';
  cancel.hidden = true;
  controls.append(example, cancel);
  start.after(controls);
  window.setInstrumentBusy = busy => {
    example.disabled = busy;
    cancel.hidden = !busy;
    if (busy) explanation.textContent = 'Recording from your device. No samples are uploaded.';
    if (!busy && unavailable) start.disabled = true;
  };
  example.addEventListener('click', () => {
    if (typeof loadExample !== 'function') return;
    loadExample();
    explanation.textContent = 'Synthetic example signal. These values are generated for demonstration, not recorded from a person.';
  });
  cancel.addEventListener('click', () => {
    if (typeof cancelRecording === 'function') cancelRecording();
    explanation.textContent = 'Recording cancelled. No new measurement is available.';
  });
  window.addEventListener('pagehide', () => {
    if (typeof cancelRecording === 'function') cancelRecording();
  });
})();
