function copyText(text, feedbackId){
  navigator.clipboard.writeText(text).then(function(){
    var el = document.getElementById(feedbackId);
    if (el){ el.style.display='inline'; setTimeout(()=> el.style.display='none', 1200); }
  }).catch(function(){ alert('복사에 실패했습니다.'); });
}

function buildInquiryMailto(){
  const get = id => (document.getElementById(id)?.value || '').trim();
  const company = get('q_company');
  const person = get('q_person');
  const phone = get('q_phone');
  const mail = get('q_email');
  const product = get('q_product');
  const width = get('q_width');
  const height = get('q_height');
  const thick = get('q_thickness');
  const qty = get('q_qty');
  const printing = get('q_printing');
  const use = get('q_use');
  const memo = get('q_memo');

  if (!company && !person) { alert('회사명 또는 담당자명을 입력해주세요.'); return; }
  if (!phone && !mail) { alert('연락처 또는 이메일 중 하나는 입력해주세요.'); return; }

  const subject = encodeURIComponent(`[견적 문의] ${company || person} / ${product}`);
  const body = [
    `회사명: ${company}`,
    `담당자: ${person}`,
    `연락처: ${phone}`,
    `이메일: ${mail}`,
    `제품 종류: ${product}`,
    `규격(가로x세로x두께): ${width} x ${height} x ${thick}`,
    `수량: ${qty}`,
    `인쇄: ${printing}`,
    `용도: ${use}`,
    `요청사항: ${memo}`,
    '',
    '(첨부파일은 회신 메일로 보내주세요.)'
  ].map(encodeURIComponent).join('%0D%0A');

  const to = document.getElementById('q_to')?.value || 'korea8222@hanmail.net';
  const link = `mailto:${to}?subject=${subject}&body=${body}`;
  window.location.href = link;
}

function copyInquirySummary(){
  const text = document.getElementById('inquiryForm').innerText;
  navigator.clipboard.writeText(text).then(()=> alert('요약을 복사했습니다. 이메일 작성 시 붙여넣기 하세요.'));
}
