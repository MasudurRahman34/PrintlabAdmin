import { useAuth } from "@/hooks/useAuth";
import axios from "axios";
import React from "react";

const OrderItemFile = ({ item }) => {
  const { isAuthenticated, session } = useAuth();
  const [isDownloading, setIsDownloading] = React.useState(false);

  const handleDownload = async (url, filename, fileExtension) => {
    try {
      setIsDownloading(true);
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${session?.token}`,
        },
        responseType: "blob",
      });

      const result = await response.data;

      const blob = new Blob([result]);
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `${filename}`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloading(false);
    } catch (error) {
      console.error("Download failed", error);
      setIsDownloading(false);
    }
  };
  return (
    <div className="w-full col-span-12 p-4 bg-white md:col-span-2">
      <h1 className="text-lg font-semibold">File</h1>
      <div>
        {item?.file ? (
          <div>
            <button
              onClick={() => {
                handleDownload(
                  item.file.url,
                  item.file.slug,
                  item.file.extension
                );
              }}
              disabled={isDownloading}
              className="flex items-center justify-center w-12 gap-2 p-2 bg-gray-200 rounded"
            >
              {isDownloading ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-8 text-primary animate-spin"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                  <path
                    fillRule="evenodd"
                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                  />
                </svg>
              ) : (
                <img
                  src={
                    item.file.extension === "pdf"
                      ? "/assets/img/icons8-pdf-96.png"
                      : "/assets/img/icons8-docs-480.png"
                  }
                  alt="Docs"
                />
              )}
            </button>
            {item.file.is_force_upload === 1 && (
              <p className="text-red-500">Force Uploaded</p>
            )}
          </div>
        ) : (
          "No File Attached"
        )}
      </div>
    </div>
  );
};

export default OrderItemFile;
