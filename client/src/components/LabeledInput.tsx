interface LabeledInputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabeledInput = ({
  label,
  placeholder,
  onChange,
  type,
}: LabeledInputType) => {
  return (
    <div className="my-2">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type || "text"}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default LabeledInput;
