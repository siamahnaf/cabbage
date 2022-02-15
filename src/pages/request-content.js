import { Container } from "@mui/material";

//Layout
import Layout from "Layout";

//Components
import Title from "Components/Request/Title";
import Paragraph from "Components/Request/Paragraph";
import Form from "Components/Request/Form";

//SEO
import Seo from "Utilis/Seo";

const Content = () => {
    return (
        <Layout activePage="content">
            <Seo title="Request Content | The Fearless Programming!" />
            <Container maxWidth={false} component="section" disableGutters sx={{ py: "30px" }}>
                <Title />
                <Paragraph />
                <Form />
            </Container>
        </Layout>
    );
};
export default Content;