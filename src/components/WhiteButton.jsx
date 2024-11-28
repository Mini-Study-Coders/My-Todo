/* eslint-disable react/prop-types */
export default function WhiteButton({ text }) {
  return (
    <>
      <button className="py-2 px-4 border-2 rounded-lg font-primary text-customBlue">
        {text}
      </button>
    </>
  );
}
