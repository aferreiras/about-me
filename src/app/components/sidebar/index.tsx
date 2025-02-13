import { StyledSidebar } from "./styles";


type SidebarProps = {
    isSidebarOpen: boolean;
}

export const Sidebar = ({isSidebarOpen}:SidebarProps): JSX.Element => {
    return (
        isSidebarOpen ? (
        <StyledSidebar>
            <h2>About Me</h2>
            <ul>
                Example pages:
                <li>About Me</li>
                <li>About Me</li>
                <li>About Me</li>
            </ul>
        </StyledSidebar>
        ) : <></>
    );
}