"use client";

import { forwardRef, useId } from "react";
import { InputProps } from "./types";
import clsx from "clsx";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      error,
      label,
      className,
      labelClassName,
      type = "text",
      readOnly = false,
      placeholder,
      defaultValue,
      value,
      onChange,
      radius = "rounded-xl",
      leftIcon,
      showRequiredAsterik = false,
      ...rest
    },
    ref
  ) => {
    const id = useId();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }
    };

    const isControlled = value !== undefined;

    return (
      <div className="py-3">
        {label && (
          <label
            htmlFor={id}
            className={`flex items-center text-lg font-semibold gap-1  ${
              labelClassName ? labelClassName : "text-white"
            }`}
          >
            {label}

            {showRequiredAsterik && <span className="text-white-500">*</span>}
          </label>
        )}

        <div className={clsx("relative mt-1", radius)}>
          {leftIcon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">{leftIcon}</span>
            </div>
          )}
          <input
            aria-invalid={error ? "true" : "false"}
            type={type}
            id={id}
            readOnly={readOnly}
            placeholder={placeholder}
            // value={value}
            {...(isControlled
              ? { value: value }
              : { defaultValue: defaultValue })}
            defaultValue={defaultValue}
            //     onChange={onChange ? handleChange : onChange : undefined}
            onChange={handleChange}
            className={clsx(
              "mt-2 outline-0 bg-white placeholder-secondary700 block w-full h-12  text-base py-2 focus:outline-2 focus:outline-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
              className ? className : "text-white-600",
              leftIcon ? "pl-10" : "px-4",
              radius
            )}
            ref={ref}
            {...rest}
          />
        </div>
        <p className="text-red-500 text-xs">{error?.message}</p>
      </div>
    );
  }
);

Input.displayName = "Input";
