import { TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import {Container } from './styles';

function Login(){
    const [error, setError] =useState(false);

    const schema= yup.object().shape({
        username: yup.string().required('Campo obrigatório'),
        password: yup.string().min(6,'Minimo de 6 dígitos').required('Campo obrigatório')
    });

    const history = useHistory();
    
    const{
        register,
        handleSubmit,
        formState:{errors},
    }= useForm({resolver:yupResolver(schema)});

    const onSubmit = (data) =>{
        history.push('/')
    };


    return(
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                <TextField
                    margin='normal'
                    variant='outlined'
                    label='Nome de usuário'
                    name='username'
                    size='small'
                    {...register('username')}
                    error={!!errors.username}
                    helperText={errors.username?.message}
                    ></TextField>
                </div>

                <div>
                <TextField
                margin='normal'
                variant='outlined'
                label='Senha'
                name='password'
                type='password'
                size='small'
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password?.message}
                ></TextField>
                </div>
                <Button type='submit' variant='contained' color='primary' size='small' >
                Enviar
                </Button>
            </form>
            {error && <span>Usuário ou senha incorretas!</span>}
        </Container>
    );
}

export default Login;