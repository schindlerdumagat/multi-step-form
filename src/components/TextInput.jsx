function TextInput({
  type = "text",
  id,
  name,
  value,
  onChange,
  placeholder,
  autoComplete,
  ariaDescribedBy,
  hasError = false,
}) {
  const borderColor = hasError ? "border-red-500" : "border-purple-200";

  return (
    <input
      className={`px-4 py-2 border border-solid ${borderColor} rounded-sm md:rounded-lg text-blue-950 font-medium text-sm/normal md:text-base/tight placeholder:text-grey-500 placeholder:font-medium placeholder:text-sm/normal md:placeholder:text-base/tight focus-visible:outline-none focus-visible:border-purple-600 caret-blue-950`}
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
      aria-describedby={ariaDescribedBy}
    />
  );
}

export default TextInput;
