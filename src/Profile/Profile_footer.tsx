import '../style/Profile.css';
import {FaTrophy} from 'react-icons/fa6';
import {FaPen} from 'react-icons/fa';

export default function Profile_footer() {
  return (
    <footer className="footer">
      <h2>수상 및 활동</h2>
      <div className="award">
        <div className="award_tree">
          <section className="section_left">
            <FaPen />
            <p>2025</p>
          </section>
          <section className="section_right">
            <span>SCC 공모전</span>
            <p>최우수상</p>
          </section>
        </div>
        <div className="award_tree">
          <section className="section_left">
            <FaPen />
            <p>2024</p>
          </section>
          <section className="section_right">
            <span>한이음 ICT멘토링 공모전</span>
            <p>입상</p>
          </section>
        </div>
        <div className="award_tree">
          <section className="section_left">
            <FaTrophy />
            <p>2024</p>
          </section>
          <section className="section_right">
            <span>KCI 논문 게재</span>
            <a
              href="https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003075378"
              target="_blank">
              <p className="a_p">보러가기</p>
            </a>
          </section>
        </div>
        <div className="award_tree11">
          <section className="section_left">
            <FaTrophy />
            <p>2024</p>
          </section>
          <section className="section_right">
            <span>VGA 캡스톤 디자인(2) 경진대회</span>
            <p>우수상</p>
          </section>
        </div>
        <div className="award_tree">
          <section className="section_left">
            <FaTrophy />
            <p>2023</p>
          </section>
          <section className="section_right">
            <span>IIBC 한국인터넷방송통신학회</span>
            <p>우수논문상</p>
          </section>
        </div>
        <div className="award_tree22">
          <section className="section_left">
            <FaTrophy />
            <p>2023</p>
          </section>
          <section className="section_right">
            <span>UX Design 소논문 경진대회</span>
            <p>우수상</p>
          </section>
        </div>
      </div>
    </footer>
  );
}
