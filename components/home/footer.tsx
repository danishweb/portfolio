"use client";

import Image from "next/image";
import { MENULINKS } from "../../constants";
import Button, { ButtonTypes } from "../common/button";
import { CTAButton, FooterSection } from "@/types";

interface FooterProps {
  data: FooterSection;
}

const Footer = ({ data }: FooterProps) => {
  const getButtonType = (type: CTAButton["type"]): ButtonTypes => {
    switch (type) {
      case "PRIMARY":
        return ButtonTypes.PRIMARY;
      case "OUTLINE":
        return ButtonTypes.OUTLINE;
      case "WHITE":
        return ButtonTypes.WHITE;
      default:
        return ButtonTypes.OUTLINE;
    }
  };

  const renderSocialIcons = (): React.ReactNode => {
    return data.socialLinks.map((social) => (
      <a
        href={social.url}
        key={social.platform}
        className="link hover:opacity-80 duration-300 md:px-2 px-1"
        rel="noreferrer"
        target="_blank"
      >
        <Image
          src={social.icon.asset.url}
          alt={social.platform}
          width={40}
          height={40}
        />
      </a>
    ));
  };

  const renderButtons = (): React.ReactNode => (
    <div className="flex flex-wrap justify-center mt-8 gap-6">
      {data.ctaButtons.map((button) => (
        <Button
          key={button.text}
          type={getButtonType(button.type)}
          name={button.text}
          otherProps={{
            target: button.newTab ? "_blank" : undefined,
            rel: button.newTab ? "noreferrer" : undefined,
          }}
          href={button.url}
        />
      ))}
      {data.contactEmail && (
        <Button
          type={ButtonTypes.WHITE}
          name="Let's Talk"
          href={`mailto:${data.contactEmail}`}
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
        />
      )}
    </div>
  );

  const renderFooterContent = (): React.ReactNode => (
    <>
      <h1 className="font-medium text-3xl md:text-4xl text-center">
        Connect with me on social media.
      </h1>
      <div className="flex justify-center mt-8">{renderSocialIcons()}</div>
      {renderButtons()}
      <h2 className="text-center text-sm sm:text-base mt-8">
        {data.copyright}
      </h2>
    </>
  );

  return (
    <footer
      className="w-full relative select-none bg-gray pt-12 pb-6 px-6"
      id={MENULINKS[4].ref}
    >
      <div className="section-container flex flex-col justify-center">
        {renderFooterContent()}
      </div>
    </footer>
  );
};

export default Footer;
