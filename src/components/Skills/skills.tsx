import React from 'react'
import type { CSSProperties } from 'react';
import { skills } from './data';
import { Chip, ChipGroup } from '../Chip';
import Icon from '@mdi/react';
import { cx } from 'classix';
import { log } from 'console';

const Skills = () => {
  const color = "hover:bg-sky-700/40 hover:border-sky-700 border-solid"
  return (
    <div
    className="text-left max-w-screen-sm group rounded-lg border border-transparent px-5 py-4 mb-20 transition-colors">
        <h2 className="mb-3 text-2xl font-semibold">
        Hard skills 
        </h2>
        <ChipGroup className={'pb-4'}>
          {skills
            .filter((skill) => !skill.hide)
            .map((skill, index) => {
              
            
              return (
                <li key={index}>
                  <Chip
                  className={color}
                >
                  
                  
                  <Icon path={skill.iconPath} size={0.8} />
                  <span className={'font-[300] '}>{skill.name}</span>
                  </Chip>
                </li>
              );
            })}
              <li>
                  <Chip className={color}>
                  <span className={'font-[300] '}>MySQL</span>
                  </Chip>
              </li>
              <li>
                  <Chip className={color}>
                  <span className={'font-[300] '}>C++</span>
                  </Chip>
              </li>
              <li>
                  <Chip className={color}>
                  <span className={'font-[300] '}>Django</span>
                  </Chip>
              </li>
          </ChipGroup>
    </div>
  )
}

export default Skills