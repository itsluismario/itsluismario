import { createContext, useState, useEffect } from "react";

interface Branch {
  title: string;
  subtitle: string;
  url: string;
}

interface MyInfoContextType {
  branchesList: Branch[];
  setBranchesList: React.Dispatch<React.SetStateAction<Branch[]>>;
}

export const myInfoContext = createContext<MyInfoContextType | null>(null);

const MyInfoProvider: React.FC = ({ children }:any) => {

  const [branchesList, setBranchesList] = useState<Branch[]>([]);

  useEffect(() => {
    const branchesInfo = [
      {
        title: 'My Philosophy',
        subtitle: 'How I see my life',
        url: '/my-philosophy',
      },
      {
        title: 'About me',
        subtitle: 'What is my goal in the next 10 years?',
        url: '/about',
      },
      {
        title: 'Projects',
        subtitle: 'Implementing my learnings',
        url: '/projects',
      },
      {
        title: 'Startup',
        subtitle: 'Trying to build the future',
        url: '/startup',
      },

    ];
    setBranchesList(branchesInfo);
   
  }, []);

  
  return (
    <myInfoContext.Provider 
        value={{ 
            branchesList, 
            setBranchesList 
        }}>
      {children}
    </myInfoContext.Provider>
  );
};

export default MyInfoProvider;
