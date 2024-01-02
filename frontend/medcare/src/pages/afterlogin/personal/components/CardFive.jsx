import { Button, Grid, List, ListItem, Typography } from "@mui/material"
import React from "react"
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined"
const CardFive = () => {
  return (
    <Grid container columns={8}>
      <Grid
        item
        xs={8}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pl: 4,
          pr: 4,
          pt: 3,
        }}
      >
        <Typography>Files/Documents</Typography>
        <Button
          size="small"
          sx={{ textTransform: "none" }}
          startIcon={<NoteAddOutlinedIcon />}
        >
          Add Files
        </Button>
      </Grid>
      <Grid item={8}>
        <List>
          <ListItem></ListItem>
        </List>
      </Grid>
    </Grid>
  )
}

export default CardFive

// when you put a file gra the name of the file and incerss the proress bar every 1 secound
// https://mui.com/material-ui/react-progress/
