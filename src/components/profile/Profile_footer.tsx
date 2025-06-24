import {awardsData} from '../../data/Profile_data';
import '../../style/Profile.css';

export default function ProfileFooter() {
  return (
    <footer className="footer">
      <h2>수상 및 활동</h2>
      <div className="award">
        {awardsData.map((award, idx) => (
          <div className="award_tree" key={idx}>
            <section className="section_left">
              {award.icon}
              <p>{award.year}</p>
            </section>
            <section className="section_right">
              <span>{award.title}</span>
              {award.link ? (
                <a href={award.link} target="_blank" rel="noopener noreferrer">
                  <p className="a_p">{award.description}</p>
                </a>
              ) : (
                <p>{award.description}</p>
              )}
            </section>
          </div>
        ))}
      </div>
    </footer>
  );
}
