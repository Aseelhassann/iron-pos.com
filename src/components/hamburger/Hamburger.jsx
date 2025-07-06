import { HamburgerIcon } from './styled';


export const HamburgerMenu = ({ isExpanded, isOpen }) => {

    return (
        <HamburgerIcon className={isOpen ? 'open' : ''} onClick={() => isExpanded(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </HamburgerIcon>
    );
};
