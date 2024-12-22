import fs from 'fs'
import path from 'path'
import { sql } from '@vercel/postgres'

async function runMigrations() {
  const migrationsDir = path.join(__dirname, 'migrations')
  const migrationFiles = fs.readdirSync(migrationsDir).sort()

  for (const file of migrationFiles) {
    const migration = require(path.join(migrationsDir, file))
    console.log(`Running migration: ${file}`)
    await migration.up()
    console.log(`Completed migration: ${file}`)
  }
}

runMigrations().catch(console.error)

