import { Stack, Typography } from "@mui/material";
import { Icon } from '@iconify/react';

//Styles
import styles from "Styles/Footer/Copyright.styles";

const Copyright = () => {
    return (
        <Stack direction="row" sx={styles.Copyright}>
            <Icon icon="ic:outline-copyright" />
            <Typography variant='body1' component='p'>
                {new Date().getFullYear()} {' '}
                Cabbage, All Rights Reserved.
            </Typography>
        </Stack>
    );
};
export default Copyright;