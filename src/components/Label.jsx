function Label({ children, htmlFor }) {

  return (
    <label className="font-normal text-blue-950 text-xs/tight md:text-sm/tight" htmlFor={htmlFor}>{children}</label>
  )

}

export default Label;