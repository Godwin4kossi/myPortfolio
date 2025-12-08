import { useState } from "react";

const FormToGmail = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    property: "",
    description: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

const subjects = [
  "Select a Subject",
  "Frontend Website Design",
  "React JS Development",
  "Landing Page Development",
  "Website Redesign / Revamp",
  "WordPress Website Development",
  "WordPress E-commerce (WooCommerce)",
  "Fix WordPress Errors / Bugs",
  "Speed Optimization",
  "WordPress Plugin Setup / Config",
  "Custom WordPress Theme Design",
  "Responsive UI / Mobile Friendly Update",
  "Website Maintenance & Support",
];


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.property ||
      formData.property === "Select a Property" ||
      !formData.description
    ) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      const params = new URLSearchParams();
      params.append("view", "cm");
      params.append("fs", "1");
      params.append("to", "kennysnd18@gmail.com");

      const subject = `Property Inquiry from ${formData.firstName} ${formData.lastName} - ${formData.property}`;
      params.append("su", subject);

      const body = `
        Hello,

        I am interested in the following property: ${formData.property}

        Name: ${formData.firstName} ${formData.lastName}

        Message:
        ${formData.description}

        Best regards,
        ${formData.firstName} ${formData.lastName}
            `.trim();

      params.append("body", body);

      const gmailUrl = `https://mail.google.com/mail/?${params.toString()}`;

      window.open(gmailUrl, "_blank");

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 2000);
    } catch (error) {
      console.error("Error creating Gmail URL:", error);
      alert("Error opening Gmail. Please check your input and try again.");
    }
  };

  return (
    <div className="flex justify-center w-full h-full mt-20 mx-auto">
      {/* LEFT IMAGE */}
      {/* <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src={house}
          alt="Property"
          className="w-full h-full object-cover"
        />
      </div> */}

      {/* FORM */}
      <div className="form w-full md:w-1/3  p-6 md:p-10 flex flex-col">
        <form onSubmit={handleSubmit}>
          {/* NAME */}
          <div className="flex flex-col gap-10 mb-10">
            <div className="flex-1">
              <input
                className="w-full border-black border-b-3 border-l-3 px-3 py-2 outline-none placeholder:text-gray-400 placeholder:font-bold placeholder:uppercase placeholder:text-xs focus:border-gray-700"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
              />
            </div>

            <div className="flex-1">
              <input
                className="w-full border-black border-b-3 border-l-3 px-3 py-2 outline-none placeholder:text-gray-400 placeholder:font-bold placeholder:uppercase placeholder:text-xs focus:border-gray-700"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="mb-10">
            <select
              className="w-full border-black border-b-3 border-l-3 px-3 py-2 text-gray-400 font-bold uppercase text-xs focus:border-gray-700"
              name="property"
              value={formData.property}
              onChange={handleInputChange}
            >
              {subjects.map((property, index) => (
                <option key={index} value={property}>
                  {property}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <textarea
              className="w-full border-black border-b-3 border-l-3 placeholder:text-gray-400 placeholder:font-bold placeholder:uppercase placeholder:text-xs px-3 py-2 h-32 focus:border-gray-700"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Tell me about your inquiry..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="mt-5 px-6 py-2 border-black border-r-3 border-l-3 text-black  hover:font-semibold transition"
            >
              {isSubmitted ? "Sent!" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormToGmail;
