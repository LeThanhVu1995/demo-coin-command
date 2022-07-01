import { useEffect, useRef, useState } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";
import { areaData, histogramData } from "../const/data";

const ChartCrypto = () => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (chartRef.current.childNodes.length !== 0) return;

    const config = {
      width: 500,
      height: 250,
      layout: {
        backgroundColor: "#2f3d4a",
        textColor: "rgba(255, 255, 255, 0.9)",
      },
      priceScale: {
        scaleMargins: {
          top: 0.3,
          bottom: 0.25,
        },
        borderVisible: true,
        borderColor: "#485c7b",
      },
      grid: {
        vertLines: {
          color: "#334158",
        },
        horzLines: {
          color: "#334158",
        },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      timeScale: {
        borderColor: "#485c7b",
      },
    } as any;

    const chart = createChart(chartRef.current || "", config);

    const areaSeries = chart.addAreaSeries({
      topColor: "rgba(253, 209, 22, 0.56)",
      bottomColor: "rgba(253, 209, 22, 0.04)",
      lineColor: "rgba(253, 209, 22, 1)",
      lineWidth: 2,
    });

    const configvolmne: any = {
      color: "#26a69a",
      priceFormat: {
        type: "volume",
      },
      overlay: true,
      scaleMargins: {
        top: 0.8,
        bottom: 0,
      },
    };

    const volumeSeries = chart.addHistogramSeries(configvolmne);

    areaSeries.setData(areaData);
    volumeSeries.setData(histogramData);
  }, []);

  return <div ref={chartRef} />;
};

export default ChartCrypto;
