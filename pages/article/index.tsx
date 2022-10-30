import axiosConfig from "../../util/axiosConfig";
import { GetServerSideProps, NextPage } from "next/types";
import ArticleCard from "../../components/Article/ArticleCard";
import { IArticleItem, IArticlePageData } from "../../types/article";

const Article: NextPage<any> = ({ articles }: IArticlePageData) => {
  const articleList = articles.data.map((article: IArticleItem) => {
    return (
      <ArticleCard
        title={article.attributes.title}
        text={article.attributes.text}
        publishedAt={article.attributes.publishedAt}
        updatedAt={article.attributes.updatedAt}
      />
    );
  });
  return (
    <div className="flex flex-col mx-8 lg:mx-48 my-8 lg:my-24 space-y-12">
      <h1>Ajankohtaista</h1>
      <div>{articleList}</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axiosConfig.get(`${process.env.API_URL}/articles`);
  const articles: any = response.data;

  return {
    props: { articles },
  };
};

export default Article;
