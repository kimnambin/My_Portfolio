import {useState} from 'react';
import Project_data from './Project_data';
import React from 'react';
import css from '../style/Project.module.css';

export default function Project() {
  const [project_array] = Project_data(); // Call the function to get project_data

  //프로젝트 초기값
  const [firstTitle, setFirstTitle] = useState('끄적임');
  // 프로젝트 클릭
  const clickTitle = (title: React.SetStateAction<string>) => {
    setFirstTitle(title);
  };
  //프로젝트 선택 시 제목
  const selectedTitle = project_array.map(v => v.title);
  //제목에 맞는 거 찾아오기
  const show_project = project_array.find(v => v.title === firstTitle);

  return (
    <div className={css.project} id="ProjectPage">
      <div className={css.pj_top}>
        {/* 이게 위의 제목들 */}
        {selectedTitle.map((title, index) => (
          // 제목이 선택되면 selected 발동 아니면 ''
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
          {/* 데이터가 선택이 됐으면 ?  내용 : 프젝 선택하라 */}
          {show_project ? (
            <div className={css.pj_mid_left}>
              <h2 className={css.show_project_title}>
                {show_project.title == '밴러지' ? '' : show_project.title}
              </h2>
              <img
                className={`${css.show_project_img} ${
                  show_project.title === '끄적임' ||
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

        {/* 데이터가 선택이 됐으면 ?  내용 : 프젝 선택하라 */}
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
            {/* <div className={css.right}>
              {' '}
              <p className={css.showData_p}>📍플랫폼</p>{' '}
              <p className={css.showData_p2}>{show_project.platform}</p>
            </div> */}
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
