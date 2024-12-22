import { createTables } from '../lib/db';

async function setup() {
  try {
    await createTables();
    console.log('Database tables created successfully');
  } catch (error) {
    console.error('Error setting up database:', error);
  }
}

setup();

