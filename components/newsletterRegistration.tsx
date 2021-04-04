import { useState } from "react";
import Button from "./shared/button";
import styles from "../styles/newsletterRegistration.module.scss";

const NewsletterRegistration = (): JSX.Element => {
  const [eMailAddress, setEMailAddress] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleClick = (): void => {
    const eMailRegex = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$");
    if (eMailAddress !== "" && eMailRegex.test(eMailAddress)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <>
      <h2 className="text-3xl sm:text-6xl text-center">Rundschreiben</h2>
      <div className="flex flex-row space-x-2 justify-center">
        <input
          className={`${
            isValid ? "" : styles.invalid
          } text-lg sm:text-3xl bg-gray-200 rounded-full px-4 sm:px-6 pt-1 sm:pt-2 focus:outline-none`}
          placeholder="Deine E-Mail-Adresse"
          value={eMailAddress}
          type="email"
          onChange={(event) => setEMailAddress(event.target.value)}
        />
        <Button onClick={() => handleClick()}>Ok</Button>
      </div>
    </>
  );
};

export default NewsletterRegistration;
