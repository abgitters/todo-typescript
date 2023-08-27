import * as React from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

interface IStatusBoxProps {
  value: number;
  valueData: string;
}

const StatusBox: React.FunctionComponent<IStatusBoxProps> = ({
  value,
  valueData,
}) => {
  const DetailsTypo = styled(Typography)({
    fontSize: 32,
    fontWeight: 600,
    textAlign: "left",
    color: "#3f61a9",
    fontFamily: "inherit",
  });

  const TypoValue = styled(Typography)({
    marginTop: 0,
    marginBottom: 0,
    color: "#666",
    textAlign: "left",
    fontWeight: 700,
  });
  return (
    <Grid item xs={12} md={3}>
      <Paper
        sx={{
          p: 1,
          // backgroundColor: "#c4e7c0a8",
          backgroundImage:
            "linear-gradient(to bottom right, #e7e5a861, #78f41a7a)",
          borderRadius: 2,
          boxShadow: "0px 0px 3px 0px rgb(0 0 0 / 10%)",
          "&:hover": {
            boxShadow: "0px 25px 30px 0px rgb(0 0 0 / 5%)",
          },
        }}
      >
        <Grid container sx={{ p: 1 }}>
          <Grid item xs={12}>
            <Grid container flexDirection="column" alignItems="center">
              <DetailsTypo>{value}</DetailsTypo>
              <TypoValue>{valueData}</TypoValue>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default StatusBox;
