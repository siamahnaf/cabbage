import { useState } from "react";
import { Stack, Box, ButtonBase, List, ListItem, ClickAwayListener } from "@mui/material";
import Link from "next/link";
import { Icon } from "@iconify/react";

//Data
import Navigation from "Data/Header/navs.data";

//Styles
import styles from "Styles/Header/Navs.styles";

const Navs = ({ activePage }) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ position: "relative" }}>
            <Box sx={{ display: { smd: "unset", xxs: "none" } }}>
                <List component={Stack} direction="row" sx={{ justifyContent: { md: "center", smd: "right" } }}>
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
            <ClickAwayListener onClickAway={handleClickAway}>
                <Box>
                    <Box sx={styles.MobileBar}>
                        <ButtonBase onClick={handleClick}>
                            {!open &&
                                <Icon icon="fa6-solid:bars" />
                            }
                            {open &&
                                <Icon icon="ep:close-bold" />
                            }
                        </ButtonBase>
                    </Box>
                    <Box sx={styles.MobileMenu} className={open ? "show" : ""}>
                        <List sx={{ justifyContent: "left" }}>
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
                </Box>
            </ClickAwayListener>
        </Box>
    );
};
export default Navs;