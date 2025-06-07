import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { uuidv7 } from 'uuidv7'

export const uploads = pgTable('uploads', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => uuidv7()), // generate a random uuid for the id
	name: text('name').notNull(),
	remoteKey: text('remote_key').notNull().unique(), // path to the file in the storage
	remoteUrl: text('remote_url').notNull(), // url to the file in the storage
	createdAt: timestamp('created_at').notNull().defaultNow(),
})
