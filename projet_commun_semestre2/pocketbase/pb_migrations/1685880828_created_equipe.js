migrate((db) => {
  const collection = new Collection({
    "id": "k0g6eyvtu10z9ow",
    "created": "2023-06-04 12:13:48.118Z",
    "updated": "2023-06-04 12:13:48.118Z",
    "name": "equipe",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kw0svner",
        "name": "nom",
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
        "id": "leo0f3mn",
        "name": "nombre_de_joueur",
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
  const collection = dao.findCollectionByNameOrId("k0g6eyvtu10z9ow");

  return dao.deleteCollection(collection);
})
