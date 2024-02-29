"use client"

import { useRouter } from 'next/navigation';

const LanguageSwitcher = () => {
  const router = useRouter();
 

  const switchLanguage = (newPath) => {
   

    router.push(newPath);
  };

  return (
    <div>
      <button onClick={() => switchLanguage('ua')}>
        UA
      </button>
      <button onClick={() => switchLanguage('en')}>
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;