import Head from 'next/head';

const Seo = ({ title }) => {
    return (
        <Head>
            <meta property="og:url" content="https://www.cabbageweb.tech/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content="Cabbage is a fearless programming platform. Here you can find web based tutorial and full web development courses:) Programming is the best in demand job in the world. Web programming is also the another field to create life more easier. And make money by working less than a hour more and more. Freelancing is one of them:) We are here for learn you all the type of programming you want learn. Stay with us and make the day more happier:)" />
            <title>{title}</title>
            <meta name="description" content="Cabbage is a fearless programming platform. Here you can find web based tutorial and full web development courses:) Programming is the best in demand job in the world. Web programming is also the another field to create life more easier. And make money by working less than a hour more and more. Freelancing is one of them:) We are here for learn you all the type of programming you want learn. Stay with us and make the day more happier:)" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta name="keywords" content="Cabbage, cabage, cabage, cabbege, kabbage, cababage, kababage, programming with cabbage, program with cabbage, program by cabbage, programming by cabbage, kabbage, cabbage, cabage, cabb base, cabbase, kabbase, kabase, cab, cabb, kabb, kab base, kab bage, cabbage coding, cabbage coding, motivation, career, business, job, coding, freelancing, website design, learn to code, full stack, front end, developer, programmer, javascript, python, coding, css, html, web design, data science, mcahine learning" />
            <meta name="author" content="Cabbage" />
        </Head>
    );
};
export default Seo;