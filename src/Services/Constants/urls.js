export const URLS = {
  APP_URL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://bildnw-frontend.vercel.app",

  FILE_URL: "https://backend.bildnw.quest",
  API_URL: "https://backend.bildnw.quest/v1",
  NOTIFICATIONS_URL: "wss://notification.bildnw.quest/ws/notifications/",
  //
};

