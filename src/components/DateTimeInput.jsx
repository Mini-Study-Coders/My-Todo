export default function DateTimeInput({ ...dateTimeProps }) {
    return (
      <div className="relative">
        <span
          className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-customBlue"
          style={{
            fontVariationSettings: "'FILL' 1, 'wght' 600, 'GRAD' 0, 'opsz' 48",
          }}
        >
          date_range
        </span>
        <input
          type="datetime-local"
          {...dateTimeProps}
          required
          className="w-[565px] py-2 pl-12 pr-6 border-2 rounded-lg font-primary text-customBlue"
        />
      </div>
    );
  }
  

/*

dateTimeInput accepts 2 required props:

id, name

In App.jsx:

ex.
const dateTimeProps = {
    id: "",
    name: ""
}

In rendered component:

<DateTimeInput {...dateTimeProps} />

*/
