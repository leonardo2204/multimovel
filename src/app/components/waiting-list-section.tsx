"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

interface WaitingListForm {
  name: string;
  email: string;
}

// Dummy function to save to database
const saveToDatabase = async (data: WaitingListForm): Promise<boolean> => {
  const response = await fetch("/waiting-list", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    return false;
  }

  return true;
};

export default function WaitingListSection() {
  const [formData, setFormData] = useState<WaitingListForm>({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Partial<WaitingListForm>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<WaitingListForm> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Digite um endereço de email válido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const success = await saveToDatabase(formData);

      if (success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "" });
        setErrors({});
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error saving to database:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange =
    (field: keyof WaitingListForm) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

      // Clear error when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  return (
    <div className="w-full max-w-xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-blue-900">
            Entrar na Lista de Espera
          </CardTitle>
          <CardDescription className="text-gray-600">
            Seja o primeiro a saber quando lançarmos. Digite seus dados abaixo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome
              </label>
              <input
                id="name"
                type="text"
                name="name"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleInputChange("name")}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Digite seu nome completo"
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleInputChange("email")}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Digite seu endereço de email"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Entrando..." : "Entrar na Lista"}
            </Button>

            {submitStatus === "success" && (
              <p className="text-sm text-green-600 text-center">
                ✅ Sucesso! Você foi adicionado à lista de espera!
              </p>
            )}

            {submitStatus === "error" && (
              <p className="text-sm text-red-600 text-center">
                ❌ Algo deu errado. Tente novamente.
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
