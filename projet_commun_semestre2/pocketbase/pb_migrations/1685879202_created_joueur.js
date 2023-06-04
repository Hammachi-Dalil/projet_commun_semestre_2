migrate((db) => {
  const collection = new Collection({
    "id": "lz0o7s6lq9vz7yc",
    "created": "2023-06-04 11:46:42.026Z",
    "updated": "2023-06-04 11:46:42.026Z",
    "name": "joueur",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ts4jxbfe",
        "name": "Nom",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "jigxau2u",
        "name": "Age",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lz0o7s6lq9vz7yc");

  return dao.deleteCollection(collection);
})
