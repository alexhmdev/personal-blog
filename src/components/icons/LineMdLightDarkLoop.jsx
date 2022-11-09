export function LineMdLightDarkLoop(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <defs>
        <mask id="svgIDb">
          <circle cx="7.5" cy="7.5" r="5.5" fill="#fff"></circle>
          <circle cx="7.5" cy="7.5" r="5.5">
            <animate
              fill="freeze"
              attributeName="cx"
              dur="0.4s"
              values="7.5;11"
            ></animate>
            <animate
              fill="freeze"
              attributeName="r"
              dur="0.4s"
              values="5.5;6.5"
            ></animate>
          </circle>
        </mask>
        <mask id="svgIDc">
          <g fill="#fff">
            <circle cx="12" cy="9" r="5.5">
              <animate
                fill="freeze"
                attributeName="cy"
                begin="1s"
                dur="0.5s"
                values="9;15"
              ></animate>
            </circle>
            <g>
              <g fillOpacity="0">
                <use href="#svgIDa" transform="rotate(-125 12 15)"></use>
                <use href="#svgIDa" transform="rotate(-75 12 15)"></use>
                <use href="#svgIDa" transform="rotate(-25 12 15)"></use>
                <use href="#svgIDa" transform="rotate(25 12 15)"></use>
                <use href="#svgIDa" transform="rotate(75 12 15)"></use>
                <set attributeName="fill-opacity" begin="1.5s" to="1"></set>
              </g>
              <animateTransform
                attributeName="transform"
                dur="5s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 15;50 12 15"
              ></animateTransform>
            </g>
          </g>
          <path d="M0 10h26v5h-26z"></path>
          <path
            fill="none"
            stroke="#fff"
            strokeDasharray="26"
            strokeDashoffset="26"
            strokeLinecap="round"
            strokeWidth="2"
            d="M1 12h22"
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="M0 12h22;M2 12h22;M0 12h22"
            ></animate>
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.5s"
              dur="0.4s"
              values="26;52"
            ></animate>
          </path>
        </mask>
        <symbol id="svgIDa">
          <path d="M0 0">
            <animate
              fill="freeze"
              attributeName="d"
              begin="1.5s"
              dur="0.4s"
              values="M11 18h2L12 20z;M10.5 21.5h3L12 24z"
            ></animate>
          </path>
        </symbol>
      </defs>
      <g fill="#888888">
        <rect width="13" height="13" x="1" y="1" mask="url(#svgIDb)"></rect>
        <path
          d="M-2 11h28v13h-28z"
          mask="url(#svgIDc)"
          transform="rotate(-45 12 12)"
        ></path>
      </g>
    </svg>
  );
}
