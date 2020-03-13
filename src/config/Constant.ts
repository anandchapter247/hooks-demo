export const pageLimit: number = 5;

// student education level
export const educationLevelOptions = [
  { label: 'Below High School', value: 'Below High School' },
  { label: 'High School/GED', value: 'High School/GED' },
  { label: 'Associates', value: 'Associates' },
  { label: 'Bachelor’s', value: 'Bachelor’s' },
  { label: 'Master’s', value: 'Master’s' },
  { label: 'PhD', value: 'PhD' },
  { label: 'Professional', value: 'Professional' }
];
export const mobMin: number = 9;
export const mobMax: number = 15;

// student experience level
export const experienceLevelOptions = [
  {
    label: '0-5',
    value: '0-5'
  },
  {
    label: '5-10',
    value: '5-10'
  },
  {
    label: '10-20',
    value: '10-20'
  },
  {
    label: '20+',
    value: '20+'
  }
];

// Level tag option
export const levelTag: string[] = [
  'Beginner',
  'Intermediate',
  'Advanced',
  'Expert'
];

export const getYoutubeVideoId = (url: any) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|v=)([^#]*).*/;
  const match = url.match(regExp);

  if (match && match[2].length === 11) {
    return match[2];
  } else {
    return 'error';
  }
};
export const getVimeoVideoId = (url: any) => {
  const urlArr = url.split(/video\/|https?:\/\/vimeo\.com\//);
  if (urlArr[1]) {
    return urlArr[1].split(/[?&]/)[0];
  } else {
    return 'error';
  }
};

export const phoneNumberMask: Array<any> = [
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/
];

export const facebookLink = 'https://www.facebook.com/drpollyedu/';
export const twitterLink = 'https://twitter.com/drpollyedu';
export const linkedInLink = 'https://www.linkedin.com/company/drpolly/';
