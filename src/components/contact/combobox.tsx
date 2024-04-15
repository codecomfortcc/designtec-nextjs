import { cn } from "@/lib/utils";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { createContext, useContext } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";

interface ComboboxContextValue {
  isSelected: (value: unknown) => boolean;
  onSelect: (value: unknown) => void;
}
interface ComboboxCommonProps<TValue> {
  children: React.ReactNode;
  displayValue?: (item: TValue) => string;
  placeholder?: string;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  inputPlaceholder?: string;
  search?: string;
  onSearchChange?: (search: string) => void;
  emptyState?: React.ReactNode;
}

type ComboboxFilterProps =
  | {
      shouldFilter?: true;
      filterFn?: React.ComponentProps<typeof Command>["filter"];
    }
  | {
      shouldFilter: false;
      filterFn?: never;
    };

type ComboboxValueProps<TValue> =
  | {
      multiple?: false;
      value?: TValue | null;
      defaultValue?: TValue | null;
      onValueChange?(value: TValue | null): void;
    }
  | {
      multiple: true;
      value?: TValue[] | null;
      defaultValue?: TValue[] | null;
      onValueChange?(value: TValue[] | null): void;
    };

export type ComboboxProps<TValue> = ComboboxCommonProps<TValue> &
  ComboboxValueProps<TValue> &
  ComboboxFilterProps;

  export const ComboboxContext = createContext<ComboboxContextValue>({
    isSelected: () => false,
    onSelect: () => {},
  });
  
  export const useComboboxContext = () => useContext(ComboboxContext);

export const ComboboxProvider = <TValue,>({
  children,
  displayValue,
  placeholder = "Select an option",
  value: valueProp,
  defaultValue,
  onValueChange,
  multiple = false,
  shouldFilter = true,
  filterFn,
  open: openProp,
  defaultOpen,
  onOpenChange,
  inputPlaceholder = "Search...",
  search,
  onSearchChange,
  emptyState = "Nothing found.",
}: ComboboxProps<TValue>) => {
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: (state) => {
      onValueChange?.(state as unknown as TValue & TValue[]);
    },
  });

  const isSelected = (selectedValue: unknown) => {
    if (Array.isArray(value)) {
      return value.includes(selectedValue as TValue);
    }
    return value === selectedValue;
  };

  const handleSelect = (selectedValue: unknown) => {
    let newValue: TValue | TValue[] | null = selectedValue as TValue;

    if (multiple) {
      if (Array.isArray(value)) {
        if (value.includes(newValue)) {
          const newArr = value.filter((val) => val !== selectedValue);
          newValue = newArr.length ? newArr : null;
        } else {
          newValue = [...value, newValue];
        }
      } else {
        newValue = [newValue];
      }
    } else if (value === selectedValue) {
      newValue = null;
    }

    setValue(newValue);
    setOpen(false);
  };

  const renderValue = (): string => {
    if (value) {
      if (Array.isArray(value)) {
        return `${value.length} selected`;
      }
      if (displayValue !== undefined) {
        return displayValue(value as unknown as TValue);
      }
      return placeholder;
    }
    return placeholder;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          className="w-full justify-between text-left font-normal"
          variant="outline"
          role="combobox"
          aria-expanded={open}
        >
        <span className=" text-gray-900">  {renderValue()}</span>
        <ChevronsUpDown className="w-4 h-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-full min-w-[var(--radix-popover-trigger-width)]"
        align="start"
      >
        <Command filter={filterFn} shouldFilter={shouldFilter}>
          <CommandInput
            placeholder={inputPlaceholder}
            autoFocus
            value={search}
            onValueChange={onSearchChange}
          />
          <CommandList className="max-h-60">
            <CommandEmpty>{emptyState}</CommandEmpty>
            <ComboboxContext.Provider
              value={{ isSelected, onSelect: handleSelect }}
            >
              {children}
            </ComboboxContext.Provider>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

interface ComboboxItemOptions<TValue> {
  value: TValue;
}

export interface ComboboxItemProps<TValue>
  extends ComboboxItemOptions<TValue>,
    Omit<
      React.ComponentProps<typeof CommandItem>,
      keyof ComboboxItemOptions<TValue> | "onSelect" | "role"
    > {
  onSelect?(value: TValue): void;
}

export const ComboboxItem = <
  TValue = Parameters<typeof ComboboxProvider>[0]["value"],
>({
  children,
  className,
  value,
  onSelect,
}: ComboboxItemProps<TValue>) => {
  const context = useComboboxContext();

  return (
    <CommandItem
      className={cn("pl-8 ", className)}
      role="option"
      onSelect={() => {
        context.onSelect(value);
        onSelect?.(value);
      }}
    >
      {context.isSelected(value) && (
        <Check className="absolute left-2 h-4 w-4" />
      )}
      {children}
    </CommandItem>
  );
};
