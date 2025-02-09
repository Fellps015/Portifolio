//class de Configuração
class Config{
    #name
    #number
    #email
    constructor(name, email, number){
    this.name = name
    this.email = email
    this.number = number
    }
    
    activeMenuLateral(){
    const active = () => {
    menu.style.left = "0px"
    backimg.style.width = "100%"
    backimg.style.top = "0px"
    }
    active()
    }
    disableMenuLateral(){
        menu.style.left = "-1000px"
        backimg.style.width = "0%"
    }
ElementsTags(){
    html.style.backgroundColor="orange"
    html.innerHTML=TextoEntrada.html

    css.style.backgroundColor="blue"
    css.innerHTML=TextoEntrada.css

    script.style.backgroundColor="yellow"
    script.innerHTML=TextoEntrada.script

    react.style.backgroundColor="cyan"
    react.innerHTML=TextoEntrada.react

    node.style.backgroundColor="rgb(28, 197, 42)"
    node.innerHTML=TextoEntrada.node

    java.style.backgroundColor="red"
    java.innerHTML=TextoEntrada.java

    koo.style.backgroundColor="purple"
    koo.innerHTML=TextoEntrada.koo

    py.style.backgroundColor="aqua"
    py.innerHTML=TextoEntrada.phyton

}




}


const TextoEntrada = {
    html:"Html",
   css:"Css",
    script:"Java Script",
    react:"React",
    node:"Node.js",
    java:"Java",
    koo:"Kootlin",
   phyton:"Python",
   }



//Elementos selecionados
const menu = document.querySelector("#menu")
const bot = document.querySelector("#bot")
const backimg = document.querySelector("#backimg")


const html=document.querySelector('#tag-html')
const css =document.querySelector('#tag-css')
const script =document.querySelector('#tag-script')
const react =document.querySelector('#tag-react')
const node =document.querySelector('#tag-node')
const java =document.querySelector('#tag-java')
const koo =document.querySelector('#tag-koo')
const py =document.querySelector('#tag-py')



//Instância
const config = new Config()


//Botao menu
bot.addEventListener("click", config.activeMenuLateral)
backimg.addEventListener("click", config.disableMenuLateral)
config.ElementsTags()



