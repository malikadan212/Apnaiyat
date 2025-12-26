import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useHeroCampaign() {
  return useQuery({
    queryKey: [api.campaigns.getHero.path],
    queryFn: async () => {
      const res = await fetch(api.campaigns.getHero.path, { credentials: "include" });
      if (!res.ok) {
        if (res.status === 404) return null;
        throw new Error("Failed to fetch hero campaign");
      }
      return api.campaigns.getHero.responses[200].parse(await res.json());
    },
  });
}
