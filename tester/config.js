// 테스터 신청을 저장할 Supabase 프로젝트.
// 두 값이 비어 있으면 "미리보기 모드" — 신청 화면은 끝까지 넘어가지만 아무 데도 저장되지 않는다
// (완료 화면에 그 사실을 표시한다). 값은 공개돼도 되는 anon 키만 넣는다.
window.TESTER_CONFIG = {
  supabaseUrl: 'https://rqnbztxaoapmmxowltgp.supabase.co',
  supabaseAnonKey: 'sb_publishable_-WD4r_PQzCD0LgMHoGzX2w_QYfUeVf9',
  table: 'tester_applications',
};
