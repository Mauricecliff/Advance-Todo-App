import { ButtonComp } from ".";
import { Input } from "./ui/input";

function InputComp() {
  return (
    <>
      <Input type="email" placeholder="Email" className="w-[20%] mx-2" />
      <ButtonComp />
    </>
  );
}

export default InputComp;
