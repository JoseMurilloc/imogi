import { api } from './api';

export const Emoji = {
  getCategories: async () => {
    try {
      const response = await api.get(`/categories`);

      return {
        data: response.data,
        ok: true,
      };
    } catch (error) {
      return {
        error,
        ok: false,
      };
    }
  },

  getEmojiFromCategory: async (category: string) => {
    try {
      const response = await api.get(`/categories/${category}`);

      return {
        data: response.data,
        ok: true,
      };
    } catch (error) {
      return {
        error,
        ok: false,
      };
    }
  },

  searchEmojis: async (searchTerm: string) => {
    try {
      const response = await api.get(`/emojis/?search=${searchTerm}`);

      return {
        data: response.data,
        ok: true,
      };
    } catch (error) {
      return {
        error,
        ok: false,
      };
    }
  },
};
