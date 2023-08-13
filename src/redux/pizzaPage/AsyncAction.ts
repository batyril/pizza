import { createAsyncThunk } from '@reduxjs/toolkit';
import { pizzaService } from '../../service/pizzaService.ts';

export const fetchPizzaId = createAsyncThunk(
  'pizzaPage/fetchPizzaId',
  async (id: number) => {
    const { getPizzaById } = pizzaService();
    const { data } = await getPizzaById(id);
    return data;
  },
);
