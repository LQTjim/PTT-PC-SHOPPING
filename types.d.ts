type Article = {
  id: string;
  title: string;
  href: string;
};
type ResponseData = {
  rows: Article[];
  nextPage: string;
};
