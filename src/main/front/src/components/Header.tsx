'use client'
import Link from 'next/link';
import Image from 'next/image';
import profilePic from '../../public/eric_logo.png';

export default function Header() {
  const reset = () : void => {
    localStorage.clear();
    location.reload();
  }
  return (
    <header>
        <nav className="bg-white px-4 lg:px-6 py-2.5 dark:bg-gray-800 m-4 rounded-lg ">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link href="/" className='flex justify-between gap-3'>
                    <Image src={profilePic} alt='파비콘 임시 이미지' style={{ width : "50px",height : "40px"}}></Image>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">DoDo List</span>
                </Link>
                <div>
                    <Link href="/pages/userList">
                        <button className="btn btn-primary w-20">리스트</button>
                    </Link>
                    <button className='btn btn-error text-white w-20 ml-6' onClick={reset}>초기화</button>
                </div>
            </div>
        </nav>
    </header>
  );
}