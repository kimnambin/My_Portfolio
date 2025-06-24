import {infoData} from '../../data/Profile_data';
import '../../style/Profile.css';

export default function ProfileMain() {
  return (
    <main>
      {infoData.map((info, idx) =>
        info.href ? (
          <a
            href={info.href}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}>
            <section className="section">
              <article className="article_left">{info.icon}</article>
              <article className="article_right">
                <span>{info.title}</span>
                <p>{info.description}</p>
              </article>
            </section>
          </a>
        ) : (
          <section className="section00" key={idx}>
            <article className="article_left">{info.icon}</article>
            <article className="article_right">
              <span>{info.title}</span>
              <p className="email">{info.description}</p>
            </article>
          </section>
        ),
      )}
    </main>
  );
}
