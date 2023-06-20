import React, { useState } from "react";
import SectionTitle from "../GeneralComponents/SectionTitle";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  Text,
  useToast,
} from "@chakra-ui/react";
import { sendContactForm } from "@/lib/api";
import { motion } from "framer-motion";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

type Props = {};

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

export default function Contact({}: Props) {
  const toast = useToast();
  const [formState, setFormState] = useState(initState);
  const { values, isLoading, error } = formState;
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const onBlur = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setTouched((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setFormState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [e.target!.name]: e.target!.value,
      },
    }));

  const onSubmit = async () => {
    setFormState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({ name: false, email: false, subject: false, message: false });
      setFormState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "bottom",
      });
    } catch (error: any) {
      setFormState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };
  return (
    <div
      className="flex flex-col text-center
    px-10 justify-evenly items-center lg:w-1/3"
    >
      <motion.div
        initial={{
          opacity: 0,
          x: -200,
        }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        className="mb-10 mt-32"
      >
        <SectionTitle text="Contact" />
      </motion.div>

      <div className="flex gap-5">
        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <a
            className="cursor-pointer flex flex-col justify-center items-center"
            href="https://github.com/VagnerSR"
          >
            <div className="hover:rotate-12 hover:-translate-y-1">
              <AiOutlineGithub size={30} />
            </div>
            <span>My GitHub</span>
          </a>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <a
            className="cursor-pointer flex flex-col justify-center items-center"
            href="https://www.linkedin.com/in/vagner-da-silva-rosnoski-b657a024a/"
          >
            <div className="hover:rotate-12 hover:-translate-y-1 z-10">
              <AiOutlineLinkedin size={30} />
            </div>
            <span>My Linkedin</span>
          </a>
        </motion.div>
      </div>
      <motion.span
        initial={{
          opacity: 0,
          x: -200,
        }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        className="my-5"
      >
        My e-mail: vagnerrosnoski@gmail.com
      </motion.span>
      <motion.span
        initial={{
          opacity: 0,
          x: -200,
        }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        className="my-5"
      >
        Or you could just send me an e-mail right below
      </motion.span>

      <div className="w-full ">
        {error && (
          <Text color="red.300" my={4} fontSize="xl">
            {error}
          </Text>
        )}
        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <FormControl
            isRequired
            isInvalid={touched.name && !values.name}
            mb={5}
          >
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              errorBorderColor="red.300"
              borderColor="purple.800"
              _hover={{ borderColor: 'purple.400'}}
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <FormControl
            isRequired
            isInvalid={touched.email && !values.email}
            mb={5}
          >
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              errorBorderColor="red.300"
              borderColor="purple.800"
              _hover={{ borderColor: 'purple.400'}}
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <FormControl
            mb={5}
            isRequired
            isInvalid={touched.subject && !values.subject}
          >
            <FormLabel>Subject</FormLabel>
            <Input
              type="text"
              name="subject"
              errorBorderColor="red.300"
              borderColor="purple.800"
              _hover={{ borderColor: 'purple.400'}}
              value={values.subject}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <FormControl
            isRequired
            isInvalid={touched.message && !values.message}
            mb={5}
          >
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              rows={4}
              errorBorderColor="red.300"
              borderColor="purple.800"
              _hover={{ borderColor: 'purple.400'}}
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          transition={{
            duration: 0.5,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mb-10"
        >
          <Button
            variant="outline"
            colorScheme="purple"
            isLoading={isLoading}
            isDisabled={
              !values.name ||
              !values.email ||
              !values.subject ||
              !values.message
            }
            onClick={onSubmit}
          >
            Submit
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
