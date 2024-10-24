import contributors from './contributors.json';

interface Contributor {
  avatar: string;
}

function getAvatarUrl(url:string) {
  return url;
}

const contributorList: Contributor[] = contributors.map((url: string) => ({
  avatar: getAvatarUrl(url),
}));

export { contributorList as contributors };
