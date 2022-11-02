interface IArticle {
  title: string;
  text: string;
  publishedAt: string;
  updatedAt: string;
  short_text?: string;
}

interface IArticleItem {
  attributes: IArticle;
  id: string;
}

interface IArticleCard extends IArticle {
  onClick?: () => void;
  cover_image?: string;
}

interface IArticlePageData {
  articles: any;
}

export type { IArticle, IArticleCard, IArticlePageData, IArticleItem };
