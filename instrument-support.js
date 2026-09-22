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
  explanation.textContent = 'Before recording, any moving trace is an illustration of a signal, not a measurement.';
  document.querySelector('.lead').after(explanation);
})();
