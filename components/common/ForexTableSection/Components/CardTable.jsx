import React, { useState } from "react";
import {
  TimeIcon,
  RiskIcon,
  ProfitIcon,
  SettingsIcon,
  ConsistencyIcon,
  TargetIcon,
} from "../../icons.jsx";

const getLocalizedTooltip = (language) => {
  const isSpanish = language.startsWith("es");
  return isSpanish
    ? "Este beneficio\npuede incluir un addon"
    : "This feature\nis eligible for an addon";
};

// Determine icon from title
const getIconForTitle = (title) => {
  const normalizedTitle = title.toLowerCase();

  const iconMap = {
    time: {
      component: TimeIcon,
      keywords: [
        "trading days",
        "minimum trading",
        "min. trading",
        "min trading days",
        "duration",
        "daily",
        "time",
        "días",
        "trading",
        "jours",
        "duración",
        "diaria",
        "diario",
        "durée",
        "quotidien",
      ],
    },
    risk: {
      component: RiskIcon,
      keywords: [
        "max loss",
        "max daily loss",
        "daily drawdown",
        "max overall loss",
        "daily profit cap",
        "pérdida máxima",
        "pérdida diaria máxima",
        "perte maximale",
        "perte quotidienne maximale",
      ],
    },
    profit: {
      component: ProfitIcon,
      keywords: [
        "share",
        "booster",
        "split",
        "minimum payout",
        "payout",
        "express",
        "first payout",
        "second payout",
        "participación",
        "impulsor",
        "división",
        "pago",
        "partage",
        "répartition",
      ],
    },
    target: {
      component: TargetIcon,
      keywords: ["target", "objetivo", "objectif"],
    },
    settings: {
      component: SettingsIcon,
      keywords: [
        "leverage",
        "news trading",
        "weekend trading",
        "weekend holding",
        "apalancamiento",
        "levier",
        "effet de levier",
        "news",
        "noticias",
        "actualités",
        "weekend",
        "fin de semana",
      ],
    },
    consistency: {
      component: ConsistencyIcon,
      keywords: [
        "consistency",
        "rule",
        "consistencia",
        "regla",
        "consistance",
        "règle",
        "cohérence",
      ],
    },
  };

  for (const { component, keywords } of Object.values(iconMap)) {
    if (keywords.some((keyword) => normalizedTitle.includes(keyword))) {
      return component;
    }
  }
  return TargetIcon;
};

const CardTable = ({
  icon: IconComponentProp,
  title,
  subtitle,
  text,
  addonIcon,
  hasAddon,
  mainLang,
  tooltipText = getLocalizedTooltip(mainLang),
  ...props
}) => {
  const [isIconHovered, setIsIconHovered] = useState(false);

  const displayText = text;
  const valueHasAddon =
    typeof displayText === "string" && displayText.includes("*");
  const cleanText =
    typeof displayText === "string"
      ? displayText.replace("*", "")
      : displayText;
  const showAddon = addonIcon ?? hasAddon ?? valueHasAddon;

  const IconComponent = IconComponentProp || getIconForTitle(title);

  const handleMouseEnter = (e) => {
    e.currentTarget.style.background =
      "linear-gradient(135deg, #1c2130 0%, #272e42 100%)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.background =
      "linear-gradient(135deg, #1a1f2e 0%, #252b3d 100%)";
  };

  return (
    <div
      className={`
        relative group transition-all duration-200 ease-in-out font-inter flex-shrink-0
        w-full px-4 py-3 flex flex-col justify-between border-[#4D516A]
        
        /* FIXED consistent height for all cards */
        h-[160px] md:h-[180px]
      `}
      style={{
        borderRadius: "12px",
        background: "linear-gradient(135deg, #1a1f2e 0%, #252b3d 100%)",
        width: '100%',
        minWidth: '0',
        maxWidth: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={`${title}: ${cleanText}`}
      {...props}
    >
      {/* Tooltip */}
      {showAddon && isIconHovered && (
        <div className="absolute top-12 right-[1.125rem] z-50 hidden md:block">
          <div className="relative">
            <div
              className="text-white text-xs px-4 py-2 bg-gray-900 shadow-xl whitespace-nowrap"
              style={{
                borderRadius: "6px",
                boxShadow:
                  "0 10px 25px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
            >
              {tooltipText.replace("\n", " ")}
            </div>
            <div
              className="absolute bottom-full right-2"
              style={{
                width: 0,
                height: 0,
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderBottom: "8px solid #111827",
              }}
            ></div>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="flex items-center justify-between md:items-start gap-3 flex-shrink-0">
        <div className="flex items-center space-x-2 md:items-start flex-1 min-w-0">
          <div
            className="w-6 h-6 flex items-center justify-center flex-shrink-0"
            aria-hidden="true"
          >
            <IconComponent className="w-6 h-6" />
          </div>
          <h3 
            className="text-lg md:text-xl font-medium text-white group-hover:text-slate-100 leading-tight break-words"
            style={{
              wordBreak: 'break-word',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {title}
          </h3>
        </div>

        <div className="w-7 h-6 flex items-center justify-center flex-shrink-0 hidden md:block">
          {showAddon && (
            <div
              className="relative"
              onMouseEnter={() => setIsIconHovered(true)}
              onMouseLeave={() => setIsIconHovered(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="26"
                viewBox="0 0 28 26"
                fill="none"
                className={`w-7 h-6 transition-all duration-200 flex-shrink-0 cursor-pointer ${
                  isIconHovered
                    ? "opacity-100 scale-110"
                    : "opacity-80 hover:opacity-100"
                }`}
                aria-label="Additional features available"
              >
                <path
                  d="M23.1673 8.82603L22.8627 9.52675C22.8151 9.64086 22.7348 9.73833 22.632 9.80689C22.5291 9.87544 22.4082 9.91203 22.2846 9.91203C22.1609 9.91203 22.0401 9.87544 21.9372 9.80689C21.8343 9.73833 21.754 9.64086 21.7064 9.52675L21.4019 8.82603C20.8664 7.58641 19.8857 6.59252 18.6534 6.04046L17.7138 5.62076C17.5998 5.56832 17.5032 5.48429 17.4355 5.37864C17.3678 5.27298 17.3318 5.15013 17.3318 5.02465C17.3318 4.89917 17.3678 4.77632 17.4355 4.67066C17.5032 4.56501 17.5998 4.48098 17.7138 4.42854L18.6014 4.03361C19.8647 3.46582 20.8621 2.43516 21.3882 1.15395L21.7015 0.397509C21.7475 0.280334 21.8277 0.179736 21.9317 0.108831C22.0357 0.0379248 22.1587 0 22.2846 0C22.4104 0 22.5334 0.0379248 22.6374 0.108831C22.7414 0.179736 22.8217 0.280334 22.8677 0.397509L23.1809 1.15271C23.7064 2.43416 24.7034 3.46527 25.9665 4.03361L26.8554 4.42978C26.969 4.48237 27.0653 4.56638 27.1327 4.6719C27.2001 4.77742 27.236 4.90004 27.236 5.02527C27.236 5.1505 27.2001 5.27312 27.1327 5.37864C27.0653 5.48416 26.969 5.56817 26.8554 5.62076L25.9145 6.03922C24.6824 6.59183 23.7022 7.58617 23.1673 8.82603ZM12.3803 3.71543C10.371 3.71574 8.40931 4.32717 6.75567 5.46856C5.10202 6.60996 3.83465 8.22732 3.1218 10.1059C2.40895 11.9845 2.28435 14.0355 2.76454 15.9866C3.24473 17.9377 4.30699 19.6966 5.8103 21.0298C7.31361 22.363 9.18685 23.2074 11.1813 23.4509C13.1758 23.6945 15.1972 23.3256 16.9772 22.3933C18.7571 21.4611 20.2114 20.0094 21.147 18.2312C22.0825 16.453 22.4551 14.4323 22.2152 12.4374L24.674 12.1452C24.7317 12.6297 24.7606 13.1212 24.7606 13.6197C24.7606 20.4573 19.218 26 12.3803 26C5.54267 26 0 20.4573 0 13.6197C0 6.78204 5.54267 1.23937 12.3803 1.23937C13.4463 1.23937 14.4837 1.37555 15.4729 1.62935L14.8564 4.02742C14.0475 3.81944 13.2155 3.71461 12.3803 3.71543ZM13.6183 12.3817H17.3324L11.1423 21.0479V14.8577H7.42819L13.6183 6.1915V12.3817Z"
                  fill="#FF532D"
                />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Subtitle */}
      <div className="h-6 md:h-8 flex items-center flex-shrink-0">
        {subtitle && (
          <p 
            className="text-base md:text-xl text-slate-400 font-normal md:ml-8"
            style={{
              wordBreak: 'break-word',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Text */}
      <div className="flex items-end justify-between flex-grow md:justify-end md:pr-2">
        <div className="flex-1 min-w-0 max-w-full">
          <span 
            className="text-3xl md:text-4xl font-medium text-[#939BB5] md:text-right block"
            style={{
              wordBreak: 'break-word',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              maxWidth: '100%',
            }}
          >
            {showAddon && "*"}
            {cleanText}
          </span>
        </div>

        {/* Mobile Addon Icon */}
        <div className="w-8 h-7 flex items-center justify-center flex-shrink-0 md:hidden ml-2 pb-1">
          {showAddon && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
              className="w-8 h-7 flex-shrink-0 opacity-80"
              aria-label="Additional features available"
            >
              <path
                d="M23.1673 8.82603L22.8627 9.52675C22.8151 9.64086 22.7348 9.73833 22.632 9.80689C22.5291 9.87544 22.4082 9.91203 22.2846 9.91203C22.1609 9.91203 22.0401 9.87544 21.9372 9.80689C21.8343 9.73833 21.754 9.64086 21.7064 9.52675L21.4019 8.82603C20.8664 7.58641 19.8857 6.59252 18.6534 6.04046L17.7138 5.62076C17.5998 5.56832 17.5032 5.48429 17.4355 5.37864C17.3678 5.27298 17.3318 5.15013 17.3318 5.02465C17.3318 4.89917 17.3678 4.77632 17.4355 4.67066C17.5032 4.56501 17.5998 4.48098 17.7138 4.42854L18.6014 4.03361C19.8647 3.46582 20.8621 2.43516 21.3882 1.15395L21.7015 0.397509C21.7475 0.280334 21.8277 0.179736 21.9317 0.108831C22.0357 0.0379248 22.1587 0 22.2846 0C22.4104 0 22.5334 0.0379248 22.6374 0.108831C22.7414 0.179736 22.8217 0.280334 22.8677 0.397509L23.1809 1.15271C23.7064 2.43416 24.7034 3.46527 25.9665 4.03361L26.8554 4.42978C26.969 4.48237 27.0653 4.56638 27.1327 4.6719C27.2001 4.77742 27.236 4.90004 27.236 5.02527C27.236 5.1505 27.2001 5.27312 27.1327 5.37864C27.0653 5.48416 26.969 5.56817 26.8554 5.62076L25.9145 6.03922C24.6824 6.59183 23.7022 7.58617 23.1673 8.82603ZM12.3803 3.71543C10.371 3.71574 8.40931 4.32717 6.75567 5.46856C5.10202 6.60996 3.83465 8.22732 3.1218 10.1059C2.40895 11.9845 2.28435 14.0355 2.76454 15.9866C3.24473 17.9377 4.30699 19.6966 5.8103 21.0298C7.31361 22.363 9.18685 23.2074 11.1813 23.4509C13.1758 23.6945 15.1972 23.3256 16.9772 22.3933C18.7571 21.4611 20.2114 20.0094 21.147 18.2312C22.0825 16.453 22.4551 14.4323 22.2152 12.4374L24.674 12.1452C24.7317 12.6297 24.7606 13.1212 24.7606 13.6197C24.7606 20.4573 19.218 26 12.3803 26C5.54267 26 0 20.4573 0 13.6197C0 6.78204 5.54267 1.23937 12.3803 1.23937C13.4463 1.23937 14.4837 1.37555 15.4729 1.62935L14.8564 4.02742C14.0475 3.81944 13.2155 3.71461 12.3803 3.71543ZM13.6183 12.3817H17.3324L11.1423 21.0479V14.8577H7.42819L13.6183 6.1915V12.3817Z"
                fill="#FF532D"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardTable;