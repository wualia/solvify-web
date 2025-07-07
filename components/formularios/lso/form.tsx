"use client";
import React, { useEffect } from "react";
import QuestionsLSO from "./questions";
import { useFormStore } from "@/store/form";
import { questions } from "./data";

const LSOForm = () => {
  const { setActualQuestion } = useFormStore();

  useEffect(() => {
    setActualQuestion(
      questions.find((question) => question.slug === "tienes-importe-deudas")
    );
  }, [setActualQuestion]);

  return <QuestionsLSO />;
};

export default LSOForm;
