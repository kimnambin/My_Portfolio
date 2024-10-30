import '../style/Profile.css';
import {IoLogoGithub} from 'react-icons/io5';
import {RiBloggerFill} from 'react-icons/ri';
import {MdOutlineMail} from 'react-icons/md';
import {IoIosPhonePortrait} from 'react-icons/io';
import {PiFileText} from 'react-icons/pi';
import {FaPen} from 'react-icons/fa';

export default function Profile_main() {
  return (
    <main>
      {/* 깃허브 */}
      <a
        href="https://github.com/kimnambin"
        target="_blank"
        rel="noopener noreferrer">
        <section className="section">
          <article className="article_left">
            <IoLogoGithub className="icons" />
          </article>
          <article className="article_right">
            <span>깃허브</span>
            <p>깃허브 보기</p>
          </article>
        </section>
      </a>
      {/* 블로그 */}
      <a
        href="https://nanifood.tistory.com/"
        target="_blank"
        rel="noopener noreferrer">
        <section className="section">
          <article className="article_left">
            <RiBloggerFill className="icons" />
          </article>
          <article className="article_right">
            <span>블로그</span>
            <p>블로그 보기</p>
          </article>
        </section>
      </a>
      <a
        href="https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003075378"
        target="_blank"
        rel="noopener noreferrer">
        <section className="section">
          <article className="article_left">
            <FaPen className="icons" />
          </article>
          <article className="article_right">
            <span>논문</span>
            <p>KCI 논문 게재</p>
          </article>
        </section>
      </a>
      <section className="section00">
        <article className="article_left">
          <MdOutlineMail className="icons" />
        </article>
        <article className="article_right">
          <span>이메일</span>
          <p className="email">mkkim044@naver.com</p>
        </article>
      </section>
      <a
        href="https://caramel-battery-b53.notion.site/113d9d07eb6f806db65dc7093790088d"
        target="_blank"
        rel="noopener noreferrer">
        <section className="section">
          <article className="article_left">
            <PiFileText className="icons" />
          </article>
          <article className="article_right">
            <span>이력서</span>
            <p>이력서 보기</p>
          </article>
        </section>
      </a>
      <section className="section00">
        <article className="article_left">
          <IoIosPhonePortrait className="icons" />
        </article>
        <article className="article_right">
          <span>연락처</span>
          <p className="email">010-9666-7750</p>
        </article>
      </section>
    </main>
  );
}
