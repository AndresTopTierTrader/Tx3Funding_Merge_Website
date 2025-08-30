import React, { useMemo, useState, useEffect } from "react";
import CardTable from "../CardTable.jsx";
import { getOptimizedChallengeData } from "../../Data/TableData.js";
import { MASTER_VISUAL_STYLES } from "../../Utils/tableHelpers.js";

// Custom hook to detect mobile vs desktop
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, [breakpoint]);

  return isMobile;
};

const ProTable = ({
  accountAmount,
  language,
  addOns = {},
  showOnlyTwoRows = false,
  ...props
}) => {
  const isMobile = useIsMobile();

  const data = useMemo(() => {
    try {
      return getOptimizedChallengeData("pro", language, accountAmount, addOns);
    } catch (error) {
      console.error("Error loading Pro challenge data:", error);
      return null;
    }
  }, [accountAmount, language, addOns]);

  const cards = useMemo(() => {
    if (!data?.values) {
      return [];
    }

    const createdCards = [];

    data.values.forEach((item, itemIndex) => {
      if (item.showPhases) {
        const phaseConfigs = [
          {
            key: "phase1",
            subtitle: item.showSubtitle ? "Phase 1" : null,
            value: item.phase1,
          },
          {
            key: "phase2",
            subtitle: item.showSubtitle ? "Phase 2" : null,
            value: item.phase2,
          },
          {
            key: "funded",
            subtitle: item.showSubtitle ? "Funded" : null,
            value: item.funded,
          },
        ];

        phaseConfigs.forEach((config) => {
          if (config.value !== undefined && config.value !== null) {
            createdCards.push(
              <CardTable
                key={`${itemIndex}-${config.key}`}
                title={item.title}
                subtitle={config.subtitle}
                text={config.value}
                description={item.description}
                mainLang={language}
                hasAddon={item.hasAddon}
              />
            );
          }
        });
      } else {
        createdCards.push(
          <CardTable
            key={`${itemIndex}-single`}
            title={item.title}
            subtitle={null}
            text={item.value}
            description={item.description}
            mainLang={language}
            hasAddon={item.hasAddon}
          />
        );
      }
    });

    // Apply responsive row limiting logic
    if (showOnlyTwoRows) {
      if (isMobile) {
        return createdCards.slice(0, 2);
      } else {
        return createdCards.slice(0, 4);
      }
    }

    return createdCards;
  }, [data, language, accountAmount, showOnlyTwoRows, isMobile]);

  if (!data?.values) {
    return (
      <div className="text-textPrimary p-4 text-center">
        <p>
          No Pro challenge data available for {accountAmount} in {language}
        </p>
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <div className="text-textPrimary p-4 text-center">
        <p>No valid cards to display for Pro challenge</p>
      </div>
    );
  }

  return (
    <section
      className={`w-full ${MASTER_VISUAL_STYLES.padding}`}
      style={{
        border: MASTER_VISUAL_STYLES.border,
        borderRadius: MASTER_VISUAL_STYLES.borderRadius,
        background: MASTER_VISUAL_STYLES.background,
        width: "100%",
      }}
    >
      <div
        className={MASTER_VISUAL_STYLES.gridContainer}
        style={MASTER_VISUAL_STYLES.gridStyle}
      >
        {cards}
      </div>
    </section>
  );
};

export default ProTable;