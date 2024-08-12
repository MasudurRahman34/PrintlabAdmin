import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@/styles/globals.css";
import "@/styles/style.css";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "react-quill/dist/quill.snow.css";
import "gridjs/dist/theme/mermaid.css";
import "react-datepicker/dist/react-datepicker.css";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <div
        style={{
          zIndex: 999999999999999,
          position: "relative",
        }}
      >
        <Toaster position="top-center" />
      </div>
    </QueryClientProvider>
  );
}
