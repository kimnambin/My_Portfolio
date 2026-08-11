import '../style/Profile.css';
import Profile_main from '../components/profile/Profile_main';
import Profile_footer from '../components/profile/Profile_footer';

export default function Profile() {
  return (
    <div className="container" id="ProfilePage">
      <header>
        <h3>김남빈</h3>
        <aside>
          <p>학여불급의 자세로 끈질기게 목표를 달성하는</p>
          <strong>신입 프론트엔드 개발자</strong>
          <p className="aside_p">김남빈입니다.</p>
        </aside>
      </header>
      <Profile_main />
      <Profile_footer />
    </div>
  );
}
