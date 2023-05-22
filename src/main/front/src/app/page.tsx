'use client'
import Image from 'next/image';
import Link from 'next/link';

import KakaoIcon from "../../public/icon/kakao-icon.svg";
import GoogleIcon from "../../public/icon/goggle-icon.svg";
import GitHubIcon from "../../public/icon/github-icon.svg";
import AppleIcon from "../../public/icon/apple-icon.svg";

import logoLocation from "../../public/seokho-web-logo.png"

enum Site {
  Kakao = "kakao-btn",
  Google = "goggle-btn",
  GitHub = "github-btn",
  Apple = "apple-btn",
}

export default function Home() {

  const siteList: Site[] = [Site.Kakao, Site.Google, Site.GitHub, Site.Apple];

  const svgList: Record<Site, JSX.Element> = {
    [Site.Kakao]: <KakaoIcon />,
    [Site.Google]: <GoogleIcon />,
    [Site.GitHub]: <GitHubIcon />,
    [Site.Apple]: <AppleIcon />,
  };

  const cls = (...classnames: string[]) => { return classnames.join(' '); }

  const SubLoginBtn = (site: Site): React.ReactNode => {
    if (siteList.includes(site)) {
      return (
        <button key={site} className={cls(site, "sub-login-btn", "flex", "justify-center", "items-center", "kakao-btn", "shadow-md")}>
          {svgList[site]}
        </button>
      );
    } else { return null; }
  };

  const test = () : void => {
    console.log("test console")
  }

  return (
    <main className="main">
      <div className="row h-full flex flex-col mt-44">
        <Image src={logoLocation} width={150} height={150} alt='석호 웹 로고' className='mAuto'/>
        <form action="" className="flex flex-col gap-3 mb-5 mt-7">
          <input type="text" placeholder="아이디" className="input input-bordered input-info w-full  bg-white" />
          <input type="password" placeholder="비밀번호" className="input input-bordered input-info w-full  bg-white" />
          <button className="btn btn-info text-white" onClick={test}>로그인</button>
        </form>
        <ul className="flex justify-center">
          <li className="join_list mr-3">
            <a href="" className="hover:font-bold">아이디 찾기</a>  
          </li>
          <li className="join_list mr-3">
            <a href="" className="hover:font-bold">비밀번호 찾기</a>  
          </li>
          <li>
            <Link href="/pages/join">회원가입</Link>
          </li>
        </ul>
        <article className="flex justify-center gap-7 mt-7">
            {siteList.map((item)=> SubLoginBtn(item) )}
        </article>
      </div>
    </main>
  )
}
