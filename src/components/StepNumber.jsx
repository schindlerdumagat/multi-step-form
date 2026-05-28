function StepNumber({ children, isCurrent }) {

  const colorStyles = isCurrent ? "bg-blue-200 text-blue-950 border-blue-200" : "text-white";

  return (
    <span className={`w-[33px] h-[33px] grid place-items-center border rounded-full font-bold text-sm/tight ${colorStyles}`}>{children}</span>
  )

}

export default StepNumber;