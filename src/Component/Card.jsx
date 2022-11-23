import {Card as BCard} from 'react-bootstrap';

function Card(props) {
    const cardStyle = {
        width: '30%',
        margin: '0 auto',
        marginTop: props.marginTop,
        boxShadow: '0 2px 5px 0',
        minWidth: '300px'
    }

    const titleStyle = {
        textAlign: 'center'
    }

    return (
        <>
            <BCard style={cardStyle}>
                <BCard.Body>
                    <BCard.Title style={titleStyle}>{props.title}</BCard.Title>
                    <BCard.Text>{props.text}</BCard.Text>
                    {props.children}
                </BCard.Body>
            </BCard>
        </>
    );
}

export default Card;