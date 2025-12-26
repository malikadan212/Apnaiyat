import { z } from 'zod';
import { campaigns } from './schema';

export const api = {
  campaigns: {
    getHero: {
      method: 'GET' as const,
      path: '/api/campaigns/hero',
      responses: {
        200: z.custom<typeof campaigns.$inferSelect>(),
        404: z.object({ message: z.string() }),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
