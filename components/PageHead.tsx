import Head from "next/head";

interface PageHeadProps {
  title: string;
}

const PageHead: React.FC<PageHeadProps> = (props) => {
  const { title } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={title} />
      <link rel="icon" href="/lilie.png" />
    </Head>
  );
};

export default PageHead;
