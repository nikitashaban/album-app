import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { delay } from "../../helpers/delay";
import AuthStore from "../../stores/auth";
import { useStyles } from "./style";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

type FormData = {
  email: string;
  password: string;
  global: {
    message: string;
  };
};

const Auth: React.FC = () => {
  const history = useHistory();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setIsAuth } = useContext(AuthStore);
  const { register, handleSubmit, errors, watch, setError } = useForm<
    FormData
  >();
  const classes = useStyles();
  const emailValue = watch("email");

  const submitHandler = ({ email, password }: FormData) => {
    setIsSubmitting(true);
    delay(500).then(() => {
      setIsSubmitting(false);
      if (email === "admin" && password === "password") {
        setIsAuth(true);
        localStorage.setItem("user", JSON.stringify(email));
        history.push("/albums");
      } else {
        setError("global", "incorrect", "Your password or login is incorrect");
      }
    });
  };

  return (
    <form
      className={classes.root}
      onSubmit={handleSubmit(submitHandler)}
      noValidate
      autoComplete="off"
    >
      <TextField
        error={Boolean(errors.email)}
        name="email"
        label="Email"
        inputRef={register({
          required: true,
          minLength: emailValue === "admin" ? 5 : 6,
          maxLength: 50,
          pattern: emailValue === "admin" ? /./ : /^\S+@\S+\.\S+$/,
        })}
        variant="outlined"
      />
      {errors.email &&
        (errors.email.type === "required" ||
          "minLength" ||
          "maxLength" ||
          "pattern") && (
          <span className={classes.invalidText}>
            Please enter correct email
          </span>
        )}
      <TextField
        error={Boolean(errors.password)}
        label="Password"
        name="password"
        inputRef={register({ required: true, minLength: 6, maxLength: 50 })}
        variant="outlined"
        type="password"
      />
      {errors.password &&
        (errors.password.type === "required" || "minLength" || "maxLength") && (
          <span className={classes.invalidText}>
            Please enter correct password
          </span>
        )}
      {errors.global && (
        <span className={classes.invalidText}>{errors.global.message}</span>
      )}
      <Button
        type="submit"
        disabled={isSubmitting}
        variant="contained"
        color="primary"
        size="large"
      >
        ENTER
      </Button>
    </form>
  );
};

export default observer(Auth);
