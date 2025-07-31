import {FaTrophy, FaPen} from 'react-icons/fa';
import {AwardType, infoType} from '../type/profile.model';
import {IoLogoGithub} from 'react-icons/io5';
import {RiBloggerFill} from 'react-icons/ri';
import {MdOutlineMail} from 'react-icons/md';
import {IoIosPhonePortrait} from 'react-icons/io';
import {PiFileText} from 'react-icons/pi';

export const awardsData: AwardType[] = [
  {year: '2025', title: 'SCC 공모전', description: '최우수상', icon: <FaPen />},
  {
    year: '2024',
    title: '한이음 ICT멘토링 공모전',
    description: '입상',
    icon: <FaPen />,
  },
  {
    year: '2024',
    title: 'KCI 논문 게재',
    description: '보러가기',
    icon: <FaTrophy />,
    link: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003075378',
  },
  {
    year: '2024',
    title: 'VGA 캡스톤 디자인(2) 경진대회',
    description: '우수상',
    icon: <FaTrophy />,
  },
  {
    year: '2023',
    title: 'IIBC 한국인터넷방송통신학회',
    description: '우수논문상',
    icon: <FaTrophy />,
  },
  {
    year: '2023',
    title: 'UX Design 소논문 경진대회',
    description: '우수상',
    icon: <FaTrophy />,
  },
];

export const infoData: infoType[] = [
  {
    href: 'https://github.com/kimnambin',
    icon: <IoLogoGithub className="icons" />,
    title: '깃허브',
    description: '깃허브 보기',
  },
  {
    href: 'https://nanifood.tistory.com/',
    icon: <RiBloggerFill className="icons" />,
    title: '블로그',
    description: '블로그 보기',
  },
  {
    href: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003075378',
    icon: <FaPen className="icons" />,
    title: '논문',
    description: 'KCI 논문 게재',
  },
  {
    href: null,
    icon: <MdOutlineMail className="icons" />,
    title: '이메일',
    description: 'mkkim044@naver.com',
  },
  {
    href: null,
    icon: <PiFileText className="icons" />,
    title: '이력서',
    description: '이력서 준비중...',
  },
  {
    href: null,
    icon: <IoIosPhonePortrait className="icons" />,
    title: '연락처',
    description: '010-9666-7750',
  },
];
