import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitter, faYoutube, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons'

const items = [
    {
        label: faFacebookSquare,
        url: 'https://www.facebook.com'
    },
    {
        label: faYoutube,
        url: 'https://www.youtube.com'
    },
    {
        label: faTwitter,
        url: 'https://twitter.com'
    },
    {
        label: faPinterest,
        url: 'https://www.pinterest.com'
    },
    {
        label: faInstagram,
        url: 'https://www.instagram.com'
    },
];

function Social() {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <Link to={item.url} target="_blank">
                        <FontAwesomeIcon icon={item.label} size="2x"/>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default Social;
