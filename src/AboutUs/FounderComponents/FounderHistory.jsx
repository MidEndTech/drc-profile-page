import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import resumeData from "./Resume.json";

const CustomTimelineDot = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid #BE894A",
  borderRadius: "50%",
  width: "20px",
  height: "20px",
  backgroundColor: "white",
  zIndex: 1,
  "&::before": {
    content: '""',
    display: "block",
    width: "10px",
    height: "10px",
    backgroundColor: "#BE894A",
    borderRadius: "50%",
  },
});

const CustomTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
  backgroundColor: "#2C4D51",
}));

const ItemsAlignedToRight = styled(Timeline)({
  paddingRight: 0,
  "& .MuiTimelineItem-root": {
    "&::before": {
      flex: 0,
      padding: 0,
    },
  },
});

function FounderHistory() {
  const { historyItems } = resumeData;
  return (
    <ItemsAlignedToRight position="right">
      {historyItems.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <CustomTimelineDot />
            {index < historyItems.length - 1 && <CustomTimelineConnector />}
          </TimelineSeparator>
          <TimelineContent sx={{ py: "30px", px: 4, mt: "-30px" }}>
            <Box sx={{ textAlign: "right" }}>
              <Typography variant="body2" color="text.secondary" sx={{}}>
                {item.date}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: "10px" }}>
                {item.content}
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </ItemsAlignedToRight>
  );
}

export default FounderHistory;
