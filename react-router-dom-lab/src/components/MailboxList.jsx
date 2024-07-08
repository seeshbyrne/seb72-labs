import { Link } from "react-router-dom";

const MailboxList = (props) => {

    const mailboxListItems = props.mailboxes.map((mailbox) => (
        <li key={mailbox._id} className="mail-box">
            <Link to={ '/mailboxes/' + mailbox._id }>
                { mailbox._id }
            </Link>
        </li>
    ));


    return (
        <>
            <h2>Mailbox List</h2>
            <ul>
                { mailboxListItems }
            </ul>
        </>
    );
};

export default MailboxList;