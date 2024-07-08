import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();  // retrieve the params via a hook

    const selectedMailbox = props.mailboxes.find((mailbox) => mailbox._id == mailboxId);

    return (
        <>
            <h2>Mailbox</h2>
            <dl>
                <dt>Box Size:</dt>
                <dd>{ selectedMailbox.boxSize }</dd>
                <dt>Box Holder:</dt>
                <dd>{ selectedMailbox.boxholder }</dd>
            </dl>
        </>
    );
};

export default MailboxDetails;