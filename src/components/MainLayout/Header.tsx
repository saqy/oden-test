import React from 'react'
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import { StyledLogo } from './elements';

export const Header: React.FC = () => {
    return (
        <AppBar position="static" color="inherit">
            <Toolbar >
                    <Link href="/" underline="none">
                        <StyledLogo>
                            <img src="https://oden.io/wp-content/uploads/2019/08/logo-white-trial-3-dark.png" height="100%" width="100%" alt="" />
                        </StyledLogo>
                    </Link>
            </Toolbar>
        </AppBar>
    )
}
