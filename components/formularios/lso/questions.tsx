"use client";

import React, { useState } from "react";
import { useFormStore } from "@/store/form";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checked } from "@/components/icons";
import { questions } from "./data";

const QuestionsLSO = () => {
  const { actualQuestion, setActualQuestion, setType, setProgress } =
    useFormStore();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const router = useRouter();

  const nextQuestion = () => {
    switch (actualQuestion?.slug) {
      case "tienes-importe-deudas":
        if (selectedAnswer === "Sí") {
          setActualQuestion(
            questions.find(
              (question) => question.slug === "tienes-dos-o-mas-deudas"
            )
          );
          setSelectedAnswer(null);
          setProgress(20);
        } else {
          router.push(`/formulario/ley-de-segunda-oportunidad/descarte`);
        }
        break;
      case "tienes-dos-o-mas-deudas":
        if (selectedAnswer === "Sí") {
          setActualQuestion(
            questions.find(
              (question) => question.slug === "mas-de-6000-deuda-privada"
            )
          );
          setSelectedAnswer(null);
          setProgress(40);
        } else {
          router.push(`/formulario/ley-de-segunda-oportunidad/descarte`);
        }
        break;
      case "mas-de-6000-deuda-privada":
        if (selectedAnswer === "Sí") {
          setActualQuestion(
            questions.find((question) => question.slug === "prestamo-empresa")
          );
          setProgress(60);
          setSelectedAnswer(null);
        } else {
          router.push(`/formulario/ley-de-segunda-oportunidad/descarte`);
        }
        break;
      case "prestamo-empresa":
        if (selectedAnswer === "Sí") {
          setType("NEGO");
        } else {
          setType("LSO");
        }

        setActualQuestion(
          questions.find((question) => question.slug === "ingresos")
        );
        setSelectedAnswer(null);
        setProgress(80);
        break;
      case "ingresos":
        if (selectedAnswer === "Sí") {
          setProgress(100);
          router.push(`/formulario/ley-de-segunda-oportunidad/resultado`);
        } else {
          router.push(`/formulario/ley-de-segunda-oportunidad/descarte`);
        }

        break;
    }
  };

  return (
    <div>
      <div className="px-4 2xl:px-0">
        <h2 className="text-center text-lg pb-4 text-gray-700 dark:text-white mx-auto max-w-2xl">
          {actualQuestion?.question}
        </h2>
        <div className="max-w-sm mx-auto">
          <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4 mt-4">
            {actualQuestion?.answers?.map((answer: string) => (
              <div
                key={answer}
                className={cn(
                  selectedAnswer === answer
                    ? "border-primary bg-primary/10"
                    : "bg-gray-50",
                  "w-full text-black border-2 rounded-lg p-3 text-center relative hover:bg-gray-100 dark:hover:bg-black cursor-pointer duration-200 bg-card"
                )}
                onClick={() => setSelectedAnswer(answer)}
              >
                <p
                  className={cn(
                    selectedAnswer === answer
                      ? "text-primary font-medium"
                      : "text-card-foreground"
                  )}
                >
                  {answer}
                </p>
                {selectedAnswer === answer && (
                  <div className="absolute inset-x-0 right-2 top-3 flex justify-end">
                    <Checked className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
          {selectedAnswer && (
            <div className="2xl:px-0">
              <div
                className="w-full mt-8 bg-primary rounded-lg text-white p-3 flex justify-center items-center cursor-pointer dark:bg-white dark:text-black"
                onClick={nextQuestion}
              >
                Continuar
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionsLSO;
