import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          MindWave
        </Typography>
        <Typography color={medium}>Technologies</Typography>
      </FlexBetween>
      <div style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}>
        <iframe
          width="100%"
          height="auto"
          src=""
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <FlexBetween>
        <Typography color={main}></Typography>
        <Typography color={medium}></Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        “Your mental health struggles do not define your future.”
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
