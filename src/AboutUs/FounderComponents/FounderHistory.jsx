import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

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

function FounderHistory() {
  const historyItems = [
    {
      date: "عام 1965م/1385هـ",
      content:
        "حصل على البكالوريوس الهندسة المعمارية من جامعة عين شمس بجمهورية مصر العربية",
    },
    {
      date: "عام 1971م/1390هـ",
      content:
        "حصل على ماجستير تخطيط المدن من جامعة جنوب كاليفورنيا لوس أنجلوس أمريكا",
    },
    {
      date: "عام 1980م/1400هـ",
      content: "أسس مكتب التخطيط المعماري والهندسي",
    },
    {
      date: "عام 1985م/1405هـ",
      content: "عمل كمستشار في مشاريع التنمية الحضرية في المنطقة",
    },
    // Add more items as needed
  ];

  return (
    <Timeline position="right">
      {historyItems.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            style={{ flex: 0.2, paddingLeft: 16 }}
            align="left"
            variant="body2"
            color="text.secondary"
          >
            {item.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <CustomTimelineDot />   
            {index < historyItems.length - 1 && <CustomTimelineConnector />}
          </TimelineSeparator>
          <TimelineContent style={{ paddingRight: 16 }}>
            <Typography variant="body1">{item.content}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
export default FounderHistory;