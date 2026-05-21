function Error({ children, id }) {

  return (
    <span className="font-bold text-sm/tight text-red-500" id={id} aria-live="polite">{children}</span>
  )

}

export default Error;