import * as React from "react";

import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "@/components/emails/contact";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const res = await request.json();

  console.log(res);

  try {
    const { data, error } = await resend.emails.send({
      from: "Solvify <info@solvify.es>",
      to: ["alex@solvify.es"],
      subject: `Formulario web de ${res.first_name} ${res.last_name}`,
      react: ContactEmail({
        name: `${res.first_name} ${res.last_name}`,
        email: res.email,
        phone: res.phone,
        subject: res.subject,
        message: res.message,
      }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
