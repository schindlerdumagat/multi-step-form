function Button({ children, type = "button", variant = "tertiary", onClick }) {

  const variantStyles = {
    primary: "text-white bg-blue-950 hover:bg-blue-700 px-4 py-2.5 md:px-6 md:py-4",
    secondary: "text-white bg-purple-600 hover:bg-purple-400 px-4 py-2.5 md:px-6 md:py-4",
    tertiary: "text-grey-500 hover:text-blue-950",
  }

  return (
    <button onClick={onClick} className={`${variantStyles[variant]} font-medium text-sm/normal transition duration-300  rounded-sm cursor-pointer md:text-base/tight md:rounded-lg`} type={type}>{children}</button>
  )

}

export default Button;