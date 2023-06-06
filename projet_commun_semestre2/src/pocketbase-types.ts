/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Equipe = "equipe",
	Events = "events",
	Joueur = "joueur",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type EquipeRecord = {
	nom?: string
	nombre_de_joueur?: number
	joueur?: RecordIdString[]
}

export type EventsRecord = {
	lieu?: string
	adresse?: string
}

export enum JoueurPostOptions {
	"attaquant" = "attaquant",
	"milieu" = "milieu",
	"defenseur" = "defenseur",
	"gardien" = "gardien",
}
export type JoueurRecord = {
	Nom?: string
	Age?: number
	post?: JoueurPostOptions[]
	equipe?: RecordIdString[]
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type EquipeResponse<Texpand = unknown> = Required<EquipeRecord> & BaseSystemFields<Texpand>
export type EventsResponse = Required<EventsRecord> & BaseSystemFields
export type JoueurResponse<Texpand = unknown> = Required<JoueurRecord> & BaseSystemFields<Texpand>
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	equipe: EquipeRecord
	events: EventsRecord
	joueur: JoueurRecord
	users: UsersRecord
}

export type CollectionResponses = {
	equipe: EquipeResponse
	events: EventsResponse
	joueur: JoueurResponse
	users: UsersResponse
}