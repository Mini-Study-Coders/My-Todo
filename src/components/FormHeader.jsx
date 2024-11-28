export default function FormHeader() {
  return (
    <>
      <div className="flex items-center justify-center font-primary my-6">
        <span
          className="material-symbols-outlined border-2 p-1 text-4xl rounded-lg mr-4"
          style={{
            fontVariationSettings: "'FILL' 1, 'wght' 600, 'GRAD' 0, 'opsz' 48",
          }}
        >
          calendar_add_on
        </span>
        <div>
          <h1 className="text-[26px] font-medium">Create new</h1>
          <p>fill up the below form and submit your todo</p>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="w-[602px]" />
      </div>
    </>
  );
}
