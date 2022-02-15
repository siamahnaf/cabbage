import { Stack, Box, ButtonBase, List, ListItem } from "@mui/material";
import Link from "next/link";

//Data
import Navigation from "Data/Header/navs.data";

//Styles
import styles from "Styles/Header/Navs.styles";

const Navs = ({ activePage }) => {
    return (
        <Box>
            <List component={Stack} direction="row" sx={{ justifyContent: "center" }}>
                {Navigation &&
                    Navigation.map((nav, i) => (
                        <ListItem key={i} className={nav.id === activePage ? "active" : ""} sx={styles.Buttons}>
                            <Link href={nav.url}>
                                <a>
                                    <ButtonBase>
                                        {nav.name}
                                    </ButtonBase>
                                </a>
                            </Link>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );
};
export default Navs;