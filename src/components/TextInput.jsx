/* eslint-disable react/prop-types */
export default function TextInput({ id, placeholder, label }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-primary mb-2">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        placeholder={placeholder}
        className="border-2 rounded-lg py-2 px-2 w-64 font-primary"
      />
    </div>
  );
}
