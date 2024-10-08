export interface Project {
  title: string;
  image: string;
  review: string;
  intro: string;
  period: string;
  platform: string;
  personnel: string;
  role: string[];
  skill: string;
  git: string;
}

export default function Project_data(): [Project[]] {
  const project_array: Project[] = [
    {
      title: '끄적임',
      image: '/image/끄적임.png',
      review:
        '멋사 12기 해커톤에 참여했던 프로젝트입니다.\n짧은 시간안에 프로젝트를 하면서 많은 것들을 배울 수 있었습니다.',
      intro:
        '고민을 끄적이며 위로와 전문의의 댓글을 통해\n 간략한 상담을 받을 수 있는 웹',
      period: '2024.07~2024.08 (1개월)',
      platform: 'WEB',
      personnel: '5명',
      role: [
        '전체적인 화면 구현',
        '서버와 API 연동',
        '전체적인 코드 통합 및 유지보수',
      ],
      skill: 'JavaScript , CSS, React , Java , Spring , Mysql',
      git: 'https://github.com/kimnambin/hackathon_team3_front',
    },

    {
      title: '밴러지',
      image: '/image/KakaoTalk_20240611_191649217_03.jpg',
      review:
        'Flutter를 사용하여 졸업 작품으로 진행했던 프로젝트입니다. \n처음으로 대규모 프로젝트를 하면서 협업에 대해 여러가지 배우고\n경험할 수 있었습니다',
      intro: '식품 알레르기 환자를 위한 애플리케이션',
      period: '2023.09~2024.09 (12개월)',
      platform: 'APP',
      personnel: '5명',
      role: [
        '전체적인 화면 구현',
        '서버와 API 연동',
        '전체적인 코드 통합 및 유지보수',
        '데이터베이스 설계',
        'PaddleOCR 라이브러리 적용',
      ],
      skill: 'Flutter ,Dart ,Python ,Sqlite ,Flask',
      git: 'https://github.com/kimnambin/banergy',
    },
    {
      title: '노드스타그램',
      image: '/image/프로필 페이지.png',
      review:
        'NodeJs 공부를 위해 인스타그램을 클론코딩\n이때 처럼으로 MongoDB를 사용해보았습니다.',
      intro: 'NodeJS를 이용한 인스타그램 클론코딩',
      period: '2024.02~2024.05 (3개월)',
      platform: 'WEB',
      personnel: '1명',
      role: [
        '전체적인 화면 구현',
        '로그인/회원가입 구현',
        'MongoDB를 이용한 게시글/스토리 업로드',
        'Socket.io를 이용한 간단한 채팅 기능',
      ],
      skill: 'HTML/CSS, JavaScript \nNodeJS, MongoDB ',
      git: 'https://github.com/kimnambin/nodestagram',
    },

    {
      title: 'TMI',
      image: '/image/메인화면.png',
      review: 'IONIC과 ANGULAR를 사용하여 간단한 앱을\n구현해보았습니다.',
      intro: '쓸데없는 지식들을 알려주는 앱',
      period: '2024.04~2024.05 (1개월)',
      platform: 'WEB/APP',
      personnel: '1명',
      role: [
        '검색기능 구현',
        '글작성 및 실시간 업로드',
        'PHP를 이용한 서버 연동',
      ],
      skill: 'Ionic ,Angular, TypeScript , GCP , PHP ',
      git: 'https://github.com/kimnambin/JS_master',
    },
    {
      title: '이상형 월드컵',
      image: './image/이상형 월드컵 메인 페이지.png',
      review:
        '지금까지 배우고 사용했던 HTML/CSS/JS을 이용해서\n간단한 이상형 월드컵을 구현해봤습니다.\n깃허브 배포를 통해 처음으로 배포도 해보았습니다.',
      intro: '아이돌 이상형 월드컵 페이지구현',
      period: '2023.07~2023.09 (2개월)',
      platform: 'WEB',
      personnel: '1명',
      role: [
        '피그마를 통한 UI 디자인',
        '전체적인 화면 구현',
        '로컬스토리지를 이용한 결과 저장',
      ],
      skill: 'HTML/CSS, JavaScript',
      git: 'https://github.com/kimnambin/IdolWorldCup',
    },
  ];
  return [project_array];
}
