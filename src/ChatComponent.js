import { Box, TextField } from '@mui/material';
import './Chat.css';
import { useEffect, useState } from 'react';



function ChatComponent() {

    const DEFAULT_MESSAGE = [
        {
            pergunta: 'Márcio: oi',
            resposta: 'ChatGpt: Olá'
        },
        {
            pergunta: 'Tudo bem?',
            resposta: 'Tudo ótimo'
        },
    ];

    const [message, setMessage] = useState('')
    const [arrayConversa, setArrayConversa] = useState(DEFAULT_MESSAGE)

    const handleInputChange = (e) => {
        setMessage(e.target.value)
    }

    const handleMessageSubmit = (e) => {
        e.preventDefault()
        setArrayConversa([...arrayConversa, {
            pergunta: message,
            resposta: 'nada'
        }])
    }

    useEffect(() => {
        console.log(arrayConversa)
    }, [arrayConversa])


    return (
        <div>
            {

                arrayConversa.map(i => {
                    return (
                        <>
                        <Box key={i.pergunta}> 
                            <Box style={{ background: 'black' }}>
                                <h3 className='pergunta'>
                                    {i.pergunta}
                                </h3>
                                <h3 className='resposta'>
                                    {i.resposta}
                                </h3>
                            </Box>           
                        </Box>
                        </>
                    )
                })
            }

            <form onSubmit={handleMessageSubmit}>
                <TextField
                    label="Digite"
                    variant="outlined"
                    size="small"
                    onChange={handleInputChange}
                />
            </form>


        </div>
    );
}

export default ChatComponent;
