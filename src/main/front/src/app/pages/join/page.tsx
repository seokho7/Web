"use client";

import Image from "next/image";

import logoLocation from "../../../../public/seokho-web-logo.png";
import useSignUpForm from "@/hooks/useSignUpForm";
import { ReactElement, useState } from "react";

export default function Home() {
  const { formData, handleInputChange , nullCheck } = useSignUpForm();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // api 호출 코드 넣기
    let signUrl = "/members/new";
    fetch(signUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => console.log(res));
  };

  const checkNick = (e : React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let targetNickname = formData["userNickname"];
    
    let checkUrl = "/members/checkNickname";

    fetch(checkUrl,{
      method : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : targetNickname
    })
  }

  return (
    <main className="main">
      <div className="row h-full flex flex-col">
        <Image
          src={logoLocation}
          width={120}
          height={120}
          alt="석호 웹 로고"
          className="mAuto"
        />
        <form
          action=""
          className="flex flex-col gap-3 mb-5 mt-7"
          onSubmit={handleSubmit}
        >
          <ul className="flex justify-center flex-col">
            <li className="form-control w-full">
              <label className="label">
                <span className="label-text">닉네임</span>
              </label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="10자리 이하 닉네임"
                  className="input input-bordered input-info  bg-white flex-1 mr-2"
                  name="userNickname"
                  value={formData.userNickname}
                  onChange={handleInputChange}
                />
                <button className="btn btn-info text-white" onClick={checkNick} disabled={nullCheck ? true : false}>중복 확인</button>
              </div>
            </li>
            <li className="form-control w-full">
              <label className="label">
                <span className="label-text">이메일</span>
              </label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="example@naver.com"
                  className="input input-bordered input-info w-full  bg-white mr-2"
                  name="userEmail"
                  value={formData.userEmail}
                  onChange={handleInputChange}
                />
                <button className="btn btn-info text-white" disabled>중복 확인</button>
              </div>
            </li>
            <li className="form-control w-full">
              <label className="label">
                <span className="label-text">비밀번호</span>
              </label>
              <input
                type="password"
                placeholder="10자리 이상 비밀번호"
                className="input input-bordered input-info w-full  bg-white"
                name="userPw"
                value={formData.userPw}
                onChange={handleInputChange}
              />
            </li>
            <li className="form-control w-full">
              <label className="label">
                <span className="label-text">휴대폰</span>
              </label>
              <div className="flex">
                <input
                  type="number"
                  placeholder="01012345678"
                  className="input input-bordered input-info w-full  bg-white mr-2"
                  name="userPhone"
                  value={formData.userPhone}
                  onChange={handleInputChange}
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.value.length > e.target.maxLength)
                      e.target.value = e.target.value.slice(
                        0,
                        e.target.maxLength,
                      );
                  }}
                  maxLength={11}
                />
                <button className="btn btn-info text-white" disabled>인증하기</button>
              </div>
            </li>
          </ul>
          <button type="submit" className="btn btn-info text-white mt-7">
            회원가입
          </button>
        </form>
      </div>
    </main>
  );
}
