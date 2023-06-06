migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xjn93lx2qpu6lr6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ehmrpw6x",
    "name": "Date",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xjn93lx2qpu6lr6")

  // remove
  collection.schema.removeField("ehmrpw6x")

  return dao.saveCollection(collection)
})
