import { Box } from "@mui/material";
import Link from "next/link";

//Logo
import LogoImage from "Assets/logo.png"

const Logo = () => {
    return (
        <Box>
            <Link href="/">
                <a>
                    <Box sx={{ width: { md: "60%", smd: "57%", xxs: "130px" } }} component="img" src={LogoImage} alt="Logo" />
                </a>
            </Link>
        </Box>
    );
};
export default Logo;