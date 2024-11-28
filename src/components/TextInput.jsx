/* eslint-disable react/prop-types */
export default function TextInput({ ...buttonProps }) {
  return (
    <div className="flex flex-col">
      <input
        type="text"
        {...buttonProps}
        className="border-2 rounded-lg py-2 px-2 w-64 font-primary"
      />
    </div>
  );
}

/*

In App.jsx send props as object:

ex.
const buttonProps = {
    id: "",
    name: "",
    placeholder: ""
}

Then in rendered component, spread buttonProps:

<TextInput {...buttonProps} />

*/
