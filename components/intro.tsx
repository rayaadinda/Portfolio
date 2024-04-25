import React from 'react';

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className='text-center'>
            <div className="flex items-center justify-center mx:auto w-[677px] h-[146px] bg-[#e1f756] rounded-[20px]">
          <p className='mb-2 text-7xl font-medium leading-[1.5]'>
            <span className="font-semibold [font-family:'Plus_Jakarta_Sans-SemiBold',Helvetica]">Hai</span>
            <img src="/hand.png" alt="Hand" width={114} height={106} className="inline-block " />
            <span className="font-semibold [font-family:'Plus_Jakarta_Sans-SemiBold',Helvetica]">, I'm Raya</span>
          </p>
          </div>
          <p className='mb-2 text-7xl font-medium leading-[1.5]'>
            <span className="font-semibold [font-family:'Plus_Jakarta_Sans-SemiBold',Helvetica]">a frontend web developer</span>
          </p>
        </div>
      </div>
    </section>
  );
}
