import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import ReactMarkdown from "react-markdown";
import { useDateFormat } from "../../hooks/useDateFormat";
import { IArticle } from "../../types/article";
import axiosConfig from "../../util/axiosConfig";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const Article: NextPage<any> = ({ article }: any) => {
  const router = useRouter();
  const formattedPublishedAtDate = useDateFormat(
    article.attributes.publishedAt
  );
  return (
    <div className="flex flex-col items-center mx-8 lg:mx-48 my-8 lg:my-24">
      <div>
        <button onClick={() => router.back()} className="btn gap-2">
          <ArrowLeftCircleIcon className="h-6 w-6 text-primary" />
          Takaisin ajankohtaista sivulle
        </button>
      </div>
      <div className="divider"></div>
      <div className="card max-w-5xl">
        <div className="card">
          <div className="card-body p-0">
            <div className="font-xs flex flex-row justify-between">
              <div>{formattedPublishedAtDate}</div>
            </div>
            <h2 className="card-title">{article.attributes.title}</h2>
            <ReactMarkdown
              className="prose prose-img:rounded-xl max-w-none"
              children={article.attributes.text}
              transformImageUri={(uri) =>
                uri.startsWith("http")
                  ? uri
                  : `${process.env.NEXT_PUBLIC_REACT_IMAGE_BASE_URL}${uri}`
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Article;

// Pre-render paths for the posts
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axiosConfig.get(`${process.env.API_URL}/articles`);
  const articles: any = response.data;

  const paths = articles.data.map((article: any) => ({
    params: { id: article.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await axiosConfig.get(
    `${process.env.API_URL}/articles/${params?.id}`
  );
  const article: any = response.data.data;
  return {
    props: { article },
  };
};
