import React, {useState, FormEvent} from 'react';
import {useHistory} from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';

import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css';

function TeacherForm() {
    const history = useHistory();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [bio, setBio] = useState('');
    const [valor, setValor] = useState('');

    

    function handleCreateClass(e) {
        e.preventDefault();

        api.post('classes', {
            nome,
            email,
            senha,
            telefone,
            bio,
            valor: Number(valor),
            
        }).then(() => {
            alert('Cadastro realizado com sucesso!');

            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro!');
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas." 
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input 
                            name="nome" 
                            label="Nome completo" 
                            value={nome} 
                            onChange={(e) => {
                                setNome(e.target.value)
                            }} />
                        
                        <Input 
                            name="email" 
                            label="email"
                            value={email} 
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />    

                        <Input 
                            name="senha" 
                            label="Senha"
                            value={senha} 
                            onChange={(e) => {
                                setSenha(e.target.value)
                            }}
                        />

                        <Input 
                            name="telefone" 
                            label="Telefone "
                            value={telefone} 
                            onChange={(e) => {
                                setTelefone(e.target.value)
                            }}
                        />    

                        <Textarea 
                            name="bio" 
                            label="Biografia"
                            value={bio} 
                            onChange={(e) => {
                                setBio(e.target.value)
                            }}
                        />
    
                        <Input 
                            name="Valor" 
                            label="Custo da sua hora de Trabalho (Em R$) " 
                            value={valor}
                            onChange={(e) => {
                                setValor(e.target.value)
                            }}
                        />
                    </fieldset>

                        
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante"/>
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">Salvar cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;