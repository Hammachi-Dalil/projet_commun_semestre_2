migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lz0o7s6lq9vz7yc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cw2xwi89",
    "name": "equipe",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "k0g6eyvtu10z9ow",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lz0o7s6lq9vz7yc")

  // remove
  collection.schema.removeField("cw2xwi89")

  return dao.saveCollection(collection)
})
