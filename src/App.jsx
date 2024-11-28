import FormHeader from "./components/FormHeader";
import TextInput from "./components/TextInput";
import DropdownInput from "./components/DropdownInput";
import DateTimeInput from "./components/DateTimeInput";
import BlueButton from "./components/BlueButton";
import WhiteButton from "./components/WhiteButton";

function App() {
  // Priority Dropdown
  const priorityProps = {
    id: "priority",
    name: "priority",
    options: [
      { value: "low", label: "Low" },
      { value: "medium", label: "Medium" },
      { value: "high", label: "High" },
    ],
    defaultValue: "medium",
  };

  // Category Dropdown
  const categoryProps = {
    id: "category",
    name: "category",
    options: [
      { value: "personal", label: "Personal" },
      { value: "business", label: "Business" },
      { value: "misc", label: "Misc" },
    ],
    defaultValue: "personal",
  };

  // Title Text
  const titleProps = {
    id: "title",
    name: "title",
    placeholder: "E.g study react hooks",
  };

  // Description Text
  const descriptionProps = {
    id: "description",
    name: "description",
    placeholder: "E.g build an app with hooks",
  };

  // DateTime Selector
  const dateTimeProps = {
    id: "date",
    name: "date",
  };

  return (
    <form
      action="submit"
      className="w-[723px] h-[551px] m-auto grid grid-cols-2 grid-rows-auto gap-4 border-2 rounded-lg"
    >
      {/* Header */}
      <div className="col-span-2">
        <FormHeader />
      </div>

      {/* text Row 1 */}
      <div className="flex flex-col items-center justify-center">
        <label htmlFor="title" className="mr-auto ml-12 mb-2 font-primary">
          Title
        </label>
        <TextInput {...titleProps} />
      </div>
      <div className="flex flex-col items-center justify-center font-primary">
        <label
          htmlFor="description"
          className="mr-auto ml-12 mb-2 font-primary"
        >
          Description
        </label>
        <TextInput {...descriptionProps} />
      </div>

      {/* dropdown Row 2 */}
      <div className="flex flex-col items-center justify-center">
        <label htmlFor="priority" className="mr-auto ml-12 mb-2 font-primary">
          Priority
        </label>
        <DropdownInput {...priorityProps} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <label htmlFor="category" className="mr-auto ml-12 mb-2 font-primary">
          Category
        </label>
        <DropdownInput {...categoryProps} />
      </div>

      {/* Full-width DateTimeInput */}
      <div className="col-span-2 flex flex-col items-center justify-center">
        <label htmlFor="date" className="mr-auto ml-14 mb-2 font-primary">
          Date & Time
        </label>
        <DateTimeInput {...dateTimeProps} />
      </div>

      {/* Buttons Row 4 */}
      <div className="flex flex-col items-center justify-center pb-2">
        <BlueButton type="submit" text="Submit Task" />
      </div>
      <div className="flex flex-col items-center justify-center pb-2">
        <WhiteButton text="Clear" />
      </div>
    </form>
  );
}

export default App;
