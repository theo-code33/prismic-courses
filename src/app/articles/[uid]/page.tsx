import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";

const ArticlePage = async ({
  params,
}: {
  params: {
    uid: string;
  };
}) => {
  const { uid } = params;
  const client = createClient();
  let article;
  try {
    article = await client.getByUID("articles", uid);
  } catch (error) {
    notFound();
  }

  const { title, description } = article.data;

  return (
    <div>
      <h1>{title}</h1>
      <PrismicRichText field={description} />
      <SliceZone slices={article.data.slices} components={components} />
    </div>
  );
};

export default ArticlePage;
