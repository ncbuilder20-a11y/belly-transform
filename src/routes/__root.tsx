import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Transformation de la taille — Programme 14 jours | Victoria Korshak" },
      { name: "description", content: "Programme en ligne de 14 jours pour éliminer la graisse viscérale, activer les muscles profonds et améliorer la digestion. 5 min/jour." },
      { name: "author", content: "Victoria Korshak" },
      { property: "og:title", content: "Transformation de la taille — Programme 14 jours | Victoria Korshak" },
      { property: "og:description", content: "Programme en ligne de 14 jours pour éliminer la graisse viscérale, activer les muscles profonds et améliorer la digestion. 5 min/jour." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Transformation de la taille — Programme 14 jours | Victoria Korshak" },
      { name: "twitter:description", content: "Programme en ligne de 14 jours pour éliminer la graisse viscérale, activer les muscles profonds et améliorer la digestion. 5 min/jour." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f51fdb4d-a23f-4ec8-a46e-6aba5855bc05/id-preview-84f8287f--84f4b5d2-a66e-40b0-9159-4630042f9188.lovable.app-1781348836340.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f51fdb4d-a23f-4ec8-a46e-6aba5855bc05/id-preview-84f8287f--84f4b5d2-a66e-40b0-9159-4630042f9188.lovable.app-1781348836340.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://cdn.jsdelivr.net", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap" },
      {
        rel: "stylesheet",
        id: "silktide-consent-manager-css",
        href: "https://cdn.jsdelivr.net/gh/silktide/consent-manager@v2.0.0/silktide-consent-manager.css",
        integrity: "sha384-IO1E/jCrQXyH5rwcI0SXP7OXw47JFqQNDQcKhbFvqnL2IunBxxwE2Ne5XyAmCqKs",
        crossOrigin: "anonymous",
      },
    ],
    styles: [
      {
        id: "silktide-consent-manager-overrides",
        children: `#stcm-wrapper {
  --boxShadow: -5px 5px 10px 0px #00000012, 0px 0px 50px 0px #0000001a;
  --fontFamily: Helvetica Neue, Segoe UI, Arial, sans-serif;
  --primaryColor: #523400;
  --backgroundColor: #fffceb;
  --textColor: #000000;
  --backdropBackgroundColor: #c9b6b633;
  --backdropBackgroundBlur: 0px;
  --iconColor: #523400;
  --iconBackgroundColor: #fffceb;
}`,
      },
    ],
    scripts: [
      {
        src: "https://cdn.jsdelivr.net/gh/silktide/consent-manager@v2.0.0/silktide-consent-manager.js",
        integrity: "sha384-j4NIMOecmtzMWe9GJADIIe5hTlHG63aiTQ/2XorW10RNyQJg+IU+xwFVDy45wBah",
        crossOrigin: "anonymous",
      },
      {
        children: `window.addEventListener('load', function() {
  if (!window.silktideConsentManager) return;
  window.silktideConsentManager.init({
    backdrop: { show: true },
    icon: { position: "bottomLeft" },
    prompt: { position: "bottomRight" },
    consentTypes: [
      {
        id: "essential",
        label: "Essential",
        description: "<p>These cookies are necessary for the website to function properly and cannot be switched off. They help with things like logging in and setting your privacy preferences.</p>",
        required: true,
        onAccept: function() {}
      },
      {
        id: "analytics",
        label: "Analytics",
        description: "<p>These cookies help us improve the site by tracking which pages are most popular and how visitors move around the site.</p>",
        defaultValue: true,
        gtag: "analytics_storage"
      },
      {
        id: "marketing",
        label: "Marketing",
        description: "<p>These cookies are used by us and our advertising partners to show you relevant ads on this site and elsewhere, and to measure how those campaigns perform.</p>",
        gtag: ["ad_storage", "ad_user_data", "ad_personalization"]
      }
    ],
    text: {
      prompt: {
        description: "<p>We use cookies on our site to enhance your user experience, provide personalized content, and analyze our traffic.</p>",
        acceptAllButtonText: "Accept all",
        acceptAllButtonAccessibleLabel: "Accept all cookies",
        rejectNonEssentialButtonText: "Reject non-essential",
        rejectNonEssentialButtonAccessibleLabel: "Reject all non-essential cookies",
        preferencesButtonText: "Preferences",
        preferencesButtonAccessibleLabel: "Toggle preferences"
      },
      preferences: {
        title: "Customize your cookie preferences",
        description: "<p>We respect your right to privacy. You can choose not to allow some types of cookies. Your cookie preferences will apply across our website.</p>",
        saveButtonText: "Save and close",
        saveButtonAccessibleLabel: "Save your cookie preferences",
        creditLinkText: "Get this banner for free",
        creditLinkAccessibleLabel: "Get this banner for free"
      }
    }
  });
});`,
      },
      {
        children: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1873300316959732');fbq('track','PageView');`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
