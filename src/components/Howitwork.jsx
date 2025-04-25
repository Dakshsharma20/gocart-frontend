import React from "react";
import { FaUserPlus, FaShoppingCart, FaTruck } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Make sure you're using react-router-dom

const steps = [
  {
    icon: <FaUserPlus size={40} style={{ color: "#16a34a" }} />,
    title: "For Vendors",
    description: "Register → List Products → Start Selling",
    link: "/vendor-auth",
  },
  {
    icon: <FaShoppingCart size={40} style={{ color: "#2563eb" }} />,
    title: "For Consumers",
    description: "Browse → Order → Get Delivery",
    link: "/venders",
  },
  {
    icon: <FaTruck size={40} style={{ color: "#dc2626" }} />,
    title: "For Transporters",
    description: "Accept Jobs → Transport → Get Paid",
    link: "/",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="About"
      style={{
        padding: "4rem 0",
        backgroundColor: "#f3f4f6",
        textAlign: "center",
      }}
    >
      <motion.h2
        style={{
          fontSize: "2.25rem",
          fontWeight: "bold",
          color: "#1f2937",
          marginBottom: "2.5rem",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        How GoCart Works?
      </motion.h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2.5rem",
          padding: "0 1.5rem",
        }}
      >
        {steps.map((step, index) => (
          <Link to={step.link} key={index} style={{ textDecoration: "none" }}>
            <motion.div
              style={{
                backgroundColor: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "0.75rem",
                padding: "1.5rem",
                maxWidth: "24rem",
                width: "100%",
                transition: "transform 0.3s ease",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                {step.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#111827",
                  marginBottom: "0.5rem",
                }}
              >
                {step.title}
              </h3>
              <p style={{ color: "#4b5563" }}>{step.description}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
