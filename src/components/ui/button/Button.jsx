// import "../../../styles/_buttons.scss"
// import "../../../styles/main.scss"


const Button = ({dynamicClass, children}) => {


    return (
        <div >
            <button className={dynamicClass}>{children}</button>
        </div>
    )
}

export default Button