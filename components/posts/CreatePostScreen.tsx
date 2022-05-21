import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDropzone } from "react-dropzone";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ImageIcon from "@mui/icons-material/Image";
import ClearIcon from "@mui/icons-material/Clear";
import { newPostValidationSchema } from "../../validation";

const tiers = [
  {
    title: "Tier 1",
    price: "$2",
  },
  {
    title: "Tier 2",
    price: "$3",
  },
  {
    title: "Tier 3",
    price: "$5",
  },
];

function CreatePost() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
  });
  const [filesToUpload, setFilesToUpload] = useState<File[]>([]);
  const [tier, setTier] = useState();
  const formOptions = { resolver: yupResolver(newPostValidationSchema) };
  const { register, formState } = useForm(formOptions);
  const removeFile = (file: File) => {
    setFilesToUpload((currentFiles) =>
      currentFiles.filter((currentFile) => currentFile.name !== file.name)
    );
  };

  const inputProps = getInputProps();

  const handleSelect = (event: SelectChangeEvent) => {
    setTier(event.target.value as any);
  };

  useEffect(() => {
    setFilesToUpload(acceptedFiles);
  }, [acceptedFiles]);

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
            {...register("title")}
            error={formState.errors.title}
            helperText={formState.errors.title}
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
            {...register("description")}
            error={formState.errors.description}
            helperText={formState.errors.description}
          />{" "}
          <FormControl
            sx={{
              width: "60%",
              height: "55px",
              marginTop: "20px",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <InputLabel id="select-label" sx={{}}>
              Tier
            </InputLabel>
            <Select
              id="tier-select"
              value={tier}
              onChange={handleSelect}
              sx={{
                marginTop: "20px",
                width: "100%",
                color: "black",
              }}
            >
              {tiers.map((tier, index) => (
                <MenuItem
                  value={tier.title}
                  key={index}
                >{`${tier.title} - ${tier.price}`}</MenuItem>
              ))}
            </Select>
          </FormControl>
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
          <Box
            sx={{
              overflowY: filesToUpload.length > 0 ? "scroll" : "hidden",
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
          <CardActions>
            <Button
              variant="contained"
              size="large"
              sx={{
                display: "absolute",
                bottom: -20,
              }}
            >
              Create Post
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CreatePost;
