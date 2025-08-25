// Helper functions
const isIrrelevantValue = (value) => {
  if (!value) return true;
  const cleanValue = value.toString().toLowerCase().trim();
  return (
    cleanValue === "n/a" ||
    cleanValue === "none" ||
    cleanValue === "ninguna" ||
    cleanValue === "ninguno" ||
    cleanValue === "aucune" ||
    cleanValue === "aucun" ||
    cleanValue === "0%" ||
    cleanValue === "0 days" ||
    cleanValue === "0 días" ||
    cleanValue === "0 jours"
  );
};

function calculateBaseAmount(amount) {
  return parseFloat(amount.replace("K", "")) * 1000;
}

const hasAddonFeature = (title, challengeType) => {
  const normalizedTitle = title.toLowerCase();

  const addonFeatures = {
    onePhase: [
      "leverage",
      "apalancamiento",
      "levier",
      "effet de levier",
      "profit share",
      "participación en ganancias",
      "partage des profits",
      "news trading",
      "trading de noticias",
      "comerciar con noticias",
      "trading sur actualités",
      "trading sur news",
    ],
    flex: [
      "leverage",
      "apalancamiento",
      "levier",
      "effet de levier",
      "profit share",
      "participación en ganancias",
      "partage des profits",
      "news trading",
      "trading de noticias",
      "comerciar con noticias",
      "trading sur actualités",
      "trading sur news",
      "ea enabled",
      "ea habilitado",
      "ea activé",
      "eas allowed",
      "eas permitidos",
      "eas autorisés",
    ],
    pro: [
      "leverage",
      "apalancamiento",
      "levier",
      "effet de levier",
      "profit share",
      "participación en ganancias",
      "partage des profits",
      "news trading",
      "trading de noticias",
      "comerciar con noticias",
      "trading sur actualités",
      "trading sur news",
      "minimum trading days",
      "días mínimos de trading",
      "jours de trading minimum",
      "jours minimum de trading",
      "profit target",
      "objetivo de ganancia",
      "objectif de profit",
      "max loss",
      "pérdida máxima",
      "perte maximale",
      "weekend trading",
      "trading de fin de semana",
      "trading de weekend",
      "ea enabled",
      "ea habilitado",
      "ea activé",
      "eas allowed",
      "eas permitidos",
      "eas autorisés",
    ],
  };

  const features = addonFeatures[challengeType] || [];
  return features.some((feature) => normalizedTitle.includes(feature));
};

const processValues = (
  valueOne,
  valueTwo,
  valueThree,
  challengeType,
  title
) => {
  const values = [valueOne, valueTwo, valueThree].filter(
    (v) => v !== undefined
  );
  const relevantValues = values.filter((v) => !isIrrelevantValue(v));

  const hasAddon = hasAddonFeature(title, challengeType);

  if (values.length > 1 && values.every((v) => v === values[0])) {
    return {
      value: values[0],
      showPhases: false,
      showSubtitle: false,
      hasAddon,
    };
  }

  if (relevantValues.length === 1) {
    return {
      value: relevantValues[0],
      showPhases: false,
      showSubtitle: false,
      hasAddon,
    };
  }

  if (relevantValues.length === 2 && relevantValues[0] === relevantValues[1]) {
    return {
      value: relevantValues[0],
      showPhases: false,
      showSubtitle: false,
      hasAddon,
    };
  }

  if (
    relevantValues.length > 1 &&
    !relevantValues.every((v) => v === relevantValues[0])
  ) {
    const result = {
      showPhases: true,
      showSubtitle: true,
      hasAddon,
    };
    if (values.length === 3) {
      result.phase1 = valueOne;
      result.phase2 = valueTwo;
      result.funded = valueThree;
    } else if (values.length === 2) {
      result.phase1 = valueOne;
      result.funded = valueTwo;
    }
    return result;
  }

  return {
    value: values[0] || "N/A",
    showPhases: false,
    showSubtitle: false,
    hasAddon,
  };
};

// Fixed data functions
const getFlexData = (language, amount = null, addOns = {}) => {
  // Calculate dollar amounts if amount is provided
  const baseAmount = calculateBaseAmount(amount);
  const profitTarget10 = baseAmount ? baseAmount * 0.1 : null;
  const profitTarget5 = baseAmount ? baseAmount * 0.05 : null;
  const maxLoss = baseAmount ? baseAmount * 0.1 : null;
  const dailyLoss = baseAmount ? baseAmount * 0.05 : null;
  const dailyProfitCap = baseAmount ? baseAmount * 0.02 : null;
  const minPayout = baseAmount ? baseAmount * 0.02 : null;

  const flexData = {
    en: {
      values: [
        {
          title: "Profit Target",
          valueOne: baseAmount
            ? `$${profitTarget10.toLocaleString()} (10%)`
            : "10%",
          valueTwo: baseAmount
            ? `$${profitTarget5.toLocaleString()} (5%)`
            : "5%",
          valueThree: null,
          description:
            "The profit target is defined as achieving a 10% gain from the initial balance during the Challenge phase, and a 5% gain during the Verification phase.",
        },
        {
          title: "Duration",
          valueOne: "Unlimited",
          valueTwo: "Unlimited",
          valueThree: "Unlimited",
          description:
            "There is no time limit to complete the challenge phases.",
        },
        {
          title: "Leverage",
          valueOne: addOns.doubleLeverage ? "1:100*" : "1:50",
          valueTwo: addOns.doubleLeverage ? "1:100*" : "1:50",
          valueThree: addOns.doubleLeverage ? "1:100*" : "1:50",
          description: addOns.doubleLeverage
            ? "Standard leverage is 1:50. With add-on, leverage increases to 1:100 Forex, 1:40 Gold & Commodities, 1:30 Indices, 1:20 Crypto."
            : "Standard leverage available for trading.",
        },
        {
          title: "Min. Trading Days",
          valueOne: "3 days",
          valueTwo: "3 days",
          valueThree: "0 days",
          description: "There is no minimum trading day requirement.",
        },
        {
          title: "Max Overall Loss",
          valueOne: baseAmount ? `$${maxLoss.toLocaleString()} (10%)` : "10%",
          valueTwo: baseAmount ? `$${maxLoss.toLocaleString()} (10%)` : "10%",
          valueThree: baseAmount ? `$${maxLoss.toLocaleString()} (10%)` : "10%",
          description:
            "A trader's equity must not drop more than 10% from the initial account balance.",
        },
        {
          title: "Daily Drawdown",
          valueOne: baseAmount ? `$${dailyLoss.toLocaleString()} (5%)` : "5%",
          valueTwo: baseAmount ? `$${dailyLoss.toLocaleString()} (5%)` : "5%",
          valueThree: baseAmount ? `$${dailyLoss.toLocaleString()} (5%)` : "5%",
          description:
            "A trader's equity must not drop more than 5% from the day's starting balance.",
        },
        {
          title: "Weekend Holding/Trading",
          valueOne: "Enabled",
          valueTwo: "Enabled",
          valueThree: "Enabled",
          description:
            "Positions can be held over weekends and trading is allowed during weekend hours.",
        },
        {
          title: "Profit Share",
          valueOne: "0%",
          valueTwo: "0%",
          valueThree: addOns.higherProfitShare ? "90/10*" : "80/20",
          description: addOns.higherProfitShare
            ? "Profit split during evaluation phases is 0%. With add-on, funded accounts get 90/10 profit share."
            : "Profit split during evaluation phases is 0%. Funded accounts get 80/20 profit share.",
        },
        {
          title: "Consistency Rule",
          valueOne: "None",
          valueTwo: "None",
          valueThree: "None",
          description: "There is no consistency rule requirement.",
        },
        {
          title: "News Trading",
          valueOne: addOns.newsTrading ? "Allowed*" : "Allowed",
          valueTwo: addOns.newsTrading ? "Allowed*" : "Allowed",
          valueThree: addOns.newsTrading ? "Allowed*" : "Allowed",
          description: addOns.newsTrading
            ? "Trading during news events is permitted. Add-on provides enhanced news trading features."
            : "Trading during news events is permitted.",
        },
        {
          title: "Daily Profit Cap",
          valueOne: baseAmount
            ? `$${dailyProfitCap.toLocaleString()} (2%)`
            : "2%",
          valueTwo: baseAmount
            ? `$${dailyProfitCap.toLocaleString()} (2%)`
            : "2%",
          valueThree: baseAmount
            ? `$${dailyProfitCap.toLocaleString()} (2%)`
            : "2%",
          description: "Daily profit is capped at 2% of the account balance.",
        },
        {
          title: "Minimum Payout",
          valueOne: "N/A",
          valueTwo: "N/A",
          valueThree: baseAmount ? `$${minPayout.toLocaleString()} (2%)` : "2%",
          description: "Minimum payout amounts apply to the funded account.",
        },
        {
          title: "First Payout",
          valueOne: "N/A",
          valueTwo: "N/A",
          valueThree: "10 Days",
          description:
            "Information about first payout timeframe for funded accounts.",
        },
        {
          title: "Second Payout",
          valueOne: "N/A",
          valueTwo: "N/A",
          valueThree: "5 Days",
          description:
            "Information about subsequent payout timeframes for funded accounts.",
        },
      ],
    },
    es: {
      values: [
        {
          title: "Objetivo de Ganancia",
          valueOne: baseAmount
            ? `$${profitTarget10.toLocaleString()} (10%)`
            : "10%",
          valueTwo: baseAmount
            ? `$${profitTarget5.toLocaleString()} (5%)`
            : "5%",
          valueThree: null,
          description:
            "El objetivo de ganancia se define como alcanzar un aumento del 10% del saldo inicial durante la fase de Desafío, y un aumento del 5% durante la fase de Verificación.",
        },
        {
          title: "Duración",
          valueOne: "Ilimitada",
          valueTwo: "Ilimitada",
          valueThree: "Ilimitada",
          description:
            "No hay límite de tiempo para completar las fases del desafío.",
        },
        {
          title: "Apalancamiento",
          valueOne: addOns.doubleLeverage ? "Hasta 1:100*" : "Hasta 1:50",
          valueTwo: addOns.doubleLeverage ? "Hasta 1:100*" : "Hasta 1:50",
          valueThree: addOns.doubleLeverage ? "Hasta 1:100*" : "Hasta 1:50",
          description: addOns.doubleLeverage
            ? "El apalancamiento estándar es 1:50. Con el add-on, el apalancamiento aumenta a 1:100 Forex, 1:40 Oro y Materias Primas, 1:30 Índices, 1:20 Cripto."
            : "Apalancamiento estándar disponible para trading.",
        },
        {
          title: "Días Mínimos de Trading",
          valueOne: "3 días",
          valueTwo: "3 días",
          valueThree: "0 días",
          description: "No hay requisito de días mínimos de trading.",
        },
        {
          title: "Pérdida Máxima",
          valueOne: baseAmount ? `$${maxLoss.toLocaleString()} (10%)` : "10%",
          valueTwo: baseAmount ? `$${maxLoss.toLocaleString()} (10%)` : "10%",
          valueThree: baseAmount ? `$${maxLoss.toLocaleString()} (10%)` : "10%",
          description:
            "El capital del trader no debe caer más del 10% del saldo inicial de la cuenta.",
        },
        {
          title: "Pérdida Máxima Diaria",
          valueOne: baseAmount ? `$${dailyLoss.toLocaleString()} (5%)` : "5%",
          valueTwo: baseAmount ? `$${dailyLoss.toLocaleString()} (5%)` : "5%",
          valueThree: baseAmount ? `$${dailyLoss.toLocaleString()} (5%)` : "5%",
          description:
            "El capital del trader no debe caer más del 5% del saldo inicial del día.",
        },
        {
          title: "Trading de Fin de Semana",
          valueOne: "Habilitado",
          valueTwo: "Habilitado",
          valueThree: "Habilitado",
          description:
            "Se permite mantener posiciones durante el fin de semana y el trading está permitido durante las horas del fin de semana.",
        },
        {
          title: "Participación en Ganancias",
          valueOne: "0%",
          valueTwo: "0%",
          valueThree: addOns.higherProfitShare ? "90/10*" : "80/20",
          description: addOns.higherProfitShare
            ? "La división de ganancias durante las fases de evaluación es del 0%. Con el add-on, las cuentas financiadas obtienen participación 90/10."
            : "La división de ganancias durante las fases de evaluación es del 0%. Las cuentas financiadas obtienen participación 80/20.",
        },
        {
          title: "Regla de Consistencia",
          valueOne: "Ninguna",
          valueTwo: "Ninguna",
          valueThree: "Ninguna",
          description: "No hay requisito de regla de consistencia.",
        },
        {
          title: "Comerciar con Noticias",
          valueOne: addOns.newsTrading ? "Permitido*" : "Permitido",
          valueTwo: addOns.newsTrading ? "Permitido*" : "Permitido",
          valueThree: addOns.newsTrading ? "Permitido*" : "Permitido",
          description: addOns.newsTrading
            ? "Se permite operar durante eventos de noticias. El add-on proporciona características mejoradas para trading de noticias."
            : "Se permite operar durante eventos de noticias.",
        },
        {
          title: "Límite de Ganancia Diaria",
          valueOne: baseAmount
            ? `$${dailyProfitCap.toLocaleString()} (2%)`
            : "2%",
          valueTwo: baseAmount
            ? `$${dailyProfitCap.toLocaleString()} (2%)`
            : "2%",
          valueThree: baseAmount
            ? `$${dailyProfitCap.toLocaleString()} (2%)`
            : "2%",
          description:
            "La ganancia diaria está limitada al 2% del saldo de la cuenta.",
        },
        {
          title: "Pago Mínimo",
          valueOne: "N/A",
          valueTwo: "N/A",
          valueThree: baseAmount ? `$${minPayout.toLocaleString()} (2%)` : "2%",
          description:
            "Se aplican montos mínimos de pago a la cuenta financiada.",
        },
        {
          title: "Primer Pago",
          valueOne: "N/A",
          valueTwo: "N/A",
          valueThree: "10 Días",
          description:
            "Información sobre el plazo del primer pago para cuentas financiadas.",
        },
        {
          title: "Segundo Pago",
          valueOne: "N/A",
          valueTwo: "N/A",
          valueThree: "5 Días",
          description:
            "Información sobre plazos de pagos subsiguientes para cuentas financiadas.",
        },
      ],
    },
    fr: {
      values: [
        {
          title: "Objectif de Profit",
          valueOne: baseAmount
            ? `$${profitTarget10.toLocaleString()} (10%)`
            : "10%",
          valueTwo: baseAmount
            ? `$${profitTarget5.toLocaleString()} (5%)`
            : "5%",
          valueThree: null,
          description:
            "L'objectif de profit est défini comme l'atteinte d'un gain de 10% sur le solde initial pendant la phase Challenge, et un gain de 5% pendant la phase de Vérification.",
        },
        {
          title: "Durée",
          valueOne: "Illimitée",
          valueTwo: "Illimitée",
          valueThree: "Illimitée",
          description:
            "Il n'y a pas de limite de temps pour compléter les phases du challenge.",
        },
        {
          title: "Levier",
          valueOne: addOns.doubleLeverage ? "Jusqu'à 1:100*" : "Jusqu'à 1:50",
          valueTwo: addOns.doubleLeverage ? "Jusqu'à 1:100*" : "Jusqu'à 1:50",
          valueThree: addOns.doubleLeverage ? "Jusqu'à 1:100*" : "Jusqu'à 1:50",
          description: addOns.doubleLeverage
            ? "Le levier standard est de 1:50. Avec le complément, le levier augmente à 1:100 Forex, 1:40 Or et Matières Premières, 1:30 Indices, 1:20 Crypto."
            : "Levier standard disponible pour le trading.",
        },
        {
          title: "Jours de Trading Minimum",
          valueOne: "3 jours",
          valueTwo: "3 jours",
          valueThree: "0 jours",
          description: "Il n'y a pas d'exigence de jours minimum de trading.",
        },
        {
          title: "Perte Maximale",
          valueOne: baseAmount ? `$${maxLoss.toLocaleString()} (10%)` : "10%",
          valueTwo: baseAmount ? `$${maxLoss.toLocaleString()} (10%)` : "10%",
          valueThree: baseAmount ? `$${maxLoss.toLocaleString()} (10%)` : "10%",
          description:
            "L'équité du trader ne doit pas baisser de plus de 10% par rapport au solde initial du compte.",
        },
        {
          title: "Perte Quotidienne",
          valueOne: baseAmount ? `$${dailyLoss.toLocaleString()} (5%)` : "5%",
          valueTwo: baseAmount ? `$${dailyLoss.toLocaleString()} (5%)` : "5%",
          valueThree: baseAmount ? `$${dailyLoss.toLocaleString()} (5%)` : "5%",
          description:
            "L'équité du trader ne doit pas baisser de plus de 5% par rapport au solde de départ de la journée.",
        },
        {
          title: "Trading de Weekend",
          valueOne: "Activé",
          valueTwo: "Activé",
          valueThree: "Activé",
          description:
            "Les positions peuvent être maintenues pendant le weekend et le trading est autorisé pendant les heures du weekend.",
        },
        {
          title: "Partage des Profits",
          valueOne: "0%",
          valueTwo: "0%",
          valueThree: addOns.higherProfitShare ? "90/10*" : "80/20",
          description: addOns.higherProfitShare
            ? "Le partage des profits pendant les phases d'évaluation est de 0%. Avec le complément, les comptes financés obtiennent un partage 90/10."
            : "Le partage des profits pendant les phases d'évaluation est de 0%. Les comptes financés obtiennent un partage 80/20.",
        },
        {
          title: "Règle de Cohérence",
          valueOne: "Aucune",
          valueTwo: "Aucune",
          valueThree: "Aucune",
          description: "Il n'y a pas d'exigence de règle de cohérence.",
        },
        {
          title: "Trading sur Actualités",
          valueOne: addOns.newsTrading ? "Autorisé*" : "Autorisé",
          valueTwo: addOns.newsTrading ? "Autorisé*" : "Autorisé",
          valueThree: addOns.newsTrading ? "Autorisé*" : "Autorisé",
          description: addOns.newsTrading
            ? "Le trading pendant les événements d'actualité est autorisé. Le complément fournit des fonctionnalités améliorées pour le trading sur actualités."
            : "Le trading pendant les événements d'actualité est autorisé.",
        },
        {
          title: "Plafond de Profit Quotidien",
          valueOne: baseAmount
            ? `$${dailyProfitCap.toLocaleString()} (2%)`
            : "2%",
          valueTwo: baseAmount
            ? `$${dailyProfitCap.toLocaleString()} (2%)`
            : "2%",
          valueThree: baseAmount
            ? `$${dailyProfitCap.toLocaleString()} (2%)`
            : "2%",
          description:
            "Le profit quotidien est plafonné à 2% du solde du compte.",
        },
        {
          title: "Paiement Minimum",
          valueOne: "N/A",
          valueTwo: "N/A",
          valueThree: baseAmount ? `$${minPayout.toLocaleString()} (2%)` : "2%",
          description:
            "Des montants minimums de paiement s'appliquent au compte financé.",
        },
        {
          title: "Premier Paiement",
          valueOne: "N/A",
          valueTwo: "N/A",
          valueThree: "10 Jours",
          description:
            "Informations sur le délai du premier paiement pour les comptes financés.",
        },
        {
          title: "Second Paiement",
          valueOne: "N/A",
          valueTwo: "N/A",
          valueThree: "5 Jours",
          description:
            "Informations sur les délais des paiements ultérieurs pour les comptes financés.",
        },
      ],
    },
  };
  return flexData[language] || flexData.en;
};

const getOnePhaseData = (amount, language, addOns = {}) => {
  const baseAmount = calculateBaseAmount(amount);

  // Calculate values
  const profitTarget = baseAmount * 0.1;
  const maxLoss = baseAmount * 0.1;
  const dailyLoss = baseAmount * 0.03;

  const translations = {
    en: {
      minTradingDays: "Minimum Trading Days",
      leverage: "Leverage",
      profitTarget: "Profit Target",
      maxLoss: "Max Loss",
      maxDailyLoss: "Max Daily Loss",
      weekendTrading: "Weekend Trading",
      newsTrading: "News Trading",
      profitShare: "Profit Share",
      consistency: "Consistency",
      none: "None",
      allowed: "Allowed",
      na: "N/A",
      descriptions: {
        minTradingDays:
          "Minimum of 3 trading days required in the challenge phase.",
        leverage:
          "Regular leverage is 1:30, but with add-on feature you can increase leverage to 1:60.",
        profitTarget:
          "The profit target is defined as achieving a 10% gain from the initial balance during the Challenge phase. A profit target is achieved when the cumulative profits from all closed positions reach the specified percentage at any point during the Trading Period.",
        maxLoss:
          "A trader's equity must not drop more than 10% from the initial account balance, with the trailing drawdown locking at the starting balance once the account is up 10%.",
        maxDailyLoss:
          "A trader's equity must not drop more than 3% from the day's starting balance and or equity whichever is higher.",
        weekendTrading: "Trading is allowed during weekends.",
        newsTrading: "Trading during news events is permitted.",
        profitShare:
          "Regular profit share is 80/20, but with add-on you can reach 90/10 profit share.",
        consistency: "Consistency rules for different phases of trading.",
      },
    },
    es: {
      minTradingDays: "Días Mínimos de Trading",
      leverage: "Apalancamiento",
      profitTarget: "Objetivo de Ganancia",
      maxLoss: "Pérdida Máxima",
      maxDailyLoss: "Pérdida Diaria Máxima",
      weekendTrading: "Trading en Fin de Semana",
      newsTrading: "Trading de Noticias",
      profitShare: "Participación en Ganancias",
      consistency: "Consistencia",
      none: "Ninguna",
      allowed: "Permitido",
      na: "N/A",
      descriptions: {
        minTradingDays:
          "Mínimo de 3 días de trading requeridos en la fase de challenge.",
        leverage:
          "El apalancamiento regular es 1:30, pero con el add-on puedes aumentar el apalancamiento a 1:60.",
        profitTarget:
          "El objetivo de Ganancia se define como lograr una ganancia del 10% del balance inicial durante la fase de Challenge. El objetivo se alcanza cuando las ganancias acumuladas de todas las posiciones cerradas alcanzan el porcentaje especificado en cualquier momento durante el Período de Trading.",
        maxLoss:
          "El capital del trader no debe caer más del 10% del balance inicial de la cuenta, con el trailing drawdown bloqueandose al balance inicial una vez que la cuenta alcanza el 10%.",
        maxDailyLoss:
          "El capital del trader no debe caer más del 3% del balance inicial del día o del capital, el que sea mayor.",
        weekendTrading:
          "El trading está permitido durante los fines de semana.",
        newsTrading: "Se permite operar durante eventos de noticias.",
        profitShare:
          "La participación en ganancias regular es 80/20, pero con el add-on puedes alcanzar 90/10 en la participación en ganancias.",
        consistency: "Reglas de consistencia para diferentes fases de trading.",
      },
    },
    fr: {
      minTradingDays: "Jours Minimum de Trading",
      leverage: "Effet de Levier",
      profitTarget: "Objectif de Profit",
      maxLoss: "Perte Maximale",
      maxDailyLoss: "Perte Journalière Maximale",
      weekendTrading: "Trading le Weekend",
      newsTrading: "Trading sur News",
      profitShare: "Partage des Profits",
      consistency: "Consistance",
      none: "Aucune",
      allowed: "Autorisé",
      na: "N/A",
      descriptions: {
        minTradingDays:
          "Minimum de 3 jours de trading requis dans la phase challenge.",
        leverage:
          "L'effet de levier standard est de 1:30, mais avec le complément vous pouvez augmenter l'effet de levier à 1:60.",
        profitTarget:
          "L'objectif de profit est défini comme l'obtention d'un gain de 10% sur le solde initial pendant la phase Challenge. L'objectif est atteint lorsque les profits cumulés de toutes les positions fermées atteignent le pourcentage spécifié à tout moment pendant la période de trading.",
        maxLoss:
          "Les fonds propres du trader ne doivent pas baisser de plus de 10% par rapport au solde initial du compte, le drawdown de suivi étant bloqué au niveau du solde initial une fois que le compte a augmenté de 10%.",
        maxDailyLoss:
          "Le capital du trader ne doit pas chuter de plus de 3% du solde initial de la journée ou du capital, selon le plus élevé des deux.",
        weekendTrading: "Le trading est autorisé pendant les weekends.",
        newsTrading:
          "Le trading pendant les événements d'actualité est autorisé.",
        profitShare:
          "Le partage standard est de 80/20, mais avec le complément vous pouvez atteindre 90/10 de partage des profits.",
        consistency:
          "Règles de consistance pour les différentes phases de trading.",
      },
    },
  };

  const t = translations[language] || translations.en;

  return {
    values: [
      {
        title: t.minTradingDays,
        valueTwo: "3 days",
        valueThree: t.none,
        description: t.descriptions.minTradingDays,
      },
      {
        title: t.leverage,
        valueTwo: addOns.doubleLeverage ? "1:60*" : "1:30",
        valueThree: addOns.doubleLeverage ? "1:60*" : "1:30",
        description: t.descriptions.leverage,
      },
      {
        title: t.profitTarget,
        valueTwo: `$${profitTarget.toLocaleString()} (10%)`,
        valueThree: t.none,
        description: t.descriptions.profitTarget,
      },
      {
        title: t.maxLoss,
        valueTwo: `$${maxLoss.toLocaleString()} (10%)`,
        valueThree: `$${maxLoss.toLocaleString()} (10%)`,
        description: t.descriptions.maxLoss,
      },
      {
        title: t.maxDailyLoss,
        valueTwo: `$${dailyLoss.toLocaleString()} (3%)`,
        valueThree: `$${dailyLoss.toLocaleString()} (3%)`,
        description: t.descriptions.maxDailyLoss,
      },
      {
        title: t.weekendTrading,
        valueTwo: t.allowed,
        valueThree: t.allowed,
        description: t.descriptions.weekendTrading,
      },
      {
        title: t.newsTrading,
        valueTwo: t.allowed,
        valueThree: t.allowed,
        description: t.descriptions.newsTrading,
      },
      {
        title: t.profitShare,
        valueTwo:
          amount === "25K" ||
          amount === "50K" ||
          amount === "100K" ||
          amount === "200K" ||
          amount === "300K"
            ? t.na
            : addOns.higherProfitShare
            ? "90/10*"
            : "80/20",
        valueThree: addOns.higherProfitShare ? "90/10*" : "80/20",
        description: t.descriptions.profitShare,
      },
      {
        title: t.consistency,
        valueTwo: t.none,
        valueThree: "50%",
        description: t.descriptions.consistency,
      },
    ],
  };
};

const getProData = (amount, language, addOns = {}) => {
  const baseAmount = calculateBaseAmount(amount);

  // Calculate profit targets and losses based on add-ons
  const isMaxLossAddonEnabled = addOns.maxLoss || false;
  const profitTarget8 = baseAmount * (isMaxLossAddonEnabled ? 0.08 : 0.1);
  const profitTarget5 = baseAmount * 0.05;
  const maxLoss = baseAmount * (isMaxLossAddonEnabled ? 0.08 : 0.1);
  const dailyLoss = baseAmount * 0.05;

  // Determine leverage based on add-ons
  const leverage = addOns.doubleLeverage ? "1:100*" : "1:50*";

  const translations = {
    en: {
      minTradingDays: "Minimum Trading Days",
      leverage: "Leverage",
      profitTarget: "Profit Target",
      maxLoss: "Max Loss",
      maxDailyLoss: "Max Daily Loss",
      profitShare: "Profit Share",
      newsTrading: "News Trading",
      weekendTrading: "Weekend Trading",
      eaEnabled: "EA Enabled",
      refundableRates: "Refundable Rates",
      none: "None",
      available: "Available",
      enabled: "Enabled",
      varies: "Varies",
      free: "Free",
      refund: "Refund",
      descriptions: {
        minTradingDays:
          "With our Add-on 'No Minimum Trading Days' you can trade as much or as little as you want.",
        leverage:
          "This is the trader's available leverage for both evaluation and live phases. Add-on feature will increase the leverage amounts to 1:100 Forex, 1:40 Gold & Commodities, 1:30 Indices, 1:20 Crypto.",
        profitTarget:
          "With our '8% Hybrid Max Loss / Profit Target' Add-on. The profit target is defined as achieving a 8% gain from the initial balance during the Challenge phase, and a 5% gain during the Verification phase. A profit target is achieved when the cumulative profits from all closed positions on the designated trading account reach the specified percentage at any point during the open-ended Trading Period. This 8% reduction will also apply to you max overall drawdown.",
        maxLoss:
          "A trader's equity must not drop more than 10% from the initial account balance.",
        maxDailyLoss:
          "A trader's equity must not drop more than 5% from the day's starting balance and or equity whichever is higher.",
        profitShare:
          "This add-on allows for higher profit share, 90/10 on funded accounts.",
      },
    },
    es: {
      minTradingDays: "Días Mínimos de Trading",
      leverage: "Apalancamiento",
      profitTarget: "Objetivo de Ganancia",
      maxLoss: "Pérdida Máxima",
      maxDailyLoss: "Pérdida Máxima Diaria",
      profitShare: "Participación en Ganancias",
      newsTrading: "Comerciar con Noticias",
      weekendTrading: "Trading de Fin de Semana",
      eaEnabled: "EA Habilitado",
      refundableRates: "Tasas Reembolsables",
      none: "Ninguno",
      available: "Disponible",
      enabled: "Habilitado",
      varies: "Varía",
      free: "Gratis",
      refund: "Reembolso",
      descriptions: {
        minTradingDays:
          "Con nuestro Add-on 'No Minimum Trading Days' puedes operar tanto o tan poco como desees.",
        leverage:
          "Este es el apalancamiento disponible para el trader tanto en las fases de evaluación como en las fases en vivo. El Add-on aumentará los montos de apalancamiento a 1:100 Forex, 1:40 Oro & Materias Primas, 1:30 Índices, 1:20 Cripto.",
        profitTarget:
          "Con nuestro Add-on de '8% Pérdida Máxima Híbrida / Objetivo de Ganancia'. El objetivo de ganancia se define como alcanzar un aumento del 8% del saldo inicial durante la fase de Desafío, y un aumento del 5% durante la fase de Verificación. Se alcanza el objetivo de ganancia cuando las ganancias acumuladas de todas las posiciones cerradas en la cuenta de trading designada alcanzan el porcentaje especificado en cualquier momento durante el Periodo de Trading abierto. Esta reducción del 8% también se aplicará a tu drawdown máximo general.",
        maxLoss:
          "El capital del trader no debe caer más del 10% del saldo inicial de la cuenta.",
        maxDailyLoss:
          "El capital del trader no debe caer más del 5% del saldo inicial del día o el capital, lo que sea mayor.",
        profitShare:
          "Este adicional permite mayor participación en ganancias, 90/10 en cuentas financiadas.",
      },
    },
    fr: {
      minTradingDays: "Jours de Trading Minimum",
      leverage: "Levier",
      profitTarget: "Objectif de Profit",
      maxLoss: "Perte Maximale",
      maxDailyLoss: "Perte Maximale Quotidienne",
      profitShare: "Partage des Profits",
      newsTrading: "Trading sur Actualités",
      weekendTrading: "Trading de Weekend",
      eaEnabled: "EA Activé",
      refundableRates: "Taux Remboursables",
      none: "Aucun",
      available: "Disponible",
      enabled: "Activé",
      varies: "Varie",
      free: "Gratuit",
      refund: "Remboursement",
      descriptions: {
        minTradingDays:
          "Avec notre Add-on 'Pas de Jours Minimum de Trading', vous pouvez trader autant ou aussi peu que vous le souhaitez.",
        leverage:
          "C'est le levier disponible pour le trader pour les phases d'évaluation et en direct. L'option supplémentaire augmentera les montants de levier à 1:100 Forex, 1:40 Or & Commodités, 1:30 Indices, 1:20 Crypto.",
        profitTarget:
          "Avec notre Add-on '8% Perte Maximale Hybride / Objectif de Profit'. L'objectif de profit est défini comme l'atteinte d'un gain de 8% sur le solde initial pendant la phase Challenge, et un gain de 5% pendant la phase de Vérification. Un objectif de profit est atteint lorsque les profits cumulés de toutes les positions fermées sur le compte de trading désigné atteignent le pourcentage spécifié à tout moment pendant la Période de Trading ouverte. Cette réduction de 8% s'appliquera également à votre drawdown maximal global.",
        maxLoss:
          "L'équité du trader ne doit pas baisser de plus de 10% par rapport au solde initial du compte.",
        maxDailyLoss:
          "L'équité du trader ne doit pas baisser de plus de 5% par rapport au solde de départ de la journée et/ou à l'équité, selon lequel est le plus élevé.",
        profitShare:
          "Cette option supplémentaire permet un meilleur partage des profits, 90/10 sur les comptes financés.",
      },
    },
  };

  const t = translations[language] || translations.en;

  const result = {
    values: [
      {
        title: t.minTradingDays,
        valueOne: addOns.noMinDays ? t.none : `${t.none}*`,
        valueTwo: addOns.noMinDays ? t.none : `${t.none}*`,
        valueThree: t.none,
        description: t.descriptions.minTradingDays,
      },
      {
        title: t.leverage,
        valueOne: leverage,
        valueTwo: leverage,
        valueThree: leverage,
        description: t.descriptions.leverage,
      },
      {
        title: t.profitTarget,
        valueOne: isMaxLossAddonEnabled
          ? `$${profitTarget8.toLocaleString()} (8%)*`
          : `$${(baseAmount * 0.1).toLocaleString()} (10%)*`,
        valueTwo: `$${profitTarget5.toLocaleString()} (5%)`,
        valueThree: t.none,
        description: t.descriptions.profitTarget,
      },
      {
        title: t.maxLoss,
        valueOne: `$${maxLoss.toLocaleString()} (${
          isMaxLossAddonEnabled ? "8" : "10"
        }%)`,
        valueTwo: `$${maxLoss.toLocaleString()} (${
          isMaxLossAddonEnabled ? "8" : "10"
        }%)`,
        valueThree: `$${maxLoss.toLocaleString()} (${
          isMaxLossAddonEnabled ? "8" : "10"
        }%)`,
        description: t.descriptions.maxLoss,
      },
      {
        title: t.maxDailyLoss,
        valueOne: `$${dailyLoss.toLocaleString()} (5%)`,
        valueTwo: `$${dailyLoss.toLocaleString()} (5%)`,
        valueThree: `$${dailyLoss.toLocaleString()} (5%)`,
        description: t.descriptions.maxDailyLoss,
      },
      {
        title: t.profitShare,
        valueOne: addOns.higherProfitShare ? "90/10*" : "80/20",
        valueTwo: addOns.higherProfitShare ? "90/10*" : "80/20",
        valueThree: addOns.higherProfitShare ? "90/10*" : "80/20",
        description: t.descriptions.profitShare,
      },
    ],
  };

  return result;
};

// Challenge type configuration
const CHALLENGE_CONFIGS = {
  flex: {
    getDataFn: (language, amount, addOns) =>
      getFlexData(language, amount, addOns),
    valueMapping: (item) => [item.valueOne, item.valueTwo, item.valueThree],
  },
  onePhase: {
    getDataFn: (language, amount, addOns) =>
      getOnePhaseData(amount, language, addOns),
    valueMapping: (item) => [item.valueTwo, item.valueThree, undefined],
  },
  pro: {
    getDataFn: (language, amount, addOns) =>
      getProData(amount, language, addOns),
    valueMapping: (item) => [item.valueOne, item.valueTwo, item.valueThree],
  },
};

export const getOptimizedChallengeData = (
  challengeType,
  language,
  amount = null,
  addOns = {}
) => {
  const config = CHALLENGE_CONFIGS[challengeType];

  if (!config) {
    throw new Error(
      `Unsupported challenge type: ${challengeType}. Supported types: ${Object.keys(
        CHALLENGE_CONFIGS
      ).join(", ")}`
    );
  }

  // Pass addOns to the data function
  const originalData = config.getDataFn(language, amount, addOns);

  return {
    values: originalData.values.map((item) => {
      const [valueOne, valueTwo, valueThree] = config.valueMapping(item);
      const processed = processValues(
        valueOne,
        valueTwo,
        valueThree,
        challengeType,
        item.title
      );

      return {
        title: item.title,
        ...processed,
        description: item.description,
      };
    }),
  };
};

// Individual challenge functions
export const getOptimizedFlexData = (amount, language, addOns = {}) =>
  getOptimizedChallengeData("flex", amount, language, addOns);

export const getOptimizedOnePhaseData = (amount, language, addOns = {}) =>
  getOptimizedChallengeData("onePhase", amount, language, addOns);

export const getOptimizedProData = (amount, language, addOns = {}) =>
  getOptimizedChallengeData("pro", amount, language, addOns);
