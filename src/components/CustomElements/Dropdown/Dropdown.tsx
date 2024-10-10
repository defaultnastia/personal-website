import { useRef, useState } from "react";
import { optionType } from "../../../localization/locales";
import useOutsideClick from "../../../hooks/useOutsideClick";
import css from "./Dropdown.module.css";

interface DropdownProps<T> {
  id: string;
  title: string;
  data: optionType[];
  selectedValue?: string;
  onSelect: (key: T) => void;
}

const Dropdown = <T extends string>({
  id,
  data,
  title,
  onSelect,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [selectedItem, setSelectedItem] = useState<localeTypes>(selectedValue);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  });

  const handleChange = (item: T) => {
    // setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
  };

  // useEffect(() => {
  //   const newSelectedItem = data.find((item) => item.value === selectedValue);
  //   if (newSelectedItem) setSelectedItem(newSelectedItem.value);
  // }, [selectedValue, data]);

  return (
    <div ref={dropdownRef} className={css.dropdown}>
      <button
        id={id}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={css.control}
      >
        {title}
      </button>
      {isOpen && (
        <ul role="menu" className={css.optionList}>
          {data.map((item) => (
            <li
              key={item.value}
              onClick={() => handleChange(item.value as T)}
              className={css.option}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Dropdown;
