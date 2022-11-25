import clsx from "clsx";
import Button from "./Button";
import Image from "next/image";
import { images } from "../lib/images";

export default function LandingHero() {
  return (
    <main>
      <section className="flex flex-col lg:flex-row mx-4">
        <section
          className={clsx(
            "text-center md:text-start mt-10 md:mt-32 md:w-1/2 md:pl-8 lg:pl-14"
          )}
        >
          <section className={clsx("flex")}>
            <article>
              <h2
                className={clsx(
                  "text-lg font-normal md:text-3xl font-montserrat text-blue-gray-900 mt-12"
                )}
              >
                Encuentra tu lugar favorito
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold	font-montserrat text-blue-gray-900 mt-5 md:mt-2">
                Únete a los
              </h1>
            </article>
            <article>
              <Image
                className="invisible md:visible"
                src={images.heroIcon}
                alt="Figure Hero Lines"
              />
            </article>
          </section>
          <section>
            <h1 className="text-5xl text-blue-gray-900 font-montserrat font-bold lgbtiq-grad-color leading-tight">
              negocios en racha
            </h1>
          </section>
          <article className="mt-5 font-montserrat text-blue-gray-700">
            <p>
              Únete a Bee You, una plataforma orientada a personas de la
              comunidad LGTBIQ+. ¡Encuentra tus lugares favoritos, eventos de
              interés y recibe grandes recompensas!
            </p>
            <Button
              label="ENCUENTRA TU ESPACIO"
              isSubmit
              style="mt-8 lg:mb-16 lgbtiq-button-two lgbtiq-grad-bg"
            ></Button>
          </article>
        </section>
        <section className="flex items-end p-8 md:w-6/6 lg:w-4/6 lg:mb-20">
          <Image src={images.heroCards} alt="Figure Hero Cards" />
        </section>
      </section>
    </main>
  );
}
