import ShieldTickIcon from "@components/icons/ShieldTickIcon";

type ValidateEmailProps = JSX.IntrinsicElements["div"] & {
  message?: string;
};

const ValidateEmail: React.FC<ValidateEmailProps> = ({ message }) => {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="flex gap-2 font-medium text-[#68C95B]">
          <ShieldTickIcon className="fill-[#68C95B]" />
          {message || ""}
        </div>
      </div>
    </>
  );
};

export default ValidateEmail;
