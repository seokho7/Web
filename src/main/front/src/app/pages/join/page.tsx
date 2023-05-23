'use client'

import Image from 'next/image';

import logoLocation from "../../../../public/seokho-web-logo.png"
import useSignUpForm from '@/hooks/useSignUpForm';

export default function Home() {  

  const {formData , handleInputChange} = useSignUpForm();
  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault();
    console.log(formData)    
    // api 호출 코드 넣기
    let signUrl = "/members/new";
    fetch(signUrl,{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(formData)
    }).then(res => console.log(res))
  }

  return (
    <main className="main">
      <div className="row h-full flex flex-col mt-44">
        <Image src={logoLocation} width={150} height={150} alt='석호 웹 로고' className='mAuto'/>
        <form action="" className="flex flex-col gap-3 mb-5 mt-7" onSubmit={handleSubmit}>
          <ul className="flex justify-center flex-col">
            <li className="form-control w-full">
              <label className="label">
                  <span className="label-text">닉네임</span>
                </label>
                <input 
                  type="text" 
                  placeholder="10자리 이하 닉네임" 
                  className="input input-bordered input-info w-full  bg-white"
                  name='USER_NICKNAME'
                  value={formData.USER_NICKNAME}
                  onChange={handleInputChange} />
            </li>
            <li className="form-control w-full">
              <label className="label">
                  <span className="label-text">이메일</span>
                </label>
                <input 
                  type="text" 
                  placeholder="example@naver.com" 
                  className="input input-bordered input-info w-full  bg-white"
                  name='USER_EMAIL'
                  value={formData.USER_EMAIL}
                  onChange={handleInputChange} />
            </li>
            <li className="form-control w-full">
              <label className="label">
                  <span className="label-text">비밀번호</span>
                </label>
                <input 
                  type="password" 
                  placeholder="10자리 이상 비밀번호" 
                  className="input input-bordered input-info w-full  bg-white"
                  name='USER_PW'
                  value={formData.USER_PW}
                  onChange={handleInputChange}  />
            </li>
            <li className="form-control w-full">
              <label className="label">
                  <span className="label-text">휴대폰</span>
                </label>
                <input 
                  type="number" 
                  placeholder="01012345678" 
                  className="input input-bordered input-info w-full  bg-white"
                  name='USER_PHONE'
                  value={formData.USER_PHONE}
                  onChange={handleInputChange}
                  onInput={(e : React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.value.length > e.target.maxLength)
                      e.target.value = e.target.value.slice(0, e.target.maxLength);
                  }}
                  maxLength={11}
                  />
            </li>
          </ul>
          <button type='submit' className="btn btn-info text-white mt-7">회원가입</button>
        </form>

      </div>
    </main>
  )
}
