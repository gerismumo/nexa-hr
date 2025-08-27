import { useState } from "react";
import {
  Button,
  Container,
  Paper,
  PasswordInput,
  TextInput,
  Title,
  Flex,
  Image,
  Text,
} from "@mantine/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  // email: Yup.string().email("Invalid email").required("Email is required"),
  // password: Yup.string()
  //   .min(6, "Password must be at least 6 characters")
  //   .required("Password is required"),
});

const LoginForm = () => {
  const [visible, setVisible] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        console.log(values);
        setSubmitting(true);

        toast.success("Login successful!");
        resetForm();
        navigate("/dashboard");
        // setTimeout(() => {
        //   window.location.reload();
        // }, 500);
      } catch {
        setSubmitting(false);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Flex justify="center" align="center" h="100vh" p={isMobile ? "xs" : "xl"}>
      <Container size={isMobile ? "xs" : "sm"} w="100%">
        <Title
          order={1}
          size={isMobile ? "20px" : "28px"}
          mb={20}
          className="text-center"
          title="Login"
        >
          Login
        </Title>
        <Flex justify="center" mb={20}>
          <Image
            src="/logo.jpg"
            alt="logo"
            h={isMobile ? 40 : 50}
            w={isMobile ? 120 : 150}
            fit="contain"
          />
        </Flex>
        <Paper withBorder shadow="md" p={isMobile ? "md" : "xl"} radius="md">
          <div className="mb-4 p-2 text-center">
            <Text size="sm">
              No need to enter email or password just click <b>Login</b> to
              access the dashboard.
            </Text>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <TextInput
              label="Email"
              placeholder="you@example.com"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && formik.errors.email}
            />
            <PasswordInput
              mt="md"
              label="Password"
              placeholder="Your password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && formik.errors.password}
              visible={visible}
              onVisibilityChange={setVisible}
            />
            <Button
              type="submit"
              disabled={formik.isSubmitting}
              loading={formik.isSubmitting}
              fullWidth
              mt="xl"
              size={isMobile ? "sm" : "md"}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </Flex>
  );
};
export default LoginForm;
