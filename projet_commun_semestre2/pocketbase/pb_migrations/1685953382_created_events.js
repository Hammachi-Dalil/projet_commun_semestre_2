migrate((db) => {
  const collection = new Collection({
    "id": "xjn93lx2qpu6lr6",
    "created": "2023-06-05 08:23:02.364Z",
    "updated": "2023-06-05 08:23:02.364Z",
    "name": "events",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "aggrvbxd",
        "name": "lieu",
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
        "id": "czjtholp",
        "name": "adresse",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("xjn93lx2qpu6lr6");

  return dao.deleteCollection(collection);
})
