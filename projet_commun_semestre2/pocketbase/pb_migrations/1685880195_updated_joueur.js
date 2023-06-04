migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lz0o7s6lq9vz7yc")

  // remove
  collection.schema.removeField("0romoyc8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ijwfmybv",
    "name": "post",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "attaquant",
        "milieu",
        "defenseur",
        "gardien"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lz0o7s6lq9vz7yc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0romoyc8",
    "name": "Post",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("ijwfmybv")

  return dao.saveCollection(collection)
})
