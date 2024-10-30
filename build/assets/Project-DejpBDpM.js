import{r as n,j as t}from"./index-Bx8jlSJY.js";function p(){return[[{title:"끄적임",image:"./image/끄적임.webp",review:`멋사 12기 해커톤에 참여했던 프로젝트입니다.
짧은 시간안에 프로젝트를 하면서 많은 것들을 배울 수 있었습니다.`,intro:`고민을 끄적이며 위로와 전문의의 댓글을 통해
 간략한 상담을 받을 수 있는 웹`,period:"2024.07~2024.08 (1개월)",platform:"WEB",personnel:"5명",role:["Context API를 이용한 공통 컴포넌트","서버와 API 연동","전체적인 코드 통합 및 유지보수"],skill:"JavaScript , CSS, React , Java , Spring , Mysql",git:"https://github.com/kimnambin/hackathon_team3_front"},{title:"밴러지",image:"./image/KakaoTalk_20240611_191649217_03_11zon.webp",review:`Flutter를 사용하여 졸업 작품으로 진행했던 프로젝트입니다. 
처음으로 대규모 프로젝트를 하면서 협업에 대해 여러가지 배우고
경험할 수 있었습니다`,intro:"식품 알레르기 환자를 위한 애플리케이션",period:"2023.09~2024.09 (12개월)",platform:"APP",personnel:"5명",role:["전체적인 화면 구현","서버와 API 연동","전체적인 코드 통합 및 유지보수","데이터베이스 설계","PaddleOCR 라이브러리 적용"],skill:"Flutter ,Dart ,Python ,Sqlite ,Flask",git:"https://github.com/kimnambin/banergy"},{title:"나의 포트폴리오",image:"./image/port_11zon.webp",review:"",intro:"나의 포트폴리오 웹사이트",period:"2024.10",platform:"WEB",personnel:"1명",role:["나의 포트폴리오 웹사이트 개발","깃허브를 통한 배포","lighthouse를 이용한 웹 최적화","(웹 성능 76점에서 98점으로 향상)"],skill:"TypeScript, JavaScript , React",git:"https://github.com/kimnambin/My_Portfolio"},{title:"노드스타그램",image:"./image/노드스타그램.webp",review:`NodeJs 공부를 위해 인스타그램을 클론코딩
이때 처럼으로 MongoDB를 사용해보았습니다.`,intro:"NodeJS를 이용한 인스타그램 클론코딩",period:"2024.02~2024.05 (3개월)",platform:"WEB",personnel:"1명",role:["전체적인 화면 구현","로그인/회원가입 구현","MongoDB 이용한 게시글/스토리 업로드","Socket.io를 이용한 간단한 채팅 기능"],skill:`HTML/CSS, JavaScript 
NodeJS, MongoDB `,git:"https://github.com/kimnambin/nodestagram"}]]}const m="_project_fqm4t_1",h="_pj_top_fqm4t_29",d="_pj_mid_left_top_fqm4t_53",j="_SNS_img5_fqm4t_97",g="_selected_fqm4t_105",w="_pj_mid_fqm4t_53",f="_pj_mid_left_fqm4t_53",D="_pj_mid_right_fqm4t_153",x="_right_fqm4t_169",N="_showData_left_fqm4t_185",q="_showData_title_fqm4t_207",S="_showData_right_fqm4t_219",v="_showData_img_fqm4t_235",k="_showData_p_fqm4t_291",u="_showData_p0_fqm4t_305",b="_showData_p2_fqm4t_325",P="_showData_p3_fqm4t_339",y="_showData_p4_fqm4t_353",s={project:m,pj_top:h,pj_mid_left_top:d,SNS_img5:j,selected:g,pj_mid:w,pj_mid_left:f,pj_mid_right:D,right:x,showData_left:N,showData_title:q,showData_right:S,showData_img:v,끄적임이미지:"_끄적임이미지_fqm4t_249",모바일이미지:"_모바일이미지_fqm4t_263",밴러지이미지:"_밴러지이미지_fqm4t_277",showData_p:k,showData_p0:u,showData_p2:b,showData_p3:P,showData_p4:y};function T(){const[i]=p(),[_,o]=n.useState("끄적임"),l=e=>{o(e)},c=i.map(e=>e.title),a=i.find(e=>e.title===_);return t.jsxs("div",{className:s.project,id:"ProjectPage",children:[t.jsx("div",{className:s.pj_top,children:c.map((e,r)=>t.jsx("h4",{onClick:()=>l(e),className:_===e?s.selected:"",children:e},r))}),t.jsxs("div",{className:s.pj_mid,children:[t.jsx("div",{children:a?t.jsxs("div",{className:s.pj_mid_left,children:[t.jsx("h2",{className:s.show_project_title,children:a.title=="밴러지"?"":a.title}),t.jsx("img",{className:`${s.show_project_img} ${a.title==="끄적임"||a.title==="나의 포트폴리오"?s.끄적임이미지:a.title==="밴러지"?s.밴러지이미지:s.모바일이미지}`,loading:"lazy",src:a.image,alt:a.title})]}):t.jsx("p",{children:"프로젝트를 선택하세요."})}),a?t.jsxs("div",{className:s.pj_mid_right,children:[t.jsxs("div",{className:s.right,children:[" ",t.jsx("p",{className:s.showData_p,children:"📍소개&기능"}),t.jsx("p",{className:s.showData_p2,children:a.intro})]}),t.jsxs("div",{className:s.right,children:[" ",t.jsx("p",{className:s.showData_p,children:"📍개발기간"})," ",t.jsx("p",{className:s.showData_p2,children:a.period})]}),t.jsxs("div",{className:s.right,children:[" ",t.jsx("p",{className:s.showData_p,children:"📍개발인원"})," ",t.jsx("p",{className:s.showData_p2,children:a.personnel})]}),t.jsxs("div",{className:s.right,children:[" ",t.jsx("p",{className:s.showData_p,children:"📍사용 기술"})," ",t.jsx("p",{className:s.showData_p3,children:a.skill})]}),t.jsxs("div",{className:s.right,children:[" ",t.jsx("p",{className:s.showData_p,children:"📍깃허브"}),t.jsx("div",{style:{width:"100%"},children:t.jsx("img",{className:s.SNS_img5,onClick:()=>window.open(a.git,"_blank"),alt:"깃허브",src:"https://cdn-icons-png.flaticon.com/512/25/25231.png",loading:"lazy"})})]}),t.jsxs("div",{className:s.right,children:[" ",t.jsx("p",{className:s.showData_p,children:"📍나의역할"})," ",t.jsx("ul",{className:s.showData_p4,children:a.role.map(e=>t.jsx("li",{children:e},e))})]})]}):t.jsx("p",{children:"프로젝트를 선택하세요."})]})]})}export{T as default};