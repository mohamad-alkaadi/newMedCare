import {
  Box,
  Button,
  CircularProgress,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material"
import React from "react"
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined"
import DescriptionIcon from "@mui/icons-material/Description"
import DownloadIcon from "@mui/icons-material/Download"
const CardFive = () => {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      )
    }, 800)

    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <Box>
      <Grid container columns={8}>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pl: 3,
            pr: 3,
            pt: "11px",
          }}
        >
          <Typography sx={{ color: "#00544f", fontSize: "20px" }}>
            Files/Documents
          </Typography>
          <Button
            size="small"
            sx={{ textTransform: "none", color: "#068466" }}
            startIcon={<NoteAddOutlinedIcon />}
          >
            Add Files
          </Button>
        </Grid>
        <Grid item xs={8} sx={{ pl: 3, pr: 3 }}>
          <List>
            <ListItem
              sx={{
                border: "1px solid rgba(173, 173, 173, 0.2)",
                borderBottom: "1px solid rgba(105, 104, 104, 0.2)",
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
                mb: "2px",
                color: "gray",
              }}
            >
              <Box display="flex">
                <DescriptionIcon
                  sx={{ width: 13, pb: "2px", color: "#068466" }}
                />
                <Typography
                  sx={{
                    ml: 1,
                    fontSize: "13px",
                    justifySelf: "center",
                    alignSelf: "center",
                  }}
                >
                  Checkup Result.pdf
                </Typography>
              </Box>
              <CircularProgress
                size="1rem"
                variant="determinate"
                value={progress}
              />
            </ListItem>
            <ListItem
              sx={{
                border: "1px solid rgba(173, 173, 173, 0.2)",
                borderBottom: "1px solid rgba(105, 104, 104, 0.2)",
                display: "flex",
                justifyContent: "space-between",
                mb: "2px",
                color: "gray",
              }}
            >
              <Box display="flex">
                <DescriptionIcon
                  sx={{ width: 13, pb: "2px", color: "#068466" }}
                />
                <Typography
                  sx={{
                    ml: 1,
                    fontSize: "13px",
                    justifySelf: "center",
                    alignSelf: "center",
                  }}
                >
                  Checkup Result.pdf
                </Typography>
              </Box>
              <CircularProgress
                size="1rem"
                variant="determinate"
                value={progress}
              />
            </ListItem>
            <ListItem
              sx={{
                border: "1px solid rgba(173, 173, 173, 0.2)",
                borderBottom: "1px solid rgba(105, 104, 104, 0.2)",
                display: "flex",
                justifyContent: "space-between",
                mb: "2px",
                color: "gray",
              }}
            >
              <Box display="flex">
                <DescriptionIcon
                  sx={{ width: 13, pb: "2px", color: "#068466" }}
                />
                <Typography
                  sx={{
                    ml: 1,
                    fontSize: "13px",
                    justifySelf: "center",
                    alignSelf: "center",
                  }}
                >
                  Checkup Result.pdf
                </Typography>
              </Box>
              <CircularProgress
                size="1rem"
                variant="determinate"
                value={progress}
              />
            </ListItem>
            <ListItem
              sx={{
                border: "1px solid rgba(173, 173, 173, 0.2)",
                borderBottom: "1px solid rgba(105, 104, 104, 0.2)",
                display: "flex",
                justifyContent: "space-between",
                mb: "2px",
                color: "gray",
              }}
            >
              <Box display="flex">
                <DescriptionIcon
                  sx={{ width: 13, pb: "2px", color: "#068466" }}
                />
                <Typography
                  sx={{
                    ml: 1,
                    fontSize: "13px",
                    justifySelf: "center",
                    alignSelf: "center",
                  }}
                >
                  Checkup Result.pdf
                </Typography>
              </Box>
              <CircularProgress
                size="1rem"
                variant="determinate"
                value={progress}
              />
            </ListItem>
            <ListItem
              sx={{
                border: "1px solid rgba(173, 173, 173, 0.2)",
                borderBottom: "1px solid rgba(105, 104, 104, 0.2)",
                display: "flex",
                justifyContent: "space-between",
                mb: "2px",
                color: "gray",
              }}
            >
              <Box display="flex">
                <DescriptionIcon
                  sx={{ width: 13, pb: "2px", color: "#068466" }}
                />
                <Typography
                  sx={{
                    ml: 1,
                    fontSize: "13px",
                    justifySelf: "center",
                    alignSelf: "center",
                  }}
                >
                  Checkup Result.pdf
                </Typography>
              </Box>
              <CircularProgress
                size="1rem"
                variant="determinate"
                value={progress}
              />
            </ListItem>
            <ListItem
              sx={{
                border: "1px solid rgba(173, 173, 173, 0.2)",
                borderBottom: "1px solid rgba(105, 104, 104, 0.2)",
                display: "flex",
                justifyContent: "space-between",
                mb: "2px",
                color: "gray",
              }}
            >
              <Box display="flex">
                <DescriptionIcon
                  sx={{ width: 13, pb: "2px", color: "#068466" }}
                />
                <Typography
                  sx={{
                    ml: 1,
                    fontSize: "13px",
                    justifySelf: "center",
                    alignSelf: "center",
                  }}
                >
                  Checkup Result.pdf
                </Typography>
              </Box>
              <CircularProgress
                size="1rem"
                variant="determinate"
                value={progress}
              />
            </ListItem>
            <ListItem
              sx={{
                border: "1px solid rgba(173, 173, 173, 0.2)",
                borderBottom: "1px solid rgba(105, 104, 104, 0.2)",
                display: "flex",
                justifyContent: "space-between",
                mb: "2px",
                color: "gray",
              }}
            >
              <Box display="flex">
                <DescriptionIcon
                  sx={{ width: 13, pb: "2px", color: "#068466" }}
                />
                <Typography
                  sx={{
                    ml: 1,
                    fontSize: "13px",
                    justifySelf: "center",
                    alignSelf: "center",
                  }}
                >
                  Checkup Result.pdf
                </Typography>
              </Box>
              <CircularProgress
                size="1rem"
                variant="determinate"
                value={progress}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CardFive

// when you put a file gra the name of the file and incerss the proress bar every 1 secound
// https://mui.com/material-ui/react-progress/
