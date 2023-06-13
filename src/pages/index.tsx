import React, { useContext } from 'react';
import Layout from '../components/Layout/Layout';
import Branches from '@src/components/Branches/Branches';
import { myInfoContext } from '@src/context';

const HomePage = () => {
  const context = useContext(myInfoContext);

  return (
      <main className="flex flex-col items-center justify-center border-neutral-800">
        <Layout>
        <div className="flex flex-col items-center justify-center">
          <div className="grid text-center lg:mb-0 lg:grid-cols-4">
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
        </Layout>
      </main>
  );
};

export default HomePage;
