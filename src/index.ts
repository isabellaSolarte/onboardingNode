import express from 'express';
import Server  from './models/server';
import dotenv from 'dotenv';

dotenv.config(); //se ejecuta el archivo .env
const server = new Server();
