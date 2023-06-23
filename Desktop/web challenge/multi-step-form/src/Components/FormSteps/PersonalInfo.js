import React from "react";
import FormHeader from "./FormHeader";
import styles from "./PersonalInfo.module.css";
import Input from "../../Helpers/Input";
import Button from "../../Helpers/Button";
import useMobile from "../../Hooks/useMobile";
import { GlobalContext } from "../../Hooks/GlobalContext";
import useForm from "../../Hooks/useForm";

const PersonalInfo = () => {
  const { step, setStep } = React.useContext(GlobalContext);
  const { formData, handleChange, errors, validate } = useForm();
  const mobile = useMobile("(max-width:940px)");

  function handleSubmit(event) {
    event.preventDefault();
    if (validate()) {
      setStep(step + 1);
    }
  }

  return (
    <>
      <FormHeader
        title="Personal Info"
        info="Please provide your name, email address, and phone number."
      />
      <form
        className={mobile ? `${styles.form} ${styles.mobile}` : styles.form}
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          id="name"
          label="Name"
          placeholder="e.g. David Mack"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Input
          type="email"
          name="email"
          id="email"
          label="Email Address"
          placeholder="e.g. davidamack@gmail.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <Input
          type="number"
          name="phone"
          id="phone"
          label="Phone Number"
          placeholder="e.g. +256 234 567 890"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <div className={styles.flexParent}>
          <div className={styles.buttonWrapper}>
            <Button id="next" buttonInfo="Next Step" />
          </div>
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;
