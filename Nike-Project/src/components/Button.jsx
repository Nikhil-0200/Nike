const Button = (props) => {
  return (
    <button className= {`flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full 
    ${props.backgroundColor ? `${props.backgroundColor} ${props.textColor} ${props.borderColor}`
    :"bg-coral-red border-coral-red text-white"}`}>
        <p>{props.label}</p>
        {props.icon && <img className="w-5 h-5 rounded-full ml-2" src={props.icon} alt="rightArrow" />}
    </button>
  )
}

export default Button