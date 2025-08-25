"use client";

import React, { useState, useEffect } from "react";
import { app } from "./firebase.js";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { FaExclamationTriangle, FaArrowLeft } from "react-icons/fa";
import { BiLoaderAlt } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";
import { ENVIRONMENT_URL } from "@/constants/global.js";

const bgImageStyle = {
  backgroundColor: "hsla(219,45%,7%,1)",
  backgroundImage: `
      radial-gradient(at 63% 43%, hsla(217,43%,7%,1) 0px, transparent 50%),
      radial-gradient(at 63% 59%, hsla(197,100%,32%,0.2) 0px, transparent 50%),
      radial-gradient(at 80% 94%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 39% 40%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 39% 76%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 99% 46%, hsla(212,100%,20%,1) 0px, transparent 50%),
      radial-gradient(at 51% 0%, hsla(212,100%,20%,1) 0px, transparent 50%),
      radial-gradient(at 0% 47%, hsla(212,100%,15%,1) 0px, transparent 50%),
      radial-gradient(at 0% 61%, hsla(197,100%,32%,0.6) 0px, transparent 50%)
    `,
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function CertificatePage({ certificateId, translations }) {
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCertificate() {
      if (!certificateId) {
        setLoading(false);
        setError("No certificate ID provided");
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const db = getFirestore(app);
        const certificateRef = doc(db, "certificates", certificateId);
        const certificateDoc = await getDoc(certificateRef);

        if (certificateDoc.exists()) {
          setCertificate(certificateDoc.data());
        } else {
          setError("Certificate not found");
        }
      } catch (err) {
        console.error("Error fetching certificate:", err);
        setError("Error retrieving certificate information");
      } finally {
        setLoading(false);
      }
    }

    fetchCertificate();
  }, [certificateId]);

  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";

    try {
      // Check if timestamp is a Firebase Timestamp
      if (timestamp.toDate) {
        return timestamp.toDate().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }

      // If it's a string in format "YYYY-MM-DDTHH:MM:SS.SSSZ"
      if (typeof timestamp === "string") {
        return new Date(timestamp).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }

      return "N/A";
    } catch (error) {
      console.error("Error formatting date:", error);
      return "N/A";
    }
  };

  const downloadImage = () => {
    if (certificate?.imagePdfUrl) {
      window.open(certificate.imagePdfUrl, "_blank");
    }
  };

  const {
    loadingCert,
    loadingP,
    certNotFound,
    certNotFound2,
    certNotFound3,
    goBack,
    certDetails,
    verified,
    cert_id,
    cert_recipient,
    cert_date,
    cert_amount,
    cert_download,
    cert_back,
    cert_noInfo,
  } = translations;

  return (
    <div style={bgImageStyle} className="py-20 px-4 md:px-6">
      <div className="max-w-3xl w-full mx-auto">
        {loading ? (
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center justify-center">
            <BiLoaderAlt className="text-blue-400 text-4xl animate-spin mb-4" />
            <h2 className="text-white text-xl font-medium">{loadingCert}</h2>
            <p className="text-gray-400 mt-2">{loadingP}</p>
          </div>
        ) : error ? (
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8">
            <div className="flex items-center justify-center mb-6">
              <FaExclamationTriangle className="text-yellow-500 text-4xl" />
            </div>
            <h2 className="text-white text-2xl font-medium text-center mb-4">
              {certNotFound}
            </h2>
            <p className="text-gray-300 text-center mb-6">
              {error}. {certNotFound2}{" "}
              <a
                href={`${ENVIRONMENT_URL}/contact`}
                className="text-blue-400 underline hover:text-blue-300 transition-colors"
              >
                {certNotFound3}
              </a>
              .
            </p>
            <div className="flex justify-center mt-8">
              <a
                href="/certificates"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                <FaArrowLeft size={14} />
                <span>{goBack}</span>
              </a>
            </div>
          </div>
        ) : certificate ? (
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-6">
              <h2 className="text-white text-2xl font-medium">{certDetails}</h2>
              <div className="bg-green-600 text-white text-sm py-1 px-3 rounded-full flex items-center">
                <BsCheckCircleFill className="mr-1" /> {verified}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-gray-400 text-sm">{cert_id}</p>
                <p className="text-white font-medium truncate">
                  {certificateId}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">{cert_recipient}</p>
                <p className="text-white font-medium">
                  {certificate.recipientName || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">{cert_date}</p>
                <p className="text-white font-medium">
                  {formatDate(certificate.createdAt)}
                </p>
              </div>
              {certificate.payoutAmount && (
                <div>
                  <p className="text-gray-400 text-sm">{cert_amount}</p>
                  <p className="text-white font-medium">
                    ${certificate.payoutAmount}
                  </p>
                </div>
              )}
            </div>

            {certificate.imageJpgUrl && (
              <div className="mt-6 border-t border-gray-700 pt-6">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg mb-4">
                  {/* Image with skeleton loading effect */}
                  <div className="w-full h-full bg-slate-700 animate-pulse absolute rounded-lg"></div>
                  <img
                    src={certificate.imageJpgUrl}
                    alt="Certificate"
                    className="object-contain w-full h-full relative z-10 opacity-0 transition-opacity duration-300"
                    onLoad={(e) =>
                      e.target.classList.replace("opacity-0", "opacity-100")
                    }
                  />
                </div>
              </div>
            )}

            <div className="flex justify-center mt-8">
              <a
                href="/certificates"
                className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors"
              >
                <FaArrowLeft size={14} />
                <span>{cert_back}</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8">
            <p className="text-white text-center">{cert_noInfo}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CertificatePage;
