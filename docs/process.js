// 규칙을 계산하는 코드. 화면(index.html)과 검사(tests/check.js)가 함께 씁니다.
var BASE = '2026-11-22';   // 기준일 (고정)
var RANGE_DAYS = 7;        // 기준일 포함 7일 전까지
function parseCsv(t){
  t=t.replace(/^\uFEFF/,'');var rows=[],row=[],f='',q=false,i,c;
  for(i=0;i<t.length;i++){c=t[i];
    if(q){if(c==='"'){if(t[i+1]==='"'){f+='"';i++}else q=false}else f+=c}
    else if(c==='"')q=true;
    else if(c===','){row.push(f);f=''}
    else if(c==='\n'||c==='\r'){if(c==='\r'&&t[i+1]==='\n')i++;row.push(f);f='';if(row.length>1||row[0]!=='')rows.push(row);row=[]}
    else f+=c}
  if(f!==''||row.length){row.push(f);rows.push(row)}
  return rows}
function validDate(d){return /^\d{4}-\d{2}-\d{2}$/.test(d)&&new Date(d+'T00:00:00Z').toISOString().slice(0,10)===d}
function dayDiff(a,b){return Math.round((new Date(a+'T00:00:00Z')-new Date(b+'T00:00:00Z'))/864e5)}
function normT(s){return s.trim().replace(/\s+/g,' ').toLowerCase()}
function processRows(table){
  var data=table.slice(1).map(function(a,i){return {n:i+1,gubun:a[0]||'',src:a[1]||'',title:a[2]||'',date:a[3]||'',link:a[4]||'',syn:(a[5]||'').trim()}});
  var excluded=[],cands=[];
  data.forEach(function(r){
    if(!r.title.trim()||!r.src.trim()||!r.date.trim()||!r.gubun.trim()||!r.link.trim()){excluded.push({r:r,why:'필수 칸 빠짐'});return}
    if(!validDate(r.date)){excluded.push({r:r,why:'날짜 형식 틀림(YYYY-MM-DD 아님)'});return}
    var d=dayDiff(BASE,r.date);
    if(d<0){excluded.push({r:r,why:'범위 밖(기준일보다 미래)'});return}
    if(d>RANGE_DAYS){excluded.push({r:r,why:'범위 밖(기준일 '+RANGE_DAYS+'일보다 오래됨)'});return}
    if(r.gubun!=='국내'&&r.gubun!=='해외'){excluded.push({r:r,why:'구분이 국내/해외가 아님'});return}
    if(!/^https:\/\//.test(r.link)){excluded.push({r:r,why:'링크가 https://로 시작하지 않음'});return}
    cands.push(r)});
  var best={},dups=[];
  cands.forEach(function(r){
    var k=normT(r.title),p=best[k];
    if(!p){best[k]=r}
    else if(r.date>p.date){dups.push({r:p,why:'중복(같은 제목, 더 최근 날짜인 '+r.n+'번을 남김)'});best[k]=r}
    else{dups.push({r:r,why:'중복(같은 제목, 먼저 들어온 '+p.n+'번을 남김)'})}});
  var shown=Object.keys(best).map(function(k){return best[k]});
  shown.sort(function(a,b){
    if(a.date!==b.date)return a.date<b.date?1:-1;
    if(a.gubun!==b.gubun)return a.gubun==='국내'?-1:1;
    return a.title.trim().localeCompare(b.title.trim(),'ko')});
  return {total:data.length,excluded:excluded,dups:dups,shown:shown}}
  // Node(검사)에서 불러다 쓸 수 있게 내보내기. 브라우저에서는 이 줄이 무시됩니다.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { parseCsv: parseCsv, processRows: processRows, BASE: BASE, RANGE_DAYS: RANGE_DAYS };
}
