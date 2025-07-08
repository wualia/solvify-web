import React from "react";
import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Img,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface ContactProps {
  name: string | null | undefined;
  email: string | null | undefined;
  phone: string | null | undefined;
  message: string | null | undefined;
  subject: string | null | undefined;
}

const ContactEmail = ({
  name,
  email,
  phone,
  message,
  subject,
}: ContactProps) => {
  return (
    <Html>
      <Head />
      <Preview>Nuevo formulario de contacto</Preview>

      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                primary: "#F42560",
              },
            },
          },
        }}
      >
        <Body className="bg-gray-100 py-10 mx-auto">
          <Container className="bg-white rounded-lg p-4">
            <Section className="pb-8">
              <Img
                src={`https://solvify.es/solvify-light.png`}
                alt="Logo Bakering"
                className="h-10"
              />
            </Section>
            <Text className="text-sm">
              Hola equipo, tenemos un nuevo contacto
            </Text>
            <Text className="text-sm">Nombre: {name}</Text>
            <Text className="text-sm">Email: {email}</Text>
            <Text className="text-sm">Teléfono: {phone}</Text>
            <Text className="text-sm">Asunto: {subject}</Text>
            <Text className="text-sm">Mensaje: {message}</Text>
            <Text className="text-sm">
              Saludos
              <br />
              Solvify team
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
