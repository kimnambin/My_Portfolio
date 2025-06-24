import '../../style/Skills.css';
import {RiHtml5Fill} from 'react-icons/ri';
import {IoLogoCss3} from 'react-icons/io';
import {FaSquareJs} from 'react-icons/fa6';
import {SiTypescript} from 'react-icons/si';
import {SiDart} from 'react-icons/si';
import {FaNodeJs} from 'react-icons/fa6';
import {GrReactjs} from 'react-icons/gr';
import {SiNextdotjs} from 'react-icons/si';
import {SiFlutter} from 'react-icons/si';

export default function Skill() {
  return (
    <div>
      <div className="full_skill" id="SkillPage">
        <div className="skill_title">
          <h2 className="title_h2">💻SKILLS</h2>
        </div>
        <div className="skill">
          <div className="My_skills">
            <strong className="My_skills_title">Language</strong>
            <section className="My_skills_content">
              <RiHtml5Fill className="icon1" />
              <IoLogoCss3 className="icon2" />
              <FaSquareJs className="icon3" />
              <SiTypescript className="icon4" />
              <SiDart className="icon5" />
            </section>
          </div>
          <div className="My_skills">
            <strong className="My_skills_title">FrontEnd</strong>
            <section className="My_skills_content">
              <FaNodeJs className="icon6" />
              <GrReactjs className="icon7" />
              <SiNextdotjs className="icon8" />
              <SiFlutter className="icon9" />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
