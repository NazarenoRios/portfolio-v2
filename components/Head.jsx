import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Nazareno Rios is a full stack developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="nazareno rios, nazareno, rios, web developer portfolio, nazareno web developer, nazareno developer, mern stack, nazareno rios portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Nazareno Rios's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:url" content="https://nrios.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Nitin Ranganath',
};
