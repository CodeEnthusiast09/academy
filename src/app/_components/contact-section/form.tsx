"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    familiya: "",
    ism: "",
    telefon: "",
    email: "",
    xabar: "",
  });

  const handleInputChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  return (
    <div>
      <form
        action="submit"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-max"
      >
        <Input
          label={"Familiya"}
          placeholder="Familyangiz kiriting"
          value={formData.familiya}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, familiya: e.target.value }))
          }
          showRequiredAsterik
        />

        <Input
          label={"Ismingiz"}
          placeholder="Ismingizni kiriting"
          value={formData.ism}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, ism: e.target.value }))
          }
          showRequiredAsterik
        />

        <Input
          label={"Telefon raqamingiz"}
          placeholder="Telefon raqamingiz"
          value={formData.telefon}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, telefon: e.target.value }))
          }
          showRequiredAsterik
        />

        <Input
          label={"Email"}
          placeholder="Emailingizni kiriting"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          showRequiredAsterik
        />

        <div className="md:col-span-2">
          <Textarea
            label="Xabar qoldirish"
            placeholder="Xabaringizni yozing"
            onChange={handleInputChange("xabar")}
            className="h-[100px]"
            showRequiredAsterik
          />
        </div>
      </form>
      <div>
        <p className="text-white">To’ldirilishi shart</p>

        <div className="pt-5 flex gap-4 justify-end">
          <Button
            variant="primary"
            size="lg"
            radius="rounded-md"
            className="font-semibold text-xl w-44"
          >
            Yuborish
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Form;
