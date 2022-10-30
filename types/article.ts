interface IArticle {
  title: string;
  text: string;
  publishedAt: string;
  updatedAt: string;
}

interface IArticleItem {
  attributes: IArticle;
  id: string;
}

interface IArticleCard extends IArticle {}

interface IArticlePageData {
  articles: any;
}

export type { IArticle, IArticleCard, IArticlePageData, IArticleItem };
