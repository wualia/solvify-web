"use client";

import React, { useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { de, es } from "date-fns/locale";
import { addHours, addMinutes } from "date-fns";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getPublicSalesAvailability } from "@/api/availability";
import { useFormStore } from "@/store/form";
import { useAvailabilityStore } from "@/store/availability";
import { createPublicTask } from "@/api/tasks";
import { getPublicAnnotationsByDeal } from "@/api/annotations";
import Loader from "@/components/ui/loader";
import { editDealStatus } from "@/api/deals";
import { getDealByIdPublic } from "@/api/deals";

const DisponibilidadComponent = ({
  source,
  deal_id,
}: {
  source: string;
  deal_id: string | null;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loadingInfo, setLoadingInfo] = useState(false);
  const [loadingAvailability, setLoadingAvailability] = useState(false);
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [selectedHour, setSelectedHour] = useState<any>(null);
  const [range, setRange] = useState<any[]>([]);
  const [availability, setAvailability] = useState<any[]>([]);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [disabledDates, setDisabledDates] = useState<any[]>([]);
  const { deal, lead, clearForm } = useFormStore();
  const { setDueDate } = useAvailabilityStore();
  const [annotations, setAnnotations] = useState<any[]>([]);
  const [dealParam, setDealParam] = useState<any>(null);

  console.log("deal_id:", deal_id);

  useEffect(() => {
    if (selectedDate) {
      getAvailability();
    }
  }, [selectedDate]);

  useEffect(() => {
    if (deal_id) {
      getDeal();
    }
  }, [deal_id]);

  useEffect(() => {
    if (deal) {
      getAnnotations();
    }
  }, [deal]);

  const getDeal = async () => {
    const res = await getDealByIdPublic(deal_id);
    setDealParam(res);
  };

  const getAnnotations = async () => {
    const res = await getPublicAnnotationsByDeal({
      object_reference_type: "deals",
      object_reference_id: deal_id ? deal_id : deal?.id,
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
        value: dealParam ? dealParam.user_assigned_id : deal?.user_assigned_id,
      },
    ];

    const res = await getPublicSalesAvailability(body);
    setRange(res);

    setAvailability(
      res.filter((item: any) => item.date == format(selectedDate, "yyyy-MM-dd"))
    );

    setLoadingAvailability(false);
  };

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

    const taskBody = {
      annotation_type: "Llamada agendada",
      content: `Llamada agendada por ${lead?.first_name} ${lead?.last_name}`,
      spent_time: "0",
      is_completed: false,
      is_private: true,
      priority: "0",
      status: "pendiente",
      due_date: due_date_with_offset,
      user_assigned_id: dealParam
        ? dealParam.user_assigned_id
        : deal?.user_assigned_id,
    };

    await createPublicTask({
      body: taskBody,
      object_reference_type: "deals",
      object_reference_id: dealParam ? dealParam.id : deal?.id,
      annotation_id: annotations[0]?.id,
    });

    await editDealStatus({
      body: {
        status: "Agendado",
      },
      lead_id: lead?.id,
      deal_id: dealParam ? dealParam?.id : deal?.id,
    });

    clearForm();
    setLoading(false);
    router.push(`/formulario/${source}/agendado`);
  };

  return (
    <div className="mt-4">
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
          <p className="md:text-lg font-medium text-center">
            Agendar llamada con{" "}
            {dealParam
              ? dealParam.user_assigned?.first_name
              : deal?.user_assigned?.first_name}
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
                      <div className="flex flex-col items-center">
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
    </div>
  );
};

export default DisponibilidadComponent;
