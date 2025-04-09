
import React from "react";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type FormInputProps = {
  name: string;
  control: any;
  label: string;
  type: string;
  placeholder: string;
  defaultValue?: string | number;
};

const FormInput: React.FC<FormInputProps> = ({ name, control, label, type, placeholder, defaultValue }) => (
  <div className="flex flex-col gap-1">
    <FormField name={name} control={control} render={({ field }) => (
      <FormItem>
        <FormLabel htmlFor={name} className="text-up">
          {label}
        </FormLabel>
        <FormControl>
          <Input
            {...field}
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
        </FormControl>
      </FormItem>
    )} />
  </div>
);

export default FormInput;
