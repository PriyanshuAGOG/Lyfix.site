import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface BookingFormProps {
  selectedAgent?: string;
  onSubmit: (data: any) => void;
}

const BookingForm = ({ selectedAgent = "", onSubmit }: BookingFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      aiAgent: selectedAgent,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="aiAgent">AI Agent Type</Label>
        <Input
          id="aiAgent"
          {...register("aiAgent", { required: true })}
          readOnly
          className="bg-gray-50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          {...register("name", { required: "Name is required" })}
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="text-sm text-red-500">
            {errors.name.message as string}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="text-sm text-red-500">
            {errors.email.message as string}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^\+?[1-9]\d{1,14}$/,
              message:
                "Please enter a valid international phone number (E.164 format)",
            },
          })}
          placeholder="+1 (555) 123-4567"
        />
        {errors.phone && (
          <p className="text-sm text-red-500">
            {errors.phone.message as string}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company Name</Label>
        <Input
          id="company"
          {...register("company", { required: "Company name is required" })}
          placeholder="Your Company"
        />
        {errors.company && (
          <p className="text-sm text-red-500">
            {errors.company.message as string}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="requirements">Specific Requirements</Label>
        <Textarea
          id="requirements"
          {...register("requirements")}
          placeholder="Tell us about your specific needs and requirements..."
          className="h-32"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90"
      >
        Submit Request
      </Button>
    </form>
  );
};

export default BookingForm;
