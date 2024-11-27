/* eslint-disable react/prop-types */
export default function Button({ text }) {
  return (
    <div className="flex justify-center py-4">
      <button className="bg-primary font-primary text-customBlue py-2 px-4 rounded-lg">
        {text}
      </button>
    </div>
  );
}
