import { useState } from 'react';
import { Box, Stack, Typography, InputBase, Grid, InputLabel, ButtonBase, CircularProgress } from "@mui/material";
import { useForm } from 'react-hook-form';
import { Icon } from '@iconify/react';
import emailjs from '@emailjs/browser';

//Styles
import styles from "Styles/Request/Form.styles";

const Form = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState();
    const [message, setMessage] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const onSubmit = (data, e) => {
        setLoading(true);
        emailjs.sendForm('service_zk1wcfm', 'template_e41bqnt', e.target, 'user_XRF3JvnG8iks4QWR05CI1')
            .then((result) => {
                setLoading(false);
                setSuccess(true);
                setMessage('Email received! We will consider your case.');
                reset();
            }, (error) => {
                setLoading(false);
                setSuccess(false);
                setMessage('Something went wrong. Try again!');
            });
    }
    return (
        <Box sx={{ mt: "30px" }}>
            <Typography variant="h5" component="h5" sx={{ fontWeight: 700, mb: "10px" }}>
                Please fill up the form!
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <Grid container columnSpacing={2}>
                    <Grid item sm={6} xxs={12}>
                        <Box>
                            <InputLabel sx={styles.InputLabel}>Name</InputLabel>
                            <InputBase
                                fullWidth={true}
                                sx={styles.InputField}
                                {...register('name')}
                            />
                            <InputLabel sx={styles.HintsLabel}>**We will not publish your Name</InputLabel>
                        </Box>
                    </Grid>
                    <Grid item sm={6} xxs={12}>
                        <Box>
                            <InputLabel sx={styles.InputLabel}>Email</InputLabel>
                            <InputBase
                                fullWidth={true}
                                sx={styles.InputField}
                                {...register(
                                    'email',
                                    {
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: 'The email you enter is invalid email!',
                                        },
                                    }
                                )}
                            />
                            <InputLabel sx={styles.HintsLabel}>**We will not publish your Email</InputLabel>
                        </Box>
                    </Grid>
                </Grid>
                <Box>
                    <InputLabel sx={styles.InputLabel}>What you want?</InputLabel>
                    <InputBase
                        fullWidth={true}
                        multiline={true}
                        minRows={10}
                        sx={styles.InputField}
                        {...register('message', { required: true })}
                    />
                    <InputLabel sx={styles.HintsLabel}>**You can attach file by giving their link</InputLabel>
                </Box>
                <Stack direction="row" sx={{ mt: "30px", alignItems: "center" }}>
                    <ButtonBase type="submit" sx={styles.Submit} className={loading ? "disable" : ""}>
                        Submit
                    </ButtonBase>
                    <Box>
                        {errors.email && (
                            <Typography variant="body1" component="p" sx={styles.ErrorMessage}>
                                <Icon icon='fluent:error-circle-12-filled' />
                                {errors.email.message}
                            </Typography>
                        )}
                        {errors.message && (
                            <Typography variant="body1" component="p" sx={styles.ErrorMessage}>
                                <Icon icon='fluent:error-circle-12-filled' />
                                Please add Your request content!
                            </Typography>
                        )}
                        {loading &&
                            <CircularProgress size={20} sx={{ color: "primary.main", mt: "5px" }} />
                        }
                        {message &&
                            <Typography
                                variant="body1"
                                component="p"
                                sx={success === true ? styles.EmailSuccess : styles.EmailError}
                            >
                                {message}
                            </Typography>
                        }
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};
export default Form;