import axiosConfig from "../../util/axiosConfig";
import { GetServerSideProps, NextPage } from "next/types";
import ArticleCard from "../../components/Article/ArticleCard";
import { IArticleItem, IArticlePageData } from "../../types/article";
import { useRouter } from "next/router";

const Articles: NextPage<any> = ({ articles }: IArticlePageData) => {
  const router = useRouter();
  console.log(router.pathname);
  const articleList = articles.data.map((article: IArticleItem) => {
    return (
      <ArticleCard
        key={article.id}
        onClick={() => router.push(`${router.pathname}/${article.id}`)}
        title={article.attributes.title}
        text={article.attributes.text}
        publishedAt={article.attributes.publishedAt}
        updatedAt={article.attributes.updatedAt}
      />
    );
  });
  return (
    <div className="flex flex-col mx-8 lg:mx-48 my-8 lg:my-24">
      <h1>Ajankohtaista</h1>
      <div className="space-y-4 divide-y-2">{articleList}</div>
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

export default Articles;
