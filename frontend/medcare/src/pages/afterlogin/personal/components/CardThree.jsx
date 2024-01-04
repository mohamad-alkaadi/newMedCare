import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material"
import React from "react"

const CardThree = () => {
  return (
    <Grid container columns={8}>
      <Grid
        item
        xs={8}
        // justifyContent="space-between"
        sx={{
          pl: 4,
          pt: 3,
          pb: 2,
          // display: "flex",
          // justifyContent: "space-between",
          // alignItems: "center",
        }}
      >
        <Grid container columns={4}>
          <Grid item xs={2}>
            <Typography>Notes</Typography>
          </Grid>
          {/* <Grid item xs={2}>
            <Link sx={{ textDecoration: "none", backgroundColor: "red" }}>
              <Typography>Delete all</Typography>
            </Link>
          </Grid> */}
        </Grid>
      </Grid>
      <Grid item xs={8}>
        {" "}
        {/* some problem might be here becouse we are not setting how many columns we need */}
        <Grid container columns={3}>
          <Grid
            item
            xs={3}
            sx={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <form className="flex flex-col">
              <Box className="w-[535px] h-[200px] bg-[#f2f5f9] grid justify-center items-center">
                <textarea
                  placeholder="enter your first note"
                  className="focus:outline-0 bg-[#f2f5f9] w-[525px] h-[180px]"
                />
              </Box>
              <Box
                sx={{
                  backgroundColor: "#f2f5f9",
                  display: "flex",
                  justifyContent: "end",
                  pr: 1,
                }}
              >
                <Button variant="contained" sx={{ ml: 3, mb: 2 }}>
                  Save Notes
                </Button>
                {/* <Button variant="contained" sx={{ mr: 3, mb: 2 }}>
                  Delete Notes
                </Button> */}
              </Box>
            </form>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <Box sx={{ ml: 4, mr: 4, mt: 2 }}>
          <Grid container justifyContent="space-between">
            <Typography>Latest update</Typography>
            <Typography>2022 Nov</Typography>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default CardThree
{
  /* <input
                type="textarea"
                className="focus:outline-0 bg-[#f2f5f9] w-[535px] h-[200px]"
              /> */
}
