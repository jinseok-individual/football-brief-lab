// 검사표(tests/cases.md)의 줄을 하나씩 풀어 보고, 기대와 다르면 실패로 끝내는 채점기.
var fs = require('fs');
var path = require('path');
var P = require('../docs/process.js');   // 화면과 같은 규칙 코드를 그대로 가져다 쓴다

var HEAD = ['구분', '언론사', '제목', '날짜', '링크', '합성'];
var csv = fs.readFileSync(path.join(__dirname, '..', 'docs', 'data', 'articles.csv'), 'utf8');
var dataRows = P.parseCsv(csv).slice(1);            // 데이터 파일의 행들 (제목줄 제외)
var cases = fs.readFileSync(path.join(__dirname, 'cases.md'), 'utf8');

// 검사 입력을 처리할 줄(row)들로 바꾼다.
//  - 행 36, 37          : articles.csv의 36번, 37번 행
//  - "제목"@날짜 ; ...   : 새로 만든 입력 (구분=해외, 언론사=테스트로 채움)
function toRows(text) {
  if (text.indexOf('행') === 0) {
    return text.match(/\d+/g).map(function (n) { return dataRows[Number(n) - 1]; });
  }
  return text.split(';').map(function (item) {
    var m = item.trim().match(/^"(.*)"@(.*)$/);
    return ['해외', '테스트', m[1], m[2].trim(), 'https://example.com/t', 'Y'];
  });
}

var passed = 0, total = 0;
cases.split('\n').forEach(function (line) {
  if (line.indexOf('|') !== 0) return;
  var cells = line.split('|').map(function (c) { return c.trim(); });
  // cells: ['', 입력, 기대 처리, 이유, 검사 입력, 검사 기대, '']
  if (cells.length < 7 || cells[1] === '입력' || /^-+$/.test(cells[1])) return;
  total++;
  var rows = toRows(cells[4]);
  var res = P.processRows([HEAD].concat(rows));

  var actual = rows.map(function (_, i) {
    var n = i + 1;
    if (res.excluded.some(function (o) { return o.r.n === n; })) return '제외';
    if (res.dups.some(function (o) { return o.r.n === n; })) return '중복';
    return '표시';
  });
  var parts = cells[5].split('/');
  var expected = parts[0].split(';').map(function (s) { return s.trim(); });
  var ok = expected.join(' ; ') === actual.join(' ; ');
  var actualOrder = res.shown.map(function (r) { return r.n; }).join(',');
  if (ok && parts[1]) {                                // 순서 검사 (선택)
    var wantOrder = parts[1].replace('순서', '').trim();
    if (wantOrder !== actualOrder) { ok = false; expected.push('순서 ' + wantOrder); actual.push('순서 ' + actualOrder); }
  }
  if (ok) { passed++; console.log('통과  ' + total + '번 줄'); }
  else { console.log('실패  ' + total + '번 줄 | 기대: ' + expected.join(' ; ') + ' | 실제: ' + actual.join(' ; ')); }
});

console.log('\n' + total + '줄 중 통과 ' + passed);
if (process.env.CHECK_OUT) {                         // 자동 실행(Actions)이 결과 숫자를 읽어 가도록 파일로 남긴다
  fs.writeFileSync(process.env.CHECK_OUT, JSON.stringify({ passed: passed, total: total }));
}
process.exit(passed === total ? 0 : 1);
