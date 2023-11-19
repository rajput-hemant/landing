import type { HTMLAttributes } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

type IconProps = {
  size?: number;
  width?: number;
  height?: number;
} & HTMLAttributes<SVGElement>;

export const Verified = component$(
  ({ size = 24, width, height, ...props }: IconProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size || width}
      height={size || height}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.50033 10.5003L9.16699 12.167L12.917 8.41699M6.1118 3.68258C6.78166 3.62912 7.41758 3.36571 7.92905 2.92984C9.12258 1.91271 10.8781 1.91271 12.0716 2.92984C12.5831 3.36571 13.219 3.62912 13.8888 3.68258C15.4521 3.80732 16.6933 5.04861 16.8181 6.6118C16.8716 7.28166 17.1349 7.91758 17.5708 8.42905C18.5879 9.62258 18.5879 11.3781 17.5708 12.5716C17.1349 13.0831 16.8716 13.719 16.8181 14.3888C16.6933 15.9521 15.4521 17.1933 13.8888 17.3181C13.219 17.3716 12.5831 17.6349 12.0716 18.0708C10.8781 19.0879 9.12258 19.0879 7.92905 18.0708C7.41758 17.6349 6.78166 17.3716 6.1118 17.3181C4.54861 17.1933 3.30732 15.9521 3.18258 14.3888C3.12912 13.719 2.86571 13.0831 2.42984 12.5716C1.41271 11.3781 1.41271 9.62258 2.42984 8.42905C2.86571 7.91758 3.12912 7.28166 3.18258 6.6118C3.30732 5.04861 4.54861 3.80732 6.1118 3.68258Z"
        stroke="#1DA1F2"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
);

export const Sun = component$(
  ({ size = 24, width, height, ...props }: IconProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
      width={size || width}
      height={size || height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12,18a6,6,0,1,0-6-6A6.006,6.006,0,0,0,12,18ZM12,8a4,4,0,1,1-4,4A4,4,0,0,1,12,8ZM11,3V2a1,1,0,0,1,2,0V3a1,1,0,0,1-2,0Zm1,17a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0V21A1,1,0,0,1,12,20ZM17.657,6.343a1,1,0,0,1,0-1.414l.707-.707a1,1,0,0,1,1.414,1.414l-.707.707a1,1,0,0,1-1.414,0ZM6.343,17.657a1,1,0,0,1,0,1.414l-.707.707a1,1,0,0,1-1.414-1.414l.707-.707A1,1,0,0,1,6.343,17.657ZM23,12a1,1,0,0,1-1,1H21a1,1,0,0,1,0-2h1A1,1,0,0,1,23,12ZM1,12a1,1,0,0,1,1-1H3a1,1,0,0,1,0,2H2A1,1,0,0,1,1,12Zm18.071,5.657.707.707a1,1,0,1,1-1.414,1.414l-.707-.707a1,1,0,0,1,1.414-1.414ZM4.222,5.636A1,1,0,0,1,5.636,4.222l.707.707A1,1,0,1,1,4.929,6.343Z" />
    </svg>
  )
);

export const Moon = component$(
  ({ size = 24, width, height, ...props }: IconProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size || width}
      height={size || height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.5007 22.9163C18.2536 22.9163 22.9173 18.2526 22.9173 12.4997C22.9173 6.74671 18.2536 2.08301 12.5007 2.08301C6.74768 2.08301 2.08398 6.74671 2.08398 12.4997C2.08398 18.2526 6.74768 22.9163 12.5007 22.9163Z"
        stroke="currentColor"
        stroke-width="2"
      />
      <path
        d="M7.95221 3.19434C8.51519 3.31562 9.03372 3.59007 9.4506 3.9874C9.86748 4.38473 10.1665 4.8895 10.3147 5.44601C10.4628 6.00252 10.4544 6.58914 10.2902 7.14115C10.1261 7.69317 9.8127 8.18911 9.38456 8.57428C8.95641 8.95944 8.4302 9.21885 7.86396 9.32388C7.29772 9.42891 6.71347 9.37548 6.17568 9.16948C5.63789 8.96349 5.16745 8.61294 4.81627 8.15651C4.46509 7.70007 4.24682 7.1555 4.18555 6.58288M22.9178 13.5933C22.5126 13.1798 22.0146 12.8688 21.4652 12.686C20.9159 12.5032 20.3309 12.4539 19.7586 12.5421C19.1864 12.6303 18.6434 12.8535 18.1746 13.1933C17.7058 13.5331 17.3247 13.9796 17.0627 14.496C16.8008 15.0123 16.6656 15.5837 16.6684 16.1626C16.6711 16.7416 16.8117 17.3116 17.0785 17.8255C17.3453 18.3393 17.7307 18.7822 18.2027 19.1175C18.6747 19.4528 19.2198 19.6709 19.7928 19.7537"
        stroke="currentColor"
        stroke-width="2"
      />
      <path
        d="M15.1048 8.864L15.1152 8.85254M10.4173 17.7077C10.9699 17.7077 11.4998 17.4883 11.8905 17.0976C12.2812 16.7069 12.5007 16.1769 12.5007 15.6244C12.5007 15.0719 12.2812 14.542 11.8905 14.1513C11.4998 13.7606 10.9699 13.5411 10.4173 13.5411C9.86478 13.5411 9.33488 13.7606 8.94418 14.1513C8.55348 14.542 8.33398 15.0719 8.33398 15.6244C8.33398 16.1769 8.55348 16.7069 8.94418 17.0976C9.33488 17.4883 9.86478 17.7077 10.4173 17.7077Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
);

export const Github = component$(
  ({ size = 24, width, height, class: c, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || width}
      height={size || height}
      viewBox="0 0 128 128"
      class={`dark:invert ${c}`}
      {...props}
    >
      <g fill="#181616">
        <path
          fillRule="evenodd"
          d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388c0 26.682 17.303 49.317 41.297 57.303c3.017.56 4.125-1.31 4.125-2.905c0-1.44-.056-6.197-.082-11.243c-16.8 3.653-20.345-7.125-20.345-7.125c-2.747-6.98-6.705-8.836-6.705-8.836c-5.48-3.748.413-3.67.413-3.67c6.063.425 9.257 6.223 9.257 6.223c5.386 9.23 14.127 6.562 17.573 5.02c.542-3.903 2.107-6.568 3.834-8.076c-13.413-1.525-27.514-6.704-27.514-29.843c0-6.593 2.36-11.98 6.223-16.21c-.628-1.52-2.695-7.662.584-15.98c0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033c11.526-7.813 16.59-6.19 16.59-6.19c3.287 8.317 1.22 14.46.593 15.98c3.872 4.23 6.215 9.617 6.215 16.21c0 23.194-14.127 28.3-27.574 29.796c2.167 1.874 4.097 5.55 4.097 11.183c0 8.08-.07 14.583-.07 16.572c0 1.607 1.088 3.49 4.148 2.897c23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
          clipRule="evenodd"
        />
        <path d="M26.484 91.806c-.133.3-.605.39-1.035.185c-.44-.196-.685-.605-.543-.906c.13-.31.603-.395 1.04-.188c.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28c-.396-.42-.47-.983-.177-1.254c.298-.266.844-.14 1.24.28c.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52c-.37-.538-.37-1.183.01-1.44c.373-.258.97-.025 1.35.507c.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23c-.527-.487-.674-1.18-.343-1.544c.336-.366 1.045-.264 1.564.23c.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486c-.683-.207-1.13-.76-.99-1.238c.14-.477.823-.7 1.512-.485c.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92c-.723.017-1.308-.387-1.315-.877c0-.503.568-.91 1.29-.924c.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117c-.7.13-1.35-.172-1.44-.653c-.086-.498.422-.997 1.122-1.126c.714-.123 1.354.17 1.444.663zm0 0" />
      </g>
    </svg>
  )
);

export const LinkedIn = component$(
  ({ size = 24, width, height, ...props }: IconProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      width={size || width}
      height={size || height}
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="#0076b2"
        d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3z"
      />
      <path
        fill="#fff"
        d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
      />
    </svg>
  )
);

export const StackOverFlow = component$(
  ({ size = 24, width, height, ...props }: IconProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      width={size || width}
      height={size || height}
      viewBox="0 0 256 304"
      {...props}
    >
      <path
        fill="#BCBBBB"
        d="M216.33 276.188v-81.211h26.953v108.165H0V194.977h26.954v81.211z"
      />
      <path
        fill="#F48023"
        d="m56.708 187.276l132.318 27.654l5.6-26.604L62.31 160.672l-5.601 26.604Zm17.502-63.009l122.517 57.058l11.202-24.503L85.412 99.414L74.21 124.267Zm33.955-60.208l103.964 86.462l17.152-20.653l-103.964-86.462l-17.152 20.653ZM175.375 0L153.67 16.102l80.511 108.515l21.703-16.102L175.375 0ZM53.906 248.884h135.119V221.93H53.907v26.954Z"
      />
    </svg>
  )
);

export const Twitter = component$(
  ({ size = 24, width, height, ...props }: IconProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      width={size || width}
      height={size || height}
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="#1d9bf0"
        d="M114.896 37.888c.078 1.129.078 2.257.078 3.396c0 34.7-26.417 74.72-74.72 74.72v-.02A74.343 74.343 0 0 1 0 104.21c2.075.25 4.16.375 6.25.38a52.732 52.732 0 0 0 32.615-11.263A26.294 26.294 0 0 1 14.331 75.09c3.937.76 7.993.603 11.857-.453c-12.252-2.475-21.066-13.239-21.066-25.74v-.333a26.094 26.094 0 0 0 11.919 3.287C5.5 44.139 1.945 28.788 8.913 16.787a74.535 74.535 0 0 0 54.122 27.435a26.277 26.277 0 0 1 7.598-25.09c10.577-9.943 27.212-9.433 37.154 1.139a52.696 52.696 0 0 0 16.677-6.376A26.359 26.359 0 0 1 112.92 28.42A52.227 52.227 0 0 0 128 24.285a53.35 53.35 0 0 1-13.104 13.603z"
      />
    </svg>
  )
);

export const Rocket = component$(
  ({ size = 24, width, height, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      width={size || width}
      height={size || height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
);

export const Clipboard = component$(
  ({ size = 24, width, height, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      height={size || height}
      width={size || width}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />{" "}
    </svg>
  )
);

export const ClipboardCheck = component$(
  ({ size = 24, width, height, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      height={size || height}
      width={size || width}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  )
);

export const MailOpen = component$(
  ({ size = 24, width, height, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      height={size || height}
      width={size || width}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  )
);

export const Contact = component$(
  ({ size = 24, width, height, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      height={size || height}
      width={size || width}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  )
);

export const Laptop = component$(
  ({ size = 24, width, height, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      height={size || height}
      width={size || width}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  )
);

export const MapPin = component$(
  ({ size = 24, width, height, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      height={size || height}
      width={size || width}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
);
