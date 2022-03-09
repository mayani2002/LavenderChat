import React, {createContext} from "react";
import { ThemeProvider, CreateMuiTheme } from "@material-ui/core/styles";




const TemplateProvider=()=>{

    const theme = CreateMuiTheme ({
        
    })

    return(
        <>
            <TemplateContext.Provider>
                <ThemeProvider theme = { theme }>
                </ThemeProvider>

            </TemplateContext.Provider>
        </>
    )
}

export default TemplateProvider;