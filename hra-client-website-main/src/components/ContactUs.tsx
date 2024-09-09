import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography
} from "@mui/material";
import { Flex } from "@radix-ui/themes";
import { Button } from "./ui/button";
import { Phone as PhoneIcon, Mail as MailIcon } from "@mui/icons-material";
import { WhatsappIcon } from "./Icons";
import "./Styles.css";

export const ContactUs = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="md:flex gap-4">
      <Button onClick={handleClickOpen}>
        <PhoneIcon className="mr-2 w-5 h-5" />
        Talk to us
      </Button>
      <Dialog open={open} onClose={handleClose} disableScrollLock={true}>
        <DialogTitle>Contact us</DialogTitle>
        <DialogContent>
          <Flex direction="column" gap="3">
            <a href="tel:+917569922967" className="w-4/5">
              <Button
                variant="link"
                className="bg-cyan-600 text-white rounded-md contact-button"
              >
                <Flex direction="row" gap="3" className="text-white">
                  <PhoneIcon /> 
                  <Typography sx={{marginLeft:"15px"}}>+91 7569922967</Typography>
                </Flex>
              </Button>
            </a>

            <a href="mailto:support@solutions.in">
              <Button
                variant="link"
                className="bg-yellow-500 text-white rounded-md contact-button"
              >
                <Flex direction="row" gap="3">
                  <MailIcon /> 
                  <Typography sx={{marginLeft:"15px"}}>support@hrasolutions.in</Typography>
                </Flex>
              </Button>
            </a>
            <a target="_blank" rel="noreferrer" href="https://wa.link/quiehb">
              <Button
                variant="link"
                className="bg-green-500 text-white rounded-md contact-button "
              >
                <Flex direction="row" gap="3" className="text-white">
                  <div style={{ color: 'white' }}>
                  <WhatsappIcon /> 

                  </div>
                  <Typography sx={{marginLeft:"15px"}}>+91 89776 61744</Typography>
                </Flex>
              </Button>
            </a>
          </Flex>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
