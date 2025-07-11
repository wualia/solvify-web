"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getPublicSalesAvailability } from "@/api/availability";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { es } from "date-fns/locale";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import Loader from "@/app/components/layout/loaders/loader";
import { addMinutes, addHours, format, add, subDays } from "date-fns";
import {
  createPublicAnnotation,
  getPublicAnnotationsByDeal,
} from "@/api/annotations";
import { getUserByIdPublic } from "@/api/users";
import LoaderComponent from "@/app/components/layout/loaders/component";
import { getPublicLeadById } from "@/api/leads";
import { createPublicTask } from "@/api/tasks";
import { AnnotationStore } from "@/app/store/annotations";
import { getDealByIdPublic } from "@/api/deals";
import { track } from "@vercel/analytics";
import { getExpedienteByIdPublic } from "@/api/expedientes";

const AvailabilityComponent = () => {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [loadingInfo, setLoadingInfo] = useState(false);
  const deal_id = searchParams.get("deal_id");
  const project_id = searchParams.get("project_id");
  const type = searchParams.get("type");
  const source = searchParams.get("source");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [annotations, setAnnotations] = useState<any>(null);
  const [loadingAvailability, setLoadingAvailability] = useState<any>(false);

  const { info, setInfo, setDueDate } = AnnotationStore();

  const router = useRouter();

  const [availability, setAvailability] = useState([]);
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [selectedHour, setSelectedHour] = useState("");
  const [range, setRange] = useState<any>(null);

  useEffect(() => {
    if (selectedDate) {
      getAvailability();
    }
  }, [selectedDate]);

  useEffect(() => {
    if (type == "deal") {
      getDeal();
    }

    if (type == "project") {
      getProject();
    }

    //   getDeal();
    //   if (source == "welcome") {
    //     track("Llamada agendada por welcome");
    //   } else if (source == "no-localizable") {
    //     track("Llamada agendada por lead ilocalizable");
    //   } else if (source == "recover-lead") {
    //     track("Llamada agendada para recuperar lead");
    //   } else if (source == "not-showed-up") {
    //     track("Llamada agendada por lead no asistió");
    //   } else if (source == "email") {
    //     track("Llamada agendada por email lead no contesta");
    //   } else {
    //     track("Llamada agendada por whatsapp");
    //   }
    // }

    // if
  }, [type]);

  // useEffect(() => {
  //   if (deal || project) {
  //     getAnnotations();
  //   }
  // }, [deal, project]);

  const getDeal = async () => {
    setLoadingInfo(true);

    const deal = await getDealByIdPublic({ deal_id });

    const lead = await getPublicLeadById({
      lead_id: deal?.lead_id,
    });

    getAnnotations();

    setInfo({
      user_first_name: lead[0]?.first_name,
      user_last_name: lead[0]?.last_name,
      owner_first_name: deal?.user_assigned?.first_name,
      owner_last_name: deal?.user_assigned?.last_name,
      owner_assigned_id: deal?.user_assigned?.id,
    });

    setLoadingInfo(false);
  };

  const getProject = async () => {
    setLoadingInfo(true);

    const res = await getExpedienteByIdPublic({ project_id });

    getAnnotations();

    setInfo({
      user_first_name: res.project?.created_by_user?.first_name,
      user_last_name: res.project?.created_by_user?.last_name,
      owner_first_name: "Claudia",
      owner_last_name: "Gómez",
      owner_assigned_id: "1590d7cd-6ad0-49ad-b1c9-cdbd8f238fc9",
    });

    setLoadingInfo(false);
  };

  const getAnnotations = async () => {
    const res = await getPublicAnnotationsByDeal({
      object_reference_type: type == "project" ? "projects" : "deals",
      object_reference_id: type == "project" ? project_id : deal_id,
    });

    setAnnotations(
      res.filter((item: any) => item.annotation_type == "Seguimiento")
    );
  };

  const getAvailability = async () => {
    setLoadingAvailability(true);

    const body = [
      {
        name: "from_date",
        value: format(selectedDate, "yyyy-MM-dd"),
      },
      {
        name: "user_assigned_id",
        value: info?.owner_assigned_id,
      },
    ];

    const res = await getPublicSalesAvailability(body);
    setRange(res);

    setAvailability(
      res.filter((item: any) => item.date == format(selectedDate, "yyyy-MM-dd"))
    );

    setLoadingAvailability(false);
  };

  const disabledDates = [
    {
      before: new Date(),
      dayOfWeek: [0, 6],
    },
  ];

  const onSubmit = async () => {
    setLoading(true);

    const offset = new Date().getTimezoneOffset();
    const due_date_no_hours = new Date(selectedDate);
    due_date_no_hours.setHours(0, 0, 0, 0);

    const formated_hours = selectedHour.split(":")[0];
    const formated_minutes = selectedHour.split(":")[1];

    const due_date_with_hour = addHours(
      due_date_no_hours,
      Number(formated_hours)
    );
    const due_date_with_hour_and_minute = addMinutes(
      due_date_with_hour,
      Number(formated_minutes)
    );

    const due_date_with_offset = addMinutes(
      due_date_with_hour_and_minute,
      Math.abs(offset)
    );

    setDueDate(due_date_with_offset);

    const annotationBody = {
      annotation_type: "Llamada agendada",
      content: ` ${type == "project" ? "Onboarding agendado" : "Llamada agendada"} por ${info?.user_first_name} ${info?.user_last_name}`,
      spent_time: "0",
      is_completed: false,
      is_private: true,
      priority: "0",
      status: "pendiente",
      due_date: due_date_with_offset,
      user_assigned_id: info?.owner_assigned_id,
    };

    await createPublicTask({
      body: annotationBody,
      object_reference_type: type == "project" ? "projects" : "deals",
      object_reference_id: type == "project" ? project_id : deal_id,
      annotation_id: annotations[0]?.id,
    });

    setLoading(false);
    router.push(`/disponibilidad/agendado`);
  };

  return (
    <>
      {loadingInfo ? (
        <div className="flex justify-center items-center py-10 border rounded-lg">
          <div>
            <Loader size={16} color="#38869E" strokeWidth={2} />
            <p className="text-sm text-center text-muted-foreground pt-4">
              Cargando información
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="md:text-lg font-medium">
            Agendar llamada con {info?.owner_first_name}
          </p>

          <Card className="gap-0 p-0 overflow-hidden">
            <CardContent className="relative p-0 md:pr-48">
              <div className="p-6 flex justify-center items-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  locale={es}
                  defaultMonth={date}
                  disabled={disabledDates}
                  showOutsideDays={false}
                  modifiersClassNames={{
                    booked: "[&>button]:line-through opacity-100",
                  }}
                  className="bg-transparent p-0 [--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
                  formatters={{
                    formatWeekdayName: (date) => {
                      return date.toLocaleString("es-ES", { weekday: "short" });
                    },
                  }}
                />
              </div>
              <div className="no-scrollbar inset-y-0 right-0 flex max-h-72 w-full scroll-pb-6 flex-col gap-4 overflow-y-auto border-t p-6 md:absolute md:max-h-none md:w-48 md:border-t-0 md:border-l">
                <div className="grid gap-2">
                  {loadingAvailability ? (
                    <div className="flex justify-center items-center py-20">
                      <div>
                        <Loader size={16} color="#38869E" strokeWidth={2} />
                        <p className="text-sm text-center text-muted-foreground pt-4">
                          Cargando horas disponibles
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      {availability.map((item: any, index: number) => (
                        <Button
                          key={index}
                          variant={
                            selectedHour === item.time
                              ? "default"
                              : item.state == "busy"
                                ? "secondary"
                                : "outline"
                          }
                          onClick={
                            item.state == "busy"
                              ? () => {}
                              : () => setSelectedHour(item.time)
                          }
                          className="w-full shadow-none"
                        >
                          {item.time}
                        </Button>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 border-t px-6 !py-5 md:flex-row">
              <div className="text-sm">
                {selectedDate && selectedHour ? (
                  <>
                    LLamada agendada para el{" "}
                    <span className="font-bold">
                      {" "}
                      {format(selectedDate, "EEEE, d MMMM", {
                        locale: es,
                      })}{" "}
                    </span>
                    a las <span className="font-semibold">{selectedHour}h</span>
                    .
                  </>
                ) : (
                  <>Selecciona una fecha y hora para tu llamada.</>
                )}
              </div>
              <Button
                disabled={loading || !selectedDate || !selectedHour}
                className="w-full md:ml-auto md:w-auto"
                variant="outline"
                onClick={onSubmit}
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <Loader size={16} color="#38869E" strokeWidth={2} />
                    <p className="pl-4">Agendando</p>
                  </div>
                ) : (
                  <p>Agendar llamada</p>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default AvailabilityComponent;
