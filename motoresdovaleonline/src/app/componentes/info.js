// components/Info.tsx
"use client";

import { useState } from "react";

export default function Info() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <div>
      <button
        onClick={togglePopup}
        style={{
          padding: "8px 16px",
          backgroundColor: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Info
      </button>

      {isOpen && (
        <div
          onClick={togglePopup}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "8px",
              textAlign: "center",
              maxWidth: "300px",
            }}
          >
            <p>
              Site criado por{" "}
              <a
                href="https://github.com/Obake18"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0070f3", textDecoration: "underline" }}
              >
                M. C. Jr
              </a>
            </p>
            <button
              onClick={togglePopup}
              style={{
                marginTop: "16px",
                padding: "6px 12px",
                backgroundColor: "#0070f3",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
