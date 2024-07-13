import contributors from './contributors.json';

interface Contributor {
  avatar: string;
}

function getAvatarUrl(qnumber: number) {
  return `https://q1.qlogo.cn/g?b=qq&nk=${qnumber}&s=640`;
}

const contributorList: Contributor[] = contributors.map((qnumber: number) => ({
  avatar: getAvatarUrl(qnumber),
}));

export { contributorList as contributors };
