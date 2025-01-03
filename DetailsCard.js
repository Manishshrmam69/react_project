import React, { useMemo } from "react";
import "../css/DetailsCard.css";
import { useTranslation } from "react-i18next";
import convertToFahrenheit from "../helpers/convertToFahrenheit";
import CloudsCard from "./CloudsCard";
import MoreInfoCard from "./MoreInfoCard";

function DetailsCard({ weather_icon, data, isFahrenheitMode, degreeSymbol }) {
  const { clouds, main, weather } = data.list[0];
  const { t } = useTranslation();
  const formattedData = useMemo(() => {
    return {
      temp: Math.round(
        isFahrenheitMode ? convertToFahrenheit(main.temp) : main.temp
      ),
      feels_like: Math.round(
        isFahrenheitMode
          ? convertToFahrenheit(main.feels_like)
          : main.feels_like
      ),
      temp_min: Math.round(
        isFahrenheitMode ? convertToFahrenheit(main.temp_max) : main.temp_max
      ),
    };
  }, [
    isFahrenheitMode,
    main.feels_like,
    main.temp,
    main.temp_max,
    main.temp_min,
  ]);

  return (
    <>
    <p class="today">Today</p>
      <div className="details">
        <CloudsCard
          data={{ formattedData, degreeSymbol, weather, weather_icon }}
        />
        <MoreInfoCard data={{ formattedData, degreeSymbol, main, clouds, t }} />
      </div>
    </>
  );
}

export default DetailsCard;
