import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solvify - Política de Privacidad",
  description: "Política de Privacidad de la página web de Solvify",
  metadataBase: new URL(`${process.env.SITE_URL}`),
  alternates: {
    canonical: `/legal/politica-de-privacidad/`,
  },
  openGraph: {
    title: "Solvify - Política de Privacidad",
    description: "Política de Privacidad de la página web de Solvify",
    siteName: "Solvify",
    type: "website",
    images: [process.env.BLOG_URL + "/about-us.webp"],
  },
};

const PoliticaDePrivacidad = () => {
  return (
    <div className="mx-auto max-w-4xl py-8 px-4">
      <h1 className="text-primary text-3xl font-bold pb-4">
        Politica de Privacidad
      </h1>
      <h2 className="text-xl font-semibold pb-4">1. Responsable</h2>
      <h3 className="text-lg font-semibold pb-4">
        ¿Quién es el Responsable del tratamiento de sus datos?
      </h3>
      <p className="text-gray-500 dark:text-gray-300 pb-4">
        El Responsable del tratamiento de sus datos es LJP LEGALTECH SLU (en
        adelante Solvify) con CIF B19414267 y su dirección postal y domicilio
        social está en Av.Diagonal 534 ENT - 08006 Barcelona - España. Su
        dirección electrónica es{" "}
        <a href="mailto:info@solvify.es" className="text-primary font-bold">
          info@solvify.es
        </a>
      </p>
      <h2 className="text-xl font-semibold pb-4">2. Finalidades</h2>
      <h3 className="text-lg font-semibold pb-4">
        ¿Con qué finalidad tratamos sus datos personales?
      </h3>
      <p className="text-gray-500 dark:text-gray-300 pb-4">
        La finalidad del tratamiento de los datos de los Usuarios, consiste en
        prestar los servicios solicitados y, en general, gestionar, desarrollar
        y cumplir las relaciones establecidas entre Solvify y quienes aporten
        sus datos personales a través del Sitio Web o cualquier otro medio.
      </p>
      <p className="text-gray-500 dark:text-gray-300 pb-4">
        Además sus datos se incluirán en nuestras bases de datos internas y se
        emplearán para mejorar nuestros productos y servicios, remitirle
        mailings promocionales sobre nuevos productos, pudiendo contactar con el
        Usuario por e-mail o teléfono.
      </p>
      <p className="text-gray-500 dark:text-gray-300 pb-4">
        También podremos usar la información para personalizar nuestro sitio web
        conforme a sus intereses. Las visitas a nuestro sitio web son rastreadas
        de forma que podamos valorar qué partes de nuestra web sirven mejor a
        nuestros clientes y Usuarios, y mejor adaptan nuestra información a sus
        necesidades. No vendemos ni comerciamos con ninguna de la información
        que recibimos ni almacenamos.
      </p>
      <p className="text-gray-500 dark:text-gray-300 pb-4">
        Además, en caso de que el Usuario haya prestado su consentimiento de
        cara a poder participar en un concurso y/o promoción, los datos serán
        tratados para la gestión de los mismos.
      </p>
      <p className="text-gray-500 dark:text-gray-300 pb-4">
        En el caso de que los datos aportados pertenecieran a un tercero, usted
        garantiza que ha informado a dicho tercero de los aspectos contenidos en
        este documento y que ha obtenido la correspondiente autorización para
        facilitar sus datos a Solvify para los fines señalados.
      </p>
      <h2 className="text-xl font-semibold pb-4">
        3. Plazo de conservación de los datos
      </h2>
      <h3 className="text-lg font-semibold pb-4">
        ¿Por cuánto tiempo conservaremos sus datos?
      </h3>
      <p className="text-gray-500 dark:text-gray-300 pb-4">
        Sus datos serán conservados mientras dure la finalidad para la que
        fueron recogidos, la relación contractual y/o comercial que mantengamos,
        o hasta que solicite su supresión, así como el tiempo necesario para
        cumplir las obligaciones legales pertinentes.
      </p>
      <h2 className="text-xl font-semibold pb-4">4. Legitimación</h2>
      <h3 className="text-lg font-semibold pb-4">
        ¿Cuál es la legitimación para el tratamiento de sus datos?
      </h3>
      <p className="text-gray-500 dark:text-gray-300 pb-4">
        La base legal para el tratamiento de sus datos es el consentimiento
        expreso que usted presta al comunicarnos sus datos, siendo previamente
        informado de su tratamiento.
      </p>
      <p className="text-gray-500 dark:text-gray-300 pb-4">
        En caso de mantener una relación contractual entre usted e Solvify, la
        legitimación para tratar sus datos se basará en dicha relación jurídica.
      </p>
      <p className="text-gray-500 dark:text-gray-300 pb-4">
        La participación en los concursos y/o promociones así como la oferta
        prospectiva de productos y servicios, está basada en el consentimiento
        expreso que se le solicita, todo ello en virtud de los términos y
        condiciones que en su caso se adopten.
      </p>
      <h2 className="text-xl font-semibold pb-4">5. Destinatarios</h2>
      <h3 className="text-lg font-semibold pb-4">
        ¿A qué destinatarios se comunicarán sus datos?
      </h3>
      <p className="text-gray-500 dark:text-gray-300 pb-4">
        Los datos podrán ser comunicados a las empresas asociadas del Solvify
        para el cumplimiento de las finalidades informadas previamente.
      </p>
      <h2 className="text-xl font-semibold pb-4">6. Derechos</h2>
      <h3 className="text-lg font-semibold pb-4">
        ¿Cuáles son sus derechos cuando nos facilita sus datos y cómo puede
        ejercerlos?
      </h3>
      <ul className="list-disc list-outside pl-4 text-gray-500 dark:text-gray-300">
        <li className="pb-4">
          Cualquier persona tiene derecho a obtener información sobre si en
          Solvify estamos tratando datos personales que les conciernan, o no.
        </li>
        <li className="pb-4">
          Las personas interesadas tienen derecho a acceder a sus datos
          personales, así como a solicitar la rectificación de los datos
          inexactos o, en su caso, solicitar su supresión cuando, entre otros
          motivos, los datos ya nos sean necesarios para los que fines para los
          que fueron recogidos.
        </li>
        <li className="pb-4">
          En determinadas circunstancias, los interesados podrán solicitar la
          limitación del tratamiento de sus datos, en cuyo caso únicamente los
          conservaremos para el ejercicio o la defensa de reclamaciones.
        </li>
        <li className="pb-4">
          En determinadas circunstancias y por motivos relacionados con su
          situación particular, los interesados podrán oponerse al tratamiento
          de sus datos. Solvify dejará de tratar los datos, salvo por motivos
          legítimos imperiosos, o el ejercicio o la defensa de posibles
          reclamaciones.
        </li>
        <li className="pb-4">
          Usted podrá revocar su consentimiento para el tratamiento de sus datos
          en cualquier momento.
        </li>
        <li className="pb-4">
          En el caso que resulte de aplicación, usted podrá solicitad la
          portabilidad de sus datos.
        </li>
      </ul>
      <p className="text-gray-500 dark:text-gray-300 pb-4">
        En todo caso, usted podrá presentar una reclamación ante la Agencia
        Española de Protección de Datos especialmente cuando no haya obtenido
        satisfacción en el ejercicio de sus derechos. La dirección de la Agencia
        es C/ Jorge Juan 6, 28001 y su página web{" "}
        <a
          href="https://www.aepf.es"
          className="font-bold text-primary"
          target="_blank"
        >
          www.aepf.es
        </a>{" "}
      </p>
    </div>
  );
};

export default PoliticaDePrivacidad;
