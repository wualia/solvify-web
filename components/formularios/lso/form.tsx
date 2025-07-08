"use client";
import React, { useEffect } from "react";
import QuestionsLSO from "./questions";
import { useFormStore } from "@/store/form";
import { questions } from "./data";
import { track } from "@vercel/analytics";
useFormStore;

const LSOForm = () => {
  const { setActualQuestion, source } = useFormStore();

  useEffect(() => {
    track("Empieza formulario", {
      formulario: "LSO",
      source: source,
    });
  }, []);

  useEffect(() => {
    setActualQuestion(
      questions.find((question) => question.slug === "tienes-importe-deudas")
    );
  }, [setActualQuestion]);

  return <QuestionsLSO />;
};

export default LSOForm;
