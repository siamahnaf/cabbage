import Head from 'next/head';

const Seo = ({ title }) => {
    return (
        <Head>
            <meta property="og:url" content="https://siamahnaf.com" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content="Cabbage is a fearless programming platform. Here you can find web based tutorial and full web development courses:) Programming is the best in demand job in the world. Web programming is also the another field to create life more easier. And make money by working less than a hour more and more. Freelancing is one of them:) We are here for learn you all the type of programming you want learn. Stay with us and make the day more happier:)" />
            <title>{title}</title>
            <meta name="description" content="Cabbage is a fearless programming platform. Here you can find web based tutorial and full web development courses:) Programming is the best in demand job in the world. Web programming is also the another field to create life more easier. And make money by working less than a hour more and more. Freelancing is one of them:) We are here for learn you all the type of programming you want learn. Stay with us and make the day more happier:)" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta name="keywords" content="Siam, Siam Ahnaf" />
            <meta name="author" content="Siam Ahnaf" />
        </Head>
    );
};
export default Seo;