/* eslint-disable react/prop-types */
export default function DropdownInput({ options, ...rest }) {
  return (
    <select
      {...rest}
      className="py-2 px-4 border-2 rounded-lg font-primary text-customBlue w-64"
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
