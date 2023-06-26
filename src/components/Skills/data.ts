import {
  mdiAndroid,
  mdiGit,
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguageJavascript,
  mdiLanguageKotlin,
  mdiLanguageTypescript,
  mdiLeaf,
  mdiMaterialDesign,
  mdiNodejs,
  mdiPuzzleOutline,
  mdiReact,
  mdiAccountGroupOutline,
  mdiPaletteSwatchOutline,
  mdiTailwind,
  nextJs,
  mdiLanguagePython,
  mdiLangC,
  mdiFirebase
} from '../Icons';

interface Skill {
  name: string;
  iconPath: string;
  color: string;
  hide?: boolean;
}

export const skills: Skill[] = [
  { name: 'TypeScript', iconPath: mdiLanguageTypescript, color: 'bg-emerald-300' },
  { name: 'JavaScript', iconPath: mdiLanguageJavascript, color: 'bg-rose-200' },
  { name: 'React', iconPath: mdiReact, color: '#00c2e6' },
  { name: 'Next.js', iconPath: nextJs, color: '#0070f3' },
  {
    name: 'Styled Components',
    iconPath: mdiPaletteSwatchOutline,
    color: '#c43bad',
  },
  { name: 'Tailwind CSS', iconPath: mdiTailwind, color: '#38bdf8' },
  { name: 'HTML5', iconPath: mdiLanguageHtml5, color: '#e34f26' },
  { name: 'CSS3', iconPath: mdiLanguageCss3, color: '#3572b5' },
  { name: 'Node.js', iconPath: mdiNodejs, color: '#61af43' },
  { name: 'Express', iconPath: mdiPuzzleOutline, color: '#888888' },
  { name: 'Git', iconPath: mdiGit, color: '#fc6d26' },
  // { name: 'Django', iconPath: mdiLanguagePython, color: '#fc6d26' },
  { name: 'Python', iconPath: mdiLanguagePython, color: '#fc6d26' },
  { name: 'Firebase', iconPath: mdiFirebase, color: '#fc6d26' },
  
];
