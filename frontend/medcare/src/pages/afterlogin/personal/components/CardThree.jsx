import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material"
import React from "react"

const CardThree = () => {
  return (
    <Grid columns={8}>
      <Grid item xs={12} sx={{ pl: 4, pt: 3, pb: 2 }}>
        Notes
      </Grid>
      <Grid item>
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
              <textarea className="focus:outline-0 bg-[#f2f5f9] w-[535px] h-[190px]" />
              <Box
                sx={{
                  backgroundColor: "#f2f5f9",
                  display: "grid",
                  justifyContent: "end",
                }}
              >
                <Button variant="contained" sx={{ mr: 2, mb: 2 }}>
                  save notes
                </Button>
              </Box>
            </form>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <Typography>Latest update</Typography>
              <Typography>2022 Nov </Typography>
            </Box>
          </Grid>
        </Grid>
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
