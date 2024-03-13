type HeroProps = {
  title: string;
  description: string;
  buttonTitle?: string;
  showButton: boolean;
};
export default function Hero({
  title,
  description,
  buttonTitle,
  showButton,
}: HeroProps) {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-5 lg:gap-[120px] px-5 md:px-10 py-5 items-start lg:items-center 2xl:justify-center">
      <h1 className=" text-[52px] sm:text-[64px] lg:text-[88px] leading-tight w-fit">
        {title}
      </h1>
      <div
        id="call-to-action"
        className="flex flex-col items-start justify-center gap-6 max-w-full lg:max-w-[440px]"
      >
        <p className="">{description}</p>
        {showButton && (
          <button className=" border-[1px] border-black bg-white hover:bg-black hover:text-white flex flex-row items-center justify-center gap-4 px-6 py-4 rounded-full">
            <span className="text-[19px]">{buttonTitle}</span>
            <div className="svg-icon">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-black hover:text-orange-500"
              >
                <rect
                  width="20"
                  height="20"
                  rx="10"
                  transform="matrix(1 1.74846e-07 1.74846e-07 -1 0 20.5)"
                  fill="currentColor"
                />
                <path
                  d="M13.5 7.5C13.5 7.22386 13.2761 7 13 7L8.5 7C8.22386 7 8 7.22386 8 7.5C8 7.77614 8.22386 8 8.5 8H12.5V12C12.5 12.2761 12.7239 12.5 13 12.5C13.2761 12.5 13.5 12.2761 13.5 12L13.5 7.5ZM7.35355 13.8536L13.3536 7.85355L12.6464 7.14645L6.64645 13.1464L7.35355 13.8536Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
