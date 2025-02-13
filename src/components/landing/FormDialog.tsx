import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import BookingForm from "./BookingForm";
import emailjs from "@emailjs/browser";

interface FormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  selectedAgent?: string;
}

const FormDialog = ({
  isOpen,
  onClose,
  title,
  selectedAgent,
}: FormDialogProps) => {
  const handleSubmit = async (data: any) => {
    try {
      // Initialize EmailJS with your credentials
      const response = await emailjs.send(
        "service_u15rj0v",
        "template_uo7xl6l",
        {
          agent_type: data.aiAgent,
          user_name: data.name,
          user_email: data.email,
          user_phone: data.phone,
          company: data.company,
          requirements: data.requirements,
        },
        "i6e6Eq5LMtDLKMhZf",
      );

      if (response.status === 200) {
        alert("Form submitted successfully! We will contact you soon.");
        onClose();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md transform transition-all duration-300 animate-scaleIn bg-white">
        <DialogHeader className="animate-fadeIn">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="animate-slideIn">
          <BookingForm selectedAgent={selectedAgent} onSubmit={handleSubmit} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;
