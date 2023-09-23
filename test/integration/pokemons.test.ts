import request from 'supertest';
import express from 'express';
import { router as pokemonsRouter } from '../../src/routes/pokemons.router';
import { app } from '../../src/app';



describe('Pokemons Route', () => {

  beforeAll(() => {

  });

  describe('POST /pokemons', () => {
    it('should return a 400 error for invalid pokemon body', async () => {
      const pokemonData = {
        name: 'Pikachu',
        // missing required fields like type and base_experience
      };

      const response = await request(app).post('/pokemons').send(pokemonData);

      expect(response.status).toBe(400);
      expect(response.body.message).toBeDefined(); // Here we can further assert the exact message if needed
    });
  });
});
