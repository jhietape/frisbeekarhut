import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useDateFormat } from "../../hooks/useDateFormat";
import { IArticleCard } from "../../types/article";

const ArticleCard = ({
  title,
  text,
  publishedAt,
  onClick,
  cover_image,
}: IArticleCard) => {
  const formattedPublishedAtDate = useDateFormat(publishedAt);

  return (
    <div className="card card-compact max-w-3xl" onClick={onClick}>
      <div className="card">
        <div className="card-body">
          <div className="font-xs flex flex-row justify-between">
            <div>{formattedPublishedAtDate}</div>
          </div>
          <h2 className="card-title">{title}</h2>
          <div className="">
            <img src={cover_image} />
          </div>
          {/*           <ReactMarkdown
            className="prose prose-img:rounded-xl prose-img:max-h-64 max-w-none"
            children={text}
            transformImageUri={(uri) =>
              uri.startsWith("http")
                ? uri
                : `${process.env.REACT_IMAGE_BASE_URL}${uri}`
            }
          /> */}
        </div>
      </div>
    </div>
  );
};
export default ArticleCard;
