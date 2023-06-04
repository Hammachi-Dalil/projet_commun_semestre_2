migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k0g6eyvtu10z9ow")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fyagwh8s",
    "name": "joueur",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "lz0o7s6lq9vz7yc",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k0g6eyvtu10z9ow")

  // remove
  collection.schema.removeField("fyagwh8s")

  return dao.saveCollection(collection)
})
