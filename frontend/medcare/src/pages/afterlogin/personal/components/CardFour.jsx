import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material"
import React, { useState } from "react"
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined"
const CardFour = () => {
  const [buttonOneActive, setButtonOneActive] = useState(true)
  return (
    <Grid
      container
      columns={12}
      sx={{
        mr: 4,
        backgroundColor: "white",
        border: "1px solid #e6e6e6",
        borderRadius: 2,
      }}
    >
      <Grid item xs={12}>
        <Box
          sx={{
            backgroundColor: "#eff1f7",
            p: "4px",
            m: 3,

            borderRadius: 2,
            width: "447px",
          }}
        >
          <button
            className={`pt-2 pb-2 pr-8 pl-8 mr-1 rounded-md ${
              buttonOneActive ? `bg-[#fff] text-green-400` : null
            }`}
            onClick={() => setButtonOneActive(true)}
          >
            Upcoming Appointments
          </button>
          <button
            className={`pt-2 pb-2 pr-8 pl-8 rounded-md ${
              !buttonOneActive ? `bg-[#fff] text-green-400` : null
            }`}
            onClick={() => setButtonOneActive(false)}
          >
            Past Appointments
          </button>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            ml: 3,
            mr: 3,
            backgroundColor: "#eff1f7",
            pl: 4,
            pr: 4,
            pt: 3,
            pb: 3,
            borderRadius: "8px 8px 0 0",
            borderBottom: "1px solid #e6e6e6",
          }}
        >
          <Typography>Upcoming</Typography>
        </Box>
        <Box
          sx={{
            ml: 3,
            mr: 3,
            mb: 3,
            backgroundColor: "#eff1f7",
            height: "230px",
            overflow: "auto",
          }}
        >
          <List>
            <ListItem>
              <Grid container columns={12} sx={{ mr: 2 }}>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "grid",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div class="m-12 h-[150px] w-1 bg-blue-400 absolute overflow-x-visible">
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 bg-[#eff1f7] border-green-400"></div>
                  </div>
                </Grid>
                <Grid item xs={11} sx={{ backgroundColor: "white" }}>
                  <Grid container columns={12}>
                    <Grid
                      item
                      xs={3}
                      sx={{
                        pl: 2,
                        pr: 0,
                        pt: 3,
                        pb: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          borderRight: "1px solid #e6e6e6",
                          fontSize: "23px",
                        }}
                      >
                        26 Nov 19
                      </Typography>
                      <Typography
                        sx={{
                          borderRight: "1px solid #e6e6e6",
                          fontSize: "10px",
                        }}
                      >
                        09.00-10.00
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{ pl: 2, pr: 0, pt: 3, pb: 3 }}>
                      <Typography
                        sx={{
                          borderRight: "1px solid #e6e6e6",
                          fontSize: "10px",
                        }}
                      >
                        specialization
                      </Typography>
                      <Typography
                        sx={{
                          borderRight: "1px solid #e6e6e6",
                          fontSize: "20px",
                        }}
                      >
                        Dermatologists
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{ pl: 2, pr: 0, pt: 3, pb: 3 }}>
                      <Typography
                        sx={{
                          borderRight: "1px solid #e6e6e6",
                          fontSize: "10px",
                        }}
                      >
                        Doctor
                      </Typography>
                      <Typography
                        sx={{
                          borderRight: "1px solid #e6e6e6",
                          fontSize: "20px",
                        }}
                      >
                        Mohamad Alkaadi
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      sx={{
                        pl: 2,
                        pr: 0,
                        pt: 3,
                        pb: 3,
                        display: "grid",
                        justifyContent: "start",
                        alignItems: "center",
                      }}
                    >
                      <Button variant="text" size="small">
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <TextSnippetOutlinedIcon sx={{ width: 13 }} />
                          <Typography sx={{ pl: "2px", fontSize: 12 }}>
                            Notes
                          </Typography>
                        </Box>
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container columns={12} sx={{ mr: 2 }}>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "grid",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div class="m-12 h-[150px] w-1 bg-blue-400 absolute overflow-x-visible">
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 bg-[#eff1f7] border-green-400"></div>
                  </div>
                </Grid>
                <Grid item xs={11} sx={{ backgroundColor: "white" }}>
                  <Grid container columns={12}>
                    <Grid
                      item
                      xs={3}
                      sx={{
                        pl: 2,
                        pr: 0,
                        pt: 3,
                        pb: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          borderRight: "1px solid #e6e6e6",
                          fontSize: "23px",
                        }}
                      >
                        26 Dec 15
                      </Typography>
                      <Typography
                        sx={{
                          borderRight: "1px solid #e6e6e6",
                          fontSize: "10px",
                        }}
                      >
                        09.00-10.00
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{ pl: 2, pr: 0, pt: 3, pb: 3 }}>
                      <Typography
                        sx={{
                          borderRight: "1px solid #e6e6e6",
                          fontSize: "10px",
                        }}
                      >
                        specialization
                      </Typography>
                      <Typography
                        sx={{
                          borderRight: "1px solid #e6e6e6",
                          fontSize: "20px",
                        }}
                      >
                        Dermatologists
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{ pl: 2, pr: 0, pt: 3, pb: 3 }}>
                      <Typography
                        sx={{
                          borderRight: "1px solid #e6e6e6",
                          fontSize: "10px",
                        }}
                      >
                        Doctor
                      </Typography>
                      <Typography
                        sx={{
                          borderRight: "1px solid #e6e6e6",
                          fontSize: "20px",
                        }}
                      >
                        Mohamad Alkaadi
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      sx={{
                        pl: 2,
                        pr: 0,
                        pt: 3,
                        pb: 3,
                        display: "grid",
                        justifyContent: "start",
                        alignItems: "center",
                      }}
                    >
                      <Button variant="text" size="small">
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <TextSnippetOutlinedIcon sx={{ width: 13 }} />
                          <Typography sx={{ pl: "2px", fontSize: 12 }}>
                            Notes
                          </Typography>
                        </Box>
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Box>
      </Grid>
    </Grid>
  )
}

export default CardFour
