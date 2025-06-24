import {useState} from 'react';
import React from 'react';
import css from '../style/Project.module.css';
import {ProjectType} from '../type/project.model';
import {projectData} from '../data/Project_data';

export default function Project() {
  const [firstTitle, setFirstTitle] = useState('코난위키');

  const clickTitle = (title: React.SetStateAction<string>) => {
    setFirstTitle(title);
  };

  const selectedTitle = projectData.map((v: ProjectType) => v.title);

  const show_project = projectData.find(
    (v: ProjectType) => v.title === firstTitle,
  );

  return (
    <div className={css.project} id="ProjectPage">
      <div className={css.pj_top}>
        {selectedTitle.map((title, index) => (
          <h4
            key={index}
            onClick={() => clickTitle(title)}
            className={firstTitle === title ? css.selected : ''}>
            {title}
          </h4>
        ))}
      </div>

      <div className={css.pj_mid}>
        <div>
          {show_project ? (
            <div className={css.pj_mid_left}>
              <h2 className={css.show_project_title}>
                {show_project.link !== '' ? (
                  <a
                    href={show_project.link}
                    target="_blank"
                    rel="noopener noreferrer">
                    🌐보러가기
                  </a>
                ) : (
                  show_project.title
                )}
              </h2>
              <img
                className={`${css.show_project_img} ${
                  show_project.title === '끄적임' ||
                  show_project.title === '코난위키' ||
                  show_project.title === '나의 포트폴리오'
                    ? css.끄적임이미지
                    : show_project.title === '밴러지'
                    ? css.밴러지이미지
                    : css.모바일이미지
                }`}
                loading="lazy"
                src={show_project.image}
                alt={show_project.title}
              />
            </div>
          ) : (
            <p>프로젝트를 선택하세요.</p>
          )}
        </div>

        {show_project ? (
          <div className={css.pj_mid_right}>
            <div className={css.right}>
              {' '}
              <p className={css.showData_p}>📍소개&기능</p>
              <p className={css.showData_p2}>{show_project.intro}</p>
            </div>
            <div className={css.right}>
              {' '}
              <p className={css.showData_p}>📍개발기간</p>{' '}
              <p className={css.showData_p2}>{show_project.period}</p>
            </div>

            <div className={css.right}>
              {' '}
              <p className={css.showData_p}>📍개발인원</p>{' '}
              <p className={css.showData_p2}>{show_project.personnel}</p>
            </div>
            <div className={css.right}>
              {' '}
              <p className={css.showData_p}>📍사용 기술</p>{' '}
              <p className={css.showData_p3}>{show_project.skill}</p>
            </div>
            <div className={css.right}>
              {' '}
              <p className={css.showData_p}>📍깃허브</p>
              <div style={{width: '100%'}}>
                <img
                  className={css.SNS_img5}
                  onClick={() => window.open(show_project.git, '_blank')}
                  alt="깃허브"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  loading="lazy"
                />
              </div>
            </div>
            <div className={css.right}>
              {' '}
              <p className={css.showData_p}>📍나의역할</p>{' '}
              <ul className={css.showData_p4}>
                {show_project.role.map(v => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p>프로젝트를 선택하세요.</p>
        )}
      </div>
    </div>
  );
}
