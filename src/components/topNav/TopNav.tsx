import css from '../../style/TopNav.module.css';

export default function TopNav() {
  const scrollPage = (pageId: string): void => {
    const element = document.getElementById(pageId);

    if (element && pageId === 'ProfilePage') {
      window.scrollTo({top: element.offsetTop + -90, behavior: 'smooth'});
    } else if (element && pageId === 'SkillPage') {
      window.scrollTo({top: element.offsetTop + -70, behavior: 'smooth'});
    } else if (element && pageId === 'ProjectPage') {
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
