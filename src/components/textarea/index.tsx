"use client";
import { forwardRef } from "react";
import { TextAreaProps } from "./type";
import { useTextarea } from "@/hooks/useTextarea";

export const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      error,
      ariaLabel,
      label,
      className,
      labelClassName,
      readOnly = false,
      placeholder,
      leftIcon,
      defaultValue,
      value,
      onChange,
      showRequiredAsterik = false,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      triggerSubmitOnPressEnter = false,
      ...rest
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _ref
  ) => {
    const { ref, handleTextareaKeyDown } = useTextarea({
      defaultValue,
      onChange,
    });

    const isControlled = value !== undefined;

    return (
      <div className="py-3">
        {label && (
          <label
            htmlFor={label || ariaLabel}
            className={`block text-lg font-semibold  ${
              labelClassName ? labelClassName : "text-white"
            }`}
          >
            {label}{" "}
            {showRequiredAsterik && <span className="text-white">*</span>}
          </label>
        )}

        <div className="relative mt-1 rounded-md">
          {leftIcon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">{leftIcon}</span>
            </div>
          )}

          <textarea
            aria-invalid={error ? "true" : "false"}
            aria-label={ariaLabel}
            id={label || ariaLabel}
            readOnly={readOnly}
            placeholder={placeholder}
            // value={value || ""}
            {...(isControlled
              ? { value: value }
              : { defaultValue: defaultValue })}
            onChange={onChange ? onChange : undefined}
            onKeyDown={handleTextareaKeyDown}
            className={`mt-2 outline-0 placeholder-secondary700 text-black bg-white block w-full h-12  text-sm rounded-md p-2 focus:outline-2 focus:outline-white   ${
              className ? className : ""
            } ${leftIcon ? "pl-10" : "px-3"}`}
            ref={ref}
            {...rest}
          >
            {value}
          </textarea>
        </div>
        <p className="text-red-500 text-xs">{error?.message}</p>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
