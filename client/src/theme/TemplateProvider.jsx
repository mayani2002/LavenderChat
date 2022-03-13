import React, {createContext} from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const TemplateContext = createContext(null)

const TemplateProvider=({children})=>{


    const theme = createTheme ({
        overrides:{
            MuiDrawer:{
                paperAnchorLeft:{
                    width: '440px',
                    marginTop: '29px',
                    height: '100vh',
                    boxShadow: 'none'
                }
            },
                MuiBackdrop:{
                    root:{
                        backgroundColor: 'unset',
                    }
                }
        }
    })

    return(
        <>
            <TemplateContext.Provider value= {{}}>
                <ThemeProvider theme = { theme }>
                    {children}
                </ThemeProvider>

            </TemplateContext.Provider>
        </>
    )
}

export default TemplateProvider;