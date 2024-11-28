import DropdownInput from "./components/DropdownInput";

function App() {
  const dropdownProps = {
    id: "priority",
    name: "priorty",
    options: [
      { value: "low", label: "Low" },
      { value: "medium", label: "Medium" },
      { value: "high", label: "High" },
    ],
    defaultValue: "medium",
  };
  return (
    <div className="flex flex-col items-center py-4">
      <DropdownInput {...dropdownProps} />
    </div>
  );
}

export default App;
