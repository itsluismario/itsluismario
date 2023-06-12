import React, { useContext } from 'react';
import Layout from '../components/Layout/Layout';
import Navbar from '@src/components/Navbar/Navbar';
import Branches from '@src/components/Branches/Branches';
import { myInfoContext } from '@src/context';

const HomePage = () => {
  const context = useContext(myInfoContext);

  return (
    <Layout>
      <main className="flex flex-col items-center justify-center ">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-[90vh] overflow-auto">
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
      </main>
    </Layout>
  );
};

export default HomePage;
