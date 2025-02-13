import React from "react"
import { ButtonContainer } from "./styles"

type SideButtonProps = {
    isSidebarOpen: boolean;
    setSidebarState: (state: boolean) => void;
}

export const SideButton = ({isSidebarOpen, setSidebarState}: SideButtonProps): JSX.Element => {
    return (
        <ButtonContainer $isSidebarOpen={isSidebarOpen} onClick={() => setSidebarState(!isSidebarOpen)}>
            {isSidebarOpen ? <i className="fa-solid fa-arrow-left" /> : <i className="fa-solid fa-arrow-right" />}
        </ButtonContainer>
    )
}