// pages/index.tsx
import React, { useContext } from 'react';
import Branches from '@src/components/Branches/Branches';
import { myInfoContext } from '@src/context';

const HomePage = () => {
  const context = useContext(myInfoContext);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid text-center lg:mb-0 lg:grid-cols-3">
        {context?.branchesList?.map((branch:any) => (
          <Branches
            key={branch.title}
            title={branch.title}
            subtitle={branch.subtitle}
            url={branch.url}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;