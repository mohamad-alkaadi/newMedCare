import { Box, Grid, List, ListItem, Typography } from "@mui/material"
import React from "react"

const CalendarCard = () => {
  return (
    <Box>
      <Grid container columns={8}>
        <Grid item xs={8}>
          <List>
            <ListItem>Oct 20, 2021</ListItem>
            <ListItem>
              <List sx={{ width: "100%" }}>
                <ListItem>
                  <Grid container columns={5}>
                    <Grid item xs={1}>
                      10:00
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ pl: 2, borderLeft: "1px solid black" }}>
                        <Typography>Dermatologist</Typography>
                        <Typography
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Dr. Mohamad Alkaadi
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container columns={5}>
                    <Grid item xs={1}>
                      10:00
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ pl: 2, borderLeft: "1px solid black" }}>
                        <Typography>Dermatologist</Typography>
                        <Typography
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Dr. Mohamad Alkaadi
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container columns={5}>
                    <Grid item xs={1}>
                      10:00
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ pl: 2, borderLeft: "1px solid black" }}>
                        <Typography>Dermatologist</Typography>
                        <Typography
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Dr. Mohamad Alkaadi
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </ListItem>
          </List>
          <List>
            <ListItem>Oct 20, 2021</ListItem>
            <ListItem>
              <List sx={{ width: "100%" }}>
                <ListItem>
                  <Grid container columns={5}>
                    <Grid item xs={1}>
                      10:00
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ pl: 2, borderLeft: "1px solid black" }}>
                        <Typography>Dermatologist</Typography>
                        <Typography
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Dr. Mohamad Alkaadi
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container columns={5}>
                    <Grid item xs={1}>
                      10:00
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ pl: 2, borderLeft: "1px solid black" }}>
                        <Typography>Dermatologist</Typography>
                        <Typography
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Dr. Mohamad Alkaadi
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container columns={5}>
                    <Grid item xs={1}>
                      10:00
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ pl: 2, borderLeft: "1px solid black" }}>
                        <Typography>Dermatologist</Typography>
                        <Typography
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Dr. Mohamad Alkaadi
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </ListItem>
          </List>
          <List>
            <ListItem>Oct 20, 2021</ListItem>
            <ListItem>
              <List sx={{ width: "100%" }}>
                <ListItem>
                  <Grid container columns={5}>
                    <Grid item xs={1}>
                      10:00
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ pl: 2, borderLeft: "1px solid black" }}>
                        <Typography>Dermatologist</Typography>
                        <Typography
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Dr. Mohamad Alkaadi
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container columns={5}>
                    <Grid item xs={1}>
                      10:00
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ pl: 2, borderLeft: "1px solid black" }}>
                        <Typography>Dermatologist</Typography>
                        <Typography
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Dr. Mohamad Alkaadi
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container columns={5}>
                    <Grid item xs={1}>
                      10:00
                    </Grid>
                    <Grid item xs={4}>
                      <Box sx={{ pl: 2, borderLeft: "1px solid black" }}>
                        <Typography>Dermatologist</Typography>
                        <Typography
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Dr. Mohamad Alkaadi
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CalendarCard
