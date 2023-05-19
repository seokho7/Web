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
        <nav className="bg-white px-4 lg:px-6 py-2.5 border-b-2">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link href="/" className='flex justify-between gap-3 items-center'>
                    <Image src={profilePic} alt='시그니처 페페' style={{ width : "50px",height : "40px"}}></Image>
                    <h1 className='font-bold'>예아</h1>
                </Link>
            </div>
        </nav>
    </header>
  );
}