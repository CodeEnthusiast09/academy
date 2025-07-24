"use client";

import { KeyboardEvent, useEffect, useRef } from "react";

export const useTextarea = ({
  defaultValue,
  onChange,
}: {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  onChange?: Function;
  defaultValue?: string | number | readonly string[] | undefined;
}) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleTextareaKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent the default Enter behavior (new line)
      // Trigger the form submit, assuming the form is wrapped around this textarea
      if (ref.current) {
        const form = ref.current.form;
        if (form) {
          const submitButton = form.querySelector('button[type="submit"]');
          if (submitButton) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            submitButton.click();
          }
        }
      }
    }
  };

  useEffect(() => {
    if (defaultValue && onChange) {
      onChange({
        target: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          value: defaultValue,
        },
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { ref, handleTextareaKeyDown };
};
