import Container from "$store/components/ui/Container.tsx";
import Button from "$store/components/ui/Button.tsx";
import Text from "$store/components/ui/Text.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Link {
  /**
   * @description Main text on link button
   */
  text: string;
  /**
   * @description Alt text on hover
   */
  alt: string;
  /**
   * @description When you click you go to
   */
  href: string;
  image?: LiveImage;
  icon?: LiveImage;
}

export interface Props {
  title?: string;
  /**
   * @description Default is 2 for mobile and all for desktop
   */
  logo: LiveImage;
  logoAltText: string;
  /**
   * @description Item's border radius in px
   */
  borderRadius: {
    mobile?: number;
    desktop?: number;
  };
  links: Link[];
}

export default function Links({
  title,
  logo,
  logoAltText,
  borderRadius,
  links = [],
}: Props) {
  return (
    <Container>
      <section class="w-full px-4 md:px-0 mx-auto">
        {title &&
          (
            <div class="py-6 md:py-0 md:pb-[40px] flex items-center mt-6">
              <h2 class={"text-lg leading-5 font-semibold uppercase "}>
                {title}
              </h2>

              <div class="bg-[#e5e5ea] h-[1px] w-full ml-4"></div>
              <Picture>
                <Source
                  media="(max-width: 767px)"
                  src={logo}
                  width={100}
                  height={100}
                />
                <img
                  class="w-full"
                  sizes="(max-width: 640px) 100vw, 30vw"
                  src={logo}
                  alt={logoAltText}
                  decoding="async"
                  loading="lazy"
                />
              </Picture>
            </div>
          )}
        <div>
          {links.map(({ href, text, alt, image, icon }) => (
            <a
              href={href}
              class={`overflow-hidden ${
                borderRadius?.mobile && `rounded-[${borderRadius.mobile}px]`
              } ${
                borderRadius?.desktop
                  ? `sm:rounded-[${borderRadius.desktop}px]`
                  : `sm:rounded-none`
              }`}
            >
              <Button>
                <Text>{text}</Text>
              </Button>
            </a>
          ))}
        </div>
      </section>
    </Container>
  );
}
