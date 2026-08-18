import { useId } from "react";

const UniqueID = () => {
  const uniqueId = useId(); // one unique prefix for this component instance

  return (
    <div>
      <label htmlFor={`${uniqueId}-email`}>Email</label>
      <input type="email" id={`${uniqueId}-email`} />

      <br />

      <label htmlFor={`${uniqueId}-password`}>Password</label>
      <input type="password" id={`${uniqueId}-password`} />
    </div>
  );
};

export default UniqueID;
