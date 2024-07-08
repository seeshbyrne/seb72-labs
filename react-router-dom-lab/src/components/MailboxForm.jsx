import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
    boxSize: '',
    boxholder: '',
};

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const _handleSubmit = (event) => {
        event.preventDefault();
        props.addBox(formData);
        navigate('/mailboxes');
    };

    const _handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    return (
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={ _handleSubmit}>
                <label>
                    Box Size:
                    <input name="boxSize" onChange={ _handleChange } value={ formData.boxSize }/>
                </label>
                <label>
                    Box Handler:
                    <input name="boxholder" onChange={ _handleChange } value={ formData.boxholder }/>
                </label>
                <button>Add Mailbox</button>
            </form>
        </main>
    );
};

export default MailboxForm;