import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import StatusBox from "./StatusBox";

interface ValueArr {
  id: number;
  data: string;
  completed: boolean;
}

const Todo: React.FunctionComponent = () => {
  const [value, setValue] = React.useState<string>("");
  const [valArr, setValArr] = React.useState<ValueArr[]>([]);

  const Completed = valArr.filter((val) => val.completed == true).length;
  const InCompleted = valArr.filter((val) => val.completed == false).length;
  const TatalTasks = valArr.length;

  const handleToggle = (id: number) => {
    setValArr(
      valArr.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleSubmit = () => {
    const newVal: ValueArr = {
      id: Date.now(),
      data: value,
      completed: false,
    };
    setValue("");
    if (newVal.data) {
      setValArr([...valArr, newVal]);
    }
  };

  const handleDelete = (id: number) => {
    const newValueArr = valArr.filter((elem) => {
      return elem.id != id;
    });
    setValArr(newValueArr);
  };
  return (
    <Container sx={{ pt: 5 }}>
      {/*-----------------------------------------------------------------Input & Button */}
      <Paper
        elevation={3}
        // sx={{
        //   backgroundImage:
        //     "linear-gradient(to bottom right, #162e5238, #3e1c6a6e)",
        // }}
      >
        <h2 style={{ textAlign: "center" }}>Ordrio Technologies Task</h2>
        <Grid
          container
          flexDirection="column"
          alignItems="center"
          spacing={3}
          padding={1}
        >
          <Grid item xs={12} maxWidth={500}>
            <TextField
              label="Type to add"
              variant="outlined"
              fullWidth
              type="text"
              value={value}
              sx={{ backgroundColor: "#fff" }}
              onChange={(e) => setValue(e.currentTarget.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
        {/*--------------------------------------------------------------------Task Status */}
        <Grid
          container
          spacing={2}
          sx={{ py: 2, px: { xs: 3, xm: 1, md: 0 } }}
          justifyContent="space-around"
        >
          <StatusBox value={Completed} valueData="Completed" />
          <StatusBox value={InCompleted} valueData="InCompleted" />
          <StatusBox value={TatalTasks} valueData="Total" />
        </Grid>
      </Paper>

      {/*---------------------------------------------------------------------------List */}
      {valArr.length > 0 && (
        <Paper elevation={3} sx={{ mt: 3 }}>
          <Grid
            container
            flexDirection="row"
            alignItems="center"
            sx={{ p: { xs: 1, sm: 2, md: 3 } }}
          >
            {Array.isArray(valArr) &&
              valArr.map((item) => {
                return (
                  <Grid
                    item
                    key={item.id}
                    xs={12}
                    sm={6}
                    md={6}
                    textAlign="center"
                  >
                    <FormControlLabel
                      control={
                        <Checkbox onClick={() => handleToggle(item.id)} />
                      }
                      label={
                        <Typography
                          variant="h6"
                          style={{
                            textDecoration: item?.completed
                              ? "line-through"
                              : "none",
                            cursor: "pointer",
                          }}
                        >
                          {item.data}
                        </Typography>
                      }
                    />
                    <Tooltip title="Delete it!" placement="right" arrow>
                      <IconButton
                        onClick={() => handleDelete(item.id)}
                        sx={{ "&:hover": { color: "red" } }}
                      >
                        <DeleteForeverIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                );
              })}
          </Grid>
        </Paper>
      )}
    </Container>
  );
};

export default Todo;
