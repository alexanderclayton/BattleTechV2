//import//
import { CriticalHitTableType } from "../../../types/types";

interface CreateCriticalHitTableInputProps {
  number: string
  input: CriticalHitTableType | any;
  value: string;
  handleInput: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChange: (bodyPart: string, propertyName: string, e: any) => void;
  bodyPart: string;
  handleValue: (bodyPart: string) => CriticalHitTableType | undefined;
}

export const CreateCriticalHitTableInput: React.FC<CreateCriticalHitTableInputProps> = ({ number, input, value, handleInput, handleChange, bodyPart, handleValue }) => {
  return (
    <div className="w-full flex pt-4">
      <label htmlFor="" className="font-bold w-8">
        {number}
      </label>
      <select
        name={`${value}`}
        id={`${value}`}
        value={input[value as keyof CriticalHitTableType]}
        onChange={(e) => {
          handleInput(e);
          if (
            e.target.value === "Endo Steel" ||
            e.target.value === "Ferro Fibrous" ||
            e.target.value === "Roll Again"
          ) {
            handleChange(bodyPart, `${value}`, e);
          }
        }}
      >
        <option value="input">Critical Hit</option>
        <option value="Endo Steel">Endo Steel</option>
        <option value="Ferro Fibrous">Ferro Fibrous</option>
        <option value="Roll Again">Roll Again</option>
      </select>
      {input[value as keyof CriticalHitTableType] === "input" ? (
        <input
          id={`${value}`}
          type="text"
          value={handleValue(bodyPart)?.[value as keyof CriticalHitTableType]}
          name={`${bodyPart}.${value}`}
          placeholder={
            handleValue(bodyPart)?.[value as keyof CriticalHitTableType]
          }
          onChange={(e) => {
            handleChange(bodyPart, `${value}`, e);
          }}
          className="border-2 border-black ml-2 pl-2 w-[80%]"
        />
      ) : (
        <p className="pl-4">{input[value as keyof CriticalHitTableType]}</p>
      )}
    </div>
  );
};
