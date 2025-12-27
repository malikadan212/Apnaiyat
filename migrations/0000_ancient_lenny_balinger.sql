CREATE TABLE `campaigns` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`raised_amount` text NOT NULL,
	`target_amount` text NOT NULL,
	`donor_count` integer NOT NULL,
	`percent_filled` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sessions` (
	`sid` text PRIMARY KEY NOT NULL,
	`sess` text NOT NULL,
	`expire` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `IDX_session_expire` ON `sessions` (`expire`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text,
	`first_name` text,
	`last_name` text,
	`profile_image_url` text,
	`password_hash` text,
	`created_at` integer,
	`updated_at` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);