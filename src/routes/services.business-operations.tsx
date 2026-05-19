import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("business-operations")!;

export const Route = createFileRoute("/services/business-operations")({
  component: () => <ServicePage service={service} />,
  head: () => ({
    meta: [
      { title: `${service.title} — Vector AI` },
      { name: "description", content: service.tagline },
      { property: "og:title", content: `${service.title} — Vector AI` },
      { property: "og:description", content: service.tagline },
    ],
  }),
});
