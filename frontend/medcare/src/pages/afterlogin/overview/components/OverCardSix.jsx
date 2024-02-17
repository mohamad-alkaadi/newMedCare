import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Input,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material"
import FileDownloadIcon from "@mui/icons-material/FileDownload"
import React, { useState, useEffect } from "react"
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined"
import DescriptionIcon from "@mui/icons-material/Description"
import DownloadIcon from "@mui/icons-material/Download"
import axios from "axios"
const OverCardSix = () => {
  const [progress, setProgress] = React.useState(0)
  const [open, setOpen] = React.useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [fileList, setFileList] = useState([])
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8080/api/list_files/`)
      setFileList(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  const handleFileChange = (event) => {
    // Get the selected file from the input element
    const file = event.target.files[0]
    setSelectedFile(file)
  }
  const handleUpload = () => {
    if (selectedFile) {
      // Create a FormData object and append the file
      const formData = new FormData()
      formData.append("pdf_file", selectedFile)

      // Send the file to the specified URL
      axios
        .post("http://127.0.0.1:8080/api/file/", formData)
        .then((response) => {
          console.log("File uploaded successfully:", response.data)
          // Handle success (e.g., show a success message)
        })
        .then(() => {
          fetchData()
        })
        .catch((error) => {
          console.error("Error uploading file:", error)
          // Handle error (e.g., show an error message)
        })
    } else {
      console.warn("No file selected.")
      // Handle case where no file is selected
    }
    setOpen(false)
  }
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
        borderRadius: "6px 6px 6px 6px",
        height: 304,
      }}
    >
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
            onClick={handleClickOpen}
          >
            Add Files
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              component: "form",
              onSubmit: (event) => {
                event.preventDefault()
                const formData = new FormData(event.currentTarget)
                const formJson = Object.fromEntries(formData.entries())
                const email = formJson.email
                console.log(email)
                handleClose()
              },
            }}
          >
            <DialogTitle>Add a File</DialogTitle>
            <DialogContent>
              <input
                type="file"
                accept=".pdf" // Specify allowed file types (e.g., PDF)
                onChange={handleFileChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleUpload}>Upload</Button>
            </DialogActions>
          </Dialog>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{ pl: 3, pr: 3, overflow: "auto", height: "240px" }}
        >
          <List>
            {fileList.map((data) => (
              <ListItem
                sx={{
                  border: "1px solid rgba(173, 173, 173, 0.2)",
                  borderBottom: "1px solid rgba(105, 104, 104, 0.2)",
                  display: "flex",
                  justifyContent: "space-between",
                  mt: "2px",
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
                    {data.pdf_file.split("/").pop()}
                  </Typography>
                </Box>
                <IconButton sx={{ width: "1px", height: "1px" }}>
                  <FileDownloadIcon sx={{ width: "1rem" }} />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>{" "}
    </Box>
  )
}

export default OverCardSix
