import React, {useState} from 'react'
import { 
    AppBar, 
    Link, 
    createTheme, 
    Grid, 
    Typography, 
    ThemeProvider, 
    CssBaseline, 
    Container, 
    Toolbar,
    useMediaQuery,
    IconButton,
    Drawer,
    Box
} from '@mui/material'

import { Menu, Close, Home, School, Apps, Groups, Computer, MoreHoriz } from '@mui/icons-material'

import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {

    const routes = [
        {Name: "Home", Link: "/home", Icon: <Home />},
        {Name: "CS Courses", Link: "/courses", Icon: <School />},
        {Name: "Projects", Link: "/projects", Icon: <Apps />},
        {Name: "Clubs", Link: "/clubs", Icon: <Groups />},
        {Name: "CSHS", Link: "/cshs", Icon: <Computer />},
        {Name: "More", Link: "/more", Icon: <MoreHoriz />},
    ]

    const theme = createTheme({
        palette: {
            primary: {
                main: "#3B82F6"
            },
            background: {
                default: "#f6f6f6"
            }
        }
    })

    const mobile = useMediaQuery("(max-width: 900px)")
    const [open, setOpen] = useState(false)

    const toggleSideBar = () => (
        setOpen(!open)
    )

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar color="inherit" variant="static" style={{padding: "10px 10px"}} elevation={0}>
                <Toolbar>
                    <Container style={{maxWidth: "1200px", padding: "0px 24px"}}>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <div class="flex items-center mb-3 pt-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                                        <span><i class="fas fa-code" /></span>
                                    </div>
                                    <h2 class="text-gray-900 text-2xl title-font font-large font-bold" style={{lineHeight: "30px"}}>HSE CS</h2>
                                </div>
                            </Grid>
                            <Grid item>
                                {
                                    mobile ?
                                        (
                                            <>
                                                <IconButton onClick={toggleSideBar}><Menu /></IconButton>
                                                <Drawer
                                                    anchor="right"
                                                    open={open}
                                                    onClose={() => setOpen(false)}
                                                >
                                                    <Box
                                                        role="presentation"
                                                        style={{padding: "10px"}}
                                                    >
                                                        <IconButton style={{marginBottom: "10px"}} onClick={() => setOpen(false)}><Close /></IconButton>
                                                        <Grid container spacing={4} direction="column" style={{width: '250px', padding: "12px"}}>
                                                            {routes.map((route, idx) => (
                                                                <Grid item key={idx}>
                                                                    <motion.div
                                                                        initial={{opacity: 0, x: 2, y: 5}}
                                                                        animate={{opacity: 1, x: 0, y: 0}}
                                                                        transition={{duration: 0.2, delay: 0.15 * idx + 0.15}}
                                                                    >
                                                                        <Link component={NavLink} underline="none" to="#" color="primary" onClick={() => setOpen(false)}>
                                                                            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                                                                                <Typography style={{lineHeight: "26px", marginRight: "10px"}}>{route.Name}</Typography>
                                                                                <Typography>{route.Icon}</Typography>
                                                                            </div>
                                                                        </Link>
                                                                    </motion.div>
                                                                </Grid>
                                                            ))}
                                                        </Grid>
                                                    </Box>
                                                </Drawer>
                                            </>
                                        )   
                                    :
                                        (
                                            <Grid container spacing={4} alignItems="center">
                                                {routes.map((route, idx) => (
                                                    <Grid item style={{lineHeight: "32px"}} key={idx}>
                                                        <motion.div
                                                            initial={{opacity: 0, y: -2}}
                                                            animate={{opacity: 1, y: 0}}
                                                            whileHover={{color: theme.palette.primary.main, y: 2}}
                                                            transition={{duration: 0.2}}
                                                        >
                                                            <Link component={NavLink} underline="none" to="#" color="inherit">
                                                                <Typography>{route.Name}</Typography>
                                                            </Link>
                                                        </motion.div>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        )
                                }
                                
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <div className="main" style={{padding: "16px 24px", maxWidth: "1200px", margin: "20px auto"}}>
                <CssBaseline />
                {props.children}
            </div>
        </ThemeProvider>
    )
}

export default Navbar
