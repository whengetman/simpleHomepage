// 햄버거 메뉴
function toggleMenu() {
  var btn = document.getElementById('hamBtn');
  var nav = document.getElementById('mobile-nav');
  if (btn) btn.classList.toggle('open');
  if (nav) nav.classList.toggle('open');
}

// 클립보드 복사
function copyText(text, feedbackId) {
  navigator.clipboard.writeText(text).then(function() {
    var el = document.getElementById(feedbackId);
    if (el) { el.style.display = 'inline'; setTimeout(function() { el.style.display = 'none'; }, 1500); }
  }).catch(function() { alert('복사에 실패했습니다.'); });
}

// 견적/문의 메일 전송
function buildInquiryMailto() {
  var get = function(id) { return (document.getElementById(id)?.value || '').trim(); };
  var company = get('q_company');
  var person = get('q_person');
  var phone = get('q_phone');
  var mail = get('q_email');
  var product = get('q_product');
  var width = get('q_width');
  var height = get('q_height');
  var thick = get('q_thickness');
  var qty = get('q_qty');
  var printing = get('q_printing');
  var use = get('q_use');
  var memo = get('q_memo');

  if (!company && !person) { alert('회사명 또는 담당자명을 입력해주세요.'); return; }
  if (!phone && !mail) { alert('연락처 또는 이메일 중 하나는 입력해주세요.'); return; }

  var subject = encodeURIComponent('[견적 문의] ' + (company || person) + ' / ' + product);
  var body = [
    '회사명: ' + company,
    '담당자: ' + person,
    '연락처: ' + phone,
    '이메일: ' + mail,
    '제품 종류: ' + product,
    '규격(가로x세로x두께): ' + width + ' x ' + height + ' x ' + thick,
    '수량: ' + qty,
    '인쇄: ' + printing,
    '용도: ' + use,
    '요청사항: ' + memo,
    '',
    '(첨부파일은 회신 메일로 보내주세요.)'
  ].map(encodeURIComponent).join('%0D%0A');

  var to = get('q_to') || 'korea8222@hanmail.net';
  window.location.href = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
}

function copyInquirySummary() {
  var form = document.getElementById('inquiryForm');
  if (!form) return;
  navigator.clipboard.writeText(form.innerText).then(function() {
    alert('요약을 복사했습니다. 이메일 작성 시 붙여넣기 하세요.');
  });
}

// 스크롤 reveal 애니메이션
(function() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });
})();
