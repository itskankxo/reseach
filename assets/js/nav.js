(async () => {
  // ที่วาง nav ในแต่ละหน้า
  const host = document.getElementById('nav-placeholder');
  if (!host) return;

  // NOTE: แนะนำรันผ่าน Live Server/Static server แทนการเปิดไฟล์แบบ file://
  const res = await fetch('partials/nav.html');
  const html = await res.text();
  host.innerHTML = html;

  // ทำ active ตามหน้าปัจจุบัน
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  host.querySelectorAll('.top-nav a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === current) a.classList.add('active');
  });
})();
