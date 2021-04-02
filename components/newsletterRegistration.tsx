import Button from "./shared/button";

const NewsletterRegistration = (): JSX.Element => (
  <>
    <h2 className="text-3xl sm:text-6xl text-center">Rundschreiben</h2>
    <div className="flex flex-row space-x-2 justify-center">
      <input
        className="text-lg sm:text-3xl bg-gray-200 rounded-full px-4 sm:px-6 pt-1 sm:pt-2 placeholder-current"
        placeholder="Deine Email-Adresse"
        type="text"
      />
      <Button onClick={() => console.log("ok")} disabled={true} active={false}>
        Ok
      </Button>
    </div>
  </>
);

export default NewsletterRegistration;
