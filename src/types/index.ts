export interface ImagesDictionary {
  [key: string]: any;
}

export type ProjectType = {
  image: string | any;
  isWIP: boolean;
  title: string;
  description: string;
  link: string;
  repository: string;
};
