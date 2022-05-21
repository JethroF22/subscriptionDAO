import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ImageIcon from "@mui/icons-material/Image";
import ClearIcon from "@mui/icons-material/Clear";

function CreatePost() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
  });
  const [filesToUpload, setFilesToUpload] = useState<File[]>([]);
  const removeFile = (file: File) => {
    setFilesToUpload((currentFiles) =>
      currentFiles.filter((currentFile) => currentFile.name !== file.name)
    );
  };

  const inputProps = getInputProps();

  useEffect(() => {
    setFilesToUpload(acceptedFiles);
  }, [acceptedFiles]);

  console.log("getInputProps()", getInputProps());

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        width: "50%",
        minHeight: "50vh",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" textAlign="center" sx={{ marginTop: "20px" }}>
        Create Post
      </Typography>
      <Card
        variant="outlined"
        sx={{
          minHeight: "500px",
          width: "75%",
          marginTop: "30px",
          padding: "20px 30px",
        }}
      >
        <CardContent
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <TextField
            id="title"
            label="Title"
            variant="standard"
            sx={{
              width: "80%",
            }}
          />
          <TextField
            id="description"
            label="Description"
            variant="standard"
            multiline
            rows={5}
            sx={{
              width: "80%",
            }}
          />
          <Divider variant="middle" />
          <Box
            {...getRootProps()}
            sx={{
              width: "80%",
              height: "40%",
              backgroundColor: "#fafafa",
              border: "1px dashed #ccc",
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Input
              onChange={inputProps.onChange}
              onClick={inputProps.onClick}
              type={inputProps.type}
              sx={{ display: "none" }}
            />
            <Typography textAlign="center" fontSize="20px">
              Upload files
            </Typography>
            <IconButton>
              <UploadFileIcon />
            </IconButton>
          </Box>
          {acceptedFiles.length > 0 && (
            <Box
              sx={{
                overflowY: "scroll",
                height: "120px",
                width: "80%",
                marginTop: "20px",
              }}
            >
              <List>
                {filesToUpload.map((file, index) => (
                  <ListItem disablePadding key={index}>
                    <ListItemIcon>
                      <ImageIcon />
                    </ListItemIcon>
                    <ListItemText primary={file.name} />
                    <ListItemIcon
                      onClick={() => removeFile(file)}
                      sx={{ cursor: "pointer" }}
                    >
                      <ClearIcon />
                    </ListItemIcon>
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default CreatePost;
