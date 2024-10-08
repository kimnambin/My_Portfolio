import css from '../style/TopNav.module.css';

export default function TopNav() {
  //화면 전환용
  //인자값 pageId는 string이며 void(아무것도 리턴하지 않는다)으로 타입설정
  const scrollPage = (pageId: string): void => {
    const element = document.getElementById(pageId);
    //프로필 부분 (상단)
    if (element && pageId === 'ProfilePage') {
      window.scrollTo({top: element.offsetTop + -90, behavior: 'smooth'});
    } //중단 (스킬 페이지)
    else if (element && pageId === 'SkillPage') {
      window.scrollTo({top: element.offsetTop + -70, behavior: 'smooth'});
    }
    //프로젝트 부분
    else if (element && pageId === 'ProjectPage') {
      window.scrollTo({top: element.offsetTop + -90, behavior: 'smooth'});
    }
  };

  return (
    <div className={css.TN}>
      <div className={css.TN_sub}>
        <div className={css.TN_left}>
          <strong onClick={() => scrollPage('ProfilePage')}>
            집요한 개발자 "김남빈"
          </strong>
        </div>

        <div className={css.TN_right}>
          <p className={css.top_p} onClick={() => scrollPage('ProfilePage')}>
            PROFILE
          </p>
          <p className={css.top_p} onClick={() => scrollPage('SkillPage')}>
            SKILLS
          </p>
          <p className={css.top_p} onClick={() => scrollPage('ProjectPage')}>
            PROJECT
          </p>
        </div>
      </div>
    </div>
  );
}
