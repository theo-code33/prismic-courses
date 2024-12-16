import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";

const ArticlesPage = async () => {
  const client = createClient();
  const articles = await client.getAllByType("articles");
  return (
    <div>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={`/articles/${article.uid}`}>
              <h2>{article.data.title}</h2>
              <PrismicNextImage field={article.data.previewimage} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesPage;
