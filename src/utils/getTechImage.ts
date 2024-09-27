import typescriptLogo from "../assets/icons/typeScriptLogo.png"
import javascriptLogo from "../assets/icons/javaScriptLogo.png"
import reactLogo from "../assets/icons/reactJslogo.png"
import cssLogo from "../assets/icons/csslogo.webp"
import tailwindLogo from "../assets/icons/tailwindCssLogo.webp"
import pythonLogo from "../assets/icons/pythonLogo.png"
import phpLogo from "../assets/icons/phpLogo.png"
import sqlLogo from "../assets/icons/sqlLogo.png"
import nodejsLogo from "../assets/icons/nodeJsLogo.webp"

export const getTechImage = (tech: string) => {
  switch(tech){
    case "typescript": return typescriptLogo
    case "javascript": return javascriptLogo
    case "react": return reactLogo
    case "css": return cssLogo
    case "tailwindcss": return tailwindLogo
    case "python": return pythonLogo
    case "php": return phpLogo
    case "sql": return sqlLogo 
    case "nodejs": return nodejsLogo
    default: return "xd"
  }
}