/* eslint-disable react/prop-types */
export default function BlueButton({ text, ...type }) {
  return (
    <div>
      <button
        className="bg-primary font-primary text-customBlue py-2 px-4 rounded-lg"
        {...type}
      >
        {text}
      </button>
    </div>
  );
}
